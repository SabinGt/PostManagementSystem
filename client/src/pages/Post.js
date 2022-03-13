import React, {useEffect,useState} from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios';


function Post() {
    
    const {id} = useParams();
    const [postObject, setPostObject] = useState([])
    const [comments, setComments] = useState([])
    const [newComment, setNewComment] = useState("")
   
    
    useEffect(()=>{
        axios.get('http://localhost:4000/posts/byId/' + id).then((response)=> {
            setPostObject(response.data)
          
        });
        axios.get('http://localhost:4000/comments/' + id).then((response)=> {
            setComments(response.data)
          
        });

      }, []);

      const addComment = () =>{
        axios.post('http://localhost:4000/comments',{
          commentBody:newComment,
          PostId:id
        }).then((response)=> {
          const commentToAdd = {commentBody: newComment}
          setComments([...comments, commentToAdd]);
          setNewComment("")
        });
      }
  return (
    <div className="postPage">
      <div className="leftSide">
        <div className="post" id="individual">
          <div className="title"> {postObject.title} </div>
          <div className="body">{postObject.postText}</div>
          <div className="footer">{postObject.username}</div>
        </div>
      </div>
      <div className="rightSide">
        <div className='addCommentContainer'>
          <input
          type="text"
          placeholder='Please comment ....'
          autoComplete='off'
          value={newComment}
          onChange={(event) => {
            setNewComment(event.target.value);
          }}
           />
           <button onClick={addComment}>Add comment</button>
          <div className='listOfComments'>
            {comments.map((value,key)=>{
              return <div key={key} className='comment'>{value.commentBody}</div>
            })}
            </div>
          </div>
        </div>
    </div>
    
  )
}

export default Post