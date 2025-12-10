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
      WHERE m.dish_name ILIKE $1
      AND m.price BETWEEN $2 AND $3
      ORDER BY m.price ASC
    `;

    const values = [`%${dishName}%`, minPrice, maxPrice];
    const result = await pool.query(query, values);
    return result.rows;
  },

  async getAll() {
    const query = `SELECT * FROM menu_items ORDER BY id ASC`;
    const result = await pool.query(query);
    return result.rows;
  }
};
