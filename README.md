# 💖 Affection API

Affection API is the backend service for a modern dating application. It provides secure and scalable RESTful APIs for user authentication, profile management, matching, and chat support. Built with Node.js, Express.js, and MongoDB, this backend is designed for flexibility, scalability, and quick iteration.

---

## 🛠 Tech Stack

- **Node.js** – Runtime environment
- **Express.js** – Web framework
- **MongoDB** – NoSQL database
- **Mongoose** – ODM for MongoDB
- **JWT** – Token-based authentication
- **dotenv** – Environment configuration
- **bcrypt** – Password hashing
- **REST Client** – Local testing via `request.rest`

---

## 📁 Project Structure

```
affection-api/
├── db/              # Database connection and config
├── models/          # Mongoose schemas (User, Interest, etc.)
├── routes/          # Express route controllers (auth, users, swipes)
├── request.rest     # REST client test file
├── .gitignore
├── package.json
├── server.js        # App entry point
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/anujsharma11098/affection-api.git
cd affection-api
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup your environment variables

Create a `.env` file in the root:

```
PORT=5000
MONGO_URI=your_mongo_uri
JWT_SECRET=your_jwt_secret
```

### 4. Start the server
```bash
npm start
```

Visit: `http://localhost:5000`

---

## 🧠 Core Features

- 🔐 JWT-based user registration and login
- 👤 User profile creation and updates
- 💘 Swipe & match logic
- 💬 Chat and messaging endpoints (basic)
- 🔎 Discover users based on interests
- 🔄 RESTful API architecture

---

## 📬 API Overview

> Full logic inside `routes/`. Here are a few available endpoints:

| Method | Endpoint            | Description                 |
|--------|---------------------|-----------------------------|
| POST   | /api/auth/register  | Register new user           |
| POST   | /api/auth/login     | Authenticate user           |
| GET    | /api/users/:id      | Get a user profile          |
| PUT    | /api/users/:id      | Update user profile         |
| POST   | /api/swipe          | Like/swipe on a user        |
| GET    | /api/matches        | List matched users          |

---

## 🧪 Testing the API

You can test your APIs locally using `request.rest` in VS Code.

### Recommended:
Install [REST Client Extension](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) for one-click request testing.

---

## ✅ To-Do / Roadmap

- [ ] Role-based access control
- [ ] Admin dashboard routes
- [ ] Enhanced chat system (WebSocket)
- [ ] Media upload for profiles (AWS S3 / Cloudinary)
- [ ] Email/password verification
- [ ] Push notifications

---

## 🙌 Contributing

Want to help build the next big thing in dating apps?  
Feel free to fork the repo, open issues, and create pull requests.

---

## 👨‍💻 Author

**Anuj Sharma**  
📧 anujsharma011098@gmail.com  
🔗 [LinkedIn](https://linkedin.com/in/anuj-sharma-11098)  
🐙 [GitHub](https://github.com/anujsharma11098)

---

## 📄 License

MIT License
