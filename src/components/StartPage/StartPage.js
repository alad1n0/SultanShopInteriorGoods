import React from 'react';
import { Link } from 'react-router-dom';
import './_StartPage.scss';

function StartPage() {
  return (
    <section className="start-page">
      <h1 className="start-page-title">
          Головна сторінка в розробці
        <br /> Перейдіть до{' '}
        <Link data-testid="start-link" to="/">
            Каталог
        </Link>
      </h1>
      <div className="start-page-img"></div>
    </section>
  );
}

export default StartPage;