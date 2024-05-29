
import { defineDb, defineTable, column } from 'astro:db';


const User = defineTable({
  columns:{
    id:column.text({primaryKey:true, optional:false, unique:true,}),
    username:column.text({optional:false, unique:true,}),
    password:column.text(),
  }
})

const Session = defineTable({
  columns:{
    id:column.text({primaryKey:true, optional:false, unique:true,}),
    userId:column.text({optional:false, references: ()=> User.columns.id}),
    expiresAt: column.number({optional:false})
  }
})

const Envio = defineTable({
  columns: {
    user_id: column.text({ primaryKey: true, references: () => User.columns.id }),
    postalCode: column.number(),
    location: column.text(),
    address: column.text(),
  },
});

const Shirts = defineTable({
  columns: {
    id: column.text({ unique: true, primaryKey: true }),
    name: column.text(),
    image: column.text(),
    cantity: column.number(),
    price: column.text(),
  },
});

export default defineDb({
  tables: {
    User,
    Session,
    Envio,
    Shirts
  }
});
