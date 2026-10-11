(function(){
"use strict";
const FILES="abcdefgh";
const posKey=f=>f.split(" ").slice(0,4).join(" ");

/* ---------- build the book ---------- */
const INDEX=new Map();
BOOK.forEach(op=>{ (TRAPS[op.id]||[]).forEach(t=>op.lines.push(Object.assign({punish:true},t))); });
BOOK.forEach((op,oi)=>{
  op.lines.forEach((ln,li)=>{
    ln.id=op.id+"/"+ln.name; ln.side=ln.side||op.side; ln.dev=-1;
    const sans=[],notes=[],ann=[];
    for(const m of ln.moves.matchAll(/\{([^}]*)\}|(\S+)/g)){
      if(m[2]){ const a=(m[2].match(/[?!]+$/)||[""])[0]; if(a==="?") ln.dev=sans.length; ann.push(a); sans.push(m[2].replace(/[?!]+$/,"")); notes.push(""); }
      else if(sans.length) notes[sans.length-1]=m[1].trim();
    }
    const g=new Chess(); const fens=[g.fen()], vm=[];
    sans.forEach((s,i)=>{
      const mv=g.move(s); vm.push(mv); fens.push(g.fen()); sans[i]=mv.san;
      const k=posKey(fens[i]);
      if(!INDEX.has(k)) INDEX.set(k,[]);
      INDEX.get(k).push({oi,li,ply:i,san:mv.san,mistake:i===ln.dev});
    });
    Object.assign(ln,{sans,notes,fens,vm,ann});
  });
});
const ALL=[],TALL=[];BOOK.forEach((o,oi)=>o.lines.forEach((l,li)=>(l.punish?TALL:ALL).push([oi,li])));
const bookIdx=o=>o.lines.map((l,i)=>l.punish?-1:i).filter(i=>i>=0);
const trapIdx=o=>o.lines.map((l,i)=>l.punish?i:-1).filter(i=>i>=0);
const sanA=(ln,i)=>ln.sans[i]+(ln.ann[i]||"");

function autoNote(ln,i){
  const m=ln.vm[i], prev=ln.vm[i-1], P=t("pname");
  if(m.san.startsWith("O-O-O")) return t("castleQ");
  if(m.san.startsWith("O-O")) return t("castleK");
  let x;
  if(m.flags.includes("e")) x=t("ep");
  else if(m.captured) x=(prev&&prev.to===m.to)?t("recapture",m.to):t("capture",P[m.captured],m.to);
  else if((m.piece==="n"||m.piece==="b")&&(m.from[1]==="1"||m.from[1]==="8")) x=t("develop",P[m.piece],m.to);
  else if(m.piece==="p") x=t("pawnTo",m.to);
  else x=t("pieceTo",P[m.piece],m.to);
  if(m.san.includes("+")) x+=t("checkSuffix");
  return x+(ln.punish&&i>ln.dev?"":t("bookSuffix"));
}
const noteOf=(ln,i)=>ln.notes[i]?cNote(ln.notes[i]):autoNote(ln,i);
const side=c=>t(c==="w"?"white":"black");
const moveLabel=(i,san)=>(Math.floor(i/2)+1)+(i%2?"... ":". ")+san;

/* ---------- storage: one progress record per player ---------- */
const KEY="bookmoves.v3";
const newId=()=>"p"+Date.now().toString(36)+Math.random().toString(36).slice(2,6);
let store=null;
try{ const r=localStorage.getItem(KEY); if(r) store=JSON.parse(r); }catch(e){}
if(!store||!store.profiles||!Object.keys(store.profiles).length){
  let old={};
  try{ const r=localStorage.getItem("bookmoves.v2"); if(r) old=JSON.parse(r)||{}; }catch(e){}
  const id=newId();
  store={current:id,profiles:{[id]:Object.assign({},old,{name:"Player 1",progress:old.progress||{}})}};
}
if(!store.profiles[store.current]) store.current=Object.keys(store.profiles)[0];
let saved=store.profiles[store.current];
if(!store.lang) store.lang=(navigator.language||"").toLowerCase().startsWith("ko")?"ko":"en";
LANG=store.lang==="ko"?"ko":"en";
function persist(){ try{ localStorage.setItem(KEY,JSON.stringify(store)); }catch(e){} }
persist();
const prog=id=>saved.progress[id]||0;

/* ---------- state ---------- */
const S={ oi:0, li:0, mode:"learn", ply:0, flip:false, sel:null, msg:null, side:"auto", scope:"line", tscope:"opening", P:null };
function loadSettings(){
  S.oi=Math.min(saved.oi||0,BOOK.length-1); S.li=0; S.ply=0; S.flip=false; S.sel=null; S.msg=null;
  S.mode=saved.mode||"learn"; S.side=saved.side||"auto"; S.scope=saved.scope||"line"; S.tscope=saved.tscope||"opening";
  if(saved.li!=null && BOOK[S.oi].lines[saved.li]) S.li=saved.li;
}
loadSettings();
const op=()=>BOOK[S.oi], line=()=>op().lines[S.li];
const $=id=>document.getElementById(id);
const board=$("board");
let timer=null;

function remember(){ saved.oi=S.oi; saved.li=S.li; saved.mode=S.mode; saved.side=S.side; saved.scope=S.scope; saved.tscope=S.tscope; persist(); }
const drill=()=>S.mode!=="learn";

/* ---------- board ---------- */
function currentFen(){ return S.mode==="learn"? line().fens[S.ply] : S.P.game.fen(); }
function bottomColor(){
  let c;
  if(drill()) c=S.P.color; else c=line().side;
  return S.flip?(c==="w"?"b":"w"):c;
}
function parseFen(f){
  const rows=f.split(" ")[0].split("/"), map={};
  rows.forEach((r,ri)=>{ let fi=0; for(const ch of r){ if(/\d/.test(ch)) fi+=+ch; else { map[FILES[fi]+(8-ri)]={t:ch.toLowerCase(),c:ch===ch.toUpperCase()?"w":"b"}; fi++; } } });
  return map;
}
const PIECE_STYLES=[["classic",()=>t("classic")],["totoy",()=>"Totoy"],["staunty",()=>"Staunty"]];
const pieceStyle=()=>(typeof PIECE_SETS!=="undefined"&&PIECE_SETS[saved.pieces])?saved.pieces:"classic";
function pieceHTML(p){
  const st=pieceStyle();
  if(st!=="classic") return `<span class="pc ${p.c}"><img src="${PIECE_SETS[st][p.c+p.t.toUpperCase()]}" alt="" draggable="false"></span>`;
  const d=PIECES[p.t];
  return p.c==="w"
    ? `<span class="pc w"><svg viewBox="0 0 100 100" aria-hidden="true"><path class="w1" d="${d.wback}"/><path class="w2" d="${d.line}"/></svg></span>`
    : `<span class="pc b"><svg viewBox="0 0 100 100" aria-hidden="true"><path class="b1" d="${d.bback}"/><path class="b2" d="${d.fill}"/></svg></span>`;
}
function renderBoard(o={}){
  const fen=currentFen(), map=parseFen(fen), bot=bottomColor();
  const ranks=bot==="w"?[8,7,6,5,4,3,2,1]:[1,2,3,4,5,6,7,8];
  const files=bot==="w"?FILES.split(""):FILES.split("").reverse();
  const last=o.last||lastMove();
  let targets=[];
  if(S.sel){ try{ targets=new Chess(fen).moves({square:S.sel,verbose:true}); }catch(e){} }
  let h="";
  ranks.forEach((r,ri)=>files.forEach((f,fi)=>{
    const sq=f+r, light=(FILES.indexOf(f)+r)%2===1;
    const cls=["sq",light?"l":"d"];
    if(last&&(last.from===sq||last.to===sq)) cls.push("last");
    if(S.sel===sq) cls.push("sel");
    const tg=targets.find(m=>m.to===sq); if(tg){cls.push("tgt"); if(tg.captured) cls.push("cap");}
    if(o.hintSq===sq) cls.push("hint");
    if(o.wrong&&o.wrong.includes(sq)) cls.push("wrong");
    let co="";
    if(fi===0) co+=`<span class="co r">${r}</span>`;
    if(ri===7) co+=`<span class="co f">${f}</span>`;
    h+=`<div class="${cls.join(" ")}" data-sq="${sq}">${co}${map[sq]?pieceHTML(map[sq]):""}</div>`;
  }));
  if(o.arrow){
    const xy=s=>{ let x=FILES.indexOf(s[0]), y=8-(+s[1]); if(bot==="b"){x=7-x;y=7-y;} return [x+.5,y+.5]; };
    const [x1,y1]=xy(o.arrow.from),[x2,y2]=xy(o.arrow.to);
    const dx=x2-x1,dy=y2-y1,L=Math.hypot(dx,dy),ux=dx/L,uy=dy/L;
    const ex=x2-ux*.32, ey=y2-uy*.32, hx=x2-ux*.05, hy=y2-uy*.05, px=-uy*.24, py=ux*.24;
    h+=`<svg class="arrows" viewBox="0 0 8 8" aria-hidden="true"><g fill="var(--gold)" stroke="var(--gold)" opacity=".88"><line x1="${x1+ux*.2}" y1="${y1+uy*.2}" x2="${ex}" y2="${ey}" stroke-width=".18" stroke-linecap="round"/><polygon stroke="none" points="${hx},${hy} ${ex+px},${ey+py} ${ex-px},${ey-py}"/></g></svg>`;
  }
  board.innerHTML=h;
  const turn=fen.split(" ")[1];
  const [tn,tr]=t("turn",side(turn));
  $("turn").innerHTML=`<span class="dot ${turn}"></span><span>${tn}<span class="tm">${tr}</span></span>`;
}
function lastMove(){
  if(S.mode==="learn") return S.ply>0?line().vm[S.ply-1]:null;
  const h=S.P.game.history({verbose:true}); return h[h.length-1]||null;
}

/* ---------- input: tap + drag ---------- */
let drag=null;
function canTouch(sq){
  const fen=currentFen(), map=parseFen(fen), p=map[sq], turn=fen.split(" ")[1];
  if(!p||p.c!==turn) return false;
  if(drill()) return !S.P.done && !S.P.busy && turn===S.P.color;
  return true;
}
board.addEventListener("pointerdown",e=>{
  const el=e.target.closest(".sq"); if(!el) return;
  const sq=el.dataset.sq;
  if(S.sel && S.sel!==sq){
    if(tryMove(S.sel,sq)) return;
  }
  if(canTouch(sq)){
    S.sel=sq; render();
    const pc=board.querySelector(`[data-sq="${sq}"] .pc`);
    if(pc){
      const g=pc.cloneNode(true); g.classList.add("ghost");
      const r=pc.getBoundingClientRect(); g.style.width=r.width+"px"; g.style.height=r.height+"px"; g.style.inset="auto"; g.style.display="none";
      document.body.appendChild(g);
      drag={from:sq,ghost:g,x:e.clientX,y:e.clientY,moved:false};
      board.setPointerCapture(e.pointerId);
    }
  } else { S.sel=null; render(); }
});
board.addEventListener("pointermove",e=>{
  if(!drag) return;
  if(!drag.moved && Math.hypot(e.clientX-drag.x,e.clientY-drag.y)>5){
    drag.moved=true; drag.ghost.style.display="block";
    const src=board.querySelector(`[data-sq="${drag.from}"] .pc`); if(src) src.classList.add("lift");
  }
  if(drag.moved){ drag.ghost.style.left=e.clientX+"px"; drag.ghost.style.top=e.clientY+"px"; }
});
function endDrag(e,cancel){
  if(!drag) return;
  const d=drag; drag=null; d.ghost.remove();
  if(!d.moved||cancel){ const src=board.querySelector(".pc.lift"); if(src) src.classList.remove("lift"); return; }
  const el=document.elementFromPoint(e.clientX,e.clientY);
  const tsq=el&&el.closest&&el.closest(".sq");
  if(tsq&&tsq.dataset.sq!==d.from&&tryMove(d.from,tsq.dataset.sq)) return;
  render();
}
board.addEventListener("pointerup",e=>endDrag(e,false));
board.addEventListener("pointercancel",e=>endDrag(e,true));

function tryMove(from,to){
  const fen=currentFen(); const g=new Chess(fen);
  const m=g.move({from,to,promotion:"q"});
  if(!m) return false;
  S.sel=null;
  if(S.mode==="learn") learnMove(m,fen); else practiceMove(m,fen);
  return true;
}

/* ---------- learn ---------- */
function setLine(oi,li,ply){ S.oi=oi; S.li=li; S.ply=ply||0; S.sel=null; S.msg=null; remember(); }
function learnMove(m,fen){
  const ln=line();
  if(ln.sans[S.ply]===m.san){ S.ply++; S.msg=null; return render(); }
  const c=(INDEX.get(posKey(fen))||[]).filter(x=>x.san===m.san);
  if(c.length){
    const pick=c.find(x=>x.oi===S.oi&&!BOOK[x.oi].lines[x.li].punish)||c.find(x=>x.oi===S.oi)||c.find(x=>!BOOK[x.oi].lines[x.li].punish)||c[0];
    setLine(pick.oi,pick.li,pick.ply+1);
    S.msg={t:t("switched",cOpName(BOOK[pick.oi]),cLineName(BOOK[pick.oi].lines[pick.li]))};
    return renderAll();
  }
  const books=[...new Set((INDEX.get(posKey(fen))||[]).map(x=>x.san))];
  S.msg={bad:true,t:t("notInBook",m.san,books.join(", "))};
  render();
}
function renderLearn(){
  const ln=line(), i=S.ply;
  const n=$("note");
  let h="";
  if(i===0) h=`<div class="mv"><small>${t("start")}</small></div><p>${esc(cOpSummary(op()))}</p><p class="empty">${t("startHint")}</p>`;
  else h=`<div class="mv">${moveLabel(i-1,sanA(ln,i-1))}<small>${side(i%2?"w":"b")}</small>${ln.dev===i-1?`<span class="tag bad">${t("mistake")}</span>`:""}${ln.dev>=0&&ln.dev===i-2?`<span class="tag good">${t("punishment")}</span>`:""}</div><p>${esc(noteOf(ln,i-1))}</p>`;
  if(i===0&&ln.punish) h=`<div class="mv"><small>${t("mistakeDrill")}</small></div><p>${esc(t("drillIntro",cLineName(ln)))}</p><p class="empty">${esc(t("result",cLineGain(ln)))}</p>`;
  if(i===ln.sans.length && i>0) h+=`<p class="empty">${esc(ln.punish?t("endPunish",cLineGain(ln)):t("endLine"))}</p>`;
  if(S.msg) h+=`<div class="toast ${S.msg.bad?"bad":""}" style="margin-top:10px">${esc(S.msg.t)}</div>`;
  n.innerHTML=h;
  let s="";
  for(let k=0;k<ln.sans.length;k+=2){
    s+=`<span class="n">${k/2+1}.</span>`;
    for(const j of [k,k+1]){
      if(j<ln.sans.length) s+=`<button data-p="${j+1}" class="${j+1===i?"cur":""} ${ln.notes[j]?"has":""} ${j+1>i?"future":""}">${ln.sans[j]}${ln.ann[j]?`<em class="an ${ln.ann[j]==="?"?"q":"x"}">${ln.ann[j]}</em>`:""}</button>`;
      else s+=`<span class="blank"></span>`;
    }
  }
  const sh=$("sheet"); sh.innerHTML=s;
  const cur=sh.querySelector(".cur");
  // scroll only inside the move list (never the page): sideways strip on phones, vertical list elsewhere
  if(sh.scrollWidth>sh.clientWidth+2){ sh.scrollLeft=cur?Math.max(0,cur.offsetLeft-(sh.clientWidth-cur.offsetWidth)/2):0; }
  else if(cur){ const top=cur.offsetTop, bot=top+cur.offsetHeight;
    if(top<sh.scrollTop) sh.scrollTop=Math.max(0,top-8); else if(bot>sh.scrollTop+sh.clientHeight) sh.scrollTop=bot-sh.clientHeight+8; }
  else sh.scrollTop=0;
  const fen=ln.fens[i];
  const ent=INDEX.get(posKey(fen))||[];
  const by=new Map();
  ent.forEach(x=>{ if(!by.has(x.san)) by.set(x.san,[]); by.get(x.san).push(x); });
  let b="";
  const rows=[...by].sort((a,b)=>a[1].every(x=>x.mistake)-b[1].every(x=>x.mistake));
  for(const [san,arr] of rows){
    const mine=ln.sans[i]===san, bad=arr.every(x=>x.mistake);
    const names=[...new Set(arr.map(x=>(x.oi===S.oi?"":cOpName(BOOK[x.oi])+": ")+cLineName(BOOK[x.oi].lines[x.li])))];
    b+=`<button class="br ${mine?"mine":""} ${bad?"mist":""}" data-san="${san}"><span class="s">${moveLabel(i,san)}${bad?"?":""}</span><span class="w">${bad?`<b>${t("mistake")}</b> · `:""}${esc(names.slice(0,4).join(" · "))}${names.length>4?` +${names.length-4}`:""}</span></button>`;
  }
  $("branches").innerHTML=b||`<p class="muted">${t("noMoreBook")}</p>`;
  $("bFirst").disabled=$("bPrev").disabled=i===0;
  $("bNext").disabled=$("bLast").disabled=i>=ln.sans.length;
}
$("sheet").addEventListener("click",e=>{const b=e.target.closest("button"); if(b){S.ply=+b.dataset.p; S.msg=null; render();}});
$("branches").addEventListener("click",e=>{
  const b=e.target.closest(".br"); if(!b) return;
  const fen=line().fens[S.ply];
  const m=new Chess(fen).move(b.dataset.san); if(m) learnMove(m,fen);
});
function step(d){ if(S.mode!=="learn") return; S.ply=Math.max(0,Math.min(line().sans.length,S.ply+d)); S.msg=null; S.sel=null; render(); }
$("bFirst").onclick=()=>step(-99); $("bPrev").onclick=()=>step(-1); $("bNext").onclick=()=>step(1); $("bLast").onclick=()=>step(99);
$("bFlip").onclick=()=>{S.flip=!S.flip; render();};

/* ---------- practice ---------- */
function startPractice(){
  clearTimeout(timer);
  if(S.side!=="flip") S.side="auto";
  const ln0=line();
  const c=S.mode==="punish"?ln0.side:(S.side==="auto"?ln0.side:(ln0.side==="w"?"b":"w"));
  S.P={game:new Chess(),color:c,idx:0,mistakes:0,hints:0,hint:0,done:false,busy:false,feed:null,toast:null,wrong:null};
  S.flip=false; S.sel=null;
  S.P.feed=ln0.punish?{k:"info",h:t("punishDrill",cLineName(ln0).replace(/ \([^)]*\)$/,"")),p:t("punishIntro",side(c))}
    :{k:"info",h:t("playLine",cLineName(ln0),side(c)),p:c==="w"?t("firstMove"):t("compWhite")};
  render(); auto();
}
function auto(){
  const P=S.P, ln=line();
  if(P.idx>=ln.sans.length){ return finish(); }
  if(P.game.turn()!==P.color){
    P.busy=true;
    timer=setTimeout(()=>{
      if(S.P!==P) return;
      P.game.move(ln.sans[P.idx]); P.idx++; P.busy=false;
      if(P.idx>=ln.sans.length) return finish();
      if(P.idx-1===ln.dev) P.feed={k:"alert",h:t("leftBook",moveLabel(P.idx-1,ln.sans[P.idx-1])),p:t("leftBookP"),why:noteOf(ln,P.idx-1)};
      else P.feed={k:"info",h:t("oppPlayed",moveLabel(P.idx-1,ln.sans[P.idx-1])),p:ln.dev>=0&&P.idx-1>ln.dev?t("keepPressing"):t("yourMove"),why:noteOf(ln,P.idx-1)};
      render();
    },520);
  }
}
function practiceMove(m,fen){
  const P=S.P, ln=line(), exp=ln.sans[P.idx];
  P.toast=null;
  if(m.san===exp){
    P.game.move(m.san); P.idx++; P.hint=0; P.wrong=null;
    P.feed={k:"good",h:ln.dev>=0&&P.idx-2===ln.dev?t("punished",moveLabel(P.idx-1,m.san)):t("correct",moveLabel(P.idx-1,m.san)),why:noteOf(ln,P.idx-1)};
    render();
    if(P.idx>=ln.sans.length) finish(); else auto();
    return;
  }
  const other=(INDEX.get(posKey(fen))||[]).find(x=>x.san===m.san&&!x.mistake);
  if(other){
    P.toast={t:t("alsoBook",m.san,cOpName(BOOK[other.oi]),cLineName(BOOK[other.oi].lines[other.li]),cLineName(ln))};
    render(); return;
  }
  P.mistakes++; P.hint=Math.min(2,P.hint+1); P.wrong=[m.from,m.to];
  const punishing=ln.dev>=0&&P.idx===ln.dev+1;
  P.feed={k:"bad",h:punishing?t("offHook",m.san):t("notBook",m.san),p:(punishing?t("forcing"):"")+(P.hint>=2?t("arrowShows"):t("highlighted"))};
  render({shake:true});
  P.wrong=null;
}
function finish(){
  const P=S.P; if(P.done) return; P.done=true; P.busy=false;
  const ln=line(), clean=P.mistakes===0&&P.hints===0;
  if(clean){ saved.progress[ln.id]=Math.min(3,prog(ln.id)+1); persist(); }
  const n=prog(ln.id);
  P.feed={k:"done",h:ln.punish?(clean?(n>=3?t("trapMastered"):t("punishedClean")):t("drillDone")):clean?(n>=3?t("lineLearned"):t("cleanRun")):t("lineDone"),
    p:clean?(n>=3?t("cleanThree",cLineName(ln)):t("cleanN",n)):t("mistakesHints",P.mistakes,P.hints),
    why:ln.punish?t("result",cLineGain(ln)):t("lastMove",moveLabel(ln.sans.length-1,ln.sans[ln.sans.length-1]),noteOf(ln,ln.sans.length-1))};
  renderAll();
}
function nextLine(){
  let pool;
  const sc=S.mode==="punish"?S.tscope:S.scope;
  if(sc==="line") pool=[[S.oi,S.li]];
  else if(sc==="opening") pool=(S.mode==="punish"?trapIdx(op()):bookIdx(op())).map(li=>[S.oi,li]);
  else pool=S.mode==="punish"?TALL:ALL;
  if(!pool.length) pool=S.mode==="punish"?TALL:ALL;
  if(pool.length>1) pool=pool.filter(([o,l])=>!(o===S.oi&&l===S.li));
  const fresh=pool.filter(([o,l])=>prog(BOOK[o].lines[l].id)<3);
  const src=fresh.length?fresh:pool;
  const [o,l]=src[Math.floor(Math.random()*src.length)];
  setLine(o,l,0); startPractice(); renderAll();
}
$("bHint").onclick=()=>{
  const P=S.P; if(P.done||P.busy||P.game.turn()!==P.color) return;
  P.hints++; P.hint=Math.min(2,P.hint+1);
  P.feed={k:"info",h:P.hint>=2?t("hereBook"):t("hint"),p:P.hint>=2?t("followArrow"):t("moveHighlighted")};
  render();
};
$("bRestart").onclick=()=>{ startPractice(); renderAll(); };
$("bNextLine").onclick=nextLine;

