(this.webpackJsonpMoviesReactApp=this.webpackJsonpMoviesReactApp||[]).push([[0],{49:function(e,t,c){},50:function(e,t,c){},68:function(e,t,c){},85:function(e,t,c){},86:function(e,t,c){},87:function(e,t,c){},88:function(e,t,c){},91:function(e,t,c){"use strict";c.r(t);var n=c(2),i=c(0),a=c.n(i),o=c(14),s=c.n(o),r=(c(49),c(50),c(16)),l=c(4),d=c(13),v=c.n(d),h=c(15),u=c(11),j=c(36),b=c.n(j).a.create({baseURL:"https://api.themoviedb.org/3"});c(68);var p=function(e){var t=e.title,c=e.fetchUrl,a=e.mType,o=Object(l.g)(),s=Object(i.useState)([]),r=Object(u.a)(s,2),d=r[0],j=r[1];return Object(i.useEffect)((function(){function e(){return(e=Object(h.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(c),e.next=3,b.get(c);case 3:return t=e.sent,j(t.data.results),console.log(t.data.results),e.abrupt("return",t);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[c]),Object(n.jsxs)("div",{className:"row",children:[" ",Object(n.jsxs)("h2",{className:"row_title",children:[" ",t," "]}),Object(n.jsxs)("div",{className:"row_posters",children:[" ",d.map((function(e){return Object(n.jsx)("img",{className:"poster large_poster",src:"".concat("https://image.tmdb.org/t/p/original").concat(e.poster_path),alt:e.name,onClick:function(){return function(e){var t="movie";t="both"===a?e.media_type:a,o.push("movie"===t?"/movie/".concat(null===e||void 0===e?void 0:e.id):"/tv/".concat(null===e||void 0===e?void 0:e.id)),console.log("clicked on ".concat(null===e||void 0===e?void 0:e.id))}(e)}},e.id)}))," "]})]})},m=c(23),f="5e08ba1c1a1dcf7f83c837a7b9db7776",g={fetchBanner:"/tv/popular?api_key=".concat(f,"&language=en-US&with_network=213"),fetchTrending:"/trending/all/week?api_key=".concat(f,"&language=en-US"),fetchNetflixOriginals:"/discover/tv?api_key=".concat(f,"&with_network=213"),fetchTopRated:"/movie/top_rated?api_key=".concat(f,"&language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(f,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(f,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(f,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(f,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(f,"&with_genres=99"),fetchPopulerTv:"/tv/popular?api_key=".concat(f,"&language=en-US"),fetchTopRatedTv:"/tv/top_rated?api_key=".concat(f,"&language=en-US")};c(85);var O=function(){var e,t,c=Object(i.useState)([]),a=Object(u.a)(c,2),o=a[0],s=a[1],r=Object(l.g)();return Object(i.useEffect)((function(){function e(){return(e=Object(h.a)(v.a.mark((function e(){var t,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.get(g.fetchBanner);case 2:t=e.sent,c=Math.floor(Math.random()*t.data.results.length-1),s(t.data.results[c]),console.log(t.data.results[c]);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(n.jsxs)("header",{className:"banner",style:{backgroundSize:"cover",backgroundImage:'url(\n                "https://image.tmdb.org/t/p/original'.concat(null===o||void 0===o?void 0:o.backdrop_path,'"\n            )'),backgroundPosition:"center center"},children:[Object(n.jsxs)("div",{className:"banner_content",children:[Object(n.jsx)("h1",{className:"banner_title",children:(null===o||void 0===o?void 0:o.title)||(null===o||void 0===o?void 0:o.name)||(null===o||void 0===o?void 0:o.original_title)}),Object(n.jsxs)("div",{className:"banner_buttons",children:[Object(n.jsx)("button",{className:"banner_button btn-play",children:"Play"}),Object(n.jsx)("button",{className:"banner_button",onClick:function(){return e=null===o||void 0===o?void 0:o.id,r.push("/tv/".concat(e)),void console.log("clicked on ".concat(e));var e},children:"View"})]}),Object(n.jsx)("h1",{className:"banner_description",children:(e=null===o||void 0===o?void 0:o.overview,t=300,(null===e||void 0===e?void 0:e.length)>t?e.substr(0,t-1)+"...":e)})]}),Object(n.jsx)("div",{className:"banner--fadebottom"})]})};c(86);c(87);var x=function(){return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(O,{}),Object(n.jsx)(p,{title:"Trending Now",fetchUrl:g.fetchTrending,mType:"both"}),Object(n.jsx)(p,{title:"Popular TV Shows",fetchUrl:g.fetchPopulerTv,mType:"tv"}),Object(n.jsx)(p,{title:"Top Rated Movies",fetchUrl:g.fetchTopRated,mType:"movie"}),Object(n.jsx)(p,{title:"Top Rated TV Shows",fetchUrl:g.fetchTopRatedTv,mType:"tv"}),Object(n.jsx)(p,{title:"Action Movies",fetchUrl:g.fetchActionMovies,mType:"movie"}),Object(n.jsx)(p,{title:"Comedy Movies",fetchUrl:g.fetchComedyMovies,mType:"movie"}),Object(n.jsx)(p,{title:"Horror Movies",fetchUrl:g.fetchHorrorMovies,mType:"movie"}),Object(n.jsx)(p,{title:"Romance Movies",fetchUrl:g.fetchRomanceMovies,mType:"movie"})]})},_=(c(88),c(39)),y=c.n(_),N=c(107);function w(e){var t=[];return null===e||void 0===e||e.forEach((function(e){"Director"===(null===e||void 0===e?void 0:e.job)&&t.push(null===e||void 0===e?void 0:e.name)})),t}function k(e){var t=[];return null===e||void 0===e||e.forEach((function(e){"Writer"===(null===e||void 0===e?void 0:e.job)&&t.push(null===e||void 0===e?void 0:e.name)})),t}function T(e){var t=Math.round(e/60),c=e%60;return"".concat(t,"h ").concat(c,"mins")}var S=function(){var e=Object(l.h)().id,t="https://image.tmdb.org/t/p/original",c="https://api.themoviedb.org/3/movie/".concat(e,"?api_key=5e08ba1c1a1dcf7f83c837a7b9db7776&language=en-US"),a="https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=5e08ba1c1a1dcf7f83c837a7b9db7776&language=en-US"),o="https://api.themoviedb.org/3/movie/".concat(e,"/images?api_key=5e08ba1c1a1dcf7f83c837a7b9db7776"),s=Object(i.useState)(),r=Object(u.a)(s,2),d=r[0],j=r[1],p=Object(i.useState)(),f=Object(u.a)(p,2),g=f[0],O=f[1],x=Object(i.useState)(),_=Object(u.a)(x,2),S=_[0],M=_[1],U=Object(i.useState)(),R=Object(u.a)(U,2),C=R[0],P=R[1];function A(e){y()(e||"").then((function(e){var t=new URLSearchParams(new URL(e).search);P(t.get("v")||""),console.log(t.get("v"))})).catch((function(e){return console.log(e)}))}return Object(i.useEffect)((function(){function e(){return(e=Object(h.a)(v.a.mark((function e(){var t,n,i;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(c),e.next=3,b.get(c);case 3:return t=e.sent,e.next=6,b.get(a);case 6:return n=e.sent,e.next=9,b.get(o);case 9:return i=e.sent,j(t.data),A(t.data.original_title||""),O(n.data),M(i.data.backdrops),console.log(t.data),console.log(n.data),console.log(i.data.backdrops),e.abrupt("return",t);case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}window.scrollTo(0,0),function(){e.apply(this,arguments)}()}),[c]),Object(n.jsxs)("main",{children:[Object(n.jsxs)("section",{className:"movie-detail",children:[Object(n.jsxs)("div",{className:"movie-metadeta",children:[Object(n.jsx)("img",{src:"".concat(t).concat(null===d||void 0===d?void 0:d.poster_path),alt:"",className:"movie-poster"}),Object(n.jsx)("h2",{children:null===d||void 0===d?void 0:d.original_title}),Object(n.jsxs)("div",{className:"movie-info",children:[Object(n.jsx)("h6",{className:"info_field",children:"Release Date"}),Object(n.jsx)("h4",{children:"".concat(null===d||void 0===d?void 0:d.release_date)}),Object(n.jsx)("h6",{className:"info_field",children:"Runtime"}),Object(n.jsx)("h4",{children:"".concat(T(null===d||void 0===d?void 0:d.runtime))}),Object(n.jsx)("h6",{className:"info_field",children:"Tagline"}),Object(n.jsx)("h4",{children:"".concat(null===d||void 0===d?void 0:d.tagline)}),Object(n.jsx)("h6",{className:"info_field",children:"Budget"}),Object(n.jsx)("h4",{children:"".concat(null===d||void 0===d?void 0:d.budget)}),Object(n.jsx)("h6",{className:"info_field",children:"Director"}),Object(n.jsx)("h4",{children:"".concat(w(null===g||void 0===g?void 0:g.crew))}),Object(n.jsx)("h6",{className:"info_field",children:"Writers"}),Object(n.jsx)("h4",{children:"".concat(k(null===g||void 0===g?void 0:g.crew))})]})]}),Object(n.jsxs)("div",{className:"movie-overview",children:[Object(n.jsxs)("div",{className:"movie-numbers",children:[Object(n.jsx)("h1",{children:"Rating"}),Object(n.jsxs)("h3",{children:[null===d||void 0===d?void 0:d.vote_average,"/",Object(n.jsxs)("span",{className:"rating_number",children:["10 (",Object(n.jsx)("span",{class:"vote-count",children:null===d||void 0===d?void 0:d.vote_count}),")"]})]}),Object(n.jsx)("h2",{children:"Genre"}),null===d||void 0===d?void 0:d.genres.map((function(e){return Object(n.jsx)(N.a,{size:"small",className:"genre-chip",color:"white",label:e.name})}))]}),Object(n.jsxs)("div",{className:"storyline",children:[Object(n.jsx)("h1",{children:"Storyline"}),Object(n.jsx)("h3",{children:null===d||void 0===d?void 0:d.overview})]}),Object(n.jsx)("div",{className:"cast-title",children:Object(n.jsx)("h1",{children:"Cast"})}),Object(n.jsx)("div",{className:"cast",children:null===g||void 0===g?void 0:g.cast.map((function(e){return Object(n.jsxs)("div",{className:"actor",children:[Object(n.jsx)("img",{src:"".concat(t).concat(e.profile_path),alt:""}),Object(n.jsx)("h4",{children:e.name})]})}))})]}),Object(n.jsx)("div",{className:"movie-images",children:null===S||void 0===S?void 0:S.map((function(e){return console.log("".concat(t).concat(null===e||void 0===e?void 0:e.file_path)),Object(n.jsx)("img",{src:"".concat(t).concat(e.file_path),alt:"",className:"movie-image"},e.file_path)}))})]}),Object(n.jsx)("div",{className:"yt",children:C&&Object(n.jsx)(m.a,{videoId:C,opts:{height:"600",width:"100%",playerVars:{autoplay:1}}})})]})};var M=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(r.a,{children:Object(n.jsxs)(l.d,{children:[Object(n.jsx)(l.b,{exact:!0,path:"/",component:x}),Object(n.jsx)(l.b,{path:"/movie/:id",component:S}),Object(n.jsx)(l.a,{from:"/*",to:"/",exact:!0})]})})})},U=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,108)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,a=t.getLCP,o=t.getTTFB;c(e),n(e),i(e),a(e),o(e)}))};s.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(M,{})}),document.getElementById("root")),U()}},[[91,1,2]]]);
//# sourceMappingURL=main.e0afefac.chunk.js.map