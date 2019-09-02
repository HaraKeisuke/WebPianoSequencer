(window.webpackJsonppiano=window.webpackJsonppiano||[]).push([[0],{27:function(e,t,n){e.exports=n(63)},62:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(19),c=n(3),r=n(1),o=n(2),s=n(6),u=n(5),l=n(7),h=n(4),p=n(20),v=n.n(p),f=function(){function e(){Object(r.a)(this,e),this.ctx=new d.AudioContext,this.piano=void 0}return Object(o.a)(e,[{key:"load",value:function(){var e=this;v.a.instrument(this.ctx,"acoustic_grand_piano").then(function(t){e.piano=t})}},{key:"play",value:function(e){this.piano.play(e)}}],[{key:"getInstance",value:function(){return this.Instance||(this.Instance=new e),this.Instance}}]),e}();f.Instance=void 0;var d=window;function m(){var e=Object(c.a)(["\n  position:absolute;\n  background-color: white;\n  width: 30px;\n  height: 10px;\n  border-radius: 15px;\n  transition-duration:5s;\n  transition-timing-function: linear;\n  top: calc(-100vh + 400px);\n  &.isStarted {\n    transform: ",";\n  }\n"]);return m=function(){return e},e}d.AudioContext=d.AudioContext||d.webkitAudioContext;var g,b=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={isStarted:!1,height:100},n}return Object(l.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.setState({isStarted:!0,height:document.body.scrollHeight-300})}},{key:"render",value:function(){return a.createElement(w,{className:this.state.isStarted?"isStarted":"",height:this.state.height})}}]),t}(a.Component),w=h.a.div(m(),function(e){return"translateY(".concat(e.height,"px)")}),k=n(11),y=n.n(k),O=n(23),j=function(){function e(t,n){Object(r.a)(this,e),this.scale=t,this.octave=n}return Object(o.a)(e,[{key:"IsBlack",value:function(){return this.scale==g.Csharp||this.scale==g.Dsharp||this.scale==g.Fsharp||this.scale==g.Gsharp||this.scale==g.Asharp}}]),e}();!function(e){e.C="C",e.Csharp="C#",e.D="D",e.Dsharp="D#",e.E="E",e.F="F",e.Fsharp="F#",e.G="G",e.Gsharp="G#",e.A="A",e.Asharp="A#",e.B="B",e.None="Nonel"}(g||(g={}));var E=n(24),N=n(12),x=function(){function e(){Object(r.a)(this,e),this.OnSequence=new E.Subject,this.tempos=[],this.bpm=120,this.timer=void 0,this.midi=new N.Midi,this.sequenceNotes=[],this.playNotes=[],this.trackNum=0}return Object(o.a)(e,[{key:"load",value:function(){var e=Object(O.a)(y.a.mark(function e(t){var n,a=arguments;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:0,e.next=3,N.Midi.fromUrl(t);case 3:this.midi=e.sent,this.tempos=this.midi.header.tempos,this.playNotes=this.midi.tracks[n].notes.sort(function(e,t){return e.ticks-t.ticks}),this.sequenceNotes=Object.assign([],this.playNotes),this.trackNum=n;case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"play",value:function(){var e=this,t=f.getInstance().ctx,n=t.currentTime+5;this.timer=setInterval(function(){var a=t.currentTime-n;e.tempos.length>0&&e.tempos[0].ticks/1e3<a&&(e.bpm=e.tempos[0].bpm,e.tempos.shift()),e.sequenceNotes.length>0&&e.sequenceNotes[0].ticks*(120/e.bpm)/1e3-5<a&&(e.OnSequence.onNext(new j(function(e){switch(e){case"C":return g.C;case"C#":return g.Csharp;case"D":return g.D;case"D#":return g.Dsharp;case"E":return g.E;case"F":return g.F;case"F#":return g.Fsharp;case"G":return g.G;case"G#":return g.Gsharp;case"A":return g.A;case"A#":return g.Asharp;case"B":return g.B;default:return g.None}}(e.sequenceNotes[0].pitch),e.sequenceNotes[0].octave)),e.sequenceNotes.shift()),e.playNotes.length>0&&e.playNotes[0].ticks*(120/e.bpm)/1e3<a&&(f.getInstance().play(e.playNotes[0].pitch+e.playNotes[0].octave),e.playNotes.shift())},30)}},{key:"stop",value:function(){this.playNotes=this.midi.tracks[this.trackNum].notes.sort(function(e,t){return e.ticks-t.ticks}),this.sequenceNotes=Object.assign([],this.playNotes),this.tempos=this.midi.header.tempos,clearInterval(this.timer),this.timer=null}}],[{key:"getInstance",value:function(){return this.Instance||(this.Instance=new e),this.Instance}}]),e}();function A(){var e=Object(c.a)(["\n  width: calc(150% / 2);\n  height: 200px;\n  position: absolute;\n  background-color: ",";\n  background-color: black;\n  left: calc(125%/2);\n  z-index: 20;\n"]);return A=function(){return e},e}function C(){var e=Object(c.a)(["\n  width: calc(100% / 7);\n  height: 300px;\n  box-sizing: border-box;\n  background-color: ",";\n  border: 1px solid black;\n  position: relative;\n"]);return C=function(){return e},e}function I(){var e=Object(c.a)(["\n"]);return I=function(){return e},e}x.Instance=void 0;var S=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={notes:[],isActive:!1},n}return Object(l.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;x.getInstance().OnSequence.where(function(t){return t.scale===e.props.scale.scale&&t.octave===e.props.scale.octave}).subscribe(this.OnNoteCreate.bind(this))}},{key:"render",value:function(){var e=this,t=this.props.scale.IsBlack()?F:q;return a.createElement(t,{isActive:this.state.isActive,onClick:function(t){return e.onClickKey(t)}},this.state.notes.map(function(t){return a.createElement(b,{scale:e.props.scale})}),this.props.children)}},{key:"onClickKey",value:function(e){e.stopPropagation(),f.getInstance().play(this.props.scale.scale.toString()+this.props.scale.octave.toString())}},{key:"OnNoteCreate",value:function(e){var t=this,n=Object.assign([],this.state.notes);n.push(1),this.setState({notes:n}),setTimeout(function(){t.setState({isActive:!0}),setTimeout(function(){t.setState({isActive:!1})},500)},5e3)}}]),t}(a.Component),D=h.a.div(I()),q=Object(h.a)(D)(C(),function(e){return e.isActive?"#91fff6":"white"}),F=Object(h.a)(D)(A(),function(e){return e.isActive?"#68777a":"black"}),G=function(e){return a.createElement("div",{style:{display:"flex",flexWrap:"wrap",width:600,minWidth:400,backgroundColor:"white"}},a.createElement(S,{scale:new j(g.C,e.octave)},a.createElement(S,{scale:new j(g.Csharp,e.octave)})),a.createElement(S,{scale:new j(g.D,e.octave)},a.createElement(S,{scale:new j(g.Dsharp,e.octave)})),a.createElement(S,{scale:new j(g.E,e.octave)}),a.createElement(S,{scale:new j(g.F,e.octave)},a.createElement(S,{scale:new j(g.Fsharp,e.octave)})),a.createElement(S,{scale:new j(g.G,e.octave)},a.createElement(S,{scale:new j(g.Gsharp,e.octave)})),a.createElement(S,{scale:new j(g.A,e.octave)},a.createElement(S,{scale:new j(g.Asharp,e.octave)})),a.createElement(S,{scale:new j(g.B,e.octave)}))};function B(){var e=Object(c.a)(["\n  display: flex;\n  flexWrap: wrap; \n  height: 300px;\n  background-color: #222;\n  padding-top: calc(100vh - 400px);\n  width: 100%;\n  overflow-x: auto;\n"]);return B=function(){return e},e}var W=function(e){function t(e){var n;return Object(r.a)(this,t),n=Object(s.a)(this,Object(u.a)(t).call(this,e)),f.getInstance().load(),x.getInstance().load("/menuett.mid",2).then(function(){x.getInstance().play()}),n}return Object(l.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return a.createElement("div",{className:"App"},a.createElement(T,null,a.createElement(G,{octave:3}),a.createElement(G,{octave:4}),a.createElement(G,{octave:5}),a.createElement(G,{octave:6})))}}]),t}(a.Component),T=h.a.div(B()),M=(n(62),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function z(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.render(a.createElement(W,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location.toString()).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");M?(!function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):z(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):z(e)})}}()}},[[27,1,2]]]);
//# sourceMappingURL=main.b8aed7a7.chunk.js.map