import React from "react";

import { Img } from "./img";
import { Button } from "./button";
import { Content } from "./content";

import "./index.css";

type Props = {
    children: React.ReactNode
}

const ProductCardCompound = ({ children }: Props) => (
    <div className="product">
        {children}
    </div>
);

ProductCardCompound.Content = Content;
ProductCardCompound.Button = Button;
ProductCardCompound.Img = Img;
ProductCardCompound.displayName = "ProductCardCompound";

export { ProductCardCompound };