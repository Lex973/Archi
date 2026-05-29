import './App.css'
import HomePage from "./components/pages/HomePage.tsx";
import { Routes, Route } from "react-router-dom";
import NewsPage from "./components/pages/NewsPage.tsx";
import Converter from "./components/pages/Converter.tsx";
import RegistrationPage from "./components/pages/RegistrationPage.tsx";

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={ <HomePage/> } />
                <Route path='/news' element={ <NewsPage/> } />
                <Route path='/converter' element={ <Converter/> } />
                <Route path='/register' element={ <RegistrationPage/> } />
            </Routes>
        </>
    )
}

export default App
