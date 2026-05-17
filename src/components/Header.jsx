// function Header() {
//     return <h1> Добро пожаловать в моё React-приложение</h1>;
// }

// export default Header;

// function Header() {
//     return (
//         <header>
//             <h1> Список задач</h1>
//         </header>
//     );
// }

// export default Header;


// import logo from '../assets/images/logo.png';

// function Header() {
//   return (
//     <header>
//         <img src={logo} alt="Лого" width={200} />
//       <h1>Список задач</h1>
//     </header>
//   );
// }

// export default Header;


// import { Link } from 'react-router-dom';    // ← ДОБАВИЛИ ИМПОРТ
// import logo from '../assets/images/logo.png';

// function Header() {
//   return (
//     <header>
//       <img src={logo} alt="Лого" width={200} />
//       <h1>Список задач</h1>
//       {/* ↓↓↓ ДОБАВИЛИ НАВИГАЦИЮ ↓↓↓ */}
//       <nav style={{ 
//         marginTop: '15px', 
//         marginBottom: '10px',
//         display: 'flex',
//         justifyContent: 'center',
//         gap: '15px'
//       }}>
//         <Link 
//           to="/"
//           style={{
//             padding: '12px 28px',
//             backgroundColor: '#eb7abc',
//             color: 'white',
//             textDecoration: 'none',
//             borderRadius: '8px',
//             fontWeight: 'bold',
//             fontSize: '1rem',
//             transition: 'all 0.3s ease',
//             boxShadow: '0 2px 8px rgba(235, 122, 188, 0.3)'
//           }}
//           onMouseEnter={(e) => {
//             e.target.style.backgroundColor = '#d45aa3';
//           }}
//           onMouseLeave={(e) => {
//             e.target.style.backgroundColor = '#eb7abc';
//           }}
//         >
//           Задачи
//         </Link>
//         <Link 
//           to="/about"
//           style={{
//             padding: '12px 28px',
//             backgroundColor: 'white',
//             color: '#eb7abc',
//             textDecoration: 'none',
//             borderRadius: '8px',
//             fontWeight: 'bold',
//             fontSize: '1rem',
//             border: '2px solid #eb7abc',
//             transition: 'all 0.3s ease'
//           }}
//           onMouseEnter={(e) => {
//             e.target.style.backgroundColor = '#eb7abc';
//             e.target.style.color = 'white';
//           }}
//           onMouseLeave={(e) => {
//             e.target.style.backgroundColor = 'white';
//             e.target.style.color = '#eb7abc';
//           }}
//         >
//           О приложении
//         </Link>
//       </nav>
//       {/* ↑↑↑ ДОБАВИЛИ НАВИГАЦИЮ ↑↑↑ */}
//     </header>
//   );
// }

// export default Header;

// import { Link } from 'react-router-dom';
// import logo from '../assets/images/logo.png';

// function Header() {
//   return (
//     <header>
//       <img src={logo} alt="Лого" width={200} />
//       <h1>Список задач</h1>
//       <nav style={{ marginTop: '15px', marginBottom: '10px' }}>
//         <Link to="/" style={{
//           margin: '0 10px',
//           padding: '12px 28px',
//           backgroundColor: '#eb7abc',
//           color: 'white',
//           textDecoration: 'none',
//           borderRadius: '8px',
//           fontWeight: 'bold'
//         }}>
//           Задачи
//         </Link>
//         <Link to="/about" style={{
//           margin: '0 10px',
//           padding: '12px 28px',
//           backgroundColor: 'white',
//           color: '#eb7abc',
//           textDecoration: 'none',
//           borderRadius: '8px',
//           fontWeight: 'bold',
//           border: '2px solid #eb7abc'
//         }}>
//           О приложении
//         </Link>
//       </nav>
//     </header>
//   );
// }

// export default Header;

// import { Link } from 'react-router-dom';
// import logo from '../assets/images/logo.png';

