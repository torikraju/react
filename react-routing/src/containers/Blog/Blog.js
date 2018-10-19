import React, {Component} from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../Posts/FullPost/FullPost';
import NewPost from '../Posts/NewPost/NewPost';
import './Blog.css';
// import axios from 'axios';
import axios from '../../axios';
import Posts from '../Posts/Posts/Posts';

class Blog extends Component {
    render() {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/new-post">New Post</a></li>
                        </ul>
                    </nav>
                </header>
                <Posts/>
            </div>
        );
    }
}

export default Blog;