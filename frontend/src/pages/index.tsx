import React from 'react';
import Head from 'next/head'
import axios from 'axios';

import { useState, useEffect } from 'react';
import { getAll } from '../services/endpoint';

import { HomeContainer, TasksContainer, TasksCards, TasksButtons, Button } from '../styles/pages/index';

export default function Home({data}) {
  //const [tasks, setTasks] = useState([]);

  // useEffect(() =>{
  //   const fetchTasks = async () => {
  //     const getTasks = await getAll();
  //     setTasks(getTasks.data);
  //   };
  //   fetchTasks();
  // }, [])

  return (
    <HomeContainer>
      <Head>
        <title>Home | Tasks</title>
      </Head>

      <TasksContainer>
        {data.map(task => (
          <TasksCards key={task._id}>
            <li>
              <h3>{task.description}</h3>
              {task.completed ? "Tarefa completa" : "Tarefa pendente"}
              <TasksButtons>
                <Button type="submit" isEdit={true}><a href={`/edit/${task._id}`}>Editar</a></Button>
                <Button isEdit={false}>Excluir</Button>
              </TasksButtons>
            </li> 
          </TasksCards>
        ))}
      </TasksContainer>
    </HomeContainer>
  );
}

Home.getInitialProps = async () => {
  const response = await axios.get('http://localhost:8080/tasks');
  return { data: response.data };
}