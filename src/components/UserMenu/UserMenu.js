import React from 'react';
import authSelectors from '../../redux/auth/authSelectors';
import { connect } from 'react-redux';
import authOperations from '../../redux/auth/authOperations';

import './UserMenu.css';
const UserMenu = ({ avatar, name, onLogout }) => (
  <div className="user-menu">
    <img src={avatar} alt="avatar" width="32"></img>
    <span>Welcome, {name}</span>
    <button className="logout_button" type="button" onClick={onLogout}>
      Logout
    </button>
  </div>
);

const mapStateToProps = state => ({
  name: authSelectors.getUserName(state),
  avatar:
    'https://www.leadcreation.com.au/wp-content/uploads/2018/11/multicultural-icon-24.jpg.png',
});

export default connect(mapStateToProps, { onLogout: authOperations.logout })(
  UserMenu,
);
