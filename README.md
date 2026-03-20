# PRODIGY_BD_01

## Task 1: Users API (In-Memory)

This project is a simple **RESTful API** for managing users.  
All data is stored **in-memory**, meaning it resets whenever the server restarts. Think of it as a lightweight way to practice APIs without a database.

### Built With
- **Node.js** – JavaScript runtime
- **Express.js** – Web framework
- **UUID** – For unique user IDs

---

## What You Can Do

This API supports the full **CRUD** operations:

- **Create** a user  
- **Read** all users or a single user by ID  
- **Update** a user  
- **Delete** a user  

Each user has these fields:

- `id` – automatically generated UUID  
- `name` – a string, required  
- `email` – must be a valid email  
- `age` – must be a positive number  

The API validates input and uses proper HTTP status codes for success and errors.

---

## How to Run

### 1. Clone the repo

git clone https://github.com/Chethana-Gopalakrishna/PRODIGY_BD_01.git
cd PRODIGY_BD_01

### 2. Install dependencies
npm install

### 3. Start the server
node index.js

The server will be running at: `http://localhost:3000`

---

## API Endpoints

| Method | Endpoint    | What it does              |
|--------|------------|--------------------------|
| POST   | /users     | Create a new user        |
| GET    | /users     | Get all users            |
| GET    | /users/:id | Get a user by ID         |
| PUT    | /users/:id | Update a user by ID      |
| DELETE | /users/:id | Delete a user by ID      |

---

## Notes

- Because the data is in-memory, **everything disappears when the server restarts**.  
- UUIDs ensure each user has a unique ID.  
- This is a great starting point for learning REST APIs and Node.js.

---

## Author

Chethana Gopalakrishna
