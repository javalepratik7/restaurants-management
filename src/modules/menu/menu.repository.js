import pool from "../../config/db.js";

export const MenuRepository = {
  async findDishInPriceRange(dishName, minPrice, maxPrice) {
    const query = `
      SELECT 
        m.id AS menu_id,
        m.dish_name,
        m.price,
        r.id AS restaurant_id,
        r.name AS restaurant_name,
        r.city
      FROM menu_items m
      JOIN restaurants r ON r.id = m.restaurant_id
      WHERE LOWER(m.dish_name) LIKE LOWER($1)
      AND m.price BETWEEN $2 AND $3
    `;

    const values = [`%${dishName}%`, minPrice, maxPrice];
    const result = await pool.query(query, values);
    return result.rows;
  }
};
