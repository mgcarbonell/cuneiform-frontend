import React from 'react';
import UserEntries from '../components/UserEntries';

const Profile = props => {
  return (
    <>
    <UserEntries />
    <h1>Profile of user with ID { props.currentUser }</h1>
    <h1>Profile of user with ID { props.currentUsername }</h1>
    </>
  )
}

export default Profile;