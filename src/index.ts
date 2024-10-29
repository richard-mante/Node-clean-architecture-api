import express from "express";
import { ErrorHandler } from "./interfaces/middlewares/ErrorHandler";
import { carRoutes } from "./interfaces/routes/CarRoutes";

const app = express();

app.use(express.json());
app.use("/api", carRoutes);
app.use(ErrorHandler);

app.get("/", (req, res) => {
  res.json("Api works! hihi");
});

const PORT = 4500;
app.listen(PORT, () => {
  console.log(`❤️😁 server runing on http://localhost:${PORT}`);
});
