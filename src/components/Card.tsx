import React from 'react';

interface ICard {
  status: string;
  tasks: string[];
}

interface Props {
  card: ICard;
}

const Card: React.FC<Props> = ({ card }) => {
  return (
    <div>
      <h3>{card.status}</h3>
      <div>
      { card.tasks.map(task => {
        return (
          <div key={task}>
            <p>{task}</p>
          </div>
        )
      })}
      </div>
    </div>
  )
};

export default Card;