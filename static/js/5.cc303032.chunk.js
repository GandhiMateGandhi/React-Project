(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[5],{291:function(e,t,n){"use strict";t.a=n.p+"static/media/UserPhoto.c5accf4f.jpg"},292:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(90);function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,s=!1,o=void 0;try{for(var u,i=e[Symbol.iterator]();!(r=(u=i.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(c){s=!0,o=c}finally{try{r||null==i.return||i.return()}finally{if(s)throw o}}return n}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},296:function(e,t,n){},297:function(e,t,n){},303:function(e,t,n){"use strict";n.r(t);var r=n(56),s=n(57),o=n(60),u=n(59),i=n(1),c=n(19),a=n(5),l=(n(296),n(291)),f=n(34),p=n(27),h=n(292),b=n(0),j=(n(297),function(e){for(var t=Math.ceil(e.totalUsersCount/e.usersCountPerPage),n=[],r=0;r<t;r++)n.push(r);var s=Math.ceil(t/5),o=Object(b.useState)(1),u=Object(h.a)(o,2),c=u[0],a=u[1],l=5*(c-1)+1,f=5*c;return Object(i.jsxs)("div",{className:"Pagination",children:[c>1&&Object(i.jsx)("button",{onClick:function(){a(c-1)},children:"Previous"}),n.filter((function(e){return e>=l&&e<=f})).map((function(t){return Object(i.jsxs)("span",{onClick:function(){return e.onPageChange(t)},className:e.currentPage===t&&"Pagination-ActiveItem",children:[" ",t]},t)})),s>c&&Object(i.jsx)("button",{onClick:function(){a(c+1)},children:"Next"})]})}),g=function(e){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(j,Object(a.a)({},e)),e.isFetching?Object(i.jsx)(f.a,{}):null,Object(i.jsx)("div",{className:"Users",children:e.users.map((function(t){return Object(i.jsxs)("div",{className:"UserItem",id:t.id,children:[Object(i.jsxs)(p.b,{to:"/Profile/"+t.id,children:[Object(i.jsx)("img",{src:t.photos.small||l.a,alt:"User"}),Object(i.jsxs)("p",{children:[t.name," "]})]}),t.followed?Object(i.jsx)("button",{onClick:function(){e.unfollow(t.id)},children:"Unfollow"}):Object(i.jsx)("button",{onClick:function(){e.follow(t.id)},children:"Follow"})]},t.id)}))})]})},d=n(9),P=n(100),O=n(11),m=function(e){return e.usersPage.users},C=function(e){return e.usersPage.usersCountPerPage},v=function(e){return e.usersPage.totalUsersCount},y=function(e){return e.usersPage.currentPage},w=function(e){return e.usersPage.isFetching},x=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(r.a)(this,n);for(var s=arguments.length,o=new Array(s),u=0;u<s;u++)o[u]=arguments[u];return(e=t.call.apply(t,[this].concat(o))).onPageChange=function(t){e.props.setCurrentPage(t),e.props.requestUsers(t,e.props.pageUsersCount)},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.requestUsers(this.props.currentPage,this.props.pageUsersCount)}},{key:"render",value:function(){return Object(i.jsx)(g,{users:this.props.users,usersCountPerPage:this.props.usersCountPerPage,totalUsersCount:this.props.totalUsersCount,currentPage:this.props.currentPage,onPageChange:this.onPageChange,isFetching:this.props.isFetching,follow:this.props.follow,unfollow:this.props.unfollow})}}]),n}(b.Component);t.default=Object(O.compose)(Object(c.b)((function(e){return{users:m(e),usersCountPerPage:C(e),totalUsersCount:v(e),currentPage:y(e),isFetching:w(e)}}),{follow:P.b,unfollow:P.e,setCurrentPage:P.d,requestUsers:P.c}),d.g)(x)}}]);
//# sourceMappingURL=5.cc303032.chunk.js.map