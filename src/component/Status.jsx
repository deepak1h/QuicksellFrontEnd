import React from 'react';
import { useSelector } from 'react-redux';

function getInitials(name) {
  return name
    .split(' ')
    .map(part => part[0].toUpperCase())
    .join('');
}


const Status = ({ userId }) => {
  const userData = useSelector((state) => state.data.allUser);
  const user = userData.find((user) => user.id === userId);
  const isUserAvailable = user ? user.available : false;
  const statusColor = isUserAvailable ? '#00ff00' : '#FF0000';

  const circleStyle = {
    
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    border: '1px solid white',
    position:'absolute',
    bottom: '-4px',
    right: '-2px',
    backgroundColor: statusColor,
    display: 'inline-block',
  };

  const randomColorStyle = {
    backgroundColor: `var(--color-${userId[4]})`,
  };

  return (
  <div className='randomColor' style={randomColorStyle}>{getInitials(user.name)}
    <div style={circleStyle}></div>
  </div>
  );
};

export default Status;
