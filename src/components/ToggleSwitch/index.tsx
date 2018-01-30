import {ToggleSwitch, ToggleSwitchProps} from 'wix-ui-core/StylableToggleSwitch';
import toggleSwitchStyles from './ToggleSwitch.st.css';
import {withStylable} from 'wix-ui-core/dist/src';

export const TpaToggleSwitch = withStylable<ToggleSwitchProps>(ToggleSwitch, toggleSwitchStyles, () => null);