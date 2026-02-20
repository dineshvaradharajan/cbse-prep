// ── Extra: Missing Ch9 + Ch11 animations ──

// ── Fig 9.5: Compound Microscope ──
register3D(function() {
  var wrap = injectView3D('Fig 9.5', 310); if (!wrap) return;
  var cv = make2DCanvas(wrap, 520, 310); var ctx = cv.getContext('2d');
  var paused = false, t = 0;
  var io = new IntersectionObserver(function(e){paused=!e[0].isIntersecting;}); io.observe(cv);
  function drawBiconvex(x,aY,h,col){
    ctx.strokeStyle=col; ctx.lineWidth=2.5;
    ctx.beginPath(); ctx.moveTo(x,aY-h); ctx.bezierCurveTo(x+10,aY-h/2,x+10,aY+h/2,x,aY+h); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(x,aY-h); ctx.bezierCurveTo(x-10,aY-h/2,x-10,aY+h/2,x,aY+h); ctx.stroke();
  }
  function draw() {
    ctx.clearRect(0,0,520,310); ctx.fillStyle='#fff'; ctx.fillRect(0,0,520,310);
    var aY=155;
    ctx.strokeStyle='#e5e7eb'; ctx.lineWidth=0.8; ctx.setLineDash([5,4]);
    ctx.beginPath(); ctx.moveTo(20,aY); ctx.lineTo(500,aY); ctx.stroke(); ctx.setLineDash([]);
    drawBiconvex(180,aY,72,'#16a34a');
    ctx.fillStyle='#16a34a'; ctx.font='9px sans-serif'; ctx.textAlign='center';
    ctx.fillText('Objective (fₒ)',180,aY+90);
    drawBiconvex(380,aY,50,'#d97706');
    ctx.fillStyle='#d97706'; ctx.font='9px sans-serif'; ctx.textAlign='center';
    ctx.fillText('Eyepiece (fₑ)',380,aY+68);
    // Focal points as dots
    [[120,'Fₒ'],[240,'F\'ₒ'],[320,'Fₑ'],[440,'F\'ₑ']].forEach(function(p){
      ctx.fillStyle='#888'; ctx.beginPath(); ctx.arc(p[0],aY,3,0,Math.PI*2); ctx.fill();
      ctx.fillStyle='#888'; ctx.font='8px sans-serif'; ctx.textAlign='center'; ctx.fillText(p[1],p[0],aY+14);
    });
    // Object arrow
    var objH = 28 + Math.sin(t*0.018)*8;
    ctx.strokeStyle='#dc2626'; ctx.lineWidth=2;
    ctx.beginPath(); ctx.moveTo(80,aY); ctx.lineTo(80,aY-objH); ctx.stroke();
    ctx.fillStyle='#dc2626'; ctx.beginPath(); ctx.moveTo(75,aY-objH); ctx.lineTo(85,aY-objH); ctx.lineTo(80,aY-objH-7); ctx.fill();
    ctx.fillStyle='#dc2626'; ctx.font='9px sans-serif'; ctx.textAlign='center'; ctx.fillText('Object',80,aY+14);
    // Intermediate image (inverted, at ~260)
    var imgH = -objH * 2.5;
    ctx.strokeStyle='#f97316'; ctx.lineWidth=1.5; ctx.setLineDash([3,2]);
    ctx.beginPath(); ctx.moveTo(260,aY); ctx.lineTo(260,aY+imgH); ctx.stroke(); ctx.setLineDash([]);
    ctx.fillStyle='#f97316'; ctx.font='8px sans-serif'; ctx.textAlign='left'; ctx.fillText("I'",264,aY+imgH-4);
    // Ray 1: parallel to axis → through F'ₒ
    ctx.strokeStyle='rgba(22,163,74,0.5)'; ctx.lineWidth=1.2;
    ctx.beginPath(); ctx.moveTo(80,aY-objH); ctx.lineTo(180,aY-objH); ctx.lineTo(240,aY); ctx.stroke();
    // Ray 2: through centre of objective
    ctx.beginPath(); ctx.moveTo(80,aY-objH); ctx.lineTo(180,aY-objH*(180-80)/(180-80)); ctx.lineTo(260,aY+imgH); ctx.stroke();
    // Ray from intermediate to eyepiece
    ctx.strokeStyle='rgba(217,119,6,0.5)'; ctx.lineWidth=1.2;
    ctx.beginPath(); ctx.moveTo(260,aY+imgH); ctx.lineTo(380,aY+imgH); ctx.lineTo(440,aY); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(260,aY+imgH); ctx.lineTo(500,aY+imgH*(-1.6)); ctx.stroke();
    // Moving dot
    var prog=((t*0.006)%1);
    var dotX=80+prog*(500-80), dotY=aY-objH*(1-prog);
    ctx.fillStyle='#fbbf24'; ctx.beginPath(); ctx.arc(dotX,dotY,4,0,Math.PI*2); ctx.fill();
    ctx.fillStyle='#475569'; ctx.font='10px sans-serif'; ctx.textAlign='center';
    ctx.fillText('M = mₒ × mₑ = (L/fₒ)(1 + D/fₑ)',260,300);
  }
  function loop(){t++; draw(); if(!paused) requestAnimationFrame(loop); else setTimeout(function(){requestAnimationFrame(loop);},200);}
  requestAnimationFrame(loop);
});

