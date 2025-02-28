import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import "./ProductDirectory.css"; // імпорт стилів

// Оголошення типу Product
interface Product {
    id: number;
    name: string;
    unit: string;
    code: string;
}

const ProductDirectory: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        setProducts([
            { id: 1, name: "Товар 1", unit: "кг", code: "001" },
            { id: 2, name: "Товар 2", unit: "шт", code: "002" },
            { id: 3, name: "Товар 3", unit: "л", code: "003" },
        ]);
    }, []);

    return (
        <div className="product-directory">
            <h1>Довідник товарів</h1>
            <ul className="product-list">
                {products.map((product) => (
                    <li key={product.id} className="product-item">
                        <div className="product-info">
                            {product.name} (Код: {product.code}, Одиниця виміру: {product.unit})
                        </div>
                        <Link to={`/product/${product.id}`} className="product-link">
                            {/*<FaSearch /> /!* Іконка лінзи *!/*/}
                            ...
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductDirectory;
