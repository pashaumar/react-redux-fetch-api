import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams, Link } from "react-router-dom";
import styles from "./UserDetails.module.css";
import { fetchUsers } from "../../actions/action";
function UserDetails(props) {
  useEffect(() => {
    props.fetchUsers();
  }, []);
  const id = useParams();
  let user = props.users.filter((item) => parseInt(id.id) === item.id);
  user = user[0] !== undefined && user[0];
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
      return (
        <div className={styles.userDetails}>
          <h2>
            <Link to="/users/">
              <span>&#8592;</span>
            </Link>
            Details:{" "}
            <span>
              {user.first_name} {user.last_name}
            </span>
          </h2>
          <p>
            First Name: <span> {user.first_name}</span>
          </p>
          <p>
            Last Name: <span> {user.last_name}</span>
          </p>
          <p>
            Company Name: <span> {user.company_name}</span>
          </p>
          <p>
            City: <span> {user.city}</span>
          </p>
          <p>
            State: <span> {user.state}</span>
          </p>
          <p>
            Zip: <span> {user.zip}</span>
          </p>
          <p>
            Email: <span> {user.email}</span>
          </p>
          <p>
            Web: <span> {user.web}</span>
          </p>
          <p>
            Age: <span> {user.age}</span>
          </p>
        </div>
      );
    }
  };
  return (
    <div className={styles.userDetailsContainer}>
      <h3 className={styles.title}>User Details Page</h3>
      {showData()}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    users: state.users,
    loading: state.loading,
  };
};
const mapDispatchToProps = {
  fetchUsers,
};
export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);
