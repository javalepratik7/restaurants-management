import pool from "../../config/db.js";

export const RestaurantRepository = {
  async getOrderCount(restaurantId, menuId) {
    const result = await pool.query(
      `
      SELECT COUNT(*) AS order_count 
      FROM orders 
      WHERE restaurant_id = $1 AND menu_id = $2
      `,
      [restaurantId, menuId]
    );

    return Number(result.rows[0].order_count);
  }
};
