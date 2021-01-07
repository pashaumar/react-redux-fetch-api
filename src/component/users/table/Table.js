import React, { useState } from "react";
import TableData from "../tableData/TableData";
import styles from "./Table.module.css";
import { connect } from "react-redux";
import Buttons from "../pagination/Pagination";
function Table(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const currentPageData = props.users.filter(
    (item) => item.id >= currentPage * 10 - 9 && item.id <= currentPage * 10
  );
  return (
    <>
      <table>
        <tbody>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Website</th>
          </tr>
          {props.users.length > 0 &&
            currentPageData.map((user, index) => (
              <TableData user={user} key={index + 1} />
            ))}
        </tbody>
      </table>
      <Buttons currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};
export default connect(mapStateToProps)(Table);
