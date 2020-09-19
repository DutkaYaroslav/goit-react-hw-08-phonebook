import React from 'react';
import authSelectors from '../../redux/auth/authSelectors';
import { connect } from 'react-redux';
import UserMenu from '../UserMenu/UserMenu';

const userMenuBar = ({ isAuthinticated }) => (
  <div>{isAuthinticated && <UserMenu />}</div>
);

const mapStateToProps = state => ({
  isAuthinticated: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(userMenuBar);
