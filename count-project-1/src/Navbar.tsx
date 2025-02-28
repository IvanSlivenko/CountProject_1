import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <h1 className="navbar-logo">Мій Магазин</h1>
                <ul className="navbar-menu">
                    <li className="navbar-dropdown">
                        <span className="navbar-link">Довідники</span>
                        <ul className="dropdown-menu">
                            <li><Link to="/products" className="navbar-link">Товари</Link></li>
                            <li><Link to="/customers" className="navbar-link">Контрагенти</Link></li>
                            <li><Link to="/warehouses" className="navbar-link">Склади</Link></li>
                            <li><Link to="/cash-registers" className="navbar-link">Каси</Link></li>
                        </ul>
                    </li>
                    <li className="navbar-dropdown">
                        <span className="navbar-link">Документи</span>
                        <ul className="dropdown-menu">
                            <li><Link to="/purchases" className="navbar-link">Придбання</Link></li>
                            <li><Link to="/sales" className="navbar-link">Реалізація</Link></li>
                            <li><Link to="/write-offs" className="navbar-link">Списання</Link></li>
                            <li><Link to="/inventory" className="navbar-link">Оприбуткування</Link></li>
                            <li><Link to="/cash-inflow" className="navbar-link">Надходження готівки</Link></li>
                            <li><Link to="/cash-outflow" className="navbar-link">Видаток готівки</Link></li>
                            <li><Link to="/warehouse-transfer" className="navbar-link">Переміщення між складами</Link></li>
                        </ul>
                    </li>
                    <li className="navbar-dropdown">
                        <span className="navbar-link">Звіти</span>
                        <ul className="dropdown-menu">
                            <li><Link to="/stock-movement" className="navbar-link">Звіт про рух та залишки товарів</Link></li>
                            <li><Link to="/cash-movement" className="navbar-link">Звіт про рух та залишки коштів</Link></li>
                            <li><Link to="/debt-report" className="navbar-link">Звіт про заборгованість</Link></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;