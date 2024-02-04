import express from "express";

const app = express();


app.use(express.json());

app.get('/user/:userId', (req, res, next) => {
  console.log("🚀 ~ app.get ~ req:", req.params.userId)
  console.log('/hello - called');
  return res.send("Hello")
})
app.listen(5001, () => console.log('Server Open'))