function renderPractice(o){
  const P=S.P, ln=line();
  const f=P.feed||{k:"info",h:""};
  const ic={good:"✓",bad:"✕",done:"★",alert:"?",info:P.color==="w"?"W":"B"}[f.k];
  $("status").className="status "+f.k;
  $("status").innerHTML=`<div class="ic">${ic}</div><div><h4>${esc(f.h)}</h4>${f.p?`<p>${esc(f.p)}</p>`:""}${f.why?`<p class="why">${esc(f.why)}</p>`:""}</div>`;
  $("progBar").style.width=(100*P.idx/ln.sans.length)+"%";
  $("stats").innerHTML=t("stats",Math.min(P.idx,ln.sans.length),ln.sans.length,P.mistakes,P.hints,prog(ln.id));
  $("bHint").disabled=P.done;
  $("bNextLine").textContent=(S.mode==="punish"?S.tscope:S.scope)==="line"?t("playAgain"):(P.done?t("nextLine"):t("skipLine"));
  const toastEl=$("pToast"); toastEl.hidden=!P.toast; if(P.toast){toastEl.className="toast"; toastEl.textContent=P.toast.t;}
  const rep=side(op().side), oth=side(op().side==="w"?"b":"w");
  $("optSide").hidden=S.mode==="punish";
  $("segSide").innerHTML=[["auto",t("repertoire",rep)],["flip",oth]].map(([v,l])=>`<button data-v="${v}" aria-pressed="${S.side===v}">${l}</button>`).join("");
  const sc=S.mode==="punish"?S.tscope:S.scope;
  $("segScope").innerHTML=(S.mode==="punish"?[["line",t("thisDrill")],["opening",t("thisOpening")],["all",t("allOpenings")]]:[["line",t("thisLine")],["opening",t("shuffleOpening")],["all",t("shuffleAll")]]).map(([v,l])=>`<button data-v="${v}" aria-pressed="${sc===v}">${l}</button>`).join("");
  const hintActive=!P.done&&!P.busy&&P.game.turn()===P.color&&P.hint>0;
  const exp=hintActive?new Chess(P.game.fen()).move(ln.sans[P.idx]):null;
  renderBoard({hintSq:exp?exp.from:null, arrow:exp&&P.hint>=2?exp:null, wrong:P.wrong});
  if(o&&o.shake){ board.classList.remove("shake"); void board.offsetWidth; board.classList.add("shake"); }
}
$("segSide").addEventListener("click",e=>{const b=e.target.closest("button"); if(!b) return; S.side=b.dataset.v; remember(); startPractice();});
$("segScope").addEventListener("click",e=>{const b=e.target.closest("button"); if(!b) return; if(S.mode==="punish") S.tscope=b.dataset.v; else S.scope=b.dataset.v; remember(); render();});

