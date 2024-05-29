import { db, Shirts } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(Shirts).values([
		{
			id:"1",
			name:"Pur0Hueso",			
			image:"/h.png", 
			cantity:1, 
			price:"$$$", 
		},
		{
			id:"2",
			name:"0pium",			
			image:"/opium.png", 
			cantity:1, 
			price:"$$$", 
		},
		{
			id:"3",
			name:"3",			
			image:"/333.png", 
			cantity:1, 
			price:"$$$", 
		}
	])
}
