import React, { Component } from 'react';
import axios from 'axios';



class ReplyForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            comments : props.comments,
            // comment: '',
            selectedVideo: props.selectedVideo,
            replies: [],
         }
    }



    render() { 
            return (
                <div>
                    {/* {this.state.replies = this.comments.filter((comment)=> comment.id === comment.reply_id)}
                    {this.state.replies.map((reply)=>{
                        return(
                            <div>
                                {reply.body}
                            </div>
                        );
                    })} */}
                </div>
            );
        }
          
    }

 
export default ReplyForm;