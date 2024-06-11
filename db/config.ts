
import { defineDb, defineTable, column } from 'astro:db';



const Envio = defineTable({
  columns: {
    userId: column.text({ primaryKey: true }),
    shirtId: column.text(),
    postalCode: column.number(),
    location: column.text(),
    address: column.text(),
  },
});

export default defineDb({
  tables: {
    Envio,
  }
});
