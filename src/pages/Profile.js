import React from 'react';
import UserEntries from '../components/UserEntries';

const Profile = props => {
  return (
    <>
      <h1>Profile of { props.currentUsername }</h1>
      <UserEntries
        currentUser={ props.currentUser }         
      />
    </>
  )
}

export default Profile;