import { useState, useEffect } from 'react';

import { updateTask, getById } from '../../services/endpoint';

import { CreateContainer, CreateBody } from './styles';

export const UpdateTask = ({setContent, tId}) => {
  const [task, setTask] = useState({});
  const [id, setId] = useState(tId);
  const [description, setDesc] = useState('');
  const [completed, setCompleted] = useState('');

  useEffect(() => {
    const fetchTask = async() => {

      const taskRes = await getById(id);
      setCompleted(taskRes.data.completed);
      setDesc(taskRes.data.description);
    };
    fetchTask();
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
        <span>Status</span>
        <input type="" value={completed} onChange={(event) => setCompleted(event.target.value)} />
        <button disabled={description === ''} onClick={() => editClick()}>Editar</button>
      </CreateBody>
    </CreateContainer>
  );
}