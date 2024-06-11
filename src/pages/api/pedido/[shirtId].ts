import type { APIRoute } from "astro";
import { getSession } from "auth-astro/server";
import { createHash } from "node:crypto"
import { getCollection } from "astro:content";
const shirt = await getCollection("shirts");

const generateId = (str: string) => {
    return createHash("sha256").update(str).digest("hex")
}

const res = (body: string, { status, statusText }: { status?: number; statusText?: string }) => new Response(body, { status, statusText })
export const POST: APIRoute = async ({ params, request }) => {
    const session = await getSession(request)

    if (!session || session?.user == null) {
        return new Response("Unauthorized", { status: 401 })
    }

    console.log(session.user.id)

    const { shirtId } = params
    if (!shirtId) return res("Shirt is Required", { status: 400 })

    const shirtData = shirt.find(c => c.id === shirtId)
    if (!shirtData) return res("Shirt not found", { status: 404 })
    
    const userId = generateId(session.user.id)

    const newId = `${userId}-${shirtId}`
    const envio = {id: newId, userId, shirtId} 

    return new Response("Hello World", { status: 200 })
};