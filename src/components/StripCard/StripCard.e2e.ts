import * as eyes from 'eyes.it';
import { browser } from 'protractor';
import {
  createStoryUrl,
  waitForVisibilityOf,
} from 'wix-ui-test-utils/protractor';
import { stripCardTestkitFactory } from '../../testkit/protractor';

describe('stripCard', () => {
  const storyUrl = createStoryUrl({
    kind: 'Bookings',
    story: 'StripCard',
    withExamples: true,
  });
  const dataHook = 'storybook-StripCard';

  beforeEach(() => browser.get(storyUrl));

  eyes.it('should render', async () => {
    const driver = stripCardTestkitFactory({ dataHook });
    await waitForVisibilityOf(await driver.element(), 'Cannot find StripCard');
    expect((await driver.element()).isDisplayed()).toBe(true);
  });
});
