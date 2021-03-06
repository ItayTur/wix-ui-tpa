import * as React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';
import { isUniEnzymeTestkitExists } from 'wix-ui-test-utils/enzyme';
import { isUniTestkitExists } from 'wix-ui-test-utils/vanilla';
import { mount } from 'enzyme';
import { colorPickerDriverFactory } from './ColorPicker.driver';
import { ColorPicker } from './';
import { colorPickerTestkitFactory } from '../../testkit';
import { colorPickerTestkitFactory as enzymeColorPickerTestkitFactory } from '../../testkit/enzyme';
import { eventually } from 'wix-ui-test-utils/dist/src/protractor/utils';

describe('ColorPicker', () => {
  const createDriver = createUniDriverFactory(colorPickerDriverFactory);

  it('should render', async () => {
    const driver = createDriver(<ColorPicker onChange={e => {}} />);
    expect(await driver.exists()).toBe(true);
  });

  it('should call onChange callback (select by index)', async () => {
    const onChange = jest.fn();

    const driver = createDriver(
      <ColorPicker onChange={onChange}>
        <ColorPicker.Item aria-label={'red color'} value={'red'} />
      </ColorPicker>,
    );

    await driver.selectByIndex(0);

    await eventually(() => expect(onChange).toBeCalled);
  });

  it('should call onChange callback (select by color)', async () => {
    const onChange = jest.fn();
    const color = 'red';

    const driver = createDriver(
      <ColorPicker onChange={onChange}>
        <ColorPicker.Item aria-label={'red color'} value={color} />
      </ColorPicker>,
    );

    await driver.selectByColor(color);

    await eventually(() => expect(onChange).toBeCalled);
  });

  describe('testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniTestkitExists(
          <ColorPicker onChange={e => {}} />,
          colorPickerTestkitFactory,
          {
            dataHookPropName: 'data-hook',
          },
        ),
      ).toBe(true);
    });
  });

  describe('enzyme testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniEnzymeTestkitExists(
          <ColorPicker onChange={e => {}} />,
          enzymeColorPickerTestkitFactory,
          mount,
          {
            dataHookPropName: 'data-hook',
          },
        ),
      ).toBe(true);
    });
  });
});
