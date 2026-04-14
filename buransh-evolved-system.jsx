import { useState, useEffect } from "react";

const T = {
  ivory:"#F5EDD8", parchment:"#EDE3C8", linen:"#E0D0B0",
  crimson:"#C4392B", crimsonD:"#A02E20", gold:"#C4A030",
  umber:"#7A4E1E", ink:"#18100A", muted:"#9C8868",
  pale:"#A89878", border:"#D8C8A8", borderD:"#C0A880", green:"#3D5C3A",
  ease:"cubic-bezier(0.76,0,0.24,1)",
  display:"'Cormorant Garamond', serif", body:"'EB Garamond', serif",
};

const LOCKED = [
  { label:"Tagline",       value:"Inherited, not manufactured." },
  { label:"Logo",          value:"Lotus mark · Crimson #C4392B · Refine existing" },
  { label:"Photography",   value:"Editorial Still · Cool · Clinical · Precise" },
  { label:"Motion",        value:"Precise · 400–600ms · ease-in-out quart" },
  { label:"Navigation",    value:"Fullscreen Overlay · Hamburger trigger" },
  { label:"Bottle label",  value:"EB Garamond Regular + Italic mix" },
  { label:"Colour anchor", value:"Crimson #C4392B from lotus logo" },
  { label:"Aesthetic",     value:"Wellness Oracle · Warm Ivory + Crimson + Gold" },
];

const ROUTES = [
  { path:"/",           label:"Home",       sub:"The world of BURANSH" },
  { path:"/elixir",     label:"Elixir",     sub:"Product · Pairings · Order · Gifting" },
  { path:"/about",      label:"About",      sub:"Aatrey · Aatmanirbhar · Women · Film" },
  { path:"/staycation", label:"Staycation", sub:"Uttarakhand · Wilderness · Booking" },
  { path:"/more",       label:"More",       sub:"Omakase · Coming soon · Compliance" },
];

function Grain() {
  return (
    <div style={{
      position:"absolute",inset:0,pointerEvents:"none",zIndex:1,
      backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.80' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.045'/%3E%3C/svg%3E")`,
      backgroundSize:"200px 200px",mixBlendMode:"multiply",
    }}/>
  );
}

function Orn({ color=T.border, w=120 }) {
  return (
    <svg height="12" width={w} viewBox={`0 0 ${w} 12`} style={{display:"block"}}>
      <line x1="0" y1="6" x2={w} y2="6" stroke={color} strokeWidth="0.6"/>
      <circle cx={w/2} cy="6" r="2" fill="none" stroke={color} strokeWidth="0.6"/>
      <circle cx={w/2} cy="6" r="0.8" fill={T.gold}/>
      <line x1={w/2-18} y1="6" x2={w/2-7} y2="6" stroke={T.gold} strokeWidth="0.5" opacity="0.6"/>
      <line x1={w/2+7} y1="6" x2={w/2+18} y2="6" stroke={T.gold} strokeWidth="0.5" opacity="0.6"/>
    </svg>
  );
}

function Lotus({ size=32, color=T.crimson }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <path d="M40 14C40 14 28 8 20 14C14 18 14 28 20 34C26 30 34 26 40 22C46 26 54 30 60 34C66 28 66 18 60 14C52 8 40 14 40 14Z" fill={color}/>
      <path d="M40 22C34 26 26 30 20 34C20 34 24 52 40 60C56 52 60 34 60 34C54 30 46 26 40 22Z" fill={color}/>
      <path d="M40 60 L36 68 L40 72 L44 68 Z" fill={color}/>
      <line x1="40" y1="22" x2="40" y2="60" stroke="white" strokeWidth="1.2" opacity="0.3"/>
      <line x1="28" y1="36" x2="40" y2="30" stroke="white" strokeWidth="0.8" opacity="0.2"/>
      <line x1="52" y1="36" x2="40" y2="30" stroke="white" strokeWidth="0.8" opacity="0.2"/>
    </svg>
  );
}

function Btn({ children, fill=false, onClick }) {
  const [h,setH] = useState(false);
  return (
    <button onClick={onClick} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} style={{
      background: fill ? (h ? T.crimsonD : T.crimson) : "transparent",
      border: fill ? "none" : `1px solid ${h ? T.crimson : T.borderD}`,
      color: fill ? T.ivory : (h ? T.crimson : T.ink),
      cursor:"pointer", padding:"13px 28px",
      fontFamily:T.body, fontSize:"11px",
      letterSpacing: h ? "3.5px" : "2.5px",
      textTransform:"uppercase",
      transition:`all 400ms ${T.ease}`,
    }}>{children}</button>
  );
}