// ── Fig 9.6: Astronomical Telescope ──
register3D(function() {
  var wrap = injectView3D('Fig 9.6', 295); if (!wrap) return;
  var cv = make2DCanvas(wrap, 520, 295); var ctx = cv.getContext('2d');
  var paused = false, t = 0;
  var io = new IntersectionObserver(function(e){paused=!e[0].isIntersecting;}); io.observe(cv);
  function drawLens(x,aY,h,col){
    ctx.strokeStyle=col; ctx.lineWidth=2.5;
    ctx.beginPath(); ctx.moveTo(x,aY-h); ctx.bezierCurveTo(x+8,aY-h/2,x+8,aY+h/2,x,aY+h); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(x,aY-h); ctx.bezierCurveTo(x-8,aY-h/2,x-8,aY+h/2,x,aY+h); ctx.stroke();
  }
  function draw() {
    ctx.clearRect(0,0,520,295); ctx.fillStyle='#fff'; ctx.fillRect(0,0,520,295);
    var aY=148;
    ctx.strokeStyle='#e5e7eb'; ctx.lineWidth=0.8; ctx.setLineDash([4,4]);
    ctx.beginPath(); ctx.moveTo(20,aY); ctx.lineTo(500,aY); ctx.stroke(); ctx.setLineDash([]);
    // Objective at 140
    drawLens(140,aY,78,'#16a34a');
    ctx.fillStyle='#16a34a'; ctx.font='9px sans-serif'; ctx.textAlign='center'; ctx.fillText('Objective (fₒ large)',140,aY+96);
    // Eyepiece at 380
    drawLens(380,aY,45,'#d97706');
    ctx.fillStyle='#d97706'; ctx.font='9px sans-serif'; ctx.textAlign='center'; ctx.fillText('Eyepiece (fₑ small)',380,aY+63);
    // Common focus Fc at 315
    var Fc=315;
    ctx.fillStyle='#ef4444'; ctx.beginPath(); ctx.arc(Fc,aY,4,0,Math.PI*2); ctx.fill();
    ctx.fillStyle='#ef4444'; ctx.font='9px sans-serif'; ctx.textAlign='center'; ctx.fillText('Fₒ=Fₑ',Fc,aY+16);
    // Parallel incoming rays (3, slight angles)
    var yOffsets=[-40,0,40];
    yOffsets.forEach(function(yOff){
      // Incoming parallel (horizontal)
      ctx.strokeStyle='rgba(22,163,74,0.6)'; ctx.lineWidth=1.2;
      ctx.beginPath(); ctx.moveTo(20,aY+yOff); ctx.lineTo(140,aY+yOff); ctx.stroke();
      // Refracted through objective → converge at Fc
      ctx.beginPath(); ctx.moveTo(140,aY+yOff); ctx.lineTo(Fc,aY); ctx.stroke();
      // From Fc diverge through eyepiece → exit parallel
      var exitY=aY+yOff*(380-Fc)/(140-Fc);
      ctx.strokeStyle='rgba(217,119,6,0.6)'; ctx.lineWidth=1.2;
      ctx.beginPath(); ctx.moveTo(Fc,aY); ctx.lineTo(380,exitY); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(380,exitY); ctx.lineTo(500,exitY); ctx.stroke();
    });
    // Animated photon
    var prog=((t*0.006)%1);
    var yOff=yOffsets[Math.floor(t/100)%3];
    var dotX, dotY;
    if(prog<0.3){dotX=20+prog/0.3*(140-20); dotY=aY+yOff;}
    else if(prog<0.55){var pp=(prog-0.3)/0.25; dotX=140+pp*(Fc-140); dotY=aY+yOff*(1-pp);}
    else{var pp=(prog-0.55)/0.45; var exitY=aY+yOff*(380-Fc)/(140-Fc); dotX=Fc+pp*(500-Fc); dotY=aY+exitY*pp/aY*(1-pp)+aY*pp;}
    ctx.fillStyle='#fbbf24'; ctx.beginPath(); ctx.arc(dotX||20,dotY||aY,4,0,Math.PI*2); ctx.fill();
    // Labels
    ctx.strokeStyle='#bbb'; ctx.lineWidth=0.8;
    ctx.beginPath(); ctx.moveTo(140,aY+110); ctx.lineTo(Fc,aY+110); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(Fc,aY+110); ctx.lineTo(380,aY+110); ctx.stroke();
    ctx.fillStyle='#666'; ctx.font='9px sans-serif'; ctx.textAlign='center';
    ctx.fillText('fₒ',227,aY+124); ctx.fillText('fₑ',347,aY+124);
    ctx.fillStyle='#475569'; ctx.font='10px sans-serif'; ctx.textAlign='center';
    ctx.fillText('M = fₒ/fₑ      L = fₒ + fₑ',260,286);
  }
  function loop(){t++; draw(); if(!paused) requestAnimationFrame(loop); else setTimeout(function(){requestAnimationFrame(loop);},200);}
  requestAnimationFrame(loop);
});

