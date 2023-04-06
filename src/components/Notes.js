import { Paper, TableContainer, Table, TableBody, TableRow, TableCell } from "@mui/material"
import { Link } from "react-router-dom"

const Notes = ({ notes }) => {
  // return (
  //   <div>
  //     <h2>Notes</h2>
  //     <Table striped>
  //       <tbody>
  //         {notes.map(note => (
  //           <tr key={note.id}>
  //             <td>
  //               <Link to={`/notes/${note.id}`}>{note.content}</Link>
  //             </td>
  //             <td>
  //               {note.user}
  //             </td>
  //           </tr>
  //         ))}
  //       </tbody>
  //     </Table>
  //   </div>
  // )

  return (
    <div>
      <h2>Notes</h2>

      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            {notes.map(note => (
              <TableRow key={note.id}>
                <TableCell>
                  <Link to={`/notes/${note.id}`}>{note.content}</Link>
                </TableCell>
                <TableCell>
                  {note.user}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Notes
