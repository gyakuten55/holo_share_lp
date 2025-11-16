import React from 'react';
import styles from './DiagonalBannerSection.module.scss';

const DiagonalBannerSection: React.FC = () => {
  return (
    <section className={styles.bannerSection}>
      <div className={styles.diagonalBand}>
        <div className={styles.contentWrapper}>
          <div className={styles.imageArea}>
            {/* 画像をここに配置 */}
          </div>
          <div className={styles.textArea}>
            <div className={styles.textBox}>
              <h3 className={styles.mainText}>商談化率が劇的に向上！</h3>
            </div>
            <p className={styles.subText}>従来の商談者の商談化率が従来型カタログ営業の2倍に</p>
          </div>
        </div>
      </div>

      <div className={styles.benefitsSection}>
        <div className={styles.benefitsBar}>
          体験した顧客の商談化率が従来型カタログ営業の2倍に！
        </div>
        <div className={styles.container}>
          <div className={styles.benefitsList}>
            <div className={styles.benefitItem}>
              <div className={styles.checkIcon}>✓</div>
              <p className={styles.benefitText}>「実物を見ないと判断できない」という断り文句が消える</p>
            </div>
            <div className={styles.benefitItem}>
              <div className={styles.checkIcon}>✓</div>
              <p className={styles.benefitText}>その場でカスタマイズ提案→即決受注が可能に</p>
            </div>
            <div className={styles.benefitItem}>
              <div className={styles.checkIcon}>✓</div>
              <p className={styles.benefitText}>競合との差別化で、価格競争から脱却</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiagonalBannerSection;
