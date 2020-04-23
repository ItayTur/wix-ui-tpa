import * as React from 'react';
import { RadioButton as CoreRadioButton } from 'wix-ui-core/radio-button';
import styles from './RadioButton.st.css';

export interface RadioButtonChangeEvent
  extends React.MouseEvent<HTMLDivElement> {
  value: string;
}

export interface RadioButtonClickEvent
  extends React.MouseEvent<HTMLDivElement> {
  value: string;
}

export interface RadioButtonProps {
  checked?: boolean;
  disabled?: boolean;
  value: string;
  name?: string;
  label: string;
  onChange(event: RadioButtonChangeEvent | RadioButtonClickEvent): void;
}

interface DefaultProps {
  checked: boolean;
  disabled: boolean;
  name: string;
}

/** RadioButton */
export class RadioButton extends React.Component<
  RadioButtonProps
  > {
  static displayName = 'RadioButton';
  static defaultProps: DefaultProps = {
    checked: false,
    disabled: false,
    name: '',
  };

  render() {
    const {
      checked,
      disabled,
      value,
      label,
      name,
      onChange,
      ...rest
    } = this.props;
    const radioBtnIcon = <span className={styles.checkmark}/>;
    return (
      <CoreRadioButton
        {...styles('root', {checked, disabled}, rest)}
        checked={checked}
        disabled={disabled}
        value={value}
        label={<label>{label}</label>}
        name={name}
        onChange={onChange}
        checkedIcon={radioBtnIcon}
        uncheckedIcon={radioBtnIcon}
      />
    );
  }
}
