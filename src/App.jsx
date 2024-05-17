import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import "./index.css";
import Register from "./components/Register";
import Login from "./components/Login";
import Notfound from "./components/Notfound";

function App() {
 

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='*' element={<Notfound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
