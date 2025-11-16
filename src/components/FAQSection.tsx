'use client';

import React, { useState } from 'react';
import styles from './FAQSection.module.scss';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: '既存のCADデータは使えますか？',
    answer: 'はい、多くのCADデータに対応しています。\n対応形式\n• STEP / IGES / STL / OBJ / FBX など主要な3Dフォーマット\n• CADデータ（STEP、IGES等）\n• BIMデータ（建築設計）\n• 一般3Dフォーマット（FBX、OBJ等）\n御社が既に持っているデータを、そのままVR化できます。御社の既存データを確認させていただき、最適な変換方法をご提案します。'
  },
  {
    question: '営業担当者でも操作できますか？',
    answer: 'はい、直感的な操作で誰でも簡単に使えるよう設計されています。特別な技術知識は必要ありません。VR空間に相手を入れる、というイメージと異なり、現在の場所で見られるため、簡単に続けられます。'
  },
  {
    question: '展示会以外でも使えますか？',
    answer: 'はい、様々なシーンでご活用いただけます。\n• 営業活動（顧客先でのデモ、商談）\n• 展示会ブース\n• リモート商談\n• 社内トレーニング\n移動なしで、全国・海外の顧客にデモ可能です。営業だけでなく、様々な用途に横展開できるため、使えば使うほど投資効果が高まります。'
  },
  {
    question: '展示会で他社と差別化できますか？',
    answer: 'はい、大きく差別化できます。\n• 展示ブースにスペースがなくても、来場者に『実物』を体験させることができます\n• 実物大の製品が目の前に出現し、忘れられない体験を提供\n• 実機を運べない大型製品もVR展示可能\n• 製品ラインナップ全てを1台のVRゴーグルで体験\n競合ブースとの圧倒的な差別化を実現します。'
  },
  {
    question: 'リモート商談でも使えますか？',
    answer: 'はい、リモート商談でも効果的にご利用いただけます。移動なしで、全国・海外の顧客にデモが可能です。VR空間に相手を入れるというイメージと異なり、現在の場所で見られるため、簡単に続けられます。'
  },
  {
    question: 'どのような業界で使われていますか？',
    answer: '主に以下の業界でご活用いただいています。\n• 製造・機械業界：大型機械のVR展示、製品ラインナップの体験、機械の動作実演\n• 建設・住宅業界：施工実績のVR再現、住宅展示場の代わりにVRで複数プラン体験、設計変更案の比較提案\nその他、様々な業界での導入実績がございます。'
  }
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className={styles.faqSection}>
      <div className={styles.backgroundText}>FAQ</div>
      <div className={styles.container}>
        <h2 className={styles.title}>
          よくある<span className={styles.highlight}>質問</span>
        </h2>
        <p className={styles.subtitle}>皆様からいただいたよくある質問をご紹介します</p>

        <div className={styles.faqList}>
          {faqData.map((faq, index) => (
            <div key={index} className={styles.faqItem}>
              <div
                className={styles.faqQuestion}
                onClick={() => toggleFAQ(index)}
              >
                <div className={styles.questionContent}>
                  <div className={styles.qIcon}>Q</div>
                  <span className={styles.questionText}>{faq.question}</span>
                </div>
                <div className={styles.toggleIcon}>
                  {openIndex === index ? '▲' : '▼'}
                </div>
              </div>
              <div className={`${styles.faqAnswerWrapper} ${openIndex === index ? styles.open : ''}`}>
                <div className={styles.faqAnswer}>
                  {faq.answer.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < faq.answer.split('\n').length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.colorStripe}></div>
    </section>
  );
};

export default FAQSection;
