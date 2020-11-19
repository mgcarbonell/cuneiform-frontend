import React, { useEffect, useState } from 'react';
import EntryModel from '../models/entry';
// import Entry from '../pages/Entry';


const EntryList = (props) => {

  const [entries, setEntries] = useState([])
  

  useEffect(() => {
    EntryModel.all()
      .then(data => setEntries(data.entries))
  }, [])

  return (
    <div>
      {entries.map((entry) => (
        <>
        <h3 key={entry.id}>{entry.title}</h3>
        <h5>By {entry.userId}</h5>
        <p>{entry.body}</p>
        </>
      ))}
    </div>
  )

}

export default EntryList;
