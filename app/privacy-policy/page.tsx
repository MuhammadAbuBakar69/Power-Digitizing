import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRight,
  ShieldCheck,
  Lock,
  Eye,
  Database,
  Server,
  FileText,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";
import { getSite } from "@/lib/tenant";

export const metadata: Metadata = {
  title: "Privacy Policy | Power Digitizing",
  description:
    "Official Privacy Policy of Power Digitizing (powerdigitizing.com). Learn about how we collect, use, protect, and handle your personal data and digital assets.",
};

export default async function PrivacyPolicyPage() {
  const site = await getSite();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ─── Hero Section ─── */}
      <section className="relative overflow-hidden border-b border-border/40 bg-gradient-to-b from-[#14263D]/5 via-background to-background py-16 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[#C94343]/5 via-transparent to-transparent pointer-events-none" />
        <div className="mx-auto max-w-5xl px-5 relative">
          {/* Breadcrumbs */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-6"
          >
            <Link href="/" className="hover:text-[#C94343] transition-colors">
              Home
            </Link>
            <ChevronRight className="size-3.5" />
            <span className="text-[#C94343]">Legal</span>
            <ChevronRight className="size-3.5" />
            <span className="text-foreground">Privacy Policy</span>
          </nav>

          <div className="inline-flex items-center gap-2 rounded-full border border-[#C94343]/20 bg-[#C94343]/5 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#C94343] mb-4">
            <ShieldCheck className="size-3.5" />
            <span>Privacy & Data Protection</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#14263D] leading-tight">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm md:text-base text-muted-foreground font-medium">
            Effective date: April, 2023 &bull; Last updated for powerdigitizing.com
          </p>

          <p className="mt-6 max-w-3xl text-base md:text-lg text-slate-700 leading-relaxed">
            Power Digitizing (&ldquo;us&rdquo;, &ldquo;we&rdquo;, or &ldquo;our&rdquo;) operates the{" "}
            <a
              href="https://powerdigitizing.com"
              className="font-semibold text-[#14263D] underline decoration-[#C94343] underline-offset-4 hover:text-[#C94343] transition-colors"
            >
              http://www.powerdigitizing.com
            </a>{" "}
            website (the &ldquo;Service&rdquo;). This page informs you of our policies regarding the collection,
            use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
          </p>
        </div>
      </section>

      {/* ─── Main Content Body ─── */}
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-5xl px-5">
          <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
            {/* Left Column: Legal Clauses */}
            <div className="space-y-12">
              {/* Section 1: Information Collection & Use */}
              <div className="rounded-2xl border border-border/80 bg-card p-6 md:p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-[#14263D]/5 text-[#14263D]">
                    <Database className="size-5 text-[#C94343]" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-[#14263D]">
                    Information Collection And Use
                  </h2>
                </div>
                <p className="text-sm md:text-base leading-relaxed text-slate-700">
                  We collect several different types of information for various purposes to provide and improve our
                  Service to you.
                </p>
              </div>

              {/* Section 2: Types of Data Collected */}
              <div className="rounded-2xl border border-border/80 bg-card p-6 md:p-8 shadow-sm space-y-6">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-[#14263D]/5 text-[#14263D]">
                    <FileText className="size-5 text-[#C94343]" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-[#14263D]">
                    Types of Data Collected
                  </h2>
                </div>

                {/* Personal Data */}
                <div className="border-t border-border/60 pt-6">
                  <h3 className="text-lg font-bold text-[#14263D] mb-2 flex items-center gap-2">
                    <span className="size-2 rounded-full bg-[#C94343]" />
                    Personal Data
                  </h3>
                  <p className="text-sm md:text-base text-slate-700 leading-relaxed mb-4">
                    While using our Service, we may ask you to provide us with certain personally identifiable information
                    that can be used to contact or identify you (&ldquo;Personal Data&rdquo;). Personally identifiable
                    information may include, but is not limited to:
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {[
                      "Email address",
                      "First name and last name",
                      "Phone number",
                      "Address, State, Province, ZIP/Postal code, City",
                      "Cookies and Usage Data",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2.5 rounded-lg border border-border/60 bg-muted/30 px-3.5 py-2.5 text-xs sm:text-sm font-medium text-slate-800"
                      >
                        <CheckCircle2 className="size-4 shrink-0 text-[#C94343]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Usage Data */}
                <div className="border-t border-border/60 pt-6">
                  <h3 className="text-lg font-bold text-[#14263D] mb-2 flex items-center gap-2">
                    <span className="size-2 rounded-full bg-[#C94343]" />
                    Usage Data
                  </h3>
                  <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                    We may also collect information how the Service is accessed and used (&ldquo;Usage Data&rdquo;). This
                    Usage Data may include information such as your computer&apos;s Internet Protocol address (e.g. IP
                    address), browser type, browser version, the pages of our Service that you visit, the time and date of
                    your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
                  </p>
                </div>

                {/* Tracking & Cookies */}
                <div className="border-t border-border/60 pt-6">
                  <h3 className="text-lg font-bold text-[#14263D] mb-2 flex items-center gap-2">
                    <span className="size-2 rounded-full bg-[#C94343]" />
                    Tracking &amp; Cookies Data
                  </h3>
                  <p className="text-sm md:text-base text-slate-700 leading-relaxed mb-3">
                    We use cookies and similar tracking technologies to track the activity on our Service and hold certain
                    information.
                  </p>
                  <p className="text-sm md:text-base text-slate-700 leading-relaxed mb-4">
                    Cookies are files with small amount of data which may include an anonymous unique identifier. Cookies
                    are sent to your browser from a website and stored on your device. Tracking technologies also used are
                    beacons, tags, and scripts to collect and track information and to improve and analyze our Service.
                  </p>
                  <p className="text-sm md:text-base text-slate-700 leading-relaxed mb-4">
                    You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                    However, if you do not accept cookies, you may not be able to use some portions of our Service.
                  </p>

                  <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-4 space-y-2.5">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-600">
                      Examples of Cookies we use:
                    </p>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li className="flex items-start gap-2">
                        <span className="font-semibold text-[#14263D] min-w-[140px]">&bull; Session Cookies:</span>
                        <span>We use Session Cookies to operate our Service.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-semibold text-[#14263D] min-w-[140px]">&bull; Preference Cookies:</span>
                        <span>We use Preference Cookies to remember your preferences and various settings.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-semibold text-[#14263D] min-w-[140px]">&bull; Security Cookies:</span>
                        <span>We use Security Cookies for security purposes.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Section 3: Use of Data */}
              <div className="rounded-2xl border border-border/80 bg-card p-6 md:p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-[#14263D]/5 text-[#14263D]">
                    <Eye className="size-5 text-[#C94343]" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-[#14263D]">Use of Data</h2>
                </div>
                <p className="text-sm md:text-base text-slate-700 leading-relaxed mb-4">
                  Power Digitizing uses the collected data for various purposes:
                </p>
                <div className="grid gap-3">
                  {[
                    "To provide and maintain the Service",
                    "To notify you about changes to our Service",
                    "To allow you to participate in interactive features of our Service when you choose to do so",
                    "To provide customer care and support",
                    "To provide analysis or valuable information so that we can improve the Service",
                    "To monitor the usage of the Service",
                    "To detect, prevent and address technical issues",
                  ].map((purpose) => (
                    <div
                      key={purpose}
                      className="flex items-center gap-3 rounded-lg border border-border/50 bg-background px-4 py-3 text-sm text-slate-800"
                    >
                      <CheckCircle2 className="size-4 shrink-0 text-[#C94343]" />
                      <span>{purpose}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 4: Transfer Of Data */}
              <div className="rounded-2xl border border-border/80 bg-card p-6 md:p-8 shadow-sm space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-[#14263D]/5 text-[#14263D]">
                    <Server className="size-5 text-[#C94343]" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-[#14263D]">Transfer Of Data</h2>
                </div>
                <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                  Your information, including Personal Data, may be transferred to &mdash; and maintained on &mdash;
                  computers located outside of your state, province, country or other governmental jurisdiction where the
                  data protection laws may differ than those from your jurisdiction.
                </p>
                <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                  If you are located outside United States and choose to provide information to us, please note that we
                  transfer the data, including Personal Data, to United States and process it there.
                </p>
                <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                  Your consent to this Privacy Policy followed by your submission of such information represents your
                  agreement to that transfer.
                </p>
                <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                  Power Digitizing will take all steps reasonably necessary to ensure that your data is treated securely
                  and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an
                  organization or a country unless there are adequate controls in place including the security of your
                  data and other personal information.
                </p>
              </div>

              {/* Section 5: Disclosure Of Data */}
              <div className="rounded-2xl border border-border/80 bg-card p-6 md:p-8 shadow-sm space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-[#14263D]/5 text-[#14263D]">
                    <Lock className="size-5 text-[#C94343]" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-[#14263D]">Disclosure Of Data</h2>
                </div>
                <h3 className="text-base font-bold text-[#14263D]">Legal Requirements</h3>
                <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                  Power Digitizing may disclose your Personal Data in the good faith belief that such action is necessary
                  to:
                </p>
                <ul className="space-y-2.5 text-sm md:text-base text-slate-700">
                  {[
                    "To comply with a legal obligation",
                    "To protect and defend the rights or property of Power Digitizing",
                    "To prevent or investigate possible wrongdoing in connection with the Service",
                    "To protect the personal safety of users of the Service or the public",
                    "To protect against legal liability",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="size-1.5 rounded-full bg-[#C94343] mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Section 6: Security Of Data */}
              <div className="rounded-2xl border border-border/80 bg-card p-6 md:p-8 shadow-sm space-y-3">
                <h2 className="text-xl md:text-2xl font-bold text-[#14263D]">Security Of Data</h2>
                <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                  The security of your data is important to us, but remember that no method of transmission over the
                  Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable
                  means to protect your Personal Data, we cannot guarantee its absolute security.
                </p>
              </div>

              {/* Section 7: Service Providers & Analytics */}
              <div className="rounded-2xl border border-border/80 bg-card p-6 md:p-8 shadow-sm space-y-4">
                <h2 className="text-xl md:text-2xl font-bold text-[#14263D]">Service Providers</h2>
                <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                  We may employ third party companies and individuals to facilitate our Service (&ldquo;Service
                  Providers&rdquo;), to provide the Service on our behalf, to perform Service-related services or to
                  assist us in analyzing how our Service is used.
                </p>
                <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                  These third parties have access to your Personal Data only to perform these tasks on our behalf and are
                  obligated not to disclose or use it for any other purpose.
                </p>

                <div className="border-t border-border/60 pt-4 space-y-3">
                  <h3 className="text-lg font-bold text-[#14263D]">Analytics</h3>
                  <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                    We may use third-party Service Providers to monitor and analyze the use of our Service:
                  </p>
                  <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-5 space-y-3">
                    <div className="flex items-center gap-2 font-bold text-[#14263D]">
                      <span className="size-2 rounded-full bg-[#C94343]" />
                      Google Analytics
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      Google Analytics is a web analytics service offered by Google that tracks and reports website traffic.
                      Google uses the data collected to track and monitor the use of our Service. This data is shared with
                      other Google services. Google may use the collected data to contextualize and personalize the ads of
                      its own advertising network.
                    </p>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      You can opt-out of having made your activity on the Service available to Google Analytics by
                      installing the Google Analytics opt-out browser add-on. The add-on prevents the Google Analytics
                      JavaScript (ga.js, analytics.js, and dc.js) from sharing information with Google Analytics about visits
                      activity.
                    </p>
                    <p className="text-sm text-slate-700 pt-1">
                      For more information on the privacy practices of Google, please visit the Google Privacy &amp; Terms
                      web page:{" "}
                      <a
                        href="https://policies.google.com/privacy?hl=en"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-semibold text-[#C94343] hover:underline"
                      >
                        https://policies.google.com/privacy?hl=en
                        <ExternalLink className="size-3" />
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 8: Links To Other Sites */}
              <div className="rounded-2xl border border-border/80 bg-card p-6 md:p-8 shadow-sm space-y-3">
                <h2 className="text-xl md:text-2xl font-bold text-[#14263D]">Links To Other Sites</h2>
                <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                  Our Service may contain links to other sites that are not operated by us. If you click on a third party
                  link, you will be directed to that third party&apos;s site. We strongly advise you to review the
                  Privacy Policy of every site you visit.
                </p>
                <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                  We have no control over and assume no responsibility for the content, privacy policies or practices of
                  any third party sites or services.
                </p>
              </div>

              {/* Section 9: Children's Privacy */}
              <div className="rounded-2xl border border-border/80 bg-card p-6 md:p-8 shadow-sm space-y-3">
                <h2 className="text-xl md:text-2xl font-bold text-[#14263D]">Children&apos;s Privacy</h2>
                <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                  Our Service does not address anyone under the age of 18 (&ldquo;Children&rdquo;).
                </p>
                <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                  We do not knowingly collect personally identifiable information from anyone under the age of 18. If you
                  are a parent or guardian and you are aware that your Children has provided us with Personal Data, please
                  contact us. If we become aware that we have collected Personal Data from children without verification of
                  parental consent, we take steps to remove that information from our servers.
                </p>
              </div>

              {/* Section 10: Changes To This Privacy Policy */}
              <div className="rounded-2xl border border-border/80 bg-card p-6 md:p-8 shadow-sm space-y-3">
                <h2 className="text-xl md:text-2xl font-bold text-[#14263D]">
                  Changes To This Privacy Policy
                </h2>
                <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
                  Privacy Policy on this page.
                </p>
                <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                  We will let you know via email and/or a prominent notice on our Service, prior to the change becoming
                  effective and update the &ldquo;effective date&rdquo; at the top of this Privacy Policy.
                </p>
                <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                  You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy
                  Policy are effective when they are posted on this page.
                </p>
              </div>

              {/* Section 11: Contact Us */}
              <div className="rounded-2xl border border-border/80 bg-gradient-to-br from-[#14263D] to-[#0B1626] p-6 md:p-8 text-white shadow-xl space-y-4">
                <h2 className="text-xl md:text-2xl font-bold text-white">Contact Us</h2>
                <p className="text-sm md:text-base text-slate-200 leading-relaxed">
                  If you have any questions about this Privacy Policy or how your data is handled, please contact us:
                </p>
                <div className="space-y-3 pt-2">
                  <a
                    href="mailto:design@powerdigitizing.com"
                    className="flex items-center gap-3 text-sm font-semibold text-slate-100 hover:text-[#C94343] transition-colors"
                  >
                    <Mail className="size-4 text-[#C94343]" />
                    <span>By email: design@powerdigitizing.com</span>
                  </a>
                  {site.contact.phone && (
                    <a
                      href={`tel:${site.contact.phone}`}
                      className="flex items-center gap-3 text-sm font-semibold text-slate-100 hover:text-[#C94343] transition-colors"
                    >
                      <Phone className="size-4 text-[#C94343]" />
                      <span>By phone: {site.contact.phone}</span>
                    </a>
                  )}
                  {site.contact.address && (
                    <div className="flex items-start gap-3 text-sm text-slate-300">
                      <MapPin className="size-4 text-[#C94343] shrink-0 mt-0.5" />
                      <span>{site.contact.address}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column: Sidebar Navigation & Support Info */}
            <aside className="space-y-6">
              <div className="sticky top-24 space-y-6">
                {/* Legal Quick Links */}
                <div className="rounded-2xl border border-border/80 bg-card p-6 shadow-sm">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">
                    Related Legal Documents
                  </h3>
                  <div className="space-y-2">
                    <Link
                      href="/refund-policy"
                      className="flex items-center justify-between rounded-lg border border-border/50 bg-background p-3 text-sm font-semibold text-[#14263D] hover:border-[#C94343]/50 hover:bg-[#C94343]/5 hover:text-[#C94343] transition-colors group"
                    >
                      <span>Return &amp; Refund Policy</span>
                      <ArrowUpRight className="size-4 text-muted-foreground group-hover:text-[#C94343] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                    <Link
                      href="/terms"
                      className="flex items-center justify-between rounded-lg border border-border/50 bg-background p-3 text-sm font-semibold text-[#14263D] hover:border-[#C94343]/50 hover:bg-[#C94343]/5 hover:text-[#C94343] transition-colors group"
                    >
                      <span>Terms of Service</span>
                      <ArrowUpRight className="size-4 text-muted-foreground group-hover:text-[#C94343] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                    <Link
                      href="/contact"
                      className="flex items-center justify-between rounded-lg border border-border/50 bg-background p-3 text-sm font-semibold text-[#14263D] hover:border-[#C94343]/50 hover:bg-[#C94343]/5 hover:text-[#C94343] transition-colors group"
                    >
                      <span>Contact &amp; Support</span>
                      <ArrowUpRight className="size-4 text-muted-foreground group-hover:text-[#C94343] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </div>

                {/* Direct Assistance Card */}
                <div className="rounded-2xl border border-[#C94343]/20 bg-gradient-to-br from-[#C94343]/5 via-background to-background p-6 shadow-sm">
                  <h3 className="text-base font-bold text-[#14263D] mb-2">Need Help or Questions?</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                    Our compliance and customer service teams are available 24/7 to answer privacy queries or assist with
                    order files.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#C94343] py-2.5 text-xs font-bold text-white shadow-md transition-all hover:bg-[#b03535]"
                  >
                    <span>Contact Support</span>
                    <ArrowUpRight className="size-3.5" />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
