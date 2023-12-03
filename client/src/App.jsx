import GameCreate from "./components/game-create/GameCreate"
import GameList from "./components/game-list/GameList"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import { Route, Routes } from "react-router-dom"
function App() {

  return (
    <div id="box">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/games" element={<GameList/>}></Route>
        <Route path="/games/create" element={<GameCreate />}></Route>


      </Routes>


    </div>
  )
}

export default App
