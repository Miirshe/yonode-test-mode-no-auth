import { EntitySchema } from "typeorm";

export const User = new EntitySchema({
  name: "User",
  tableName: "users",
  columns: {
    id: {
      primary: true,
      type: "mongodb-object-id",
      objectId: true,
    },
    name : {
      type : "string",
    },
    email : {
      type : "string",
      unique : true,
    }
  },
});
