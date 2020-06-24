import React from 'react';
import AddedFeature from './AddedFeature';
import {AddedFeature} from '../actions/rootActions';
import { connect } from 'react-redux';

const AdditionalFeature = props => {
  console.log(props)
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button">onClick={() => props.addFeature(props.feature)}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect(null,{addFeature})(AdditionalFeature);
