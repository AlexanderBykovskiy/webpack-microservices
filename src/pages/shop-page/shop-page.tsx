import React from "react";
import pngImage from "@/shared/images/comp.png";
import jpgImage from "@/shared/images/comp.jpg";
import Svg from "@/shared/images/comp.svg";

const ShopPage: React.FC = () => {
    return(
        <div>
            <div>Shop my shop</div>
            <div><img src={pngImage} alt=""/></div>
            <div><img src={jpgImage} alt=""/></div>
            <div><Svg width={250}/></div>
            <div>Shop</div>
        </div>
    )
}

export default ShopPage;
