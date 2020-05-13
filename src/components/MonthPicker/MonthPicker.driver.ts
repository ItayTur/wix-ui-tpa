import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';

export interface MonthPickerDriver extends BaseUniDriver {}

export const monthPickerDriverFactory = (
  base: UniDriver,
): MonthPickerDriver => {
  return {
    ...baseUniDriverFactory(base),
  };
};