function FullscreenNav({ open, onClose }) {
  const [hov,setHov] = useState(null);
  const [mt,setMt] = useState(false);
  useEffect(()=>{ if(open){const t=setTimeout(()=>setMt(true),10);return()=>clearTimeout(t);} else setMt(false); },[open]);
  if(!open&&!mt) return null;
  return (
    <div onClick={onClose} style={{
      position:"fixed",inset:0,zIndex:200,background:T.ink,
      opacity:mt&&open?1:0, transition:`opacity 500ms ${T.ease}`,
      display:"flex", pointerEvents:open?"auto":"none",
    }}>
      <Grain/>
      <div onClick={e=>e.stopPropagation()} style={{
        flex:1,display:"flex",flexDirection:"column",justifyContent:"center",
        padding:"80px clamp(32px,6vw,80px)",position:"relative",zIndex:2,
      }}>
        <div style={{marginBottom:"44px",display:"flex",alignItems:"center",gap:"12px"}}>
          <Lotus size={18} color={T.crimson}/>
          <p style={{color:T.crimson,fontFamily:"sans-serif",fontSize:"8px",letterSpacing:"4px",textTransform:"uppercase"}}>AATREY ELIXIR</p>
        </div>
        <nav>
          {ROUTES.map((r,i)=>(
            <div key={r.path} onMouseEnter={()=>setHov(i)} onMouseLeave={()=>setHov(null)} onClick={onClose} style={{
              cursor:"pointer",padding:"11px 0",
              borderBottom:`1px solid ${T.umber}25`,
              opacity:mt&&open?1:0,
              transform:mt&&open?"translateX(0)":"translateX(-20px)",
              transition:`opacity 500ms ${T.ease} ${i*65}ms, transform 500ms ${T.ease} ${i*65}ms`,
              display:"flex",alignItems:"baseline",gap:"18px",
            }}>
              <span style={{
                fontFamily:T.body, fontSize:"clamp(28px,5vw,52px)",
                fontWeight:hov===i?400:300, fontStyle:hov===i?"normal":"italic",
                color:hov===i?T.crimson:T.ivory, lineHeight:1, letterSpacing:"-0.5px",
                transition:`color 400ms ${T.ease}`,
              }}>{r.label}</span>
              <span style={{
                fontFamily:T.body,fontSize:"12px",fontStyle:"italic",color:T.muted,
                opacity:hov===i?1:0, transform:hov===i?"translateX(0)":"translateX(-8px)",
                transition:`all 400ms ${T.ease}`,
              }}>{r.sub}</span>
            </div>
          ))}
        </nav>
        <p style={{
          marginTop:"36px",fontFamily:T.display,fontSize:"15px",fontStyle:"italic",color:T.muted,
          opacity:mt&&open?1:0,transition:`opacity 600ms ${T.ease} 380ms`,
        }}>"Inherited, not manufactured."</p>
      </div>
      <div style={{
        width:"clamp(160px,26%,320px)",background:T.crimson,
        display:"flex",flexDirection:"column",justifyContent:"flex-end",
        padding:"40px 30px",position:"relative",overflow:"hidden",
        transform:mt&&open?"translateX(0)":"translateX(100%)",
        transition:`transform 600ms ${T.ease}`,
      }}>
        <Grain/>
        <div style={{position:"absolute",top:"-20px",right:"-15px",fontFamily:T.display,fontSize:"240px",fontWeight:700,color:T.crimsonD,lineHeight:1,opacity:0.22,userSelect:"none"}}>B</div>
        <div style={{position:"relative",zIndex:2}}>
          <Lotus size={32} color={T.ivory}/>
          <p style={{fontFamily:T.body,fontSize:"11px",fontStyle:"italic",color:T.ivory,opacity:0.6,marginTop:"14px",lineHeight:1.8}}>Himalayan Rhododendron<br/>Floral Concentrate · 750ml</p>
          <div style={{height:"1px",background:`${T.ivory}28`,margin:"14px 0"}}/>
          <button onClick={onClose} style={{
            background:"transparent",border:`1px solid ${T.ivory}45`,
            color:T.ivory,padding:"9px 18px",cursor:"pointer",
            fontFamily:"sans-serif",fontSize:"7.5px",letterSpacing:"3px",textTransform:"uppercase",width:"100%",
          }}>Close</button>
        </div>
      </div>
    </div>
  );
}

function TopBar({ onOpen, scrolled }) {
  return (
    <div style={{
      position:"fixed",top:0,left:0,right:0,zIndex:100,height:"60px",
      background:scrolled?`${T.ivory}F0`:"transparent",
      borderBottom:scrolled?`1px solid ${T.border}`:"1px solid transparent",
      backdropFilter:scrolled?"blur(12px)":"none",
      display:"flex",alignItems:"center",justifyContent:"space-between",
      padding:"0 clamp(20px,5vw,60px)",
      transition:`background 500ms ${T.ease}, border-color 500ms ${T.ease}`,
    }}>
      <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
        <Lotus size={20} color={T.crimson}/>
        <div>
          <p style={{fontFamily:T.body,fontSize:"clamp(11px,1.8vw,14px)",letterSpacing:"3px",textTransform:"uppercase",color:T.ink,lineHeight:1}}>BURANSH</p>
          <p style={{fontFamily:T.body,fontSize:"7.5px",letterSpacing:"2px",color:T.muted,fontStyle:"italic"}}>by Aatrey Elixir</p>
        </div>
      </div>
      <button onClick={onOpen} style={{background:"none",border:"none",cursor:"pointer",display:"flex",flexDirection:"column",gap:"5px",padding:"8px"}}>
        {[28,20,28].map((w,i)=>(<div key={i} style={{width:`${w}px`,height:"1px",background:T.ink}}/>))}
      </button>
    </div>
  );
}

