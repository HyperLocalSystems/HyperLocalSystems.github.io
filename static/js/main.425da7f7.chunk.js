(this.webpackJsonphyperlocalweb=this.webpackJsonphyperlocalweb||[]).push([[0],{20:function(n,e,t){},21:function(n,e,t){},28:function(n,e,t){"use strict";t.r(e);var o,i,a,c,r,l,d,s,p,b,g,h,u=t(1),j=t.n(u),f=t(10),m=t.n(f),x=(t(20),t(21),t(8)),O=t(3),w=t(30),v=t(4),z=t(14),y=t(15),C=t(2),L=new w.a("AIzaSyA89Ry51DT28yrjSGJHGe9-zTYLCZO0zCY",{}),k=v.a.div(o||(o=Object(O.a)(["\n    font-size: 1.5em;\n    font-weight: bold;\n    padding: 0.25em;\n    // margin: 0.5em;\n    text-align: center;\n    color: #550394;\n    height: 50px;\n    background-color: #eee;\n"]))),I=v.a.div(i||(i=Object(O.a)(["\n    position: absolute;\n    top: 50px;\n    bottom: 150px;\n    width: 100%;\n    z-index: 0;\n"]))),T=v.a.div(a||(a=Object(O.a)(["\n    font-weight: bold;\n    font-size: 1.1em;\n    padding-top:0.5em;\n"]))),E=v.a.button(c||(c=Object(O.a)(["\n    width: 90%;\n    left: 5%;\n    height: 40px;\n    position: absolute;\n    margin-top: 10px;\n    bottom: 15px;\n    font-size: 12px;\n    Font-weight: bold;\n    border-radius: 8px;\n    color: #fff;\n    \n    background-color: #550394;\n"]))),S=v.a.div(r||(r=Object(O.a)(["\n    position: absolute;\n    font-size: 13px;\n    width: 100%;\n    height: 150px;\n    bottom: 0;\n    background-color: #eee;\n\n    div{\n        padding-left: 0.75em;\n        padding-right: 0.75em;\n        padding-top: 0.5em;\n    }\n"]))),A=v.a.div(l||(l=Object(O.a)(["\n    color: #969595;\n    font-weight: bold;\n    font-size: 12px;\n    "]))),N=v.a.div(d||(d=Object(O.a)(["\nclear: both;\nbackground: #000;\nborder-radius: 8px;\ncolor: #fff;\n// display: inline-block;\nfont-size: 0.7em;\nfont-weight: bold;\npadding: 6px;\nline-height: 1em;\nmargin: 0 auto;\nmargin-top: -89px; // high precision stuff\ntop:50%;\nleft:55%; // high precision stuff\nmargin-left:-100px;\nposition: absolute;\ntext-align: center;\npointer-events: none;\nvertical-align: top;\nmin-width: 7em;\n\n&:after {\n    border: 1em solid transparent;\n\tborder-top-color: #000;\n\tcontent: '';\n\tmargin-left: -1em;\n\tposition: absolute;\n\ttop: 90%;\n\tleft: 50%;\n\twidth: 0;\n\theight: 0;\n  }\n\nspan{\n    font-size: 0.9em;\n    color: #c2c2c2;\n    font-weight: normal;\n}\n"]))),G=v.a.div(s||(s=Object(O.a)(["\n  position: absolute;\n  bottom: 170px;\n  right: 10px;\n\n  button {\n    width: 30px;\n    height: 30px;\n    border-radius: 50%;\n    \n  }\n"]))),D=!1;function J(){var n=j.a.useState({lat:10.61878,lng:76.21538}),e=Object(x.a)(n,2),t=e[0],o=e[1],i=j.a.useState(""),a=Object(x.a)(i,2),c=a[0],r=a[1];function l(n,e){b.geocode({location:{lat:n,lng:e}}).then((function(n){n.results[0]?r(n.results[0].formatted_address):window.alert("No results found")})).catch((function(n){return window.alert("Geocoder failed due to: "+n)}))}return D||L.load().then((function(n){b=new(p=n).maps.Geocoder,(h=new n.maps.Map(document.getElementById("map"),{center:t,zoom:10,disableDefaultUI:!0})).addListener("center_changed",(function(){g&&clearTimeout(g),g=window.setTimeout((function(){var n=h.getCenter().lat(),e=h.getCenter().lng();o({lat:n,lng:e}),r("updating..."),l(n,e)}),500)})),D=!0})),Object(C.jsxs)("div",{children:[Object(C.jsxs)("div",{children:[Object(C.jsx)(k,{children:"HyperLocal"}),Object(C.jsx)(I,{id:"map",children:" "}),Object(C.jsxs)(N,{children:[Object(C.jsx)("div",{children:" Order will be delivered here"}),Object(C.jsx)("span",{children:"Place the pin accurately on the map"})]})]}),Object(C.jsx)(G,{children:Object(C.jsx)("button",{onClick:function(){r("Please wait..."),navigator.geolocation.getCurrentPosition((function(n){var e=new p.maps.LatLng(n.coords.latitude,n.coords.longitude);h.panTo(e),h.setZoom(18),o({lat:n.coords.latitude,lng:n.coords.longitude}),r("updating..."),l(t.lat,t.lng)}))},children:Object(C.jsx)(z.a,{})})}),Object(C.jsxs)(S,{children:[Object(C.jsx)(A,{children:" SELECT DELIVERY LOCATION "}),Object(C.jsxs)(T,{children:[Object(C.jsx)(y.a,{}),c]}),Object(C.jsx)(E,{children:"CONFIRM LOCATION"})]})]})}var M=function(){var n=t(27);console.log(n.encode(37.8324,112.5584));var e=n.decode("ww8p1r4t8");console.log(e.latitude),console.log(e.longitude);var o=n.decode_bbox("ww8p1r4t8"),i=n.neighbors("t9yhm");return console.log("neighbors"),console.log(i),console.log(o),Object(C.jsx)("div",{className:"App",children:Object(C.jsx)(J,{})})};console.log("hi"),m.a.render(Object(C.jsx)(j.a.StrictMode,{children:Object(C.jsx)(M,{})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.425da7f7.chunk.js.map