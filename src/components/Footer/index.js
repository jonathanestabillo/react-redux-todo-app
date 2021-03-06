import React from 'react';
import PropTypes from 'prop-types';

import './Footer.css';

const footerPropTypes = {
  className: PropTypes.string.isRequired,
};

const Footer = ({ className }) => (
  <div className={className}>
    <div className="footer__container">
      <p className="footer__p">
      </p>
    </div>
  </div>
);

Footer.propTypes = footerPropTypes;

export default Footer;
