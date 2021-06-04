
import { useState, useEffect } from 'react';
import { getAll, deleteTask } from '../../services/endpoint';
import 'reactjs-popup/dist/index.css';

import { HomeContainer, TasksContainer, TasksCards, TasksButtons, Button, StyledPopup, PopupModal, PopupButtonClose, PopupModalHeader, PopupModalContent, PopupModalActions, PopupButton, StyledFaPlusSquare, ContainerFaPlusSquare } from './styles';

export const AllTasks = ({setTaskId, setContent}) => {
  const [tasks, setTasks] = useState([]);
  
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

  const handleDelete = async (tasks, close) => {
    await deleteTask(tasks);
    const tasksRes = await getAll();
    setTasks(tasksRes.data);
    close();
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
                <Button isEdit={true} onClick={() => editClick(task._id)}>Editar</Button>
                <StyledPopup trigger={<Button>Excluir</Button>} modal nested>
                  {close => (
                    <PopupModal>
                      <PopupButtonClose onClick={close}>
                        &times;
                      </PopupButtonClose>
                      <PopupModalHeader> 🧨 Deseja excluir esta tarefa? </PopupModalHeader>
                      <PopupModalContent>
                        <h3>{task.description}</h3>
                        <span>{task.completed ? "Tarefa completa" : "Tarefa pendente"}</span>
                      </PopupModalContent>

                      <PopupModalActions>
                        <PopupButton isYes={true} onClick={() => handleDelete(task._id, close)}>Sim</PopupButton>
                        <PopupButton onClick={() => close()}>Não</PopupButton>
                      </PopupModalActions>
                    </PopupModal>
                  )}
                </StyledPopup>
              </TasksButtons>
            </li> 
          </TasksCards>
        ))}
        <ContainerFaPlusSquare>
          <StyledFaPlusSquare size="100%" onClick={() => setContent('create')}/>
        </ContainerFaPlusSquare>
      </TasksContainer>
    </HomeContainer>
  );
}