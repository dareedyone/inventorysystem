'use strict'
var pq = phoneq.innerHTML;
var lq = laptopq.innerHTML;
var tq = tabletq.innerHTML;
var tv = tvq.innerHTML;






function blink () {
document.querySelector('#pha').focus();
}

document.querySelector('table').addEventListener('keyup', dot);
btn.addEventListener('click', prt);



function dot () {
  var pr;
  var ans;
  var total = 0;
  var toq = 0;
  
var pa = pha.value;
var la = laa.value;
var ta = taa.value;
var tav = tva.value;

   if (pa > 0 && pa <= Number(pq)) {
  //  ans =  Number(pq) - pa; 
 pr =  pp.innerHTML.slice(1);
 total +=  pa * Number(pr);
 toq += Number(pa);
ap.innerHTML = '#' + pa * Number(pr);

} else if(pa) {
  if(pa < 1) {
  alert('Value inserted is less than or equal to zero')
}else if (pa > Number(pq)) {
  alert('amount greater than available stock, punch in a lower number')
}
}


if (la > 0 && la <= Number(lq)) {
 
 pr =  lp.innerHTML.slice(1);
 total +=  la * Number(pr)
 toq += Number(la);
al.innerHTML = '#' + la * Number(pr);

} else if(la) {
  if(la < 1) {
  alert('Value inserted is less than or equal to zero')
}else if (la > Number(lq)) {
  alert('amount greater than available stock, punch in a lower number')
}
}



if (ta > 0 && ta <= Number(tq)) {
  
 pr =  tp.innerHTML.slice(1);
 total +=  ta * Number(pr)
 toq += Number(ta);
at.innerHTML = '#' + ta * Number(pr);

} else if(ta) {
  if(ta < 1) {
  alert('Value inserted is less than or equal to zero')
}else if (ta > Number(tq)) {
  alert('amount greater than available stock, punch in a lower number')
}
}


if (tav > 0 && tav <= Number(tv)) {
 
 pr =  tvp.innerHTML.slice(1);
 total +=  tav * Number(pr)
 toq += Number(tav);
atv.innerHTML = '#' + tav * Number(pr);

} else if(tav) {
  if(tav < 1) {
  alert('Value inserted is less than or equal to zero')
}else if (tav > Number(tv)) {
  alert('amount greater than available stock, punch in a lower number')
}
}



 tota.innerHTML = '#' + total;
 totq.innerHTML = toq;


}

function prt () {
  window.print()
  pq = phoneq.innerHTML;
 lq = laptopq.innerHTML;
 tq = tabletq.innerHTML;
 tv = tvq.innerHTML;


  pq =  pq - pha.value;
if (pq >= 0) {
  phoneq.innerHTML = pq;
  pha.value = ""
  ap.innerHTML = "";
} else if (pq <= 0) {
  alert('Value inserted is less than or equal to zero')
}

lq =  lq - laa.value;
if (lq >= 0) {
  laptopq.innerHTML = lq;
  laa.value = ""
  al.innerHTML= "";
} else if (lq <= 0) {
  alert('Value inserted is less than or equal to zero')
}

tq =  tq - taa.value;
if (tq >= 0) {
  tabletq.innerHTML = tq;
  taa.value = ""
  at.innerHTML= "";
} else if (tq <= 0) {
  alert('Value inserted is less than or equal to zero')
}


tv =  tv - tva.value;
if (tv >= 0) {
  tvq.innerHTML = tv;
  tva.value = ""
  atv.innerHTML= "";
} else if (tv <= 0) {
  alert('Value inserted is less than or equal to zero')
}
totq.innerHTML = "";
 tota.innerHTML = "";
}


document.getElementById('mg1').addEventListener('mouseover', dp1)
;
document.getElementById('mg2').addEventListener('mouseover', dp2);
document.getElementById('mg3').addEventListener('mouseover', dp3);
document.getElementById('mg4').addEventListener('mouseover', dp4)

document.getElementsByClassName('im')


function dp() {
  display.innerHTML = "";
}

function dp1() {
 display.innerHTML = '<img id="mg" src="images/phone.jpg" alt="phone"></img>'
  
}

function dp2() {
  display.innerHTML = '<img id="mg" src="images/laptop.png" alt="laptop">'
   
 }

 function dp3() {
  display.innerHTML = '<img id="mg" src="images/tab.jpg" alt="">'
   
 }

 function dp4() {
  display.innerHTML = '<img id="mg" src="images/tv.jpg" alt="">'
   
 }









