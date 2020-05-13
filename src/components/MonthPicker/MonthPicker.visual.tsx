import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { VisualTestContainer } from '../../../test/visual/VisualTestContainer';
import { MonthPicker } from './';

class MonthPickerVisual extends React.Component<any> {
  render() {
    return (
      <VisualTestContainer>
        <MonthPicker {...this.props} />
      </VisualTestContainer>
    );
  }
}

const tests = [
  {
    describe: 'basic',
    its: [
      {
        it: 'default',
        props: {},
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`MonthPicker/${describe}`, module).add(it, () => (
      <MonthPickerVisual {...props} />
    ));
  });
});
