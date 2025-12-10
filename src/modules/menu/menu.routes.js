import express from "express";
import { MenuRepository } from "./menu.repository.js";

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const items = await MenuRepository.getAll();
    res.json({ success: true, data: items });
  } catch (err) {
    next(err);
  }
});

export default router;
