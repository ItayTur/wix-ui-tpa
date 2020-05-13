import * as React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';
import { isUniEnzymeTestkitExists } from 'wix-ui-test-utils/enzyme';
import { isUniTestkitExists } from 'wix-ui-test-utils/vanilla';
import { mount } from 'enzyme';
import { TPAComponentsWrapper } from '../../test/utils';
import { monthPickerDriverFactory } from './MonthPicker.driver';
import { MonthPicker } from './';
import { monthPickerTestkitFactory } from '../../testkit';
import { monthPickerTestkitFactory as enzymeMonthPickerTestkitFactory } from '../../testkit/enzyme';

describe('MonthPicker', () => {
  const createDriver = createUniDriverFactory(monthPickerDriverFactory);

  it('should render', async () => {
    const driver = createDriver(<MonthPicker buttonText="Click Me" />);
    expect(await driver.exists()).toBe(true);
  });

  describe('testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniTestkitExists(<MonthPicker />, monthPickerTestkitFactory, {
          dataHookPropName: 'data-hook',
        }),
      ).toBe(true);
    });
  });

  describe('enzyme testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniEnzymeTestkitExists(
          <MonthPicker />,
          enzymeMonthPickerTestkitFactory,
          mount,
          {
            dataHookPropName: 'data-hook',
          },
        ),
      ).toBe(true);
    });
  });
});
