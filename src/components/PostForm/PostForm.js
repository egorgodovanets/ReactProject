import React, {useState} from 'react';
import MyButton from './components/UI/MyButton/MyButton';
import MyInput from './components/UI/MyInput/MyInput';


const PostForm = ({create}) => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState(''); 

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            title,
            body
        }
        create(newPost);
        setTitle('');
        setBody('');
    }

    return (
        <form>
            <MyInput type='text' placeholder='Название поста' value={title} onChange={e => setTitle(e.target.value)}/>
            <MyInput type='text' placeholder='Описание поста' value={body} onChange={e => setBody(e.target.value)}/>
            <MyButton onClick={addNewPost}>Создать пост</MyButton>
        </form>
    );
};

export default PostForm;