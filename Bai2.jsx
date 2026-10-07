import React, { useState, useEffect } from 'react';

function CVHeader({ title }) {
  return (
    <>
      <header style={{ backgroundColor: '#0c8af1', color: 'white', textAlign: 'center', padding: '20px' }}>
        <h1 style={{ margin: 0 }}>{title}</h1>
      </header>
      <nav style={{ backgroundColor: '#333', padding: '10px', textAlign: 'center' }}>
        <a href="#" style={{ color: 'white', margin: '0 15px', textDecoration: 'none' }}>Trang chủ</a>
        <a href="#" style={{ color: 'white', margin: '0 15px', textDecoration: 'none' }}>Giới thiệu</a>
        <a href="#" style={{ color: 'white', margin: '0 15px', textDecoration: 'none' }}>Liên hệ</a>
      </nav>
    </>
  );
}

function Section({ title, children }) {
  return (
    <section style={{ marginBottom: '20px', padding: '15px', border: '1px solid #ddd', borderRadius: '5px' }}>
      <h2 style={{ borderBottom: '2px solid #0c8af1', paddingBottom: '5px' }}>{title}</h2>
      <div style={{ marginTop: '10px' }}>
        {children}
      </div>
    </section>
  );
}

function List({ items }) {
  return (
    <ul style={{ paddingLeft: '20px' }}>
      {items.map((item, index) => (
        <li key={index} style={{ marginBottom: '8px' }}>
          {typeof item === 'string' ? (
            item
          ) : (
            <>
              <strong>{item.name}</strong>: {item.description}
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

function Footer() {
  return (
    <footer style={{ backgroundColor: '#333', color: 'white', textAlign: 'center', padding: '10px', marginTop: '20px' }}>
      <p style={{ margin: 0 }}>&copy; 2026 - Trang cá nhân</p>
    </footer>
  );
}

export default function CV() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) {
      setGreeting("Chào buổi sáng! Chúc bạn một ngày tốt lành!");
    } else if (hour < 18) {
      setGreeting("Chào buổi chiều! Chúc bạn làm việc hiệu quả!");
    } else {
      setGreeting("Chào buổi tối! Chúc bạn nghỉ ngơi vui vẻ!");
    }
  }, []);

  const skills = [
    'Phân tích dữ liệu với Python',
    'Mô hình máy học cơ bản',
    'Trí tuệ nhân tạo vạn vật (AIoT)',
    'ReactJS và SPA'
  ];

  const projects = [
    { name: 'Trang cá nhân', description: 'Trang web giới thiệu bản thân bằng HTML, CSS, JS' },
  ];

  const themeStyle = {
    backgroundColor: isDarkMode ? '#222222' : '#ffffff',
    color: isDarkMode ? '#ffffff' : '#000000',
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif',
    transition: 'all 0.3s ease'
  };

  return (
    <div style={themeStyle}>
      <CVHeader title="Trang cá nhân" />
      
      <main style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <p style={{ fontSize: '18px', fontWeight: 'bold', color: isDarkMode ? '#66b2ff' : '#0c8af1' }}>
          {greeting}
        </p>
        <h2>Xin chào, tôi là Nguyễn Việt Cường, Mã sinh viên: B25DCTV010</h2>
        <p>Tôi là sinh viên của Học viện Công nghệ Bưu chính Viễn thông, chuyên ngành Trí tuệ nhân tạo vạn vật.</p>
        <p>Đây là trang giới thiệu cá nhân của tôi.</p>
        
        <button 
          onClick={() => setIsDarkMode(!isDarkMode)}
          style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer', marginTop: '15px', marginBottom: '30px' }}
        >
          Đổi màu nền
        </button>

        <Section title="Kỹ năng chuyên môn">
          <div style={{ textAlign: 'left' }}>
            <List items={skills} />
          </div>
        </Section>

        <Section title="Dự án thực tế">
          <div style={{ textAlign: 'left' }}>
            <List items={projects} />
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
