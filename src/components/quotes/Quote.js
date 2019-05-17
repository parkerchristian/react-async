import React from 'react';
import PropTypes from 'prop-types';

export default function Quote({ quote }) {
  return (
    <section id="character-section">
      <p>{quote.name}</p>
      <img src={quote.image}></img>
      <p>{quote.gender}</p>
    </section>
  );
}

Quote.propTypes = {
  quote: PropTypes.shape({
    character: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired
  }).isRequired
};
