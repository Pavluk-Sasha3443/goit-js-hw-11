import{i as a,S as h}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const m="https://pixabay.com/api/",f="46935717-685ea9342bebfa50d29cf3184";function p(s){const o=new URLSearchParams({key:f,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${m}?${o}`).then(t=>{if(!t.ok)throw new Error(t.statusText);return t.json()})}function d(s){return s.map(({webformatURL:o,largeImageURL:t,tags:i,likes:e,views:r,comments:l,downloads:u})=>`<div class="gallery">
        <a class="photo-link" href="${t}">
                <img class="photo" src="${o}" alt="${i} width="360">
        </a>
        <ul class="list-item">
           <li class="item-text">
                <h2 class="item-title">Likes</h2>
                <p class ="item-text">${e}</p>
           </li>
          <li class="item-text">
                <h2 class="item-title">Views</h2>
                <p class ="item-text">${r}</p>
          </li>
         <li class="item-text">
                <h2 class="item-title">Comments</h2>
                <p class ="item-text">${l}</p>
         </li>
         <li class="item-text">
                <h2 class="item-title">Downloads</h2>
                <p class ="item-text">${u}</p>
         </li>
     </ul>
     </div>
        `).join("")}const y=document.querySelector(".form-search"),g=document.querySelector(".js-gallery"),n=document.querySelector(".loader");let c;y.addEventListener("submit",x);function x(s){s.preventDefault(),n.style.display="block";const o=s.target.elements.query.value.trim();o===""?(a.show({title:"Error",message:"Sorry, you need to enter data for the request. Please try again!",position:"topRight",color:"red"}),n.style.display="none"):p(o).then(t=>{t.hits.length===0&&a.show({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"red"});const i=d(t.hits);g.innerHTML=i,n.style.display="none",c?c.refresh():c=new h(".gallery a"),console.log(t.hits.length)}).catch(t=>{console.log(t),a.show({title:"Error",message:" Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"red"})})}
//# sourceMappingURL=index.js.map
