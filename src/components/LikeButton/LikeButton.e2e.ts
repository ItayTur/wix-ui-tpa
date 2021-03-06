import { browser } from 'protractor';
import {
  createStoryUrl,
  waitForVisibilityOf,
} from 'wix-ui-test-utils/protractor';
import { likeButtonTestkitFactory } from '../../testkit/protractor';

/**
 * For tests containing interactions.
 * Can be removed if not used.
 * */
describe('likeButton', () => {
  const storyUrl = createStoryUrl({
    kind: 'Components',
    story: 'LikeButton',
    withExamples: true,
  });
  const dataHook = 'storybook-LikeButton';

  beforeEach(() => browser.get(storyUrl));

  it('should render', async () => {
    const driver = likeButtonTestkitFactory({ dataHook });
    await waitForVisibilityOf(driver.element(), 'Cannot find LikeButton');
    expect(await driver.element().isDisplayed()).toBe(true);
  });
});
