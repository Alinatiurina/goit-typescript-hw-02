import { ColorRing } from 'react-loader-spinner';
import css from './Loader.module.css';
import React, { FC } from 'react';

const Loader:FC=()=> {
    return (
        <ColorRing
            className={css.loader}
            visible={true}
            height={80}
            width={80}
            ariaLabel="color-ring-loading"
            wrapperStyle={{}}
            wrapperClass="color-ring-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />);
}
export default Loader