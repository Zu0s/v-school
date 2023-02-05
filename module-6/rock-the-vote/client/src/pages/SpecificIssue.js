import React, {useState, useEffect, useContext} from "react";
import {useParams, useNavigate} from 'react-router-dom' // use useNavigate for returning to profile and or public page
import { IssueContext } from "../context/issueProvider";
import CommentList from "../components/CommentList";

const initInputs = { description: ''}
export default function SpecificIssue() {

    //getting issue and comments for said issue
    const { issueId } = useParams()
    const { issueList, commentList, getCommentsByIssue, addComment, deleteComment} = useContext(IssueContext)
    const foundIssue = issueList.find( issue => issue._id === issueId)
    const {title, description, upvotes, downvotes } = foundIssue

    useEffect(() => {
        getCommentsByIssue(issueId)
    }, [])

    // adding new comment

    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e){
        const {name, value} = e.target
        setInputs(prevInputs => ({
          ...prevInputs,
          [name]: value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        addComment(issueId, inputs)
        setInputs(initInputs)
    }

    return(
        <div>
            <h1>{title}</h1>
            <h3>{description}</h3>

            <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={inputs.description} 
                name="description" 
                onChange={handleChange} 
                placeholder=""/>
                <button>Add Comment</button>
            </form>

            <br />
            <CommentList commentList={commentList} deleteComment={deleteComment}/>
        </div>
    )
}