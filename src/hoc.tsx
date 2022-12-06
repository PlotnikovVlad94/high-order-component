import React, { useState } from "react";
import { ProductsList } from "./product-list";
import { products } from "./config";
import { TProps } from "./types";

export function withSearchCards<P extends object>(
    Component: React.ComponentType<TProps>,
    products: TProps['products'],
) {
    /** implement me */
}

export const ProductsListWithSearchCards = withSearchCards(ProductsList, products);



