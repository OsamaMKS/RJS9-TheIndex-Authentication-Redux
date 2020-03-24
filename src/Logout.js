import React from "react";
import { connect } from "react-redux";

import { logout } from "./redux/actions";

const Logout = ({ user, logout }) => {
  return (
    <button className="btn btn-danger" onClick={logout}>
      Logout {user.username}
    </button>
  );
};

const mapStateToProps = ({ user }) => ({
  user
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
