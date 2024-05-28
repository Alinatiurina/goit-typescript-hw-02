import ImageCard from "../component/ImageCard/ImageCard";
import css from './ImageGallery.module.css'

export default function ImageGallery({ images, onImgClick  }) {
    return (
        <ul className={css.gallery}>
            {images.map((image) => (
                <li key={image.id}>
                    <ImageCard image={image} onImgClick={onImgClick} />
                </li>
            ))}
        </ul>
    );
}