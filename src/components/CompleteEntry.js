import React from 'react'

const CompleteEntry = (props) => {
  return (
    <div>
      <h3>{props.entryTitle}</h3>
      <h5>{props.id}</h5>
      <p>{props.entryBody}</p>
    </div>
  )
}

export default CompleteEntry;