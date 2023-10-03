import React from "react";
import styles from "./Pagination.module.css";

import {BiLeftArrowAlt} from "react-icons/bi";
import {BiRightArrowAlt} from "react-icons/bi";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
    return <div className={styles.pagination}>
        <div className={styles.pageNumber}>
            {currentPage} from {totalPages}
        </div>
        <div className={styles.pageChange}>
            <button
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
            >
                <BiLeftArrowAlt className={styles.moveIcon}/>
            </button>
            {pageNumbers.slice(currentPage - 1, currentPage + 9).map((page) => (
                <button
                key={page}
                onClick={() => onPageChange(page)}
                className={page === currentPage ? 'active' : ''}
                >
                {page}
                </button>
            ))}
            <button
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
            >
                <BiRightArrowAlt className={styles.moveIcon}/>
            </button>
        </div>
    </div>
};

export default Pagination;