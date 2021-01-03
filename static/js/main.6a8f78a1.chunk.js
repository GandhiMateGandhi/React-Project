(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{111:function(t,e,n){},156:function(t,e,n){},19:function(t,e,n){"use strict";n.d(e,"c",(function(){return c})),n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return u}));var r=n(126),a=r.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"70c3d7bd-2946-4984-86de-f95d71c9a231"}}),c={getUsers:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(t,"&count=").concat(e))},follow:function(t){return a.post("follow/"+t)},unfollow:function(t){return a.delete("follow/"+t)}},i={getProfile:function(t){return a.get("profile/"+t)},getProfileStatus:function(t){return a.get("profile/status/"+t)},updateProfileStatus:function(t){return a.put("profile/status/",{status:t})}},u={me:function(){return a.get("auth/me")},login:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.post("auth/login",{email:t,password:e,rememberMe:n})},logout:function(){return a.delete("auth/login")}}},238:function(t,e,n){},239:function(t,e,n){},240:function(t,e,n){},241:function(t,e,n){},246:function(t,e,n){},247:function(t,e,n){},248:function(t,e,n){},249:function(t,e,n){},287:function(t,e,n){},288:function(t,e,n){},289:function(t,e,n){"use strict";n.r(e);var r=n(1),a=(n(156),n(124)),c=n(125),i=n(10),u=n(88),s=n(98),o=n(99),l=n(11),d=n.n(l),j=n(18),f=n(5),b=n(19),p=n(48),O="SET_USER_DATA",h={email:null,id:null,login:null,isAuth:!1},x=function(t,e,n,r){return{type:O,payload:{id:t,email:e,login:n,isAuth:r}}},m=function(){return function(){var t=Object(j.a)(d.a.mark((function t(e){var n,r,a,c,i;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.me();case 2:0===(n=t.sent).data.resultCode&&(r=n.data.data,a=r.id,c=r.login,i=r.email,e(x(a,i,c,!0)));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(){return function(){var t=Object(j.a)(d.a.mark((function t(e){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.logout();case 2:0===t.sent.data.resultCode&&e(x(null,null,null,!1));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case O:return Object(f.a)(Object(f.a)({},t),e.payload);default:return t}},w="INITIALIZED",y={initialized:!1},S=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case w:return Object(f.a)(Object(f.a)({},t),{},{initialized:!0});default:return t}},E=(0,n(10).createStore)(Object(i.combineReducers)({profilePage:u.b,messagesPage:s.a,usersPage:o.a,auth:v,app:S,form:a.a}),(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.compose)(Object(i.applyMiddleware)(c.a)));window.store=E;var P=E,L=n(61),N=n.n(L),_=n(0),C=n.n(_),k=n(26),T=n(49),A=n(50),U=n(52),I=n(51),M=(n(238),n(239),n(240),function(){return Object(r.jsx)("div",{className:"Main",children:Object(r.jsx)("h1",{children:"Main content"})})}),D=(n(241),function(t){var e=t.item;return Object(r.jsx)("div",{className:"SideItem",children:Object(r.jsx)(k.b,{to:e,children:e})})}),R=(n(246),function(){return Object(r.jsxs)("nav",{className:"Sidebar",children:[Object(r.jsx)(D,{item:"Profile"}),Object(r.jsx)(D,{item:"Messages"}),Object(r.jsx)(D,{item:"Main"}),Object(r.jsx)(D,{item:"Users"}),Object(r.jsx)(D,{item:"News"}),Object(r.jsx)(D,{item:"Settings"})]})}),z=(n(247),function(t){return Object(r.jsx)("div",{className:"News",children:Object(r.jsx)("h1",{children:"News content"})})}),F=(n(248),function(t){return Object(r.jsx)("div",{className:"Settings",children:Object(r.jsx)("h1",{children:"Settings content"})})}),H=(n(249),n(111),n(122)),G=n(123),B=n(17),W=n(32),J=n(9),K=Object(W.b)(25),V=Object(W.c)(2),X=Object(G.a)({form:"login"})((function(t){var e=t.handleSubmit,n=t.pristine,a=t.submitting;return Object(r.jsxs)("form",{className:"LoginForm",onSubmit:e,children:[Object(r.jsx)("div",{children:Object(r.jsx)(H.a,{component:W.a,validate:[W.d,K,V],name:"email",label:"Email",type:"text"})}),Object(r.jsx)("div",{children:Object(r.jsx)(H.a,{component:W.a,validate:[W.d,K,V],name:"password",label:"Password",type:"password"})}),Object(r.jsxs)("div",{className:"Error Error_input",children:[Object(r.jsx)("button",{type:"submit",disabled:n||a,children:"Login"}),t.error&&Object(r.jsx)("span",{children:t.error})]})]})})),q=Object(B.b)((function(t){return{isAuth:t.auth.isAuth}}),{authLogin:function(t,e,n){return function(){var r=Object(j.a)(d.a.mark((function r(a){var c,i;return d.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,b.a.login(t,e,n);case 2:0===(c=r.sent).data.resultCode?a(m()):(i=c.data.messages.length>0?c.data.messages[0]:"Incorrect login data",a(Object(p.a)("login",{_error:i})));case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}()},authLogout:g})((function(t){return t.isAuth?Object(r.jsx)(J.a,{to:"/Profile"}):Object(r.jsxs)("div",{className:"Login",children:[Object(r.jsx)("h1",{children:"Login"}),Object(r.jsx)(X,{onSubmit:function(e){t.authLogin(e.email,e.password,e.rememberMe)}})]})})),Y=(n(287),function(t){return Object(r.jsxs)("header",{className:"Header",children:[Object(r.jsx)("img",{src:"https://i.pinimg.com/originals/a2/9a/b3/a29ab34a61c2f5504cad588f169cd4f3.png"}),Object(r.jsx)("div",{className:"HeaderLogin",children:t.isAuth?Object(r.jsxs)("div",{className:"HeaderLogout",children:[Object(r.jsx)(k.b,{to:"/Profile",children:t.login}),Object(r.jsx)("button",{onClick:t.authLogout,children:"Log out"})]}):Object(r.jsx)(k.b,{to:"/Login",children:"Login"})})]})}),Z=function(t){Object(U.a)(n,t);var e=Object(I.a)(n);function n(){return Object(T.a)(this,n),e.apply(this,arguments)}return Object(A.a)(n,[{key:"render",value:function(){return Object(r.jsx)(Y,Object(f.a)({},this.props))}}]),n}(_.Component),Q=Object(B.b)((function(t){return{login:t.auth.login,isAuth:t.auth.isAuth}}),{authLogout:g})(Z),$=n(47),tt=function(t){return function(e){return Object(r.jsx)(_.Suspense,{fallback:Object(r.jsx)($.a,{}),children:Object(r.jsx)(t,Object(f.a)({},e))})}},et=_.lazy((function(){return n.e(5).then(n.bind(null,302))})),nt=_.lazy((function(){return n.e(3).then(n.bind(null,301))})),rt=_.lazy((function(){return n.e(4).then(n.bind(null,303))})),at=function(t){Object(U.a)(n,t);var e=Object(I.a)(n);function n(){return Object(T.a)(this,n),e.apply(this,arguments)}return Object(A.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(r.jsxs)("div",{className:"Wrapper",children:[Object(r.jsx)(Q,{}),Object(r.jsx)(R,{}),Object(r.jsxs)("div",{className:"Content",children:[Object(r.jsx)(J.b,{path:"/Main",render:function(){return Object(r.jsx)(M,{})}}),Object(r.jsx)(J.b,{path:"/Messages",render:tt(rt)}),Object(r.jsx)(J.b,{path:"/News",render:function(){return Object(r.jsx)(z,{})}}),Object(r.jsx)(J.b,{path:"/Users",render:tt(et)}),Object(r.jsx)(J.b,{path:"/Settings",render:function(){return Object(r.jsx)(F,{})}}),Object(r.jsx)(J.b,{path:"/Login",render:function(){return Object(r.jsx)(q,{})}}),Object(r.jsx)(J.b,{path:"/Profile/:userId?",render:tt(nt)})]})]}):Object(r.jsx)($.a,{})}}]),n}(_.Component),ct=Object(B.b)((function(t){return{initialized:t.app.initialized}}),{initializeApp:function(){return function(t){var e=t(m());Promise.all([e]).then((function(){t({type:w})}))}}})(at);N.a.render(Object(r.jsx)(C.a.StrictMode,{children:Object(r.jsx)(k.a,{children:Object(r.jsx)(B.a,{store:P,children:Object(r.jsx)(ct,{})})})}),document.getElementById("root"))},32:function(t,e,n){"use strict";n.d(e,"d",(function(){return c})),n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return u})),n.d(e,"e",(function(){return s})),n.d(e,"a",(function(){return o}));var r=n(5),a=n(1),c=(n(0),n(111),function(t){return t?void 0:"Required"}),i=function(t){return function(e){return e&&e.length>t?"Must be maximum ".concat(t," characters"):void 0}},u=function(t){return function(e){return e&&e.length<t?"Must me minimum ".concat(t," characters"):void 0}},s=function(t){var e=t.input,n=t.label,c=t.type,i=t.meta,u=i.touched,s=i.error,o=i.warning;return Object(a.jsxs)("div",{className:"Error Error_textarea",children:[Object(a.jsx)("textarea",Object(r.a)(Object(r.a)({},e),{},{placeholder:n,type:c})),u&&(s&&Object(a.jsx)("span",{children:s})||o&&Object(a.jsx)("span",{children:o}))]})},o=function(t){var e=t.input,n=t.label,c=t.type,i=t.meta,u=i.touched,s=i.error,o=i.warning;return Object(a.jsxs)("div",{className:"Error Error_input",children:[Object(a.jsx)("input",Object(r.a)(Object(r.a)({},e),{},{placeholder:n,type:c})),u&&(s&&Object(a.jsx)("span",{children:s})||o&&Object(a.jsx)("span",{children:o}))]})}},47:function(t,e,n){"use strict";var r=n(1);n(288);e.a=function(){return Object(r.jsxs)("div",{className:"lds-ellipsis",children:[Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{})]})}},88:function(t,e,n){"use strict";n.d(e,"a",(function(){return f})),n.d(e,"c",(function(){return p})),n.d(e,"d",(function(){return O})),n.d(e,"e",(function(){return h}));var r=n(11),a=n.n(r),c=n(18),i=n(64),u=n(5),s=n(19),o="ADD_POST",l="SET_USER_PROFILE",d="SET_USER_PROFILE_STATUS",j={postsData:[{id:1,text:"How're you?",likesCount:3},{id:2,text:"Let's do party tonight!",likesCount:1},{id:3,text:"*post*",likesCount:13},{id:4,text:"Hello sweety!",likesCount:6},{id:5,text:"*picture*",likesCount:22}],userProfile:null,userProfileStatus:""},f=function(t){return{type:o,newPostText:t}},b=function(t){return{type:d,status:t}},p=function(t){return function(){var e=Object(c.a)(a.a.mark((function e(n){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.b.getProfile(t);case 2:r=e.sent,n((a=r.data,{type:l,userProfile:a}));case 4:case"end":return e.stop()}var a}),e)})));return function(t){return e.apply(this,arguments)}}()},O=function(t){return function(){var e=Object(c.a)(a.a.mark((function e(n){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.b.getProfileStatus(t);case 2:r=e.sent,n(b(r.data));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},h=function(t){return function(){var e=Object(c.a)(a.a.mark((function e(n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.b.updateProfileStatus(t);case 2:0===e.sent.data.resultCode&&n(b(t));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};e.b=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case o:return Object(u.a)(Object(u.a)({},t),{},{postsData:[].concat(Object(i.a)(t.postsData),[{id:6,text:e.newPostText,likesCount:0}])});case l:return Object(u.a)(Object(u.a)({},t),{},{userProfile:e.userProfile});case d:return Object(u.a)(Object(u.a)({},t),{},{userProfileStatus:e.status});default:return t}}},98:function(t,e,n){"use strict";n.d(e,"b",(function(){return u}));var r=n(64),a=n(5),c="SEND_MESSAGE",i={usersData:[{id:1,name:"Kamilla"},{id:2,name:"Vildan"},{id:3,name:"Rustem"},{id:4,name:"Elvira"},{id:5,name:"Cafe"}],messagesData:[{id:1,text:"How're you"},{id:2,text:"Let's do party tonight!"},{id:3,text:"*post*"},{id:4,text:"Hello sweety!"},{id:5,text:"*picture*"}]},u=function(t){return{type:c,newMessageBody:t}};e.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case c:return Object(a.a)(Object(a.a)({},t),{},{messagesData:[].concat(Object(r.a)(t.messagesData),[{id:6,text:e.newMessageBody}])});default:return t}}},99:function(t,e,n){"use strict";n.d(e,"d",(function(){return h})),n.d(e,"c",(function(){return m})),n.d(e,"b",(function(){return g})),n.d(e,"e",(function(){return v}));var r=n(11),a=n.n(r),c=n(18),i=n(5),u=n(19),s="FOLLOW",o="UNFOLLOW",l="SET_USERS",d="SET_CURRENT_PAGE",j="SET_TOTAL_USERS_COUNT",f="TOGGLE_IS_FETCHING",b={users:[],usersCountPerPage:5,totalUsersCount:0,currentPage:1,isFetching:!1},p=function(t){return{type:s,userId:t}},O=function(t){return{type:o,userId:t}},h=function(t){return{type:d,currentPage:t}},x=function(t){return{type:f,isFetching:t}},m=function(t,e){return function(){var n=Object(c.a)(a.a.mark((function n(r){var c;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(x(!0)),n.next=3,u.c.getUsers(t,e);case 3:c=n.sent,r(x(!1)),r((i=c.data.items,{type:l,users:i})),r((a=c.data.totalCount,{type:j,totalUsers:a}));case 7:case"end":return n.stop()}var a,i}),n)})));return function(t){return n.apply(this,arguments)}}()},g=function(t){return function(){var e=Object(c.a)(a.a.mark((function e(n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.c.follow(t);case 2:0===e.sent.data.resultCode&&n(p(t));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},v=function(t){return function(){var e=Object(c.a)(a.a.mark((function e(n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.c.unfollow(t);case 2:0===e.sent.data.resultCode&&n(O(t));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};e.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case s:return Object(i.a)(Object(i.a)({},t),{},{users:t.users.map((function(t){return t.id===e.userId?Object(i.a)(Object(i.a)({},t),{},{followed:!0}):t}))});case o:return Object(i.a)(Object(i.a)({},t),{},{users:t.users.map((function(t){return t.id===e.userId?Object(i.a)(Object(i.a)({},t),{},{followed:!1}):t}))});case l:return Object(i.a)(Object(i.a)({},t),{},{users:e.users});case d:return Object(i.a)(Object(i.a)({},t),{},{currentPage:e.currentPage});case j:return Object(i.a)(Object(i.a)({},t),{},{totalUsersCount:e.totalUsers});case f:return Object(i.a)(Object(i.a)({},t),{},{isFetching:e.isFetching});default:return t}}}},[[289,1,2]]]);
//# sourceMappingURL=main.6a8f78a1.chunk.js.map