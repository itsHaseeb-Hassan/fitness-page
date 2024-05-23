import React from "react"
import { Routes,Route } from "react-router-dom"
import HomePage from "./screen/HomePage"
function App() {

  return (
    <>
    <Routes>
      <Route exact path="/" element={<HomePage />} />
    </Routes>
    </>
  )
}

export default App
