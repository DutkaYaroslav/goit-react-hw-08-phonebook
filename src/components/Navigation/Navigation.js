import React from 'react';
import authSelectors from '../../redux/auth/authSelectors';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import './Navigation.css';

const Navigation = ({ isAuthenticated }) => (
  <div className="phonebook">
    <h2 className="phonebook phonebook-head">Phonebook</h2>
    <div className="container-list">
      <ul className="container-list_ul">
        {!isAuthenticated && (
          <li className="nav-li">
            <NavLink to="/registration" className="nav-ul">
              Registration
            </NavLink>
          </li>
        )}
        {!isAuthenticated && (
          <li className="nav-li">
            <NavLink to="/login" className="nav-ul">
              Login
            </NavLink>
          </li>
        )}

        {isAuthenticated && (
          <li className="nav-li">
            <NavLink to="/contacts" className="nav-ul"></NavLink>
          </li>
        )}
      </ul>
    </div>
  </div>
);

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
