# 🚀 Semih Karakaş Portfolio & Blog Sitesi - Proje Dökümantasyonu

## 📋 İçindekiler
1. [Proje Hakkında](#proje-hakkında)
2. [Teknoloji Stack](#teknoloji-stack)
3. [Proje Yapısı](#proje-yapısı)
4. [Kurulum ve Çalıştırma](#kurulum-ve-çalıştırma)
5. [Bileşenler ve Çalışma Mantığı](#bileşenler-ve-çalışma-mantığı)
6. [Özellikler](#özellikler)
7. [Stil ve Tasarım Sistemi](#stil-ve-tasarım-sistemi)
8. [Blog Sistemi](#blog-sistemi)
9. [İletişim Formu](#iletişim-formu)
10. [Deployment](#deployment)

---

## 🎯 Proje Hakkında

Bu proje, **Semih Karakaş**'ın kişisel portfolio ve blog sitesidir. Modern web teknolojileri kullanılarak geliştirilmiş, tamamen responsive ve performans odaklı bir single-page application (SPA) şeklinde tasarlanmıştır.

### Temel Özellikler:
- ✨ Modern ve minimalist tasarım
- 🎨 Glassmorphism ve gradient efektleri
- 🌊 Akıcı animasyonlar (Framer Motion)
- 📱 Tam responsive tasarım
- 🚀 Yüksek performans (Next.js 14)
- 📝 Blog sistemi
- 📧 İletişim formu (EmailJS entegrasyonu)
- 🎭 Dark mode tasarım

---

## 🛠 Teknoloji Stack

### Frontend Framework
- **Next.js 14.2.3** - React tabanlı modern web framework
  - App Router kullanımı
  - Server Components
  - Otomatik kod bölme (code splitting)
  - SEO optimizasyonu

### UI & Styling
- **React 18.3.1** - UI kütüphanesi
- **TypeScript 5.4.5** - Tip güvenliği
- **Tailwind CSS 3.4.3** - Utility-first CSS framework
- **Framer Motion 11.2.10** - Animasyon kütüphanesi
- **Lucide React 0.379.0** - Modern icon seti

### İçerik Yönetimi
- **Gray Matter 4.0.3** - Markdown metadata parser
- **React Markdown 9.0.1** - Markdown render
- **Remark GFM 4.0.0** - GitHub Flavored Markdown desteği

### İletişim
- **EmailJS 4.3.3** - Email gönderme servisi

### Development Tools
- **ESLint** - Kod kalitesi
- **PostCSS** - CSS işleme
- **Autoprefixer** - CSS uyumluluk

---

## 📁 Proje Yapısı

```
semihblog/
├── app/                          # Next.js App Router
│   ├── blog/                     # Blog sayfaları
│   │   └── [slug]/              # Dinamik blog post sayfası
│   │       └── page.tsx         # Blog detay sayfası
│   ├── globals.css              # Global CSS stilleri
│   ├── layout.tsx               # Ana layout bileşeni
│   ├── not-found.tsx            # 404 sayfası
│   └── page.tsx                 # Ana sayfa (Home)
│
├── components/                   # React bileşenleri
│   ├── About.tsx                # Hakkımda bölümü
│   ├── Blog.tsx                 # Blog listesi bölümü
│   ├── Contact.tsx              # İletişim formu
│   ├── Footer.tsx               # Footer bileşeni
│   ├── Header.tsx               # Header/Navigation
│   ├── Hero.tsx                 # Hero bölümü (Ana banner)
│   └── Projects.tsx             # Projeler bölümü
│
├── tests/                        # Test dosyaları
├── .env.example                 # Örnek environment değişkenleri
├── .gitignore                   # Git ignore dosyası
├── next.config.js               # Next.js konfigürasyonu
├── package.json                 # Proje bağımlılıkları
├── postcss.config.js            # PostCSS ayarları
├── tailwind.config.ts           # Tailwind CSS ayarları
├── tsconfig.json                # TypeScript ayarları
└── README.md                    # Proje README dosyası
```

---

## 🚀 Kurulum ve Çalıştırma

### Gereksinimler
- Node.js 18.x veya üzeri
- npm veya yarn package manager

### Kurulum Adımları

1. **Projeyi klonlayın:**
```bash
git clone <repository-url>
cd semihblog
```

2. **Bağımlılıkları yükleyin:**
```bash
npm install
# veya
yarn install
```

3. **Environment değişkenlerini ayarlayın:**
`.env.example` dosyasını `.env.local` olarak kopyalayın ve gerekli değerleri doldurun:
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

4. **Development sunucusunu başlatın:**
```bash
npm run dev
# veya
yarn dev
```

Site `http://localhost:3002` adresinde çalışacaktır.

### Diğer Komutlar

```bash
# Production build oluşturma
npm run build

# Production sunucusunu başlatma
npm run start

# Kod kalitesi kontrolü
npm run lint
```

---

## 🧩 Bileşenler ve Çalışma Mantığı

### 1. **Layout (app/layout.tsx)**

Ana layout bileşeni, tüm sayfalar için ortak yapıyı tanımlar.

**Özellikler:**
- SEO meta etiketleri (title, description, Open Graph, Twitter Card)
- Dark mode tema
- Arka plan gradient efektleri (4 adet animasyonlu orb)
- Header ve Footer'ı tüm sayfalara ekler

**Çalışma Mantığı:**
```tsx
- HTML lang="en" ve className="dark" ile dark mode aktif
- Body içinde 4 adet arka plan orb elementi (bg-orb-1, bg-orb-2, vb.)
- z-index ile içerik katmanlaması (arka plan < içerik)
- Header → Main Content → Footer sıralaması
```

### 2. **Header (components/Header.tsx)**

Sabit (sticky) navigation bar bileşeni.

**Özellikler:**
- Scroll'da glassmorphism efekti
- Responsive mobil menü
- Smooth scroll navigasyon
- Hover animasyonları

**Çalışma Mantığı:**
```tsx
- useEffect ile scroll event listener
- isScrolled state'i ile scroll durumunu takip
- 50px scroll sonrası glass efekti aktif olur
- Desktop: Yatay menü
- Mobile: Hamburger menü (AnimatePresence ile animasyonlu)
- Framer Motion ile giriş animasyonları
```

**State Yönetimi:**
- `isScrolled`: Scroll durumu (boolean)
- `isMobileMenuOpen`: Mobil menü açık/kapalı (boolean)

### 3. **Hero (components/Hero.tsx)**

Ana sayfa hero bölümü, typing animasyonu içerir.

**Özellikler:**
- Typing effect animasyonu
- Yanıp sönen cursor
- Gradient dekoratif elementler
- CTA (Call-to-Action) butonları

**Çalışma Mantığı:**
```tsx
- useEffect ile typing animasyonu
  - setInterval ile karakter karakter yazma
  - 100ms aralıklarla her karakter eklenir
- Cursor yanıp sönme: 500ms interval
- Dekoratif elementler: rotate ve scale animasyonları
- Motion variants ile stagger animasyonlar
```

**State Yönetimi:**
- `text`: Yazılan metin (string)
- `showCursor`: Cursor görünürlüğü (boolean)

### 4. **About (components/About.tsx)**

Hakkımda bölümü, kişisel bilgiler ve yetenekler.

**Özellikler:**
- Avatar/emoji gösterimi
- Tech stack badge'leri
- Skill kartları (4 adet)
- Hover animasyonları

**Çalışma Mantığı:**
```tsx
- Grid layout (md:grid-cols-2)
- Sol: Avatar + Bilgi
- Sağ: Açıklama + Tech Stack
- Alt: 4 skill kartı (lg:grid-cols-4)
- whileInView ile scroll animasyonları
- Her tech badge'e stagger delay
```

**Veri Yapısı:**
```tsx
skills: Array<{
  icon: LucideIcon,
  title: string,
  description: string
}>

techStack: string[] // Teknoloji isimleri
```

### 5. **Projects (components/Projects.tsx)**

Proje portföyü bölümü, filtreleme özelliği ile.

**Özellikler:**
- Kategori filtreleme
- Proje kartları (grid layout)
- Hover efektleri
- GitHub ve Demo linkleri

**Çalışma Mantığı:**
```tsx
- useState ile selectedCategory takibi
- Filter butonları ile kategori seçimi
- filteredProjects: selectedCategory'ye göre filtreleme
- Grid: md:grid-cols-2 lg:grid-cols-3
- Her proje kartı:
  - Resim (hover'da scale)
  - Başlık ve açıklama
  - Tag'ler
  - GitHub/Demo linkleri
```

**State Yönetimi:**
- `selectedCategory`: Seçili kategori (string)

**Veri Yapısı:**
```tsx
Project: {
  id: number,
  title: string,
  description: string,
  image: string,
  tags: string[],
  category: string,
  github?: string,
  demo?: string
}
```

### 6. **Blog (components/Blog.tsx)**

Blog yazıları listesi bölümü.

**Özellikler:**
- Blog post kartları
- Tarih ve okuma süresi gösterimi
- Kategori badge'leri
- "Read More" linkleri

**Çalışma Mantığı:**
```tsx
- Statik blog post array'i
- Grid layout (md:grid-cols-2)
- Her kart:
  - Kategori badge
  - Başlık
  - Excerpt (özet)
  - Meta bilgiler (tarih, okuma süresi)
  - Link to /blog/[slug]
- "View All Articles" butonu
```

**Veri Yapısı:**
```tsx
BlogPost: {
  id: number,
  title: string,
  excerpt: string,
  date: string,
  readTime: string,
  category: string,
  slug: string
}
```

### 7. **Contact (components/Contact.tsx)**

İletişim formu bölümü, EmailJS entegrasyonu ile.

**Özellikler:**
- Form validasyonu
- EmailJS ile email gönderimi
- Loading state
- Success/Error mesajları
- İletişim bilgileri kartları

**Çalışma Mantığı:**
```tsx
- useState ile form data yönetimi
- handleSubmit:
  1. Form submit'i engelle (preventDefault)
  2. Loading state'i aktif et
  3. EmailJS ile email gönder
  4. Success/Error durumuna göre mesaj göster
  5. Form'u temizle (success durumunda)
  6. 5 saniye sonra mesajı gizle
- handleChange: Input değişikliklerini state'e yaz
```

**State Yönetimi:**
- `formData`: Form verileri (name, email, message)
- `isSubmitting`: Gönderim durumu (boolean)
- `submitStatus`: Durum ('idle' | 'success' | 'error')

**EmailJS Entegrasyonu:**
```tsx
emailjs.send(
  serviceId,      // .env'den
  templateId,     // .env'den
  {
    from_name: formData.name,
    from_email: formData.email,
    message: formData.message
  },
  publicKey       // .env'den
)
```

### 8. **Footer (components/Footer.tsx)**

Alt bilgi bölümü.

**Özellikler:**
- Sosyal medya linkleri
- Copyright bilgisi
- Gradient divider

### 9. **Blog Post Page (app/blog/[slug]/page.tsx)**

Dinamik blog detay sayfası.

**Özellikler:**
- Dinamik routing ([slug])
- Markdown içerik render
- Meta tag oluşturma (generateMetadata)
- Geri dönüş linki

**Çalışma Mantığı:**
```tsx
- params.slug ile blog post'u bul
- blogPosts object'inden ilgili post'u al
- Bulunamazsa 404 göster
- generateMetadata: SEO için meta tag'ler
- dangerouslySetInnerHTML ile içerik render
```

---

## ✨ Özellikler

### 1. **Animasyonlar (Framer Motion)**

Tüm bileşenlerde kullanılan animasyon tipleri:

**Initial/Animate:**
```tsx
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
```

**WhileInView (Scroll Animasyonları):**
```tsx
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
```

**Hover/Tap:**
```tsx
whileHover={{ scale: 1.05, y: -5 }}
whileTap={{ scale: 0.95 }}
```

**Stagger Children:**
```tsx
transition={{ staggerChildren: 0.1 }}
```

### 2. **Responsive Tasarım**

Tailwind CSS breakpoint'leri:
- **Mobile**: < 768px (default)
- **Tablet**: md: (768px+)
- **Desktop**: lg: (1024px+)

Grid sistemleri:
```tsx
// Mobil: 1 kolon, Tablet: 2 kolon, Desktop: 3 kolon
grid-cols-1 md:grid-cols-2 lg:grid-cols-3
```

### 3. **SEO Optimizasyonu**

**Layout Meta Tags:**
- title, description
- keywords
- Open Graph (Facebook, LinkedIn)
- Twitter Card

**Blog Post Meta Tags:**
- Dinamik title ve description
- generateMetadata fonksiyonu

### 4. **Performance Optimizasyonu**

- **Code Splitting**: Next.js otomatik
- **Image Optimization**: Next.js Image component (kullanılabilir)
- **CSS Purging**: Tailwind CSS production build'de unused CSS'leri kaldırır
- **Server Components**: Default olarak server-side render

---

## 🎨 Stil ve Tasarım Sistemi

### Renk Paleti

**globals.css'de tanımlı:**
```css
/* Arka plan */
background-color: #09090B (dark-bg)

/* Metin */
color: #e4e4e7 (açık gri)

/* Gradient Renkler */
primary-violet: #8B5CF6
primary-indigo: #6366F1
primary-cyan: #06B6D4
primary-teal: #14B8A6
primary-emerald: #10B981
accent-rose: #F43F5E
accent-orange: #F97316
```

### Özel CSS Sınıfları

**1. Glassmorphism:**
```css
.glass {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.glossy-card {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.liquid-glass {
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(15px);
}
```

**2. Gradient Text:**
```css
.gradient-text {
  color: #ffffff;
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
}
```

**3. Shadow Effects:**
```css
.shadow-glow-violet {
  box-shadow: 0 0 30px rgba(139, 92, 246, 0.3);
}

.shadow-glow-cyan {
  box-shadow: 0 0 30px rgba(6, 182, 212, 0.3);
}
```

**4. Background Orbs:**
```css
.bg-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.15;
  animation: float 20s infinite ease-in-out;
}

.bg-orb-1 { /* Sol üst - Mor */ }
.bg-orb-2 { /* Sağ üst - Cyan */ }
.bg-orb-3 { /* Sol alt - Yeşil */ }
.bg-orb-4 { /* Sağ alt - Turuncu */ }
```

### Typography

**Font Families:**
- **Body**: 'Inter' (Google Fonts)
- **Headings**: 'Space Grotesk' (Google Fonts)

**Tailwind Sınıfları:**
```tsx
font-heading // Space Grotesk
font-body    // Inter (default)
```

### Scrollbar Özelleştirme

```css
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, #8B5CF6, #06B6D4);
  border-radius: 5px;
}
```

---

## 📝 Blog Sistemi

### Yapı

Blog sistemi şu an **statik** olarak çalışmaktadır. Tüm blog içerikleri `app/blog/[slug]/page.tsx` dosyasında `blogPosts` object'i içinde tanımlıdır.

### Blog Post Ekleme

Yeni bir blog post eklemek için:

1. `app/blog/[slug]/page.tsx` dosyasını açın
2. `blogPosts` object'ine yeni bir entry ekleyin:

```tsx
'yeni-blog-slug': {
  title: 'Blog Başlığı',
  date: '2024-10-20',
  readTime: '5 min read',
  category: 'Kategori',
  content: `
    Markdown formatında içerik...
    
    ## Alt Başlık
    
    Paragraf metni...
  `
}
```

3. `components/Blog.tsx` dosyasında blog listesine ekleyin:

```tsx
{
  id: 5,
  title: 'Blog Başlığı',
  excerpt: 'Kısa özet...',
  date: '2024-10-20',
  readTime: '5 min read',
  category: 'Kategori',
  slug: 'yeni-blog-slug'
}
```

### Gelecek İyileştirmeler

Blog sistemini geliştirmek için:
- **CMS Entegrasyonu**: Sanity, Contentful, Strapi
- **Markdown Dosyaları**: `/content/blog/` klasöründe .md dosyaları
- **Database**: Supabase, MongoDB ile dinamik içerik

---

## 📧 İletişim Formu

### EmailJS Kurulumu

1. [EmailJS](https://www.emailjs.com/) hesabı oluşturun
2. Email servisi ekleyin (Gmail, Outlook, vb.)
3. Email template oluşturun
4. Service ID, Template ID ve Public Key'i alın
5. `.env.local` dosyasına ekleyin:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
```

### Email Template Örneği

EmailJS dashboard'da template oluşturun:

```
Subject: Yeni İletişim Formu Mesajı - {{from_name}}

Body:
İsim: {{from_name}}
Email: {{from_email}}

Mesaj:
{{message}}
```

### Form Validasyonu

HTML5 validasyonu kullanılmaktadır:
- `required` attribute
- `type="email"` email formatı kontrolü

---

## 🚀 Deployment

### Vercel (Önerilen)

1. [Vercel](https://vercel.com) hesabı oluşturun
2. GitHub repository'nizi bağlayın
3. Environment variables ekleyin
4. Deploy butonuna tıklayın

**Otomatik Deployment:**
- Her `main` branch push'unda otomatik deploy
- Preview deployments for pull requests

### Netlify

1. [Netlify](https://netlify.com) hesabı oluşturun
2. "New site from Git" seçin
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
4. Environment variables ekleyin
5. Deploy

### Diğer Platformlar

- **AWS Amplify**
- **Railway**
- **Render**
- **DigitalOcean App Platform**

### Environment Variables

Production'da şu değişkenleri eklemeyi unutmayın:
```
NEXT_PUBLIC_EMAILJS_SERVICE_ID
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
```

---

## 🔧 Özelleştirme

### Kişisel Bilgileri Değiştirme

1. **Layout Meta Tags** (`app/layout.tsx`):
```tsx
export const metadata: Metadata = {
  title: 'İsminiz | Ünvan',
  description: 'Açıklama...',
  // ...
}
```

2. **Hero Bölümü** (`components/Hero.tsx`):
```tsx
const fullText = "Hi, I'm İsminiz"
```

3. **About Bölümü** (`components/About.tsx`):
- Kişisel bilgiler
- Tech stack
- Skills

4. **Projeler** (`components/Projects.tsx`):
- projects array'ini düzenleyin

5. **İletişim Bilgileri** (`components/Contact.tsx`):
- Email adresi
- Lokasyon

### Renkleri Değiştirme

`tailwind.config.ts` dosyasında:
```ts
colors: {
  'primary-violet': '#8B5CF6',
  // Diğer renkler...
}
```

### Font Değiştirme

`app/globals.css` dosyasında:
```css
@import url('https://fonts.googleapis.com/css2?family=YeniFontAilesi');
```

---

## 📊 Performans İpuçları

1. **Image Optimization**: Next.js Image component kullanın
2. **Lazy Loading**: Framer Motion'ın `whileInView` kullanın
3. **Code Splitting**: Dynamic imports kullanın
4. **CSS Purging**: Tailwind otomatik yapar
5. **Caching**: Next.js otomatik cache yönetimi

---

## 🐛 Sorun Giderme

### Port 3002 kullanımda hatası
```bash
# Farklı port kullanın
npm run dev -- -p 3003
```

### EmailJS çalışmıyor
- Environment variables kontrol edin
- EmailJS dashboard'da service aktif mi kontrol edin
- Console'da hata mesajlarını kontrol edin

### Build hatası
```bash
# node_modules ve .next'i temizleyin
rm -rf node_modules .next
npm install
npm run build
```

---

## 📚 Kaynaklar

- [Next.js Dokümantasyonu](https://nextjs.org/docs)
- [Tailwind CSS Dokümantasyonu](https://tailwindcss.com/docs)
- [Framer Motion Dokümantasyonu](https://www.framer.com/motion/)
- [EmailJS Dokümantasyonu](https://www.emailjs.com/docs/)

---

## 📝 Notlar

- Proje Next.js 14 App Router kullanmaktadır
- Tüm bileşenler TypeScript ile yazılmıştır
- Dark mode tema varsayılan olarak aktiftir
- Responsive tasarım mobile-first yaklaşımı ile yapılmıştır

---

## 🎉 Son Söz

Bu proje, modern web teknolojileri kullanılarak geliştirilmiş, performans ve kullanıcı deneyimi odaklı bir portfolio sitesidir. İhtiyaçlarınıza göre özelleştirebilir ve genişletebilirsiniz.

**İyi kodlamalar! 🚀**
