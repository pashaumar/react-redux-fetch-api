import React from "react";
import styles from "./TableData.module.css";
function TableData(props) {
  return (
    <tr className={styles.tr}>
      <td>{props.user.first_name}</td>
      <td>{props.user.last_name}</td>
      <td>{props.user.age}</td>
      <td>{props.user.email}</td>
      <td className={styles.web}>
        <a target="/blank" href={props.user.web}>
          {props.user.web}
        </a>
      </td>
    </tr>
  );
}

export default TableData;
