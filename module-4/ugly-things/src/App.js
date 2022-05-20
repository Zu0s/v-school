import React, { useContext } from "react"
import { UglyThingContextProvider, UglyThingContext } from "./uglyThingContext";

import Form from "./components/Form";
import Thing from "./components/Thing";

export default function App(props) {

  const {uglyThingList} = useContext(UglyThingContext)

  const thingsList = uglyThingList.map(currentThing => {
    return <Thing 
      key={currentThing._id}
      {...currentThing}
    />
  })

  return (
    <main className="main">
        <Form />
        {thingsList} 
    </main>
  );
}
