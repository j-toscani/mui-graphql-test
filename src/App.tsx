import { Button, Typography } from '@mui/material'
import './App.css'
import {useState } from "react"

function App() {
  const [count, setCount] = useState(0) 

  return (
    <>
      <Typography variant="h3" component="h1">
        Hello World!
      </Typography>
      <Typography sx={{ margin: "1rem 0"}} component="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nostrum facilis quos placeat asperiores minus aperiam, animi dicta nisi ipsa numquam impedit laborum sapiente ducimus. Itaque saepe dignissimos quia. Reiciendis?</Typography>
      <Button variant="contained" size="large" onClick={() => setCount(count +1)}>
        Click me!
      </Button>

      <Typography>
        {count}
      </Typography>
    </>
  )
}

export default App
