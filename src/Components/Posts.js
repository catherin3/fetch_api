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
        <TableContainer component={Paper} style={{ listStyle: 'none' }}>
            <Table className={classes.table} aria-label="simple table">
                <TableBody>
                    {posts.map(post => (
                        <TableRow key={post.id}>
                            <TableCell component="th" scope="row"> <li key={post.id} className="list-group-item">
                                {post.title}
                            </li></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

        </TableContainer>
    );
};


export default Posts;