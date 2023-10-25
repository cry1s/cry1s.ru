import React from 'react';

const Projects: React.FC = () => {
  return (
    <section>
      <h2>Links and projects</h2>
      <ul>
        <li>
          <a href="https://wc.cry1s.ru">Web course project 2023</a>
        </li>
        <li>
          <a href="https://vk.com/panim4u">VK public with auto posts from chat</a>
          <br/>
          <a href='https://github.com/cry1s/p4nimau-rust'>Github repo</a>
        </li>
        <li>
          <a href="https://github.com/cry1s/LogicAI">Simple Rust library for logic AI</a>
        </li>
      </ul>
      <h2>Other</h2>
      <ul>
        <li>
          <a href="https://md.cry1s.ru">MD editor</a>
        </li>
        <li>
          <a href="https://mail.cry1s.ru">Mail server</a>
        </li>
        <li>
          <a href="https://kaban.cry1s.ru">Kanban board</a>
        </li>
      </ul>
    </section>
  );
};

export default Projects;