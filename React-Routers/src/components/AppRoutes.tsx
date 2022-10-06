import { Routes } from "react-router-dom"
import { Route, BrowserRouter as Router, Link } from 'react-router-dom'
import { Equipes } from "../pages/Equipes"
import { Home } from "../pages/Home"
import { Jogadores } from "../pages/Jogadores"


export const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/equipes' element={<Equipes />} />
        <Route path='/jogadores' element={<Jogadores />} />
    </Routes>
  )
}