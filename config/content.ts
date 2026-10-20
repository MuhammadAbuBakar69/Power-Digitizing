import type { SiteInput } from "./types";

/**
 * Edit website copy, navigation, contact details, SEO, and content collections here.
 * Tenant files provide only deployment identity and visual theme settings.
 */
export const siteContent: Omit<SiteInput, "id" | "domains" | "theme"> = {
  name: "Power Digitizing",
  tagline: "Premium custom patches with free digital proof — crafted for brands, teams & uniforms worldwide.",
  hero: {
    headline: ["Custom patches,", "crafted for you."],
    subcopy: "Premium embroidered, PVC, chenille, leather, woven and sublimated patches. Free digital proof, no setup fees, and fast 7-14 day production. Trusted by businesses, teams and organizations across the USA, Canada, UK and Australia.",
    primaryCta: { label: "Get Instant Quote", href: "/quote" },
    secondaryCta: { label: "Browse collections", href: "#collections" },
  },
  trust: [
    { icon: "shield", label: "Quality guaranteed" },
    { icon: "clock", label: "7-14 day production" },
    { icon: "award", label: "Free digital proof" },
    { icon: "tag", label: "No setup fees" },
    { icon: "globe", label: "USA • Canada • UK • Australia" },
    { icon: "truck", label: "Free Shipping" },
  ],
  about: {
    eyebrow: "Our Company & Manufacturing Heritage",
    title: "Engineering Custom Patches & Commercial Digitizing with Uncompromising Precision.",
    paragraphs: [
      "Since 2010, Power Digitizing has served as the manufacturing and digitizing backbone for apparel decorators, uniform contractors, tactical units, and premier brands worldwide. We blend meticulous manual punch artistry with an industrial-grade patch production facility to ensure every thread, backing, and border performs flawlessly on commercial embroidery machines and finished garments.",
      "From single-piece prototypes to high-volume commercial runs exceeding 50,000 units, we handle every stage under one roof. Our senior digitizers program custom pull compensation matrices for every fabric type, while our multi-head Tajima and Barudan fleet executes razor-sharp embroidery with zero setup fees, free digital proofs, and guaranteed color fidelity.",
    ],
    highlights: [
      { label: "Production Experience", value: "15+ Years" },
      { label: "Designs & Patches Delivered", value: "250K+" },
      { label: "Client Satisfaction Rate", value: "98.8%" },
    ],
  },
  useCases: [
    { title: "Uniform patches", description: "Professional workwear, security, schools, fire departments and corporate uniforms.", icon: "shield" },
    { title: "Brand patches", description: "Merchandise, hats, apparel, woven labels and promotional products.", icon: "tag" },
    { title: "Event patches", description: "Tournaments, clubs, conferences, fundraisers and giveaways.", icon: "award" },
    { title: "Tactical patches", description: "Military, outdoor gear, law enforcement and Velcro-ready applications.", icon: "layers" },
  ],
  services: [
    {
      slug: "manufacturing",
      name: "Premium manufacturing",
      icon: "award",
      description: "High-quality embroidered, PVC, woven, chenille, leather, printed and sublimated patches produced with strict quality control for long-lasting results.",
      benefits: ["Material & finish guidance", "Any quantity — no minimums", "Tracked shipping worldwide"],
      cta: "See how it works",
    },
    {
      slug: "customization",
      name: "Customization options",
      icon: "layers",
      description: "Select the exact backing, border and finishing details so your custom patch performs perfectly on the product it belongs to.",
      benefits: ["Iron-on, Velcro & sew-on", "Adhesive & heat-seal options", "Merrowed, laser-cut & heat-cut borders"],
      cta: "Plan your patch",
    },
    {
      slug: "proofing",
      name: "Proof-first excellence",
      icon: "shield",
      description: "Review your complimentary digital proof, request free basic revisions, and approve with complete confidence before we start production.",
      benefits: ["Free digital proof in 24-48 hrs", "Free basic revisions", "Approved-artwork guarantee"],
      cta: "Request a proof",
    },
  ],
  collections: [
    {
      slug: "embroidered-patches",
      name: "Embroidered patches",
      category: "Uniforms · Brands · Teams",
      price: "From $1.50",
      description: "Classic stitched detail with crisp lettering and durable thread for uniforms, clubs, corporate apparel and brand patches.",
      image: "/images/embroidery/embroidered-big-rig-patch.webp",
    },
    {
      slug: "chenille-patches",
      name: "Chenille patches",
      category: "Jackets · Letterman · Clubs",
      price: "From $4.25",
      description: "Soft varsity-style chenille perfect for letterman jackets, hoodies, sports teams and school spirit wear.",
      image: "/images/american-patches/chenille-cutout.png",
    },
    {
      slug: "pvc-patches",
      name: "PVC patches",
      category: "Outdoor · Tactical · Gear",
      price: "From $3.25",
      description: "Durable soft PVC / rubber patches that resist water, mud and heavy use — ideal for tactical, outdoor and work gear.",
      image: "/images/american-patches/pvc-white.png",
    },
    {
      slug: "silicone-patches",
      name: "Silicone patches",
      category: "Soft touch · Modern brands",
      price: "From $3.95",
      description: "Clean modern silicone patches with a soft-touch finish for hats, apparel and contemporary branding.",
      image: "/images/american-patches/silicone.png",
    },
    {
      slug: "leather-patches",
      name: "Leather patches",
      category: "Hats · Premium · Heritage",
      price: "From $3.95",
      description: "Premium genuine or faux leather patches with a sophisticated finish for heritage brands, hats and minimalist logos.",
      image: "/images/american-patches/leather-cutout.png",
    },
    {
      slug: "woven-patches",
      name: "Woven patches",
      category: "Logos · Labels · Fine detail",
      price: "From $2.75",
      description: "Smooth woven construction ideal for small text, fine detail and high-resolution logos on apparel and product labels.",
      image: "/images/american-patches/woven-white.png",
    },
    {
      slug: "sublimated-patches",
      name: "Sublimated patches",
      category: "Full-color · Photo quality",
      price: "From $2.95",
      description: "Edge-to-edge full-color printing for gradients, photographs and highly detailed illustrations that embroidery cannot achieve.",
      image: "/images/american-patches/sublimated-cutout.png",
    },
    {
      slug: "iron-on-patches",
      name: "Iron-on patches",
      category: "Apparel · Easy apply",
      price: "From $1.25",
      description: "Heat-seal iron-on backing for fast, no-sew application on jackets, bags, hats and team apparel.",
      image: "/images/american-patches/iron-on-white.png",
    },
  ],
  portfolio: [
    {
      label: "Embroidered",
      title: "Built for the uniform",
      description: "Crisp stitched lettering, bold borders and professional finishes for teams, departments, schools and workwear programs.",
      kind: "embroidery",
      image: "/images/embroidery/solar-construction-embroidered-patch.webp",
    },
    {
      label: "PVC + tactical",
      title: "Ready for the outdoors",
      description: "Weather-resistant PVC and Velcro-ready construction designed for gear that sees real use in the field.",
      kind: "patch",
      image: "/images/american-patches/pvc-white.png",
    },
    {
      label: "Woven + leather",
      title: "Made for the brand",
      description: "Fine detail and premium finishes for hats, woven labels, merchandise and product lines that demand quality.",
      kind: "vector",
      image: "/images/american-patches/leather-cutout.png",
    },
  ],
  process: [
    { step: "01", title: "Upload artwork", description: "Submit your design files (AI, EPS, PDF, PNG, JPG) or share your vision with our team." },
    { step: "02", title: "Review free proof", description: "Receive your complimentary digital proof within 24-48 hours and request free basic revisions." },
    { step: "03", title: "Production", description: "We manufacture your custom patches with premium materials and careful quality checks against the approved proof." },
    { step: "04", title: "Fast delivery", description: "Your order ships with tracking. Standard production is 7-14 business days after approval." },
  ],
  promises: [
    {
      title: "Free digital proof",
      description: "Every order includes a free digital proof within 24-48 hours. You approve the design before production starts.",
      icon: "award",
    },
    {
      title: "Fast turnaround",
      description: "Standard production is 7-14 business days after proof approval. Rush options are available for tight deadlines.",
      icon: "clock",
    },
    {
      title: "Quality guarantee",
      description: "Every order is checked against the approved proof. If it does not match, we remake it at no extra cost.",
      icon: "shield",
    },
    {
      title: "Free basic revisions",
      description: "Simple adjustments to your digital proof are always included until the design is exactly right.",
      icon: "vector",
    },
    {
      title: "No setup fees",
      description: "No hidden charges and no minimum order quantity. The quote you receive is the price you pay.",
      icon: "tag",
    },
    {
      title: "Secure checkout",
      description: "Stripe and Helcim protect your payment details from checkout through final delivery.",
      icon: "layers",
    },
  ],
  testimonials: [
    {
      name: "Michael Torres",
      role: "Operations Manager · Eastern Fire Dept.",
      quote: "The free digital proof arrived in under 24 hours and the finished embroidered patches exceeded expectations. Stitching is crisp and colors match exactly.",
      rating: 5,
    },
    {
      name: "Sarah Chen",
      role: "Marketing Lead · Apex Apparel Co.",
      quote: "Clean artwork, fast shipping, and pricing that becomes very competitive at higher quantities. Power Digitizing is now our go-to custom patch partner.",
      rating: 5,
    },
    {
      name: "Daniel Rivera",
      role: "Coach · Westside Little League",
      quote: "We received a free proof, made one small revision, and the chenille patches shipped in 10 days. The kids and parents love them.",
      rating: 5,
    },
  ],
  faqs: [
    {
      q: "Do I receive a free digital proof before production?",
      a: "Yes. Every order includes a complimentary digital proof within 24-48 hours. You review and approve the design before we begin production. Free basic revisions are included.",
    },
    {
      q: "What file formats do you accept for custom patches?",
      a: "We prefer vector files (AI, EPS, PDF) for the best results, but we also accept high-resolution PNG, JPG and PSD. Our design team can assist with any format.",
    },
    {
      q: "Is there a minimum order quantity?",
      a: "No. We happily accept small boutique orders as well as large bulk production. Pricing is competitive across all quantities with no setup fees.",
    },
    {
      q: "What are typical turnaround times for custom patches?",
      a: "Standard production is 7-14 business days after you approve the digital proof. Rush production is available for urgent deadlines — just let us know when you request a quote.",
    },
    {
      q: "Do you ship to the USA, Canada, UK and Australia?",
      a: "Yes. We regularly ship custom embroidered, PVC, chenille and other patches to clients throughout the United States, Canada, the United Kingdom and Australia, with tracked shipping options.",
    },
    {
      q: "What backing and border options are available?",
      a: "We offer iron-on, sew-on, Velcro (hook & loop), adhesive and heat-seal backings. Border options include merrowed, laser-cut, heat-cut and more depending on the patch type.",
    },
  ],
  navigation: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Collections", href: "/collections" },
    { label: "Blogs", href: "/blog" },
    { label: "Our Company", href: "/company" },
    { label: "Contact", href: "/contact" },
  ],
  cta: {
    primary: { label: "Get Instant Quote", href: "/quote" },
    portalLabel: "Customer login",
  },
  contact: {
    email: "design@powerdigitizing.com",
    phone: "+1 (316) 444-1366",
    address: "16192 Coastal Hwy, Lewes, DE, United States",
  },
  socials: [
    { label: "Facebook", href: "https://facebook.com/" },
    { label: "Instagram", href: "https://instagram.com/" },
  ],
  footer: {
    about: "Premium custom embroidered, PVC, chenille, leather and woven patches with free digital proof, no setup fees and reliable worldwide shipping.",
    legalLinks: [
      { label: "Privacy policy", href: "/privacy" },
      { label: "Terms of service", href: "/terms" },
    ],
  },
  seo: {
    title: "Custom Embroidered, PVC & Chenille Patches | Power Digitizing",
    titleTemplate: "%s | Power Digitizing",
    description:
      "Order premium custom embroidered, PVC, chenille, leather, woven & sublimated patches. Free digital proof in 24-48 hrs, no setup fees, 7-14 day production. Serving USA, Canada, UK & Australia.",
    keywords: [
      "custom embroidered patches",
      "PVC patches",
      "chenille patches",
      "leather patches",
      "woven patches",
      "sublimated patches",
      "tactical patches",
      "uniform patches",
      "custom patches USA",
      "free digital proof patches",
      "no setup fees patches",
      "custom patch manufacturer",
      "iron-on patches",
      "Velcro patches",
    ],
  },
  analytics: {},
  portal: { loginUrl: "https://portal.powerdigitizing.com/" },
};
