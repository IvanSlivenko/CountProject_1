import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductDirectory from "./ProductDirectory";
import ProductDetail from "./ProductDetail"; // імпортуйте компонент деталей товару
import Navbar from "./Navbar"; // імпортуйте Navbar

function App() {
    return (
        <Router>
            <Navbar /> {/* Додаємо Navbar, щоб він рендерився на всіх сторінках */}
            <Routes>
                <Route path="/products" element={<ProductDirectory />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                {/* Додайте інші маршрути */}
            </Routes>
        </Router>
    );
}

export default App;