function StatusBanner() {
  return (
    <div style={{background:T.ink,borderBottom:`2px solid ${T.crimson}`,padding:"10px clamp(20px,5vw,60px)",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"10px",position:"relative",zIndex:2}}>
      <Grain/>
      <div style={{position:"relative",zIndex:1,display:"flex",alignItems:"center",gap:"10px"}}>
        <div style={{width:"7px",height:"7px",borderRadius:"50%",background:T.crimson}}/>
        <p style={{fontFamily:T.body,fontSize:"12px",fontStyle:"italic",color:T.parchment}}>Design system locked · 8 decisions confirmed · 5-page architecture · Full blueprint in companion document</p>
      </div>
      <div style={{position:"relative",zIndex:1,display:"flex",gap:"6px",flexWrap:"wrap"}}>
        {["Wellness Oracle","Crimson + Ivory + Gold","Editorial Still","Precise Motion"].map((tag,i)=>(
          <span key={i} style={{fontFamily:"sans-serif",fontSize:"7px",letterSpacing:"1.5px",textTransform:"uppercase",color:T.gold,border:`1px solid ${T.gold}30`,padding:"2px 7px"}}>{tag}</span>
        ))}
      </div>
    </div>
  );
}

function HeroSection({ visible }) {
  return (
    <section style={{minHeight:"100vh",background:T.ivory,position:"relative",display:"flex",alignItems:"center",padding:"100px clamp(24px,8vw,120px) 80px",overflow:"hidden"}}>
      <Grain/>
      <div style={{position:"absolute",inset:0,background:`radial-gradient(ellipse 70% 60% at 75% 50%, ${T.linen} 0%, transparent 65%), radial-gradient(ellipse 40% 80% at 10% 90%, ${T.parchment} 0%, transparent 50%)`,pointerEvents:"none"}}/>
      <div style={{position:"absolute",left:"18px",top:"50%",transform:"translateY(-50%) rotate(-90deg)",transformOrigin:"center",opacity:0.18,whiteSpace:"nowrap"}}>
        <p style={{fontFamily:"sans-serif",fontSize:"7px",letterSpacing:"5px",textTransform:"uppercase",color:T.muted}}>RHODODENDRON ARBOREUM · 2500M · UTTARAKHAND · PROJECT AATMANIRBHAR</p>
      </div>
      <div style={{position:"absolute",left:"clamp(40px,6vw,80px)",top:"15%",bottom:"15%",width:"1px",background:`linear-gradient(to bottom, transparent, ${T.crimson}60, transparent)`,opacity:visible?1:0,transition:`opacity 600ms ${T.ease} 200ms`}}/>

      <div style={{position:"relative",zIndex:2,maxWidth:"720px",paddingLeft:"clamp(0px,4vw,40px)"}}>
        <div style={{display:"flex",alignItems:"center",gap:"14px",marginBottom:"30px",opacity:visible?1:0,transform:visible?"translateY(0)":"translateY(12px)",transition:`all 500ms ${T.ease} 100ms`}}>
          <div style={{width:"32px",height:"1px",background:T.crimson}}/>
          <p style={{fontFamily:"sans-serif",fontSize:"8px",letterSpacing:"4px",textTransform:"uppercase",color:T.crimson}}>AATREY ELIXIR · BURANSH</p>
        </div>

        <h1 style={{marginBottom:"8px"}}>
          <span style={{display:"block",fontFamily:T.display,fontSize:"clamp(46px,9vw,100px)",fontWeight:300,fontStyle:"italic",color:T.ink,lineHeight:0.95,letterSpacing:"-2px",opacity:visible?1:0,transform:visible?"translateY(0)":"translateY(20px)",transition:`all 500ms ${T.ease} 180ms`}}>Inherited,</span>
          <span style={{display:"block",fontFamily:T.display,fontSize:"clamp(46px,9vw,100px)",fontWeight:700,color:T.ink,lineHeight:1,letterSpacing:"-2px",opacity:visible?1:0,transform:visible?"translateY(0)":"translateY(20px)",transition:`all 500ms ${T.ease} 260ms`}}>not manufactured.</span>
        </h1>

        <div style={{margin:"26px 0",opacity:visible?1:0,transition:`opacity 500ms ${T.ease} 340ms`}}><Orn color={T.border} w={160}/></div>

        <p style={{fontFamily:T.body,fontSize:"clamp(14px,1.7vw,17px)",fontStyle:"italic",color:T.ink,lineHeight:1.85,maxWidth:"480px",opacity:visible?0.65:0,transform:visible?"translateY(0)":"translateY(12px)",transition:`all 600ms ${T.ease} 380ms`}}>
          From the Rhododendron forests of Uttarakhand. At 2,500 metres where
          the air is thin and the flowers know only the most patient hands.
          Harvested by the women of Project Aatmanirbhar. Validated by
          Asia's most trusted wellness voices.
        </p>

        <div style={{display:"flex",gap:"10px",marginTop:"32px",flexWrap:"wrap",opacity:visible?1:0,transform:visible?"translateY(0)":"translateY(12px)",transition:`all 600ms ${T.ease} 440ms`}}>
          <Btn fill>Order the Elixir</Btn>
          <Btn>Experience the Origin →</Btn>
        </div>

        <div style={{marginTop:"36px",display:"flex",alignItems:"center",gap:"12px",opacity:visible?0.45:0,transition:`opacity 600ms ${T.ease} 500ms`}}>
          <div style={{width:"20px",height:"1px",background:T.muted}}/>
          <p style={{fontFamily:T.body,fontSize:"11px",fontStyle:"italic",color:T.muted}}>Asia-endorsed · Women-led · FSSAI certified · Uttarakhand origin</p>
        </div>
      </div>

      {/* Bottle */}
      <div style={{position:"absolute",right:"clamp(24px,6vw,80px)",top:"50%",transform:`translateY(-50%) ${visible?"translateX(0)":"translateX(40px)"}`,opacity:visible?1:0,transition:`all 600ms ${T.ease} 320ms`,textAlign:"center"}}>
        <svg width="68" height="192" viewBox="0 0 68 192">
          <defs><linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor={T.umber} stopOpacity="0.5"/><stop offset="45%" stopColor={T.crimson} stopOpacity="0.72"/><stop offset="100%" stopColor={T.crimsonD} stopOpacity="0.3"/></linearGradient></defs>
          <rect x="23" y="6" width="22" height="12" rx="2" fill={T.gold} opacity="0.7"/>
          <path d="M28 18 L24 44 L17 49 L17 175 Q17 184 34 184 Q51 184 51 175 L51 49 L44 44 L40 18Z" fill="url(#bg)"/>
          <path d="M26 54 L24 158" stroke="white" strokeWidth="1.5" opacity="0.1" strokeLinecap="round"/>
          <rect x="19" y="78" width="30" height="68" rx="2" fill={T.ivory} opacity="0.16"/>
        </svg>
        <p style={{fontFamily:T.body,fontSize:"7.5px",letterSpacing:"2px",textTransform:"uppercase",color:T.muted,marginTop:"5px"}}>750 ml</p>
      </div>
    </section>
  );
}

