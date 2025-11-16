import React from 'react';
import styles from './StrengthSection.module.scss';

const StrengthSection: React.FC = () => {
  return (
    <section id="strength" className={styles.strengthSection}>
      <div className={styles.backgroundText}>STRUCTURE</div>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            ホロシェアの<span className={styles.titleBlue}>強み</span>
          </h2>
          <p className={styles.subtitle}>なぜ、営業が変わるのか？</p>
        </div>
      </div>

      <div className={styles.diagonalBand}>
        <div className={styles.contentWrapper}>
          <div className={styles.textArea}>
            <div className={styles.textBox}>
              <h3 className={styles.mainText}>営業コストを大幅削減！</h3>
            </div>
            <p className={styles.subText}>初回投資だけで、繰り返し活用</p>
          </div>
          <div className={styles.imageArea}>
            {/* 画像をここに配置 */}
          </div>
        </div>
      </div>

      {/* コスト比較図 */}
      <div className={styles.container}>
        <div className={styles.costComparison}>
          {/* 従来のコスト */}
          <div className={styles.beforeBar}>従来</div>
          <div className={styles.beforeCosts}>
            <div className={styles.costItem}>
              <div className={styles.costLabel}>展示会ブース設営</div>
              <div className={styles.costValue}>300<span>万円</span></div>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.costItem}>
              <div className={styles.costLabel}>サンプル発送代</div>
              <div className={styles.costValue}>50<span>万円/台</span></div>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.costItem}>
              <div className={styles.costLabel}>実機輸送費</div>
              <div className={styles.costValue}>50<span>万円/回</span></div>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.costItem}>
              <div className={styles.costLabel}>出張費<br />(遠方顧客)</div>
              <div className={styles.costValue}>5<span>万円/回</span></div>
            </div>
          </div>

          {/* 矢印とホロシェアバー */}
          <div className={styles.arrowsBar}>
            <div className={styles.arrows}>
              <div className={styles.arrow}>▼</div>
              <div className={styles.arrow}>▼</div>
              <div className={styles.arrow}>▼</div>
              <div className={styles.arrow}>▼</div>
            </div>
            <div className={styles.holoshareBar}>ホロシェア</div>
          </div>

          {/* ホロシェアのコスト */}
          <div className={styles.afterCosts}>
            <div className={styles.costItem}>
              <div className={styles.afterLabel}>VR体験ブース</div>
              <div className={styles.afterValue}>50<span>万円</span></div>
            </div>
            <div className={styles.costItem}>
              <div className={styles.afterLabel}>3Dモデリング<br />(納品含む)</div>
              <div className={styles.afterValue}>10~30<span>万円/台</span></div>
            </div>
            <div className={styles.costItem}>
              <div className={styles.afterValue} data-zero="true">0<span>円</span></div>
            </div>
            <div className={styles.costItem}>
              <div className={styles.afterValue} data-zero="true">0<span>円</span></div>
            </div>
          </div>

          {/* 削減効果 */}
          <div className={styles.reductions}>
            <div className={styles.reductionBox}>削減効果<br />-83%</div>
            <div className={styles.reductionBox}>削減効果<br />-40~80%</div>
            <div className={styles.reductionBox}>削減効果<br />-100%</div>
            <div className={styles.reductionBox}>削減効果<br />-100%</div>
          </div>
        </div>

        {/* 追加メッセージ */}
        <div className={styles.additionalMessage}>
          <div className={styles.messageBar}>初回投資だけで、繰り返し活用可能！</div>
          <div className={styles.messageBox}>
            初回のみ3Dモデリング費用が必要ですが、<br />
            以降は追加コストなしで使い放題。
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrengthSection;
