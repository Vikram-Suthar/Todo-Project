import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import Connection from "./database/db.js";
import Routes from "./routes/route.js";

const app = express();
dotenv.config({
    path: "./.env"
});
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", Routes);
const PORT = process.env.PORT || 8000;

Connection();

app.listen(PORT, () => console.log(`Your server is running Successfully on port : ${PORT}`));












