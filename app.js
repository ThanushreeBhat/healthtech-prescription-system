const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const fs = require("fs");
const db = require("./config/db");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const schema = fs.readFileSync("./database/schema.sql").toString();

db.exec(schema, (err) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log("Tables Created");
    }
});

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/prescriptions", require("./routes/prescriptionRoutes"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});