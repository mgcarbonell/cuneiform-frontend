class QuoteModel {

  static show = () => {
    return fetch(process.env.REACT_APP_QUOTE_API_URL, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": process.env.REACT_APP_QUOTE_API_HOST,
        "x-rapidapi-key": process.env.REACT_APP_QUOTE_API_KEY
    }
  })
  .then(response => {
    return response.json();
  })
  .catch(err => {
    console.log(err);
  });

}}

export default QuoteModel;
