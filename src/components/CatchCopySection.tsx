import React from 'react';
import styles from './CatchCopySection.module.scss';

const CatchCopySection: React.FC = () => {
  return (
    <section id="catchcopy" className={styles.catchCopySection}>
      <div className={styles.container}>
        <h2 className={styles.catchCopy}>
          <span className={`${styles.cyan} ${styles.large}`}>ホロシェア</span>
          <span className={styles.small}>なら、どこでも</span>
          <span className={`${styles.orange} ${styles.large}`}>実物</span>
          <span className={styles.small}>を</span>
          <span className={`${styles.cyan} ${styles.large}`}>その場に</span>
          <br />
          営業先でも、展示会でも、
          <br />
          顧客の目の前に<span className={`${styles.pink} ${styles.large}`}>「欲しい！」</span>が生まれる
        </h2>
      </div>
    </section>
  );
};

export default CatchCopySection;
