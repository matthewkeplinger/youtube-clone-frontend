import React, { Component } from 'react';
import axios from 'axios';
import './createComment.css'



class CreateComment extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            comments: props.comments,
            comment: '',
            video_id: props.selectedVideo,
            likes: 0,
            dislikes: 0,
            reply_id: null,
            refresh: false,
         }
    }

    // async getComments(video) {
    //     let response = await axios.get(`http://127.0.0.1:8000/comments/${video}/`)
    //     this.setState({
    //       comments: response.data,
    //       dataloaded: true
    //     })
    //     console.log(this.state.comments);
    //   }


    handleChange = (event) =>{
        this.setState({
            [event.target.name]: event.target.value         
        });
     }
 
     handleSubmit = (event) =>{
        event.preventDefault();
        this.addComment();
        console.log("Props for create: ", this.props)
        this.props.getComments(this.state.video_id);
        this.setState({
            refresh: !this.state.refresh
        })
        console.log("State of refresh: ", this.state.refresh)
     }  

    addComment = async() => {
        const comment = {
            video_id: this.state.video_id,
            body: this.state.comment,
            likes: this.state.likes,
            dislikes: this.state.dislikes,
            reply_id: null
        };
        try{
            let response = await axios.post(`http://127.0.0.1:8000/comments/`, comment);
            console.log(response);
            
        }
        catch{
            console.log("Unsuccessful Comment Add");
        }
      }   

    render() { 
        return ( 
            <form onSubmit ={this.handleSubmit}>
                <label>Leave A Comment:</label>
                <input className="maskedBox" size="100" name="comment" onChange={this.handleChange} value={this.state.comment}></input>
                <button className="btn" type="submit">Add Comment</button>
            </form>
         );
    }
}
 
export default CreateComment;