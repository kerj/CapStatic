import React from 'react';
import { makeStyles } from '@material-ui/core';

const styles = makeStyles({
    footer: {
        display: 'flex',
        flexWrap: 'nowrap',
        flexGrow: '3'
    }
})

export default function About() {
    const classes = styles();
    return (
        <div className={classes.footer}>
            <h2>Ride, Visual</h2>
            <ul>
                <li>Intuitive Interface</li>
                <li>Interactive Mapping</li>
                <li>Better data tracking</li>
            </ul>
        </div>
    )
}
