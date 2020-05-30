import React from 'react';

import Card from './Card';

interface ICard {
  status: string;
  tasks: string[];
}

interface Props {
  card: ICard;
}

const Board: React.FC<Props> = ({ card }) => {

  const dragStartHandler = () => {
    console.log('teste');
  }

  return (
    <div className='board'>
      <h3>{card.status}</h3>
      <div className='dropzone'>
      { card.tasks.map(task => {
        return (
          <div 
          className='card'
          draggable='true'
          onDragStart={dragStartHandler}
          onDrag={dragStartHandler}
          onDragEnd={dragStartHandler}
          key={task}>
            <Card key={task} task={task} />
          </div>
        )
      })}
      </div>
    </div>
  )
};

export default Board;