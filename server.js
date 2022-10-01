const express = require("express");
const app = express();

app.use(express.json());

const userRouter = require("./routes/users");

app.get("/", (req, res) => {
  res.send("halo kamu bjorka?");
});

app.use("/users", userRouter);

const PORT = 1001;

//listen untuk mengecek||mendengarkan jalan di port berapa
app.listen(PORT, () => {
  console.log(`ruuning on port ${PORT}`);
});
