import css from './ImageCard.module.css';
import React, { FC } from "react";
import { Img } from '../../types';

interface ImageProps{
    img: Img;
    onImgClick:(id: number) => void;
}

 const ImageCard:FC<ImageProps>=({ img, onImgClick }) =>{
    return (
        <div className={css.container} >
            <img className={css.image} src={img.urls.small} onClick={() => onImgClick(img.urls.regular)} alt={img.alt_description} />
        </div>
    );
}
export default ImageCard