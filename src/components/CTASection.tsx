import React from 'react';
import styles from './CTASection.module.scss';

const CTASection: React.FC = () => {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <div className={styles.messageBox}>
          <span className={styles.arrow}>＼</span>
          <h2 className={styles.message}>一緒に成功事例をつくりませんか？</h2>
          <span className={styles.arrow}>／</span>
        </div>

        <div className={styles.ctaButton}>
          PoCパートナーとして特別条件でのご提供も可能です
        </div>
      </div>

      <div className={styles.colorStripe}></div>
    </section>
  );
};

export default CTASection;
