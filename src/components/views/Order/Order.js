// react
import React from 'react';
import PropTypes from 'prop-types';

// styles
import clsx from 'clsx';
import styles from './Order.module.scss';

// components
import Checkout from '../../features/Chceckout/Checkout';

// material-ui

// redux
// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

const Component = ({className, children}) => (
  <div className={clsx(className, styles.root)}>
    <Checkout />
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Order,
  // Container as Order,
  Component as OrderComponent,
};
