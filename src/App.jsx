import React, {useState} from "react";
import NavBar from "./components/Navbar.jsx";
import SideBar from "./components/SideBar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/AboutUs.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import Home from "./pages/Home.jsx";
import CompletedTasksPage from "./pages/CompletedTasks.jsx";

function App() {
  const [todoList, setTodoList] = useState([
          {id: Date.now(), title: "Complete React project", isCompleted: false}
      ]);

  return (
    <>
      <NavBar />
      <div className="main-container flex flex-row w-screen h-screen">
        <SideBar />
        <Routes className="w-full h-full">
          <Route path="/" element={<Home todoList={todoList} setTodoList={setTodoList} />} />
          <Route path="/completed" element={<CompletedTasksPage todoList={todoList} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact_us" element={<ContactUs />} />
        </Routes>
      </div>
    </>
  )
}

export default App
