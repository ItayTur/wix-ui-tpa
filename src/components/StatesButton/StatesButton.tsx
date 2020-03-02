import * as React from 'react';
import * as classNames from 'classnames';
import style from './StatesButton.st.css';
import { Button, ButtonProps } from '../Button';
import { TPAComponentProps } from '../../types';
import { BUTTON_STATES } from './constants';
import Timeout = NodeJS.Timeout;

export interface StatesButtonProps extends ButtonProps, TPAComponentProps {
  state: BUTTON_STATES;
  disabled: boolean;
  idleContent: string | React.ReactElement;
  inProgressContent?: string | React.ReactElement;
  successContent?: string | React.ReactElement;
  onSuccessEnd?: Function;
  dataHook?: string;
}

export class StatesButton extends React.Component<StatesButtonProps> {
  private timer: Timeout;

  componentDidUpdate = ({ state: prevState }: StatesButtonProps) => {
    const { state: currentState, onSuccessEnd } = this.props;

    if (currentState !== prevState) {
      clearTimeout(this.timer);
    }

    if (
      currentState === BUTTON_STATES.SUCCESS &&
      prevState !== BUTTON_STATES.SUCCESS
    ) {
      this.timer = setTimeout(() => onSuccessEnd && onSuccessEnd(), 2000);
    }
  };

  public buttonRef = React.createRef<HTMLButtonElement>();

  public focus = () => {
    this.buttonRef.current.focus();
  };

  private isDisabled(): boolean {
    return (
      this.props.state === BUTTON_STATES.IN_PROGRESS || this.props.disabled
    );
  }

  private readonly debounceOnClick = e => {
    const { state, onClick } = this.props;
    if (state !== BUTTON_STATES.SUCCESS) {
      onClick(e);
    }
  };

  private renderCheck() {
    return (
      <div className={classNames(style.successIcon)}>
        <Check size="1em" data-hook={'checkIcon'} />
      </div>
    );
  }

  private renderContent(): React.ReactElement | string {
    const {
      state,
      idleContent,
      inProgressContent,
      successContent,
    } = this.props;

    switch (state) {
      case BUTTON_STATES.IDLE:
        return idleContent;
      case BUTTON_STATES.IN_PROGRESS:
        return inProgressContent;
      case BUTTON_STATES.SUCCESS:
        return successContent ? successContent : this.renderCheck();
      default:
        return idleContent;
    }
  }

  public render() {
    const {
      state,
      disabled,
      dataHook,
      onClick,
      idleContent,
      inProgressContent,
      successContent,
      onSuccessEnd,
      ...rest
    } = this.props;
    const inProgress = state === BUTTON_STATES.IN_PROGRESS;

    return (
      <Button
        data-hook={dataHook}
        disabled={this.isDisabled()}
        onClick={this.debounceOnClick}
        ref={this.buttonRef}
        aria-live="assertive"
        {...(inProgress && { 'aria-busy': true })}
        {...rest}
        {...style('root', {}, this.props)}
      >
        {this.renderContent()}
      </Button>
    );
  }
}

const Check: React.FunctionComponent<{ size: string }> = ({
  size,
  ...props
}) => (
  <svg
    viewBox="0 0 16 12"
    fill="currentColor"
    width={size || '16'}
    height={size || '12'}
    {...props}
  >
    <g stroke="none" fill="none" strokeWidth="1" fillRule="evenodd">
      <g transform="translate(-58 -14)" fill="currentColor">
        <g transform="translate(54 8)">
          <path d="M18.3136362,7.71301485 L18.6360088,7.36934666 L18.6353838,7.34268869 L18.2990357,7.69884361 L18.3136362,7.71301485 Z M5.31339777,12.4034164 L5.31535398,12.4279974 L5.68535858,12.7239424 L5.69635283,12.7097196 L5.31339777,12.4034164 Z M18.2802035,6.28698515 L19.7009643,7.66597596 L10.3083211,17.6790879 L4.30364717,12.8763019 L5.51599094,11.3079495 L10.1177586,14.9886332 L18.2802035,6.28698515 Z" />
        </g>
      </g>
    </g>
  </svg>
);
