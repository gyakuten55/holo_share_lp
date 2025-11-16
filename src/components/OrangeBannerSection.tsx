import React from 'react';
import styles from './OrangeBannerSection.module.scss';

const OrangeBannerSection: React.FC = () => {
  return (
    <section className={styles.bannerSection}>
      <div className={styles.diagonalBand}>
        <div className={styles.contentWrapper}>
          <div className={styles.textArea}>
            <div className={styles.textBox}>
              <h3 className={styles.mainText}>既存データをそのまま活用！</h3>
            </div>
            <div className={styles.textBox}>
              <h3 className={styles.mainText}>横展開も自在</h3>
            </div>
            <p className={styles.subText}>御社が既に持っているデータを、そのままVR化</p>
          </div>
          <div className={styles.imageArea}>
            {/* 画像をここに配置 */}
          </div>
        </div>
      </div>

      <div className={styles.dataSection}>
        <div className={styles.container}>
          <p className={styles.dataTitle}>
            御社が既に持っているデータを、<span className={styles.highlight}>そのまま</span>VR化できます
          </p>
          <div className={styles.dataCircles}>
            <div className={styles.circleItem}>
              <div className={styles.circle}>
                <div className={styles.circleText}>
                  <div className={styles.circleTitle}>CADデータ</div>
                  <div className={styles.circleSubtitle}>(STEP、IGES等)</div>
                </div>
              </div>
            </div>
            <div className={styles.circleItem}>
              <div className={styles.circle}>
                <div className={styles.circleText}>
                  <div className={styles.circleTitle}>BIMデータ</div>
                  <div className={styles.circleSubtitle}>(建築設計)</div>
                </div>
              </div>
            </div>
            <div className={styles.circleItem}>
              <div className={styles.circle}>
                <div className={styles.circleText}>
                  <div className={styles.circleTitle}>一般3D<br />フォーマット</div>
                  <div className={styles.circleSubtitle}>(FBX、OBJ等)</div>
                </div>
              </div>
            </div>
          </div>
          <p className={styles.dataFooter}>
            営業だけでなく、様々な用途に横展開可能
          </p>
        </div>
      </div>

      <div className={styles.benefitsBar}>
        使えば使うほど、投資効果が高まる！
      </div>
    </section>
  );
};

export default OrangeBannerSection;
