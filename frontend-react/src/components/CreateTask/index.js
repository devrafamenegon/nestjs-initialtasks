import { useState } from 'react';

import { createTask } from '../../services/endpoint';

import { CreateContainer, CreateBody } from './styles';

export default function CreateTask(){
  const [description, setDesc] = useState('');
  const completed = false;

  const handleCreateTask = async() => {
    await createTask(description, completed);
    setDesc('');
    
  }
  return(
    <CreateContainer>
      <h3>Criar tarefa:</h3>
      <CreateBody>
        <span>Descrição</span>
        <input value={description} onChange={(event) => setDesc(event.target.value)} />
        <button disabled={description === ''} onClick={handleCreateTask}>Criar tarefa</button>
      </CreateBody>
    </CreateContainer>
  );
}