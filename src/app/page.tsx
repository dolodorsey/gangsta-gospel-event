"use client";
import { useState, useEffect, useRef } from "react";

// GANGSTA GOSPEL — "Sacred Street" aesthetic
// Palette: deep navy / gold / burgundy-red / cream / electric blue accent
const C = {
  base:    "#0D0E12", surface: "#131520", panel: "#1A1C28",
  border:  "rgba(244,236,221,0.07)", navy: "#1E2D4A",
  gold:    "#D9AF4A", goldGlow: "rgba(217,175,74,0.2)",
  blue:    "#3C5B8A", blueGlow: "rgba(60,91,138,0.25)",
  red:     "#6C2E3C", cream: "#F4ECDD",
  muted:   "rgba(244,236,221,0.45)", dim: "rgba(244,236,221,0.22)",
};
const F = { display: "'Playfair Display',Georgia,serif", sans: "'DM Sans',system-ui,sans-serif", mono: "'DM Mono',monospace" };

const TICKETS = [
  { date: "Jun 21, 2026", url: "https://www.eventbrite.com/e/gangsta-gospel-tickets-1983357015223", note: "Summer Session" },
  { date: "Sep 13, 2026", url: "https://www.eventbrite.com/e/gangsta-gospel-tickets-1983358448510", note: "Fall Revival" },
];

function useInView(t=0.1){const ref=useRef<HTMLDivElement>(null);const[v,setV]=useState(false);useEffect(()=>{const el=ref.current;if(!el)return;const o=new IntersectionObserver(([e])=>{if(e.isIntersecting)setV(true)},{threshold:t});o.observe(el);return()=>o.disconnect()},[t]);return[ref,v] as const}
function Reveal({children,d=0}:{children:React.ReactNode;d?:number}){const[ref,v]=useInView();return<div ref={ref} style={{transform:v?"translateY(0)":"translateY(40px)",opacity:v?1:0,transition:`all 1s cubic-bezier(0.16,1,0.3,1) ${d}s`}}>{children}</div>}
const Grain=()=><div style={{position:"absolute",inset:0,opacity:0.04,pointerEvents:"none",backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`}}/>;

function Nav(){const[sc,setSc]=useState(false);useEffect(()=>{const h=()=>setSc(window.scrollY>60);window.addEventListener("scroll",h,{passive:true});return()=>window.removeEventListener("scroll",h)},[]);return(
<nav style={{position:"fixed",top:0,left:0,right:0,zIndex:200,padding:sc?"12px clamp(24px,4vw,60px)":"24px clamp(24px,4vw,60px)",display:"flex",justifyContent:"space-between",alignItems:"center",background:sc?`${C.base}F5`:"transparent",backdropFilter:sc?"blur(20px)":"none",borderBottom:sc?`1px solid ${C.border}`:"none",transition:"all 0.5s cubic-bezier(0.16,1,0.3,1)"}}>
<style>{`@media(max-width:768px){
  .dg,.DG,[style*="gridTemplateColumns"]{grid-template-columns:1fr!important}
  .nl,.desktop-nav{display:none!important}
  .fg,.stat-grid,.feature-grid{grid-template-columns:1fr!important}
  .eg{grid-template-columns:1fr!important}
  h1,h2,.hero-title{word-break:break-word}
  nav{padding:16px!important}
  section{padding-left:16px!important;padding-right:16px!important}
}`}</style>

<div><div style={{fontFamily:F.mono,fontSize:"7px",letterSpacing:"0.5em",textTransform:"uppercase",color:C.gold,marginBottom:"2px"}}>A KHG HugLife Event</div><span style={{fontFamily:F.display,fontSize:"18px",fontWeight:700,color:C.cream,letterSpacing:"0.06em"}}>GANGSTA GOSPEL</span></div>
<div className="nl" style={{display:"flex",gap:"clamp(16px,2vw,32px)",alignItems:"center"}}>
{["Experience","About"].map(n=><a key={n} href={`#${n.toLowerCase()}`} style={{fontFamily:F.sans,fontSize:"10px",fontWeight:500,letterSpacing:"0.2em",textTransform:"uppercase",color:C.muted,textDecoration:"none",transition:"color 0.3s"}} onMouseEnter={e=>(e.target as HTMLAnchorElement).style.color=C.cream} onMouseLeave={e=>(e.target as HTMLAnchorElement).style.color=C.muted}>{n}</a>)}
<a href="#tickets" style={{fontFamily:F.sans,fontSize:"10px",fontWeight:700,letterSpacing:"0.12em",textTransform:"uppercase",color:C.base,background:C.gold,padding:"10px 24px",textDecoration:"none",display:"inline-block"}}>Get Tickets</a>
</div></nav>);}

