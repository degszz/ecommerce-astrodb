
import { defineDb, defineTable, column } from 'astro:db';

const Envio = defineTable({
  columns: {
    id:column.number({ primaryKey: true }),
    userId: column.text(),
    shirtId: column.text(),
    envioId: column.text(),
    envioAt: column.date(),
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
