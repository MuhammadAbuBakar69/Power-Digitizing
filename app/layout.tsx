import type { Metadata } from "next";
import "./globals.css";
import { getSite, getOrigin } from "@/lib/tenant";
import { buildMetadata, faqJsonLd, jsonLdString, organizationJsonLd } from "@/lib/seo";
import { themeStyle } from "@/lib/theme";
import { fontVariables } from "@/lib/fonts";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export async function generateMetadata(): Promise<Metadata> {
  const site = await getSite();
  return buildMetadata(site, await getOrigin(site));
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const site = await getSite();
  const origin = await getOrigin(site);
  const loginUrl = site.portal.loginUrl ?? process.env.PORTAL_LOGIN_URL;
  const schemas = [organizationJsonLd(site, origin), faqJsonLd(site)].filter(Boolean);

  return (
    <html lang="en" className={fontVariables} style={themeStyle(site)} data-site={site.id}>
      <body suppressHydrationWarning>
        <Header site={{ name: site.name, logo: site.logo, navigation: site.navigation, cta: site.cta }} loginUrl={loginUrl} />
        <main>{children}</main>
        <Footer site={site} />
        {schemas.map((s, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString(s) }} />)}
      </body>
    </html>
  );
}
