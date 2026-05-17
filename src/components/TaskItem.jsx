// function TaskItem({ title}) {
//     return (
//         <li> {title} </li>
//     );
// }

// export default TaskItem;

// function TaskItem({ title }) {
//   return <li>{title}</li>;
// }

// export default TaskItem;

// function TaskItem({ task, deleteTask }) {  // принимаем task и deleteTask
//   return (
//     <li>
//       {task.title}
//       <button 
//         onClick={() => deleteTask(task.id)}  // при клике удаляем задачу
//         style={{ 
//           marginLeft: '10px', 
//           backgroundColor: '#ff4444', 
//           color: 'white', 
//           border: 'none', 
//           borderRadius: '4px', 
//           padding: '5px 10px',
//           cursor: 'pointer'
//         }}
//       >
//         ✕
//       </button>
//     </li>
//   );
// }

// export default TaskItem;

// function TaskItem({ task, deleteTask }) {
//   const buttonStyle = {
//     background: 'none',
//     border: 'none',
//     fontSize: '1.5rem',
//     cursor: 'pointer',
//     padding: '5px 10px',
//     borderRadius: '6px',
//     transition: 'all 0.2s ease',
//     color: '#eb7abc',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     fontWeight: 'bold'
//   };

//   return (
//     <li style={{
//       background: 'white',
//       padding: '16px 20px',
//       marginBottom: '12px',
//       borderRadius: '10px',
//       boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
//       fontSize: '1.1rem',
//       display: 'flex',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//       border: '1px solid #f7e0ec'
//     }}>
//       <span>{task.title}</span>
//       <button 
//         onClick={() => deleteTask(task.id)} 
//         style={buttonStyle}
//         onMouseEnter={(e) => {
//           e.target.style.backgroundColor = '#fff0f7';
//           e.target.style.color = '#d45aa3';
//           e.target.style.transform = 'scale(1.1)';
//         }}
//         onMouseLeave={(e) => {
//           e.target.style.backgroundColor = 'transparent';
//           e.target.style.color = '#eb7abc';
//           e.target.style.transform = 'scale(1)';
//         }}
//       >
//         ✕
//       </button>
//     </li>
//   );
// }

// export default TaskItem;


import { useState } from 'react';

function TaskItem({ task, deleteTask }) {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = () => {
    setIsDeleting(true); 
    
    setTimeout(() => {
      deleteTask(task.id);
    }, 300);
  };

  const buttonStyle = {
    background: 'none',
    border: 'none',
    fontSize: '1.5rem',
    cursor: 'pointer',
    padding: '5px 10px',
    borderRadius: '6px',
    transition: 'all 0.2s ease',
    color: '#eb7abc',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold'
  };

  const liStyle = {
    background: 'white',
    padding: '16px 20px',
    marginBottom: '12px',
    borderRadius: '10px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
    fontSize: '1.1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    border: '1px solid #f7e0ec',
    transition: 'all 0.3s ease'
  };

  return (
    <li 
      className={`task-item ${isDeleting ? 'deleting' : ''}`}
      style={liStyle}
    >
      <span>{task.title}</span>
      <button 
        onClick={handleDelete}
        style={buttonStyle}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = '#fff0f7';
          e.target.style.color = '#d45aa3';
          e.target.style.transform = 'scale(1.1)';
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
  );
}

export default TaskItem;