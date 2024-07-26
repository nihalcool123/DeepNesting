import './App.css';
import Comment from './components/Comment/Comment';
import commentsData from './assets/data/comments';
import { useState } from 'react';
import { updateComment } from './utility/helper';

function App() {
  const [comments, setComments] = useState(commentsData);
  const addNewReply = (targetId, newComment) => {
    const newUpdatedComments = updateComment(comments, targetId, newComment);

    setComments(newUpdatedComments);
  };

  return (
    <>
      <Comment commentData={comments} addNewReply={addNewReply} />
    </>
  );
}

export default App;
