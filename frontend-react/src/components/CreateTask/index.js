import { useState } from 'react';
import { createTask } from '../../services/endpoint';
import { ToastContainer } from 'react-toastify';
import { success, error } from '../../utils/Toast/index';

import { CreateContainer, CreateBody } from './styles';

export default function CreateTask(){
  const [description, setDesc] = useState('');
  const completed = false;

  const handleCreateTask = async() => {
    try {
      await createTask(description, completed);
      success('😄 Tarefa criada com sucesso!', 'top-right');
      setDesc('');
    }
    catch (e) {
      error('😕 Não foi possível realizar o processo', 'top-right') 
    }
  }
  return(
    <>
    <ToastContainer />
    <CreateContainer> 
      <h3>Criar tarefa:</h3>
      <CreateBody>
        <span>Descrição</span>
        <input value={description} onChange={(event) => setDesc(event.target.value)} />
        <button disabled={description === ''} onClick={handleCreateTask}>Criar tarefa</button>
      </CreateBody>
    </CreateContainer>
    </>
  );
}