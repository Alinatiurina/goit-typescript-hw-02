import SearchBar from "./component/SearchBar/SearchBar";
import { useEffect, useState } from "react";
import fetchImages from "./images-api";
import ErrorMessage from "./component/ErrorMessage/ErrorMessage";
import ImageGallery from "./component/ImageGallery/ImageGallery";
import Loader from "./component/Loader/Loader";
import LoadMoreBtn from "./component/LoadMoreBtn/LoadMoreBtn";
import ModalWindow from "./component/ImageModal/ImageModal";
import React from "react";
import { Img } from "./types";

export default function App() {
    const [images, setImages] = useState<Img[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const [page, setPage] = useState<number>(1);
    const [query, setQuery] = useState<string>('');
    const [modal, setModal] = useState<boolean>(false);
    const [currentImgIndex, setCurrentImgIndex] = useState<number | null>(null);

    const handleSearch = async (newQuery: string): Promise<void> => {
        setQuery(newQuery);
        setPage(1);
        setImages([]);
    };

    const handleLoadMore = (): void => {
        setPage(page + 1);
    };

    useEffect(() => {
        if (query === '') {
            return;
        }

        const getImage = async (): Promise<void> => {
            try {
                setError(false);
                setIsLoading(true);
                const img = await fetchImages(query, page);
                setImages((prevImage) => [...prevImage, ...img]);
            } catch (error) {
                setError(true);
            } finally {
                setIsLoading(false);
            }
        };

        getImage();
    }, [page, query]);

    const openModal = (index: number): void => {
        setCurrentImgIndex(index);
        setModal(true);
    };

    const closeModal = (): void => {
        setModal(false);
    };

    const showNextImage = (): void => {
        if (currentImgIndex !== null && currentImgIndex < images.length - 1) {
            setCurrentImgIndex(currentImgIndex + 1);
        }
    };

    const showPrevImage = (): void => {
        if (currentImgIndex !== null && currentImgIndex > 0) {
            setCurrentImgIndex(currentImgIndex - 1);
        }
    };

    return (
        <>
            <SearchBar onSearch={handleSearch} />
            {error && <ErrorMessage />}
            {images.length > 0 && <ImageGallery images={images} onImgClick={openModal} />}
            {isLoading && <Loader />}
            {images.length > 0 && !isLoading && <LoadMoreBtn loadMore={handleLoadMore} />}
            {modal && currentImgIndex !== null && (
                <ModalWindow
                    image={images[currentImgIndex]}
                    imgModal={modal}
                    onModalClose={closeModal}
                    onNext={showNextImage}
                    onPrev={showPrevImage}
                />
            )}
        </>
    );
}
