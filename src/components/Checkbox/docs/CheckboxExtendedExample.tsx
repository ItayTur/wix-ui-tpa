import * as React from 'react';
import { Checkbox } from '../index';
import extendedStyles from './CheckboxExtendedExample.st.css';

export const CheckboxExtendedExample = () => {
  const [value, setValue] = React.useState(false);

  return (
    <div>
      <div>
        <h3>Checkbox</h3>
        <Checkbox
          checked={value}
          onChange={({ checked }) => setValue(checked)}
          label={value ? 'Hakol tov!' : 'Click me, ah sheli!'}
          {...extendedStyles('root')}
        />
      </div>
    </div>
  );
};
