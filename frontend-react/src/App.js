import GlobalStyle from './styles/global';
import { navbarButtons, handleContent } from './components/Navbar/index';

import { useState } from 'react';


function App() {
  const [content, setContent] = useState('home');
  const [taskId, setTaskId] = useState('');

  return (
    <>
      <GlobalStyle />
      { navbarButtons(content, setContent) }
      { handleContent(setContent, content, setTaskId, taskId) }
    </>
  );
}

export default App;
