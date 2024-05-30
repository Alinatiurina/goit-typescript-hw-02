import React, { FC } from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import { Field, Form, Formik } from 'formik';
import toast, { Toaster } from 'react-hot-toast';
import css from './SearchBar.module.css';

interface SearchBarProps {
    onSearch: (query: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ onSearch }) => {
    const notify = () => toast.error('Please, enter your request!');

    return (
        <Formik
            initialValues={{ query: '' }}
            onSubmit={(values, actions) => {
                if (values.query === '') {
                    notify();
                } else {
                    onSearch(values.query);
                    actions.resetForm();
                }
            }}
        >
            <header>
                <Form className={css.searchBar}>
                    <Field
                        className={css.input}
                        type="text"
                        name="query"
                        placeholder="Search images and photos"
                    />
                    <button className={css.button} type="submit">
                        <BiSearchAlt className={css.icon} />
                    </button>
                    <Toaster position="top-right" reverseOrder={false} />
                </Form>
            </header>
        </Formik>
    );
};

export default SearchBar;