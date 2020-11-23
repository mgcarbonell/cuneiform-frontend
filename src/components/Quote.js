import React, { useState, useEffect } from 'react';
import QuoteModel from '../models/quote';

const Quote = () => {
  const [quote, setQuote] = useState()

  useEffect(() => {
    QuoteModel.show()
    .then(data => {
      setQuote(data)
    })
  }, [])

  if(!quote) {
    return null
  }

  return(
    <div>
      {quote.content}
      - by {quote.originator.name}
    </div>
  )

}

export default Quote