/* ---------- chrome ---------- */
function esc(s){ return String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c])); }
const GROUPS=[...new Set(BOOK.map(o=>o.group))];
function renderRail(){
  let h="", sel="";
  GROUPS.forEach(g=>{
    h+=`<h3>${esc(cGroup(g))}</h3>`; sel+=`<optgroup label="${esc(cGroup(g))}">`;
    BOOK.forEach((o,oi)=>{ if(o.group!==g) return;
      const bl=o.lines.filter(l=>!l.punish), done=bl.filter(l=>prog(l.id)>=3).length;
      h+=`<button class="op-btn" data-oi="${oi}" aria-current="${oi===S.oi}"><span class="sd ${o.side}" title="${esc(t("repertoireFor",side(o.side)))}"></span><span class="nm">${esc(cOpName(o))}</span><span class="ct">${done}/${bl.length}</span></button>`;
      sel+=`<option value="${oi}" ${oi===S.oi?"selected":""}>${esc(cOpName(o))} (${side(o.side)}) ${done}/${bl.length}</option>`;
    });
    sel+=`</optgroup>`;
  });
  $("rail").innerHTML=h; $("opSelect").innerHTML=sel;
  const total=ALL.length, learned=ALL.filter(([o,l])=>prog(BOOK[o].lines[l].id)>=3).length;
  const tm=TALL.filter(([o,l])=>prog(BOOK[o].lines[l].id)>=3).length;
  $("tally").innerHTML=t("tally",learned,total,tm,TALL.length);
}
function renderHead(){
  const o=op();
  $("opHead").innerHTML=`<div class="meta"><span>ECO ${o.eco}</span><span>${esc(cGroup(o.group))}</span><span>${esc(t("repertoireFor",side(o.side)))}</span></div><h2>${esc(cOpName(o))}</h2><p>${esc(cOpSummary(o))}</p>`;
  const chip=li=>{const l=o.lines[li], n=prog(l.id); return `<button class="chip ${l.punish?"trap":""}" data-li="${li}" aria-pressed="${li===S.li}">${esc(cLineName(l))}<span class="pips" aria-label="${esc(t("cleanRunsAria",n))}">${[0,1,2].map(k=>`<span class="${k<n?"on":""}"></span>`).join("")}</span></button>`;};
  const tl=trapIdx(o);
  $("lines").innerHTML=`<div class="lgrp"><p class="label">${t("mainLines")}</p><div class="chips">${bookIdx(o).map(chip).join("")}</div></div>`+
    `<div class="lgrp"><p class="label">${t("punishMistakes")}</p><div class="chips">${tl.length?tl.map(chip).join(""):`<span class="muted">${t("noDrills")}</span>`}</div></div>`;
  const opt=li=>{const l=o.lines[li], n=prog(l.id); return `<option value="${li}" ${li===S.li?"selected":""}>${esc(cLineName(l))}  ${"●".repeat(n)}${"○".repeat(3-n)}</option>`;};
  $("lineSelect").innerHTML=`<optgroup label="${esc(t("mainLines"))}">${bookIdx(o).map(opt).join("")}</optgroup>`+(tl.length?`<optgroup label="${esc(t("punishMistakes"))}">${tl.map(opt).join("")}</optgroup>`:"");
}
function pickOpening(oi){
  let li=bookIdx(BOOK[oi])[0];
  if(S.mode==="punish"){ const tl=trapIdx(BOOK[oi]); if(tl.length) li=tl[0]; else { S.oi=oi; S.li=li; return nextLine(); } }
  setLine(oi,li,0); if(drill()) startPractice(); renderAll();
}
$("rail").addEventListener("click",e=>{const b=e.target.closest(".op-btn"); if(b) pickOpening(+b.dataset.oi);});
$("opSelect").addEventListener("change",e=>pickOpening(+e.target.value));
function pickLine(li){
  const isT=op().lines[li].punish;
  if(S.mode==="practice"&&isT) S.mode="punish";
  else if(S.mode==="punish"&&!isT) S.mode="practice";
  setLine(S.oi,li,0); setMode(S.mode,true);
}
$("lines").addEventListener("click",e=>{const b=e.target.closest(".chip"); if(b) pickLine(+b.dataset.li);});
$("lineSelect").addEventListener("change",e=>pickLine(+e.target.value));
function setMode(m,keep){
  S.mode=m; S.sel=null; S.flip=false; clearTimeout(timer);
  if(!keep){
    if(m==="practice"&&line().punish){ S.li=bookIdx(op())[0]; S.ply=0; }
    if(m==="punish"&&!line().punish){ const tl=trapIdx(op()); if(tl.length){ S.li=tl[0]; S.ply=0; } else { const [o,l]=TALL[Math.floor(Math.random()*TALL.length)]; S.oi=o; S.li=l; S.ply=0; } }
  }
  remember();
  for(const [id,v] of [["tLearn","learn"],["tPractice","practice"],["tPunish","punish"]]) $(id).setAttribute("aria-selected",m===v);
  $("learnView").hidden=m!=="learn"; $("learnView").style.display=m==="learn"?"flex":"none";
  $("practiceView").hidden=m==="learn"; $("practiceView").style.display=m!=="learn"?"flex":"none";
  $("navBtns").style.display=m==="learn"?"":"none";
  if(m!=="learn") startPractice();
  renderAll();
}
$("tLearn").onclick=()=>setMode("learn"); $("tPractice").onclick=()=>setMode("practice"); $("tPunish").onclick=()=>setMode("punish");

