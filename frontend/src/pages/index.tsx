import Head from 'next/head'
import axios from 'axios';

import { HomeContainer } from '../styles/pages/index';


export default function Home({data}) {
  return (
    <HomeContainer>
      <Head>
        <title>Home | Tasks</title>
      </Head>
      <main>
        <h1>Index</h1>
        {console.log(data)}
        <ul>
          {data.map(task => {
            <li key={data._id}>
              <h2>{task.description}</h2>
            </li>
          })}
        </ul>
      </main>
    </HomeContainer>
  );
}

Home.getInitialProps = async () => {
  const response = await axios.get('http://localhost:8080/tasks');
  return { data: response.data };
}