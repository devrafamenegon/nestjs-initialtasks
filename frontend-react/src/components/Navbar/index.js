import {AllTasks} from '../AllTasks/index';
import CreateTask from '../CreateTask/index';
import {UpdateTask} from '../UpdateTask/index';
import { NavContainer, NavLinks } from './styles';

export const navbarButtons = (setContent) => {
  
  return(
    <NavContainer>
      
      <button onClick={() => setContent('home')}>
        <h1>Tasks</h1>
      </button>

      <NavLinks>
        <ul>
          <li>
            <button onClick={() => setContent('home')}>
              Home
            </button>
          </li>
          
          <li>
            <button onClick={() => setContent('create')}>
              Criar
            </button>
          </li>
        </ul>
      </NavLinks>

    </NavContainer>
  );
}

export const handleContent = (setContent, content, setTaskId, taskId) => {
  if(content === 'home') {
    return(
      <AllTasks setContent={setContent} setTaskId={setTaskId} taskId={taskId}/>
    )
  }

  if(content === 'create') {
    return(
      <CreateTask />
    )
  }

  if(content === 'update') {
    return(
      <UpdateTask setContent={setContent} tId={taskId}/>
    )
  }
}