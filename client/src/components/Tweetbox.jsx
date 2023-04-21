import React from 'react'
import "../css/TweetBox.css"
import {Avatar, Button} from '@mui/material';


function TweetBox() {
  return (
    <div className='tweetBox'>
      <form >
        <div className="tweetBox__input">
            <Avatar src='https://png.pngtree.com/png-clipart/20190924/original/pngtree-boy-user-avatar-vector-icon-free-png-image_4827808.jpg' />
            <input  placeholder="What's happening?" type="text" />
        </div>
        <input
        className='tweetBox__imageInput'
        placeholder='Enter image URL' 
        type="text" />
        <Button className='tweetBox__tweetButton'>Tweet</Button>
      </form>
    </div>
  )
}

export default TweetBox
