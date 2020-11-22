
class PromptModel {

  static all = () => {
    return fetch(`${process.env.REACT_APP_INTERNAL_API_URL}/prompt`).then(res => res.json())
  }

  static show = (promptId) => {
    return fetch(`${process.env.REACT_APP_INTERNAL_API_URL}/prompt/${promptId}`).then(res => res.json())
  }


}

export default PromptModel;