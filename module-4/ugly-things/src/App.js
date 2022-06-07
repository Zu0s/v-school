import React, { useContext } from "react"
import { UglyThingContext } from "./uglyThingContext";

import Form from "./components/Form";
import Thing from "./components/Thing";

export default function App(props) {

  const {uglyThingList, handleSubmit} = useContext(UglyThingContext)

  const thingsList = uglyThingList.map(currentThing => {
    return <Thing 
      key={currentThing._id}
      {...currentThing}
    />
  })

  return (
    <main className="main">
        <Form submit={handleSubmit} />
        {thingsList} 
    </main>
  );
}
