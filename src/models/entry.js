
class EntryModel {
  
  static all = () => {
    return fetch(`${process.env.REACT_APP_INTERNAL_API_URL}/entry`).then(res => res.json())
  }

  static show = (entryId) => {
    return fetch(`${process.env.REACT_APP_INTERNAL_API_URL}/entry/${entryId}`).then(res => res.json())
  }
  
  static user = (userId) => {
    return fetch(`${process.env.REACT_APP_INTERNAL_API_URL}/entry/user/${userId}`).then(res => res.json())
  }

  // static showUser's entries
  // match a currentUser's id with the userId on the entry
  // 
  
  // create an entry
  static create = (entryData) => {
    return fetch(`${process.env.REACT_APP_INTERNAL_API_URL}/entry/create`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(entryData)
    }).then(res => res.json())
  }

  // delete an entry
}


export default EntryModel;