/**
 * Text Input
 *
     <FormLabel></FormLabel>
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React, { Component, PropTypes } from 'react';
import { FormLabel } from 'react-native-elements';

// Consts and Libs
import { AppColors, AppFonts } from '@theme/';

/* Component ==================================================================== */
class FormLabelSimple extends Component {
  static propTypes = {
    labelStyle: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.shape({}),
    ]),
    children: PropTypes.node,
  }

  static defaultProps = {
    containerStyle: [],
    labelStyle: [],
    children: null,
  }

  labelProps = () => {
    // Defaults
    const props = {
      ...this.props,
      labelStyle: [{
        color: AppColors.brand.secondary,
        fontFamily: AppFonts.base.family,
      }],
    };

    if (this.props.labelStyle) {
      props.labelStyle.push(this.props.labelStyle);
    }

    return props;
  }

  render = () => <FormLabel {...this.labelProps()}>{this.props.children}</FormLabel>;
}

/* Export Component ==================================================================== */
export default FormLabelSimple;