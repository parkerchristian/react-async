export const getQuotes = () => {
  return fetch('https://rickandmortyapi.com/api/character')
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'bad API call!';

      return json;
    })
    .then(({ results }) => ({
      quotes: results.map(quote => ({
        name: quote.name,
        image: quote.image,
        gender: quote.gender
      }))
    }));
};
