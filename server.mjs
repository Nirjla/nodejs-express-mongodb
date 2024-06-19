import express from "express";
import cors from "cors"
import db from "./app/models/index.mjs";
const app = express();

app.use(cors())

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

db.mongoose.connect(db.url).then(() => {
      console.log("Connected to the database")
}).catch(err => {
      console.log("Cannot connect to the database!", err);
})

app.get("/", (req, res) => {
      res.json({ message: "Welcome to nirjla's api" })
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
})


