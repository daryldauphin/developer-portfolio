import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/portfolio";
import "./globals.css";
const host = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
export const metadata: Metadata = { metadataBase: new URL(host ? `https://${host}` : "http://localhost:3000"), title: {default:"Daryl Dauphin — WordPress & Full Stack Developer",template:"%s | Daryl Dauphin"},description:"Boston-based WordPress and full stack developer building custom WordPress solutions and professional websites.",openGraph:{type:"website",locale:"en_US",siteName:"Daryl Dauphin",title:"Daryl Dauphin — WordPress & Full Stack Developer",description:"Thoughtful code. Purposeful websites."}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><a className="skip-link" href="#main">Skip to content</a><Header/><main id="main">{children}</main><Footer/></body></html>}
