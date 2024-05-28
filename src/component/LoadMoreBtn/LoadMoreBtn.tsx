import css from './LoadMoreBtn.module.css'
export default function ({loadMore}) {
    return (
        <button onClick={loadMore} className={css.btn}>Load more</button>
    )
}