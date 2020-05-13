import { browser } from 'protractor';
import {
  createStoryUrl,
  waitForVisibilityOf,
} from 'wix-ui-test-utils/protractor';
import { monthPickerTestkitFactory } from '../../testkit/protractor';

/**
 * For tests containing interactions.
 * Can be removed if not used.
 * */
describe('monthPicker', () => {
  const storyUrl = createStoryUrl({
    kind: 'Components',
    story: 'MonthPicker',
    withExamples: true,
  });
  const dataHook = 'storybook-MonthPicker';

  beforeEach(() => browser.get(storyUrl));

  it('should render', async () => {
    const driver = monthPickerTestkitFactory({ dataHook });
    await waitForVisibilityOf(
      await driver.element(),
      'Cannot find MonthPicker',
    );
    expect((await driver.element()).isDisplayed()).toBe(true);
  });
});
