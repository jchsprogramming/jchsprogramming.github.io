(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a.p+"static/media/instagram.2e7682f6.svg"},function(e,t,a){e.exports=a.p+"static/media/github.542b399f.svg"},,,,function(e,t,a){e.exports=a.p+"static/media/poster.9548205f.png"},function(e,t,a){e.exports=a.p+"static/media/instagram-hover.71d5d61d.svg"},function(e,t,a){e.exports=a.p+"static/media/github-hover.ae93cc29.svg"},function(e,t,a){e.exports=a(28)},,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(10),r=a.n(l),s=a(8),o=(a(23),a(24),a(25),a(26),a(27),{title:"JCHS Programming Club",navs:["Home","About","Projects","Contact"],active:{name:"Home",index:0}}),i=a(1),m=a(2),u=a(4),p=a(3),h=a(5),b=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"isActive",value:function(){return this.props.index===this.props.active?" active":""}},{key:"render",value:function(){return c.a.createElement("div",{className:"navpage flex full-height center clickable"},c.a.createElement("button",{className:"clickable header"+this.isActive()},this.props.label))}}]),t}(c.a.Component),v=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"logo nav flex center relative",onClick:this.setNavPage},c.a.createElement("pre",{className:"brackets flex center"},"["),c.a.createElement("div",{className:"title flex center column"},this.props.title.split(" ").map(function(e,t){return c.a.createElement("pre",{className:"title title-"+(t+1),key:t},e)})),c.a.createElement("pre",{className:"brackets flex center"},"]"))}}]),t}(c.a.Component),g=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).setNavPage=a.props.setNavPage,a.updatePage=a.props.updatePage,a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"nav flex",onClick:this.setNavPage},this.props.navs.slice(0,Math.ceil(this.props.navs.length/2)).map(function(t,a){return c.a.createElement(b,{label:t,active:e.props.active,index:a,key:a})}),c.a.createElement(v,{title:this.props.title}),this.props.navs.slice(Math.ceil(this.props.navs.length/2),this.props.navs.length).map(function(t,a){return c.a.createElement(b,{label:t,active:e.props.active,index:a+Math.ceil(e.props.navs.length/2),key:a+Math.ceil(e.props.navs.length/2)})}))}}]),t}(c.a.Component),d=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("header",null,c.a.createElement(g,{navs:this.props.navs,title:this.props.title,active:this.props.active,updatePage:this.props.updatePage,setNavPage:this.props.setNavPage}))}}]),t}(c.a.Component),f=a(11),E=a.n(f),N=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).setNavPage=a.props.setNavPage,a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"content flex"},c.a.createElement("div",{className:"img-content"},c.a.createElement("img",{className:"full-width",src:E.a,alt:""})),c.a.createElement("div",{className:"text-content"},c.a.createElement("h2",{className:"center"},"Welcome to our website!"),c.a.createElement("p",null,"Our goal is to bring together students who enjoy computer programming and create a framework for collaboration and connection on personal projects, which can be created in any programming language."),c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("div",{className:"marker full-height inline-flex"},c.a.createElement("pre",{className:"full-height"},"\u25cf ")),"To learn about the club, click on the ",c.a.createElement("span",{className:"underline clickable",onClick:this.setNavPage},"About")," link in the navigation bar above"),c.a.createElement("li",null,c.a.createElement("div",{className:"marker full-height inline-flex"},c.a.createElement("pre",{className:"full-height"},"\u25cf ")),"A collection of our projects of the month can be accessed by navigating to the ",c.a.createElement("span",{className:"underline clickable",onClick:this.setNavPage},"Projects")," link"),c.a.createElement("li",null,c.a.createElement("div",{className:"marker full-height inline-flex"},c.a.createElement("pre",{className:"full-height"},"\u25cf ")),"To get in touch with us, navigate to the ",c.a.createElement("span",{className:"underline clickable",onClick:this.setNavPage},"Contact")," link and fill out the form"))))}}]),t}(c.a.Component),j=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){document.getElementsByTagName("textarea")[0].style.height=document.getElementsByTagName("textarea")[0].scrollHeight+"px"}},{key:"render",value:function(){return c.a.createElement("div",{className:"content"},c.a.createElement("h2",null,"About"),c.a.createElement("div",{className:"br"}),c.a.createElement("p",{className:"mobile-br"},"Welcome to James Caldwell High School's Programming Club!"),c.a.createElement("p",{className:"mobile-br"},"Students who have worked on the monthly project will display their unique take on a concept and students attending will have an opportunity to view other club members' projects and vote on our favorite project of the month."),c.a.createElement("textarea",{className:"format full-width",type:"text",value:"Meetings are held every 1st Tuesday of the month after school in Room 206 (subject to change).",readOnly:!0,unselectable:"on"}),c.a.createElement("div",{className:"br"}),c.a.createElement("p",{className:"heading"},"Club Board"),c.a.createElement("p",null,"Jordan Sang \u2014 President"),c.a.createElement("p",null,"Alexandra Li \u2014 Co-President"),c.a.createElement("p",null,"Jess Sang \u2014 Treasurer"),c.a.createElement("p",null,"Anthonette Akinyemi \u2014 Secretary"),c.a.createElement("p",null,"Mr. Antonucci \u2014 Advisor"),c.a.createElement("div",{className:"br"}),c.a.createElement("p",{className:"footnote"},"Questions, comments, or concerns? Email us: jchsprogramming@gmail.com"))}}]),t}(c.a.Component),k=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"content"},c.a.createElement("h2",null,"Projects"),c.a.createElement("div",{className:"br"}),c.a.createElement("p",null,"View our top-voted projects from each monthly meeting!"),c.a.createElement("div",{className:"br"}))}}]),t}(c.a.Component),O=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"content"},c.a.createElement("h2",null,"Contact"),c.a.createElement("div",{className:"br"}),c.a.createElement("p",{className:"mobile-br"},"Feel free to contact us with any questions, comments, or concerns!"),c.a.createElement("p",{className:"mobile-br"},"You can also reach us at 24jsan@student.cwcboe.org or 24ali@student.cwcboe.org. We look forward to hearing from you!"),c.a.createElement("div",{className:"br"}),c.a.createElement("div",{className:"contact"},c.a.createElement("iframe",{className:"",src:"https://docs.google.com/forms/d/e/1FAIpQLSf2yaRXeqyaVfoe7GWRd4iN6Xl-ZACBCelfzdeh3HL2Kj3gqQ/viewform?embedded=true",title:"contact"})))}}]),t}(c.a.Component),y=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"loadPage",value:function(e){switch(e){case 0:return c.a.createElement(N,{setNavPage:this.props.setNavPage});case 1:return c.a.createElement(j,null);case 2:return c.a.createElement(k,null);case 3:return c.a.createElement(O,null);default:return""}}},{key:"render",value:function(){return c.a.createElement("article",null,this.loadPage(this.props.active))}}]),t}(c.a.Component),P=a(6),x=a.n(P),C=a(7),w=a.n(C),M=a(12),A=a.n(M),H=a(13),T=a.n(H),S=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).setNavPage=a.props.setNavPage,a.updatePage=a.props.updatePage,a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"imgHover",value:function(e){switch(e.target.alt.toLowerCase()){case"instagram":e.target.src="mouseover"===e.type?A.a:x.a;break;case"github":e.target.src="mouseover"===e.type?T.a:w.a}}},{key:"render",value:function(){return c.a.createElement("footer",{className:"flex center between"},c.a.createElement("table",{className:"links inline-table column"},c.a.createElement("tbody",null,c.a.createElement("tr",{className:"link-row flex space"},c.a.createElement("td",null,c.a.createElement("button",{className:"clickable",onClick:this.setNavPage},"About")),c.a.createElement("td",{className:"td-long"},c.a.createElement("button",{className:"clickable",onClick:this.setNavPage},"Projects")),c.a.createElement("td",null,c.a.createElement("a",{className:"clickable",href:"https://groupme.com/join_group/87417389/OuHvodab",target:"_blank",rel:"noopener noreferrer"},"GroupMe"))),c.a.createElement("tr",{className:"link-row flex"},c.a.createElement("td",null,c.a.createElement("button",{className:"select-format clickable",value:"About",onClick:this.setNavPage},"Club Format")),c.a.createElement("td",{className:"td-long"},c.a.createElement("a",{className:"clickable",href:"https://classroom.google.com/c/NTM0MDg1MjEyNTM3?cjc=gjmpkvv",target:"_blank",rel:"noopener noreferrer"},"Google Classroom")),c.a.createElement("td",null,c.a.createElement("button",{className:"clickable",value:"Contact",onClick:this.setNavPage},"Contact Form"))))),c.a.createElement("div",{className:"socials inline-flex"},c.a.createElement("a",{className:"clickable flex center",href:"*"},c.a.createElement("img",{className:"full-width",onMouseOver:this.imgHover,onMouseOut:this.imgHover,src:x.a,alt:"Instagram"})),c.a.createElement("a",{className:"clickable flex center",href:"https://github.com/jchsprogramming",target:"_blank",rel:"noopener noreferrer"},c.a.createElement("img",{className:"full-width",onMouseOver:this.imgHover,onMouseOut:this.imgHover,src:w.a,alt:"Github"}))))}}]),t}(c.a.Component);var B=function(){var e=Object(n.useState)(o.active.index),t=Object(s.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)(!1),i=Object(s.a)(r,2),m=i[0],u=i[1],p=function(e){for(var t=document.getElementsByClassName("navpage"),a=0;a<t.length;a++)t[a].innerText!==e.target.innerText&&t[a].innerText!==e.target.value||(l(a),"select-format"===e.target.classList[0]?u(!0):u(!1))};return Object(n.useEffect)(function(){var e=document.getElementsByClassName("format")[0];m&&e&&(e.focus(),e.select())}),c.a.createElement("div",{className:"App"},c.a.createElement(d,{title:o.title,navs:o.navs,active:a,updatePage:l,setNavPage:p}),c.a.createElement(y,{active:a,setNavPage:p}),c.a.createElement(S,{updatePage:l,setNavPage:p}))};r.a.createRoot(document.getElementById("root")).render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(B,null)))}],[[14,1,2]]]);
//# sourceMappingURL=main.04a21485.chunk.js.map