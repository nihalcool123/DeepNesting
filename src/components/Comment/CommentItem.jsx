import Comment from './Comment';
import styles from './styles.module.css';
import { useState } from 'react';

const CommentItem = (props) => {
  const { comment, addNewReply } = props;

  const [showReply, toggleReply] = useState(false);
  const [showAddReply, toggleAddReply] = useState(false);

  const handleBlur = (e) => {
    const newComment = e.target.value;

    addNewReply(comment.id, newComment);
    toggleAddReply(false);
    toggleReply(true);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.keyCode === 13) {
      const newComment = e.target.value;

      addNewReply(comment.id, newComment);
      toggleAddReply(false);
      toggleReply(true);
    }
  };
  return (
    <>
      <div className={styles.commentContainer}>
        <div className={styles.details}>
          <div>{comment.comment}</div>

          <div className={styles.controls}>
            {comment.subComments.length > 0 && (
              <span onClick={() => toggleReply(!showReply)}>View reply</span>
            )}

            <span onClick={() => toggleAddReply(!showAddReply)}>Add Reply</span>
          </div>
        </div>

        {showReply && (
          <Comment
            commentData={comment.subComments}
            addNewReply={addNewReply}
          />
        )}
        {showAddReply && (
          <input
            className={styles.reply}
            type="text"
            placeholder="enter your reply"
            autoFocus
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
          />
        )}
      </div>
    </>
  );
};

export default CommentItem;
