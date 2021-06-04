import {AllTasks} from '../AllTasks/index';
import CreateTask from '../CreateTask/index';
import {UpdateTask} from '../UpdateTask/index';
import { NavContainer, NavLinks, NavButton } from './styles';

export const navbarButtons = (content, setContent) => {
  
  return(
    <NavContainer>
      
      <button onClick={() => setContent('home')}>
        <h1>Tasks</h1>
      </button>

      <NavLinks>
        <ul>
          <li>
            <NavButton isActive={content === 'home'} onClick={() => setContent('home')}>
              Home
            </NavButton>
          </li>
          
          <li>
            <NavButton isActive={content === 'create'} onClick={() => setContent('create')}>
              Criar
            </NavButton>
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