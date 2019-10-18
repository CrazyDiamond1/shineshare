(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,n){e.exports=n(30)},23:function(e,t,n){},26:function(e){e.exports={pokemon:[{species:"Pikachu",nickname:"F",region:"Ultra-Moon",date:"5/23/2018",gender:"f"},{species:"Unown",nickname:"F",region:"Ultra-Moon",date:"5/23/2018",gender:"f"},{species:"Venusaur",nickname:"F",region:"Ultra-Moon",date:"5/23/2018",gender:"m"},{species:"Unown",nickname:"U",region:"Ultra-Moon",date:"5/23/2018",gender:"e"},{species:"Charizard",nickname:"F",region:"Ultra-Moon",date:"5/23/2018",gender:"m"},{species:"Blastoise",nickname:"F",region:"Ultra-Moon",date:"5/23/2018",gender:"m"}]}},27:function(e){e.exports={news:[{title:"Working on New UI",content:"I am working an a new UI. I got Adobe XD and started on the 17th! I can't wait for this site to become a reality!",date:"10/18/2019"},{title:"Demo Site Deployed to Github Pages!",content:"Today I learned how to deploy React projects to github! This is so exciting! For those of you who are new, the colors are like this because it's easy to tell what components everything is made from!",date:"10/15/2019"},{title:"Look at That!",content:"Wow look at that!",date:"5/23/2018"}]}},28:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(15),i=n.n(o),c=(n(23),n(2)),s=n(3),l=n(5),u=n(4),m=n(6),p=n(32),h=n(34),d=n(33),b=n(31),f=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("ul",{className:"navbar"},r.a.createElement(b.a,{to:"/shineshare",className:"navbar-item"},"Home"),r.a.createElement(b.a,{to:"/shineshare/pokemon",className:"navbar-item"},"Pokemon"),r.a.createElement(b.a,{to:"/shineshare/community",className:"navbar-item"},"Community"),r.a.createElement(b.a,{to:"/shineshare/about",className:"navbar-item"},"About"),r.a.createElement(b.a,{to:"/shineshare/support",className:"navbar-item"},"Support")))}}]),t}(a.Component),E=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"LogUserIn",value:function(){document.getElementById("username").value,document.getElementById("password").value}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"login-panel"},r.a.createElement("form",null,r.a.createElement("p",null,"Login:",r.a.createElement("input",{type:"text",id:"username",placeholder:"Username"}),r.a.createElement("input",{type:"password",id:"password",placeholder:"Password"}))),r.a.createElement("div",{className:"register-link"},r.a.createElement("p",null,"Need to ",r.a.createElement(b.a,{to:"/shineshare/register",className:"navbar-item"},"REGISTER?")))),r.a.createElement("div",{className:"banner"}),r.a.createElement(f,null))}}]),t}(a.Component),y=n(10),v=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={Name:"",Game:"",Gender:"",Image:"",BackupImage:""},n.delta.bind(Object(y.a)(Object(y.a)(n))),n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"delta",value:function(e){this.setState({Image:e})}},{key:"setInitialState",value:function(){this.setState({Name:this.props.name,Gender:this.props.gender,Game:this.props.game})}},{key:"testImage",value:function(e){return new Promise(function(t,n){var a=new Image;a.addEventListener("load",function(){t(this)}),a.addEventListener("error",function(){n()}),a.src=e})}},{key:"setImage",value:function(e){var t=this.props.gender,n=this.props.name,a="",r=";";"!"!==t&&"?"!==t&&"none"!==t?(a="https://play.pokemonshowdown.com/sprites/xyani-shiny/".concat(n.toLowerCase(),"-").concat(t.toLowerCase(),".gif"),r="https://play.pokemonshowdown.com/sprites/xyani-shiny/".concat(n.toLowerCase(),".gif")):a="!"===this.props.gender?"https://play.pokemonshowdown.com/sprites/xyani-shiny/".concat(n.toLowerCase(),"-exclamation.gif"):"?"===this.props.gender?"https://play.pokemonshowdown.com/sprites/xyani-shiny/".concat(n.toLowerCase(),"-question.gif"):"https://play.pokemonshowdown.com/sprites/xyani-shiny/".concat(n.toLowerCase(),".gif"),this.setState({Image:a}),this.testImage(a).then(function(t){console.log("That image is found and loaded",t),e.delta(a)},function(){console.log("That image was not found"),e.delta(r)})}},{key:"componentDidMount",value:function(){this.setInitialState(),this.setImage(this)}},{key:"render",value:function(){return r.a.createElement("div",{className:"popular-hunts-card"},r.a.createElement("div",{className:"popular-hunts-card-text"},r.a.createElement("div",null,this.state.Name),r.a.createElement("div",null,this.state.Game)),r.a.createElement("img",{src:this.state.Image}))}}]),t}(a.Component),g=n(26).pokemon,O=0,j=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"popular-hunts"},r.a.createElement("h1",null,"Popular Hunts"),g.map(function(e){return r.a.createElement(v,{key:O+=1,name:e.species,gender:e.gender,game:e.region})}))}}]),t}(a.Component),w=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={Title:"",Content:"",Date:""},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"setInitialState",value:function(){this.setState({Title:this.props.title,Content:this.props.content,Date:this.props.date})}},{key:"componentDidMount",value:function(){this.setInitialState()}},{key:"render",value:function(){return r.a.createElement("div",{className:"news-card"},r.a.createElement("div",{className:"news-card-text"},r.a.createElement("h2",null,this.state.Title),r.a.createElement("h3",null,this.state.Date),r.a.createElement("div",null,this.state.Content)))}}]),t}(a.Component),k=n(27).news,C=0,I=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={state:"Java"},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"news"},r.a.createElement("h1",null,"News"),k.map(function(e){return r.a.createElement(w,{key:C+=1,title:e.title,content:e.content,date:e.date})}))}}]),t}(a.Component),N=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"footer"},r.a.createElement(f,null),r.a.createElement("p",{id:"copyright"},"Copyright \xa92018 by Noah W. Tanner"))}}]),t}(a.Component),x=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"page-container"},r.a.createElement("div",{id:"content-wrap"},r.a.createElement(E,null),r.a.createElement(j,null),r.a.createElement(I,null),r.a.createElement(N,null)))}}]),t}(a.Component),S=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(E,null),r.a.createElement("form",null,r.a.createElement("p",null,"Register "),r.a.createElement("input",{type:"text",id:"username",placeholder:"Username"})," ",r.a.createElement("br",null),r.a.createElement("input",{type:"password",id:"password",placeholder:"Password"}),r.a.createElement("br",null),r.a.createElement("input",{type:"password",id:"confirm-password",placeholder:"Confirm Password"}),r.a.createElement("br",null)),r.a.createElement(N,null))}}]),t}(a.Component),U=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={Content:"",Date:""},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"setInitialState",value:function(){this.setState({Content:this.props.content,Date:this.props.date})}},{key:"componentDidMount",value:function(){this.setInitialState()}},{key:"render",value:function(){return r.a.createElement("div",{className:"not-found-body"},r.a.createElement("div",{className:"not-found-text"},r.a.createElement("h1",null,this.state.Date),r.a.createElement("div",null,this.state.Content)))}}]),t}(a.Component),D=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"page-container"},r.a.createElement("div",{id:"content-wrap"},r.a.createElement(E,null),r.a.createElement(U,{content:"PAGE NOT FOUND",date:"10/15/19"}),r.a.createElement(N,null)))}}]),t}(a.Component),L=(n(28),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){document.title="Shine Share - Share Your Shiny Pokemon"}},{key:"render",value:function(){return r.a.createElement("div",{className:"main-app-container"},r.a.createElement(p.a,null,r.a.createElement(h.a,null,r.a.createElement(d.a,{exact:!0,path:"/shineshare",component:x}),r.a.createElement(d.a,{exact:!0,path:"",component:x}),r.a.createElement(d.a,{exact:!0,path:"/",component:x}),r.a.createElement(d.a,{exact:!0,path:"/shineshare/register",component:S}),r.a.createElement(d.a,{path:"*",component:D}))))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,1,2]]]);
//# sourceMappingURL=main.d2f7669e.chunk.js.map