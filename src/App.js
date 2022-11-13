import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}></Route>
        <Route  path='/login' element={<Login />}></Route>
        <Route path='/users'>
          <Route index element={<List/>}/>
          <Route path=":userId" element={<Single/>}/>
          <Route path="new" element={<New/>}/>
        </Route>
        <Route path='/products'>
          <Route index element={<List/>}/>
          <Route path=":productsId" element={<Single/>}/>
          <Route path="new" element={<New/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