function Hero(){const[ld,setLd]=useState(false);useEffect(()=>{setTimeout(()=>setLd(true),100)},[]);
return(<section style={{position:"relative",width:"100%",height:"100vh",overflow:"hidden",background:C.base,display:"flex",alignItems:"flex-end"}}>
<div style={{position:"absolute",inset:0}}>
  <div style={{position:"absolute",bottom:"-10%",left:"50%",transform:"translateX(-50%)",width:"140%",height:"80%",background:`radial-gradient(ellipse at 50% 100%, ${C.goldGlow} 0%, ${C.blueGlow} 35%, transparent 65%)`}}/>
  <div style={{position:"absolute",top:0,left:0,width:"100%",height:"100%",backgroundImage:"repeating-linear-gradient(0deg,transparent,transparent 79px,rgba(244,236,221,0.025) 79px,rgba(244,236,221,0.025) 80px),repeating-linear-gradient(90deg,transparent,transparent 79px,rgba(244,236,221,0.015) 79px,rgba(244,236,221,0.015) 80px)"}}/>
  <Grain/>
</div>
<div style={{position:"absolute",inset:0,background:"linear-gradient(to top, rgba(13,14,18,0.97) 0%, rgba(13,14,18,0.45) 50%, rgba(13,14,18,0.15) 100%)"}}/>

<div style={{position:"relative",zIndex:2,width:"100%",padding:"0 clamp(32px,5vw,80px) clamp(60px,7vh,96px)",maxWidth:"1400px",margin:"0 auto"}}>
  <div style={{opacity:ld?1:0,transition:"opacity 0.8s ease 0.3s",fontFamily:F.mono,fontSize:"9px",letterSpacing:"0.5em",textTransform:"uppercase",color:C.gold,marginBottom:"20px"}}>Atlanta, GA · Sacred Meets Street</div>
  <div style={{overflow:"hidden",marginBottom:"4px"}}><h1 style={{fontFamily:F.display,fontSize:"clamp(56px,11vw,160px)",fontWeight:700,lineHeight:0.85,letterSpacing:"0.02em",color:C.cream,margin:0,opacity:ld?1:0,transform:ld?"translateY(0)":"translateY(100%)",transition:"all 1.3s cubic-bezier(0.16,1,0.3,1) 0.4s"}}>GANGSTA</h1></div>
  <div style={{overflow:"hidden",marginBottom:"32px"}}><h1 style={{fontFamily:F.display,fontSize:"clamp(56px,11vw,160px)",fontWeight:700,lineHeight:0.85,letterSpacing:"0.02em",color:C.gold,margin:0,opacity:ld?1:0,transform:ld?"translateY(0)":"translateY(100%)",transition:"all 1.3s cubic-bezier(0.16,1,0.3,1) 0.6s"}}>GOSPEL</h1></div>
  <p style={{fontFamily:F.sans,fontSize:"clamp(14px,1.2vw,17px)",lineHeight:1.85,color:C.muted,maxWidth:"460px",marginBottom:"40px",opacity:ld?1:0,transition:"opacity 1s ease 1.1s"}}>Where street culture meets spiritual energy. Atlanta&apos;s most unique live experience — hip-hop, gospel, culture, and community converging in one unforgettable room.</p>
  <div style={{display:"flex",gap:"14px",flexWrap:"wrap",opacity:ld?1:0,transition:"opacity 1s ease 1.4s"}}>
    <a href="#tickets" style={{fontFamily:F.sans,fontSize:"10px",fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",color:C.base,background:C.gold,padding:"15px 48px",textDecoration:"none",display:"inline-block"}}>Get Tickets</a>
    <a href="mailto:thekollectiveworldwide@gmail.com?subject=Gangsta Gospel Sponsorship Inquiry" style={{fontFamily:F.sans,fontSize:"10px",fontWeight:500,letterSpacing:"0.14em",textTransform:"uppercase",color:C.cream,background:"transparent",border:`1px solid ${C.border}`,padding:"15px 36px",textDecoration:"none",display:"inline-block"}}>Partner With Us</a>
  </div>
</div></section>);}

function Experience(){
const pillars=[{t:"The Collision",d:"Hip-hop production meets gospel choir energy. Live instruments, real voices, and a room that sings back.",n:"01"},{t:"The Culture",d:"Atlanta-rooted, globally inspired. Every Gangsta Gospel show is a moment in cultural history.",n:"02"},{t:"The Community",d:"This is not a show. It is a gathering. People leave feeling something they don't have words for yet.",n:"03"},{t:"The Message",d:"Redemption, resilience, and relevance. Content that speaks to where people actually are.",n:"04"}];
return(<section id="experience" style={{background:C.surface,padding:"120px clamp(32px,5vw,80px)",position:"relative",overflow:"hidden"}}>
<div style={{position:"absolute",inset:0,background:`radial-gradient(ellipse at 60% 50%, ${C.blueGlow} 0%, transparent 55%)`}}/>
<Grain/>
<div style={{maxWidth:"1400px",margin:"0 auto",position:"relative",zIndex:1}}>
<Reveal><div style={{fontFamily:F.mono,fontSize:"9px",letterSpacing:"0.5em",textTransform:"uppercase",color:C.gold,marginBottom:"16px"}}>The Experience</div>
<div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",flexWrap:"wrap",gap:"24px",marginBottom:"64px"}}>
<h2 style={{fontFamily:F.display,fontSize:"clamp(36px,5.5vw,76px)",fontWeight:700,lineHeight:0.95,color:C.cream}}>Sacred Meets Street</h2>
<p style={{fontFamily:F.sans,fontSize:"14px",color:C.muted,maxWidth:"340px",lineHeight:1.75}}>An experience that doesn&apos;t fit any single category. That&apos;s the point.</p>
</div></Reveal>
<div className="dg" style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:"2px",background:C.border}}>
{pillars.map((p,i)=><Reveal key={p.t} d={i*0.07}>
<div style={{background:C.base,padding:"48px 36px",position:"relative",overflow:"hidden"}}>
<div style={{position:"absolute",top:0,left:0,right:0,height:"2px",background:`linear-gradient(90deg,${C.gold},transparent)`}}/>
<div style={{fontFamily:F.mono,fontSize:"10px",color:C.gold,opacity:0.5,marginBottom:"14px"}}>{p.n}</div>
<div style={{fontFamily:F.display,fontSize:"clamp(20px,2.5vw,30px)",fontWeight:600,color:C.cream,marginBottom:"12px"}}>{p.t}</div>
<p style={{fontFamily:F.sans,fontSize:"13px",lineHeight:1.75,color:C.muted}}>{p.d}</p>
</div></Reveal>)}
</div></div></section>);}

