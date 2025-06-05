import express from 'express'
import { Request, Response, NextFunction } from 'express'
import "express-async-errors"
import { routes } from './routes/routes'
import dotenv from "dotenv"
const cors = require("cors")


const app = express()
app.use(cors());
app.use(express.json())
app.use(routes)


app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
        return response.status(400).json({
            message: err.message
        })
    }

    return response.status(500).json({
        status: "error",
        message: "Internal server error"
    })
})

dotenv.config()
const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
