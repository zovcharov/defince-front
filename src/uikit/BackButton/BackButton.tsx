import React from 'react';

import './BackButton.scss';

const BackButton = ({ onClick }: { onClick?: () => void }): JSX.Element => {
  const handleClick = () => onClick && onClick();

  return (
    <div onClick={handleClick} className="back-button">
      <svg width="50px" height="50px" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
        <path fill="#fff" d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17-7.6 17-17 17zm0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15 15-6.7 15-15-6.7-15-15-15z"/>
        <path fill="#fff" d="M25.3 34.7L15.6 25l9.7-9.7 1.4 1.4-8.3 8.3 8.3 8.3z"/>
        <path fill="#fff" d="M17 24h17v2H17z" />
      </svg>
    </div>
  )
}

export default BackButton;