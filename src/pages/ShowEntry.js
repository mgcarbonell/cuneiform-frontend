import React, { useState, useEffect, useParams } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import EntryModel from '../models/entry';
// import comments from comments
// import material styling from @material-ui

const ShowEntry = (props) => {

  const [entry, setEntry] = useState([]);
  

  useEffect(() => {
    EntryModel.show(props.match.params.id)
      .then(data => setEntry(data.entry))
  }, [props.match.params.id])


  return (
    <>
        <div>
          <h3>{entry.title}</h3>
          <h5>{entry.userId}</h5>
          <p>{entry.body}</p>
        </div>
        <div>
          <p>Insert Comments Component Here</p>
        </div>
        <Link to={'/'}>
          <Button color="primary" variant="contained">
            Back to all public entries
          </Button>
        </Link>
    </>
  );
}

export default ShowEntry;

// useParams
// Provides access to search parameters in the URL
// This was possible earlier only using match.params.
// import { useParams, Route } from 'react-router-dom';

// function Profile() {
//   const { name } = useParams();
//   return <p>{name}'s Profile</p>;
// }

// function Dashboard() {
//   return (
//     <>
//       <nav>
//         <Link to={`/profile/ann`}>Ann's Profile</Link>
//       </nav>
//       <main>
//         <Route path="/profile/:name">
//           <Profile />
//         </Route>
//       </main>
//     </>
//   );
// }