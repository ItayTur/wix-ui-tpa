import {StylableDOMUtil} from 'stylable/test-utils';
import style from './ErrorMessageWrapper.st.css';

const stylableDOMUtil = new StylableDOMUtil(style);
export const errorMessageWrapperDriverFactory = ({element}) => {
  const getErrorMessageElement = () => element.querySelector(stylableDOMUtil.scopeSelector('.errorMessage'));
  return {
    exists: () => !!element,
    getErrorMessage: () => getErrorMessageElement().innerHTML,
    hasEmptyState: () => stylableDOMUtil.hasStyleState(element, 'empty'),
    hasErrorMessage: () => !!getErrorMessageElement()
  };
};