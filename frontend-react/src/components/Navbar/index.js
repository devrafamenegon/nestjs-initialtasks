import {AllTasks} from '../AllTasks/index';
import CreateTask from '../CreateTask/index';
import {UpdateTask} from '../UpdateTask/index';

import { NavContainer, NavLinks, NavButton, StyledFaHome, StyledFaPlusSquare } from './styles';

export const navbarButtons = (content, setContent) => {
  
  return(
    <NavContainer>
      
      <button onClick={() => setContent('home')}>
        <h1>Tasks</h1>
      </button>

      <NavLinks>
        <ul>
          <li>
            <NavButton onClick={() => setContent('home')}>
              <StyledFaHome isActive={content === 'home'} size="50px"/>
            </NavButton>
          </li>
          
          <li>
            <NavButton onClick={() => setContent('create')}>
              <StyledFaPlusSquare isActive={content === 'create'} size="50px"/>
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