import React from 'react';

import Display from '../../components/Display/Display';

import './Input.scss';

export type InputProps = {
  value: any;
  onChange: (value: any, evt?: React.ChangeEvent<HTMLInputElement>) => void;
  type?: 'text' | 'number';
  placeholder?: string;
  renderIcon?: () => React.ReactNode;
  onPressEnter?: () => void;
};

const Input = ({
  value,
  onChange,
  type = 'text',
  placeholder = '',
  renderIcon = () => null,
  onPressEnter,
}: InputProps): JSX.Element => {
  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    onChange(evt.target.value, evt);
  }

  const handleKeyPress = (evt: React.KeyboardEvent) => {
    if (evt.code === 'Enter' && onPressEnter) {
      onPressEnter();
    }
  }

  return (
    <div className="input">
      <Display isVisible={renderIcon !== undefined}>
        {renderIcon()}
      </Display>
      <input
        onKeyPress={handleKeyPress}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={handleChange}
        className="input__field"
      />
    </div>
  )
}

export default Input;