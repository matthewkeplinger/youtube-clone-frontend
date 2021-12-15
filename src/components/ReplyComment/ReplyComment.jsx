import React, { Component } from 'react';
import axios from 'axios';


class ReplyComment extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            id: props.commentID,
            comment: '',
            video_id: props.selectedVideo,
            likes: 0,
            dislikes: 0,
            reply_id: null,
         }
    }


    handleChange = (event) =>{
        this.setState({
            [event.target.name]: event.target.value,        
        });
     }
 
     handleSubmit = (event) =>{
         event.preventDefault();
        this.addReply();
     }  

    addReply = async() => {
        debugger;
        const comment = {
            video_id: this.state.video_id,
            body: this.state.comment,
            likes: this.state.likes,
            dislikes: this.state.dislikes,
            reply_id: this.state.id
        };
        try{
            let response = await axios.post(`http://127.0.0.1:8000/comments/`, comment);
            console.log(response);
        }
        catch{
            console.log("Unsuccessful Reply");
        }


      }   

    render() { 
        return ( 

            <form onSubmit ={this.handleSubmit}>
                <input name="comment" onChange={this.handleChange} value={this.state.comment}></input>
                <button className="btn" type="submit">Reply</button>
            </form>

         );
    }
}
 
export default ReplyComment;