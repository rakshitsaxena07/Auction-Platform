import { config } from "dotenv";
config({ path: "./config/config.env" });
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import { connection } from "./database/connection.js";
import { errorMiddleware } from "./middlewares/error.js";
import userRouter from "./router/userRouter.js";
import auctionItemRoutes from "./router/auctionItemRoutes.js";
import bidRouter from "./router/bidRoutes.js";
import comissionRouter from "./router/comissionRouter.js";
import superAdminRouter from "./router/superAdminRoutes.js";

const app = express();

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/auctionitem", auctionItemRoutes);
app.use("/api/v1/bid", bidRouter);
app.use("/api/v1/comission", comissionRouter);
app.use("/api/v1/superadmin", superAdminRouter);
connection();
app.use(errorMiddleware);
export default app;
