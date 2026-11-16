import React from 'react';
import {Audio} from '@remotion/media';
import {AbsoluteFill,OffthreadVideo,interpolate,staticFile,useCurrentFrame,useVideoConfig} from 'remotion';
import {Backdrop,C,ChatIcon,Entrance,Eyebrow,Footer,GroupGraphic,ease} from './Design';

export const Speaker:React.FC<{chapter:string;headline?:string;sourceStart:number;sourceEnd:number}>=({chapter,headline,sourceStart,sourceEnd})=>{
 const f=useCurrentFrame();const {fps}=useVideoConfig();
 const local=f-sourceStart*fps;
 return <AbsoluteFill style={{overflow:'hidden',background:C.ink}}>
  <OffthreadVideo name="Grabación original reencuadrada" src={staticFile('speaker.mp4')} muted style={{width:'100%',height:'100%',scale:interpolate(local,[0,(sourceEnd-sourceStart)*fps],[1.0,1.025],ease)}}/>
  <Audio name="Voz original limpia" src={staticFile('voice-clean.wav')} premountFor={fps} volume={Math.min(interpolate(f,[sourceStart*fps,sourceStart*fps+2],[0,1],ease),interpolate(f,[sourceEnd*fps-2,sourceEnd*fps],[1,0],ease))}/>
  <AbsoluteFill style={{background:'linear-gradient(180deg,rgba(9,16,13,.83) 0%,rgba(9,16,13,0) 25%,rgba(9,16,13,0) 61%,rgba(9,16,13,.64) 100%)'}}/>
  <div style={{position:'absolute',left:90,top:145,right:145}}>
   <div style={{fontSize:26,fontWeight:700,letterSpacing:3.5,color:C.lime}}>{chapter}</div>
   {headline&&<div style={{fontSize:76,fontWeight:700,lineHeight:1.03,letterSpacing:-3,marginTop:22,whiteSpace:'pre-line',textShadow:'0 2px 20px rgba(0,0,0,.25)'}}>{headline}</div>}
  </div>
  <div style={{position:'absolute',left:90,bottom:238,fontSize:22,letterSpacing:3,color:'rgba(255,255,255,.7)'}}>CADA PROCESO TIENE UN INICIO.</div>
 </AbsoluteFill>;
};

export const FirstDay=()=> <AbsoluteFill>
 <Backdrop/>
 <div style={{position:'absolute',left:92,right:135,top:285}}>
  <Entrance><Eyebrow>UN PRIMER DÍA</Eyebrow></Entrance>
  <Entrance delay={3}><div style={{fontSize:108,fontWeight:700,lineHeight:1.02,letterSpacing:-5,marginTop:60}}>Nadie empieza<br/>conociendo<br/><span style={{color:C.lime}}>todo.</span></div></Entrance>
  <Entrance delay={9} style={{marginTop:105}}><GroupGraphic/></Entrance>
 </div><Footer step="01" label="ES PARTE DEL PROCESO"/>
</AbsoluteFill>;

export const Unknown=()=> <AbsoluteFill><Backdrop/>
 <div style={{position:'absolute',left:92,right:145,top:330}}>
  <Entrance><Eyebrow>LO NUEVO</Eyebrow></Entrance>
  <Entrance delay={3}><div style={{fontSize:99,lineHeight:1.05,fontWeight:700,letterSpacing:-4,marginTop:55}}>Al principio,<br/>hay preguntas.</div></Entrance>
  {['El grupo','La dinámica','¿Qué va a pasar?'].map((s,i)=><Entrance key={s} delay={8+i*9} style={{marginTop:30,padding:'31px 34px',border:'1px solid #42523F',borderRadius:20,background:i===2?C.lime:'#19261D',color:i===2?C.ink:C.paper,display:'flex',alignItems:'center',gap:30}}><span style={{fontSize:26,opacity:.6}}>0{i+1}</span><span style={{fontSize:47,fontWeight:700}}>{s}</span></Entrance>)}
 </div><Footer step="02" label="TAMBIÉN ES NORMAL"/>
</AbsoluteFill>;

