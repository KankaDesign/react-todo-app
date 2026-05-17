// function AboutPage() {
//   return (
//     <div style={{ 
//       maxWidth: '600px', 
//       margin: '0 auto', 
//       padding: '30px',
//       textAlign: 'center'
//     }}>
//       <h2 style={{ 
//         color: '#ec47a8', 
//         fontSize: '1.8rem',
//         marginBottom: '25px'
//       }}>
//         О приложении
//       </h2>
//       <p style={{ 
//         fontSize: '1.1rem', 
//         lineHeight: '1.8',
//         marginBottom: '15px',
//         color: '#555'
//       }}>
//         Это учебное React-приложение для управления списком задач.
//       </p>
//       <p style={{ 
//         fontSize: '1.1rem', 
//         lineHeight: '1.8',
//         color: '#d45aa3'
//       }}>
//         Можно добавлять, удалять и отмечать задачи как выполненные (эмуляция CRUD).
//       </p>
//     </div>
//   );
// }

// export default AboutPage;

// function AboutPage() {
//   return (
//     <div style={{ maxWidth: '600px', margin: '0 auto', padding: '30px', textAlign: 'center' }}>
//       <h2 style={{ color: '#ec47a8', fontSize: '1.8rem', marginBottom: '25px' }}>
//         О приложении
//       </h2>
//       <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '15px', color: '#555' }}>
//         Это учебное React-приложение для управления списком задач.
//       </p>
//       <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#d45aa3' }}>
//         Можно добавлять, удалять и отмечать задачи как выполненные (эмуляция CRUD).
//       </p>
//     </div>
//   );
// }

// export default AboutPage;

function AboutPage() {
  return (
    <div style={{ 
      maxWidth: '600px', 
      margin: '0 auto', 
      padding: '30px', 
      textAlign: 'center',
      animation: 'fadeIn 0.5s ease'
    }}>
      <h2 style={{ 
        color: '#ec47a8', 
        fontSize: '1.8rem', 
        marginBottom: '25px',
        animation: 'slideDown 0.5s ease'
      }}>
        О приложении
      </h2>
      <p style={{ 
        fontSize: '1.1rem', 
        lineHeight: '1.8', 
        marginBottom: '15px', 
        color: '#555',
        animation: 'slideUp 0.5s ease 0.2s both'
      }}>
        Это учебное React-приложение для управления списком задач.
      </p>
      <p style={{ 
        fontSize: '1.1rem', 
        lineHeight: '1.8', 
        marginBottom: '15px',
        color: '#d45aa3',
        animation: 'slideUp 0.5s ease 0.4s both'
      }}>
        Можно добавлять, удалять и отмечать задачи как выполненные (эмуляция CRUD).
      </p>
      <p style={{ 
        fontSize: '1.3rem', 
        lineHeight: '1.8', 
        color: '#ec47a8',
        fontWeight: 'bold',
        animation: 'slideUp 0.5s ease 0.6s both'
      }}>
        Мяу мяу мяу! 🐱
      </p>
    </div>
  );
}

export default AboutPage;