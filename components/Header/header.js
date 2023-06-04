import React from 'react';
import styles from '@/components/Header/Header.module.scss'
import Image from 'next/image';

const Header = () => (
  <header className={styles.header}>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/">
          <Image className='img-fluid' src="/home/vairal-logo.png" width={142} height={26}/>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className={`${styles.headerNavlink} nav-link active text-uppercase`} aria-current="page" href="#">
              SERVICES
              </a>
            </li>
            <li className="nav-item">
              <a className={`${styles.headerNavlink} nav-link text-uppercase`} href="#">
              SUBSCRIPTIONS
              </a>
            </li>
            <li  className="nav-item">
              <a className={`${styles.headerNavlink} nav-link text-uppercase`} href="#">
              ABOUT US
              </a>
            </li>
            <li  className="nav-item">
              <a className={`${styles.headerNavlink} nav-link text-uppercase`} href="#">
              CONTACT US
              </a>
            </li>
            <li  className="nav-item">
              <a className={`${styles.headerNavlink} nav-link text-uppercase`} href="#">
              BLOGS
              </a>
            </li>
          </ul>
          <div className="d-flex">
            <button className="btn btn-outline-primary me-2 fw-bold fs-6" type="button">
              SIGIN IN
            </button>
            <button className="btn btn-primary fw-bold fs-6" type="button">
              JOIN
            </button>
          </div>
        </div>
      </div>
    </nav>
  </header>
);

export default Header;
