import React, { useState } from 'react';
import { useEffect } from 'react';
import { commentDelete, commentUpdate } from './redux/actions';
import { useDispatch } from 'react-redux';

const SingleComment = ({ data }) => {
  const [commentText, setCommentText] = useState('');
  const { text, id } = data
  const dispatch = useDispatch()
  useEffect(() => {
    if(text) {
      setCommentText(text)
    }
  }, [text]);
  const handleInput = (e) => {
    setCommentText(e.target.value)
  }
  const handleUpdate = (e) => {
    e.preventDefault()
    console.log(commentText)
    dispatch(commentUpdate(commentText, id))
  }
  const handleDelate = (e) => {
    e.preventDefault()
    dispatch(commentDelete(id))
  }
  return (
    <>
      <form onSubmit={handleUpdate} className='comments-item'>
        <div onClick={handleDelate} className="comments-item-delete">
          &times;
        </div>
        <input type="text" value={commentText} onChange={handleInput} />
        <input type="submit" hidden />
      </form>
    </>
  );
}

export default SingleComment;
