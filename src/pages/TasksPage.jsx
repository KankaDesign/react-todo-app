// import TaskList from '../components/TaskList';

// function TasksPage({ deleteTask }) {
//   return (
//     <div>
//       <h2 style={{ 
//         textAlign: 'center', 
//         color: '#ec47a8', 
//         fontSize: '1.8rem',
//         marginBottom: '25px'
//       }}>
//         Список задач
//       </h2>
//       <TaskList deleteTask={deleteTask} />
//     </div>
//   );
// }

// export default TasksPage;

// import TaskList from '../components/TaskList';

// function TasksPage({ deleteTask }) {
//   return (
//     <div>
//       <h2 style={{ textAlign: 'center', color: '#ec47a8', fontSize: '1.8rem', marginBottom: '25px' }}>
//         Список задач
//       </h2>
//       <TaskList deleteTask={deleteTask} />
//     </div>
//   );
// }

// export default TasksPage;









// import TaskList from '../components/TaskList';

// function TasksPage({ tasks, deleteTask }) {
//   // Если задачи из API — показываем их
//   // Если задачи из API пустые — показываем локальные
//   const apiTasks = tasks.filter(t => t.completed !== undefined);
//   const localTasks = tasks.filter(t => t.completed === undefined);
  
//   const allTasks = apiTasks.length > 0 ? apiTasks : localTasks;

//   return (
//     <div>
//       <h2 style={{ textAlign: 'center', color: '#ec47a8', fontSize: '1.8rem', marginBottom: '25px' }}>
//         Список задач
//       </h2>
//       <ul style={{ maxWidth: '600px', margin: '0 auto', listStyle: 'none' }}>
//         {allTasks.map((task) => (
//           <li key={task.id} style={{
//             background: 'white',
//             padding: '16px 20px',
//             marginBottom: '12px',
//             borderRadius: '10px',
//             display: 'flex',
//             justifyContent: 'space-between',
//             alignItems: 'center',
//             border: '1px solid #f7e0ec'
//           }}>
//             <span>{task.title}</span>
//             <button 
//               onClick={() => deleteTask(task.id)}
//               style={{
//                 background: 'none',
//                 border: 'none',
//                 fontSize: '1.5rem',
//                 cursor: 'pointer',
//                 color: '#eb7abc',
//                 fontWeight: 'bold'
//               }}
//             >
//               ✕
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default TasksPage;



// function TasksPage({ tasks, deleteTask }) {
//   return (
//     <div>
//       <h2 style={{ textAlign: 'center', color: '#ec47a8', fontSize: '1.8rem', marginBottom: '25px' }}>
//         Список задач
//       </h2>
//       <ul style={{ maxWidth: '600px', margin: '0 auto', listStyle: 'none' }}>
//         {tasks.map((task) => (
//           <li key={task.id} style={{
//             background: 'white',
//             padding: '16px 20px',
//             marginBottom: '12px',
//             borderRadius: '10px',
//             display: 'flex',
//             justifyContent: 'space-between',
//             alignItems: 'center',
//             border: '1px solid #f7e0ec',
//             boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
//             fontSize: '1.1rem',
//             animation: 'slideIn 0.3s ease'
//           }}>
//             <span>{task.title} {task.completed ? '✓' : ''}</span>
//             <button 
//               onClick={() => deleteTask(task.id)}
//               style={{
//                 background: 'none',
//                 border: 'none',
//                 fontSize: '1.5rem',
//                 cursor: 'pointer',
//                 color: '#eb7abc',
//                 fontWeight: 'bold',
//                 padding: '5px 10px',
//                 borderRadius: '6px'
//               }}
//               onMouseEnter={(e) => {
//                 e.target.style.backgroundColor = '#fff0f7';
//                 e.target.style.color = '#d45aa3';
//               }}
//               onMouseLeave={(e) => {
//                 e.target.style.backgroundColor = 'transparent';
//                 e.target.style.color = '#eb7abc';
//               }}
//             >
//               ✕
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default TasksPage;