// ── Fig 11.2: Stopping potential vs frequency ──
register3D(function() {
  var wrap = injectView3D('Fig 11.2', 285); if (!wrap) return;
  var cv = make2DCanvas(wrap, 440, 285); var ctx = cv.getContext('2d');
  var paused = false, t = 0;
  var io = new IntersectionObserver(function(e){paused=!e[0].isIntersecting;}); io.observe(cv);
  function draw() {
    ctx.clearRect(0,0,440,285); ctx.fillStyle='#fff'; ctx.fillRect(0,0,440,285);
    ctx.strokeStyle='#555'; ctx.lineWidth=1.5;
    ctx.beginPath(); ctx.moveTo(60,238); ctx.lineTo(400,238); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(60,238); ctx.lineTo(60,20); ctx.stroke();
    ctx.fillStyle='#555'; ctx.beginPath(); ctx.moveTo(400,238); ctx.lineTo(393,233); ctx.lineTo(393,243); ctx.fill();
    ctx.beginPath(); ctx.moveTo(60,20); ctx.lineTo(55,27); ctx.lineTo(65,27); ctx.fill();
    ctx.fillStyle='#555'; ctx.font='bold 11px sans-serif'; ctx.textAlign='left'; ctx.fillText('\u03bd',404,242);
    ctx.textAlign='center'; ctx.fillText('V\u2080',52,16); ctx.fillText('O',46,246);
    // Threshold marker
    ctx.strokeStyle='#dc2626'; ctx.lineWidth=1; ctx.setLineDash([3,2]);
    ctx.beginPath(); ctx.moveTo(130,238); ctx.lineTo(130,215); ctx.stroke(); ctx.setLineDash([]);
    ctx.fillStyle='#dc2626'; ctx.font='9px sans-serif'; ctx.textAlign='center'; ctx.fillText('\u03bd\u2080',130,252);
    // Grid
    ctx.strokeStyle='#f0f0f0'; ctx.lineWidth=0.5;
    [180,120,60].forEach(function(y){ctx.beginPath();ctx.moveTo(60,y);ctx.lineTo(400,y);ctx.stroke();});
    [200,310].forEach(function(x){ctx.beginPath();ctx.moveTo(x,238);ctx.lineTo(x,20);ctx.stroke();});
    // Three metal lines
    var pct=Math.min(1,(t*0.004)%1.6);
    [{metal:'Na',col:'#ef4444',nu0x:130},{metal:'K',col:'#f97316',nu0x:142},{metal:'Zn',col:'#2563eb',nu0x:160}].forEach(function(m){
      ctx.strokeStyle=m.col; ctx.lineWidth=2;
      ctx.beginPath(); ctx.moveTo(m.nu0x,238);
      var xEnd=m.nu0x+pct*(390-m.nu0x);
      ctx.lineTo(xEnd, 238-(xEnd-m.nu0x)*0.60);
      ctx.stroke();
      if(pct>0.6){ctx.fillStyle=m.col;ctx.font='9px sans-serif';ctx.textAlign='left';ctx.fillText(m.metal,xEnd+3,238-(xEnd-m.nu0x)*0.60);}
    });
    if(pct>0.5){ctx.fillStyle='#6366f1';ctx.font='8px sans-serif';ctx.textAlign='center';ctx.fillText('All lines: slope = h/e (same for every metal)',230,72);}
    ctx.fillStyle='#475569'; ctx.font='10px sans-serif'; ctx.textAlign='center';
    ctx.fillText('V\u2080 = (h/e)\u03bd \u2212 \u03c6/e',220,278);
  }
  function loop(){t++; draw(); if(!paused) requestAnimationFrame(loop); else setTimeout(function(){requestAnimationFrame(loop);},200);}
  requestAnimationFrame(loop);
});

