const A = (name) => `./assets/${name}`;

const people = {
  uyen: {
    name: "Uyên", intro: A("uyen-intro-hi.png"), homeBase: A("uyen-home-empty-hi.png"),
    yourJourney: A("uyen-your-journey-hi.png"), homeComplete: A("uyen-home-complete-hi.png"),
    introInstruction: A("intro-instruction.png"), homeInstruction: A("home-instruction.png"),
    objects: [
      { id:"uniform", label:"Đồng phục", revealedLayer:A("uniform-revealed-layer.png"), detail:A("detail-uniform-hi.png"), position:{left:4.4,top:23.8,width:17.2,height:23} },
      { id:"sketchbook", label:"Sổ vẽ", revealedLayer:A("sketchbook-revealed-layer.png"), detail:A("detail-sketchbook-hi.png"), position:{left:13.7,top:51.9,width:15,height:22.5} },
      { id:"photobooth", label:"Photobooth", revealedLayer:A("photobooth-revealed-layer.png"), detail:A("detail-photobooth-hi.png"), position:{left:44.7,top:38.6,width:14.5,height:23} },
      { id:"matcha", label:"Matcha", revealedLayer:A("matcha-revealed-layer.png"), detail:A("detail-matcha-hi.png"), position:{left:53.7,top:64.8,width:15.4,height:17.4} },
      { id:"dogCollar", label:"Vòng cổ", revealedLayer:A("collar-revealed-layer.png"), detail:A("detail-collar-hi.png"), position:{left:80.8,top:52.2,width:15.8,height:20} }
    ]
  },
  an: {
    name: "An", intro: A("an-intro.png"), homeBase: A("an-home-empty.png"),
    yourJourney: A("an-your-journey.png"), homeComplete: A("an-home-complete.png"),
    objects: [
      { id:"adhocism", label:"Adhocism", revealedLayer:A("an-adhocism-revealed-layer.png"), detail:A("detail-adhocism.png"), position:{left:2.0,top:27.0,width:20.5,height:25.5} },
      { id:"toilet", label:"Bồn cầu", revealedLayer:A("an-toilet-revealed-layer.png"), detail:A("detail-toilet.png"), position:{left:18.0,top:44.0,width:18.0,height:29.5} },
      { id:"pen", label:"Bút máy", revealedLayer:A("an-pen-revealed-layer.png"), detail:A("detail-pen.png"), position:{left:41.0,top:38.0,width:17.0,height:27.0} },
      { id:"motorbike", label:"Xe máy", revealedLayer:A("an-motorbike-revealed-layer.png"), detail:A("detail-motorbike.png"), position:{left:60.0,top:57.0,width:21.0,height:24.0} },
      { id:"jewelry", label:"Trang sức", revealedLayer:A("an-jewelry-revealed-layer.png"), detail:A("detail-jewelry.png"), position:{left:81.0,top:47.0,width:17.5,height:23.5} }
    ]
  },
  nhu: {
    name: "Như", intro: A("nhu-intro.png"), homeBase: A("nhu-home-empty.png"),
    yourJourney: A("nhu-your-journey.png"), homeComplete: A("nhu-home-complete.png"),
    objects: [
      { id:"camera", label:"Máy ảnh", revealedLayer:A("nhu-camera-revealed-layer.png"), detail:A("detail-nhu-camera.png"), position:{left:4.5,top:34.0,width:17.0,height:18.0} },
      { id:"cat", label:"Mèo", revealedLayer:A("nhu-cat-revealed-layer.png"), detail:A("detail-nhu-cat.png"), position:{left:13.5,top:53.0,width:17.0,height:25.0} },
      { id:"bag", label:"Túi Mini", revealedLayer:A("nhu-bag-revealed-layer.png"), detail:A("detail-nhu-bag.png"), position:{left:42.5,top:43.0,width:18.0,height:23.0} },
      { id:"video", label:"Video Call", revealedLayer:A("nhu-video-revealed-layer.png"), detail:A("detail-nhu-video.png"), position:{left:62.0,top:61.0,width:18.0,height:23.0} },
      { id:"lipstick", label:"Thỏi son", revealedLayer:A("nhu-lipstick-revealed-layer.png"), detail:A("detail-nhu-lipstick.png"), position:{left:86.0,top:43.0,width:10.0,height:28.0} }
    ]
  },
  vy: {
    name: "Vy", intro: A("vy-intro.png"), homeBase: A("vy-home-empty.png"),
    yourJourney: A("vy-your-journey.png"), homeComplete: A("vy-home-complete.png"),
    objects: [
      { id:"album", label:"Album", revealedLayer:A("vy-album-revealed-layer.png"), detail:A("detail-vy-album.png"), position:{left:2.0,top:27.0,width:20.0,height:24.0} },
      { id:"bowl", label:"Cái chén", revealedLayer:A("vy-bowl-revealed-layer.png"), detail:A("detail-vy-bowl.png"), position:{left:8.0,top:49.0,width:25.0,height:29.0} },
      { id:"teddy", label:"Gấu bông", revealedLayer:A("vy-teddy-revealed-layer.png"), detail:A("detail-vy-teddy.png"), position:{left:47.0,top:35.0,width:18.0,height:31.0} },
      { id:"key", label:"Chìa khoá", revealedLayer:A("vy-key-revealed-layer.png"), detail:A("detail-vy-key.png"), position:{left:65.0,top:51.0,width:17.0,height:30.0} },
      { id:"envelope", label:"Bao lì xì", revealedLayer:A("vy-envelope-revealed-layer.png"), detail:A("detail-vy-envelope.png"), position:{left:82.0,top:35.0,width:17.0,height:35.0} }
    ]
  },};

