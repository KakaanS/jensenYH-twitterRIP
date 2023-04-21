import React from 'react';
import "../css/Post.css";
import {Avatar} from '@mui/material';

function Post ({
    displayName,
    username,
    text,
    image,
    avatar,
    comments
 
})  {
  return 
    <div className='post'>
        <div className='post__avatar'>
            <Avatar src="https://png.pngtree.com/png-clipart/20190924/original/pngtree-boy-user-avatar-vector-icon-free-png-image_4827808.jpg" />
        </div>
        <div className="post__body">
            <div className="post__header">
                <div className="post__headerText">
                    <h3>
                        Goran Misic 
                    </h3>
                    <div className="post__headerDescription">
                       <p>My first post</p> 
                    </div>
                    <img src="https://media.tenor.com/PZf33FwKn-0AAAAd/good-morning-funny.gif" alt="" />

                </div>
            </div>

        </div>

      
    </div>
  
}

export default Post
