import { EntitySchema } from "typeorm";

export const User = new EntitySchema({
  name: "User",
  tableName: "users",
  columns: {
    id: {
      primary: true,
      type: "int", // Use "serial" for auto-incrementing integer in PostgreSQL
    },
    name: {
      type: "varchar", // Change "string" to "varchar"
    },
    email: {
      type: "varchar", // Change "string" to "varchar"
      unique: true,
    },
  },
});
