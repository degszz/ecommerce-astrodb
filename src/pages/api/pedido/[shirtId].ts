import type { APIRoute } from "astro";
import { getSession } from "auth-astro/server";
import { createHash } from "node:crypto"
import {object, safeParse, string} from 'valibot'
import { db, Envio, NOW } from "astro:db";

import { SHIRTS } from "@/conts/shirts";

//transformar a objeto 
const EnvioSchema = object({
    shirtId: string(),
    envioId: string(),

})

//autoincrement ID
const generateId = (str: string) => {    
    return createHash("sha256").update(str).digest("hex")
}
//res para no estar nombrando RESPONSE
const res = (body: string, { status, statusText }: { status?: number; statusText?: string }) => new Response(body, { status, statusText })

//POST
export const POST: APIRoute = async ({ params, request }) => {

    //si no tiene !session status 401
    const session = await getSession(request)
    if (!session || session?.user == null) {
        return res("Unauthorized", { status: 401 })
    }

    //si no selecciono una remera 
    const { shirtId } = params
    if (!shirtId) return res("Shirt is Required", { status: 400 })

    //si la remera que selecciono existe
    const shirtData = SHIRTS.find(c => c.id === shirtId)
    if (!shirtData) return res("Shirt not found", { status: 404 })
    
    const {success, output} = safeParse(EnvioSchema, await request.json()) 
    if (!success) return res("Bad request", {status:400})

    const { envioId } = output

    const userId = generateId(session.user.id)
    const envioAt = NOW

    const newId = `${userId}-${shirtId}`
    const envio = {id: newId, userId, envioId, shirtId, envioAt }  
    try{
        await db.insert(Envio).values(envio).onConflictDoUpdate({
            target: Envio.id,
            set:{
                userId,
                shirtId,
                envioId,
                envioAt,
            }
        })

    }

    return new Response("Hello World", { status: 200 })
};