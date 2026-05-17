// import TaskItem from './TaskItem';

// function TaskList() {
//     const tasks = [ 'Изучить React', 'Сделать практику', 'Подготовиться к защите'];

//     return (
//         <ul>
//             {tasks.map((task, index) => (
//                 <TaskItem key={index} title={task} />
//             ))}
//         </ul>
//     );
// }

// export default TaskList;

// import TaskItem from './TaskItem';

// function TaskList({ tasks }) {
//   return (
//     <ul>
//       {tasks.map((task, index) => (
//         <TaskItem key={index} title={task} />
//       ))}
//     </ul>
//   );
// }

// export default TaskList;

// import TaskItem from './TaskItem';

// function TaskList({ tasks }) {
//   return (
//     <ul>
//       {tasks.map((task) => (
//         <TaskItem key={task.id} title={task.title} />
//       ))}
//     </ul>
//   );
// }

// export default TaskList;

// import TaskItem from './TaskItem';

// function TaskList({ tasks, deleteTask }) {  // принимаем deleteTask
//   return (
//     <ul>
//       {tasks.map((task) => (
//         <TaskItem 
//           key={task.id} 
//           task={task}  // передаем весь объект задачи
//           deleteTask={deleteTask}  // передаем функцию удаления
//         />
//       ))}
//     </ul>
//   );
// }
// export default TaskList;

// import TaskItem from './TaskItem';

// function TaskList({ tasks, deleteTask }) {
//   return (
//     <ul style={{
//       maxWidth: '600px',
//       margin: '0 auto',
//       listStyle: 'none'
//     }}>
//       {tasks.map((task) => (
//         <TaskItem 
//           key={task.id} 
//           task={task} 
//           deleteTask={deleteTask}
//         />
//       ))}
//     </ul>
//   );
// }

// export default TaskList;


// import { useState, useEffect } from 'react';  // ← ДОБАВИЛИ ЭТУ СТРОКУ
// import TaskItem from './TaskItem';

// function TaskList({ deleteTask }) {
//   // ↓↓↓ ДОБАВИЛИ ЭТИ 3 СТРОКИ ↓↓↓
//   const [tasks, setTasks] = useState([]);        // тут будут храниться задачи
//   const [loading, setLoading] = useState(true);   // грузим или нет?
//   const [error, setError] = useState(null);       // ошибка или нет?
//   // ↑↑↑ ДОБАВИЛИ ЭТИ 3 СТРОКИ ↑↑↑

//   // ↓↓↓ ДОБАВИЛИ ВОТ ЭТОТ КУСОК ЦЕЛИКОМ ↓↓↓
//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
//       .then((response) => response.json())
//       .then((data) => {
//         setTasks(data);
//         setLoading(false);
//       })
//       .catch(() => {
//         setError('Ошибка загрузки данных');
//         setLoading(false);
//       });
//   }, []);
//   // ↑↑↑ ДОБАВИЛИ ВОТ ЭТОТ КУСОК ЦЕЛИКОМ ↑↑↑

//   // ↓↓↓ ДОБАВИЛИ ПРОВЕРКУ ЗАГРУЗКИ ↓↓↓
//   if (loading) {
//     return <p style={{ textAlign: 'center', color: '#eb7abc', fontSize: '1.2rem', marginTop: '40px' }}>Загрузка...</p>;
//   }
//   // ↑↑↑ ДОБАВИЛИ ПРОВЕРКУ ЗАГРУЗКИ ↑↑↑

//   // ↓↓↓ ДОБАВИЛИ ПРОВЕРКУ ОШИБКИ ↓↓↓
//   if (error) {
//     return <p style={{ textAlign: 'center', color: 'red', fontSize: '1.2rem', marginTop: '40px' }}>{error}</p>;
//   }
//   // ↑↑↑ ДОБАВИЛИ ПРОВЕРКУ ОШИБКИ ↑↑↑

//   return (
//     <ul style={{
//       maxWidth: '600px',
//       margin: '0 auto',
//       listStyle: 'none'
//     }}>
//       {tasks.map((task) => (
//         <TaskItem 
//           key={task.id} 
//           task={task} 
//           deleteTask={deleteTask}
//         />
//       ))}
//     </ul>
//   );
// }

// export default TaskList;


// import { useState, useEffect } from 'react';
// import TaskItem from './TaskItem';
// import todosData from '../data';  // ← Импортируем данные

