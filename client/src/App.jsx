import Header from "./components/header/Header"
import Home from "./components/home/Home"
import { Route, Routes } from "react-router-dom"
function App() {

  return (
    <div id="box">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>


    </div>
  )
}

export default App
