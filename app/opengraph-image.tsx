import { ImageResponse } from 'next/og';
export const alt = 'Daryl Dauphin — WordPress & Full Stack Developer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export default function Image(){return new ImageResponse(<div style={{display:'flex',flexDirection:'column',width:'100%',height:'100%',background:'#101113',color:'#f2f3f5',padding:'80px',justifyContent:'center'}}><div style={{fontSize:24,color:'#85aaff',marginBottom:35}}>DARYL DAUPHIN · BOSTON, MA</div><div style={{fontSize:76,letterSpacing:-3}}>Thoughtful code.</div><div style={{fontSize:76,letterSpacing:-3,color:'#9ca3af'}}>Purposeful websites.</div><div style={{fontSize:25,marginTop:40}}>WordPress Developer &amp; Full Stack Developer</div></div>,size)}
