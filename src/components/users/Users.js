import React, { Component } from "react";
import Useritem from "./Useritem";
import Spinner from "../layouts/Spinner";
import PropTypes from "prop-types";

const Users = props => {
  if (props.loading) {
    return <Spinner />;
  } else
    return (
      <div style={userStyle}>
        {props.users.map(user => (
          <Useritem key={user.id} user={user}>
            {" "}
            />
          </Useritem>
        ))}
      </div>
    );
};
const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gridGap: "1rem"
};
Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

export default Users;
