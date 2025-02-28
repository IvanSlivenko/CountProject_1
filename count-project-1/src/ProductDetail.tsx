import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetail.css"; // Імпортуємо стилі

// Тип для продукту
interface Product {
    id: number;
    name: string;
    unit: string;
    code: string;
    description: string; // Опис товару
}

const ProductDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>(); // отримуємо id товару з URL
    const [product, setProduct] = useState<Product | null>(null);

    useEffect(() => {
        // Завантажуємо дані товару (поки що статичні)
        const fetchProduct = () => {
            // Псевдодані для прикладу
            const productData = {
                id: parseInt(id || "0"),
                name: "Товар 1",
                unit: "кг",
                code: "001",
                description: "Цей товар призначений для тестування функціональності вашого додатка.",
            };
            setProduct(productData);
        };

        fetchProduct();
    }, [id]);

    if (!product) {
        return <div>Завантаження...</div>;
    }

    return (
        <div className="product-detail">
            <h1>{product.name}</h1>
            <div className="product-info">
                <p><span>Код:</span> {product.code}</p>
                <p><span>Одиниця виміру:</span> {product.unit}</p>
                <p><span>Опис:</span> {product.description}</p>
            </div>
            <div className="product-action">
                <button className="button" onClick={() => alert("Товар додано до кошика!")}>
                    Додати до кошика
                </button>
            </div>
        </div>
    );
};

export default ProductDetail;
