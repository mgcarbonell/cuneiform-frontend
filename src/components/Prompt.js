import React, { useState, useEffect } from 'react';
import PromptModel from '../models/prompt';

const Prompt = () => {
  const [prompt, setPrompt] = useState([])


  useEffect(() => {
    PromptModel.all()
    .then(data => {
      setPrompt(data.prompts[Math.floor(Math.random() * data.prompts.length)])})
  }, [])

  return(
    <div>
      {prompt.body}
    </div>
  )
}

export default Prompt;