'use client';

import React, { useState } from 'react';
import styles from './ContactSection.module.scss';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    lastName: '',
    firstName: '',
    company: '',
    department: '',
    position: '',
    email: '',
    phone: '',
    message: '',
    privacyAgreed: false
  });

  const [focusedField, setFocusedField] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // フォーム送信処理
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.backgroundText}>CONTACT</div>
      <div className={styles.container}>
        <h2 className={styles.title}>お問い合わせ</h2>
        <p className={styles.subtitle}>お気軽にご相談ください！</p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label className={styles.label}>お名前</label>
            <div className={styles.nameRow}>
              <input
                type="text"
                name="lastName"
                placeholder="姓"
                value={formData.lastName}
                onChange={handleChange}
                onFocus={() => setFocusedField('lastName')}
                onBlur={() => setFocusedField('')}
                className={`${styles.input} ${focusedField === 'lastName' ? styles.focused : ''}`}
              />
              <input
                type="text"
                name="firstName"
                placeholder="名"
                value={formData.firstName}
                onChange={handleChange}
                onFocus={() => setFocusedField('firstName')}
                onBlur={() => setFocusedField('')}
                className={`${styles.input} ${focusedField === 'firstName' ? styles.focused : ''}`}
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>会社名</label>
            <input
              type="text"
              name="company"
              placeholder="例）株式会社Meta Heroes"
              value={formData.company}
              onChange={handleChange}
              onFocus={() => setFocusedField('company')}
              onBlur={() => setFocusedField('')}
              className={`${styles.input} ${focusedField === 'company' ? styles.focused : ''}`}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>部署名</label>
            <input
              type="text"
              name="department"
              placeholder="例）〇〇事業部〇〇部"
              value={formData.department}
              onChange={handleChange}
              onFocus={() => setFocusedField('department')}
              onBlur={() => setFocusedField('')}
              className={`${styles.input} ${focusedField === 'department' ? styles.focused : ''}`}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>役職</label>
            <select
              name="position"
              value={formData.position}
              onChange={handleChange}
              onFocus={() => setFocusedField('position')}
              onBlur={() => setFocusedField('')}
              className={`${styles.select} ${focusedField === 'position' ? styles.focused : ''}`}
            >
              <option value="">＝選択してください＝</option>
              <option value="経営者">経営者</option>
              <option value="役員">役員</option>
              <option value="部長">部長</option>
              <option value="課長">課長</option>
              <option value="係長">係長</option>
              <option value="一般社員">一般社員</option>
              <option value="その他">その他</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>お勤め先のメールアドレス</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.co.jp"
              value={formData.email}
              onChange={handleChange}
              onFocus={() => setFocusedField('email')}
              onBlur={() => setFocusedField('')}
              className={`${styles.input} ${focusedField === 'email' ? styles.focused : ''}`}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>電話番号</label>
            <input
              type="tel"
              name="phone"
              placeholder="you@example.co.jp"
              value={formData.phone}
              onChange={handleChange}
              onFocus={() => setFocusedField('phone')}
              onBlur={() => setFocusedField('')}
              className={`${styles.input} ${focusedField === 'phone' ? styles.focused : ''}`}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>お問い合わせ内容</label>
            <textarea
              name="message"
              placeholder="具体的に"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              onFocus={() => setFocusedField('message')}
              onBlur={() => setFocusedField('')}
              className={`${styles.textarea} ${focusedField === 'message' ? styles.focused : ''}`}
            />
          </div>

          <div className={styles.checkboxGroup}>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                name="privacyAgreed"
                checked={formData.privacyAgreed}
                onChange={handleChange}
                className={styles.checkbox}
              />
              <span className={styles.checkboxText}>プライバシーポリシーに同意します。</span>
            </label>
          </div>

          <button
            type="submit"
            className={styles.submitButton}
            disabled={!formData.privacyAgreed}
          >
            同意して送信する
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
