import React from 'react';
import styles from './FeaturesSection.module.scss';

const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className={styles.featuresSection}>
      <div className={styles.backgroundText}>SOLUTION</div>
      <div className={styles.container}>
        <h2 className={styles.title}>
          <span className={styles.titleCyan}>ホロシェア</span>
          <span className={styles.titleBlack}>でできること</span>
        </h2>
        <p className={styles.subtitle}>
          ホロシェアが、営業を『体験』に変える！
          <br />
          営業先でも、展示会ブースでも、目の前に実物大の製品が出現
        </p>

        <div className={styles.cardsGrid}>
          {/* Card 1 - Orange */}
          <div className={`${styles.card} ${styles.cardOrange}`}>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>
                「実物」を見せるから、
                <br />
                顧客の「欲しい！」を即
                <br />
                座に引き出せる
              </h3>
              <p className={styles.cardDescription}>
                サンプルや什器がなくても実物、スケール感を伝えて購買します。
              </p>
            </div>
            <div className={styles.cardIcon}>
              {/* アイコン画像をここに配置 */}
            </div>
          </div>

          {/* Card 2 - Cyan */}
          <div className={`${styles.card} ${styles.cardCyan}`}>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>
                その場でリアルタイムに
                <br />
                カスタマイズ提案
              </h3>
              <p className={styles.cardDescription}>
                色を変えたい？サイズを変えたい？など
                <br />
                顧客の要望に応じたカスタマイズを
                <br />
                リアルタイムで見せられる。
              </p>
            </div>
            <div className={styles.cardIcon}>
              {/* アイコン画像をここに配置 */}
            </div>
          </div>

          {/* Card 3 - Pink */}
          <div className={`${styles.card} ${styles.cardPink}`}>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>
                展示会で「忘れられない
                <br />
                体験」を提供
              </h3>
              <p className={styles.cardDescription}>
                展示ブースにスペースがなくても、来場者
                <br />
                に『実物』を体験
                <br />
                させることができます。
              </p>
            </div>
            <div className={styles.cardIcon}>
              {/* アイコン画像をここに配置 */}
            </div>
          </div>

          {/* Card 4 - Green */}
          <div className={`${styles.card} ${styles.cardGreen}`}>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>
                移動なしで、
                <br />
                全国・海外の顧客にデモ
                <br />
                可能
              </h3>
              <p className={styles.cardDescription}>
                VR空間に相手を入れる、というイメージと
                <br />
                異なり、現在の場所で見られるため、簡単
                <br />
                に続けられる。
              </p>
            </div>
            <div className={styles.cardIcon}>
              {/* アイコン画像をここに配置 */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
