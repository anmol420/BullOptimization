import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

app.use(express.json({
    limit: "16kb"
}));

app.use(express.urlencoded({
    extended: true,
    limit: "16kb"
}));

app.use(cookieParser());

// DEFAULT ROUTE
app.get("/", (_req, res) => {
    res.send("Welcome to the Assemble API");
});

// HEALTH CHECK ROUTE
import healthRouter from "./routes/healthcheck.routes.js";
app.use("/api/v1", healthRouter);

// USER ROUTE
import userRouter from "./routes/user.routes.js";
app.use("/api/v1/users", userRouter);

// GAME ID ROUTE
import gameRouter from "./routes/games.routes.js";
app.use("/api/v1/users/games", gameRouter);

export default app;