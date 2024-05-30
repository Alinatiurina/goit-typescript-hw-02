import ImageCard from "../ImageCard/ImageCard";
import css from './ImageGallery.module.css';
import React from "react";

export default function ImageGallery({ images, onImgClick  }) {
    return (
        <ul className={css.gallery}>
            {images.map((image) => (
                <li key={image.id}>
                    <ImageCard img={image} onImgClick={onImgClick} />
                </li>
            ))}
        </ul>
    );
}