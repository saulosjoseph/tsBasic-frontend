import React, { useEffect, useState } from 'react';
import api from './services/api';

import Card from './components/Card';

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
      { cards.map(card => <Card key={card.status} card={card} /> )}
    </div>
  );
}

export default App;
