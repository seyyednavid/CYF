const express = require("express");
const cors = require("cors");
require("dotenv").config();
const pool = require("./db");

const port = process.env.PORT;
const app = express();
app.use(cors());
app.use(express.json());

app.get("/answers/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const answer = await pool.query("SELECT answer FROM answers WHERE id=$1", [
      id,
    ]);
    console.log(answer.rows.length);
    if (answer.rows.lenght === 0) {
      res.status(404).json({
        message: "there is no answer for this question",
      });
      return
    } 
    res.status(200).json(answer.rows[0]);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "something went wrong!",
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
