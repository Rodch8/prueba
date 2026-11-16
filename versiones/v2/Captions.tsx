import React from 'react';
import type {Caption} from '@remotion/captions';
import {interpolate,useCurrentFrame,useVideoConfig} from 'remotion';
import {C,ease} from './Design';

export const Captions:React.FC<{captions:Caption[]}>=({captions})=>{
 const frame=useCurrentFrame();const {fps}=useVideoConfig();const ms=frame/fps*1000;
 const active=captions.find(c=>ms>=c.startMs&&ms<c.endMs);
 if(!active)return null;
 return <div style={{position:'absolute',left:88,right:140,bottom:320,textAlign:'center',display:'flex',justifyContent:'center'}}>
  <div style={{fontSize:63,fontWeight:700,lineHeight:1.18,color:C.paper,padding:'20px 28px',background:'rgba(12,20,16,.86)',borderRadius:17,boxShadow:'0 8px 35px rgba(0,0,0,.16)',scale:interpolate(ms,[active.startMs,active.startMs+100],[.97,1],ease)}}>
   {active.text.trim().split(' ').map((w,i)=><React.Fragment key={i}><span style={{color:/^(primer|día|nuevo|NOVIEMBRE|26|edad|error|intento|conocido)[,.]?$/i.test(w)?C.lime:C.paper}}>{w}</span>{' '}</React.Fragment>)}
  </div>
 </div>;
};