const englishAn = {
  intro: A("an-intro-en.webp"),
  homeBase: A("an-home-empty-en.webp"),
  yourJourney: A("an-your-journey-en.webp"),
  homeComplete: A("an-home-complete-en.png"),
  objects: {
    adhocism: A("detail-an-adhocism-en.webp"),
    toilet: A("detail-an-toilet-en.webp"),
    pen: A("detail-an-pen-en.webp"),
    motorbike: A("detail-an-motorbike-en.webp"),
    jewelry: A("detail-an-jewelry-en.webp")
  }
};

const englishUyen = {
  intro: A("uyen-intro-en.png"),
  homeBase: A("uyen-home-empty-en.png"),
  yourJourney: A("uyen-your-journey-en.png"),
  homeComplete: A("uyen-home-complete-en.png"),
  objects: {
    uniform: A("detail-uniform-en.png"),
    sketchbook: A("detail-sketchbook-en.png"),
    photobooth: A("detail-photobooth-en.png"),
    matcha: A("detail-matcha-en.png"),
    dogCollar: A("detail-collar-en.png")
  }
};

const englishNhu = {
  intro: A("nhu-intro-en.png"),
  homeBase: A("nhu-home-empty-en.png"),
  yourJourney: A("nhu-your-journey-en.png"),
  homeComplete: A("nhu-home-complete-en.png"),
  objects: {
    camera: A("detail-nhu-camera-en.png"),
    cat: A("detail-nhu-cat-en.png"),
    bag: A("detail-nhu-bag-en.png"),
    video: A("detail-nhu-video-en.png"),
    lipstick: A("detail-nhu-lipstick-en.png")
  }
};

const englishVy = {
  intro: A("vy-intro-en.png"),
  homeBase: A("vy-home-empty-en.png"),
  yourJourney: A("vy-your-journey-en.png"),
  homeComplete: A("vy-home-complete-en.png"),
  objects: {
    album: A("detail-vy-album-en.png"),
    bowl: A("detail-vy-bowl-en.png"),
    teddy: A("detail-vy-teddy-en.png"),
    key: A("detail-vy-key-en.png"),
    envelope: A("detail-vy-envelope-en.png")
  }
};

