import express from "express";
import searchRoutes from "./modules/search/search.routes.js";
import menuRoutes from "./modules/menu/menu.routes.js";
import { errorHandler } from "./core/errors/errorHandler.js";

const app = express();
app.use(express.json());

app.use("/search", searchRoutes);
app.use("/menu", menuRoutes);


app.use(errorHandler);

export default app;
