import React from 'react';
import './Contact.css';

function Contact() {
  return (
      <div>
          <div className="page-title">
              <h1>Зворотній зв'язок</h1>
          </div>
          <div className="contact-block">
              <div className="contact-top">
                  <table className="contact-info">
                      <tbody>
                          <tr>
                              <td>
                                  <h2>Інтернет магазин</h2>
                                  <p>Тел. +380 (777) 490‑00‑91,<br/>Моб. (067) 468 29 96<br/>Моб. (093) 542 95 77<br/>E-mail:
                                      opt.sultan@gmail.com<br/>Наш <b><a
                                          href="#">Telegram</a></b> та <b><a
                                          href="#">WhatsApp</a></b></p>
                              </td>
                          </tr>
                      </tbody>
                  </table>

                  <table className="contact-manager">
                      <tbody>
                          <tr>
                              <td>
                                  <h2>Менеджер по роботі з гуртовими клієнтами</h2>
                                  <p>Тел. +38 (067) 468 29 96<br/>E-mail: opt.sultan@gmail.com</p>
                              </td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          </div>
      </div>
  );
}

export default Contact;