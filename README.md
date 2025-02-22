# StoreAPI Backend

This project marks the beginning of studies on API development using Express in JavaScript. The project implements routes for user management (`/users`) and follows best practices by utilizing routers and repositories. PostgreSQL is used as the database, with environment variables for secure configuration.

## Project Objectives
- Develop a backend API with Express.
- Understand and apply the concept of routers for route organization.
- Implement CRUD operations for user management.
- Use PostgreSQL as the database with environment-based configuration.

## Features
- **Routes:**
  - `GET ('/users')`: Fetch all users.
  - `GET ('/users/:id')`: Fetch a user by ID.
  - `POST ('/users')`: Create a new user.
  - `DELETE ('/users/:id')`: Delete a user by ID.
  - `PUT ('/users/:id')`: Update a user by ID.
- **Repository Pattern:** Ensures separation between data logic and route handling.
- **Database Integration:** Uses PostgreSQL for data persistence.
- **Environment Variables:** Secure database connection configuration.

### Example Route Definition
```javascript
const express = require('express');
const router = express.Router();
const userRepository = require('../repositories/userRepository');

// Examples:
// Fetch all users
// Fetch user by ID
router
  .get("/", async (req, res) => {
    const result = await new UserRepository().getAll();
    res.status(200).send(result);
  })
  .get("/:id", async (req, res) => {
    const { id } = req.params;
    // const resultId = await new UserRepository().getById(id);
    const resultId = await new UserRepository().getById(id);
    res.status(200).send(resultId);
  })
  .post("/" ...
  .delete("/:id" ...
  .put("/:id" ...
  

module.exports = router;
```

## How to Run the Project
1. Clone the repository:
   ```bash
   git clone https://github.com/Lucas-I-Marciano/storeAPI_backend
   ```
2. Navigate to the project folder:
   ```bash
   cd storeAPI_backend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up the environment variables in a `.env` file:
   ```env
   DB_HOST=localhost
   DB_PORT=<your_port>
   DB_USER=<your_user>
   DB_PASSWORD=<your_secret>
   DB_DATABASE=<your_DB_name>
   ```
5. Start the server:
   ```bash
   npm start
   ```
6. Access the API at `http://localhost:4000/users`.

## Concepts Covered
### API Development
- Setting up an Express server.
- Creating and organizing routes with routers.

### CRUD Operations
- Implementation of create, read, update, and delete operations.

### Database Integration
- Connection to PostgreSQL using environment variables.
- Repository pattern for database operations.

## Author
[Lucas I. Marciano](https://github.com/Lucas-I-Marciano)

## License
This project is for educational purposes only and does not include a specific license.

