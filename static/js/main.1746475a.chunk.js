(this.webpackJsonpname=this.webpackJsonpname||[]).push([[0],{11:function(e,t,n){e.exports=n(16)},16:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(2),o=n.n(r),l=n(3),u=n(4),i=n(5),s=n(9),d=n(6),b=n(10),m=function(e){var t=e.title,n=e.children;return c.a.createElement("section",null,c.a.createElement("h2",null,t),n)},p=function(e){var t=e.message;return c.a.createElement("h3",null,t)},v=function(e){var t=e.good,n=e.neutral,a=e.bad,r=e.countTotalFeedback,o=e.countPositiveFeedbackPercentage;return c.a.createElement(c.a.Fragment,null,r()>0?c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"Good: ",t),c.a.createElement("p",null,"Neutral: ",n),c.a.createElement("p",null,"Bad: ",a),c.a.createElement("p",null,"Total: ",r()),c.a.createElement("p",null,"Positive feedback: ",o()," %")):c.a.createElement(p,{message:"No feedback given"}))},f=n(7),g=n.n(f),k=function(e){var t=e.options,n=e.onLeaveFeedback;return c.a.createElement("div",{className:g.a.buttonsWrapper},Object.keys(t).map((function(e){return c.a.createElement("button",{type:"button",onClick:n,name:e,className:"".concat(e,"-btn"),key:e},e)})))},E=n(8),h=n.n(E),F=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).state={good:0,neutral:0,bad:0},n.handleButton=function(e){var t=e.target.name;n.setState((function(e){return Object(l.a)({},t,e[t]+1)}))},n.countTotalFeedback=function(){return Object.values(n.state).reduce((function(e,t){return e+t}),0)},n.countPositiveFeedbackPercentage=function(){return Math.round(n.state.good/n.countTotalFeedback()*100)},n}return Object(b.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,a=e.bad;return c.a.createElement("div",{className:h.a.PageContent},c.a.createElement(m,{title:"Please leave feedback"},c.a.createElement(k,{options:{good:t,neutral:n,bad:a},onLeaveFeedback:this.handleButton})),c.a.createElement(m,{title:"Statistics"},c.a.createElement(v,{good:t,neutral:n,bad:a,countTotalFeedback:this.countTotalFeedback,countPositiveFeedbackPercentage:this.countPositiveFeedbackPercentage})))}}]),t}(a.Component);o.a.render(c.a.createElement(F,null),document.getElementById("root"))},7:function(e,t,n){e.exports={buttonsWrapper:"FeedbackOptions_buttonsWrapper__2wJTl"}},8:function(e,t,n){e.exports={PageContent:"App_PageContent__1b-me"}}},[[11,1,2]]]);
//# sourceMappingURL=main.1746475a.chunk.js.map