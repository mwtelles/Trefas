import { useState } from 'react';
import * as C from './App.styles';
import { Item } from './types/Item';
import { ListItem } from './components/ListItem';
import { InputArea } from './components/InputArea';

const App = () => {

  const [list, setList] = useState<Item[]>([
  ]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    });
    setList(newList);
  }

  const handleTaskChange = (id: number, done: boolean) => {
    let newList = [...list];
    for(let i in newList) {
      if(newList[i].id === id) {
        newList[i].done = done;
      }
    }
    setList(newList);
  }

  return (
    <C.Container> 
      <C.Area>
        <C.Header>Tarefas</C.Header>

        <InputArea onEnter={handleAddTask} />

        {list.map((item, index) => (
        <ListItem key={index} item={item} onChange={handleTaskChange} />
      ))}
      </C.Area>
    </C.Container>
  );
}

export default App;