(window["webpackJsonpclicky-game"]=window["webpackJsonpclicky-game"]||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"Antman","image":"antman.jpg"},{"id":2,"name":"Black Panther","image":"black-panther.jpg"},{"id":3,"name":"Captain America","image":"captain-america.jpg"},{"id":4,"name":"Deadpool","image":"deadpool.jpg"},{"id":5,"name":"Doctor Strange","image":"doctor-strange-1.jpg"},{"id":6,"name":"The Hulk","image":"incredible-hulk.jpg"},{"id":7,"name":"Iron Man","image":"iron-man.jpg"},{"id":8,"name":"Loki","image":"loki.jpg"},{"id":9,"name":"Nick Fury","image":"nick-fury.jpg"},{"id":10,"name":"Professor X","image":"professor-x.jpg"},{"id":11,"name":"Thanos","image":"thanos.jpg"},{"id":12,"name":"Thor","image":"thor.jpg"}]')},,,function(e,a,t){e.exports=t(19)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(2),i=t.n(c),m=t(3),o=t(4),s=t(7),l=t(5),u=t(8);t(14);var g=function(e){return r.a.createElement("div",{className:" wrapper mt-1 mb-4 mr-0 ml-0"},e.children)};t(15);var h=function(e){return r.a.createElement("nav",{className:"navbar sticky-top"},r.a.createElement("a",{href:"/clicky-game-gh"},r.a.createElement("img",{src:"marvel-logo.jpg",width:"100",height:"41",className:"d-inline-block pr-2",alt:""}),"Clicky Game"),r.a.createElement("span",{className:"justify-content-center"},e.message),r.a.createElement("span",{className:"justify-content-end"},"Score: ",e.currentScore," | Top Score: ",e.highScore," "))},d=(t(16),{backgroundImage:"url(jumbotron.jpeg)"});var p=function(){return r.a.createElement("div",{className:"jumbotron",style:d},r.a.createElement("h2",{className:"text-center pb-2"},"Clicky Memory Game!"),r.a.createElement("div",{className:"text-center w-60 mr-auto ml-auto"},r.a.createElement("p",null,"Can you remember which images you have clicked?"),r.a.createElement("p",null,"Try our Clicky Memory Game. You can only click each image one time to earn a point.")))};t(17);var f=function(e){return r.a.createElement("div",{onClick:function(){e.shuffle(e.characters),e.checkClick(e.id,e.currentScore,e.highScore)},className:"card"},r.a.createElement("div",{className:"img-container"},r.a.createElement("img",{alt:e.name,src:e.image})))};t(18);var k=function(){return r.a.createElement("div",{className:"footer d-block text-center"},r.a.createElement("p",{className:"pt-4"},"Clicky Game by Kevin Steele"))},S=t(6),y=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(s.a)(this,(e=Object(l.a)(a)).call.apply(e,[this].concat(r)))).state={characters:S,currentScore:0,highScore:0,guessed:[],message:"Click an Image to begin!"},t.shuffle=function(e){for(var a=e.length;a--;){var n=Math.floor(Math.random()*(a+1)),r=[e[n],e[a]];e[a]=r[0],e[n]=r[1]}t.setState({characters:e})},t.checkClick=function(e,a,n){t.state.guessed.includes(e)?t.setState({message:"Incorrect. Try again",currentScore:0,guessed:[]}):(a++,t.state.guessed.push(e),t.setState({currentScore:a,message:"Correct. You earned a point!"}),a>n&&t.setState({highScore:a}),12===a&&t.setState({message:"You win. Click any image to play again",currentScore:0,highScore:0,guessed:[]}))},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"container-fluid pl-0 pr-0 mr-0 ml-0"},r.a.createElement(h,{currentScore:this.state.currentScore,highScore:this.state.highScore,message:this.state.message}),r.a.createElement(p,null)),r.a.createElement("div",{className:"container mr-auto ml-auto"},r.a.createElement(g,null,this.state.characters.map((function(a){return r.a.createElement(f,{currentScore:e.state.currentScore,highScore:e.state.highScore,characters:e.state.characters,checkClick:e.checkClick,checkHigh:e.checkHigh,shuffle:e.shuffle,id:a.id,key:a.id,name:a.name,image:a.image})})))),r.a.createElement(k,null))}}]),a}(n.Component);i.a.render(r.a.createElement(y,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.6d78b854.chunk.js.map