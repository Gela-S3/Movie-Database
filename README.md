# 🎬 Movie Search App (React + OMDB API)

A responsive and interactive movie search application built with **React.js**, **Axios**, and the **OMDB API**.  
Users can search for movies, explore detailed information, and navigate between search results with smooth pagination and back navigation.

---

## 🚀 Features

- 🔍 **Search Movies** by title using the OMDB API  
- 📄 **View Detailed Information** about each movie (plot, rating, country, year, etc.)  
- 📑 **Pagination** — browse multiple pages of search results  
- 🔙 **Back to Search Results** — return to the same search page and keyword after viewing a single movie  
- ⚡ **Responsive Design** — optimized for desktop and mobile screens  
- 💾 **Preserved State** — keeps your search keyword and pagination state when returning from movie details  

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-------------|----------|
| **React.js (Vite or CRA)** | Frontend framework |
| **Axios** | For fetching data from OMDB API |
| **React Router DOM** | Routing between search and single movie pages |
| **Bootstrap / Custom CSS** | Responsive UI styling |
| **OMDB API** | Movie database API |

---

## 🧩 Project Structure

public/
├── assets/                # Images, logos, icons
src/
├── component/
│   ├── Home.jsx            # Search and pagination page
│   ├── Navbar.jsx          # Navigation bar
│   ├── Single.jsx          # Movie detail page
├── App.jsx                 # Main app routes
├── App.css                 # Global styles
├── main.jsx                # React DOM rendering entry point

.gitignore
package.json
package-lock.json
postcss.config.js
README.md
index.html


---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Gela-S3/Movie-Database.git
cd Movie-Database
```

### 2️⃣ Install Dependencies

npm install

### 3️⃣ Run the App

npm run dev

### 4️⃣ Open in Browser

http://localhost:5173

## 🧠 Core Functionalities
 
 ### 🔹 Search Page (Home.jsx)

    Fetches movies from OMDB API using search keyword & page number

    Displays movie cards dynamically

    Includes pagination (Next / Previous buttons)

    Passes search context (keyword, page) to Single page

### 🔹 Single Movie Page (Single.jsx)

    Fetches detailed movie data using IMDb ID

    Displays movie poster, plot, rating, country, etc.

    Includes Back to Search Results button that restores the user’s previous search & pagination state

### 💡 Future Improvements

    🎞️ Add “Favorite Movies” list (stored locally or via backend)

    🔎 Add filter by year, genre, or type

    🌙 Add dark/light theme toggle

    🧭 Add infinite scrolling instead of pagination

    💬 Add user reviews integration


### 🧑‍💻 Author

#### Gelagay Getahun(Backend & Frontend Developer)
#####    📧 gela.sirta3@gmail.com
#####    🐙 https://github.com/Gela-S3