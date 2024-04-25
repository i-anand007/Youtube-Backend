// require('dotenv').config({path: './env'})
import connectDB from "./db/index.js";
import dotenv from "dotenv"
dotenv.config({
    path: './env'
})



connectDB()
.then(
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at Port - ${process.env.PORT}`)
    })
)
.catch((err) => {
    console.log("MONGO DB Connection Failed - ", err)
})



/*

import express from "express";
const app = express()

( async () => {
    try {
        await mongoose.connect(`${process.env.MONGOOSE_URL}/${DB_NAME}`)
        app.on("error", (error)=> {
            console.log("ERROR: ", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is working on port- ${process.env.PORT}`)
        })

    } catch (error) {
        console.error("ERROR -", error)
    }
})()

*/
