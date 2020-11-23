import React from 'react'

const Comment = () => {
  return (
    <div>
      <form 
        className={classes.root} 
        onSubmit={handleSubmit} 
        noValidate 
        autoComplete="off"
      >

      <div aria-label="Journal entry textfield">
        <TextField
          id="outlined-multiline-static"
          label="Write Away"
          multiline
          rows={40}
          value={body}
          type="text"
          onInput={ e => setBody(e.target.value)}
          variant="outlined"
        />
        
      </div>
      <Button 
        type="submit"
        className={classes.button}
        onClick={ e => setIsPublic(false)}
      // we'd need a value of setting isPublic to true
      >
        Comment
      </Button>
      </form>
    </div>
  )
}

export default Comment;
