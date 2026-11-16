import {AbsoluteFill,Composition,Sequence,staticFile,useCurrentFrame,useVideoConfig,interpolate} from 'remotion';
import {Audio} from '@remotion/media';
import {Captions} from './Captions';
import {Calendar,CallToAction,Familiar,FirstDay,Retry,Speaker,Unknown} from './Scenes';
import {C,ease} from './Design';

const Music=()=>{
 const {fps}=useVideoConfig();
 return <Audio name="Base instrumental original" src={staticFile('music.wav')} premountFor={fps} volume={(frame)=>{
  const speaking=frame<63||(frame>=144&&frame<300)||(frame>=375&&frame<540)||(frame>=615&&frame<753)||(frame>=840&&frame<1074);
  return (speaking?.15:.35)*Math.min(interpolate(frame,[0,.35*fps],[0,1],ease),interpolate(frame,[43.8*fps,45*fps],[1,0],ease));
 }}/>;
};

export const Noviembre=()=>{
 const {fps}=useVideoConfig();const f=useCurrentFrame();
 return <AbsoluteFill style={{fontFamily:'Editorial, sans-serif',color:C.paper,background:C.ink}}>
  <style>{`@font-face{font-family:Editorial;src:url('${staticFile('fonts/Regular.ttf')}');font-weight:400;}@font-face{font-family:Editorial;src:url('${staticFile('fonts/Bold.ttf')}');font-weight:700;}*{box-sizing:border-box;}`}</style>
  <Music/>
  <Sequence name="01 · Todo deportista tuvo un primer día" from={0} trimBefore={1.6*fps} durationInFrames={63} premountFor={fps}>
   <Speaker chapter="TODO DEPORTISTA" headline={'TUVO UN\nPRIMER DÍA.'} sourceStart={1.6} sourceEnd={3.7}/>
   <Captions captions={[
    {text:'Todo deportista',startMs:1650,endMs:2510,timestampMs:null,confidence:null},
    {text:'tuvo un primer día.',startMs:2510,endMs:3660,timestampMs:null,confidence:null},
   ]}/>
  </Sequence>
  <Sequence name="Gráfico · Nadie empieza conociendo todo" from={63} durationInFrames={81} premountFor={fps}><FirstDay/></Sequence>
  <Sequence name="02 · Un grupo y una dinámica nuevos" from={144} trimBefore={4*fps} durationInFrames={156} premountFor={fps}>
   <Speaker chapter="01 / LO NUEVO" sourceStart={4} sourceEnd={9.2}/>
   <Captions captions={[
    {text:'Un día en el que',startMs:4100,endMs:5130,timestampMs:null,confidence:null},
    {text:'no conocía el grupo,',startMs:5130,endMs:6840,timestampMs:null,confidence:null},
    {text:'la dinámica',startMs:6840,endMs:7720,timestampMs:null,confidence:null},
    {text:'ni lo que iba a pasar.',startMs:7720,endMs:9160,timestampMs:null,confidence:null},
   ]}/>
  </Sequence>
  <Sequence name="Gráfico · Las preguntas del primer día" from={300} durationInFrames={75} premountFor={fps}><Unknown/></Sequence>
  <Sequence name="03 · Ejercicio, error, nuevo intento" from={375} trimBefore={10.1*fps} durationInFrames={165} premountFor={fps}>
   <Speaker chapter="02 / VOLVER A INTENTAR" sourceStart={10.1} sourceEnd={15.6}/>
   <Captions captions={[
    {text:'Después llegó',startMs:10250,endMs:10730,timestampMs:null,confidence:null},
    {text:'el primer ejercicio,',startMs:10730,endMs:11930,timestampMs:null,confidence:null},
    {text:'el primer error',startMs:12080,endMs:13150,timestampMs:null,confidence:null},
    {text:'y también',startMs:13150,endMs:13760,timestampMs:null,confidence:null},
    {text:'el primer intento de nuevo.',startMs:13760,endMs:15520,timestampMs:null,confidence:null},
   ]}/>
  </Sequence>
  <Sequence name="Gráfico · Intentar y volver a intentar" from={540} durationInFrames={75} premountFor={fps}><Retry/></Sequence>
  <Sequence name="04 · Lo nuevo empieza a ser familiar" from={615} trimBefore={16.2*fps} durationInFrames={138} premountFor={fps}>
   <Speaker chapter="03 / POCO A POCO" sourceStart={16.2} sourceEnd={20.8}/>
   <Captions captions={[
    {text:'Y poco a poco,',startMs:16340,endMs:17350,timestampMs:null,confidence:null},
    {text:'ese lugar nuevo',startMs:17350,endMs:18500,timestampMs:null,confidence:null},
    {text:'empezó a sentirse',startMs:18500,endMs:19600,timestampMs:null,confidence:null},
    {text:'más conocido.',startMs:19600,endMs:20750,timestampMs:null,confidence:null},
   ]}/>
  </Sequence>
  <Sequence name="Gráfico · Lo nuevo se vuelve familiar" from={753} durationInFrames={87} premountFor={fps}><Familiar/></Sequence>
  <Sequence name="05 · Nuevo ciclo y consulta NOVIEMBRE" from={840} trimBefore={22.1*fps} durationInFrames={234} premountFor={fps}>
   <Speaker chapter="NUEVO CICLO" headline="LUNES 26" sourceStart={22.1} sourceEnd={29.9}/>
   <Captions captions={[
    {text:'El nuevo ciclo',startMs:22210,endMs:22950,timestampMs:null,confidence:null},
    {text:'empieza el lunes 26.',startMs:22950,endMs:24350,timestampMs:null,confidence:null},
    {text:'Si quieres orientarte antes,',startMs:25100,endMs:27200,timestampMs:null,confidence:null},
    {text:'escríbenos NOVIEMBRE',startMs:27580,endMs:28520,timestampMs:null,confidence:null},
    {text:'y dinos su edad.',startMs:28520,endMs:29800,timestampMs:null,confidence:null},
   ]}/>
  </Sequence>
  <Sequence name="Calendario · Inicio del nuevo ciclo" from={1074} durationInFrames={126} premountFor={fps}><Calendar/></Sequence>
  <Sequence name="Cierre · NOVIEMBRE + edad" from={1200} durationInFrames={150} premountFor={fps}><CallToAction/></Sequence>
  <div style={{position:'absolute',left:90,right:145,bottom:185,height:3,background:'rgba(200,224,189,.17)',borderRadius:5}}><div style={{height:3,width:`${f/1349*100}%`,background:C.lime,borderRadius:5}}/></div>
 </AbsoluteFill>;
};

export const MyComposition=()=> <Composition id="Noviembre45" component={Noviembre} durationInFrames={1350} fps={30} width={1080} height={1920}/>;
