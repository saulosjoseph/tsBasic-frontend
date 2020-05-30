import React from 'react';

interface Props {
  task: string;
}

const Card: React.FC<Props> = ({task}) => {
  return (
    <div>
      <p>{task}</p>
    </div>
  )
};

export default Card;