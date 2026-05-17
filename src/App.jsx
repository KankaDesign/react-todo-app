
// import Header from './Header';

// function App() {
//   return (
//     <div>
//       Список задач
//     </div>
//   );
// }

// export default App;


// import Header from './Header';

// function App() {
//   return (
//     <div>
//       <Header />
//     </div>
//   );
// }

// export default App;

// import Card from './Card';

// function App() {
//   return (
//     <div>
//       <Card
//       title="Первая карточка"
//       description="Описание первой карточки"
//       />
//       <Card
//       title="Вторая карточка"
//       description="Описание второй карточки"
//       />
//     </div>
//   );
// }

// export default App;


// import Header from './components/Header';
// import Main from './components/Main';

// function App() {
//   return (
//     <div>
//       <Header />
//       <Main />
//     </div>
//   );
// }

// export default App;


// import './App.css';

// import Header from './components/Header';
// import Main from './folder/Main';

// function App() {
//   return (
//     <div className="app">
//       <Header />
//       <Main />
//     </div>
//   );
// }

// export default App;


// function App() {
//   return (
//     <div>
//       Список задач
//     </div>
//   );
// }

// export default App;

// import Header from "./components/Header";
// import TaskList from "./components/TaskList";

// function App() {
//   return(
//     <div className="app">
//       <Header /> {/*Отображение заголовка*/}
//       <TaskList /> {/*Отображение списка задач*/}
//     </div>
//   );
// }

// export default App;

// const tasks =[
//   'Изучить React',
//   'Сделать практическую работу',
//   'Подготовиться к защите проекта'
// ];

// import Header from "./components/Header";
// import TaskList from "./components/TaskList";

// function App() {

//   const tasks =[
//     'Изучить React',
//     'Сделать практическую работу',
//     'Подготовиться к защите проекта'
//   ];

//   return(
//     <div className="app">
//       <Header /> {/*Отображение заголовка*/}
//       <TaskList tasks={tasks}/> {/*Отображение списка задач*/}
//     </div>
//   );
// }

// export default App;

// const tasks =[
//   'Изучить React',
//   'Сделать практическую работу',
//   'Подготовиться к защите проекта'
// ];

// import { useState } from 'react';
// import Header from './components/Header';
// import TaskList from './components/TaskList';
// import Footer from './components/Footer';
// import TaskForm from './components/TaskForm';


// import './App.css';


// function App() {
//   const tasks = [
//     'Поступить в РТУ МИРЭА',
//     'Верстать верстать верстать верстать',
//     'Не отчисляться ни при каких обстоятельствах',
//     'Выпуститься и получить диплом (по возможности)'
//   ];
//   const [tasks, setTasks] = useState([]);

//   return (
//     <div>
//       <Header />
//       <TaskForm />
//       <TaskList tasks={tasks} />
//       <Footer />
//     </div>
//   );
// }

// function App() {
//   const [tasks, setTasks] = useState([]);

//   return (
//     <div>
//       <Header />
//       <TaskForm />
//       <TaskList tasks={tasks} />
//       <Footer />
//     </div>
//   );
// }

// export default App;

// import { useState } from 'react';
// import Header from './components/Header';
// import TaskList from './components/TaskList';
// import Footer from './components/Footer';
// import TaskForm from './components/TaskForm';
// import './App.css';

// function App() {
//   const [tasks, setTasks] = useState([
//     { id: 1, title: 'Поступить в РТУ МИРЭА' },
//     { id: 2, title: 'Верстать верстать верстать верстать' },
//     { id: 3, title: 'Не отчисляться ни при каких обстоятельствах' },
//     { id: 4, title: 'Выпуститься и получить диплом (по возможности)' }
//   ]);

//   // Функция для добавления новой задачи
//   function addTask(taskText) {
//     const newTask = {
//       id: Date.now(),  // уникальный ID на основе текущего времени
//       title: taskText
//     };
//     setTasks([...tasks, newTask]);  // добавляем новую задачу в массив
//   }

//   return (
//     <div>
//       <Header />
//       <TaskForm addTask={addTask} />  {/* передаем функцию в TaskForm */}
//       <TaskList tasks={tasks} />
//       <Footer />
//     </div>
//   );
// }

// export default App;

// import { useState } from 'react';
// import Header from './components/Header';
// import TaskList from './components/TaskList';
// import Footer from './components/Footer';
// import TaskForm from './components/TaskForm';
// import './App.css';

// function App() {
//   const [tasks, setTasks] = useState([
//     { id: 1, title: 'Поступить в РТУ МИРЭА' },
//     { id: 2, title: 'Верстать верстать верстать верстать' },
//     { id: 3, title: 'Не отчисляться ни при каких обстоятельствах' },
//     { id: 4, title: 'Выпуститься и получить диплом (по возможности)' }
//   ]);

