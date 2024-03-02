// import the packages
import express from "express";

//import your files
import { port } from "./config/initial.config.js";
import chalk from "chalk";
import user_route from "./routes/user.router.js";

// Initializing the app
const app = express();

// rest of your code here
app.use(express.json());
app.use('/api/users', user_route)

app.listen(port, () => {
  console.log(`${chalk.green.bold("Server")} is listening on port ${port}`);
});
