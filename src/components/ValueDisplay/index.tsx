import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';

type ValueDisplayProps = {
  value: string
}

export const ValueDisplay: FunctionComponent<ValueDisplayProps> = ({ value }) => (
  <div>{`The value is: ${value}`}</div>
);

ValueDisplay.propTypes = {
  value: PropTypes.string.isRequired,
};
