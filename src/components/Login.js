import { useNavigate } from "react-router-dom"

const Login = (props) => {
  const navigate = useNavigate()

  const onSubmit = (event) => {
    event.preventDefault()
    props.onLogin("root")
    navigate("/")
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={onSubmit}>
        <div>
          username: <input />
        </div>
        <div>
          password: <input />
        </div>
        <button type="submit">login</button>
      </form>
    </div>
  )
}

export default Login
