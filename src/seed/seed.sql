CREATE TABLE restaurants (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    city VARCHAR(100)
);

CREATE TABLE menu_items (
    id SERIAL PRIMARY KEY,
    restaurant_id INT REFERENCES restaurants(id),
    dish_name VARCHAR(100),
    price INT
);

CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    restaurant_id INT REFERENCES restaurants(id),
    menu_id INT REFERENCES menu_items(id)
);

INSERT INTO restaurants (name, city) VALUES
('Hyderabadi Spice House', 'Hyderabad'),
('Biryani Palace', 'Bangalore');

INSERT INTO menu_items (restaurant_id, dish_name, price) VALUES
(1, 'Chicken Biryani', 220),
(1, 'Veg Biryani', 180),
(2, 'Chicken Biryani', 250);

INSERT INTO orders (restaurant_id, menu_id)
SELECT 1, 1 FROM generate_series(1, 96);
