import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Typography } from '@mui/material';
import './App.css';
import FormComment from "./components/FormComment";
import Comments from "./components/Comments";
import FetchedComments from "./components/FetchedComments";
import Header from './components/Header';

const CustomInput = (props: React.HTMLProps<HTMLInputElement>) => {
  const [value, setValue] = useState<number>(100);
  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(parseInt(e.target.value, 10));
  }
  console.log('value = ',value);
  return (
    <input
      type='number'
      onChange={onChange}
      placeholder="Custom Input"
      className="my-input"
      {...props}
    />
  )
}

interface Person {
  name: string,
  height: number
}

async function getPerson ( id = 1): Promise<Person> {
  const response = await fetch(`https://swapi.dev/api/people/${id}`,{});

  return response.json();
}

// const CardPerson = () => {
//   const [person, setPerson] = useState<Person | null>(null);
//
//   const ref = useRef<HTMLDivElement>(null);
//
//   // useEffect(() => {
//   //     setInterval(() => {
//   //         value.current += 1;
//   //         console.log(value);
//   //     }, 1000)
//   // })
//
//   useEffect( () => {
//     getPerson().then(data => setPerson(data))
//   }, [])
//
//   return(
//     <p ref={ref}>
//       {person?.name}
//     </p>
//   )
// }

export default function App() {
  return (
    <>
      <Header />
    </>
  );
};

// export default function App() {
//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col">
//           <FormComment />
//         </div>
//       </div>
//       <div className="row">
//         <div className="col">
//           <h2>Синхронные комментарии</h2>
//           <Comments />
//         </div>
//         <div className="col">
//           <h2>Асинхронные комментарии</h2>
//           <FetchedComments />
//         </div>
//       </div>
//       <Title>
//         <a href="/">Test Title</a>
//       </Title>
//       <Typography variant="subtitle1" gutterBottom component="div" color="primary.dark">
//         subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
//         blanditiis tenetur
//       </Typography>
//       <CardPerson/>
//       <CustomInput  type={"text"}>
//       </CustomInput>
//     </div>
//   );
// };

