import express from "express";
import routerProduct from "../src/router/user.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());

app.use("/api", routerProduct);

app.listen(process.env.PORT, () => {
  console.log(`Ứng Dụng Của Bạn Đang Chạy Trên Port: ${process.env.PORT}`);
});