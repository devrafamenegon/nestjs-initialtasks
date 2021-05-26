import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next';
import Head from 'next/head';
import { useState } from 'react';

import api from '../../services/index';
import { updateTask } from '../../services/endpoint';

import { EditIdContainer } from '../../styles/pages/edit';

export default function SlugId({task}){
  const [description, setDesc] = useState(task.description);
  const [completed, setCompleted] = useState(task.completed);

  const handleUpdateTask = async() => {
    await updateTask(task._id, description, completed);
  }
  return(
    <EditIdContainer>
      <input value={description} onChange={(event) => setDesc(event.target.value)} />
      <input value={completed} onChange={(event) => setCompleted(event.target.value)} />
      <button onClick={handleUpdateTask}>Editar tarefa</button>
    </EditIdContainer>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { id } = ctx.params;
  const { data } = await api.get(`/tasks/${id}`)

  const task = {
    id: data._id,
    description: data.description,
    completed: data.completed,
  };

  return {
    props: {
      task,
    },
  }
}