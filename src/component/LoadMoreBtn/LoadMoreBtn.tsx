import React, { FC } from 'react';
import css from './LoadMoreBtn.module.css';

interface LoadMoreBtnProps {
    loadMore: () => void;
}

const LoadMoreBtn: FC<LoadMoreBtnProps> = ({ loadMore }) => {
    return (
        <button onClick={loadMore} className={css.btn}>Load more</button>
    );
};

export default LoadMoreBtn;
