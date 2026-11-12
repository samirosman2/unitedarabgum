'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';

export type Locale = 'en' | 'ar';

interface LanguageContextType {
  locale: Locale;
  toggleLocale: () => void;
  t: (key: string) => string;
  dir: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>('en');

  const toggleLocale = useCallback(() => {
    setLocale((l) => (l === 'en' ? 'ar' : 'en'));
  }, []);

  const t = useCallback(
    (key: string): string => {
      const dict = locale === 'ar' ? ar : en;
      return (dict as Record<string, string>)[key] ?? key;
    },
    [locale]
  );

  return (
    <LanguageContext.Provider value={{ locale, toggleLocale, t, dir: locale === 'ar' ? 'rtl' : 'ltr' }}>
      <div className={locale === 'ar' ? 'font-arabic' : 'font-sans'}>{children}</div>
    </LanguageContext.Provider>
  );
}

// ─────────────────────────────────────────────
// ENGLISH TRANSLATIONS
// ─────────────────────────────────────────────
const en: Record<string, string> = {
  // Nav
  'nav.home': 'Home',
  'nav.about': 'About Us',
  'nav.factory': 'Our Factory',
  'nav.gallery': 'Gallery',
  'nav.products': 'Products',
  'nav.contact': 'Contact',
  'nav.lang': 'العربية',

  // Hero
  'hero.tagline': "Nature's Finest Gum Arabic",
  'hero.subtitle':
    'Premier manufacturer and processor of Gum Arabic — bridging Omani enterprise with global markets through quality, sustainability, and innovation.',
  'hero.cta.products': 'Explore Products',
  'hero.cta.contact': 'Contact Us',

  // Highlights
  'highlights.title': 'Why United Arab Gum',
  'highlights.privately.title': 'Privately Owned Omani Company',
  'highlights.privately.desc':
    "A wholly Omani enterprise, founded with deep roots in Oman's entrepreneurial spirit and commitment to national development.",
  'highlights.facility.title': 'Salalah Free Zone Facility',
  'highlights.facility.desc':
    'State-of-the-art manufacturing and processing plant located in the Salalah Free Zone, Dhofar Governorate — strategically positioned for global trade.',
  'highlights.launch.title': 'Commercial Launch: March 2027',
  'highlights.launch.desc':
    'On track for full commercial operations in March 2027, with capacity planned to serve international Food, Pharma, and Industrial markets.',
  'highlights.quality.title': 'Quality-First Philosophy',
  'highlights.quality.desc':
    'Every batch undergoes rigorous quality control protocols aligned with international food-safety and pharmaceutical standards.',

  // Sectors
  'sectors.title': 'Industries We Serve',
  'sectors.food': 'Food & Beverage',
  'sectors.food.desc': 'Emulsifier, stabilizer, and fiber supplement for confectionery, beverages, and bakery products.',
  'sectors.pharma': 'Pharmaceutical',
  'sectors.pharma.desc': 'USP-grade binder and excipient for tablet coatings and oral suspensions.',
  'sectors.nutra': 'Nutraceutical',
  'sectors.nutra.desc': 'Prebiotic dietary fiber with proven gut-health benefits.',
  'sectors.cosm': 'Cosmetics',
  'sectors.cosm.desc': 'Natural thickener and film-former for skincare formulations.',
  'sectors.ind': 'Industrial',
  'sectors.ind.desc': 'Adhesive, binder, and coating agent for printing inks and technical applications.',

  // Home factory section
  'home.factory.eyebrow': 'Our Factory',
  'home.factory.title': 'State-of-the-Art Processing Facility',
  'home.factory.description':
    'Equipped with advanced automated sorting lines, stringent quality control systems, and large-scale bulk storage capabilities, our primary facility ensures premium hygiene and grading standards from raw harvest to final export.',
  'home.factory.cta': 'Explore Factory & Infrastructure',

  // About page
  'about.hero.title': 'About United Arab Gum LLC',
  'about.hero.subtitle': 'Rooted in Oman. Reaching the World.',
  'about.identity.title': 'Corporate Identity & Vision',
  'about.identity.p1':
    'United Arab Gum LLC is a privately owned Omani limited liability company established to become a leading processor and global supplier of premium Gum Arabic products. Our vision is to position Oman at the forefront of the natural gum industry by combining world-class processing technology with unwavering commitment to quality and sustainability.',
  'about.identity.p2':
    'We source the finest raw Gum Arabic from producing regions and transform it into highly purified, standardized grades that meet the precise requirements of Food, Pharmaceutical, Nutraceutical, Cosmetics, and Industrial customers worldwide.',
  'about.mission.title': 'Our Mission',
  'about.mission.text':
    'To deliver consistently high-quality Gum Arabic products to global markets while fostering sustainable supply chains, creating meaningful Omani employment, and upholding the highest standards of environmental stewardship.',
  'about.locations.title': 'Our Locations',
  'about.locations.hq.title': 'Head Office — Muscat',
  'about.locations.hq.desc': 'Bousher, Muscat Governorate, Sultanate of Oman',
  'about.locations.plant.title': 'Manufacturing Facility — Salalah',
  'about.locations.plant.desc': 'Salalah Free Zone, Dhofar Governorate, Sultanate of Oman',
  'about.leadership.title': 'Leadership',
  'about.leadership.name': 'Mr. Said Salim Said Al Buraiki',
  'about.leadership.role': 'Chairman',
  'about.leadership.bio':
    'Mr. Said Salim Said Al Buraiki leads United Arab Gum LLC as Chairman, bringing extensive experience in Omani business development and trade. Under his stewardship, the company is committed to building a world-class Gum Arabic enterprise that drives economic value for Oman while meeting global quality standards.',
  'about.quality.title': 'Quality & Sustainability',
  'about.quality.p1':
    'Quality is embedded in every stage of our operations — from raw material sourcing to finished product delivery. Our manufacturing processes are designed to meet internationally recognized standards including ISO, GMP, and Food Safety certifications.',
  'about.quality.p2':
    'Sustainability is equally central to our identity. We are committed to responsible sourcing practices, minimizing our environmental footprint, and contributing positively to the communities along our supply chain.',

  // Factory page
  'factory.eyebrow': 'Our Factory',
  'factory.title': 'State-of-the-Art Production & Exclusive Global Distribution',
  'factory.body':
    'Al Shafaq for Arabic Gum SPC (Salalah Free Zone) operates our advanced manufacturing and processing facility, specializing entirely in the collection, cleaning, grading, processing, and bulk packaging of premium Gum Arabic. All international commercial transactions, sales orders, and global client relations are exclusively managed and serviced worldwide through United Arab Gum, our designated global commercial partner. This streamlined partnership ensures that every international client receives world-class product standards, rigorous quality control, and seamless end-to-end export service directly from our production plant in the Salalah Free Zone.',
  'factory.image1.alt': 'Inside the Gum Arabic manufacturing facility',
  'factory.image2.alt': 'Gum Arabic production and processing equipment',

  // Products page
  'products.hero.title': 'Our Products & Applications',
  'products.hero.subtitle': 'Precision-processed Gum Arabic for every industry need.',
  'products.portfolio.title': 'Product Portfolio',
  'products.cta.title': 'Need a Custom Formulation?',
  'products.cta.desc':
    'Our technical team is ready to work with you to develop specialized Gum Arabic solutions tailored to your exact application requirements.',
  'products.cta.btn': 'Get in Touch',
  'products.grade': 'Grade',
  'products.applications': 'Applications',

  // Product names & details
  'product.1.name': 'Spray-Dried Gum Arabic Powder',
  'product.1.grade': 'Standard / Premium',
  'product.1.desc': 'Highly soluble, free-flowing powder produced via advanced spray-drying. Ideal for encapsulation, dry mix applications, and instant beverages.',
  'product.1.apps': 'Flavour encapsulation · Dry mix beverages · Spray-dried emulsions · Infant formula',

  'product.2.name': 'Food-Grade Gum Arabic',
  'product.2.grade': 'Food-Grade (E414)',
  'product.2.desc': 'Compliant with E414 / JECFA specifications. Functions as an emulsifier, stabilizer, and soluble dietary fiber in a broad range of food applications.',
  'product.2.apps': 'Confectionery · Soft drinks · Bakery · Dairy · Flavour systems',

  'product.3.name': 'Pharmaceutical-Grade Gum Arabic',
  'product.3.grade': 'USP / BP Grade',
  'product.3.desc': 'Ultra-purified grade meeting USP and BP monograph requirements. Used as an excipient, binder, and stabilizer in solid and liquid dosage forms.',
  'product.3.apps': 'Tablet binders · Oral suspensions · Lozenges · Coating agents',

  'product.4.name': 'Cosmetic-Grade Gum Arabic',
  'product.4.grade': 'Cosmetic-Grade',
  'product.4.desc': 'High-purity, low-colour grade suitable for use in skin and hair care formulations as a natural film-former, thickener, and binder.',
  'product.4.apps': 'Facial masks · Hair styling · Serums · Natural cosmetics',

  'product.5.name': 'Industrial-Grade Gum Arabic',
  'product.5.grade': 'Technical Grade',
  'product.5.desc': 'Cost-effective grade engineered for industrial applications where high purity food-grade specifications are not required.',
  'product.5.apps': 'Printing inks · Lithography · Adhesives · Textile sizing',

  'product.6.name': 'Specialty Solutions & Custom Formulations',
  'product.6.grade': 'Bespoke',
  'product.6.desc': 'Tailored Gum Arabic products formulated to meet specific viscosity, moisture, ash, and functional requirements. We collaborate closely with clients to develop unique solutions.',
  'product.6.apps': 'Client-specific · R&D partnerships · OEM formulations',

  // Contact page
  'contact.hero.title': 'Get in Touch',
  'contact.hero.subtitle': "We'd love to hear from you. Reach out for inquiries, partnerships, or more information.",
  'contact.form.title': 'Send Us a Message',
  'contact.form.name': 'Full Name',
  'contact.form.email': 'Email Address',
  'contact.form.company': 'Company Name',
  'contact.form.subject': 'Subject',
  'contact.form.message': 'Your Message',
  'contact.form.submit': 'Send Message',
  'contact.form.success.title': 'Message Sent!',
  'contact.form.success.desc': 'Thank you for reaching out. Our team will respond within 1–2 business days.',
  'contact.form.placeholder.name': 'John Smith',
  'contact.form.placeholder.email': 'john@company.com',
  'contact.form.placeholder.company': 'Your Company Ltd.',
  'contact.form.placeholder.subject': 'Product Inquiry',
  'contact.form.placeholder.message': 'Please describe your inquiry...',
  'contact.form.error.name': 'Full name is required.',
  'contact.form.error.email': 'A valid email address is required.',
  'contact.form.error.message': 'Message must be at least 10 characters.',
  'contact.info.title': 'Contact Information',
  'contact.info.phone': 'Telephone',
  'contact.info.email': 'General Email',
  'contact.info.hq': 'Head Office',
  'contact.info.plant': 'Manufacturing Facility',
  'contact.info.rep': 'Authorized Representative',
  'contact.info.hq.addr': 'Bousher, Muscat Governorate, Sultanate of Oman',
  'contact.info.plant.addr': 'Salalah Free Zone, Dhofar Governorate, Sultanate of Oman',

  // Footer
  'footer.desc': 'Premier Gum Arabic processor and manufacturer based in Oman, serving global Food, Pharmaceutical, Cosmetics, and Industrial markets.',
  'footer.links': 'Quick Links',
  'footer.contact': 'Contact',
  'footer.copyright': '© 2026 United Arab Gum LLC. All rights reserved.',
  'footer.location': 'Sultanate of Oman',
};

