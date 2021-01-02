import {useState} from "react";
import './Paginator.scss'

const Paginator = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.usersCountPerPage);
    let pages = [];

    for (let i = 0; i < pagesCount; i++) {
        pages.push(i);
    }

    let portionSize = 5;
    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionBorder = (portionNumber - 1) * portionSize + 1;
    let rightPortionBorder = portionNumber * portionSize;

    return (
        <div className="Pagination">
            {portionNumber > 1 &&
            <button onClick={() => {
                setPortionNumber(portionNumber - 1)
            }}>Previous</button>
            }
            {pages.filter(page => page >= leftPortionBorder && page <= rightPortionBorder)
                .map(page => <span
                    onClick={() => props.onPageChange(page)}
                    key={page}
                    className={props.currentPage === page && "Pagination-ActiveItem"}> {page}
                </span>)}
            {portionCount > portionNumber &&
            <button onClick={() => {
                setPortionNumber(portionNumber + 1)
            }}>Next</button>}
        </div>
    )
}

export default Paginator