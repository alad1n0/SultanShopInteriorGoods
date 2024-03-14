import React from 'react';
import './_Footer.scss';

function Footer() {
  return (
    <div className="footers">
      <div className="footers__wrapper">
        <div className="footers__about">
          <div className="footers__logo-container">
            {' '}
            <div className="footers__logo"></div>
            <a
              href="/#"
              target="_blank"
              className="footers__priceList-btn footers__priceList-btn_adaptive"
            >
              Прайс-лист
              <div className="footers__priceList-icon"></div>
            </a>
          </div>
          <p className="footers__description">
            Компанія «Султан» – ваш надійний постачальник товарів для інтер'єру.
          </p>
          <span className="footers__subcribeText">
            Підпишись на знижки та акції
          </span>

          <div className="footers__subcribe">
            <input
              type="text"
              className="footers__subcribe-input"
              placeholder="Введіть ваш e-mail"
            ></input>
            <button type="submit" className="footers__subcribe-icon"></button>
          </div>
        </div>

        <div className="footers__menu-container">
          {' '}
          <nav className="footers__menu">
            <h2 className="footers__menu-title">Меню сайту&#58;</h2>
            <ul className="footers__menu-items">
              <li className="footers__menu-item">
                <a href="/#" target="_blank" className="footers__menu-item-link">
                  Про компанії
                </a>
              </li>
              <li className="footers__menu-item">
                <a href="/#" target="_blank" className="footers__menu-item-link">
                  Доставка і оплата
                </a>
              </li>
              <li className="footers__menu-item">
                <a href="/#" target="_blank" className="footers__menu-item-link">
                  Повернення
                </a>
              </li>
              <li className="footers__menu-item">
                <a href="/#" target="_blank" className="footers__menu-item-link">
                  Контакти
                </a>
              </li>
            </ul>
          </nav>
          <nav className="footers__menu">
            <h2 className="footers__menu-title">Категорії&#58;</h2>
            <ul className="footers__menu-items">
              <li className="footers__menu-item">
                <a href="/#" target="_blank" className="footers__menu-item-link">
                  Меблі для інтер'єру
                </a>
              </li>
              <li className="footers__menu-item">
                <a href="/#" target="_blank" className="footers__menu-item-link">
                  Освітлення та лампи
                </a>
              </li>
              <li className="footers__menu-item">
                <a href="/#" target="_blank" className="footers__menu-item-link">
                  Декоративні подушки та ковдри
                </a>
              </li>
              <li className="footers__menu-item">
                <a href="/#" target="_blank" className="footers__menu-item-link">
                  Килими та килимки
                </a>
              </li>
              <li className="footers__menu-item">
                <a href="/#" target="_blank" className="footers__menu-item-link">
                  Вази та квітники
                </a>
              </li>
              <li className="footers__menu-item">
                <a href="/#" target="_blank" className="footers__menu-item-link">
                  Скульптури
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="footers__contacts-container">
          <div className="footers__container">
            <div className="footers__priceList">
            <h2 className="footers__menu-title footers__priceList-title">
                Завантажити прайс-лист&#58;
              </h2>
              <a
                  href="/#"
                  target="_blank"
                  className="footers__priceList-btn footers__priceList-btn_desktop"
              >
                Прайс лист
                <div className="footers__priceList-icon"></div>
              </a>
            </div>

            <div className="footers__messengers">
              <p className="footers__messengers-title">
                Зв'язок в месенджерах&#58;
              </p>
              <ul className="footers__messengers-items">
                <li className="footers__messengers-item footers__messengers-item_type_whatsup">
                  <a
                      href="/#"
                      target="_blank"
                      className="footers__messengers-link"
                  >
                    {' '}
                  </a>
                </li>
                <li className="footers__messengers-item footers__messengers-item_type_tlgm">
                  <a
                      href="/#"
                    target="_blank"
                    className="footers__messengers-link"
                  >
                    {' '}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footers__contacts">
            <h2 className="footers__menu-title">Контакти&#58;</h2>
            <p className="footers__contacts-text">
              &#43;380&nbsp;&#40;777&#41;&nbsp;490&#8209;00&#8209;91
            </p>
            <p className="footers__contacts-additionalText">
              час&nbsp;роботи&#58;&nbsp;9&#58;00&#8209;20&#58;00
            </p>
            <div className="footers__callback">
              <button className="footers__callback-btn">Замовити дзвінок</button>
            </div>

            <div className="footers__mail">
              <p className="footers__contacts-text">
                opt&#46;sultan&#64;gmail&#46;com
              </p>
              <p className="footers__contacts-additionalText">
                На&nbsp;зв'язку&nbsp;в&nbsp;будь-який&nbsp;час
              </p>
            </div>

            <ul className="footers__payment-items">
              <li className="footers__payment-item footers__payment-item_type_visa"></li>
              <li className="footers__payment-item footers__payment-item_type_mastercard"></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