function Tickets(){const[sel,setSel]=useState(0);return(
<section id="tickets" style={{background:C.base,padding:"100px clamp(32px,5vw,80px)",position:"relative",overflow:"hidden"}}>
<div style={{position:"absolute",inset:0,background:`radial-gradient(ellipse at 50% 50%, ${C.goldGlow} 0%, transparent 55%)`}}/>
<Grain/>
<div style={{maxWidth:"1100px",margin:"0 auto",position:"relative",zIndex:1}}>
<Reveal><div style={{fontFamily:F.mono,fontSize:"9px",letterSpacing:"0.5em",textTransform:"uppercase",color:C.gold,marginBottom:"16px"}}>Tickets & Access</div>
<div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",flexWrap:"wrap",gap:"24px",marginBottom:"56px"}}>
<h2 style={{fontFamily:F.display,fontSize:"clamp(36px,6vw,84px)",fontWeight:700,color:C.cream,lineHeight:0.9}}>GET IN THE ROOM</h2>
<p style={{fontFamily:F.sans,fontSize:"14px",color:C.muted,maxWidth:"300px",lineHeight:1.75}}>Two shows. One 2026 season. Reserve your place.</p>
</div></Reveal>
<div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"2px",background:`${C.gold}20`,marginBottom:"3px"}}>
{TICKETS.map((t,i)=><Reveal key={t.date} d={i*0.08}>
<div onClick={()=>setSel(i)} style={{background:sel===i?`linear-gradient(145deg,${C.panel},${C.surface})`:C.surface,padding:"44px 36px",cursor:"pointer",borderTop:`2px solid ${sel===i?C.gold:"transparent"}`,transition:"all 0.3s"}}>
<div style={{display:"flex",alignItems:"center",gap:"6px",marginBottom:"16px"}}>
<div style={{width:"7px",height:"7px",borderRadius:"50%",background:"#4ADE80",boxShadow:"0 0 6px #4ADE80",animation:"pulse 2s infinite"}}/>
<span style={{fontFamily:F.mono,fontSize:"8px",letterSpacing:"0.3em",color:"#4ADE80",textTransform:"uppercase"}}>On Sale Now</span>
</div>
<div style={{fontFamily:F.display,fontSize:"clamp(22px,3vw,38px)",fontWeight:700,color:C.cream,marginBottom:"6px"}}>{t.date}</div>
<div style={{fontFamily:F.sans,fontSize:"12px",color:C.gold,marginBottom:"6px"}}>{t.note}</div>
<div style={{fontFamily:F.sans,fontSize:"11px",color:C.muted,marginBottom:"24px"}}>Atlanta, GA</div>
<a href={t.url} target="_blank" rel="noopener noreferrer" onClick={e=>e.stopPropagation()} style={{fontFamily:F.sans,fontSize:"10px",fontWeight:700,letterSpacing:"0.15em",textTransform:"uppercase",color:sel===i?C.base:C.cream,background:sel===i?C.gold:"transparent",border:sel===i?"none":`1px solid ${C.border}`,padding:"14px 32px",textDecoration:"none",display:"inline-block",transition:"all 0.3s"}}>Buy Tickets →</a>
</div></Reveal>)}
</div>
<Reveal d={0.2}><div style={{background:C.surface,padding:"32px 36px",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"24px",borderLeft:`2px solid ${C.gold}40`}}>
<div><div style={{fontFamily:F.mono,fontSize:"8px",letterSpacing:"0.4em",textTransform:"uppercase",color:C.gold,marginBottom:"8px"}}>Groups & Partners</div>
<div style={{fontFamily:F.display,fontSize:"clamp(16px,2vw,22px)",fontWeight:600,color:C.cream}}>Church groups, organizations & sponsors</div></div>
<div style={{display:"flex",gap:"12px",flexWrap:"wrap"}}>
<a href="mailto:thekollectiveworldwide@gmail.com?subject=Gangsta Gospel Group Inquiry" style={{fontFamily:F.sans,fontSize:"10px",fontWeight:700,letterSpacing:"0.12em",textTransform:"uppercase",color:C.base,background:C.gold,padding:"12px 28px",textDecoration:"none",display:"inline-block"}}>Group Tickets</a>
<a href="mailto:thekollectiveworldwide@gmail.com?subject=Gangsta Gospel Sponsorship" style={{fontFamily:F.sans,fontSize:"10px",fontWeight:500,letterSpacing:"0.12em",textTransform:"uppercase",color:C.cream,background:"transparent",border:`1px solid ${C.border}`,padding:"12px 24px",textDecoration:"none",display:"inline-block"}}>Become a Sponsor</a>
</div></div></Reveal>
<div style={{marginTop:"28px",display:"flex",gap:"32px",justifyContent:"center",flexWrap:"wrap"}}>
{["Powered by Eventbrite","Secure Checkout","All Ages Welcome","Live Music Event"].map(s=><div key={s} style={{fontFamily:F.mono,fontSize:"9px",color:"rgba(255,255,255,0.18)",letterSpacing:"0.2em"}}>{s}</div>)}
</div></div>
<style>{`@keyframes pulse{0%,100%{opacity:1}50%{opacity:0.3}}`}
</style>
</section>);}