// function Header() {
//   return (
//     <header>
//       <img src={logo} alt="Лого" width={200} />
//       <h1>Список задач</h1>
//       <nav style={{ marginTop: '15px', marginBottom: '10px' }}>
//         <Link to="/" style={{
//           margin: '0 10px',
//           padding: '12px 28px',
//           backgroundColor: '#eb7abc',
//           color: 'white',
//           textDecoration: 'none',
//           borderRadius: '8px',
//           fontWeight: 'bold',
//           display: 'inline-block',
//           transition: 'all 0.3s ease',
//           boxShadow: '0 4px 6px rgba(235, 122, 188, 0.2)'
//         }}
//         onMouseEnter={(e) => {
//           e.target.style.backgroundColor = '#d45aa3';
//           e.target.style.transform = 'translateY(-3px)';
//           e.target.style.boxShadow = '0 6px 12px rgba(235, 122, 188, 0.4)';
//         }}
//         onMouseLeave={(e) => {
//           e.target.style.backgroundColor = '#eb7abc';
//           e.target.style.transform = 'translateY(0)';
//           e.target.style.boxShadow = '0 4px 6px rgba(235, 122, 188, 0.2)';
//         }}
//         onMouseDown={(e) => {
//           e.target.style.transform = 'translateY(0) scale(0.95)';
//         }}
//         onMouseUp={(e) => {
//           e.target.style.transform = 'translateY(-3px) scale(1)';
//         }}
//         >
//           Задачи
//         </Link>
//         <Link to="/about" style={{
//           margin: '0 10px',
//           padding: '12px 28px',
//           backgroundColor: 'white',
//           color: '#eb7abc',
//           textDecoration: 'none',
//           borderRadius: '8px',
//           fontWeight: 'bold',
//           border: '2px solid #eb7abc',
//           display: 'inline-block',
//           transition: 'all 0.3s ease'
//         }}
//         onMouseEnter={(e) => {
//           e.target.style.backgroundColor = '#eb7abc';
//           e.target.style.color = 'white';
//           e.target.style.transform = 'translateY(-3px)';
//           e.target.style.boxShadow = '0 6px 12px rgba(235, 122, 188, 0.3)';
//         }}
//         onMouseLeave={(e) => {
//           e.target.style.backgroundColor = 'white';
//           e.target.style.color = '#eb7abc';
//           e.target.style.transform = 'translateY(0)';
//           e.target.style.boxShadow = 'none';
//         }}
//         onMouseDown={(e) => {
//           e.target.style.transform = 'translateY(0) scale(0.95)';
//         }}
//         onMouseUp={(e) => {
//           e.target.style.transform = 'translateY(-3px) scale(1)';
//         }}
//         >
//           О приложении
//         </Link>
//       </nav>
//     </header>
//   );
// }

// export default Header;

import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo.png';

function Header() {
  const location = useLocation(); // получаем текущий путь

  // Проверяем, на какой мы странице
  const isTasks = location.pathname === '/';
  const isAbout = location.pathname === '/about';

  // Стили для активной кнопки (розовая)
  const activeStyle = {
    backgroundColor: '#eb7abc',
    color: 'white',
    textDecoration: 'none',
    boxShadow: '0 4px 6px rgba(235, 122, 188, 0.2)',
    border: '2px solid #eb7abc'
  };

  // Стили для неактивной кнопки (белая)
  const inactiveStyle = {
    backgroundColor: 'white',
    color: '#eb7abc',
    textDecoration: 'none',
    border: '2px solid #eb7abc',
    boxShadow: 'none'
  };

  return (
    <header>
      <img src={logo} alt="Лого" width={200} />
      <h1>Список задач</h1>
      <nav style={{ marginTop: '15px', marginBottom: '10px' }}>
        <Link 
          to="/" 
          style={{
            margin: '0 10px',
            padding: '12px 28px',
            borderRadius: '8px',
            fontWeight: 'bold',
            display: 'inline-block',
            transition: 'all 0.3s ease',
            ...(isTasks ? activeStyle : inactiveStyle)
          }}
          onMouseEnter={(e) => {
            if (!isTasks) {
              e.target.style.backgroundColor = '#eb7abc';
              e.target.style.color = 'white';
            }
            e.target.style.transform = 'translateY(-3px)';
            e.target.style.boxShadow = '0 6px 12px rgba(235, 122, 188, 0.4)';
          }}
          onMouseLeave={(e) => {
            if (!isTasks) {
              e.target.style.backgroundColor = 'white';
              e.target.style.color = '#eb7abc';
            }
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = isTasks ? '0 4px 6px rgba(235, 122, 188, 0.2)' : 'none';
          }}
          onMouseDown={(e) => {
            e.target.style.transform = 'translateY(0) scale(0.95)';
          }}
          onMouseUp={(e) => {
            e.target.style.transform = 'translateY(-3px) scale(1)';
          }}
        >
          Задачи
        </Link>
        <Link 
          to="/about" 
          style={{
            margin: '0 10px',
            padding: '12px 28px',
            borderRadius: '8px',
            fontWeight: 'bold',
            display: 'inline-block',
            transition: 'all 0.3s ease',
            ...(isAbout ? activeStyle : inactiveStyle)
          }}
          onMouseEnter={(e) => {
            if (!isAbout) {
              e.target.style.backgroundColor = '#eb7abc';
              e.target.style.color = 'white';
            }
            e.target.style.transform = 'translateY(-3px)';
            e.target.style.boxShadow = '0 6px 12px rgba(235, 122, 188, 0.4)';
          }}
          onMouseLeave={(e) => {
            if (!isAbout) {
              e.target.style.backgroundColor = 'white';
              e.target.style.color = '#eb7abc';
            }
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = isAbout ? '0 4px 6px rgba(235, 122, 188, 0.2)' : 'none';
          }}
          onMouseDown={(e) => {
            e.target.style.transform = 'translateY(0) scale(0.95)';
          }}
          onMouseUp={(e) => {
            e.target.style.transform = 'translateY(-3px) scale(1)';
          }}
        >
          О приложении
        </Link>
      </nav>
    </header>
  );
}

export default Header;