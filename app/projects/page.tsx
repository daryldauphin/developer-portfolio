import type {Metadata} from "next";
import {ProjectGrid,ContactCTA} from "@/components/portfolio";
export const metadata:Metadata={title:"Projects",description:"Selected university and agency website projects by Daryl Dauphin."};
export default function Projects(){return <><section className="container page-intro"><p className="eyebrow">A SELECTION OF MY WORK</p><h1>Websites with purpose.</h1><p className="lead">University-scale WordPress engineering. Client websites built from the ground up. Here’s where I’ve put my skills to work.</p></section><section className="container projects-list" aria-label="Featured projects"><ProjectGrid/></section><ContactCTA/></>}