function SecWrap({ label, title, children }) {
  return (
    <section style={{padding:"60px clamp(24px,8vw,120px)",borderBottom:`1px solid ${T.border}`,background:T.ivory}}>
      <div style={{marginBottom:"32px"}}>
        <p style={{fontFamily:"sans-serif",fontSize:"8px",letterSpacing:"4px",textTransform:"uppercase",color:T.crimson,marginBottom:"8px"}}>{label}</p>
        <h2 style={{fontFamily:T.display,fontSize:"clamp(22px,3.5vw,36px)",fontWeight:300,fontStyle:"italic",color:T.ink,letterSpacing:"-0.3px",marginBottom:"14px"}}>{title}</h2>
        <Orn color={T.border} w={80}/>
      </div>
      {children}
    </section>
  );
}

function LockedDecisions() {
  return (
    <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(210px,1fr))",gap:"2px"}}>
      {LOCKED.map((d,i)=>(
        <div key={i} style={{background:T.parchment,padding:"14px 16px",borderLeft:`3px solid ${T.crimson}`}}>
          <div style={{display:"flex",alignItems:"center",gap:"6px",marginBottom:"4px"}}>
            <svg width="9" height="11" viewBox="0 0 9 11" fill="none"><rect x="0.5" y="4" width="8" height="6.5" rx="1" stroke={T.crimson} strokeWidth="0.9"/><path d="M2 4V3C2 1.9 3.1 1 4.5 1C5.9 1 7 1.9 7 3V4" stroke={T.crimson} strokeWidth="0.9"/></svg>
            <p style={{fontFamily:"sans-serif",fontSize:"7px",letterSpacing:"2px",textTransform:"uppercase",color:T.crimson}}>LOCKED</p>
          </div>
          <p style={{fontFamily:T.body,fontSize:"10px",color:T.muted,marginBottom:"3px"}}>{d.label}</p>
          <p style={{fontFamily:T.body,fontSize:"13px",fontStyle:"italic",color:T.ink}}>{d.value}</p>
        </div>
      ))}
    </div>
  );
}

