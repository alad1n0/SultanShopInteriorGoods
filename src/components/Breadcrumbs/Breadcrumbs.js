import React from 'react';
import { withRouter } from 'react-router-dom';
import './_Breadcrumbs.scss';

const Breadcrumbs = (props) => {
  const {
    history,
    location: { pathname },
  } = props;

  function breadcrumbTitle() {
    if (pathname.includes('product')) {
      return props.productTitle;
    } else if (pathname.includes('cart')) {
      return 'Кошик';
    }
  }

  function getPathnames() {
    if (!pathname.includes('product')) {
      return pathname.split('/').filter((x) => x);
    } else {
      return [pathname];
    }
  }
  const pathnames = getPathnames();

  function updateProductsHandler() {
    props.onUpdateProductList();
    history.push('/');
  }

  return (
      !pathname.includes('sultan-shop_for_internship') && (
          <div className="breadcrumbsCustomStyle" aria-label="breadcrumb">
            {pathnames.length > 0 ? (
                <button className="breadcrumbs" onClick={updateProductsHandler}>
                  Каталог
                </button>
            ) : (
                <div className="breadcrumbs">
                  Каталог <span>Товари для інтер'єру</span>
                </div>
            )}
            {pathnames.map((name, index) => {
              const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
              const isLast = index === pathnames.length - 1;
              return isLast ? (
                  <div className="breadcrumbs-next" key={name}>
                    {breadcrumbTitle()}
                  </div>
              ) : (
                  <button key={name} onClick={() => history.push(routeTo)}>
                    {breadcrumbTitle()}
                  </button>
              );
            })}
          </div>
      )
  );
};

export default withRouter(Breadcrumbs);