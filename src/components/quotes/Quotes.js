import React from 'react';
import PropTypes from 'prop-types';
import Quote from './Quote';

export default function Quotes({ quotes }) {
  const quotesList = quotes.map((quote, i) => {
    return (
      <li key={i}>
        <Quote quote={quote}/>
      </li>
    );
  });

  return (
    <ul>
      {quotesList}
    </ul>
  );
}

Quotes.propTypes = {
  quotes: PropTypes.string.isRequired
};
