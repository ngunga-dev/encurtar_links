import { BrowserRouter,Routes,Route } from "react-router-dom"; 

import Home from "./pages/Home";
import Links from "./pages/Links";

import Error from "./pages/Error";
function RoutesApp(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home></Home>}/>
            <Route path="/links" element={<Links></Links>}/>
            <Route path="*" element={<Error></Error>}/>
        </Routes>
        </BrowserRouter>
    )
}
export default RoutesApp;