//   // Функция для добавления новой задачи
//   function addTask(taskText) {
//     const newTask = {
//       id: Date.now(),  // уникальный ID на основе текущего времени
//       title: taskText
//     };
//     setTasks([...tasks, newTask]);  // добавляем новую задачу в массив
//   }

//   function deleteTask(id) {
//     setTasks(tasks.filter(task => task.id !== id));  // оставляем все задачи, кроме той, у которой id совпадает
//   }

//   return (
//     <div>
//       <Header />
//       <TaskForm addTask={addTask} />  {/* передаем функцию в TaskForm */}
//       <TaskList tasks={tasks} />
//       <Footer />
//     </div>
//   );
// }

// export default App;

// import { useState } from 'react';
// import Header from './components/Header';
// import TaskList from './components/TaskList';
// import Footer from './components/Footer';
// import TaskForm from './components/TaskForm';
// import './App.css';

// function App() {
//   const [tasks, setTasks] = useState([
//     { id: 1, title: 'Поступить в РТУ МИРЭА' },
//     { id: 2, title: 'Верстать верстать верстать верстать' },
//     { id: 3, title: 'Не отчисляться ни при каких обстоятельствах' },
//     { id: 4, title: 'Выпуститься и получить диплом (по возможности)' }
//   ]);

//   // Функция для добавления новой задачи
//   function addTask(taskText) {
//     const newTask = {
//       id: Date.now(),  // уникальный ID на основе текущего времени
//       title: taskText
//     };
//     setTasks([...tasks, newTask]);  // добавляем новую задачу в массив
//   }
  
//   function deleteTask(id) {
//     setTasks(tasks.filter(task => task.id !== id));  // оставляем все задачи, кроме той, у которой id совпадает
//   }

//   return (
//     <div>
//       <Header />
//       <TaskForm addTask={addTask} />
    
//     {/* Условный рендеринг */}
//     {tasks.length === 0 ? (
//       <p style={{ textAlign: 'center', marginTop: '20px', color: '#eb7abc' }}>
//         ✨ Пока нет задач. Добавьте первую! ✨
//       </p>
//     ) : (
//       <TaskList tasks={tasks} deleteTask={deleteTask} />
//     )}
    
//     <Footer />
//     </div>
//   );
// }

// export default App;













// ------------------------------------------------------------------------------------------
// import { useState } from 'react';
// import { Routes, Route } from 'react-router-dom';    // ← ДОБАВИЛИ
// import Header from './components/Header';
// import Footer from './components/Footer';
// import TaskForm from './components/TaskForm';
// import TasksPage from './pages/TasksPage';             // ← ДОБАВИЛИ
// import AboutPage from './pages/AboutPage';             // ← ДОБАВИЛИ
// import './App.css';

// function App() {
//   const [tasks, setTasks] = useState([
//     { id: 1, title: 'Поступить в РТУ МИРЭА' },
//     { id: 2, title: 'Верстать верстать верстать верстать' },
//     { id: 3, title: 'Не отчисляться ни при каких обстоятельствах' },
//     { id: 4, title: 'Выпуститься и получить диплом (по возможности)' }
//   ]);

//   function addTask(taskText) {
//     const newTask = {
//       id: Date.now(),
//       title: taskText
//     };
//     setTasks([...tasks, newTask]);
//   }
  
//   function deleteTask(id) {
//     setTasks(tasks.filter(task => task.id !== id));
//   }

//   const emptyMessageStyle = {
//     textAlign: 'center',
//     marginTop: '40px',
//     padding: '40px',
//     background: 'white',
//     borderRadius: '12px',
//     color: '#eb7abc',
//     fontSize: '1.1rem',
//     border: '2px dashed #f0c0db',
//     maxWidth: '600px',
//     marginLeft: 'auto',
//     marginRight: 'auto'
//   };

//   return (
//     <div>
//       <Header />
//       <Routes>
//   <Route 
//     path="/" 
//     element={
//       <div>
//         <TaskForm addTask={addTask} />
//         {tasks.length === 0 ? (
//           <p style={{ textAlign: 'center', marginTop: '20px', color: '#eb7abc' }}>
//             ✨ Пока нет задач. Добавьте первую! ✨
//           </p>
//         ) : (
//           <TasksPage deleteTask={deleteTask} />
//         )}
//       </div>
//     } 
//   />
//   <Route path="/about" element={<AboutPage />} />
// </Routes>
    
//      <Footer />
//     </div>
//   );
// }

// export default App;
// ---------------------------------------------------------------------------------------------

// import { useState } from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import TaskForm from './components/TaskForm';
// import TasksPage from './pages/TasksPage';
// import AboutPage from './pages/AboutPage';
// import './App.css';

