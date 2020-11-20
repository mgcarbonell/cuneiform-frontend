const REACT_APP_API_URL = "http://localhost:4000/api/v1"

class PromptModel {

  static all = () => {
    return fetch(`${REACT_APP_API_URL}/prompt`).then(res => res.json())
  }

  static show = (promptId) => {
    return fetch(`${REACT_APP_API_URL}/prompt/${promptId}`).then(res => res.json())
  }


}

export default PromptModel;