// function TaskList({ deleteTask }) {
//   // Состояния ТОЧНО как в документе (страница 3)
//   const [tasks, setTasks] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // useEffect с fetch ТОЧНО как в документе (страница 3)
//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
//       .then((response) => response.json())
//       .then((data) => {
//         setTasks(data);
//         setLoading(false);
//       })
//       .catch(() => {
//         // Если fetch не сработал (нет интернета) — берём данные из файла
//         console.log('API недоступен, загружаем локальные данные');
//         // Имитируем задержку как у настоящего сервера
//         setTimeout(() => {
//           setTasks(todosData);
//           setLoading(false);
//         }, 1000); // задержка 1 секунда как настоящая загрузка
//       });
//   }, []);

//   // Обработка состояний ТОЧНО как в документе (страница 4)
//   if (loading) {
//     return <p style={{ textAlign: 'center', color: '#eb7abc', fontSize: '1.2rem', marginTop: '40px' }}>Загрузка...</p>;
//   }

//   if (error) {
//     return <p style={{ textAlign: 'center', color: 'red', fontSize: '1.2rem', marginTop: '40px' }}>{error}</p>;
//   }

//   // Отображение задач ТОЧНО как в документе (страница 4)
//   return (
//     <ul style={{
//       maxWidth: '600px',
//       margin: '0 auto',
//       listStyle: 'none'
//     }}>
//       {tasks.map((task) => (
//         <TaskItem 
//           key={task.id} 
//           task={task} 
//           deleteTask={deleteTask}
//         />
//       ))}
//     </ul>
//   );
// }

// export default TaskList;

// import { useState, useEffect } from 'react';
// import TaskItem from './TaskItem';
// import todosData from '../data';

// function TaskList({ deleteTask }) {
//   const [tasks, setTasks] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
//       .then((response) => response.json())
//       .then((data) => {
//         setTasks(data);
//         setLoading(false);
//       })
//       .catch(() => {
//         console.log('API недоступен, загружаем локальные данные');
//         setTimeout(() => {
//           setTasks(todosData);
//           setLoading(false);
//         }, 1000);
//       });
//   }, []);

//   // ↓↓↓ ПРОВЕРКА ЗАГРУЗКИ — КАК В ДОКУМЕНТЕ ↓↓↓
//   if (loading) {
//     return (
//       <p style={{ 
//         textAlign: 'center', 
//         color: '#eb7abc', 
//         fontSize: '1.5rem', 
//         marginTop: '50px' 
//       }}>
//         Загрузка...
//       </p>
//     );
//   }

//   // ↓↓↓ ПРОВЕРКА ОШИБКИ — КАК В ДОКУМЕНТЕ ↓↓↓
//   if (error) {
//     return (
//       <p style={{ 
//         textAlign: 'center', 
//         color: 'red', 
//         fontSize: '1.5rem', 
//         marginTop: '50px' 
//       }}>
//         {error}
//       </p>
//     );
//   }

//   // ↓↓↓ ОТОБРАЖЕНИЕ ЗАДАЧ — ИСПОЛЬЗУЕМ TaskItem ↓↓↓
//   return (
//     <ul style={{
//       maxWidth: '600px',
//       margin: '0 auto',
//       listStyle: 'none'
//     }}>
//       {tasks.map((task) => (
//         <TaskItem 
//           key={task.id} 
//           task={task} 
//           deleteTask={deleteTask}
//         />
//       ))}
//     </ul>
//   );
// }

// export default TaskList;


import { useState, useEffect } from 'react';
import TaskItem from './TaskItem';
import todosData from '../data';

function TaskList({ deleteTask }) {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Имитируем загрузку как настоящий API — 1 секунда
    setTimeout(() => {
      setTasks(todosData);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <p style={{ textAlign: 'center', color: '#eb7abc', fontSize: '1.5rem', marginTop: '50px' }}>Загрузка...</p>;
  }

  if (error) {
    return <p style={{ textAlign: 'center', color: 'red', fontSize: '1.5rem', marginTop: '50px' }}>{error}</p>;
  }

  return (
    <ul style={{ maxWidth: '600px', margin: '0 auto', listStyle: 'none' }}>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} deleteTask={deleteTask} />
      ))}
    </ul>
  );
}

export default TaskList;