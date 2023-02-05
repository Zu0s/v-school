import React, { useContext, useEffect } from 'react'
import { IssueContext } from '../context/issueProvider'
import IssueList from '../components/IssueList'

export default function Public(){
    const {getAllIssues, issueList} = useContext(IssueContext)

    useEffect(()=> {
        getAllIssues()
    }, [])

  return (
    <div className="public">
        <IssueList />
    </div>
  )
}