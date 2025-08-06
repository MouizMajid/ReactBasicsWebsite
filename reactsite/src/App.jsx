import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MovieCard from './components/MovieCard'
import Home from './pages/Home'
import Favs from './pages/Favs'
import {Routes, Route} from "react-router-dom"
import NavBar from "./components/NavBar";



function App() {

  return (

    <div>
      <NavBar/>
    <main className='main-content'>
      <Routes>
        <Route path= "/" element = {<Home/>}></Route>
        <Route path= "/favorites" element = {<Favs/>}></Route>
      </Routes>
    </main>
    </div>
  )
}

export default App
