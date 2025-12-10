---

# 🍽️ Restaurant Search Service (Node.js + MySQL)

A simple backend service that allows users to search for restaurants based on a **dish name** and **mandatory price range**.
The service returns the **top restaurants** where the dish has been ordered the most.

---

## 🚀 Live API URL

### **Base URL**

```
https://restaurants-management-p281.vercel.app
```

### **Sample API Request**

```
/search/dishes?name=biryani&minPrice=150&maxPrice=300
```

### **cURL Example**

```bash
curl --location 'https://restaurants-management-p281.vercel.app/search/dishes?name=biryani&minPrice=150&maxPrice=300' \
--header 'Content-Type: application/json'
```

---

## 📂 GitHub Repository

[https://github.com/javalepratik7/restaurants-management.git](https://github.com/javalepratik7/restaurants-management.git)

---

## 📘 Project Overview

The system stores:

* Restaurants
* Menu items
* Orders placed (each order contains only one item for simplicity)

When the user searches for a dish:

* Return **top 10 restaurants** where that dish is ordered the most.
* Apply a mandatory **price range filter**.
* Each restaurant entry includes:

  * Restaurant details
  * Dish name
  * Dish price
  * Total order count for that dish in that restaurant

---

## 📑 Expected Response Format

```json
{
  "restaurants": [
    {
      "restaurantId": 5,
      "restaurantName": "Hyderabadi Spice House",
      "city": "Hyderabad",
      "dishName": "Chicken Biryani",
      "dishPrice": 220,
      "orderCount": 96
    }
  ]
}
```

---

## 🛠️ Tech Stack

* **Node.js**
* **Express.js**
* **MySQL** (Relational database)
* **SQL Joins & Aggregations**
* Deployed on **Vercel**

---

## 📊 Database Schema

### **restaurants**

| Column | Type    |
| ------ | ------- |
| id     | INT PK  |
| name   | VARCHAR |
| city   | VARCHAR |

### **menu_items**

| Column        | Type    |
| ------------- | ------- |
| id            | INT PK  |
| restaurant_id | INT FK  |
| dish_name     | VARCHAR |
| price         | DECIMAL |

### **orders**

| Column       | Type   |
| ------------ | ------ |
| id           | INT PK |
| menu_item_id | INT FK |

---

## 🧪 Seed Data

A seed SQL file is included in the project to populate:

* Sample restaurants
* Menu items
* Orders

Run the seed after setting up the database.

---

## ⚙️ Setup Instructions

### **1. Clone the Repository**

```bash
git clone https://github.com/javalepratik7/restaurants-management.git
cd restaurants-management
```

### **2. Install Dependencies**

```bash
npm install
```


## 3 🔧 Environment Variables (.env)

Create a `.env` file in the project root and add the following:

```
DATABASE_URL="postgresql://postgres:cwvBhTvZIVyMhvKnEAIECidfgDAJWbGz@maglev.proxy.rlwy.net:51209/railway"
PORT=5000
```

This project uses a **PostgreSQL database hosted on Railway**, connected through the `DATABASE_URL`.


### **4. Import Seed Data**

```bash
mysql -u root -p restaurants_db < seed.sql
```

### **5. Start the Server**

```bash
npm start
```

Server will run at:

```
http://localhost:3000
```

---

## 🔍 API Details

### **GET /search/dishes**

Search restaurants by dish name with a mandatory price range.

#### Query Parameters:

| Name     | Required | Description   |
| -------- | -------- | ------------- |
| name     | Yes      | Dish name     |
| minPrice | Yes      | Minimum price |
| maxPrice | Yes      | Maximum price |

#### Example Request:

```
/search/dishes?name=biryani&minPrice=150&maxPrice=300
```

---

## 📦 Deployment

The backend is deployed on **Vercel**.

Live API:

```
https://restaurants-management-p281.vercel.app
```

---

## 🙌 Notes

✔️ Clean and structured Node.js + SQL code
✔️ Single API implementation as required
✔️ Fully working live deployment
✔️ Repository publicly accessible for review

---
