"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
export function Header(){const [open,setOpen]=useState(false); const path=usePathname();return <header className="site-header"><div className="container header-inner"><Link href="/" className="brand" aria-label="Daryl Dauphin home">dd<span>.</span></Link><button className="menu-button" onClick={()=>setOpen(!open)} aria-expanded={open} aria-controls="navigation" aria-label={open?"Close navigation":"Open navigation"}>{open?<X/>:<Menu/>}</button><nav id="navigation" className={open?"nav open":"nav"} aria-label="Main navigation">{[["/","Home"],["/projects","Projects"],["/about","About"],["/contact","Contact"]].map(([url,label])=><Link aria-current={path===url?"page":undefined} key={url} href={url} onClick={()=>setOpen(false)}>{label}</Link>)}<Link className="nav-resume" href="/resume.pdf" download>Résumé <ArrowUpRight size={15}/></Link></nav></div></header>}
