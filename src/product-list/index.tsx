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
                {/* {products.map((product) => <ProductCard key={product.title} {...product} />)} */}

                {/** часть 2 */}
                {products.map(({ title, description, link, urlImage }) => (
                    <ProductCardCompound key={title}>
                        <ProductCardCompound.Content>
                            <div>
                                <h4>{title}</h4>
                                <p>{description}</p>
                            </div>
                        </ProductCardCompound.Content>
                        <ProductCardCompound.Img urlImage={urlImage} alt={title} />
                        {link &&
                            <ProductCardCompound.Button
                                onClick={() => window.open(link, '_blank')}
                            >
                                <div>Открыть</div>
                            </ProductCardCompound.Button>
                        }
                    </ProductCardCompound>
                ))}
            </div>
        </div>
    )
}