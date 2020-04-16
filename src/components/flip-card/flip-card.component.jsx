import React from 'react';
import "./flip-card.styles.css";
import { CardBack } from "../card-back/card-back.component"


export class FlipCard extends React.Component{
  render() {
    return (
      <React.Fragment>
          <CardBack picture={this.props.picture} {...this.props}/>
      </React.Fragment>
    )
  }
}