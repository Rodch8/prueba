import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';

export const C={ink:'#101816',paper:'#F4F1E8',lime:'#FF895C',orange:'#FF754D',muted:'#B8C4B7'};
export const ease={extrapolateLeft:'clamp',extrapolateRight:'clamp'} as const;

export const Backdrop: React.FC=()=>{
 const frame=useCurrentFrame();
 return <AbsoluteFill style={{background:C.ink,overflow:'hidden'}}>
  <div style={{position:'absolute',inset:0,opacity:.11,backgroundImage:'radial-gradient(#FF895C 1.4px,transparent 1.4px)',backgroundSize:'38px 38px'}}/>
  <div style={{position:'absolute',width:1250,height:1250,border:'2px solid #344334',borderRadius:'50%',left:-540,top:800,translate:`0px ${Math.sin(frame/80)*30}px`}}/>
  <div style={{position:'absolute',width:800,height:800,border:'2px solid #344334',borderRadius:'50%',right:-460,top:-280}}/>
 </AbsoluteFill>;
};

export const Eyebrow:React.FC<{children:React.ReactNode}> = ({children})=><div style={{fontSize:27,fontWeight:700,letterSpacing:4,color:C.lime,display:'flex',alignItems:'center',gap:17}}><span style={{width:12,height:12,borderRadius:3,background:C.lime}}/>{children}</div>;

export const Entrance:React.FC<{children:React.ReactNode;delay?:number;style?:React.CSSProperties}>=({children,delay=0,style})=>{
 const f=useCurrentFrame();
 return <div style={{opacity:interpolate(f,[delay,delay+9],[0,1],ease),translate:`0px ${interpolate(f,[delay,delay+15],[38,0],ease)}px`,...style}}>{children}</div>;
};

export const Footer:React.FC<{step:string;label:string}>=({step,label})=><div style={{position:'absolute',left:92,right:145,bottom:240,display:'flex',alignItems:'center',gap:24,color:C.muted,fontSize:24,letterSpacing:2}}><span style={{color:C.lime,fontWeight:700}}>{step}</span><div style={{height:1,flex:1,background:'#435044'}}/>{label}</div>;

export const GroupGraphic:React.FC<{together?:boolean}>=({together=false})=>{
 const f=useCurrentFrame(); const {fps}=useVideoConfig();
 const p=interpolate(f,[.3*fps,1.9*fps],[0,1],ease);
 const x=together?180+(485-180)*p:180;
 return <svg width="890" height="390" viewBox="0 0 890 390" style={{overflow:'visible'}}>
  <rect x="30" y="18" width="830" height="350" rx="40" fill="#18251E" stroke="#3C4C3D" strokeWidth="2"/>
  <path d="M450 20V368M450 110a85 85 0 1 0 0 170a85 85 0 1 0 0-170" fill="none" stroke="#3C4C3D" strokeWidth="2"/>
  <path d="M220 195H450" fill="none" stroke={C.lime} strokeWidth="3" strokeDasharray="8 12" opacity=".6"/>
  {[[560,110],[670,195],[560,280]].map(([a,b],i)=><g key={i}><circle cx={a} cy={b} r="35" fill="#3A4D38"/><circle cx={a} cy={b} r="12" fill={C.paper}/></g>)}
  <circle cx={x} cy="195" r="49" fill={C.lime} opacity=".1"/>
  <circle cx={x} cy="195" r="32" fill={C.lime}/>
  <path d={`M${x-10} 195l7 8 14-17`} fill="none" stroke={C.ink} strokeWidth="4" strokeLinecap="round"/>
 </svg>;
};

export const ChatIcon:React.FC<{size?:number}>=({size=94})=><svg width={size} height={size} viewBox="0 0 100 100" fill="none"><path d="M20 16h60a9 9 0 0 1 9 9v42a9 9 0 0 1-9 9H46L24 91V76h-4a9 9 0 0 1-9-9V25a9 9 0 0 1 9-9Z" stroke="currentColor" strokeWidth="5"/><path d="M29 37h42M29 53h28" stroke="currentColor" strokeWidth="5" strokeLinecap="round"/></svg>;
