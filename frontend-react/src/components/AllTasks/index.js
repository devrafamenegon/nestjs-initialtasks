
import { useState, useEffect } from 'react';
import { getAll } from '../../services/endpoint';

import { HomeContainer, TasksContainer, TasksCards, TasksButtons, Button } from './styles';

export const AllTasks = ({setTaskId, setContent}) => {
  const [tasks, setTasks] = useState([])
  
  useEffect(() => {
    const fetchTask = async() => {

      const tasksRes = await getAll();
      setTasks(tasksRes.data);
    };
    fetchTask();
  }, []);

  function editClick(id){
    setTaskId(id);
    setContent('update');
  }

  return(
    <HomeContainer>
      <TasksContainer>
        {tasks.map(task => (
          <TasksCards key={task._id}>
            <li>
              <h3>{task.description}</h3>
              {task.completed ? "Tarefa completa" : "Tarefa pendente"}
              <TasksButtons>
                <Button type="submit" isEdit={true} onClick={() => editClick(task._id)}>Editar</Button>

                <Button isEdit={false}>Excluir</Button>
              </TasksButtons>
            </li> 
          </TasksCards>
        ))}

      </TasksContainer>
    </HomeContainer>
  );
}