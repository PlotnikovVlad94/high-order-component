import React, { useState } from "react";
import { ProductsList } from "./product-list";
import { products } from "./config";
import { TProps } from "./types";

export function withSearchCards<P extends object>(
    Component: React.ComponentType<TProps>,
    products: TProps['products'],
) {
    const NewComponent = (props: P) => {
        const [searchTerm, setSearchTerm] = useState('');

        const filterProducts = (searchTerm: string) => {
            searchTerm = searchTerm.toUpperCase()
            return products.filter(product => {
                const str = `${product.title} ${product.description}`.toUpperCase();
                return str.indexOf(searchTerm) >= 0;
            })
        }

        const filtered = filterProducts(searchTerm)
        
        return (
            <React.Fragment>
                <input
                    onChange={(e) => setSearchTerm(e.target.value)}
                    value={searchTerm}
                    type="text"
                    placeholder="Search"
                />

                <Component {...(props as P)} products={filtered} />
            </React.Fragment>
        )
    }

    const displayName = Component.displayName || Component.name || 'Component';

    NewComponent.displayName = `withSearchCards_${displayName}`;

    return NewComponent;
}

export const ProductsListWithSearchCards = withSearchCards(ProductsList, products);



