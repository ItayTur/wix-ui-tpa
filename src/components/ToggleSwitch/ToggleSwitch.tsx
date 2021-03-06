import * as React from 'react';
import style from './ToggleSwitch.st.css';
import {
  ToggleSwitch as CoreToggleSwitch,
  ToggleSwitchProps as CoreToggleSwitchProps,
} from 'wix-ui-core/toggle-switch';
import { TPAComponentProps } from '../../types';

export interface ToggleSwitchProps
  extends CoreToggleSwitchProps,
    TPAComponentProps {}

export class ToggleSwitch extends React.Component<ToggleSwitchProps> {
  static displayName = 'ToggleSwitch';
  static defaultProps = { ...CoreToggleSwitch.defaultProps };

  render() {
    const { checked, disabled, ...rest } = this.props;

    return (
      <CoreToggleSwitch
        checked={checked}
        disabled={disabled}
        {...rest}
        {...style('root', { checked, disabled }, rest)}
      />
    );
  }
}
