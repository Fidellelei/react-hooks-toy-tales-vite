# Toy Tales – React CRUD App

## Description

Toy Tales is a React application that allows users to manage a collection of toys. Users can view all toys, add new toys, like toys, and delete toys. The application connects to a backend API and implements full CRUD functionality using GET, POST, PATCH, and DELETE requests.

---

## Features

- View all toys on page load
- Add a new toy to the collection
- Like a toy (increase like count)
- Delete a toy (“Donate to GoodWill”)
- Full CRUD functionality connected to backend

---

## Technologies Used

- React (useState, useEffect)
- JavaScript (ES6+)
- Fetch API
- JSON Server (mock backend)
- HTML/CSS

---

## FULL SETUP + RUN STEPS (COPY ALL)

### 1. Clone repository
git clone https://github.com/Fidellelei/react-hooks-toy-tales-vite.git  
cd react-hooks-toy-tales-vite  

---

### 2. Install dependencies
npm install  

---

### 3. Start backend server (IMPORTANT)
npm run server  

Backend runs at:
http://localhost:3000/toys  

---

### 4. Start frontend
npm run dev  

Open browser:
http://localhost:5173  

---

## HOW THE APP WORKS

### GET (Display Toys)
- On page load, useEffect fetches toys from backend
- Toys are stored in state and rendered

### POST (Add Toy)
- Form submission sends POST request
- New toy is added to backend and UI updates instantly

### PATCH (Like Toy)
- Clicking Like button increases toy likes
- Sends PATCH request and updates state

### DELETE (Donate Toy)
- Clicking Donate button removes toy
- Sends DELETE request and updates state

---

## PROJECT STRUCTURE

src/  
├── App.jsx  
├── Header.jsx  
├── ToyContainer.jsx  
├── ToyCard.jsx  
├── ToyForm.jsx  

---

## TESTING

Run tests:
npm run test  

Expected results:
✔ Displays all toys  
✔ Creates new toy  
✔ Likes toy  
✔ Deletes toy  

---

## GIT WORKFLOW (SUBMISSION)

git add .  
git commit -m "complete Toy Tales CRUD app"  
git push origin main  

---

## TROUBLESHOOTING

If app does not load:

- Ensure backend is running (npm run server)
- Ensure correct URL: http://localhost:3000/toys
- Restart dev server (npm run dev)

If tests fail:
- Check button text matches exactly
- Check placeholders match exactly
- Ensure data-testid="toy-card" exists in ToyCard

---

## STATUS

✔ GET working  
✔ POST working  
✔ PATCH working  
✔ DELETE working  
✔ All tests passing  
✔ Backend connected  

---

## AUTHOR

Fidel Lelei