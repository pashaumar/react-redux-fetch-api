import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import styles from "./Navbar.module.css";
import SearchUser from "../searchUser/SearchUser";
import { fetchUsers } from "../../actions/action";
function Navbar(props) {
  useEffect(() => {
    props.fetchUsers();
  }, []);
  const [inputValue, setInputValue] = useState("");
  const resetInputValue = () => {
    setInputValue("");
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div className={styles.navbar}>
      <h1 className={styles.usersHeading}>Users</h1>
      <div className={styles.searchContainer}>
        <input
          type="text"
          name="search"
          id={styles.search}
          placeholder="search by first or last name"
          value={inputValue}
          onChange={handleInputChange}
        />
        {inputValue.length > 0 ? (
          <i className="fas fa-times" onClick={resetInputValue}></i>
        ) : (
          <i className="fas fa-search"></i>
        )}
        {inputValue.length > 0 && props.users && (
          <SearchUser
            users={props.users}
            inputValue={inputValue}
            setInputValue={setInputValue}
          />
        )}
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};
const mapDispatchToProps = {
  fetchUsers,
};
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