// ── Fig 11.3: Photocurrent vs collector potential ──
register3D(function() {
  var wrap = injectView3D('Fig 11.3', 285); if (!wrap) return;
  var cv = make2DCanvas(wrap, 440, 285); var ctx = cv.getContext('2d');
  var paused = false, t = 0;
  var io = new IntersectionObserver(function(e){paused=!e[0].isIntersecting;}); io.observe(cv);
  function draw() {
    ctx.clearRect(0,0,440,285); ctx.fillStyle='#fff'; ctx.fillRect(0,0,440,285);
    ctx.strokeStyle='#555'; ctx.lineWidth=1.5;
    ctx.beginPath(); ctx.moveTo(170,238); ctx.lineTo(400,238); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(170,238); ctx.lineTo(40,238); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(170,248); ctx.lineTo(170,20); ctx.stroke();
    ctx.fillStyle='#555'; ctx.beginPath(); ctx.moveTo(400,238); ctx.lineTo(393,233); ctx.lineTo(393,243); ctx.fill();
    ctx.beginPath(); ctx.moveTo(170,20); ctx.lineTo(165,27); ctx.lineTo(175,27); ctx.fill();
    ctx.fillStyle='#555'; ctx.font='bold 11px sans-serif'; ctx.textAlign='left'; ctx.fillText('V',404,242);
    ctx.textAlign='center'; ctx.fillText('I',166,16); ctx.fillText('O',162,252);
    ctx.fillStyle='#666'; ctx.font='9px sans-serif'; ctx.fillText('Retarding\u2192',100,245);
    // Stopping potential
    var vpx=75;
    ctx.fillStyle='#dc2626'; ctx.beginPath(); ctx.arc(vpx,238,4,0,Math.PI*2); ctx.fill();
    ctx.strokeStyle='#dc2626'; ctx.lineWidth=1; ctx.setLineDash([3,2]);
    ctx.beginPath(); ctx.moveTo(vpx,238); ctx.lineTo(vpx,215); ctx.stroke(); ctx.setLineDash([]);
    ctx.fillStyle='#dc2626'; ctx.font='9px sans-serif'; ctx.textAlign='center';
    ctx.fillText('\u2212V\u2080',vpx,252); ctx.fillText('(same)',vpx,263);
    // 3 saturation curves for different intensities
    var pct=Math.min(1,(t*0.004)%1.6);
    [{satY:52,col:'#ea580c',lbl:'I\u2083 (high)'},{satY:108,col:'#f97316',lbl:'I\u2082'},{satY:168,col:'#fdba74',lbl:'I\u2081 (low)'}].forEach(function(c){
      ctx.strokeStyle=c.col; ctx.lineWidth=2;
      ctx.beginPath();
      var xMax=170+pct*(380-170);
      for(var xi=0;xi<=80;xi++){
        var x=vpx+(xMax-vpx)*xi/80;
        if(x<vpx){ctx.moveTo(x,238);continue;}
        var rel=Math.min(1,(x-vpx)/90);
        var Ival=c.satY*(1-Math.exp(-rel*4));
        var y=238-Ival*pct*xi/80;
        if(xi===0) ctx.moveTo(x,238); else ctx.lineTo(x,y);
      }
      ctx.stroke();
      if(pct>0.7){ctx.fillStyle=c.col;ctx.font='9px sans-serif';ctx.textAlign='left';ctx.fillText(c.lbl,xMax+3,238-c.satY*0.9*pct);}
    });
    ctx.fillStyle='#475569'; ctx.font='10px sans-serif'; ctx.textAlign='center';
    ctx.fillText('V\u2080 depends on frequency, not intensity',220,278);
  }
  function loop(){t++; draw(); if(!paused) requestAnimationFrame(loop); else setTimeout(function(){requestAnimationFrame(loop);},200);}
  requestAnimationFrame(loop);
});
