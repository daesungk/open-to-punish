(function(){
"use strict";
const FILES="abcdefgh";
const GLYPH={k:["♚","♔"],q:["♛","♕"],r:["♜","♖"],b:["♝","♗"],n:["♞","♘"],p:["♟","♙"]};
const VS="︎";
const PNAME={n:"knight",b:"bishop",r:"rook",q:"queen",k:"king",p:"pawn"};
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
  const m=ln.vm[i], prev=ln.vm[i-1];
  if(m.san.startsWith("O-O-O")) return "Castles queenside: the king steps aside and the rook comes to the center.";
  if(m.san.startsWith("O-O")) return "Castles kingside to tuck the king away and connect the rooks.";
  let t;
  if(m.flags.includes("e")) t="Captures en passant.";
  else if(m.captured) t=(prev&&prev.to===m.to)?`Recaptures on ${m.to}.`:`Captures the ${PNAME[m.captured]} on ${m.to}.`;
  else if((m.piece==="n"||m.piece==="b")&&(m.from[1]==="1"||m.from[1]==="8")) t=`Develops the ${PNAME[m.piece]} to ${m.to}.`;
  else if(m.piece==="p") t=`Pawn to ${m.to}.`;
  else t=`${PNAME[m.piece][0].toUpperCase()+PNAME[m.piece].slice(1)} to ${m.to}.`;
  if(m.san.includes("+")) t+=" Check.";
  return t+(ln.punish&&i>ln.dev?"":" Standard book move.");
}
const noteOf=(ln,i)=>ln.notes[i]||autoNote(ln,i);
const moveLabel=(i,san)=>(Math.floor(i/2)+1)+(i%2?"... ":". ")+san;

/* ---------- storage ---------- */
const KEY="bookmoves.v2";
let saved={progress:{}};
try{ const r=localStorage.getItem(KEY); if(r) saved=Object.assign(saved,JSON.parse(r)); }catch(e){}
function persist(){ try{ localStorage.setItem(KEY,JSON.stringify(saved)); }catch(e){} }
const prog=id=>saved.progress[id]||0;

/* ---------- state ---------- */
const S={
  oi:Math.min(saved.oi||0,BOOK.length-1), li:0, mode:saved.mode||"learn", ply:0, flip:false,
  sel:null, msg:null,
  side:saved.side||"auto", scope:saved.scope||"line", tscope:saved.tscope||"opening",
  P:null
};
if(saved.li!=null && BOOK[S.oi].lines[saved.li]) S.li=saved.li;
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
function pieceHTML(p){
  const g=GLYPH[p.t];
  return p.c==="w"?`<span class="pc w"><i>${g[0]+VS}</i><b>${g[1]+VS}</b></span>`:`<span class="pc b"><i>${g[0]+VS}</i></span>`;
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
    const t=targets.find(m=>m.to===sq); if(t){cls.push("tgt"); if(t.captured) cls.push("cap");}
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
  $("turn").innerHTML=`<span class="dot ${turn}"></span>${turn==="w"?"White":"Black"} to move`;
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
      g.style.fontSize=getComputedStyle(pc).fontSize; g.style.display="none";
      document.body.appendChild(g);
      drag={from:sq,ghost:g,x:e.clientX,y:e.clientY,moved:false};
      board.setPointerCapture(e.pointerId);
    }
  } else { S.sel=null; render(); }
});
board.addEventListener("pointermove",e=>{
  if(!drag) return;
  if(!drag.moved && Math.hypot(e.clientX-drag.x,e.clientY-drag.y)>5){
    drag.moved=true; drag.ghost.style.display="grid";
    const src=board.querySelector(`[data-sq="${drag.from}"] .pc`); if(src) src.classList.add("lift");
  }
  if(drag.moved){ drag.ghost.style.left=e.clientX+"px"; drag.ghost.style.top=e.clientY+"px"; }
});
function endDrag(e,cancel){
  if(!drag) return;
  const d=drag; drag=null; d.ghost.remove();
  if(!d.moved||cancel){ const src=board.querySelector(".pc.lift"); if(src) src.classList.remove("lift"); return; }
  const el=document.elementFromPoint(e.clientX,e.clientY);
  const t=el&&el.closest&&el.closest(".sq");
  if(t&&t.dataset.sq!==d.from&&tryMove(d.from,t.dataset.sq)) return;
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
    S.msg={t:`Switched to ${BOOK[pick.oi].name}: ${BOOK[pick.oi].lines[pick.li].name}.`};
    return renderAll();
  }
  const books=[...new Set((INDEX.get(posKey(fen))||[]).map(x=>x.san))];
  S.msg={bad:true,t:`${m.san} is not in this book. `+(books.length?`Book moves here: ${books.join(", ")}.`:"This is the end of the book line.")};
  render();
}
function renderLearn(){
  const ln=line(), i=S.ply;
  const n=$("note");
  let h="";
  if(i===0) h=`<div class="mv"><small>Start</small></div><p>${esc(op().summary)}</p><p class="empty">Press <kbd>→</kbd> or play the first move on the board.</p>`;
  else h=`<div class="mv">${moveLabel(i-1,sanA(ln,i-1))}<small>${i%2?"White":"Black"}</small>${ln.dev===i-1?'<span class="tag bad">Mistake</span>':""}${ln.dev>=0&&ln.dev===i-2?'<span class="tag good">Punishment</span>':""}</div><p>${esc(noteOf(ln,i-1))}</p>`;
  if(i===0&&ln.punish) h=`<div class="mv"><small>Mistake drill</small></div><p>${esc(ln.name)}. Step through to see where the opponent leaves the book and how to punish it.</p><p class="empty">Result: ${esc(ln.gain||"")}</p>`;
  if(i===ln.sans.length && i>0) h+=`<p class="empty">${ln.punish?`Result: ${esc(ln.gain||"")} Switch to Punish to find the refutation yourself.`:"End of the line. Switch to Practice to play it from memory."}</p>`;
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
  const cur=sh.querySelector(".cur"); if(cur) cur.scrollIntoView({block:"nearest"});
  const fen=ln.fens[i];
  const ent=INDEX.get(posKey(fen))||[];
  const by=new Map();
  ent.forEach(x=>{ if(!by.has(x.san)) by.set(x.san,[]); by.get(x.san).push(x); });
  let b="";
  const rows=[...by].sort((a,b)=>a[1].every(x=>x.mistake)-b[1].every(x=>x.mistake));
  for(const [san,arr] of rows){
    const mine=ln.sans[i]===san, bad=arr.every(x=>x.mistake);
    const names=[...new Set(arr.map(x=>(x.oi===S.oi?"":BOOK[x.oi].name+": ")+BOOK[x.oi].lines[x.li].name))];
    b+=`<button class="br ${mine?"mine":""} ${bad?"mist":""}" data-san="${san}"><span class="s">${moveLabel(i,san)}${bad?"?":""}</span><span class="w">${bad?'<b>Mistake</b> · ':""}${esc(names.slice(0,4).join(" · "))}${names.length>4?` +${names.length-4}`:""}</span></button>`;
  }
  $("branches").innerHTML=b||`<p class="muted">No more book moves. This is where the theory in this trainer ends.</p>`;
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
  S.P.feed=ln0.punish?{k:"info",h:`Punish drill: ${ln0.name.replace(/ \((as White|as Black|trap to avoid)\)/,"")}`,p:`You play ${c==="w"?"White":"Black"}. Follow the book until your opponent goes wrong, then find the move that punishes it.`}
    :{k:"info",h:`Play the ${ln0.name} as ${c==="w"?"White":"Black"}`,p:c==="w"?"Your move. Find the first book move.":"The computer plays White's moves. Wait for its move, then answer."};
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
      if(P.idx-1===ln.dev) P.feed={k:"alert",h:`Opponent left the book: ${moveLabel(P.idx-1,ln.sans[P.idx-1])}?`,p:"That's a mistake. Find the move that punishes it.",why:noteOf(ln,P.idx-1)};
      else P.feed={k:"info",h:`Opponent played ${moveLabel(P.idx-1,ln.sans[P.idx-1])}`,p:ln.dev>=0&&P.idx-1>ln.dev?"Keep pressing your advantage.":"Your move.",why:noteOf(ln,P.idx-1)};
      render();
    },520);
  }
}
function practiceMove(m,fen){
  const P=S.P, ln=line(), exp=ln.sans[P.idx];
  P.toast=null;
  if(m.san===exp){
    P.game.move(m.san); P.idx++; P.hint=0; P.wrong=null;
    P.feed={k:"good",h:ln.dev>=0&&P.idx-2===ln.dev?`${moveLabel(P.idx-1,m.san)}! Punished`:`${moveLabel(P.idx-1,m.san)} is correct`,why:noteOf(ln,P.idx-1)};
    render();
    if(P.idx>=ln.sans.length) finish(); else auto();
    return;
  }
  const other=(INDEX.get(posKey(fen))||[]).find(x=>x.san===m.san&&!x.mistake);
  if(other){
    P.toast={t:`${m.san} is also a book move (${BOOK[other.oi].name}: ${BOOK[other.oi].lines[other.li].name}), but this drill follows the ${ln.name}. Try again.`};
    render(); return;
  }
  P.mistakes++; P.hint=Math.min(2,P.hint+1); P.wrong=[m.from,m.to];
  const punishing=ln.dev>=0&&P.idx===ln.dev+1;
  P.feed={k:"bad",h:punishing?`${m.san} lets them off the hook`:`${m.san} is not the book move`,p:(punishing?"Look for a forcing move: a check, a capture or a fork. ":"")+(P.hint>=2?"The arrow shows the move.":"The highlighted piece is the one to move.")};
  render({shake:true});
  P.wrong=null;
}
function finish(){
  const P=S.P; if(P.done) return; P.done=true; P.busy=false;
  const ln=line(), clean=P.mistakes===0&&P.hints===0;
  if(clean){ saved.progress[ln.id]=Math.min(3,prog(ln.id)+1); persist(); }
  const n=prog(ln.id);
  P.feed={k:"done",h:ln.punish?(clean?(n>=3?"Trap mastered":"Punished cleanly"):"Drill complete"):clean?(n>=3?"Line learned":"Clean run"):"Line complete",
    p:clean?(n>=3?`You've played the ${ln.name} cleanly three times.`:`${n} of 3 clean runs on this line.`):`${P.mistakes} mistake${P.mistakes===1?"":"s"} and ${P.hints} hint${P.hints===1?"":"s"}. Play it again for a clean run.`,
    why:ln.punish?`Result: ${ln.gain}`:`Last move ${moveLabel(ln.sans.length-1,ln.sans[ln.sans.length-1])}: ${noteOf(ln,ln.sans.length-1)}`};
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
  P.feed={k:"info",h:P.hint>=2?"Here's the book move":"Hint",p:P.hint>=2?"Follow the arrow.":"Move the highlighted piece."};
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
  $("stats").innerHTML=`<span>Move <b>${Math.min(P.idx,ln.sans.length)}</b> of ${ln.sans.length}</span><span>Mistakes <b>${P.mistakes}</b></span><span>Hints <b>${P.hints}</b></span><span>Clean runs <b>${prog(ln.id)}</b>/3</span>`;
  $("bHint").disabled=P.done;
  $("bNextLine").textContent=P.done?"Next line":"Skip to next line";
  const t=$("pToast"); t.hidden=!P.toast; if(P.toast){t.className="toast"; t.textContent=P.toast.t;}
  const rep=op().side==="w"?"White":"Black", oth=op().side==="w"?"Black":"White";
  $("optSide").hidden=S.mode==="punish";
  $("segSide").innerHTML=[["auto",rep+" (repertoire)"],["flip",oth]].map(([v,l])=>`<button data-v="${v}" aria-pressed="${S.side===v}">${l}</button>`).join("");
  const sc=S.mode==="punish"?S.tscope:S.scope;
  $("segScope").innerHTML=(S.mode==="punish"?[["line","This drill"],["opening","This opening"],["all","All openings"]]:[["line","This line"],["opening","Shuffle opening"],["all","Shuffle all"]]).map(([v,l])=>`<button data-v="${v}" aria-pressed="${sc===v}">${l}</button>`).join("");
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
    h+=`<h3>${g}</h3>`; sel+=`<optgroup label="${g}">`;
    BOOK.forEach((o,oi)=>{ if(o.group!==g) return;
      const bl=o.lines.filter(l=>!l.punish), done=bl.filter(l=>prog(l.id)>=3).length;
      h+=`<button class="op-btn" data-oi="${oi}" aria-current="${oi===S.oi}"><span class="sd ${o.side}" title="Repertoire for ${o.side==="w"?"White":"Black"}"></span><span class="nm">${o.name}</span><span class="ct">${done}/${bl.length}</span></button>`;
      sel+=`<option value="${oi}" ${oi===S.oi?"selected":""}>${o.name} (${o.side==="w"?"White":"Black"}) ${done}/${bl.length}</option>`;
    });
    sel+=`</optgroup>`;
  });
  $("rail").innerHTML=h; $("opSelect").innerHTML=sel;
  const total=ALL.length, learned=ALL.filter(([o,l])=>prog(BOOK[o].lines[l].id)>=3).length;
  const tm=TALL.filter(([o,l])=>prog(BOOK[o].lines[l].id)>=3).length;
  $("tally").innerHTML=`<b>${learned}</b> of ${total} lines learned · <b>${tm}</b> of ${TALL.length} traps mastered`;
}
function renderHead(){
  const o=op();
  $("opHead").innerHTML=`<div class="meta"><span>ECO ${o.eco}</span><span>${o.group}</span><span>Repertoire for ${o.side==="w"?"White":"Black"}</span></div><h2>${o.name}</h2><p>${esc(o.summary)}</p>`;
  const chip=li=>{const l=o.lines[li], n=prog(l.id); return `<button class="chip ${l.punish?"trap":""}" data-li="${li}" aria-pressed="${li===S.li}">${l.name}<span class="pips" aria-label="${n} of 3 clean runs">${[0,1,2].map(k=>`<span class="${k<n?"on":""}"></span>`).join("")}</span></button>`;};
  const tl=trapIdx(o);
  $("lines").innerHTML=`<div class="lgrp"><p class="label">Main lines</p><div class="chips">${bookIdx(o).map(chip).join("")}</div></div>`+
    `<div class="lgrp"><p class="label">Punish mistakes</p><div class="chips">${tl.length?tl.map(chip).join(""):'<span class="muted">No mistake drills for this opening yet. The Punish tab can shuffle traps from all openings.</span>'}</div></div>`;
}
function pickOpening(oi){
  let li=bookIdx(BOOK[oi])[0];
  if(S.mode==="punish"){ const t=trapIdx(BOOK[oi]); if(t.length) li=t[0]; else { S.oi=oi; S.li=li; return nextLine(); } }
  setLine(oi,li,0); if(drill()) startPractice(); renderAll();
}
$("rail").addEventListener("click",e=>{const b=e.target.closest(".op-btn"); if(b) pickOpening(+b.dataset.oi);});
$("opSelect").addEventListener("change",e=>pickOpening(+e.target.value));
$("lines").addEventListener("click",e=>{const b=e.target.closest(".chip"); if(!b) return;
  const li=+b.dataset.li, isT=op().lines[li].punish;
  if(S.mode==="practice"&&isT) S.mode="punish";
  else if(S.mode==="punish"&&!isT) S.mode="practice";
  setLine(S.oi,li,0); setMode(S.mode,true);});