let language = "vi";
let currentKey = "uyen";
let view = "main";
let selectedId = null;
const revealedByPerson = Object.fromEntries(Object.entries(people).map(([k,p])=>[k,Object.fromEntries(p.objects.map(o=>[o.id,false]))]));
const root = document.getElementById("root");
const person = () => {
  const base = people[currentKey];
  if (language !== "en") return base;
  const english = currentKey === "uyen" ? englishUyen : currentKey === "an" ? englishAn : currentKey === "nhu" ? englishNhu : currentKey === "vy" ? englishVy : null;
  if (!english) return base;
  return {
    ...base,
    intro: english.intro,
    homeBase: english.homeBase,
    yourJourney: english.yourJourney,
    homeComplete: english.homeComplete,
    // English source screens already contain their English instruction copy.
    introInstruction: null,
    homeInstruction: null,
    objects: base.objects.map(o => ({...o, detail: english.objects[o.id] || o.detail}))
  };
};
const revealed = () => revealedByPerson[currentKey];

function el(tag, cls, attrs={}) {
  const node = document.createElement(tag); if (cls) node.className = cls;
  for (const [k,v] of Object.entries(attrs)) {
    if (k === "text") node.textContent = v; else if (k === "onclick") node.addEventListener("click", v); else node.setAttribute(k,v);
  } return node;
}
function art(src, alt="") { return el("img","screen-art",{src,alt,draggable:"false"}); }
function homeButton(onHome) { return el("button","home-logo-hitarea",{"aria-label":"Quay về trang chính",onclick:onHome}); }
function resetJourney(key=currentKey){ people[key].objects.forEach(o => { revealedByPerson[key][o.id] = false; }); }
function goMain(){ resetJourney(); selectedId=null; view="main"; render(); }
function startJourney(key){
  currentKey=key;
  if (language === "en" && !["uyen","an","nhu","vy"].includes(key)) language = "vi";
  resetJourney(key); selectedId=null; view="intro"; render();
}
function allRevealed(){ return person().objects.every(o => revealed()[o.id]); }

