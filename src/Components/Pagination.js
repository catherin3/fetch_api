import React from 'react';
import { makeStyles, Table, TableRow, TableHead, TableCell } from '@material-ui/core';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});


const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const classes = useStyles();
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);

    }



    return (
        <nav>
            <ul className="pagination" style={{ listStyle: 'none' }}>
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <a onClick={() => paginate(number)} href="!#" className="page-link">
                            {number}
                        </a>
                    </li>
                ))}

            </ul>
        </nav>
    )
};


export default Pagination;