function ColourSystem() {
  const sw = [
    {hex:T.crimson, name:"Buransh Crimson", role:"Primary — Logo · CTA · Bloom", t:T.ivory},
    {hex:T.gold,    name:"Harvest Gold",    role:"Ornaments · Brand dashes · Foil", t:T.ink},
    {hex:T.ivory,   name:"Warm Ivory",      role:"All page backgrounds", t:T.ink},
    {hex:T.ink,     name:"Deep Ink",        role:"All body + display text", t:T.ivory},
    {hex:T.umber,   name:"Rich Umber",      role:"Secondary accent · Hover", t:T.ivory},
    {hex:T.green,   name:"Botanical Green", role:"Leaf details · Botanical only", t:T.ivory},
    {hex:T.parchment,name:"Parchment",      role:"Cards · Panel surfaces", t:T.ink},
    {hex:T.muted,   name:"Pale Umber",      role:"Subtext · Labels · Captions", t:T.ink},
  ];
  return (
    <div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(150px,1fr))",gap:"2px",marginBottom:"20px"}}>
        {sw.map((s,i)=>(
          <div key={i} style={{background:s.hex,padding:"18px 14px 14px",minHeight:"80px",display:"flex",flexDirection:"column",justifyContent:"flex-end"}}>
            <p style={{fontFamily:T.body,fontSize:"12px",color:s.t,marginBottom:"2px"}}>{s.name}</p>
            <p style={{fontFamily:"sans-serif",fontSize:"6.5px",color:s.t,opacity:0.5,marginBottom:"3px"}}>{s.hex.toUpperCase()}</p>
            <p style={{fontFamily:T.body,fontSize:"9.5px",fontStyle:"italic",color:s.t,opacity:0.5,lineHeight:1.3}}>{s.role}</p>
          </div>
        ))}
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(240px,1fr))",gap:"2px"}}>
        {[["Crimson appears once per screen","Never two crimson elements competing. One anchor. Maximum restraint."],["Gold is ornamental only","Never gold body text. Dashes, dividers, stamp details, foil on physical packaging."],["Ivory replaces all white","#F5EDD8 everywhere. Pure white reads e-commerce. Ivory reads heirloom."]].map(([r,d],i)=>(
          <div key={i} style={{background:T.parchment,padding:"16px 18px",borderLeft:`3px solid ${T.crimson}`}}>
            <p style={{fontFamily:T.body,fontSize:"13px",color:T.ink,fontWeight:400,marginBottom:"4px"}}>{r}</p>
            <p style={{fontFamily:T.body,fontSize:"11.5px",fontStyle:"italic",color:T.muted,lineHeight:1.5}}>{d}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function TypographySystem() {
  const rows = [
    {tag:"Display · Cormorant Garamond 300 Italic",size:"clamp(44px,7.5vw,80px)",w:300,it:true,font:T.display,text:"Inherited,"},
    {tag:"Hero · Cormorant Garamond 700",size:"clamp(44px,7.5vw,80px)",w:700,it:false,font:T.display,text:"not manufactured."},
    {tag:"H2 · Cormorant Garamond 300",size:"clamp(24px,3.2vw,38px)",w:300,it:false,font:T.display,text:"Asia's most trusted wellness voices."},
    {tag:"H3 · EB Garamond 400 Italic",size:"clamp(17px,2vw,22px)",w:400,it:true,font:T.body,text:"Harvested at 2,500 metres above sea level."},
    {tag:"Body · EB Garamond 400",size:"clamp(14px,1.4vw,16px)",w:400,it:false,font:T.body,text:"From the Rhododendron forests of Uttarakhand, where the air is thin and the flowers know only the most patient hands."},
    {tag:"Bottle Label · EB Garamond Reg + Italic",size:"13px",w:400,it:false,font:T.body,text:"BURANSH · Himalayan Rhododendron · Floral Concentrate · 750ml"},
    {tag:"System labels — sans-serif only context",size:"9px",w:400,it:false,font:"sans-serif",text:"TRACKING · FORM FIELDS · METADATA ONLY",color:T.muted},
  ];
  return (
    <div>
      {rows.map((r,i)=>(
        <div key={i} style={{padding:"16px 0",borderBottom:`1px solid ${T.border}50`,display:"grid",gridTemplateColumns:"190px 1fr",gap:"18px",alignItems:"start"}}>
          <p style={{fontFamily:"sans-serif",fontSize:"7px",letterSpacing:"1px",color:T.pale,textTransform:"uppercase",paddingTop:"4px",lineHeight:1.5}}>{r.tag}</p>
          <p style={{fontFamily:r.font,fontSize:r.size,fontWeight:r.w,fontStyle:r.it?"italic":"normal",color:r.color||T.ink,lineHeight:1.1,letterSpacing:parseInt(r.size)>40?"-1px":"normal"}}>{r.text}</p>
        </div>
      ))}
    </div>
  );
}

function MotionSpecs() {
  const [run,setRun] = useState(false);
  return (
    <div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))",gap:"2px",marginBottom:"24px"}}>
        {[
          {label:"Easing",value:"ease-in-out quart",code:"cubic-bezier(0.76, 0, 0.24, 1)",note:"Symmetric precision. Fast in, equally fast out."},
          {label:"Fast",value:"400ms",code:"Hover · Colour transitions",note:"Instant enough to feel responsive."},
          {label:"Mid",value:"500ms",code:"Panel reveals · Section entrances",note:"Primary tempo of the site."},
          {label:"Slow",value:"600ms",code:"Full-screen moments · Hero",note:"Reserved for page-level transitions only."},
        ].map((m,i)=>(
          <div key={i} style={{background:T.parchment,padding:"22px 18px"}}>
            <p style={{fontFamily:"sans-serif",fontSize:"8px",letterSpacing:"3px",textTransform:"uppercase",color:T.crimson,marginBottom:"6px"}}>{m.label}</p>
            <p style={{fontFamily:T.display,fontSize:"24px",color:T.ink,fontStyle:"italic",marginBottom:"5px"}}>{m.value}</p>
            <p style={{fontFamily:"sans-serif",fontSize:"8.5px",color:T.muted,marginBottom:"5px"}}>{m.code}</p>
            <p style={{fontFamily:T.body,fontSize:"11.5px",fontStyle:"italic",color:T.muted}}>{m.note}</p>
          </div>
        ))}
      </div>
      <div style={{background:T.parchment,padding:"24px",display:"flex",flexDirection:"column",alignItems:"flex-start",gap:"14px"}}>
        <p style={{fontFamily:"sans-serif",fontSize:"8px",letterSpacing:"3px",textTransform:"uppercase",color:T.muted}}>Live demo · 500ms · 100ms stagger</p>
        <button onClick={()=>{setRun(false);setTimeout(()=>setRun(true),40);}} style={{background:T.crimson,border:"none",color:T.ivory,cursor:"pointer",padding:"9px 22px",fontFamily:T.body,fontSize:"11px",letterSpacing:"2px",textTransform:"uppercase",transition:`background 400ms ${T.ease}`}} onMouseEnter={e=>e.currentTarget.style.background=T.crimsonD} onMouseLeave={e=>e.currentTarget.style.background=T.crimson}>Trigger</button>
        <div style={{display:"flex",gap:"10px",flexWrap:"wrap"}}>
          {["Inherited,","not","manufactured."].map((w,i)=>(
            <span key={i} style={{fontFamily:T.display,fontSize:"clamp(20px,3.5vw,36px)",fontStyle:i===0?"italic":"normal",fontWeight:i===2?700:300,color:i===2?T.crimson:T.ink,opacity:run?1:0,transform:run?"translateY(0)":"translateY(16px)",transition:`all 500ms cubic-bezier(0.76,0,0.24,1) ${i*100}ms`}}>{w}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ComponentLibrary({ onNavOpen }) {
  return (
    <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(250px,1fr))",gap:"2px"}}>

      {/* Buttons */}
      <div style={{background:T.parchment,padding:"22px 18px"}}>
        <p style={{fontFamily:"sans-serif",fontSize:"8px",letterSpacing:"3px",textTransform:"uppercase",color:T.muted,marginBottom:"14px"}}>Buttons</p>
        <div style={{display:"flex",flexDirection:"column",gap:"8px",alignItems:"flex-start"}}>
          <Btn fill>Order the Elixir</Btn>
          <Btn>Experience the Origin →</Btn>
          <button style={{background:"transparent",border:"none",color:T.crimson,cursor:"pointer",fontFamily:T.body,fontSize:"12px",fontStyle:"italic",padding:0,textDecoration:"underline",textDecorationColor:`${T.crimson}55`}}>Read the story ↗</button>
        </div>
      </div>

      {/* Testimonial */}
      <div style={{background:T.ink,padding:"24px 20px",position:"relative",overflow:"hidden"}}>
        <Grain/>
        <div style={{position:"relative",zIndex:2}}>
          <p style={{fontFamily:"sans-serif",fontSize:"8px",letterSpacing:"3px",textTransform:"uppercase",color:T.crimson,marginBottom:"10px"}}>Asia Testimonial Block</p>
          <p style={{fontFamily:T.display,fontSize:"clamp(15px,2.2vw,18px)",fontStyle:"italic",color:T.ivory,lineHeight:1.55,marginBottom:"12px"}}>"The most extraordinary floral concentrate I have encountered in twenty years of wellness practice."</p>
          <div style={{height:"1px",background:`${T.umber}45`,marginBottom:"8px"}}/>
          <p style={{fontFamily:T.body,fontSize:"10.5px",color:T.muted}}>Dr. — · Wellness Authority, Singapore</p>
        </div>
      </div>

      {/* Bottle label */}
      <div style={{background:T.ivory,padding:"22px 18px",border:`1px solid ${T.border}`}}>
        <p style={{fontFamily:"sans-serif",fontSize:"8px",letterSpacing:"3px",textTransform:"uppercase",color:T.muted,marginBottom:"14px"}}>Bottle Label · EB Garamond</p>
        <div style={{border:`1px solid ${T.gold}`,padding:"16px",textAlign:"center"}}>
          <p style={{fontFamily:"sans-serif",fontSize:"8.5px",letterSpacing:"4px",color:T.ink,marginBottom:"2px"}}>AATREY</p>
          <p style={{fontFamily:"sans-serif",fontSize:"7.5px",letterSpacing:"3px",color:T.ink,marginBottom:"9px"}}>— ELIXIR —</p>
          <p style={{fontFamily:T.body,fontSize:"19px",color:T.ink,letterSpacing:"1px",marginBottom:"3px"}}>BURANSH</p>
          <p style={{fontFamily:T.body,fontSize:"11px",fontStyle:"italic",color:T.muted,marginBottom:"2px"}}>Himalayan Rhododendron</p>
          <p style={{fontFamily:T.body,fontSize:"10px",fontStyle:"italic",color:T.pale,marginBottom:"9px"}}>(Floral Concentrate)</p>
          <div style={{height:"1px",background:`${T.gold}45`,marginBottom:"7px"}}/>
          <p style={{fontFamily:T.body,fontSize:"9.5px",fontStyle:"italic",color:T.muted}}>Crafted in the Himalayas</p>
          <p style={{fontFamily:T.body,fontSize:"9.5px",color:T.ink,marginTop:"3px"}}>750 ml</p>
        </div>
      </div>

      {/* Photography rules */}
      <div style={{background:T.linen,padding:"22px 18px"}}>
        <p style={{fontFamily:"sans-serif",fontSize:"8px",letterSpacing:"3px",textTransform:"uppercase",color:T.muted,marginBottom:"14px"}}>Editorial Still — Photography Rules</p>
        {["Bottle on dark Himalayan slate. Never white","Single cool overhead light. Directional. Precise","Deep shadow falling left at 30°. Not softened","Bottle as object of study — no hands, no lifestyle","Label fully legible front-on. Gold text crisp","Elixir glows deep burgundy through amber glass"].map((r,i)=>(
          <div key={i} style={{display:"flex",gap:"8px",marginBottom:"7px"}}>
            <span style={{color:T.crimson,fontFamily:T.display,fontSize:"13px",flexShrink:0}}>—</span>
            <p style={{fontFamily:T.body,fontSize:"11.5px",color:T.ink,opacity:0.72,lineHeight:1.4}}>{r}</p>
          </div>
        ))}
      </div>

      {/* 5-page architecture */}
      <div style={{background:T.parchment,padding:"22px 18px"}}>
        <p style={{fontFamily:"sans-serif",fontSize:"8px",letterSpacing:"3px",textTransform:"uppercase",color:T.muted,marginBottom:"14px"}}>5-Page Architecture</p>
        {ROUTES.map((r,i)=>(
          <div key={i} style={{display:"flex",gap:"12px",marginBottom:"9px",alignItems:"flex-start"}}>
            <span style={{fontFamily:"sans-serif",fontSize:"7.5px",color:T.crimson,letterSpacing:"1px",minWidth:"70px",flexShrink:0,paddingTop:"2px"}}>{r.path}</span>
            <div>
              <p style={{fontFamily:T.body,fontSize:"12.5px",fontStyle:"italic",color:T.ink,marginBottom:"1px"}}>{r.label}</p>
              <p style={{fontFamily:T.body,fontSize:"10.5px",color:T.muted}}>{r.sub}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Nav preview */}
      <div style={{background:T.parchment,padding:"22px 18px"}}>
        <p style={{fontFamily:"sans-serif",fontSize:"8px",letterSpacing:"3px",textTransform:"uppercase",color:T.muted,marginBottom:"12px"}}>Fullscreen Nav Overlay</p>
        <p style={{fontFamily:T.body,fontSize:"11.5px",fontStyle:"italic",color:T.muted,lineHeight:1.6,marginBottom:"12px"}}>Hamburger (3 staggered lines) triggers full dark overlay. Large EB Garamond italic route names. Hover reveals sub-label. Crimson right panel with lotus mark.</p>
        <button onClick={onNavOpen} style={{background:T.ink,border:"none",color:T.ivory,cursor:"pointer",padding:"9px 18px",fontFamily:T.body,fontSize:"11px",letterSpacing:"2px",textTransform:"uppercase"}}>Preview nav →</button>
      </div>

      {/* Brand extensions */}
      <div style={{background:T.ink,padding:"22px 18px",position:"relative",overflow:"hidden"}}>
        <Grain/>
        <div style={{position:"relative",zIndex:2}}>
          <p style={{fontFamily:"sans-serif",fontSize:"8px",letterSpacing:"3px",textTransform:"uppercase",color:T.gold,marginBottom:"14px"}}>Brand Extensions</p>
          {[
            {label:"Project Aatmanirbhar",desc:"Women-led harvest initiative · Real names · Real elevation · The brand's soul"},
            {label:"Omakase Experience",desc:"Private tasting · 5–8 guests · 4 preparations · Founder narrated · /more"},
            {label:"BURANSH Jam",desc:"Coming soon · Rhododendron preserve · No pectin · /more"},
            {label:"BURANSH Tea",desc:"Coming soon · Dried petal infusion · Caffeine-free · /more"},
          ].map((item,i)=>(
            <div key={i} style={{marginBottom:"12px",paddingLeft:"10px",borderLeft:`1px solid ${T.gold}35`}}>
              <p style={{fontFamily:T.body,fontSize:"12.5px",fontStyle:"italic",color:T.ivory,marginBottom:"2px"}}>{item.label}</p>
              <p style={{fontFamily:T.body,fontSize:"10.5px",color:T.muted}}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Compliance */}
      <div style={{background:T.ivory,padding:"22px 18px",border:`1px solid ${T.border}`}}>
        <p style={{fontFamily:"sans-serif",fontSize:"8px",letterSpacing:"3px",textTransform:"uppercase",color:T.muted,marginBottom:"14px"}}>Compliance + Trust Layer</p>
        <div style={{display:"flex",flexWrap:"wrap",gap:"6px",marginBottom:"12px"}}>
          {["FSSAI","Cold Pressed","Single Harvest","No Additives","Made in India","Uttarakhand Origin"].map((s,i)=>(
            <div key={i} style={{border:`1px solid ${T.green}55`,padding:"5px 8px",display:"flex",alignItems:"center",gap:"5px"}}>
              <div style={{width:"5px",height:"5px",borderRadius:"50%",background:T.green}}/>
              <p style={{fontFamily:"sans-serif",fontSize:"7px",letterSpacing:"1.5px",textTransform:"uppercase",color:T.green}}>{s}</p>
            </div>
          ))}
        </div>
        <p style={{fontFamily:T.body,fontSize:"10.5px",fontStyle:"italic",color:T.pale,lineHeight:1.5}}>Rendered as SVG circular stamp marks (wax seal aesthetic, animated rotation on scroll). Not generic shield icons.</p>
      </div>

    </div>
  );
}

export default function BuranshEvolvedSystem() {
  const [navOpen,setNavOpen] = useState(false);
  const [scrolled,setScrolled] = useState(false);
  const [heroV,setHeroV] = useState(false);

  useEffect(()=>{
    const s = document.createElement("style");
    s.textContent=`
      @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600&family=EB+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&display=swap');
      *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
      body{background:#F5EDD8;}
      button{font-family:inherit;}
      ::-webkit-scrollbar{width:3px;}
      ::-webkit-scrollbar-thumb{background:#C4392B;}
    `;
    document.head.appendChild(s);
    const onScroll=()=>setScrolled(window.scrollY>40);
    window.addEventListener("scroll",onScroll);
    setTimeout(()=>setHeroV(true),80);
    return()=>{ try{document.head.removeChild(s);}catch(e){} window.removeEventListener("scroll",onScroll); };
  },[]);

  return (
    <div style={{background:T.ivory,minHeight:"100vh"}}>
      <TopBar onOpen={()=>setNavOpen(true)} scrolled={scrolled}/>
      <FullscreenNav open={navOpen} onClose={()=>setNavOpen(false)}/>
      <StatusBanner/>
      <HeroSection visible={heroV}/>

      <SecWrap label="DESIGN SYSTEM · DECISIONS" title="All 8 Decisions Locked">
        <LockedDecisions/>
      </SecWrap>
      <SecWrap label="DESIGN SYSTEM · COLOUR" title="Colour Architecture">
        <ColourSystem/>
      </SecWrap>
      <SecWrap label="DESIGN SYSTEM · TYPE" title="Typography Hierarchy">
        <TypographySystem/>
      </SecWrap>
      <SecWrap label="DESIGN SYSTEM · MOTION" title="Motion Language">
        <MotionSpecs/>
      </SecWrap>
      <SecWrap label="DESIGN SYSTEM · COMPONENTS" title="Component Library">
        <ComponentLibrary onNavOpen={()=>setNavOpen(true)}/>
      </SecWrap>

      <div style={{padding:"36px clamp(24px,8vw,120px)",background:T.ink,position:"relative",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"14px"}}>
        <Grain/>
        <div style={{position:"relative",zIndex:2,display:"flex",alignItems:"center",gap:"10px"}}>
          <Lotus size={22} color={T.crimson}/>
          <div>
            <p style={{fontFamily:T.body,fontSize:"12px",letterSpacing:"2px",color:T.ivory,textTransform:"uppercase"}}>BURANSH</p>
            <p style={{fontFamily:T.body,fontSize:"9.5px",fontStyle:"italic",color:T.muted}}>Evolved Design System v2.0 · All decisions locked · 5-page architecture</p>
          </div>
        </div>
        <div style={{position:"relative",zIndex:2,textAlign:"right"}}>
          <Orn color={`${T.umber}55`} w={90}/>
          <p style={{fontFamily:T.body,fontSize:"11px",fontStyle:"italic",color:T.muted,marginTop:"6px"}}>"Inherited, not manufactured."</p>
        </div>
      </div>
    </div>
  );
}
