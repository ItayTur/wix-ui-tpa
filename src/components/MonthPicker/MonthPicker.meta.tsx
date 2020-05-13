import { MonthPicker } from '.';
import Registry from '@ui-autotools/registry';

const MonthPickerMetadata = Registry.getComponentMetadata(MonthPicker);
MonthPickerMetadata.nonReactStrictModeCompliant = true;

MonthPickerMetadata.addSim({
  title: 'render',
  props: {
    buttonText: 'Click me!',
  },
});
