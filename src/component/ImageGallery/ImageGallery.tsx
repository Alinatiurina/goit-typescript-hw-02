import React, { FC } from "react";
import ImageCard from "../ImageCard/ImageCard";
import { Img } from "../../types";
import css from './ImageGallery.module.css'

interface ImageGalleryProps {
    images: Img[];
    onImgClick: (index: number) => void;
}

const ImageGallery: FC<ImageGalleryProps> = ({ images, onImgClick }) => {
    return (
        <div className={css.gallery}>
            {images.map((img, index) => (
                <ImageCard key={img.id} img={img} onImgClick={() => onImgClick(index)} />
            ))}
        </div>
    );
};

export default ImageGallery;
