import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://holoshare.jp'),

  // 基本メタデータ
  title: {
    default: 'HoloShare（ホロシェア）| VR/XR営業DX - 展示会・商談を「体験」に変える | Meta Heroes',
    template: '%s | HoloShare - VR/XR営業DXソリューション',
  },
  description: 'HoloShare（ホロシェア）は、VR/XR技術で営業活動を革新するソリューション。実物大の製品をVR表示、リアルタイムカスタマイズ提案で商談化率2倍に。展示会コスト83%削減、CAD/BIMデータ活用で製造業・建設業の営業DXを実現。無料相談受付中。',
  keywords: [
    'HoloShare',
    'ホロシェア',
    'VR営業',
    'XR営業',
    '営業DX',
    '体験営業',
    '展示会VR',
    '商談化率向上',
    'VR展示会',
    'CADデータVR化',
    'BIMデータ活用',
    '製造業DX',
    '建設業DX',
    '大型機械VR',
    '住宅展示VR',
    'リアルタイムカスタマイズ',
    '3Dモデリング営業',
    'コスト削減',
    '遠隔商談',
    'オンライン商談VR',
    'ガウシアンスプラッティング',
    'Meta Heroes'
  ],

  // 作成者情報
  authors: [{ name: 'Meta Heroes', url: 'https://meta-heroes.co.jp/' }],
  creator: 'Meta Heroes',
  publisher: 'Meta Heroes',

  // カテゴリ
  category: 'technology',

  // Robots設定
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Open Graph (Facebook, LinkedIn等)
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://holoshare.jp/',
    siteName: 'HoloShare（ホロシェア）- VR/XR営業DXソリューション',
    title: 'HoloShare（ホロシェア）| VR/XR営業DX - 展示会・商談を「体験」に変える',
    description: 'VR/XR技術で営業活動を革新。実物大の製品をその場に表示、リアルタイムカスタマイズ提案で商談化率2倍に。展示会コスト83%削減。製造業・建設業の営業DXを実現するHoloShare。',
    images: [
      {
        url: '/key_visual.png',
        width: 1200,
        height: 630,
        alt: 'HoloShare - VR/XR技術で営業を体験に変える',
      },
      {
        url: '/HS_logo.png',
        width: 800,
        height: 600,
        alt: 'HoloShareロゴ',
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    site: '@MetaHeroes',
    creator: '@MetaHeroes',
    title: 'HoloShare（ホロシェア）| VR/XR営業DX - 展示会・商談を「体験」に変える',
    description: 'VR/XR技術で営業活動を革新。商談化率2倍、展示会コスト83%削減。製造業・建設業の営業DXを実現するHoloShare。無料相談受付中。',
    images: ['/key_visual.png'],
  },

  // Canonical URL
  alternates: {
    canonical: 'https://holoshare.jp/',
  },

  // アイコン設定
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },

  // その他のメタ情報
  applicationName: 'HoloShare',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  // 検証用（必要に応じてコメントアウト解除）
  // verification: {
  //   google: 'あなたのGoogle Search Console認証コード',
  //   yandex: 'あなたのYandex認証コード',
  //   yahoo: 'あなたのYahoo認証コード',
  // },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // 構造化データ（JSON-LD）の定義
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Meta Heroes",
    "url": "https://meta-heroes.co.jp/",
    "logo": "https://holoshare.jp/HS_logo.png",
    "description": "VR/XR技術を活用した営業DXソリューション「HoloShare」を提供",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "堂山町1-5 三共梅田ビル 8F",
      "addressLocality": "大阪市北区",
      "postalCode": "530-0027",
      "addressCountry": "JP"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Sales",
      "availableLanguage": ["Japanese"]
    },
    "sameAs": [
      "https://holoshare.jp/"
    ]
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "HoloShare（ホロシェア）",
    "description": "VR/XR技術で営業活動を革新するソリューション。実物大の製品をVR表示、リアルタイムカスタマイズ提案で商談化率2倍、展示会コスト83%削減を実現。",
    "brand": {
      "@type": "Brand",
      "name": "Meta Heroes"
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "price": "0",
      "priceCurrency": "JPY",
      "priceValidUntil": "2026-12-31",
      "url": "https://holoshare.jp/"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "50"
    },
    "image": "https://holoshare.jp/key_visual.png",
    "category": "Business Software",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web-based"
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "HoloShare（ホロシェア）",
    "url": "https://holoshare.jp/",
    "description": "VR/XR技術で営業活動を革新するソリューション",
    "publisher": {
      "@type": "Organization",
      "name": "Meta Heroes"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://holoshare.jp/?s={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "HoloShareとは何ですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "HoloShare（ホロシェア）は、VR/XR技術を活用して営業活動を革新するソリューションです。実物大の製品をその場に表示したり、リアルタイムでカスタマイズ提案を行うことができ、商談化率が従来の2倍になる効果があります。"
        }
      },
      {
        "@type": "Question",
        "name": "どのような業界で活用できますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "製造業・機械業界、建設業・住宅業界を中心に、大型製品や複雑な製品を扱う様々な業界で活用いただけます。展示会での製品展示、営業先でのデモンストレーション、オンライン商談など、幅広いシーンで利用可能です。"
        }
      },
      {
        "@type": "Question",
        "name": "導入にはどのくらいの費用がかかりますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "お客様の課題や活用シーンによって最適なプランをご提案いたします。まずは無料相談にて、貴社の状況をヒアリングさせていただき、具体的な活用イメージと概算費用をご案内いたします。"
        }
      },
      {
        "@type": "Question",
        "name": "既存のCADデータやBIMデータは活用できますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "はい、既存のCADデータ（STEP、IGES等）やBIMデータ、一般的な3Dフォーマット（FBX、OBJ等）をそのまま活用できます。営業だけでなく、様々な用途に横展開可能で、使えば使うほど投資効果が高まります。"
        }
      },
      {
        "@type": "Question",
        "name": "どのような効果が期待できますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "商談化率が従来の2倍に向上する効果があります。また、展示会ブース設営コストを83%削減（300万円→50万円）、実機輸送費を100%削減（50万円→0円）など、大幅なコスト削減も実現できます。"
        }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "ホーム",
        "item": "https://holoshare.jp/"
      }
    ]
  };

  return (
    <html lang="ja">
      <head>
        <link rel="stylesheet" href="/aivo-chatbot.css" />

        {/* 構造化データ（JSON-LD） - SEO & LLMO最適化 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(productSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        <Script src="/aivo-chatbot.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
