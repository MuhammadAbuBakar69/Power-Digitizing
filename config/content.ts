import type { SiteInput } from "./types";

/**
 * Edit website copy, navigation, contact details, SEO, and content collections here.
 * Tenant files provide only deployment identity and visual theme settings.
 */
export const siteContent: Omit<SiteInput, "id" | "domains" | "theme"> = {
  name: "Power Digitizing",
  tagline: "Premium custom patches, crafted for you.",
  hero: {
    headline: ["Custom patches,", "crafted for you."],
    subcopy: "Premium embroidered, PVC, woven, chenille, leather and printed patches for uniforms, brands, teams and events.",
    primaryCta: { label: "Get Instant Quote", href: "/quote" },
    secondaryCta: { label: "Browse collections", href: "#collections" },
  },
  trust: [
    { icon: "shield", label: "Quality guaranteed" },
    { icon: "clock", label: "7-14 day production" },
    { icon: "award", label: "Free digital proof" },
    { icon: "tag", label: "No setup fees" },
    { icon: "globe", label: "US & Canada support" },
  ],
  about: {
    eyebrow: "Premium patch manufacturing",
    title: "The patch partner behind your next great piece of gear.",
    paragraphs: [
      "From a first sketch to a finished patch, we make the process straightforward. Our team helps you choose the right material, backing, border and finish for your artwork, then sends a complimentary digital proof before production begins.",
      "Whether you need five patches for a small team or thousands for a national rollout, every order is checked against the approved design before it ships.",
    ],
    highlights: [
      { label: "Customer rating", value: "4.9 / 5" },
      { label: "Customers served", value: "1,000+" },
      { label: "Proof turnaround", value: "24-48 hrs" },
    ],
  },
  useCases: [
    { title: "Uniform patches", description: "Professional workwear, security, schools and teams.", icon: "shield" },
    { title: "Brand patches", description: "Merchandise, hats, apparel and woven labels.", icon: "tag" },
    { title: "Event patches", description: "Tournaments, clubs, conferences and giveaways.", icon: "award" },
    { title: "Tactical patches", description: "Military, outdoor gear and Velcro applications.", icon: "layers" },
  ],
  services: [
    { slug: "manufacturing", name: "Premium manufacturing", icon: "award", description: "Embroidered, PVC, woven, chenille, printed and sublimated patches made with careful quality control.", benefits: ["Material guidance", "Any quantity", "Tracked shipping"], cta: "See how it works" },
    { slug: "customization", name: "Customization options", icon: "layers", description: "Choose the backing, border and finishing details that make your patch work on the product it belongs to.", benefits: ["Iron-on and Velcro", "Sew-on and adhesive", "Merrowed and laser-cut borders"], cta: "Plan your patch" },
    { slug: "proofing", name: "Proof-first excellence", icon: "shield", description: "Review your complimentary digital proof, request revisions and approve with confidence before production begins.", benefits: ["Free digital proof", "Free basic revisions", "Approved-artwork guarantee"], cta: "Request a proof" },
  ],
  collections: [
    { name: "Embroidered patches", category: "Uniforms · Brands", price: "From $1.50", description: "Classic stitched detail for uniforms, clubs and brand patches.", image: "/images/american-patches/embroidered.jpg" },
    { name: "Chenille patches", category: "Jackets · Clubs", price: "From $4.25", description: "Soft varsity style for letterman jackets, hoodies and teams.", image: "/images/american-patches/chenille.jpg" },
    { name: "PVC patches", category: "Outdoor · Tactical", price: "From $3.25", description: "Durable rubber patches that handle water, mud and rough use.", image: "/images/american-patches/pvc.jpg" },
    { name: "Silicone patches", category: "Soft touch · Modern", price: "From $3.95", description: "A clean modern look for hats, apparel and branding.", image: "/images/american-patches/silicone.png" },
    { name: "Leather patches", category: "Hats · Premium", price: "From $3.95", description: "A premium finish for heritage brands and minimalist logos.", image: "/images/american-patches/leather.jpg" },
    { name: "Woven patches", category: "Logos · Labels", price: "From $2.75", description: "Best for small text and fine detail with a smooth woven finish.", image: "/images/american-patches/woven.jpg" },
    { name: "Sublimated patches", category: "Full-color print", price: "From $2.95", description: "Edge-to-edge color for gradients, photos and detailed illustrations.", image: "/images/american-patches/sublimated.jpg" },
    { name: "Iron-on patches", category: "Apparel · Easy apply", price: "From $1.25", description: "Heat-seal backing for fast, no-sew application on apparel and bags.", image: "/images/american-patches/iron-on.jpg" },
  ],
  portfolio: [
    { label: "Embroidered", title: "Built for the uniform", description: "Crisp stitched lettering and bold borders for teams, departments and professional workwear.", kind: "embroidery" },
    { label: "PVC + tactical", title: "Ready for the outdoors", description: "Weather-resistant materials and Velcro-ready construction for gear that gets used.", kind: "patch" },
    { label: "Woven + leather", title: "Made for the brand", description: "Fine detail and considered finishes for hats, labels, merchandise and product lines.", kind: "vector" },
  ],
  process: [
    { step: "01", title: "Upload artwork", description: "Submit your design files or share your vision with our team." },
    { step: "02", title: "Review proof", description: "Receive and approve your complimentary digital proof." },
    { step: "03", title: "Production", description: "We craft your patches with premium materials and careful checks." },
    { step: "04", title: "Fast delivery", description: "Your patches ship with tracking included." },
  ],
  promises: [
    { title: "Free digital proof", description: "Every order includes a proof within 24-48 hours. You approve before production starts.", icon: "award" },
    { title: "Fast turnaround", description: "Standard production is 7-14 business days after proof approval, with rush options available.", icon: "clock" },
    { title: "Quality guarantee", description: "Every order is checked against the approved proof. If it does not match, we remake it.", icon: "shield" },
    { title: "Free revisions", description: "Basic adjustments to your proof are always included until the design is right.", icon: "vector" },
    { title: "No setup fees", description: "No hidden charges and no minimum order. The quote is the price you pay.", icon: "tag" },
    { title: "Secure checkout", description: "Stripe and Helcim secure your payment details from checkout to completion.", icon: "layers" },
  ],
  testimonials: [
    { name: "Michael Torres", role: "Operations Manager · Eastern Fire Dept.", quote: "The proof turnaround was under 24 hours and the quality exceeded expectations. Stitching is crisp and colors match exactly.", rating: 5 },
    { name: "Sarah Chen", role: "Marketing Lead · Apex Apparel Co.", quote: "Clean vectors, fast shipping, and the price drops meaningfully at 500+. Our go-to patch partner now.", rating: 5 },
    { name: "Daniel Rivera", role: "Coach · Westside Little League", quote: "We got a free proof, made one tiny revision, and they shipped in 10 days. The kids love them.", rating: 5 },
  ],
  faqs: [
    { q: "Do I receive a proof before production?", a: "Absolutely. Every order includes a complimentary digital proof for your review and approval before production begins." },
    { q: "What file formats do you accept?", a: "We prefer AI, EPS or PDF for the best results, but also accept PNG, JPG and PSD. Our design team can help with any format." },
    { q: "What is the minimum order quantity?", a: "We accommodate both small boutique orders and large bulk production with competitive pricing across all quantities." },
    { q: "What are typical turnaround times?", a: "Production depends on patch type and quantity. Standard production is usually 7-14 business days after proof approval, and we can discuss rush deadlines." },
  ],
  navigation: [
    { label: "Home", href: "/" }, { label: "How it works", href: "#process" }, { label: "Collections", href: "#collections" },
    { label: "Our promise", href: "#promise" }, { label: "FAQ", href: "#faq" }, { label: "Contact", href: "#contact" },
  ],
  cta: { primary: { label: "Get Instant Quote", href: "/quote" }, portalLabel: "Customer login" },
  contact: { email: "design@powerdigitizing.com", phone: "+1 (316) 444-1366", address: "16192 Coastal Hwy, Lewes, DE, United States" },
  socials: [{ label: "Facebook", href: "https://facebook.com/" }, { label: "Instagram", href: "https://instagram.com/" }],
  footer: {
    about: "Premium custom patches with free digital proof, fast production and quality support.",
    legalLinks: [{ label: "Privacy policy", href: "/privacy" }, { label: "Terms of service", href: "/terms" }],
  },
  seo: {
    title: "Power Digitizing | Premium Custom Patches",
    titleTemplate: "%s | Power Digitizing",
    description: "Professional embroidery digitizing, vector artwork conversion and custom patches. Send your artwork for a free quote.",
    keywords: ["custom patches", "embroidered patches", "PVC patches", "woven patches", "chenille patches"],
  },
  analytics: {},
  portal: { loginUrl: "https://portal.powerdigitizing.com/" },
};