function Footer(){return(<footer style={{background:"#09090D",borderTop:`1px solid ${C.border}`,padding:"48px clamp(32px,5vw,80px) 32px"}}>
<div style={{maxWidth:"1400px",margin:"0 auto",display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:"32px"}}>
<div><div style={{fontFamily:F.display,fontSize:"22px",fontWeight:700,color:C.cream,marginBottom:"2px"}}>GANGSTA GOSPEL</div>
<div style={{fontFamily:F.mono,fontSize:"9px",letterSpacing:"0.3em",color:C.gold}}>A KHG HUGLIFE EVENT</div>
<p style={{fontFamily:F.sans,fontSize:"12px",color:C.muted,marginTop:"10px",maxWidth:"240px",lineHeight:1.65}}>Where sacred meets street. Atlanta&apos;s most unique live experience.</p></div>
<div style={{display:"flex",gap:"48px",flexWrap:"wrap"}}>
{[{h:"Event",l:["Experience","Get Tickets","FAQ"]},{h:"Connect",l:["Tickets","Sponsorship","Group Bookings","@thekollectiveworldwide"]}].map(col=><div key={col.h}>
<div style={{fontFamily:F.mono,fontSize:"8px",letterSpacing:"0.4em",textTransform:"uppercase",color:C.gold,marginBottom:"14px"}}>{col.h}</div>
<ul style={{listStyle:"none",padding:0,margin:0,display:"flex",flexDirection:"column",gap:"8px"}}>{col.l.map(item=><li key={item} style={{fontFamily:F.sans,fontSize:"12px",color:C.muted}}>{item}</li>)}</ul>
</div>)}
</div></div>
<div style={{maxWidth:"1400px",margin:"28px auto 0",paddingTop:"20px",borderTop:`1px solid ${C.border}`,display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:"10px"}}>
<div style={{fontFamily:F.mono,fontSize:"10px",color:"rgba(255,255,255,0.18)"}}>© 2026 Gangsta Gospel. A KHG Enterprise.</div>
<div style={{fontFamily:F.mono,fontSize:"10px",color:"rgba(255,255,255,0.18)"}}>Privacy · Terms</div>
</div></footer>);}

export default function GangstaGospelSite(){return(<div style={{background:C.base,overflowX:'hidden'}}><Nav/><Hero/><Experience/><Tickets/><Footer/></div>);}
