import React from 'react';

const CV: React.FC = () => {
  return (
    <div className="CV">
      <div className="content">
        <h1 className="full_name">IVAN KRAINIKOV</h1>
        <p>Student, BackEnd/DevOps</p>
        <div className="contact">
          Хабр Карьера:{" "}
          <a href="https://career.habr.com/cry1s">
            https://career.habr.com/cry1s
          </a>
        </div>
        <div className="contact">
          Telegram:{" "}
          <b>
            <a href="https://telegram.me/cry1s">@cry1s</a>
          </b>
        </div>
        <div className="contact">
          Email: <b>cry1s@ya.ru</b>
        </div>
        <div className="contact">
          GitHub:{" "}
          <b>
            <a href="https://github.com/cry1s">https://github.com/cry1s</a>
          </b>
        </div>
        <div className="skills">
          Rust • Git • Ansible • Linux • Docker • PostgreSQL • Веб-разработка • React • Node.js •
          JavaScript • Express
        </div>
      </div>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default CV;