function setMode(m,keep){
  S.mode=m; S.sel=null; S.flip=false; clearTimeout(timer);
  if(!keep){
    if(m==="practice"&&line().punish){ S.li=bookIdx(op())[0]; S.ply=0; }
    if(m==="punish"&&!line().punish){ const t=trapIdx(op()); if(t.length){ S.li=t[0]; S.ply=0; } else { const [o,l]=TALL[Math.floor(Math.random()*TALL.length)]; S.oi=o; S.li=l; S.ply=0; } }
  }
  remember();
  for(const [id,v] of [["tLearn","learn"],["tPractice","practice"],["tPunish","punish"]]) $(id).setAttribute("aria-selected",m===v);
  $("learnView").hidden=m!=="learn"; $("learnView").style.display=m==="learn"?"flex":"none";
  $("practiceView").hidden=m==="learn"; $("practiceView").style.display=m!=="learn"?"flex":"none";
  $("navBtns").style.visibility=m==="learn"?"visible":"hidden";
  if(m!=="learn") startPractice();
  renderAll();
}
$("tLearn").onclick=()=>setMode("learn"); $("tPractice").onclick=()=>setMode("practice"); $("tPunish").onclick=()=>setMode("punish");

function render(o){ if(S.mode==="learn"){ renderLearn(); renderBoard(); } else renderPractice(o); }
function renderAll(){ renderRail(); renderHead(); render(); }

document.addEventListener("keydown",e=>{
  if(e.target.closest("select")) return;
  if(e.key==="ArrowLeft"){step(-1);e.preventDefault();}
  else if(e.key==="ArrowRight"){step(1);e.preventDefault();}
  else if(e.key==="Home") step(-99);
  else if(e.key==="End") step(99);
  else if(e.key==="f"||e.key==="F"){S.flip=!S.flip; render();}
  else if((e.key==="h"||e.key==="H")&&drill()) $("bHint").click();
});

setMode(S.mode);
})();
