import express from "express";
import searchRoutes from "./modules/search/search.routes.js";
import { errorHandler } from "./core/errors/errorHandler.js";

const app = express();
app.use(express.json());

app.use("/search", searchRoutes);

app.use(errorHandler);

export default app;
