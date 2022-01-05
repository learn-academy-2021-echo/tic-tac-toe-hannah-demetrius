import React, { Component } from "react";

class Gameboard extends Component {
  render() {
    return (
      <>
        <div className="Gameboard">
          <table>
            <tr>
              <td height="120px" width="120px">
                ?
              </td>
              <td height="120px" width="120px">
                ?
              </td>
              <td height="120px" width="120px">
                ?
              </td>
            </tr>
            <tr>
              <td height="120px" width="120px">
                ?
              </td>
              <td height="120px" width="120px">
                ?
              </td>
              <td height="120px" width="120px">
                ?
              </td>
            </tr>
            <tr>
              <td height="120px" width="120px">
                ?
              </td>
              <td height="120px" width="120px">
                ?
              </td>
              <td height="120px" width="120px">
                ?
              </td>
            </tr>
          </table>
        </div>
      </>
    );
  }
}
export default Gameboard;
