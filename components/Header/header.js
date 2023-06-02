import React from 'react';
import styles from '@/components/Header/Header.module.scss'

const Header = () => (
  <header className={styles.header}>
      <div className="container">
        <div className={styles.headerWrap}>
          <div className={styles.logoImg}>
            <img src="" alt="" />
          </div>
          <nav className={styles.nav}>
            <ul>
              <li><a href="#">SERVICES</a></li>
              <li><a href="#">SUBSCRIPTIONS</a></li>
              <li><a href="#">CONTACT US</a></li>
              <li><a href="#">BLOGS</a></li>
            </ul>
          </nav>
          <div>
            
          </div>
          <div >
            <a href="#">SIGN IN</a>
          </div>
          <div >
            <a href="#">JOIN</a>
          </div>
        </div>
      </div>

  </header>
);

export default Header;
