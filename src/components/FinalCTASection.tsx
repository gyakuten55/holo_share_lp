import React from 'react';
import styles from './FinalCTASection.module.scss';

const FinalCTASection: React.FC = () => {
  return (
    <section className={styles.finalCtaSection}>
      <div className={styles.container}>
        <h2 className={styles.message}>カタログ営業から、体験営業へ</h2>
      </div>
    </section>
  );
};

export default FinalCTASection;
