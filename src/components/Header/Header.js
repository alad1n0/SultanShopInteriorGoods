import React from 'react';
import { Link } from 'react-router-dom';
import './_Header.scss';

function Header(props) {
  const [isBurgerMenuOpen, setBurgerMenuOpen] = React.useState(false);

  function openBurgerMenu() {
    setBurgerMenuOpen(!isBurgerMenuOpen);
  }

  function updateProductsHandler() {
    props.onUpdateProductList();
  }

  return (
    <div className="header">
      <div className="header__info">
        <div className="header__contacts">
          <div className="header__adress header__common">
            <div className="header__common-icon header__common-icon_type_adress"></div>
            <div className="header__common-container">
              <p className="header__common-text">
                г&#46;&nbsp;Кокчетав,&nbsp;вул&#46;&nbsp;Ж&#46;&nbsp;Ташенова&nbsp;129Б{' '}
              </p>
              <p className="header__common-additionalText">
                &#40;Ринок&nbsp;Східний&#41;
              </p>
            </div>
          </div>

          <div className="header__mail header__common">
            <div className="header__common-icon header__common-icon_type_mail"></div>

            <div className="header__common-container">
              <p className="header__common-text">
                opt&#46;sultan&#64;gmail&#46;com
              </p>
              <p className="header__common-additionalText">
                На&nbsp;зв'язку&nbsp;в&nbsp;будь-який&nbsp;час
              </p>
            </div>
          </div>

          <div className="header__callback-text header__common header__callback-text_adaptive">
            <div className="header__common-icon header__common-icon_type_callback"></div>

            <div className="header__common-container">
              <p className="header__common-text">Відділ продажу</p>
              <p className="header__callback-additionalText header__common-additionalText">
                &#43;380&nbsp;&#40;777&#41;&nbsp;490&#8209;00&#8209;91
              </p>
              <p className="header__callback-additionalText header__common-additionalText">
                час&nbsp;роботи&#58;&nbsp;9&#58;00&#8209;20&#58;00
              </p>
            </div>
          </div>
          <div className="header__callback-container">
            {' '}
            <div className="header__callback-icon"></div>
            <button className="header__callback-btn">Замовити дзвінок</button>
          </div>
        </div>

        <nav className="header__menu">
          <h2 className="header__menu-title">Меню&nbsp;сайта&#58;</h2>
          <ul className="header__menu-items">
            <li className="header__menu-item">
              <a href="/#" target="_blank" className="header__menu-item-link">
                Про компанії
              </a>
            </li>
            <li className="header__menu-item">
              <a href="/#" target="_blank" className="header__menu-item-link">
                Доставка і оплата
              </a>
            </li>
            <li className="header__menu-item">
              <a href="/#" target="_blank" className="header__menu-item-link">
                Повернення
              </a>
            </li>
            <li className="header__menu-item">
              <a href="/#" target="_blank" className="header__menu-item-link">
                Контакти
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="header__interaction">
        <div className="header__logo"></div>
        <Link
          to="/"
          onClick={updateProductsHandler}
          className="header__catalog"
        >
          Каталог <div className="header__catalog-icon"></div>{' '}
        </Link>

        <div className="header__search">
          <input
            type="search"
            className="header__search-input"
            placeholder="Пошук..."
          ></input>
          <button className="header__search-btn"></button>
        </div>

        <div className="header__callback">
          <div className="header__callback-text header__common">
            <div className="header__common-icon header__common-icon_type_callback"></div>

            <div className="header__common-container">
              <p className="header__common-text">
                &#43;380&nbsp;&#40;777&#41;&nbsp;490&#8209;00&#8209;91
              </p>
              <p className="header__callback-additionalText header__common-additionalText">
                час&nbsp;роботи&#58;&nbsp;9&#58;00&#8209;20&#58;00
              </p>
              <button className="header__callback-btn">Замовити дзвінок</button>
            </div>
          </div>

          <div className="header__callback-img">
            <div className="header__callback-ellipse"></div>
          </div>
        </div>

        <div className="header__priceList">
          {' '}
          <a href="/#" target="_blank" className="header__priceList-btn">
            Прайс лист
            <div className="header__priceList-icon"></div>
          </a>
        </div>

        <div className="header__basket">
          <Link to="/cart" className="header__basket-icon">
            <span
              className={`header__basket-count ${
                props.count === 0 && 'header__basket_empty'
              }`}
            >
              {props.count}
            </span>
          </Link>

          <div className="header__basket-text">
            <p className="header__basket-title">Кошик</p>
            <p className="header__basket-price">
              {props.cartPrice}&#8372;
            </p>
          </div>
        </div>
      </div>

      <div
        className={`header__adaptive ${
          isBurgerMenuOpen && 'header__adaptive_open'
        }`}
      >
        <div className="header__adaptive-container">
          <div
            data-testid="burger-btn"
            className={`header__burger-icon ${
              isBurgerMenuOpen
                ? 'header__burger-icon_type_open'
                : 'header__burger-icon_type_close'
            }`}
            onClick={openBurgerMenu}
          ></div>
          <div className="header__logo"></div>

          <Link to="/cart" className="header__basket-icon">
            <span
              className={`header__basket-count ${
                props.count === 0 && 'header__basket_empty'
              }`}
            >
              {props.count}
            </span>
          </Link>
        </div>

        <div className="header__adaptive-container header__adaptive-content">
          <Link
            to="/"
            onClick={updateProductsHandler}
            className="header__catalog"
          >
            <div className="header__catalog-icon"></div>
            Каталог
          </Link>
          <div className="header__adaptive-line"></div>
          <div className="header__search">
            <button type="submit" className="header__search-btn"></button>
            <input
              type="search"
              className="header__search-input"
              placeholder="Пошук"
            ></input>
          </div>
        </div>
      </div>

      <div
        data-testid="burger"
        className={`header__burger ${
          isBurgerMenuOpen && 'header__burger_open'
        }`}
      >
        <div className="header__burger-container">
          {' '}
          <div className="header__contacts">
            <div className="header__adress header__common">
              <div className="header__common-icon header__common-icon_type_adress"></div>
              <div className="header__common-container">
                <p className="header__common-text">
                  г&#46;&nbsp;Кокчетав,&nbsp;вул&#46;&nbsp;Ж&#46;&nbsp;Ташенова&nbsp;129Б{' '}
                </p>
                <p className="header__common-additionalText">
                  &#40;Ринок&nbsp;Східний&#41;
                </p>
              </div>
            </div>

            <div className="header__mail header__common">
              <div className="header__common-icon header__common-icon_type_mail"></div>

              <div className="header__common-container">
                <p className="header__common-text">
                  opt&#46;sultan&#64;gmail&#46;com
                </p>
                <p className="header__common-additionalText">
                  На&nbsp;зв'язку&nbsp;в&nbsp;будь-який&nbsp;час
                </p>
              </div>
            </div>

            <div className="header__callback-text header__common header__callback-text_adaptive">
              <div className="header__common-icon header__common-icon_type_callback"></div>

              <div className="header__common-container">
                <p className="header__common-text">Відділ продажу</p>
                <p className="header__callback-additionalText header__common-additionalText">
                  &#43;380&nbsp;&#40;777&#41;&nbsp;490&#8209;00&#8209;91
                </p>
                <p className="header__callback-additionalText header__common-additionalText">
                  час&nbsp;роботи&#58;&nbsp;9&#58;00&#8209;20&#58;00
                </p>
              </div>
            </div>
            <div className="header__callback-container">
              {' '}
              <div className="header__callback-icon"></div>
              <button className="header__callback-btn">Замовити дзвінок</button>
            </div>
          </div>
          <nav className="header__menu">
            <h2 className="header__menu-title">Меню сайту&#58;</h2>
            <ul className="header__menu-items">
              <li className="header__menu-item">
                <a href="/#" target="_blank" className="header__menu-item-link">
                  Про компанії
                </a>
              </li>
              <li className="header__menu-item">
                <a href="/#" target="_blank" className="header__menu-item-link">
                  Доставка і оплата
                </a>
              </li>
              <li className="header__menu-item">
                <a href="/#" target="_blank" className="header__menu-item-link">
                  Повернення
                </a>
              </li>
              <li className="header__menu-item">
                <a href="/#" target="_blank" className="header__menu-item-link">
                  Контакти
                </a>
              </li>
            </ul>
          </nav>
          <div className="header__priceList">
            {' '}
            <a href="/#" target="_blank" className="header__priceList-btn">
              Прайс лист
              <div className="header__priceList-icon"></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;