import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Page404 } from "./pages/Page404/Page404";
import { Projects } from "./pages/Projects/Projects";


function AppRoutes() {

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/Projects" element={<Projects />}></Route>
                <Route path="*" element={<Page404 />}></Route>
            </Routes>
        </BrowserRouter>
    )

}

export default AppRoutes;