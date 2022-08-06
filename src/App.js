import React, { useState } from 'react';
import './App.css';
import PostList from './components/PostList/PostList';
import PostForm from './components/PostForm/PostForm';
 
function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript 1', body: 'Description 1'},
        {id: 2, title: 'Javascript 2', body: 'Description 2'},
        {id: 3, title: 'Javascript 3', body: 'Description 3'},
    ]);

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));
    }

    return (
        <div className='App'>
        <PostForm create={createPost}/> 
        <hr style={{margin: '15px 0'}}/> 
        <div>
            <select>
                <option value='value 1'>По названию</option>
                <option value='value 2'>По описанию</option>
            </select>
        </div>
        {posts.length 
                ?  
            <PostList posts={posts} remove={removePost} title={'Посты про JS'}/>
                :
            <h1 style={{textAlign: 'center'}}>Посты не найдены</h1>
        }       
        </div>
    ) 
}

export default App;
