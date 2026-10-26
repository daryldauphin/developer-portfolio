import {notFound} from "next/navigation";
import {projects} from "@/lib/data";
import {ProjectCaseStudy,ContactCTA} from "@/components/portfolio";
export function generateStaticParams(){return projects.map(p=>({slug:p.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const p=projects.find(p=>p.slug===slug);return {title:p?.title??"Project not found",description:p?.overview}}
export default async function Project({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const p=projects.find(p=>p.slug===slug);if(!p)notFound();return <><ProjectCaseStudy project={p}/><ContactCTA/></>}
