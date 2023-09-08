import React from 'react';
import "./Card.css";
import { MoreHorizontal } from 'react-feather';

const Card = ( props ) => {
    
    const logoReference = {
        "Backlog": <img src="https://cdn-icons-png.flaticon.com/128/10905/10905332.png" className='logo-pic' alt="Backlog" />,
        "Todo": <img src="https://cdn-icons-png.flaticon.com/128/446/446163.png" className='logo-pic' alt="Todo" />,
        "In progress": <img src="https://cdn-icons-png.flaticon.com/128/5460/5460873.png" className='logo-pic' alt="In progress" />,
        "Done": <img src="https://cdn-icons-png.flaticon.com/128/5461/5461184.png" className='logo-pic' alt="Done" />,
        "Cancelled": <img src="https://cdn-icons-png.flaticon.com/128/1008/1008968.png" className='logo-pic' alt="Cancelled" />
    };

  const { ticket, users } = props;

  const getUserById = (userId) => {
    return users.find((user) => user.id === userId);
  };

  const getInitials = (name) => {
    const nameParts = name.split(' ');
    const firstName = nameParts[0];
    const lastName = nameParts.length > 1 ? nameParts[1] : '';
    const initials = `${firstName.charAt(0)}${lastName ? lastName.charAt(0) : ''}`;
    return initials.toUpperCase();
  };

  const getRandomColor = () => {
    const letters='0123456789ABCDEF';
    let color='#';
    for (let i=0;i<6;i++) {
      color+=letters[Math.floor(Math.random()*7)];
    }
    return color;
  };

  const user = getUserById(ticket.userId);
  const initials = user ? getInitials(user.name) : '';

  return (
    <div className='card'>
      <div className='card-top'>
        <p className='card-title'>{props.ticket.id}</p>
        {props.groupBy !== 'user' && (
            <div
            className="user-pic"
            style={{
              backgroundColor: getRandomColor()
            }}
          >
            {initials}
          </div>
        )}

      </div>
      <div className='card-middle'>
        {props.groupBy !== 'status' && logoReference[props.ticket.status]}
        <p className='card-desc bold'>
          {props.ticket.title}
        </p>
      </div>
      <div className='card-bottom'>
        {props.groupBy !== 'priority' && (
          <div className='component-1 pointer'>
            <MoreHorizontal className='icon' />
          </div>
        )}
        <div className='component-2 pointer'>
          <img
            src="https://cdn-icons-png.flaticon.com/128/5720/5720434.png"
            className='icon'
            alt='logo'
          />
          <p>{props.ticket.tag[0]}</p>
        </div>
      </div>
    </div>
  );
};

export default Card