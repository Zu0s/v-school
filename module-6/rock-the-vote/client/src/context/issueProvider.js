import React, { useState, createContext} from 'react'
import axios from 'axios'

export const IssueContext = createContext()

const userAxios = axios.create()
userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    config.headers.Authorization = `Bearer ${token}`
    return config
})

export default function IssueProvider(props){
    const [issueList, setIssueList] = useState([])
    const [commentList, setCommentList] = useState([])

    function getIssuesByUser () {
        userAxios('/api/issue/user')
            .then(res => {
                setIssueList(res.data)
            })
            .catch(err => console.log(err))
    }

    function getAllIssues () {
        userAxios('/api/issue')
            .then(res => {
                setIssueList(res.data)
            })
            .catch(err=>console.log(err))
    }

    function addIssue(newIssue) {
        userAxios.post('/api/issue', newIssue)
            .then(res => {
                setIssueList(prevIssueList => ([...prevIssueList, res.data]))
            })
            .catch(err => console.log(err))
    }

    function deleteIssue(issueId) {
        userAxios.delete(`/api/issue/${issueId}`)
            .then(res=> {
                setIssueList(prevIssueList => prevIssueList.filter(issue => issue._id !== issueId))
            })
            .catch(err=>console.log(err))
    }

    function updateIssue(issueId, updatedIssue) {
        userAxios.put(`/api/issue/${issueId}`, updatedIssue)
            .then(res => {
                setIssueList(prevIssueList => prevIssueList.map(issue => issue._id !== issueId ? issue : res.data))
            })
            .catch(err => console.log(err))
    }

    function addVote(issueId, typeOfVote) { 
        userAxios.put(`/api/issue/${typeOfVote}/${issueId}`) 
            .then(res => setIssueList(prevIssueList => prevIssueList.map(issue => issue._id !== issueId ? issue : res.data)))
    } // this should like work like this
    
    
    //comments

    function getCommentsByIssue(issueId) {
        userAxios(`/api/comment/${issueId}`)
            .then(res => setCommentList(res.data))
            .catch(err => console.log(err))
    }

    function addComment(issueId, newComment) {
        userAxios.post(`/api/comment/${issueId}`, newComment)
            .then(res => setCommentList(prevCommentList => ([...prevCommentList, res.data])))
            .catch(err => console.log(err))
    }

    function deleteComment(commentId) {
        userAxios.delete(`/api/comment/${commentId}`)
            .then(res => setCommentList(prevCommentList => prevCommentList.filter(comment => comment._id !== commentId)))
            .catch(err => console.log(err))
    }

    function updateComment(commentId, updatedComment){
        userAxios.put(`/api/comment/${commentId}`, updatedComment)
            .then(res => setCommentList(prevCommentList => prevCommentList.map(comment => comment._id !== commentId ? comment : res.data)))
            .catch(err => console.log(err))
    }

    return(
        <IssueContext.Provider
        value={ { 
            issueList, getIssuesByUser, getAllIssues, addIssue, deleteIssue, updateIssue, addVote,
            commentList, getCommentsByIssue, addComment, deleteComment, updateComment
        } }
        >
            {props.children}
        </IssueContext.Provider>
    )
}