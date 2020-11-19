const REACT_APP_API_URL = "http://localhost:4000/api/v1"

class EntryModel {
  static all = () => {
    return fetch(`${REACT_APP_API_URL}/entry`).then(res => res.json())
  }
}

export default EntryModel;