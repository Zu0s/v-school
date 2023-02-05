import React, {useContext, useEffect} from 'react'
import IssueForm from '../components/IssueForm.js'
import IssueList from '../components/IssueList.js'
import { UserContext} from '../context/UserProvider.js'
import { IssueContext } from '../context/issueProvider.js'


export default function Profile(){
  const { user: {username}} = useContext(UserContext)
  const { addIssue, getIssuesByUser } = useContext(IssueContext)

  useEffect(() => {
    getIssuesByUser()
  }, [])

  return (
    <div className="profile">
        <h1>Welcome @{username}!</h1>
        <h3>Add a new issue below</h3>
        <IssueForm addIssue={addIssue}/>
        <h3>Your Issues</h3>
        <IssueList />
    </div>
  )
}