import React from 'react';
import styles from './GreenBannerSection.module.scss';

const GreenBannerSection: React.FC = () => {
  return (
    <section className={styles.bannerSection}>
      <div className={styles.diagonalBand}>
        <div className={styles.contentWrapper}>
          <div className={styles.imageArea}>
            {/* 画像をここに配置 */}
          </div>
          <div className={styles.textArea}>
            <div className={styles.textBox}>
              <h3 className={styles.mainText}>最新3D技術にも対応！</h3>
            </div>
            <div className={styles.textBox}>
              <h3 className={styles.mainText}>リアルな体験を実現</h3>
            </div>
            <p className={styles.subText}>基本のCADデータ活用に加え、用途に応じて最新技術もご提案</p>
          </div>
        </div>
      </div>

      <div className={styles.techSection}>
        <div className={styles.container}>
          <p className={styles.techTitle}>
            より<span className={styles.highlight}>高度</span>な表現が必要な場合
          </p>
          <div className={styles.techList}>
            <div className={styles.techItem}>
              <div className={styles.techContent}>
                <div className={styles.techCard}>
                  <div className={styles.techBox}>
                    <div className={styles.techName}>ガウシアンスプラッティング・フォトグラメトリ</div>
                  </div>
                  <p className={styles.techDescription}>実物を超リアルに再現（質感・光沢まで忠実に）</p>
                </div>
              </div>
              <div className={styles.iconCircle}>
                {/* アイコン画像をここに配置 */}
              </div>
            </div>
            <div className={styles.techItem}>
              <div className={styles.techContent}>
                <div className={styles.techCard}>
                  <div className={styles.techBox}>
                    <div className={styles.techName}>360度・3D動画</div>
                  </div>
                  <p className={styles.techDescription}>現場の全方位映像や製品の動作を立体映像で表現</p>
                </div>
              </div>
              <div className={styles.iconCircle}>
                {/* アイコン画像をここに配置 */}
              </div>
            </div>
            <div className={styles.techItem}>
              <div className={styles.techContent}>
                <div className={styles.techCard}>
                  <div className={styles.techBox}>
                    <div className={styles.techName}>生成AI技術</div>
                  </div>
                  <p className={styles.techDescription}>次世代AIによる高速3Dモデル生成</p>
                </div>
              </div>
              <div className={styles.iconCircle}>
                {/* アイコン画像をここに配置 */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.useCaseSection}>
        <div className={styles.container}>
          <p className={styles.useCaseTitle}>
            技術の組み合わせで、<span className={styles.highlight}>競合との差別化</span>を実現
          </p>
          <div className={styles.useCaseGrid}>
            <div className={styles.useCaseCard}>
              <div className={styles.useCaseBox}>
                <p className={styles.useCaseNeed}>製品の質感が<br />重要な商材</p>
              </div>
              <p className={styles.useCaseSolution}>フォトグラメトリで<br />実物以上の説得力</p>
            </div>
            <div className={styles.useCaseCard}>
              <div className={styles.useCaseBox}>
                <p className={styles.useCaseNeed}>現場の雰囲気や<br />製品の動作を<br />伝えたい</p>
              </div>
              <p className={styles.useCaseSolution}>360度・3D動画で<br />没入感を提供</p>
            </div>
            <div className={styles.useCaseCard}>
              <div className={styles.useCaseBox}>
                <p className={styles.useCaseNeed}>多品種<br />展開する商材</p>
              </div>
              <p className={styles.useCaseSolution}>生成AIで3Dモデルを<br />効率的に拡充</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.proposalBar}>
        貴社の商材と営業戦略に最適な技術をご提案！
      </div>

      <div className={styles.colorStripe}></div>
    </section>
  );
};

export default GreenBannerSection;
