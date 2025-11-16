import React from 'react';
import styles from './FlowSection.module.scss';

const FlowSection: React.FC = () => {
  return (
    <section id="flow" className={styles.flowSection}>
      <div className={styles.backgroundText}>CASE STUDY</div>
      <div className={styles.container}>
        <h2 className={styles.title}>
          <span className={styles.highlight}>導入</span>の流れ
        </h2>
        <p className={styles.subtitle}>まずは無料相談から！</p>
        <p className={styles.subtitle}>貴社の状況に応じて、柔軟にご提案いたします。</p>

        <div className={styles.stepsContainer}>
          <div className={styles.stepCard}>
            <div className={`${styles.stepHeader} ${styles.cyan}`}>
              <span className={styles.stepNumber}>STEP1</span>
            </div>
            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>ヒアリング</h3>
              <p className={styles.stepDescription}>貴社の課題や状況を丁寧<br />にヒアリング</p>
              <div className={styles.stepImage}></div>
            </div>
          </div>

          <div className={styles.arrow}>»</div>

          <div className={styles.stepCard}>
            <div className={`${styles.stepHeader} ${styles.orange}`}>
              <span className={styles.stepNumber}>STEP2</span>
            </div>
            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>ご提案</h3>
              <p className={styles.stepDescription}>具体的な活用イメージを<br />ご提案</p>
              <div className={styles.stepImage}></div>
            </div>
          </div>

          <div className={styles.arrow}>»</div>

          <div className={styles.stepCard}>
            <div className={`${styles.stepHeader} ${styles.cyan}`}>
              <span className={styles.stepNumber}>STEP3</span>
            </div>
            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>お見積り</h3>
              <p className={styles.stepDescription}>ご提案内容を基に概算費<br />用をご案内</p>
              <div className={styles.stepImage}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlowSection;
