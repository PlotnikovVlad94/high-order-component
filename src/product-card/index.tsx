import React from "react";

import "./index.css";
import { TProps } from '../types';

type Props = TProps['products'][number]

export const ProductCard = ({ title, description }: Props) => (
    <div className="product">
        <h4>{title}</h4>
        <p>{description}</p>
    </div>
);