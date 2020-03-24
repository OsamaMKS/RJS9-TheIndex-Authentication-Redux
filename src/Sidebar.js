import React from "react";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";

// Logo
import logo from "./assets/theindex.svg";
import { logout } from "./redux/actions";

const Sidebar = ({ user, logout }) => (
  <div id="sidebar">
    <img src={logo} className="logo" alt="the index logo" />
    <section>
      <h4 className="menu-item active">
        <NavLink to="/authors">AUTHORS</NavLink>
      </h4>
    </section>
    <div className="fixed-bottom">
      {user ? (
        <button className="btn btn-danger" onClick={logout}>
          Logout
        </button>
      ) : (
        <>
          <Link to="/login" className="btn btn-info m-2 float-left">
            Login
          </Link>
          <Link to="/signup" className="btn btn-success m-2 float-left">
            Signup
          </Link>
        </>
      )}
    </div>
  </div>
);

const mapStateToProps = ({ user }) => ({ user });

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
