(this.webpackJsonpreact_keyboard=this.webpackJsonpreact_keyboard||[]).push([[0],{13:function(e,t,s){},14:function(e,t,s){"use strict";s.r(t);var n=s(3),a=s.n(n),r=s(4),c=s(5),o=s(7),i=s(6),u=s(1),d=s.n(u),p=s(0),m=function(e){Object(o.a)(s,e);var t=Object(i.a)(s);function s(){var e;Object(r.a)(this,s);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={message:""},e.messagePressed=function(t){e.setState({message:t.key})},e}return Object(c.a)(s,[{key:"componentDidMount",value:function(){document.addEventListener("keyup",this.messagePressed)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keyup",this.messagePressed)}},{key:"render",value:function(){var e=this.state.message;return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)("p",{className:"App__message",children:e?"The last pressed key is [".concat(e,"]"):"Nothing was pressed yet"})})}}]),s}(d.a.Component);s(13);a.a.render(Object(p.jsx)(m,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.d68bc4a8.chunk.js.map