import React, {useContext} from 'react'
import IssueForm from '../components/IssueForm.js'
import IssueList from '../components/IssueList.js'
import Issue from '../components/Issue.js'
import { UserContext } from '../context/UserProvider.js'


export default function Profile(){
  const { user: {username}} = useContext(UserContext)

  return (
    <div className="profile">
      <h1>Welcome @{username}!</h1>

    </div>
  )
}