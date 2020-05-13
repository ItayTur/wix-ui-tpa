import * as React from 'react';
import * as examples from './examples';
import {
  header,
  api,
  divider,
  importExample,
  playground,
  tab,
  code as baseCode,
  tabs,
  testkit,
  title,
} from 'wix-storybook-utils/Sections';
import { allComponents } from '../../../../stories/utils/allComponents';
import { settingsPanel } from '../../../../stories/utils/SettingsPanel';
import * as MonthPickerWiringExampleRaw from '!raw-loader!./MonthPickerWiringExample.tsx';
import * as MonthPickerWiringExampleCSSRaw from '!raw-loader!./MonthPickerWiringExample.st.css';
import { MonthPickerWiringExample } from './MonthPickerWiringExample';
import { MonthPicker } from '../';

const code = config =>
  baseCode({ components: allComponents, compact: true, ...config });

export default {
  category: 'Components',
  storyName: 'MonthPicker',
  component: MonthPicker,
  componentPath: '../MonthPicker.tsx',
  componentProps: () => ({
    'data-hook': 'storybook-MonthPicker',
  }),
  exampleProps: {
    //
  },
  dataHook: 'storybook-MonthPicker',
  sections: [
    header(),
    tabs([
      tab({
        title: 'Usage',
        sections: [
          importExample({
            source: examples.importExample,
          }),

          divider(),

          title('Examples'),

          ...[{ title: 'Example', source: examples.example }].map(code),
        ],
      }),

      ...[
        { title: 'API', sections: [api()] },
        { title: 'TestKit', sections: [testkit()] },
        { title: 'Playground', sections: [playground()] },
        {
          title: 'Settings Panel',
          sections: [
            settingsPanel({
              title: 'MonthPicker Panel',
              example: <MonthPickerWiringExample />,
              rawSource: MonthPickerWiringExampleRaw,
              rawCSSSource: MonthPickerWiringExampleCSSRaw,
              params: {
                colors: [],
                fonts: [],
                numbers: [],
              },
            }),
          ],
        },
      ].map(tab),
    ]),
  ],
};
