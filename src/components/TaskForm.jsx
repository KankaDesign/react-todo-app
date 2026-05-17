
// function TaskForm() {
//     return (
//         <form>
//             <input type="text" placeholder="Введите задачу" />
//             <button type="submit">Добавить</button>
//         </form>
//     )
// }

// export default TaskForm;

// import { useState } from 'react';

// function TaskForm() {
//   // Создаем состояние для текста задачи
//   const [text, setText] = useState('');

//   return (
//     <form>
//       <input 
//         type="text" 
//         value={text}  // значение привязано к состоянию
//         onChange={(e) => setText(e.target.value)}  // обновляем состояние при вводе
//         placeholder="Введите задачу" 
//       />
//       <button type="submit">Добавить</button>
//     </form>
//   );
// }

// export default TaskForm;

// import { useState } from 'react';

// function TaskForm({ addTask }) {  // принимаем функцию addTask как пропс
//   const [text, setText] = useState('');

//   // Обработчик отправки формы
//   function handleSubmit(e) {
//     e.preventDefault();  // предотвращаем перезагрузку страницы
    
//     if (text.trim()) {  // проверяем, что поле не пустое
//       addTask(text);     // вызываем функцию добавления
//       setText('');       // очищаем поле ввода
//     }
//   }

//   return (
//     <form onSubmit={handleSubmit}>  {/* привязываем обработчик к форме */}
//       <input 
//         type="text" 
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         placeholder="Введите задачу" 
//       />
//       <button type="submit">Добавить</button>
//     </form>
//   );
// }

// export default TaskForm;


import { useState } from 'react';

function TaskForm({ addTask }) {
  const [text, setText] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (text.trim()) {
      addTask(text);
      setText('');
    }
  }

  const formStyle = {
    maxWidth: '600px',
    margin: '0 auto 30px auto',
    display: 'flex',
    gap: '12px',
    background: 'white',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(235, 122, 188, 0.15)',
    border: '1px solid #f0c0db'
  };

  const inputStyle = {
    flex: '1',
    padding: '14px 18px',
    border: '2px solid #f0c0db',
    borderRadius: '8px',
    fontSize: '1rem',
    outline: 'none',
    fontFamily: 'inherit'
  };

  const buttonStyle = {
    backgroundColor: '#eb7abc',
    color: 'white',
    border: 'none',
    padding: '14px 28px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: '600',
    transition: 'all 0.3s ease'
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <input 
        type="text" 
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Введите задачу" 
        style={inputStyle}
      />
      <button type="submit" style={buttonStyle}>Добавить</button>
    </form>
  );
}

export default TaskForm;