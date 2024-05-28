import SearchBar from "./component/SearchBar/SearchBar";
import { useEffect, useState } from "react";
import { fetchImages } from "./images-api";
import ErrorMessage from "./component/ErrorMessage/ErrorMessage";
import ImageGallery from "./ImageGallery/ImageGallery";
import Loader from "./component/Loader/Loader";
import LoadMoreBtn from "./component/LoadMoreBtn/LoadMoreBtn";
import ModalWindow from "./component/ImageModal/ImageModal";


export default function App() {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLading] = useState(false);
    const [error, setError] = useState(false);
    const [page, setPage] = useState(1);
    const [query, setQuery] = useState('');
    const [modal, setModal] = useState(false);
    const [imgUrl, setImgsUrl] = useState(null);

    const handleSearch = async (newQuery) => {
        setQuery(newQuery);
        setPage(1);
        setImages([]);
    };

    const handleLoadMore = () => {
        setPage(page + 1);}
    
    
    useEffect(() => {
        if (query === '') { return; }
        async function getImage() {
            try {
               setError(false);
               setIsLading(true);
               const img = await fetchImages(query, page);
                setImages((prevImage) => {
                    return [...prevImage, ...img];
               }); 
            } catch (error) {
                setError(true);
            } finally { setIsLading(false); }
        }
        getImage();
    }, [page, query]);
    
    const openModal = (url) => {
        setImgsUrl(url);
        setModal(true);
    };

    const closeModal = () => {
        setModal(false);
    };
    return (
        <>
            <SearchBar onSearch={handleSearch} />
            {error && <ErrorMessage/>}
            {images.length > 0 && <ImageGallery images={images} onImgClick={openModal}/>}
            {isLoading && < Loader />}
            {images.length > 0 && !isLoading && <LoadMoreBtn loadMore={handleLoadMore} />}
          <ModalWindow image={imgUrl} imgModal={modal} onModalClose={closeModal}/>
        </>
    );
};