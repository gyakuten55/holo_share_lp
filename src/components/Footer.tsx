import React from 'react';
import Image from 'next/image';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.leftSection}>
          <div className={styles.logo}>
            {/* MetaHeroesロゴ画像をここに配置 */}
            <div className={styles.logoPlaceholder}>MetaHeroes</div>
          </div>

          <nav className={styles.nav}>
            <a href="https://meta-heroes.co.jp/company" className={styles.navLink} target="_blank" rel="noopener noreferrer">会社概要</a>
            <a href="https://meta-heroes.co.jp/privacypolicy" className={styles.navLink} target="_blank" rel="noopener noreferrer">プライバシーポリシー</a>
          </nav>

          <div className={styles.info}>
            <p className={styles.address}>〒530-0027 大阪市北区堂山町1－5 三共梅田ビル 8F</p>
            <p className={styles.copyright}>© 2025 Meta Heroes All Rights Reserved.</p>
          </div>
        </div>

        <div className={styles.rightSection}>
          <div className={styles.socialIcons}>
            <a href="#" className={`${styles.socialIcon} ${styles.line}`}>
              <Image src="/line.svg" alt="LINE" width={24} height={24} />
            </a>
            <a href="#" className={`${styles.socialIcon} ${styles.x}`}>
              <Image src="/x.svg" alt="X" width={24} height={24} />
            </a>
            <a href="#" className={`${styles.socialIcon} ${styles.colorful}`}>SNS</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
