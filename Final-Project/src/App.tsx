// Using an online API of your choice, create a React project. You will be working on this for the next three weeks.
// Project must meet the following criteria:
// Use React Router and have at least 3 pages using React Bootstrap or an alternative styling library
// Contain at least 10 custom components
// Allow for all CRUD operations via one or more APIs
import "./App.css"
import AppNavbar from "./Components/Navbar.tsx"
import HomePage from "./Components/pages/HomePage.tsx"
import ReviewPage from "./Components/pages/ReviewPage.tsx"
import CharacterPage from "./Components/pages/CharacterPage.tsx"
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from "react"

export type Book = {
  price: number,
  id: number,
  bookTitle: string,
  author: string,
  year: number,
  coverImage : string,
  summary: string
}

export type characters = {
  id: number,
  name: string,
  image: string,
  description: string
}

export default function App() {
   
  return (
    <div className="app">
    
      <AppNavbar />

  
       <Routes>
        <Route path='/' element={ <HomePage />}/>
        <Route path= '/reviews' element={<ReviewPage />}/>
        <Route path= '/characters' element={ <CharacterPage />}/>
        </Routes> 
      

     <footer>
       <small>
         FE Final Project 2025
        
       </small>
     </footer>
  
    </div>
  )
}

