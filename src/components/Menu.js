import { AppBar, Button, Toolbar } from "@mui/material"
import { Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"

const Menu = ({ user }) => {
  const padding = {
    padding: 5
  }
  
  // return (
  //   <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  //     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  //     <Navbar.Collapse id="responsive-navbar-nav">
  //       <Nav className="me-auto">
  //         <Nav.Link href="#" as="span">
  //           <Link style={padding} to="/">home</Link>
  //         </Nav.Link>
  //         <Nav.Link href="#" as="span">
  //           <Link style={padding} to="/notes">notes</Link>
  //         </Nav.Link>
  //         <Nav.Link href="#" as="span">
  //           <Link style={padding} to="/users">users</Link>
  //         </Nav.Link>
  //         <Nav.Link href="#" as="span">
  //           {
  //             user
  //               ? <em style={padding}>{user}</em>
  //               : <Link style={padding} to="/login">login</Link>
  //           }
  //         </Nav.Link>
  //       </Nav>
  //     </Navbar.Collapse>
  //   </Navbar>
  // )

  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" component={Link} to="/">home</Button>
        <Button color="inherit" component={Link} to="/notes">notes</Button>
        <Button color="inherit" component={Link} to="/users">users</Button>
        {
          user
            ? <em>{user} logged in</em>
            : <Button color="inherit" component={Link} to="/login">login</Button>
        }
      </Toolbar>
    </AppBar>
  )
}

export default Menu
