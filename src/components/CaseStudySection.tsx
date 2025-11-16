import React from 'react';
import styles from './CaseStudySection.module.scss';

const CaseStudySection: React.FC = () => {
  return (
    <section id="case-study" className={styles.caseStudySection}>
      <div className={styles.backgroundText}>CASE STUDY</div>
      <div className={styles.container}>
        <h2 className={styles.title}>
          <span className={styles.highlight}>活用</span>シーン
        </h2>
        <p className={styles.subtitle}>こんな営業・展示会で使える！</p>
      </div>

      <div className={styles.industrySection}>
        <div className={styles.industryCards}>
          <a href="#manufacturing" className={styles.industryCard}>
            <div className={styles.industryImage}></div>
            <div className={styles.industryLabel}>
              <span>製造・機械業界</span>
              <span className={styles.arrow}>▶</span>
            </div>
          </a>
          <a href="#construction" className={styles.industryCard}>
            <div className={styles.industryImage}></div>
            <div className={styles.industryLabel}>
              <span>建設・住宅業界</span>
              <span className={styles.arrow}>▶</span>
            </div>
          </a>
        </div>
        <h3 id="manufacturing" className={styles.industryTitle}>製造・機械業界</h3>
      </div>

      <div className={styles.usageSection}>
        <div className={styles.usageCards}>
          <div className={styles.usageCard}>
            <div className={`${styles.usageHeader} ${styles.orange}`}>展示会活用</div>
            <div className={styles.usageContent}>
              <div className={styles.usageItem}>
                <span className={`${styles.checkIcon} ${styles.orange}`}>✓</span>
                <p>実機を運べない<br />大型製品をVR展示</p>
              </div>
              <div className={styles.usageItem}>
                <span className={`${styles.checkIcon} ${styles.orange}`}>✓</span>
                <p>製品ラインナップ全てを<br />1台のVRゴーグルで体験</p>
              </div>
              <div className={styles.usageItem}>
                <span className={`${styles.checkIcon} ${styles.orange}`}>✓</span>
                <p>機械の動作を<br />アニメーション表示で実演</p>
              </div>
              <div className={styles.usageItem}>
                <span className={`${styles.checkIcon} ${styles.orange}`}>✓</span>
                <p>競合ブースとの<br />圧倒的な差別化</p>
              </div>
            </div>
          </div>
          <div className={styles.usageCard}>
            <div className={`${styles.usageHeader} ${styles.blue}`}>営業活用</div>
            <div className={styles.usageContent}>
              <div className={styles.usageItem}>
                <span className={`${styles.checkIcon} ${styles.blue}`}>✓</span>
                <p>大型機械を工場内に配置して、<br />レイアウト確認</p>
              </div>
              <div className={styles.usageItem}>
                <span className={`${styles.checkIcon} ${styles.blue}`}>✓</span>
                <p>複雑な機構を、<br />VRで分解・説明</p>
              </div>
              <div className={styles.usageItem}>
                <span className={`${styles.checkIcon} ${styles.blue}`}>✓</span>
                <p>顧客自身が製品を操作し、<br />動作を体感</p>
              </div>
              <div className={styles.usageItem}>
                <span className={`${styles.checkIcon} ${styles.blue}`}>✓</span>
                <p>カスタマイズ仕様を、<br />その場でVR化して提案</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.resultSection}>
        <div className={styles.resultCard}>
          <div className={styles.resultHeader}>導入効果</div>
          <div className={styles.resultContent}>
            <p>実機輸送費・設営費の<span className={styles.highlight}>大幅削減</span></p>
            <p>『実機を見たい』という理由での<span className={styles.highlight}>失注を防止</span></p>
          </div>
        </div>
      </div>

      <div className={`${styles.industrySection} ${styles.noMarginTop}`}>
        <h3 id="construction" className={styles.industryTitle}>建設・住宅業界</h3>
      </div>

      <div className={styles.usageSection}>
        <div className={styles.usageCards}>
          <div className={styles.usageCard}>
            <div className={`${styles.usageHeader} ${styles.orange}`}>展示会活用</div>
            <div className={styles.usageContent}>
              <div className={styles.usageItem}>
                <span className={`${styles.checkIcon} ${styles.orange}`}>✓</span>
                <p>施工実績をVRで『現場再現』、<br />技術力を視覚的にアピール</p>
              </div>
              <div className={styles.usageItem}>
                <span className={`${styles.checkIcon} ${styles.orange}`}>✓</span>
                <p>工法・構造を分解表示して、<br />技術的優位性を訴求</p>
              </div>
              <div className={styles.usageItem}>
                <span className={`${styles.checkIcon} ${styles.orange}`}>✓</span>
                <p>住宅展示場の代わりに、<br />VRで複数プランを体験</p>
              </div>
              <div className={styles.usageItem}>
                <span className={`${styles.checkIcon} ${styles.orange}`}>✓</span>
                <p>ドア開閉・照明ON/OFFなど、<br />来場者が自由に操作</p>
              </div>
            </div>
          </div>
          <div className={styles.usageCard}>
            <div className={`${styles.usageHeader} ${styles.blue}`}>営業活用</div>
            <div className={styles.usageContent}>
              <div className={styles.usageItem}>
                <span className={`${styles.checkIcon} ${styles.blue}`}>✓</span>
                <p>施工前に完成形をVR体験、<br />発注者の不安を解消</p>
              </div>
              <div className={styles.usageItem}>
                <span className={`${styles.checkIcon} ${styles.blue}`}>✓</span>
                <p>工事計画を3Dで説明、<br />受注確度が向上</p>
              </div>
              <div className={styles.usageItem}>
                <span className={`${styles.checkIcon} ${styles.blue}`}>✓</span>
                <p>設計変更案を、<br />その場でVR化して比較提案</p>
              </div>
              <div className={styles.usageItem}>
                <span className={`${styles.checkIcon} ${styles.blue}`}>✓</span>
                <p>壁紙・床材を瞬時に<br />変更して比較検討</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.resultSection}>
        <div className={styles.resultCard}>
          <div className={styles.resultHeader}>導入効果</div>
          <div className={styles.resultContent}>
            <p>施工前の合意形成が<span className={styles.highlight}>スムーズに</span></p>
            <p>設計変更による<span className={styles.highlight}>手戻りを削減</span></p>
            <p>発注者の<span className={styles.highlight}>満足度向上</span></p>
          </div>
        </div>
      </div>

      <div className={styles.colorStripe}></div>
    </section>
  );
};

export default CaseStudySection;