function render(o){ if(S.mode==="learn"){ renderLearn(); renderBoard(); } else renderPractice(o); }
function renderAll(){ renderRail(); renderHead(); render(); }

document.addEventListener("keydown",e=>{
  if(e.target.closest("select,input")) return;
  if(e.key==="ArrowLeft"){step(-1);e.preventDefault();}
  else if(e.key==="ArrowRight"){step(1);e.preventDefault();}
  else if(e.key==="Home") step(-99);
  else if(e.key==="End") step(99);
  else if(e.key==="f"||e.key==="F"){S.flip=!S.flip; render();}
  else if((e.key==="h"||e.key==="H")&&drill()) $("bHint").click();
});

/* ---------- piece style ---------- */
function renderPieceStyle(){
  const cur=pieceStyle();
  $("segPieces").innerHTML=PIECE_STYLES.filter(([v])=>v==="classic"||(typeof PIECE_SETS!=="undefined"&&PIECE_SETS[v])).map(([v,l])=>{
    const prev=v==="classic"?pieceHTMLFor("classic",{t:"n",c:"w"}):`<span class="pc w"><img src="${PIECE_SETS[v].wN}" alt=""></span>`;
    return `<button data-v="${v}" aria-pressed="${cur===v}"><span class="pv">${prev}</span>${l()}</button>`;
  }).join("");
  const credit={totoy:esc(t("credit","Totoy","Kosal Sen"))+' · <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener">CC BY 4.0</a>',
    staunty:esc(t("credit","Staunty","sadsnake1"))+' · <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="noopener">CC BY-NC-SA 4.0</a>'}[cur];
  $("pieceCredit").innerHTML=credit||"";
}
function pieceHTMLFor(style,p){ const keep=saved.pieces; saved.pieces=style; const h=pieceHTML(p); saved.pieces=keep; return h; }
$("segPieces").addEventListener("click",e=>{
  const b=e.target.closest("button"); if(!b) return;
  saved.pieces=b.dataset.v; persist(); renderPieceStyle(); render();
});

