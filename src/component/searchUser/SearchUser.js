import React from "react";
import { Link } from "react-router-dom";
import styles from "./SearchUser.module.css";
function SearchUser({ users, inputValue, setInputValue }) {
  const searchedUser = users.filter(
    (user) =>
      user.first_name.toLowerCase().includes(inputValue.toLowerCase()) ||
      user.last_name.toLowerCase().includes(inputValue.toLowerCase())
  );
  const hideSearchedContainer = () => {
    setInputValue("");
  };
  return (
    <div className={styles.userListContainer}>
      {searchedUser.length > 0 ? (
        searchedUser.map((user, index) => (
          <Link
            to={`/users/${user.id}`}
            onClick={hideSearchedContainer}
            key={index + 1}
          >
            <h3 className={styles.userName}>
              {user.first_name} {user.last_name}
            </h3>
          </Link>
        ))
      ) : (
        <p className={styles.noUserFound}>No user found</p>
      )}
    </div>
  );
}

export default SearchUser;
