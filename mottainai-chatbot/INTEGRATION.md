# HoloShare Chatbot Integration Guide

## 📋 Overview

This guide explains how to integrate the HoloShare chatbot into the Next.js landing page.

**Chatbot Details:**
- **Size**: 36.3kb (JS) + 5.7kb (CSS) = 42kb total
- **Framework**: Standalone widget (works with any website)
- **Style**: LINE-style chat interface with selection-based interaction
- **Mobile**: Responsive (full-screen on mobile, popup on desktop)

---

## 🚀 Integration Steps

### Method 1: Direct Integration (Recommended)

#### Step 1: Copy Chatbot Files

Copy the built chatbot files to your Next.js `public` directory:

```bash
# From the project root directory
cp mottainai-chatbot/dist/aivo-chatbot.js public/
cp mottainai-chatbot/dist/aivo-chatbot.css public/
cp mottainai-chatbot/public/icon.png public/HS_chatbot_icon.png
```

**Note**: Make sure `public/HS_logo.png` exists (it's already there from your LP).

#### Step 2: Update Next.js Layout

Edit `src/app/layout.tsx` to include the chatbot scripts:

```tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HoloShare - 営業を「体験」に変える",
  description: "VR/XR技術で営業活動を革新",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        {/* HoloShare Chatbot CSS */}
        <link rel="stylesheet" href="/aivo-chatbot.css" />
      </head>
      <body>
        {children}

        {/* HoloShare Chatbot Script */}
        <script src="/aivo-chatbot.js" defer></script>
      </body>
    </html>
  );
}
```

#### Step 3: Test Locally

```bash
# Navigate to project root
cd /Volumes/1TB_SSD_001/06_Projects/2025/MH-XR-LP

# Run the Next.js development server
npm run dev
```

Open `http://localhost:3000` in your browser. You should see the HoloShare chatbot button in the bottom-right corner.

---

### Method 2: Using Next.js Script Component

Alternatively, you can use Next.js's `<Script>` component for better optimization:

```tsx
import Script from 'next/script';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="stylesheet" href="/aivo-chatbot.css" />
      </head>
      <body>
        {children}

        <Script
          src="/aivo-chatbot.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
```

---

## 🎨 Customization Options

### Changing Colors

Edit `mottainai-chatbot/src/index.ts`:

```typescript
const chatbot = new AivoChatbot(chatData, {
  iconUrl: '/HS_logo.png',
  primaryColor: '#00bcd4', // Change this to your desired color
  botName: 'HoloShare アシスタント',
});
```

Then rebuild:
```bash
cd mottainai-chatbot
npm run build
```

### Changing Button Position

Edit `mottainai-chatbot/src/styles.css`:

```css
#aivo-chatbot-button {
  position: fixed;
  bottom: 24px;  /* Change vertical position */
  right: 24px;   /* Change horizontal position */
  /* ... */
}
```

### Modifying Conversation Content

Edit `mottainai-chatbot/knowledge/qa-data.json` to update:
- Welcome messages
- Options/buttons
- Conversation flows
- FAQ content

Then rebuild the chatbot.

---

## 📱 Mobile Behavior

The chatbot automatically adapts to mobile devices:

- **Desktop/Tablet**: Popup window (380px × 600px) in bottom-right corner
- **Mobile (<480px)**: Full-screen overlay

No additional configuration needed!

---

## 🧪 Testing Checklist

- [ ] Chatbot button appears in bottom-right corner
- [ ] Clicking button opens chat window
- [ ] Welcome message displays correctly
- [ ] All menu options are clickable
- [ ] Navigation between conversation nodes works
- [ ] "メニューに戻る" buttons work
- [ ] FAQ section displays all 6 questions
- [ ] Cost reduction data is accurate
- [ ] Use cases (manufacturing/construction) display correctly
- [ ] Contact options work
- [ ] Mobile responsive behavior works
- [ ] Close button works
- [ ] Reset button works (starts conversation over)

---

## 🔄 Updating Content

### Quick Content Update

1. Edit `mottainai-chatbot/knowledge/qa-data.json`
2. Rebuild: `cd mottainai-chatbot && npm run build`
3. Copy updated file: `cp mottainai-chatbot/dist/aivo-chatbot.js public/`
4. Refresh browser (hard refresh: Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)

### Workflow for Frequent Updates

```bash
# In one terminal: Watch and rebuild chatbot automatically
cd mottainai-chatbot
npm run dev

# In another terminal: Run Next.js dev server
cd /Volumes/1TB_SSD_001/06_Projects/2025/MH-XR-LP
npm run dev
```

---

## 🚀 Production Deployment

### Before Deploying

1. **Build chatbot** (production mode):
   ```bash
   cd mottainai-chatbot
   npm run build
   ```

2. **Copy files to public**:
   ```bash
   cp dist/aivo-chatbot.js ../public/
   cp dist/aivo-chatbot.css ../public/
   ```

3. **Build Next.js**:
   ```bash
   cd ..
   npm run build
   ```

### Vercel Deployment

If deploying to Vercel, make sure:
- `public/aivo-chatbot.js` is committed to git
- `public/aivo-chatbot.css` is committed to git
- `public/HS_logo.png` is committed to git

These files will be automatically served as static assets.

---

## 🛠️ Troubleshooting

### Chatbot doesn't appear
- Check browser console for errors
- Verify `/aivo-chatbot.js` and `/aivo-chatbot.css` are accessible
- Check if `public/HS_logo.png` exists
- Try hard refresh (Cmd+Shift+R / Ctrl+Shift+R)

### Icon doesn't display
- Ensure `public/HS_logo.png` exists
- Check file path in `mottainai-chatbot/src/index.ts`
- Rebuild chatbot after changing icon path

### Conversation doesn't flow correctly
- Validate JSON structure in `qa-data.json`
- Ensure all `id` references in `options` exist as conversation nodes
- Check browser console for errors

### Styling conflicts with LP
- Check for CSS conflicts in browser DevTools
- Chatbot uses prefixed classes (`aivo-*`) to avoid conflicts
- Adjust z-index if needed (default: 999999)

---

## 📊 Chatbot Structure

### Conversation Flow

```
Welcome
  └─ Main Menu
       ├─ HoloShareとは？
       ├─ できること (4 features)
       ├─ 導入メリット・コスト削減 (4 cost savings)
       ├─ 活用事例
       │    ├─ 製造業・機械業界
       │    │    ├─ 展示会での活用
       │    │    └─ 営業活動での活用
       │    └─ 建設・住宅業界
       │         ├─ 展示会での活用
       │         └─ 営業活動での活用
       ├─ よくある質問 (6 FAQs)
       └─ お問い合わせ
            ├─ お問い合わせフォームへ
            └─ LINEで相談する
```

### Node Count
- **Total nodes**: 36
- **Main menu**: 6 options
- **Features**: 4 features
- **Cost savings**: 4 categories
- **Use cases**: 2 industries × 2 scenarios = 4 case studies
- **FAQ**: 6 questions
- **Implementation flow**: 3 steps
- **Contact**: 2 methods

---

## 🎯 Next Steps (Optional Enhancements)

### Phase 2: AI/RAG Integration

If you want to add AI-powered responses in the future:

1. **Backend Setup**
   - Set up Node.js/Python API server
   - Integrate OpenAI/Claude API
   - Set up vector database (Pinecone, Weaviate, or Supabase pgvector)

2. **Document Processing**
   - Extract all LP content into structured documents
   - Create embeddings for semantic search
   - Store in vector database

3. **Chatbot Modification**
   - Add text input field to UI
   - Implement free-text query handling
   - Integrate with RAG backend

**Estimated effort**: 2-3 weeks

### Phase 2: Analytics Integration

Track chatbot engagement:
- Button clicks
- Conversation paths
- Most viewed sections
- Drop-off points

**Tools**: Google Analytics, Mixpanel, or custom solution

---

## 📞 Support

For questions about the chatbot integration, check:
- This integration guide
- Source code comments in `mottainai-chatbot/src/`
- Browser console for errors

---

## ✅ Completion Checklist

- [x] Conversation data created (36 nodes)
- [x] Branding updated (name, color, icon)
- [x] Styles customized for HoloShare
- [x] Chatbot built successfully
- [ ] Chatbot integrated into Next.js LP
- [ ] Tested on desktop browser
- [ ] Tested on mobile device
- [ ] Deployed to production

---

**Generated**: 2025-11-15
**Chatbot Version**: 1.0.0
**Build Size**: 42kb (36.3kb JS + 5.7kb CSS)
