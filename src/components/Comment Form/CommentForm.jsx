import React, { Component } from 'react';
import axios from 'axios';
import CreateComment from '../CreateComment/createComment';
import ReplyComment from '../ReplyComment/ReplyComment';
import './CommentForm.css';
import ReplyForm from '../ReplyForm/replyform';


class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            comments : props.comments,
            comment: '',
            selectedVideo: props.selectedVideo,
         }
    }

    componentDidMount(){
        this.getComments(this.state.selectedVideo);
    }

     getComments = async(video) => {
        let response = await axios.get(`http://127.0.0.1:8000/comments/${video}/`)
        this.setState({
          comments: response.data,
          dataloaded: true
        })
      }
    
    likeComment = async(commentID, selectedVideo) => {
        await axios.patch(`http://127.0.0.1:8000/comments/${commentID}/likes/`);
        console.log("Like Added")
        this.getComments(this.state.selectedVideo);
      }
    dislikeComment = async(commentID, selectedVideo) => {
        await axios.patch(`http://127.0.0.1:8000/comments/${commentID}/dislikes/`);
        this.getComments(this.state.selectedVideo);
      }

    render() { 
            return (
                <div>
                    <CreateComment comments = {this.state.comments} selectedVideo = {this.state.selectedVideo} getComments={this.getComments}/>             
                    <br/><br/>
                    <table>
                        <thead>
                            <tr>
                                <th>Comments:</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.state.comments.map((comment) => {
                            return(
                                    <tr key = {comment.id}>
                                        <td>{comment.body}</td>
                                        <td><button className="likeDislikeBtn" onClick={()=>this.likeComment(comment.id, this.state.selectedVideo)} ><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-emoji-smile-fill" viewBox="0 0 16 16">
                                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zM4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z"/>
                                            </svg></button> {comment.likes}</td>
                                        <td><button className="likeDislikeBtn" onClick={()=>this.dislikeComment(comment.id, this.state.selectedVideo)} ><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-emoji-frown-fill" viewBox="0 0 16 16">
                                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm-2.715 5.933a.5.5 0 0 1-.183-.683A4.498 4.498 0 0 1 8 9.5a4.5 4.5 0 0 1 3.898 2.25.5.5 0 0 1-.866.5A3.498 3.498 0 0 0 8 10.5a3.498 3.498 0 0 0-3.032 1.75.5.5 0 0 1-.683.183zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z"/>
                                            </svg></button> {comment.dislikes}</td>
                                        <td><ReplyForm /></td>
                                        <td><ReplyComment commentID = {comment.id} selectedVideo = {this.state.selectedVideo} /></td>
                                    </tr>
                            );
                        })}
                        </tbody>
                    </table>
                </div>
            );
        }
          
    }

 
export default CommentForm;