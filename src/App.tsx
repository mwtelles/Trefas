import { useState } from 'react';
import * as C from './App.styles';
import { Item } from './types/Item';
import { ListItem } from './components/ListItem';

const App = () => {

  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'Comprar pão', done: false },
    { id: 2, name: 'Comprar leite', done: true },
  ]);

  return (
    <C.Container> 
      <C.Area>
        <C.Header>Tarefas</C.Header>
        {list.map((item, index) => (
        <ListItem key={index} item={item} />
      ))}
      </C.Area>
    </C.Container>
  );
}

export default App;