// ─────────────────────────────────────────────
// ARABIC TRANSLATIONS
// ─────────────────────────────────────────────
const ar: Record<string, string> = {
  // Nav
  'nav.home': 'الرئيسية',
  'nav.about': 'من نحن',
  'nav.factory': 'مصنعنا',
  'nav.gallery': 'معرض الصور',
  'nav.products': 'المنتجات',
  'nav.contact': 'تواصل معنا',
  'nav.lang': 'English',

  // Hero
  'hero.tagline': 'أجود صمغ عربي طبيعي',
  'hero.subtitle':
    'الشركة الرائدة في معالجة وتصنيع الصمغ العربي — نربط المؤسسة العُمانية بالأسواق العالمية من خلال الجودة والاستدامة والابتكار.',
  'hero.cta.products': 'استكشف المنتجات',
  'hero.cta.contact': 'تواصل معنا',

  // Highlights
  'highlights.title': 'لماذا الصمغ العربي المتحدة',
  'highlights.privately.title': 'شركة عُمانية خاصة',
  'highlights.privately.desc':
    'مؤسسة عُمانية بالكامل، تأسست على قيم الريادة العُمانية والالتزام بالتنمية الوطنية.',
  'highlights.facility.title': 'منشأة المنطقة الحرة بصلالة',
  'highlights.facility.desc':
    'مصنع للتصنيع والمعالجة بأحدث التقنيات في المنطقة الحرة بصلالة، محافظة ظفار — موقع استراتيجي للتجارة العالمية.',
  'highlights.launch.title': 'الإطلاق التجاري: مارس 2027',
  'highlights.launch.desc':
    'في مسار الانطلاق التجاري الكامل في مارس 2027، بطاقة مخططة لخدمة أسواق الغذاء والدواء والصناعة الدولية.',
  'highlights.quality.title': 'فلسفة الجودة أولاً',
  'highlights.quality.desc':
    'تخضع كل دفعة لبروتوكولات صارمة لضبط الجودة وفق المعايير الدولية لسلامة الغذاء والأدوية.',

  // Sectors
  'sectors.title': 'القطاعات التي نخدمها',
  'sectors.food': 'الأغذية والمشروبات',
  'sectors.food.desc': 'مستحلب ومثبت ومكمل غذائي للحلويات والمشروبات ومنتجات المخابز.',
  'sectors.pharma': 'الصناعة الدوائية',
  'sectors.pharma.desc': 'رابط ومُضاف بدرجة دستور الأدوية لطلاء الأقراص والمعلقات الفموية.',
  'sectors.nutra': 'المكملات الغذائية',
  'sectors.nutra.desc': 'ألياف غذائية بريبايوتيك بفوائد مثبتة لصحة الجهاز الهضمي.',
  'sectors.cosm': 'مستحضرات التجميل',
  'sectors.cosm.desc': 'مُكثف طبيعي ومكوّن لطبقة رقيقة لتركيبات العناية بالبشرة.',
  'sectors.ind': 'الصناعة',
  'sectors.ind.desc': 'لاصق ورابط وعامل تغليف لأحبار الطباعة والتطبيقات التقنية.',

  // Home factory section
  'home.factory.eyebrow': 'مصنعنا',
  'home.factory.title': 'منشأة معالجة متطورة وعالية التقنية',
  'home.factory.description':
    'مجهزة بخطوط فرز آلية متقدمة، وأنظمة صارمة لمراقبة الجودة، وقدرات تخزين ضخمة بالجملة، تضمن منشأتنا الرئيسية أعلى معايير النظافة والتدريس من الحصاد الخام حتى التصدير النهائي.',
  'home.factory.cta': 'استكشف المصنع والبنية التحتية',

  // About page
  'about.hero.title': 'عن الصمغ العربي المتحدة',
  'about.hero.subtitle': 'جذورنا في عُمان. طموحنا للعالم.',
  'about.identity.title': 'الهوية المؤسسية والرؤية',
  'about.identity.p1':
    'الصمغ العربي المتحدة شركة عُمانية ذات مسؤولية محدودة، مملوكة بالكامل لمواطنين عُمانيين، تأسست لتصبح معالجاً رائداً ومورداً عالمياً لمنتجات الصمغ العربي الممتازة. رؤيتنا هي وضع عُمان في طليعة صناعة الصمغ الطبيعي من خلال الجمع بين تكنولوجيا المعالجة المتقدمة والالتزام الراسخ بالجودة والاستدامة.',
  'about.identity.p2':
    'نحصل على أجود الصمغ العربي الخام من مناطق الإنتاج ونحوله إلى درجات عالية النقاء وموحدة المواصفات تلبي المتطلبات الدقيقة لعملاء الغذاء والأدوية والمكملات الغذائية ومستحضرات التجميل والصناعة في جميع أنحاء العالم.',
  'about.mission.title': 'مهمتنا',
  'about.mission.text':
    'تقديم منتجات صمغ عربي عالية الجودة باستمرار للأسواق العالمية مع تعزيز سلاسل التوريد المستدامة، وخلق فرص عمل عُمانية حقيقية، والالتزام بأعلى معايير الإشراف البيئي.',
  'about.locations.title': 'مواقعنا',
  'about.locations.hq.title': 'المكتب الرئيسي — مسقط',
  'about.locations.hq.desc': 'بوشر، محافظة مسقط، سلطنة عُمان',
  'about.locations.plant.title': 'منشأة التصنيع — صلالة',
  'about.locations.plant.desc': 'المنطقة الحرة بصلالة، محافظة ظفار، سلطنة عُمان',
  'about.leadership.title': 'القيادة',
  'about.leadership.name': 'الفاضل سعيد سالم سعيد البريكي',
  'about.leadership.role': 'رئيس مجلس الإدارة',
  'about.leadership.bio':
    'يتولى الفاضل سعيد سالم سعيد البريكي رئاسة مجلس إدارة الصمغ العربي المتحدة، حاملاً معه خبرة واسعة في تطوير الأعمال والتجارة العُمانية. تحت قيادته، تلتزم الشركة ببناء مؤسسة صمغ عربي عالمية المستوى تدفع بعجلة القيمة الاقتصادية لعُمان وتلبي المعايير العالمية للجودة.',
  'about.quality.title': 'الجودة والاستدامة',
  'about.quality.p1':
    'الجودة متجذرة في كل مرحلة من مراحل عملياتنا — من تحديد مصادر المواد الخام إلى تسليم المنتج النهائي. تم تصميم عمليات التصنيع لدينا لتلبية المعايير الدولية المعترف بها، بما في ذلك شهادات ISO وGMP وسلامة الغذاء.',
  'about.quality.p2':
    'الاستدامة بالقدر ذاته محورية في هويتنا. نلتزم بممارسات المصادر المسؤولة، وتقليل أثرنا البيئي، والمساهمة الإيجابية في المجتمعات على طول سلسلة التوريد.',

  // Factory page
  'factory.eyebrow': 'مصنعنا',
  'factory.title': 'إنتاج متطور وتوزيع عالمي حصري',
  'factory.body':
    'تشغل شركة الشفق للصُمغ العربي (المنطقة الحرة بصلالة) منشأة التصنيع والمعالجة المتقدمة التابعة لنا، والتي تتخصص بالكامل في جمع، وتنظيف، وتصنيف، ومعالجة، وتعبئة الصُمغ العربي الفاخر بكميات كبيرة. يتم إدارة وخدمة جميع المعاملات التجارية الدولية، وطلبات المبيعات، وعلاقات العملاء العالمية حصرياً في جميع أنحاء العالم من خلال الصمغ العربي المتحدة (United Arab Gum)، بصفتها الشريك التجاري العالمي المعتمد لدينا. يضمن هذا التعاون الانسيابي حصول كل عميل دولي على معايير منتجات عالمية المستوى، ورقابة صارمة على الجودة، وخدمة تصدير سلسة ومتكاملة مباشرة من مصنعنا في المنطقة الحرة بصلالة.',
  'factory.image1.alt': 'منشأة تصنيع الصمغ العربي من الداخل',
  'factory.image2.alt': 'معدات إنتاج ومعالجة الصمغ العربي',

  // Products page
  'products.hero.title': 'منتجاتنا وتطبيقاتها',
  'products.hero.subtitle': 'صمغ عربي معالج بدقة لكل احتياجات الصناعة.',
  'products.portfolio.title': 'محفظة المنتجات',
  'products.cta.title': 'تحتاج تركيبة مخصصة؟',
  'products.cta.desc':
    'فريقنا التقني مستعد للعمل معك لتطوير حلول صمغ عربي متخصصة مصممة وفق متطلبات تطبيقك الدقيقة.',
  'products.cta.btn': 'تواصل معنا',
  'products.grade': 'الدرجة',
  'products.applications': 'التطبيقات',

  // Product names & details
  'product.1.name': 'مسحوق الصمغ العربي المجفف بالرذاذ',
  'product.1.grade': 'قياسي / ممتاز',
  'product.1.desc': 'مسحوق عالي الذوبان وحر التدفق ينتج عبر تجفيف رذاذ متقدم. مثالي للتغليف والتطبيقات الجافة والمشروبات الفورية.',
  'product.1.apps': 'تغليف النكهات · مشروبات الخلط الجاف · مستحلبات الرذاذ · تغذية الرضع',

  'product.2.name': 'الصمغ العربي للأغذية',
  'product.2.grade': 'درجة غذائية (E414)',
  'product.2.desc': 'متوافق مع مواصفات E414/JECFA. يعمل كمستحلب ومثبت وألياف غذائية ذائبة في مجموعة واسعة من تطبيقات الأغذية.',
  'product.2.apps': 'الحلويات · المشروبات الغازية · المخابز · منتجات الألبان · أنظمة النكهات',

  'product.3.name': 'الصمغ العربي للصناعة الدوائية',
  'product.3.grade': 'درجة USP / BP',
  'product.3.desc': 'درجة عالية النقاء تستوفي متطلبات دستور الأدوية الأمريكي والبريطاني. تستخدم كمُضاف ورابط ومثبت في أشكال الجرعات الصلبة والسائلة.',
  'product.3.apps': 'روابط الأقراص · المعلقات الفموية · أقراص المص · عوامل الطلاء',

  'product.4.name': 'الصمغ العربي لمستحضرات التجميل',
  'product.4.grade': 'درجة تجميلية',
  'product.4.desc': 'درجة عالية النقاء منخفضة اللون مناسبة للاستخدام في تركيبات العناية بالبشرة والشعر كمكوّن طبيعي لطبقة رقيقة ومُكثف ورابط.',
  'product.4.apps': 'أقنعة الوجه · تصفيف الشعر · المصل · مستحضرات التجميل الطبيعية',

  'product.5.name': 'الصمغ العربي للصناعة',
  'product.5.grade': 'درجة تقنية',
  'product.5.desc': 'درجة فعالة من حيث التكلفة مهندسة للتطبيقات الصناعية حيث لا تُشترط مواصفات الدرجة الغذائية العالية النقاء.',
  'product.5.apps': 'أحبار الطباعة · الطباعة الحجرية · المواد اللاصقة · تثبيت النسيج',

  'product.6.name': 'حلول متخصصة وتركيبات مخصصة',
  'product.6.grade': 'مصمم خصيصاً',
  'product.6.desc': 'منتجات صمغ عربي مصممة لتلبية متطلبات محددة للزوجة والرطوبة والرماد والوظائف. نتعاون عن كثب مع العملاء لتطوير حلول فريدة.',
  'product.6.apps': 'مخصص للعميل · شراكات البحث والتطوير · تركيبات المنتج الأصلي',

  // Contact page
  'contact.hero.title': 'تواصل معنا',
  'contact.hero.subtitle': 'يسعدنا سماع آرائكم. تواصلوا معنا للاستفسارات والشراكات والمزيد من المعلومات.',
  'contact.form.title': 'أرسل لنا رسالة',
  'contact.form.name': 'الاسم الكامل',
  'contact.form.email': 'البريد الإلكتروني',
  'contact.form.company': 'اسم الشركة',
  'contact.form.subject': 'الموضوع',
  'contact.form.message': 'رسالتك',
  'contact.form.submit': 'إرسال الرسالة',
  'contact.form.success.title': 'تم الإرسال!',
  'contact.form.success.desc': 'شكراً لتواصلكم. سيرد فريقنا خلال 1-2 يوم عمل.',
  'contact.form.placeholder.name': 'محمد أحمد',
  'contact.form.placeholder.email': 'info@company.com',
  'contact.form.placeholder.company': 'شركتك',
  'contact.form.placeholder.subject': 'استفسار عن منتج',
  'contact.form.placeholder.message': 'يرجى وصف استفساركم...',
  'contact.form.error.name': 'الاسم الكامل مطلوب.',
  'contact.form.error.email': 'بريد إلكتروني صحيح مطلوب.',
  'contact.form.error.message': 'يجب أن تتضمن الرسالة 10 أحرف على الأقل.',
  'contact.info.title': 'معلومات التواصل',
  'contact.info.phone': 'الهاتف',
  'contact.info.email': 'البريد العام',
  'contact.info.hq': 'المكتب الرئيسي',
  'contact.info.plant': 'منشأة التصنيع',
  'contact.info.rep': 'الممثل المفوض',
  'contact.info.hq.addr': 'بوشر، محافظة مسقط، سلطنة عُمان',
  'contact.info.plant.addr': 'المنطقة الحرة بصلالة، محافظة ظفار، سلطنة عُمان',

  // Footer
  'footer.desc': 'الشركة الرائدة في معالجة وتصنيع الصمغ العربي في عُمان، تخدم أسواق الغذاء والأدوية ومستحضرات التجميل والصناعة عالمياً.',
  'footer.links': 'روابط سريعة',
  'footer.contact': 'تواصل',
  'footer.copyright': '© 2026 الصمغ العربي المتحدة. جميع الحقوق محفوظة.',
  'footer.location': 'سلطنة عُمان',
};
