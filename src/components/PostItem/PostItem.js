import React from 'react';

const PostItem = ({post, number}) => {
    return (
        <div className='post'>
            <div className='post_content'>
                <strong>{number}. {post.title}</strong>
                <div>
                    {post.body}
                </div>
            </div>
            <div className='post_btns'>
                <button>Удалить</button>
            </div>
        </div>
    );
};

export default PostItem;