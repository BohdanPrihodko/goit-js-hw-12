import{a as y,S as h,i as l}from"./assets/vendor-b11e2a50.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const t of r.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&o(t)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const g="44474064-e47939977861edfa0fa12c2ac",p="https://pixabay.com/api/";async function c(i,a=1){const s=await y.get(p,{params:{key:g,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0,page:a,per_page:12}});if(s.status!==200)throw new Error("Failed to fetch images");return s.data}function d(i,a=!1){const s=document.querySelector(".gallery"),o=i.map(({webformatURL:e,largeImageURL:r,tags:t,likes:n,views:u,comments:f,downloads:m})=>`
      <a class="gallery__item" href="${r}">
        <img class="gallery__image" src="${e}" width=360; height=200; alt="${t}" />
        <div class="info">
          <p>Likes: ${n}</p>
          <p>Views: ${u}</p>
          <p>Comments: ${f}</p>
          <p>Downloads: ${m}</p>
        </div>
      </a>
    `).join("");a?s.insertAdjacentHTML("beforeend",o):s.innerHTML=o,new h(".gallery a").refresh()}document.addEventListener("DOMContentLoaded",()=>{const i=document.querySelector("#search-form"),a=document.querySelector(".gallery"),s=document.querySelector(".load-more"),o=document.querySelector(".loader");let e=1,r="";i.addEventListener("submit",async t=>{if(t.preventDefault(),r=t.currentTarget.elements.query.value.trim(),!r){l.error({title:"Error",message:"Please enter a search query!"});return}a.innerHTML="",e=1,s.classList.add("hidden"),o.classList.add("visible");try{const n=await c(r,e);n.hits.length===0?l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}):(d(n.hits),s.classList.remove("hidden"))}catch(n){l.error({title:"Error",message:n.message})}finally{o.classList.remove("visible")}}),s.addEventListener("click",async()=>{e+=1,o.classList.add("visible");try{const t=await c(r,e);d(t.hits,!0),(t.hits.length===0||e*12>=t.totalHits)&&(s.classList.add("hidden"),l.info({title:"Info",message:"We're sorry, but you've reached the end of search results."}))}catch(t){l.error({title:"Error",message:t.message})}finally{o.classList.remove("visible")}})});
//# sourceMappingURL=commonHelpers.js.map
