import css from './ImageCard.module.css';

export default function ImageCard({ image, onImgClick }) {
    return (
        <div className={css.container} >
            <img className={css.image} src={image.urls.small} onClick={() => onImgClick(image.urls.regular)} alt={image.alt_description} />
        </div>
    );
}