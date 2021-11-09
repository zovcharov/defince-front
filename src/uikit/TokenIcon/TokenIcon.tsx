import React from 'react';
import cn from 'classnames';

import intToRgb from '../../utils/intToRgb';
import getStringHashCode from '../../utils/getStringHashCode';
import hexToRgba from '../../utils/hexToRgba';

import './TokenIcon.scss';

type SizeType = 'xs' | 's' | 'm' | 'l' | 'xl';

const TokenIcon = ({ name, size = 'xs' }: { name: string, size?: SizeType }): JSX.Element => {
  const cnTokenIcon = cn('token-icon', {
    [`token-icon--size-${size}`]: !!size,
  });

  const color = `#${intToRgb(getStringHashCode(name))}`;
  const backgroundColor = hexToRgba(color, '0.3');

  const style = {
    color,
    backgroundColor,
  };

  return (
    <div className={cnTokenIcon} style={style}>
      {name.substr(0, 2)}
    </div>
  )
}

export default TokenIcon;