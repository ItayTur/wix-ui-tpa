import * as React from 'react';
import { Text } from '../Text';
import { Button } from '../Button';
import ChevronRight from 'wix-ui-icons-common/ChevronRight';
import ChevronLeft from 'wix-ui-icons-common/ChevronLeft';
import styles from './MonthPicker.st.css';

export interface MonthPickerProps {
  value: any;
  previousClickHandler(): void;
  nextClickHandler(): void;
}

interface DefaultProps {}

interface State {}

/** MonthPicker */
export class MonthPicker extends React.Component<MonthPickerProps, State> {
  static defaultProps: DefaultProps = {};

  render() {
    const {
      previousClickHandler,
      value,
      nextClickHandler,
      ...rest
    } = this.props;

    return (
      <div {...styles('root', {}, rest)}>
        <ChevronLeft
          className={styles.navigator}
          onClick={previousClickHandler}
        />
        <Text className={styles.value}>{value}</Text>
        <ChevronRight className={styles.navigator} onClick={nextClickHandler} />
      </div>
    );
  }
}
