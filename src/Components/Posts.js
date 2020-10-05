import React from 'react';
import { Paper, makeStyles, Table, TableContainer, TableBody, TableRow, TableCell } from '@material-ui/core';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});


const Posts = ({ posts, loading }) => {
    const classes = useStyles();

    if (loading) {
        return <h2>...loading</h2>
    }



    return (
        <div>
            {posts.map(post => (
                <li key={post.id} className="list-group-item">
                    {post.title}
                </li>
            ))}


        </div>
    );
};


export default Posts;