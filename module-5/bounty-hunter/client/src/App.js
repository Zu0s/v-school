import React, { useContext } from "react"
import Bounty from "./components/Bounty.js"

import { ApiContext} from "./apiContext.js";

export default function App() {
  const {bounties, setBounties} = useContext(ApiContext) // using bounties state from context

  return (
    <div>
      {bounties.map(bounty => <Bounty {...bounty} key={bounty._id}/>)}
    </div>
  );
}


