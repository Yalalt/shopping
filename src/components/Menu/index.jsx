import React from "react";
import css from "./style.module.css";
import MenuItem from "../MenuItem";

const Menu = () => (
    <div>
        <ul className={css.Menu}>
            <MenuItem exact="true" link="/">ШИНЭ ЗАХИАЛГА</MenuItem>
            <MenuItem link="/orders" >ЗАХИАЛГАНУУД</MenuItem>
        </ul>
    </div>
);
export default Menu;