function renderMain(){
  const m=el("main","screen main-page",{"aria-label":"Chốn Tìm — Trang chính"});
  const v=el("video","screen-art",{src:A(language === "en" ? "introduce-en.mp4" : "introduce-hi.mp4"),autoplay:"",muted:"",playsinline:"",preload:"auto","aria-label":language === "en" ? "Chốn Tìm — Meeting the 4 journeys" : "Chốn Tìm — Gặp gỡ 4 hành trình"});
  v.muted=true; v.autoplay=true; v.playsInline=true;
  m.append(v,
    el("button","uyen-journey-hitarea",{"aria-label":"Khám phá hành trình của Uyên",onclick:()=>startJourney("uyen")}),
    el("button","an-journey-hitarea",{"aria-label":"Khám phá hành trình của An",onclick:()=>startJourney("an")}),
    el("button","nhu-journey-hitarea",{"aria-label":"Khám phá hành trình của Như",onclick:()=>startJourney("nhu")}),
    el("button","vy-journey-hitarea",{"aria-label":"Khám phá hành trình của Vy",onclick:()=>startJourney("vy")}),
    el("button","vietnamese-language-hitarea",{"aria-label":"Tiếng Việt",onclick:()=>{ if(language!=="vi"){language="vi";render();} }}),
    el("button","english-language-hitarea",{"aria-label":"English",onclick:()=>{ if(language!=="en"){language="en";render();} }})
  ); return m;
}
function renderIntro(){
  const p=person(); const m=el("main","screen journey-intro-screen",{"aria-label":`Giới thiệu hành trình của ${p.name}`});
  m.append(art(p.intro,`Giới thiệu hành trình của ${p.name}`));
  if(p.introInstruction){ const hint=art(p.introInstruction,""); hint.className="instruction-motion"; m.append(hint); }
  const continueToHome=()=>{
    view="home";
    render();
  };
  m.append(el("button","intro-continue-hitarea",{"aria-label":"Chạm vào màn hình để tiếp tục",onclick:continueToHome}),homeButton(goMain)); return m;
}
function renderHome(){
  const p=person(); const r=revealed(); const m=el("main","screen home-screen",{"aria-label":`Hành trình của ${p.name}`});
  m.append(art(p.homeBase,`Hành trình của ${p.name}`));
  if(p.homeInstruction){ const hint=art(p.homeInstruction,""); hint.className="instruction-motion"; m.append(hint); }
  p.objects.forEach(o=>{
    if(!r[o.id]) return;
    if(o.revealedLayer){ const i=art(o.revealedLayer); i.className="object-art"; m.append(i); }
    else if(o.revealedObject){ const i=art(o.revealedObject,o.label); i.className="revealed-object-art"; Object.assign(i.style,{left:o.art.left+"%",top:o.art.top+"%",width:o.art.width+"%"}); m.append(i); }
  });
  p.objects.forEach(o=>{
    const b=el("button",`home-object ${r[o.id]?"is-revealed":""}`,{"aria-label":`Khám phá ${o.label}`,onclick:()=>{selectedId=o.id;view="detail";render();}});
    Object.assign(b.style,{left:o.position.left+"%",top:o.position.top+"%",width:o.position.width+"%",height:o.position.height+"%"}); m.append(b);
  });
  m.append(homeButton(goMain)); return m;
}
function renderDetail(){
  const p=person(); const o=p.objects.find(x=>x.id===selectedId); if(!o){view="home";return renderHome();}
  const m=el("main","screen detail-screen",{"aria-label":`Câu chuyện: ${o.label}`}); m.append(art(o.detail,`Câu chuyện ${o.label}`));
  m.append(el("button","close-button",{"aria-label":"Trở về hành trình",onclick:()=>{revealed()[o.id]=true;view="home";render();}}),homeButton(goMain)); return m;
}
function renderCompleted(){
  const p=person(); const m=el("main","screen completed-screen",{"aria-label":`Hành trình của ${p.name} đã hoàn thành`}); m.append(art(p.homeComplete,`Hành trình của ${p.name} đã hoàn thành`));
  m.append(el("button","complete-home-hitarea",{"aria-label":"Chạm vào màn hình để tiếp tục",onclick:()=>{view="yourJourney";render();}}),homeButton(goMain)); return m;
}
function renderYourJourney(){
  const p=person(); const m=el("main","screen your-journey-screen",{"aria-label":"Hành trình của bạn"}); m.append(art(p.yourJourney,"Hành trình của bạn"));
  m.append(el("button","next-journey-hitarea",{"aria-label":"Khám phá tiếp những hành trình khác!",onclick:goMain}),homeButton(goMain)); return m;
}
let isDissolving = false;
function render(){
  if (isDissolving) return;
  let screen;
  if(view==="main") screen=renderMain(); else if(view==="intro") screen=renderIntro(); else if(view==="detail") screen=renderDetail();
  else if(allRevealed() && view==="yourJourney") screen=renderYourJourney(); else if(allRevealed()) screen=renderCompleted(); else screen=renderHome();

  const previous = root.querySelector(".screen:last-of-type");
  if (!previous) {
    root.append(screen);
    return;
  }

  isDissolving = true;
  screen.classList.add("dissolve-in");
  previous.classList.add("dissolve-out");
  root.append(screen);

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      screen.classList.add("is-visible");
      previous.classList.add("is-hidden");
    });
  });

  setTimeout(() => {
    previous.remove();
    screen.classList.remove("dissolve-in", "is-visible");
    isDissolving = false;
  }, 300);
}
render();
