import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Register from "./pages/auth/Register.jsx";
import Login from "./pages/auth/Login.jsx";
import Logout from "./pages/auth/Logout.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import TacheIndex from "./pages/taches/tacheIndex.jsx";
import TacheShow from "./pages/taches/tacheShow.jsx";
import TacheFormPage from "./pages/taches/tacheForm.jsx";
import CategorieIndex from "./pages/categories/categorieIndex.jsx";
import CategorieShow from "./pages/categories/categorieShow.jsx";
import CategorieFormPage from "./pages/categories/categorieForm.jsx";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/logout" element={<Logout/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route element={<PrivateRoute><Layout/></PrivateRoute>}>
                    <Route
                        path="/"
                        element={
                            <TacheIndex/>
                        }
                    />
                    <Route
                        path="/taches"
                        element={
                            <TacheIndex/>
                        }
                    />
                    <Route
                        path="/taches/create"
                        element={
                            <TacheFormPage/>
                        }
                    />
                    <Route
                        path="/taches/:id"
                        element={
                            <TacheShow/>
                        }
                    />
                    <Route
                        path="/taches/:id/edit"
                        element={
                            <TacheFormPage/>
                        }
                    />

                    <Route
                        path="/categories"
                        element={
                            <CategorieIndex/>
                        }
                    />
                    <Route
                        path="/categories/create"
                        element={
                            <CategorieFormPage/>
                        }
                    />
                    <Route
                        path="/categories/:id"
                        element={
                            <CategorieShow/>
                        }
                    />
                    <Route
                        path="/categories/:id/edit"
                        element={
                            <CategorieFormPage/>
                        }
                    />
                </Route>
                <Route path="*" element={<Navigate to="/login"/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