// function TasksPage({ tasks, deleteTask, toggleTask }) {
//   return (
//     <div>
//       <h2 style={{ textAlign: 'center', color: '#ec47a8', fontSize: '1.8rem', marginBottom: '25px' }}>
//         Список задач
//       </h2>
//       <ul style={{ maxWidth: '600px', margin: '0 auto', listStyle: 'none' }}>
//         {tasks.map((task) => (
//           <li key={task.id} style={{
//             background: 'white',
//             padding: '16px 20px',
//             marginBottom: '12px',
//             borderRadius: '10px',
//             display: 'flex',
//             justifyContent: 'space-between',
//             alignItems: 'center',
//             border: '1px solid #f7e0ec',
//             boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
//             fontSize: '1.1rem',
//             animation: 'slideIn 0.3s ease',
//             opacity: task.completed ? 0.6 : 1,
//             textDecoration: task.completed ? 'line-through' : 'none'
//           }}>
//             {/* Чекбокс и текст */}
//             <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1 }}>
//               <input 
//                 type="checkbox" 
//                 checked={task.completed}
//                 onChange={() => toggleTask(task.id)}
//                 style={{
//                   width: '20px',
//                   height: '20px',
//                   cursor: 'pointer',
//                   accentColor: '#eb7abc'
//                 }}
//               />
//               <span style={{ 
//                 color: task.completed ? '#999' : '#333'
//               }}>
//                 {task.title}
//               </span>
//             </div>
            
//             {/* Статус */}
//             <span style={{ 
//               marginRight: '15px',
//               fontSize: '1.2rem',
//               color: task.completed ? '#4caf50' : '#ff9800'
//             }}>
//               {task.completed ? '✓' : '○'}
//             </span>
            
//             {/* Кнопка удаления */}
//             <button 
//               onClick={() => deleteTask(task.id)}
//               style={{
//                 background: 'none',
//                 border: 'none',
//                 fontSize: '1.5rem',
//                 cursor: 'pointer',
//                 color: '#eb7abc',
//                 fontWeight: 'bold',
//                 padding: '5px 10px',
//                 borderRadius: '6px'
//               }}
//               onMouseEnter={(e) => {
//                 e.target.style.backgroundColor = '#fff0f7';
//                 e.target.style.color = '#d45aa3';
//               }}
//               onMouseLeave={(e) => {
//                 e.target.style.backgroundColor = 'transparent';
//                 e.target.style.color = '#eb7abc';
//               }}
//             >
//               ✕
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default TasksPage;


function TasksPage({ tasks, deleteTask, toggleTask }) {
  return (
    <div>
      <h2 style={{ textAlign: 'center', color: '#ec47a8', fontSize: '1.8rem', marginBottom: '25px' }}>
        Список задач
      </h2>
      <ul style={{ maxWidth: '600px', margin: '0 auto', listStyle: 'none' }}>
        {tasks.map((task) => (
          <li key={task.id} style={{
            background: 'white',
            padding: '16px 20px',
            marginBottom: '12px',
            borderRadius: '10px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            border: '1px solid #f7e0ec',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
            fontSize: '1.1rem',
            animation: 'slideIn 0.3s ease',
            transition: 'all 0.3s ease'
          }}>
            {/* Чекбокс и текст */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1 }}>
              <input 
                type="checkbox" 
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
                style={{
                  width: '20px',
                  height: '20px',
                  cursor: 'pointer',
                  accentColor: '#eb7abc',
                  flexShrink: 0
                }}
              />
              <span style={{ 
                color: task.completed ? '#999' : '#333',
                textDecoration: task.completed ? 'line-through' : 'none',
                opacity: task.completed ? 0.6 : 1,
                transition: 'all 0.3s ease'
              }}>
                {task.title}
              </span>
            </div>
            
            {/* Статус — НЕ зачёркивается */}
            <span style={{ 
              marginRight: '15px',
              fontSize: '1.2rem',
              color: task.completed ? '#4caf50' : '#ff9800',
              textDecoration: 'none',
              flexShrink: 0
            }}>
              {task.completed ? '✓' : '○'}
            </span>
            
            {/* Кнопка удаления — НЕ зачёркивается */}
            <button 
              onClick={() => deleteTask(task.id)}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '1.5rem',
                cursor: 'pointer',
                color: '#eb7abc',
                fontWeight: 'bold',
                padding: '5px 10px',
                borderRadius: '6px',
                textDecoration: 'none',
                flexShrink: 0,
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#fff0f7';
                e.target.style.color = '#d45aa3';
                e.target.style.transform = 'scale(1.2)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#eb7abc';
                e.target.style.transform = 'scale(1)';
              }}
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TasksPage;