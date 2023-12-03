import GameCreate from "./components/game-create/GameCreate"
import GameList from "./components/game-list/GameList"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import { Route, Routes } from "react-router-dom"
import Login from "./components/login/Login"
import Register from "./components/register/Register"
import GameDetails from "./components/game-details/GameDetails"
function App() {

  return (
    <div id="box">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/games" element={<GameList/>}></Route>
        <Route path="/games/create" element={<GameCreate />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/games/:gameId" element={<GameDetails />}></Route>


      </Routes>


    </div>
  )
}

export default App
