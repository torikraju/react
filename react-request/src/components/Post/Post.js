import React from 'react';

import styles from './Post.module.css';

const post = (props) => (
    <article className={styles.Post}>
        <h1>Title</h1>
        <div className={styles.Info}>
            <div className={styles.Author}>Author</div>
        </div>
    </article>
);

export default post;