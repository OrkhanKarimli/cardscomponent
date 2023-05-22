import React from 'react'
import {ReactComponent as Smile} from "../icons/Smiley.svg"
import {ReactComponent as Bolder} from "../icons/TextBolder.svg"
import {ReactComponent as Itlaic} from "../icons/TextItalic.svg"
import {ReactComponent as Send} from "../icons/Send.svg"
const CommentApplication = () => {
  return (
    <div className="container comment-main">
        <div className="row">
            <div className="col-md-6 comment-input">
                <input type="text" placeholder={"Write your question..."}/>
                <div className="comment-parts">
                    <div className="comments-icon">
                        <ul>
                            <li>
                                <i>
                                    <Smile/>
                                </i>
                            </li>
                            <li>
                                <i>
                                    <Bolder/>
                                </i>
                            </li>
                            <li> 
                                <i>
                                    <Itlaic/>
                                </i>
                            </li>
                        </ul></div>
                    <button className="comments-button">
                        <p>
                            Send <i>
                                <Send/>
                            </i>
                        </p>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CommentApplication