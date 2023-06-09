import { useState } from "react"
import { Routes, Route, Link, Navigate, useMatch } from "react-router-dom"
import Note from "./components/Note"
import Notes from "./components/Notes"
import Users from "./components/Users"
import Login from "./components/Login"
import Home from "./components/Home"
import Menu from "./components/Menu"
import { Alert, Container } from "@mui/material"

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: 1,
      content: 'HTML is easy',
      important: true,
      user: 'Matti Luukkainen'
    },
    {
      id: 2,
      content: 'Browser can execute only JavaScript',
      important: false,
      user: 'Matti Luukkainen'
    },
    {
      id: 3,
      content: 'Most important methods of HTTP-protocol are GET and POST',
      important: true,
      user: 'Arto Hellas'
    }
  ])
  const [user, setUser] = useState(null)
  const [message, setMessage] = useState(null)

  const login = (user) => {
    setUser(user)
    setMessage(`welcome ${user}`)
    setTimeout(() => {
      setMessage(null)
    }, 3000)
  }

  const padding = {
    padding: 5
  }

  const match = useMatch("/notes/:id")
  const note = match
    ? notes.find(note => note.id === Number(match.params.id))
    : null

  // bootstrap
  // return (
  //   <div className="container">
  //     {(message && <Alert variant="success">{message}</Alert>)}
  //     <Menu user={user} />
  //     <Routes>
  //       <Route path="/notes/:id" element={<Note note={note} />} />
  //       <Route path="/notes" element={<Notes notes={notes} />} />
  //       <Route path="/users" element={user ? <Users /> : <Navigate replace to={"/login"} />} />
  //       <Route path="/login" element={<Login onLogin={login} />} />
  //       <Route path="/" element={<Home />} />
  //     </Routes>

  //     <footer>
  //       <br />
  //       <em>Note app, by Austin Wang</em>
  //     </footer>
  //   </div>
  // )

  // material ui
  return (
    <Container>
      {(message && <Alert severity="success">{message}</Alert>)}
      <Menu user={user} />
      <Routes>
        <Route path="/notes/:id" element={<Note note={note} />} />
        <Route path="/notes" element={<Notes notes={notes} />} />
        <Route path="/users" element={user ? <Users /> : <Navigate replace to={"/login"} />} />
        <Route path="/login" element={<Login onLogin={login} />} />
        <Route path="/" element={<Home />} />
      </Routes>

      <footer>
        <br />
        <em>Note app, by Austin Wang</em>
      </footer>
    </Container>
  )
}

export default App
