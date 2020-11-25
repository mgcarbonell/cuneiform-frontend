
class CommentModel {
  // show comments
  static all = () => {
    return fetch(`${process.env.REACT_APP_INTERNAL_API_URL}/comment`).then(res => res.json())
  }
  
  // create a comment
  static create = (commentData) => {
    return fetch(`${process.env.REACT_APP_INTERNAL_API_URL}/comment/create`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(commentData)
    }).then(res => res.json())
  }

// update a comment
  static update = (comment, commentId) => {
    return fetch(`${process.env.REACT_APP_INTERNAL_API_URL}/comment/${commentId}`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(comment)
    }).then(res => res.json())
  }

  // delete a comment
  static delete = (comment, commentId) => {
    return fetch(`${process.env.REACT_APP_INTERNAL_API_URL}/comment/${commentId}`, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(comment)
    }).then(res => res.json())
  }
}


export default CommentModel;