import { useState } from 'react'
import './css/App.css'
import MovieCard from './components/MovieCard'
import Home from './pages/Home'
import Favs from './pages/Favs'
import {Routes, Route} from "react-router-dom"
import { MovieProvider } from './contexts/MovieContext'
import NavBar from "./components/NavBar";



function App() {

  return (

    <MovieProvider>
      <NavBar/>
    <main className='main-content'>
      <Routes>
        <Route path= "/" element = {<Home/>}></Route>
        <Route path= "/favorites" element = {<Favs/>}></Route>
      </Routes>
    </main>
    </MovieProvider>
  )
}

export default App
