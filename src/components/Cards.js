import React, {Component} from 'react';

import Footer_body from './footer_body';

class Card extends Component{
  render() {
    return(
      <div className="card">
          <div className="card-header"> Footer </div>
        <Footer_body />
      </div>
    );
  }
}

export default Card;
