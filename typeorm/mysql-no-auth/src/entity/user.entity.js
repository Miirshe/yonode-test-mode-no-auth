import { EntitySchema } from "typeorm";

export const User = new EntitySchema({
  name: "User",
  tableName: "users",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true, // Assuming it's auto-generated
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
