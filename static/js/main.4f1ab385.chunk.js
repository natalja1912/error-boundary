(this.webpackJsonpnumbers=this.webpackJsonpnumbers||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var r=n(1),c=n.n(r),u=n(4),s=n.n(u),a=n(2),i=c.a.createContext("user");i.displayName="userContext";var o=i,j=n(0),b=function(){return Object(j.jsx)(o.Consumer,{children:function(t){return Object(j.jsxs)("div",{children:["NEW",t]})}})},h=(n(14),function(){var t=Object(r.useState)(0),e=Object(a.a)(t,2),n=e[0],c=e[1];if(5===n)throw new Error("error bad");return Object(j.jsxs)("div",{children:[Object(j.jsxs)("button",{onClick:function(){c((function(t){return t+1}))},children:["CLICK ",n]}),Object(j.jsx)("input",{type:"text",defaultValue:"input"})]})}),O=function(t){return function e(){e.displayName="withCounter";var n=Object(r.useState)(0),c=Object(a.a)(n,2),u=c[0],s=c[1];return Object(j.jsx)(t,{counter:u,changeState:function(){return s((function(t){return t+1}))}})}}((function(t){var e=t.counter,n=t.changeState;return Object(j.jsx)("div",{children:Object(j.jsxs)("button",{onMouseEnter:n,children:["HOVER ",e]})})})),l=n(5),d=n(6),x=n(8),f=n(7),v=function(t){Object(x.a)(n,t);var e=Object(f.a)(n);function n(t){var r;return Object(l.a)(this,n),(r=e.call(this,t)).state={hasError:!1},r}return Object(d.a)(n,[{key:"componentDidCatch",value:function(t,e){this.setState({hasError:!0}),console.log(e)}},{key:"render",value:function(){return this.state.hasError?Object(j.jsx)("h1",{children:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a."}):this.props.children}}]),n}(c.a.Component);function p(){var t=Object(r.useState)(""),e=Object(a.a)(t,2),n=e[0],c=e[1];return Object(j.jsxs)("div",{className:"page",children:["\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f",Object(j.jsx)("input",{value:n,onChange:function(t){return c(t.target.value)}}),Object(j.jsx)(o.Provider,{value:n,children:Object(j.jsx)(b,{})}),Object(j.jsxs)(v,{children:[Object(j.jsx)(h,{}),Object(j.jsx)(O,{})]})]})}var m=document.getElementById("root");s.a.render(Object(j.jsx)(r.Fragment,{children:Object(j.jsx)(p,{})}),m)}},[[15,1,2]]]);
//# sourceMappingURL=main.4f1ab385.chunk.js.map