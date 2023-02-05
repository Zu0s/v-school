import React, {useContext}from 'react'
import Issue from './Issue'
import { IssueContext } from '../context/issueProvider'

export default function IssueList() { // need props for 
    const { issueList,  addVote } = useContext(IssueContext)
    
    const sortedIssues = issueList.sort((a, b) => (a.upvotes.length > b.upvotes.length) ? -1 : 1)
    return(
        <div>
            {sortedIssues.map(issue => <Issue key={issue._id} {...issue} addVote={addVote}/>)}
        </div>
    )
}