import React from 'react';
import styles from '@/components/Footer/footer.module.scss'
import Image from 'next/image';

const Footer = () => (
  <footer className={styles.footer}>
    <div className='container'>
        <div className={`${styles.wrapper} row`}>
            <div className={`${styles.innerWrapper} col-12 col-md-12 col-lg-6 col-xl-6`}>
                <a className="navbar-brand" href="/">
                    <Image className='img-fluid' src="/home/vairal-logo.png" width={100} height={8}/>
                </a>
                <p className='text-white mb-0'>Enfection  2023 - ALL rights reserved</p>
            </div>
            <div className='col-12 col-md-12 col-lg-6 col-xl-6'>
                <ul className={`${styles.navigation} mb-0 ps-0`}>
                    <li><a href='/' className='text-white'>Home</a></li>
                    <li><a href='/' className='text-white'>About us</a></li>
                    <li><a href='/' className='text-white'>Contact us</a></li>
                    <li><a href='/' className='text-white'>Subscriptions</a></li>
                    <li><a href='/' className='text-white'>FAQs</a></li>
                </ul>
            </div>
        </div>
    </div>
  </footer>
);

export default Footer;
