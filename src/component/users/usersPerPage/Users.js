import React, { useEffect } from "react";
import { connect } from "react-redux";
import styles from "./Users.module.css";
import { fetchUsers } from "../../../actions/action";
import Table from "../table/Table";
function Users(props) {
  useEffect(() => {
    props.fetchUsers();
  }, []);
  const showData = () => {
    if (props.loading) {
      return (
        <div className={styles.spinner}>
          <img
            src="https://miro.medium.com/max/882/1*9EBHIOzhE1XfMYoKz1JcsQ.gif"
            alt=""
          />
        </div>
      );
    }
    if (props.users) {
      return <Table />;
    }
    if (props.error !== "") {
      return <p>{`${props.error}`}</p>;
    }
  };
  return <div className={styles.main}>{showData()}</div>;
}
const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    users: state.users,
    error: state.error,
  };
};
const mapDispatchToProps = {
  fetchUsers,
};
export default connect(mapStateToProps, mapDispatchToProps)(Users);
