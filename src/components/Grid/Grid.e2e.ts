import * as eyes from 'eyes.it';
import { browser } from 'protractor';
import {
  createStoryUrl,
  waitForVisibilityOf,
} from 'wix-ui-test-utils/protractor';
import { gridTestkitFactory } from '../../testkit/protractor';

describe('grid', () => {
  const storyUrl = createStoryUrl({
    kind: 'Bookings',
    story: 'Grid',
    withExamples: true,
  });
  const dataHook = 'storybook-Grid';

  beforeEach(() => browser.get(storyUrl));

  eyes.it('should render', async () => {
    const driver = gridTestkitFactory({ dataHook });
    await waitForVisibilityOf(await driver.element(), 'Cannot find Grid');
    expect((await driver.element()).isDisplayed()).toBe(true);
  });
});
