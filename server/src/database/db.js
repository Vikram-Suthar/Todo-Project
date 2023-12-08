import mongoose from "mongoose";

const Connection = async () => {
    const URL = process.env.URL;
    mongoose.connect(URL);

    mongoose.connection.on("connected", () => {
        console.log("Database Connected Successfully");
    })

    mongoose.connection.on("disconnected", () => {
        console.log("Database Disconnected");
    })

    mongoose.connection.on("error", () => {
        console.log("Error while connecting with the Database", error.message);
    })
}

export default Connection;