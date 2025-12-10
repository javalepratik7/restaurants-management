import { SearchService } from "./search.service.js";
import { ApiError } from "../../core/errors/ApiError.js";
import { validatePrice } from "../../core/utils/validator.js";

export const SearchController = {
  async search(req, res, next) {
    try {
      const { name, minPrice, maxPrice } = req.query;

      if (!name) {
        res.json({message:"name is required"})
      }
      if (!validatePrice(minPrice, maxPrice)) {
        res.json({message:"Valid price range required"})
      }

      const results = await SearchService.searchByDish(
        name,
        Number(minPrice),
        Number(maxPrice)
      );

      res.json({ restaurants: results });
    } catch (err) {
      next(err);
    }
  },
};
