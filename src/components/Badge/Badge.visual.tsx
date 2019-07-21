import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Badge, BADGE_PRIORITY } from './';
import { VisualContainerElement } from '../../../test/visual/VisualContainerElement';

class BadgeVisual extends React.Component<any> {
  render() {
    return (
      <VisualContainerElement>
        <Badge {...this.props} />
      </VisualContainerElement>
    );
  }
}

const tests = [
  {
    describe: 'basic',
    its: [
      {
        it: 'default',
        props: {
          priority: BADGE_PRIORITY.default,
          children: ['Default'],
        },
      },
      {
        it: 'primary',
        props: {
          priority: BADGE_PRIORITY.primary,
          children: ['Primary'],
        },
      },
      {
        it: 'light',
        props: {
          priority: BADGE_PRIORITY.light,
          children: ['Light'],
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`Badge/${describe}`, module).add(it, () => (
      <BadgeVisual {...props} />
    ));
  });
});