/* ---------- players, save and load ---------- */
const panel=$("playerPanel"), pBtn=$("bPlayer");
let pState={edit:null,del:null,msg:null};
const stats=pr=>{ const ids=Object.keys(pr.progress||{}).filter(k=>pr.progress[k]>=3);
  const trapIds=new Set(TALL.map(([o,l])=>BOOK[o].lines[l].id));
  return {lines:ids.filter(k=>!trapIds.has(k)).length, traps:ids.filter(k=>trapIds.has(k)).length}; };
function renderPlayers(){
  pBtn.querySelector(".pname").textContent=saved.name;
  if(panel.hidden) return;
  const ids=Object.keys(store.profiles);
  let h=`<p class="label">${t("playersOnDevice")}</p><div class="plist">`;
  for(const id of ids){
    const pr=store.profiles[id], st=stats(pr), cur=id===store.current;
    if(pState.edit===id){
      h+=`<form class="prow edit" data-id="${id}"><input id="pRename" maxlength="30" value="${esc(pr.name)}" aria-label="${esc(t("playerName"))}"><button class="btn pri" type="submit">${t("save")}</button><button class="btn" type="button" data-act="cancel">${t("cancel")}</button></form>`;
    } else if(pState.del===id){
      h+=`<div class="prow del"><span>${esc(t("deleteQ",pr.name))}</span><button class="btn danger" data-act="confirm-del" data-id="${id}">${t("del")}</button><button class="btn" data-act="cancel">${t("cancel")}</button></div>`;
    } else {
      h+=`<div class="prow ${cur?"cur":""}"><button class="pick" data-act="pick" data-id="${id}" aria-pressed="${cur}"><span class="pdot"></span><span class="pn">${esc(pr.name)}</span><span class="ps">${t("linesTraps",st.lines,st.traps)}</span></button>
        <button class="ic-btn" data-act="rename" data-id="${id}" title="${t("rename")}" aria-label="${esc(t("renameX",pr.name))}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20h4L19 9l-4-4L4 16v4z"/></svg></button>
        ${ids.length>1?`<button class="ic-btn" data-act="delete" data-id="${id}" title="${t("del")}" aria-label="${esc(t("deleteX",pr.name))}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg></button>`:""}</div>`;
    }
  }
  h+=`</div><form class="padd" id="pAdd"><input id="pNew" maxlength="30" placeholder="${esc(t("newPlayer"))}" aria-label="${esc(t("newPlayer"))}"><button class="btn" type="submit">${t("addPlayer")}</button></form>
  <p class="label" style="margin-top:14px">${esc(t("backupFor",saved.name))}</p>
  <div class="acts"><button class="btn" data-act="save">${t("saveFile")}</button><button class="btn" data-act="load">${t("loadFile")}</button></div>
  <p class="pnote">${esc(t("backupNote",saved.name))}</p>
  ${pState.msg?`<div class="toast ${pState.msg.bad?"bad":""}">${esc(pState.msg.t)}</div>`:""}`;
  panel.innerHTML=h;
  const r=$("pRename"); if(r){ r.focus(); r.select(); }
}
function switchPlayer(id){
  clearTimeout(timer);
  store.current=id; saved=store.profiles[id]; persist();
  loadSettings(); setMode(S.mode); renderPlayers(); renderPieceStyle();
}
function togglePanel(open){
  panel.hidden=open===undefined?!panel.hidden:!open;
  pBtn.setAttribute("aria-expanded",!panel.hidden);
  if(panel.hidden) pState={edit:null,del:null,msg:null};
  renderPlayers();
}
pBtn.onclick=e=>{ e.stopPropagation(); togglePanel(); };
document.addEventListener("pointerdown",e=>{ if(!panel.hidden&&!panel.contains(e.target)&&!pBtn.contains(e.target)) togglePanel(false); });
document.addEventListener("keydown",e=>{ if(e.key==="Escape"&&!panel.hidden) togglePanel(false); });
const cleanName=v=>String(v||"").replace(/\s+/g," ").trim().slice(0,30);
const nameTaken=(n,except)=>Object.entries(store.profiles).some(([id,p])=>id!==except&&p.name.toLowerCase()===n.toLowerCase());
panel.addEventListener("submit",e=>{
  e.preventDefault();
  if(e.target.id==="pAdd"){
    const n=cleanName($("pNew").value);
    if(!n){ pState.msg={bad:true,t:t("typeName")}; return renderPlayers(); }
    if(nameTaken(n)){ pState.msg={bad:true,t:t("nameTaken",n)}; return renderPlayers(); }
    const id=newId(); store.profiles[id]={name:n,progress:{}}; pState.msg={t:t("added",n)};
    return switchPlayer(id);
  }
  const id=e.target.dataset.id, n=cleanName($("pRename").value);
  if(!n||nameTaken(n,id)){ pState.msg={bad:true,t:n?t("nameTaken",n):t("nameEmpty")}; return renderPlayers(); }
  store.profiles[id].name=n; pState.edit=null; pState.msg=null; persist(); renderPlayers();
});
panel.addEventListener("click",e=>{
  const b=e.target.closest("[data-act]"); if(!b) return;
  const id=b.dataset.id, act=b.dataset.act;
  if(act==="pick"){ pState.msg=null; if(id!==store.current) switchPlayer(id); }
  else if(act==="rename"){ pState={edit:id,del:null,msg:null}; renderPlayers(); }
  else if(act==="delete"){ pState={edit:null,del:id,msg:null}; renderPlayers(); }
  else if(act==="cancel"){ pState.edit=pState.del=null; renderPlayers(); }
  else if(act==="confirm-del"){
    const n=store.profiles[id].name; delete store.profiles[id]; pState={edit:null,del:null,msg:{t:t("deleted",n)}};
    if(id===store.current) switchPlayer(Object.keys(store.profiles)[0]); else { persist(); renderPlayers(); }
  }
  else if(act==="save") saveFile();
  else if(act==="load") $("fileIn").click();
});
function localDate(){ const d=new Date(), z=n=>String(n).padStart(2,"0"); return `${d.getFullYear()}-${z(d.getMonth()+1)}-${z(d.getDate())}`; }
function saveFile(){
  const data={app:"open-to-punish",format:1,player:saved.name,savedAt:new Date().toISOString(),progress:saved.progress,
    settings:{oi:saved.oi,li:saved.li,mode:saved.mode,side:saved.side,scope:saved.scope,tscope:saved.tscope,pieces:saved.pieces}};
  const blob=new Blob([JSON.stringify(data,null,2)],{type:"application/json"});
  const a=document.createElement("a");
  a.href=URL.createObjectURL(blob);
  a.download=`open-to-punish-${saved.name.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")||"player"}-${localDate()}.json`;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(()=>URL.revokeObjectURL(a.href),1000);
  pState.msg={t:t("savedFile",a.download)}; renderPlayers();
}
$("fileIn").addEventListener("change",async e=>{
  const f=e.target.files[0]; e.target.value=""; if(!f) return;
  let d;
  try{ d=JSON.parse(await f.text()); }catch(err){ d=null; }
  if(!d||!["open-to-punish","book-moves"].includes(d.app)||typeof d.progress!=="object"||!d.progress){
    pState.msg={bad:true,t:t("notFile",f.name)}; return renderPlayers();
  }
  const progress={};
  for(const [k,v] of Object.entries(d.progress)) if(typeof k==="string"&&Number.isFinite(+v)) progress[k]=Math.max(0,Math.min(3,Math.round(+v)));
  const n=cleanName(d.player)||t("importedPlayer");
  let id=Object.keys(store.profiles).find(k=>store.profiles[k].name.toLowerCase()===n.toLowerCase());
  const existed=!!id;
  if(!id){ id=newId(); store.profiles[id]=Object.assign({name:n,progress:{}},d.settings&&typeof d.settings==="object"?d.settings:{}); }
  const pr=store.profiles[id];
  for(const [k,v] of Object.entries(progress)) pr.progress[k]=Math.max(pr.progress[k]||0,v);
  const st=stats(pr);
  pState.msg={t:t("loaded",existed,n,st.lines,st.traps)};
  switchPlayer(id);
});

/* ---------- language ---------- */
function applyStatic(){
  document.documentElement.lang=LANG;
  document.title=t("docTitle");
  document.querySelectorAll("[data-i18n]").forEach(el=>{ el.textContent=t(el.dataset.i18n); });
  document.querySelectorAll("[data-i18n-html]").forEach(el=>{ el.innerHTML=t(el.dataset.i18nHtml); });
  document.querySelectorAll("[data-i18n-title]").forEach(el=>{ el.title=t(el.dataset.i18nTitle); });
  document.querySelectorAll("[data-i18n-aria]").forEach(el=>{ el.setAttribute("aria-label",t(el.dataset.i18nAria)); });
  document.querySelectorAll("#segLang button").forEach(b=>b.setAttribute("aria-pressed",b.dataset.v===LANG));
}
function setLang(l){
  LANG=l==="ko"?"ko":"en"; store.lang=LANG; persist();
  applyStatic(); renderAll(); renderPlayers(); renderPieceStyle();
}
$("segLang").addEventListener("click",e=>{ const b=e.target.closest("button"); if(b&&b.dataset.v!==LANG) setLang(b.dataset.v); });

applyStatic();
setMode(S.mode);
renderPlayers();
renderPieceStyle();
})();
