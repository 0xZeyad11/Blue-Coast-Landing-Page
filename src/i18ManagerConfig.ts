import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        title: "Blue Coast",
        description: "Smart construction solutions",
        aboutUs: "About",
        projects: "Projects",
        contact: "Contact Us",
        hero1: {
          line1: "Premium",
          line2: "Aluminum",
          line3: "Windows for",
          line4: "Modern Buildings",
        },
        whatWeDo: {
          header: "What We Do",
          card1: {
            title: "Aluminum Window Manufacturing",
            description:
              "High-precision manufacturing using premium grade aluminum for maximum durability and thermal efficiency. ",
          },
          card2: {
            title: "Compound & Residential Projects",
            description:
              "Scalable solutions for large-scale developments, luxury complexes, and high-rise residential towers.",
          },

          card3: {
            title: "Professional Installation & Support",
            description:
              "End-to-end support from technical consultation to final fitting by our certified installation teams. ",
          },
        },
        clients: {
          title: "Our Clients",
          description: "Trusted by developers, contractors, and homeowners.",
          card1: "Residential Compounds",
          card2: "Real Estate Developers",
          card3: "Private Homeowners",
        },
        contactUs: {
          title: "Start Your Next Project With Us",
          callus: "Call Us",
          emailus: "Email Us",
          headquarters: {
            title: "Headquarters",
            address: "16 شارع ناصر , أبيس الثانية, الإسكندرية",
          },
          description:
            "Our team of experts is ready to help you choose the best window solutions for your building. Whether it's a single home or a massive development, we deliver excellence.",
        },
        form: {
          name: "Full Name",
          phone: "Phone Number",
          email: "Email Address",
          project: "Project Details",
          send: "Send",
        },
      },
    },
    ar: {
      translation: {
        title: "بلو كوست",
        description: "حلول البناء الذكية",
        aboutUs: "من نحن",
        services: "خدماتنا",
        projects: "مشاريعنا",
        contact: "تواصل معنا",
        hero1: {
          line1: "نوافذ ألمونيوم فاخرة",
          line2: "للمباني الحديثة",
        },
        whatWeDo: {
          header: "ماذا نفعل",
          card1: {
            title: "تصنيع نوافذ الألمنيوم",
            description:
              "تصنيع عالي الدقة باستخدام ألمنيوم عالي الجودة لضمان أقصى درجات المتانة والكفاءة الحرارية.",
          },
          card2: {
            title: "مشاريع الكمباوندات والمباني السكنية",
            description:
              "حلول قابلة للتوسع للمشروعات الكبيرة مثل المجمعات السكنية الفاخرة والأبراج السكنية الحديثة.",
          },
          card3: {
            title: "التركيب الاحترافي والدعم الفني",
            description:
              "دعم متكامل يبدأ من الاستشارة الفنية وحتى التركيب النهائي بواسطة فرق تركيب معتمدة.",
          },
        },
        clients: {
          title: "عملاؤنا",
          callus: "Call Us",
          emailus: "Email Us",
          headquarters: "Headquarters",
          description:
            "نحظى بثقة المطورين العقاريين، شركات المقاولات، وأصحاب المنازل.",
          card1: "المجمعات السكنية",
          card2: "شركات التطوير العقاري",
          card3: "أصحاب المنازل",
        },
        contactUs: {
          title: "ابدأ مشروعك القادم معنا",
          callus: "اتصل بنا",
          emailus: "أرسل لنا",
          headquarters: {
            title: "مقرنا",
            address: "16 شارع ناصر , أبيس الثانية, الإسكندرية",
          },
          description:
            "نقدّم لك خبراتنا لمساعدتك في اختيار أفضل حلول النوافذ التي تناسب مشروعك. سواء كان مشروعًا سكنيًا صغيرًا أو تطويرًا عقاريًا واسع النطاق، نلتزم بتقديم أعلى معايير الجودة.",
        },

        form: {
          name: "الاسم كامل",
          phone: "رقم الهاتف",
          email: "الإيميل الإلكتروني",
          project: "تفاصيل المشروع",
          send: "إرسال",
        },
      },
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
