import React from 'react';
import "./Board.css";
import { MoreHorizontal, Plus} from 'react-feather';

import Card from '../Card/Card'

const Board = ( props ) => {

    const logoReference = {
        "Backlog": <img src="https://cdn-icons-png.flaticon.com/128/10905/10905332.png" className='logo-pic' alt="Backlog" />,
        "Todo": <img src="https://cdn-icons-png.flaticon.com/128/446/446163.png" className='logo-pic' alt="Todo" />,
        "In progress": <img src="https://cdn-icons-png.flaticon.com/128/5460/5460873.png" className='logo-pic' alt="In progress" />,
        "Done": <img src="https://cdn-icons-png.flaticon.com/128/5461/5461184.png" className='logo-pic' alt="Done" />,
        "Cancelled": <img src="https://cdn-icons-png.flaticon.com/128/1008/1008968.png" className='logo-pic' alt="Cancelled" />
    };

  return (
    <div className='board'>
        <div className='board-top'>
            <div className='board-top-left'>
                {props.groupingOption === "status" && logoReference[props.title]}
                <p className='board-title bold'>{props.title}</p>
                <span className='board-count'>{props.count}</span>
            </div>
            <div className='board-top-right'>
                <MoreHorizontal className='icon'/>
                <Plus className='icon'/>
            </div>
        </div>
        <div className='card-container'>
            {props.tickets.map((ticket) => (
                <Card key={ticket.id} ticket={ticket} groupBy={props.groupingOption} users={props.users} />
            ))}
        </div>
    </div>
  );
};

export default Board