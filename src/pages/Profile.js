import React from 'react';

const Profile = props => {
  return (
    <>
    <h1>Profile of user with ID { props.currentUser }</h1>
    <h1>Profile of user with ID { props.currentUsername }</h1>
    </>
  )
}

export default Profile