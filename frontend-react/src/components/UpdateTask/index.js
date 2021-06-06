import { useState, useEffect } from 'react';

import { updateTask, getById } from '../../services/endpoint';

import { CreateContainer, CreateBody, StatusContainer, StatusRadioContainer } from './styles';

export const UpdateTask = ({setContent, tId}) => {
  const [description, setDesc] = useState('');
  const [completed, setCompleted] = useState('');
  const id = tId;

  useEffect(() => {
    const fetchTask = async() => {

      const taskRes = await getById(id);
      setCompleted(taskRes.data.completed);
      setDesc(taskRes.data.description);
    };
    fetchTask();

  //eslint-disable-next-line
  }, []);

  const handleUpdateTask = async () => {
    await updateTask(id, description, completed);
  }

  async function editClick() {
    await handleUpdateTask();
    setContent('home');
  }

  return(
    <CreateContainer>
      <h3>Editar tarefa:</h3>
      <CreateBody>
        <span>Descrição</span>
        <input value={description} onChange={(event) => setDesc(event.target.value)} />
        
        <StatusContainer>
          <span>Status</span>
          <StatusRadioContainer>
            <input type="radio" name="status" checked={completed === false} onChange={() => setCompleted(false)} />
            <label>Pendente</label>
          </StatusRadioContainer>
            
          <StatusRadioContainer>
            <input type="radio" name="status" checked={completed === true} onChange={() => setCompleted(true)} />
            <label>Completo</label>
          </StatusRadioContainer>
        </StatusContainer>

        <button disabled={description === ''} onClick={() => editClick()}>Editar</button>
      </CreateBody>
    </CreateContainer>
  );
}