import { SearchService } from "./search.service.js";
import { ApiError } from "../../core/errors/ApiError.js";
import { validatePrice } from "../../core/utils/validator.js";

export const SearchController = {
  async search(req, res, next) {
    try {
      const { name, minPrice, maxPrice } = req.query;

      if (!name) throw new ApiError(400, "Dish name is required");
      if (!validatePrice(minPrice, maxPrice))
        throw new ApiError(400, "Valid price range required");

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