export const Retry=()=>{
 const f=useCurrentFrame();
 return <AbsoluteFill><Backdrop/><div style={{position:'absolute',left:92,right:145,top:340}}>
  <Entrance><Eyebrow>APRENDER HACIENDO</Eyebrow></Entrance>
  <Entrance delay={3}><div style={{fontSize:100,fontWeight:700,lineHeight:1.03,letterSpacing:-4,marginTop:65}}>Un intento.<br/>Y otro más.</div></Entrance>
  <div style={{marginTop:110,display:'flex',gap:18}}>
   {['EJERCICIO','ERROR','OTRA VEZ'].map((s,i)=><Entrance key={s} delay={8+i*12} style={{width:270,height:300,borderRadius:24,background:i===2?C.lime:i===1?'#34271F':'#1E2E23',display:'flex',flexDirection:'column',justifyContent:'space-between',padding:'28px 19px',color:i===2?C.ink:C.paper}}><span style={{fontSize:94,fontWeight:700,color:i===1?C.orange:undefined}}>{['01','02','↗'][i]}</span><span style={{fontSize:25,fontWeight:700,letterSpacing:1}}>{s}</span></Entrance>)}
  </div>
  <div style={{marginTop:65,height:4,background:'#33452D',borderRadius:10}}><div style={{height:4,width:`${interpolate(f,[0,70],[0,100],ease)}%`,background:C.lime}}/></div>
 </div><Footer step="03" label="VOLVER A INTENTAR"/></AbsoluteFill>;
};

export const Familiar=()=> <AbsoluteFill><Backdrop/><div style={{position:'absolute',left:92,right:145,top:290}}>
 <Entrance><Eyebrow>POCO A POCO</Eyebrow></Entrance>
 <Entrance delay={3}><div style={{fontSize:105,lineHeight:1.03,fontWeight:700,letterSpacing:-4,marginTop:60}}>Lo nuevo<br/>se vuelve<br/><span style={{color:C.lime}}>familiar.</span></div></Entrance>
 <Entrance delay={7} style={{marginTop:100}}><GroupGraphic together/></Entrance>
 </div><Footer step="04" label="PASO A PASO"/></AbsoluteFill>;

export const Calendar=()=>{
 const f=useCurrentFrame();
 return <AbsoluteFill><Backdrop/><div style={{position:'absolute',left:92,right:145,top:255}}>
  <Entrance><Eyebrow>EL SIGUIENTE PASO</Eyebrow></Entrance>
  <Entrance delay={3}><div style={{fontSize:98,fontWeight:700,lineHeight:1.03,letterSpacing:-4,marginTop:55}}>Tu primer día<br/>puede estar<br/><span style={{color:C.lime}}>por empezar.</span></div></Entrance>
  <Entrance delay={12} style={{marginTop:75,background:C.paper,color:C.ink,borderRadius:32,overflow:'hidden',rotate:`${interpolate(f,[12,28],[-3,0],ease)}deg`}}>
   <div style={{background:C.lime,padding:'22px 35px',fontSize:28,fontWeight:700,letterSpacing:4}}>NUEVO CICLO</div>
   <div style={{display:'flex',alignItems:'center',gap:45,padding:'24px 45px'}}><span style={{fontSize:166,fontWeight:700,letterSpacing:-10,lineHeight:1.1}}>26</span><div><div style={{fontSize:45,fontWeight:700}}>LUNES</div><div style={{fontSize:27,marginTop:10}}>Empieza el nuevo ciclo</div></div></div>
  </Entrance>
 </div><Footer step="05" label="CONSULTA ANTES DE EMPEZAR"/></AbsoluteFill>;
};

export const CallToAction=()=>{
 const f=useCurrentFrame();
 return <AbsoluteFill><Backdrop/><div style={{position:'absolute',left:92,right:145,top:305}}>
  <Entrance><Eyebrow>¿QUIERES ORIENTARTE?</Eyebrow></Entrance>
  <Entrance delay={3}><div style={{fontSize:94,fontWeight:700,lineHeight:1.05,letterSpacing:-4,marginTop:55}}>El primer paso<br/>es escribirnos.</div></Entrance>
  <Entrance delay={8} style={{marginTop:85,color:C.lime}}><ChatIcon/></Entrance>
  <Entrance delay={12} style={{marginTop:30}}><div style={{fontSize:27,letterSpacing:3,color:C.muted}}>ESCRÍBENOS LA PALABRA</div><div style={{marginTop:25,background:C.lime,padding:'31px 23px',borderRadius:22,color:C.ink,fontSize:85,letterSpacing:-4,fontWeight:700,textAlign:'center'}}>NOVIEMBRE</div></Entrance>
  <Entrance delay={22} style={{marginTop:42,fontSize:43,lineHeight:1.25}}>Y dinos <span style={{fontWeight:700,color:C.lime}}>su edad.</span></Entrance>
  <Entrance delay={32} style={{marginTop:45,display:'flex',gap:14,alignItems:'center',fontSize:24,color:C.muted}}><span style={{width:9,height:9,background:C.lime,borderRadius:10,opacity:interpolate(f,[32,45],[0,1],ease)}}/>Información y orientación para el registro.</Entrance>
 </div><Footer step="→" label="NUEVO CICLO · LUNES 26"/></AbsoluteFill>;
};
