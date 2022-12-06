import React from "react";

type Props = {
    urlImage: string;
    alt: string;
}

export const Img = ({ urlImage, alt}: Props) => {
    /** implement me */
    return <img src={urlImage} alt={alt} height={150} width={250} />
  };