import express from "express";
import { SearchController } from "./search.controller.js";

const router = express.Router();

router.get("/dishes", SearchController.search);

export default router;
