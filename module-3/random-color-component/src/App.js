import React from "react"
import './App.css';

export default function App() {
  const [color, setColor] = React.useState({
    colors: [{hex: "white"}]
  })

  React.useEffect(function() { 
      fetch("https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}")
      .then(res => res.json())
      .then(data => setColor(data))
  }, []) // THIS SHOULD NOT BE GOING 

  const styles = {
    backgroundColor: `#${color.colors[0].hex}`
  }


  return (
    <div className="App" style={styles}>
        
    </div>
  );
}

// style={styles}

