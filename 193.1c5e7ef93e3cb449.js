(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[193],{40193:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var r=n(57437),a=n(2265);n(35046);var o=n(60759),s=n.n(o);function p(){let e=a.useRef(null);return(0,a.useEffect)(()=>{let t=document.querySelector("#map");if(t&&!e.current){let n=s().map(t,{scrollWheelZoom:!1}).setView([37.835281,-122.268192],13);s().tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(n),s().marker([37.835281,-122.268192]).addTo(n).openPopup(),document.getElementsByClassName("leaflet-interactive")[0].src="/assets/marker-icon.png",e.current=n}},[]),(0,r.jsx)("div",{id:"map",className:"map contactMap",style:{height:"50vh",pointerEvents:"none"}})}},35046:function(){}}]);