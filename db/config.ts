
import { defineDb, defineTable, column } from 'astro:db';


const User = defineTable({
  columns: {
    email: column.text({ unique: true, primaryKey: true }),
    name: column.text(),
    lastname: column.text(),
  },
});

const Envio = defineTable({
  columns: {
    user_id: column.text({ primaryKey: true, references: () => User.columns.email }),
    postalCode: column.number(),
    location: column.text(),
    address: column.text(),
  },
});

export default defineDb({
  tables: {
    User,
    Envio
  }
});
