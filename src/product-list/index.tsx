import React from "react";
import { ProductCard } from "../product-card";
import { ProductCardCompound } from "../product-card-compound";
import { TProps } from "../types";

export const ProductsList = ({ products }: TProps) => {
    return (
        <div>
            <h2>Карты</h2>
            <div>
                {/** часть 1 */}
                {products.map((product) => <ProductCard key={product.title} {...product} />)}

                {/** часть 2 */}
                {/* {products.map((product) => <ProductCardCompound key={product.title}><ProductCardCompound />)} */}
            </div>
        </div>
    )
}