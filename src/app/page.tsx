import Header from '@/components/Header';
import CatchCopySection from '@/components/CatchCopySection';
import FeaturesSection from '@/components/FeaturesSection';
import StrengthSection from '@/components/StrengthSection';
import DiagonalBannerSection from '@/components/DiagonalBannerSection';
import OrangeBannerSection from '@/components/OrangeBannerSection';
import GreenBannerSection from '@/components/GreenBannerSection';
import CaseStudySection from '@/components/CaseStudySection';
import FlowSection from '@/components/FlowSection';
import CTASection from '@/components/CTASection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import FinalCTASection from '@/components/FinalCTASection';
import Footer from '@/components/Footer';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.hero}>
        </div>
        <a href="#contact" className={styles.freeConsultButton}>
          <div className={styles.buttonContent}>
            <p className={styles.buttonTopText}>御社の課題を聞かせてください</p>
            <div className={styles.buttonBottom}>
              <span className={styles.buttonArrow}>›</span>
              <span className={styles.buttonMainText}>無料相談</span>
            </div>
          </div>
        </a>
      </main>
      <CatchCopySection />
      <FeaturesSection />
      <StrengthSection />
      <DiagonalBannerSection />
      <OrangeBannerSection />
      <GreenBannerSection />
      <CaseStudySection />
      <FlowSection />
      <CTASection />
      <FAQSection />
      <ContactSection />
      <FinalCTASection />
      <Footer />
    </>
  );
}
