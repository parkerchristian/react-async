import React, { PureComponent } from 'react';
import Quotes from '../quotes/Quotes';
import { getQuotes } from '../services/futuramaApi';

export default class TopQuotes extends PureComponent {
  state = {
    quotes: []
  }

  componentDidMount() {
    getQuotes()
      .then(({ quotes }) => this.setState({ quotes }));
  }

  render() {
    return <Quotes quotes={this.state.quotes} />;
  } 
}
