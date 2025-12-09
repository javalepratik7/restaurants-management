import { MenuRepository } from "../menu/menu.repository.js";
import { RestaurantRepository } from "../restaurants/restaurant.repository.js";

export const SearchService = {
  async searchByDish(dishName, minPrice, maxPrice) {
    const dishes = await MenuRepository.findDishInPriceRange(
      dishName,
      minPrice,
      maxPrice
    );

    const results = [];

    for (const dish of dishes) {
      const orderCount = await RestaurantRepository.getOrderCount(
        dish.restaurant_id,
        dish.menu_id
      );

      results.push({
        restaurantId: dish.restaurant_id,
        restaurantName: dish.restaurant_name,
        city: dish.city,
        dishName: dish.dish_name,
        dishPrice: dish.price,
        orderCount,
      });
    }

    return results
      .sort((a, b) => b.orderCount - a.orderCount)
      .slice(0, 10);
  }
};
