import { Button, TextField } from "@mui/material"
import { useNavigate } from "react-router-dom"

const Login = (props) => {
  const navigate = useNavigate()

  const onSubmit = (event) => {
    event.preventDefault()
    props.onLogin("root")
    navigate("/")
  }

  // return (
  //   <div>
  //     <h2>Login</h2>
  //     <Form onSubmit={onSubmit}>
  //       <Form.Group>
  //         <Form.Label>username:</Form.Label>
  //         <Form.Control type="text" name="username" />
  //         <Form.Label>password:</Form.Label>
  //         <Form.Control type="password" />
  //         <Button variant="primary" type="submit">
  //           login
  //         </Button>
  //       </Form.Group>
  //     </Form>
  //   </div>
  // )

  return (
    <div>
      <h2>Login</h2>

      <form onSubmit={onSubmit}>
        <div>
          <TextField label="username" />
        </div>
        <div>
          <TextField label="password" type={"password"} />
        </div>
        <div>
          <Button variant="contained" color="primary" type="submit">
            login
          </Button>
        </div>
      </form>
    </div>
  )
}

export default Login
