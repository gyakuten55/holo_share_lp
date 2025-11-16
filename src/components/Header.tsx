'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/header.module.scss';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleMenuItemClick = () => {
    closeMenu();
  };

  const menuItems = [
    { label: 'ホロシェアでできること', href: '#features' },
    { label: 'ホロシェアの強み', href: '#strength' },
    { label: '活用シーン', href: '#case-study' },
    { label: '導入の流れ', href: '#flow' },
    { label: 'よくある質問', href: '#faq' },
    { label: 'お問い合わせ', href: '#contact' },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image
            src="/HS_logo.png"
            alt="HoloShare"
            width={200}
            height={40}
            priority
          />
        </div>

        <nav className={styles.nav}>
          <a href="#contact" className={styles.contactLink}>
            お問い合わせ
          </a>
          <button
            className={`${styles.menuButton} ${isMenuOpen ? styles.open : ''}`}
            onClick={toggleMenu}
            aria-label="メニュー"
            aria-expanded={isMenuOpen}
          >
            <span className={styles.menuIcon}></span>
            <span className={styles.menuIcon}></span>
            <span className={styles.menuIcon}></span>
          </button>
        </nav>
      </div>

      {/* オーバーレイ */}
      {isMenuOpen && (
        <div className={styles.overlay} onClick={closeMenu}></div>
      )}

      {/* ドロップダウンメニュー */}
      <div className={`${styles.menuDropdown} ${isMenuOpen ? styles.open : ''}`}>
        <nav className={styles.menuNav}>
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={styles.menuItem}
              onClick={handleMenuItemClick}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
