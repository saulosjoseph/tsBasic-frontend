import React, { useEffect, useState } from 'react';
import api from './services/api';

import Board from './components/Board';

interface ICard {
  status: string;
  tasks: string[];
}

function App() {
  const [cards, setCards] = useState<ICard[]>([]);

  useEffect(() => {
    api.get<ICard[]>('/todo').then(response => {
      setCards(response.data);
    });
  }, []);
  
  return (
    <div className="App">
      <div className="boards">
        { cards.map(card => <Board key={card.status} card={card} /> )}
      </div>      
    </div>
  );
}

export default App;
