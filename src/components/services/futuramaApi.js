export const getQuotes = () => {
  return fetch('https://futuramaapi.herokuapp.com/api/quotes')
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'bad API call!';

      return json;
    });
};
