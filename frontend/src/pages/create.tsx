import Head from 'next/head';
import { useState } from 'react';

import { createTask } from '../services/endpoint';

import { CreateContainer } from '../styles/pages/create';

export default function SlugId(){
  const [description, setDesc] = useState('');
  const [completed, setCompleted] = useState('');

  const handleCreateTask = async() => {
    await createTask(description, completed);
  }
  return(
    <CreateContainer>
      <input value={description} onChange={(event) => setDesc(event.target.value)} />
      <input value={completed} onChange={(event) => setCompleted(event.target.value)} />
      <button onClick={handleCreateTask}>Editar tarefa</button>
    </CreateContainer>
  );
}