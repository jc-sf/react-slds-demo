import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@salesforce/design-system-react';

import './InstanceLabel.scss';

const InstanceLabel = (props) => {
  const { label } = props;
  return (
    <div className="slds-box slds-box_small slds-m-bottom_medium instance-wrapper">
      <label className="instance-label">{label}</label>
      <Icon assistiveText={{ label: 'Instance' }} category="standard" name="task2" size="small" />
    </div>
  );
};

InstanceLabel.propTypes = {
  label: PropTypes.string,
};

export default InstanceLabel;
