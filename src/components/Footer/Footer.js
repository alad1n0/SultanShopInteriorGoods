import React from 'react';
import './_Footer.scss';

function Footer() {
  return (
    <div className="footer">
      <div className="footer__wrapper">
        <div className="footer__about">
          <div className="footer__logo-container">
            {' '}
            <div className="footer__logo"></div>
            <a
              href="/#"
              target="_blank"
              className="footer__priceList-btn footer__priceList-btn_adaptive"
            >
              Прайс-лист
              <div className="footer__priceList-icon"></div>
            </a>
          </div>
          <p className="footer__description">
            Компанія «Султан» – ваш надійний постачальник товарів для інтер'єру.
          </p>
          <span className="footer__subcribeText">
            Підпишись на знижки та акції
          </span>

          <div className="footer__subcribe">
            <input
              type="text"
              className="footer__subcribe-input"
              placeholder="Введіть ваш e-mail"
            ></input>
            <button type="submit" className="footer__subcribe-icon"></button>
          </div>
        </div>

        <div className="footer__menu-container">
          {' '}
          <nav className="footer__menu">
            <h2 className="footer__menu-title">Меню сайту&#58;</h2>
            <ul className="footer__menu-items">
              <li className="footer__menu-item">
                <a href="/#" target="_blank" className="footer__menu-item-link">
                  Про компанії
                </a>
              </li>
              <li className="footer__menu-item">
                <a href="/#" target="_blank" className="footer__menu-item-link">
                  Доставка і оплата
                </a>
              </li>
              <li className="footer__menu-item">
                <a href="/#" target="_blank" className="footer__menu-item-link">
                  Повернення
                </a>
              </li>
              <li className="footer__menu-item">
                <a href="/#" target="_blank" className="footer__menu-item-link">
                  Контакти
                </a>
              </li>
            </ul>
          </nav>
          <nav className="footer__menu">
            <h2 className="footer__menu-title">Категорії&#58;</h2>
            <ul className="footer__menu-items">
              <li className="footer__menu-item">
                <a href="/#" target="_blank" className="footer__menu-item-link">
                  Меблі для інтер'єру
                </a>
              </li>
              <li className="footer__menu-item">
                <a href="/#" target="_blank" className="footer__menu-item-link">
                  Освітлення та лампи
                </a>
              </li>
              <li className="footer__menu-item">
                <a href="/#" target="_blank" className="footer__menu-item-link">
                  Декоративні подушки та ковдри
                </a>
              </li>
              <li className="footer__menu-item">
                <a href="/#" target="_blank" className="footer__menu-item-link">
                  Килими та килимки
                </a>
              </li>
              <li className="footer__menu-item">
                <a href="/#" target="_blank" className="footer__menu-item-link">
                  Вази та квітники
                </a>
              </li>
              <li className="footer__menu-item">
                <a href="/#" target="_blank" className="footer__menu-item-link">
                  Скульптури
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="footer__contacts-container">
          <div className="footer__container">
            <div className="footer__priceList">
            <h2 className="footer__menu-title footer__priceList-title">
                Завантажити прайс-лист&#58;
              </h2>
              <a
                  href="/#"
                  target="_blank"
                  className="footer__priceList-btn footer__priceList-btn_desktop"
              >
                Прайс лист
                <div className="footer__priceList-icon"></div>
              </a>
            </div>

            <div className="footer__messengers">
              <p className="footer__messengers-title">
                Зв'язок в месенджерах&#58;
              </p>
              <ul className="footer__messengers-items">
                <li className="footer__messengers-item footer__messengers-item_type_whatsup">
                  <a
                      href="/#"
                      target="_blank"
                      className="footer__messengers-link"
                  >
                    {' '}
                  </a>
                </li>
                <li className="footer__messengers-item footer__messengers-item_type_tlgm">
                  <a
                      href="/#"
                    target="_blank"
                    className="footer__messengers-link"
                  >
                    {' '}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__contacts">
            <h2 className="footer__menu-title">Контакти&#58;</h2>
            <p className="footer__contacts-text">
              &#43;380&nbsp;&#40;777&#41;&nbsp;490&#8209;00&#8209;91
            </p>
            <p className="footer__contacts-additionalText">
              час&nbsp;роботи&#58;&nbsp;9&#58;00&#8209;20&#58;00
            </p>
            <div className="footer__callback">
              <button className="footer__callback-btn">Замовити дзвінок</button>
            </div>

            <div className="footer__mail">
              <p className="footer__contacts-text">
                opt&#46;sultan&#64;gmail&#46;com
              </p>
              <p className="footer__contacts-additionalText">
                На&nbsp;зв'язку&nbsp;в&nbsp;будь-який&nbsp;час
              </p>
            </div>

            <ul className="footer__payment-items">
              <li className="footer__payment-item footer__payment-item_type_visa"></li>
              <li className="footer__payment-item footer__payment-item_type_mastercard"></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