// function App() {
//   const [tasks, setTasks] = useState([
//     { id: 1, title: 'Поступить в РТУ МИРЭА' },
//     { id: 2, title: 'Верстать верстать верстать верстать' },
//     { id: 3, title: 'Не отчисляться ни при каких обстоятельствах' },
//     { id: 4, title: 'Выпуститься и получить диплом (по возможности)' }
//   ]);

//   function addTask(taskText) {
//     const newTask = {
//       id: Date.now(),
//       title: taskText
//     };
//     setTasks([...tasks, newTask]);
//   }
  
//   function deleteTask(id) {
//     setTasks(tasks.filter(task => task.id !== id));
//   }

//   return (
//     <div>
//       <Header />
      
//       <Routes>
//         <Route 
//           path="/" 
//           element={
//             <div>
//               <TaskForm addTask={addTask} />
//               {tasks.length === 0 ? (
//                 <p style={{ textAlign: 'center', marginTop: '20px', color: '#eb7abc' }}>
//                   ✨ Пока нет задач. Добавьте первую! ✨
//                 </p>
//               ) : (
//                 <TasksPage tasks={tasks} deleteTask={deleteTask} />
//               )}
//             </div>
//           } 
//         />
//         <Route path="/about" element={<AboutPage />} />
//       </Routes>
      
//       <Footer />
//     </div>
//   );
// }

// export default App;



// import { useState, useEffect } from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import TaskForm from './components/TaskForm';
// import TasksPage from './pages/TasksPage';
// import AboutPage from './pages/AboutPage';
// import todosData from './data';
// import './App.css';

// function App() {
//   const [tasks, setTasks] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Загружаем задачи из "API" (из файла)
//   useEffect(() => {
//     setTimeout(() => {
//       setTasks(todosData);
//       setLoading(false);
//     }, 1000);
//   }, []);

//   function addTask(taskText) {
//     const newTask = {
//       id: Date.now(),
//       title: taskText,
//       completed: false
//     };
//     setTasks([...tasks, newTask]);
//   }
  
//   function deleteTask(id) {
//     setTasks(tasks.filter(task => task.id !== id));
//   }

//   // ↓↓↓ ДОБАВЬ ЭТУ ФУНКЦИЮ ↓↓↓
//   function toggleTask(id) {
//     setTasks(tasks.map(task => 
//       task.id === id ? { ...task, completed: !task.completed } : task
//     ));
//   }
//   // ↑↑↑ ДОБАВЬ ЭТУ ФУНКЦИЮ ↑↑↑

//   // Пока загружаются задачи — показываем "Загрузка..."

//   // Пока загружаются задачи — показываем "Загрузка..."
//   if (loading) {
//     return (
//       <div>
//         <Header />
//         <p style={{ 
//           textAlign: 'center', 
//           color: '#eb7abc', 
//           fontSize: '1.5rem', 
//           marginTop: '80px' 
//         }}>
//           Загрузка...
//         </p>
//         <Footer />
//       </div>
//     );
//   }

//   return (
//     <div>
//       <Header />
      
//       <Routes>
//         <Route 
//           path="/" 
//           element={
//             <div>
//               <TaskForm addTask={addTask} />
//               {tasks.length === 0 ? (
//                 <p style={{ textAlign: 'center', marginTop: '20px', color: '#eb7abc' }}>
//                   ✨ Пока нет задач. Добавьте первую! ✨
//                 </p>
//               ) : (
//                 <TasksPage tasks={tasks} deleteTask={deleteTask} />
//               )}
//             </div>
//           } 
//         />
//         <Route path="/about" element={<AboutPage />} />
//       </Routes>
      
//       <Footer />
//     </div>
//   );
// }

// export default App;







import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import TaskForm from './components/TaskForm';
import TasksPage from './pages/TasksPage';
import AboutPage from './pages/AboutPage';
import todosData from './data';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setTasks(todosData);
      setLoading(false);
    }, 1000);
  }, []);

  function addTask(taskText) {
    const newTask = {
      id: Date.now(),
      title: taskText,
      completed: false
    };
    setTasks([...tasks, newTask]);
  }
  
  function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  function toggleTask(id) {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  }

  if (loading) {
    return (
      <div>
        <Header />
        <p style={{ 
          textAlign: 'center', 
          color: '#eb7abc', 
          fontSize: '1.5rem', 
          marginTop: '80px' 
        }}>
          Загрузка...
        </p>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Header />
      
      <Routes>
        <Route 
          path="/" 
          element={
            <div>
              <TaskForm addTask={addTask} />
              {tasks.length === 0 ? (
                <p style={{ textAlign: 'center', marginTop: '20px', color: '#eb7abc' }}>
                  ✨ Пока нет задач. Добавьте первую! ✨
                </p>
              ) : (
                <TasksPage tasks={tasks} deleteTask={deleteTask} toggleTask={toggleTask} />
              )}
            </div>
          } 
        />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;