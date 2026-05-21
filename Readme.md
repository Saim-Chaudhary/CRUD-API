### 1. Clone Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_LINK
```

### 2. Move into Project Folder

```bash
cd crud-api
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Create .env File

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

### 5. Run Server

```bash
npm run dev
```

Server will run on:

```bash
http://localhost:5000
```


### Folder Structure

```
CURD-API
├─ config
│  └─ db.js
├─ Controllers
│  └─ productController.js
├─ routes
│  └─ productRoutes.js
├─ models
│  └─ Product.js
├─ package-lock.json
├─ package.json
├─ Readme.md
└─ server.js

```