import express from "express";
const router = express.router();
router.get("/", (rq, res) => res.send("welcome to the lab router"));
export default rooter;
import express from "express";
const app = express();
const port = process.env.port || 8000;
app.get("/", (req, res) => {
  res.send("welcome to the server - Get");
});
app.get("/", (req, res) => {
  res.send("welcome to the server  - Post");
});
app.get("/", (req, res) => {
  res.send("welcome to the server - Delete");
});
app.listen(port, () => {});
