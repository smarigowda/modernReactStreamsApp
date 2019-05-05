import React from 'react';
import { Link } from 'react-router-dom';

import styles from './css/Header.module.scss';
import { GoogleAuth } from './GoogleAuth';

export const Header = () => {
    return (
        <div className={styles.container}>
            <Link className={styles.link} to="/">Streamer</Link>
            <Link className={styles.link} to="/">All Streams</Link>
            <GoogleAuth />
        </div>
    )
}