import styles from './styles.module.css';
import CommentItem from './CommentItem';

const Comment = ({ commentData, addNewReply }) => {
  // const addNewReply = (targetId, newComment) => {

  // };
  return (
    <>
      {commentData?.map((comment) => (
        <CommentItem
          key={comment.id}
          comment={comment}
          addNewReply={addNewReply}
        />
      ))}
    </>
  );
};

export default Comment;
