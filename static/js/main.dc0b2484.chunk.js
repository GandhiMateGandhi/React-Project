(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{120:function(t,e,n){},18:function(t,e,n){"use strict";n.d(e,"c",(function(){return a})),n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return u}));var r=n(115),c=r.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"70c3d7bd-2946-4984-86de-f95d71c9a231"}}),a={getUsers:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return c.get("users?page=".concat(t,"&count=").concat(e))},follow:function(t){return c.post("follow/"+t)},unfollow:function(t){return c.delete("follow/"+t)}},i={getProfile:function(t){return c.get("profile/"+t)},getProfileStatus:function(t){return c.get("profile/status/"+t)},updateProfileStatus:function(t){return c.put("profile/status/",{status:t})}},u={me:function(){return c.get("auth/me")},login:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return c.post("auth/login",{email:t,password:e,rememberMe:n})},logout:function(){return c.delete("auth/login")}}},202:function(t,e,n){},203:function(t,e,n){},204:function(t,e,n){},205:function(t,e,n){},210:function(t,e,n){},211:function(t,e,n){},212:function(t,e,n){},213:function(t,e,n){},214:function(t,e,n){},252:function(t,e,n){},253:function(t,e,n){},254:function(t,e,n){"use strict";n.r(e);var r=n(1),c=(n(120),n(257)),a=n(114),i=n(9),u=n(81),s=n(91),o=n(92),l=n(10),d=n.n(l),j=n(17),f=n(4),b=n(18),p="SET_USER_DATA",O={email:null,id:null,login:null,isAuth:!1},h=function(t,e,n,r){return{type:p,payload:{id:t,email:e,login:n,isAuth:r}}},x=function(){return function(){var t=Object(j.a)(d.a.mark((function t(e){var n,r,c,a,i;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.me();case 2:0===(n=t.sent).data.resultCode&&(r=n.data.data,c=r.id,a=r.login,i=r.email,e(h(c,i,a,!0)));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(){return function(){var t=Object(j.a)(d.a.mark((function t(e){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.logout();case 2:0===t.sent.data.resultCode&&(e(h(null,null,null,!1)),e(x()));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case p:return Object(f.a)(Object(f.a)({},t),e.payload);default:return t}},g="INITIALIZED",w={initialized:!1},y=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case g:return Object(f.a)(Object(f.a)({},t),{},{initialized:!0});default:return t}},S=(0,n(9).createStore)(Object(i.combineReducers)({profilePage:u.b,messagesPage:s.a,usersPage:o.a,auth:v,app:y,form:c.a}),(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.compose)(Object(i.applyMiddleware)(a.a)));window.store=S;var P=S,E=n(54),L=n.n(E),N=n(0),C=n.n(N),k=n(24),_=n(42),T=n(43),A=n(45),M=n(44),U=(n(202),n(203),n(204),function(){return Object(r.jsx)("div",{className:"Main",children:Object(r.jsx)("h1",{children:"Main content"})})}),I=(n(205),function(t){var e=t.item;return Object(r.jsx)("div",{className:"SideItem",children:Object(r.jsx)(k.b,{to:e,children:e})})}),R=(n(210),function(){return Object(r.jsxs)("nav",{className:"Sidebar",children:[Object(r.jsx)(I,{item:"Profile"}),Object(r.jsx)(I,{item:"Messages"}),Object(r.jsx)(I,{item:"Main"}),Object(r.jsx)(I,{item:"Users"}),Object(r.jsx)(I,{item:"News"}),Object(r.jsx)(I,{item:"Settings"})]})}),D=(n(211),function(t){return Object(r.jsx)("div",{className:"News",children:Object(r.jsx)("h1",{children:"News content"})})}),F=(n(212),function(t){return Object(r.jsx)("div",{className:"Settings",children:Object(r.jsx)("h1",{children:"Settings content"})})}),z=(n(213),n(256)),H=n(255),G=n(16),B=n(27),W=n(8),J=Object(B.b)(25),K=Object(B.c)(2),V=Object(H.a)({form:"login"})((function(t){return Object(r.jsxs)("form",{className:"LoginForm",onSubmit:t.handleSubmit,children:[Object(r.jsx)("div",{children:Object(r.jsx)(z.a,{component:B.a,validate:[B.d,J,K],name:"email",label:"Email",type:"text"})}),Object(r.jsx)("div",{children:Object(r.jsx)(z.a,{component:B.a,validate:[B.d,J,K],name:"password",label:"Password",type:"password"})}),Object(r.jsxs)("div",{children:[Object(r.jsx)(z.a,{component:B.a,name:"rememberMe",label:"Remember me",type:"checkbox"}),Object(r.jsx)("label",{htmlFor:"rememberMe",children:"Remember me"})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("span",{children:t.error}),t.error&&Object(r.jsx)("span",{children:t.error}),Object(r.jsx)("button",{type:"submit",children:"Login"})]})]})})),X=Object(G.b)((function(t){return{isAuth:t.auth.isAuth}}),{authLogin:function(t,e,n){return function(){var r=Object(j.a)(d.a.mark((function r(c){return d.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,b.a.login(t,e,n);case 2:0===r.sent.data.resultCode&&c(x());case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}()},authLogout:m})((function(t){return t.isAuth?Object(r.jsx)(W.a,{to:"/Profile"}):Object(r.jsxs)("div",{className:"Login",children:[Object(r.jsx)("h1",{children:"Login"}),Object(r.jsx)(V,{onSubmit:function(e){t.authLogin(e.email,e.password,e.rememberMe)}})]})})),q=(n(252),function(t){return Object(r.jsxs)("header",{className:"Header",children:[Object(r.jsx)("img",{src:"https://i.pinimg.com/originals/a2/9a/b3/a29ab34a61c2f5504cad588f169cd4f3.png"}),Object(r.jsx)("div",{className:"HeaderLogin",children:t.isAuth?Object(r.jsxs)("div",{className:"HeaderLogout",children:[Object(r.jsx)(k.b,{to:"/Profile",children:t.login}),Object(r.jsx)("button",{onClick:t.authLogout,children:"Log out"})]}):Object(r.jsx)(k.b,{to:"/Login",children:"Login"})})]})}),Y=function(t){Object(A.a)(n,t);var e=Object(M.a)(n);function n(){return Object(_.a)(this,n),e.apply(this,arguments)}return Object(T.a)(n,[{key:"render",value:function(){return Object(r.jsx)(q,Object(f.a)({},this.props))}}]),n}(N.Component),Z=Object(G.b)((function(t){return{login:t.auth.login,isAuth:t.auth.isAuth}}),{authLogout:m})(Y),Q=n(41),$=function(t){return function(e){return Object(r.jsx)(N.Suspense,{fallback:Object(r.jsx)(Q.a,{}),children:Object(r.jsx)(t,Object(f.a)({},e))})}},tt=N.lazy((function(){return n.e(5).then(n.bind(null,270))})),et=N.lazy((function(){return n.e(3).then(n.bind(null,269))})),nt=N.lazy((function(){return n.e(4).then(n.bind(null,271))})),rt=function(t){Object(A.a)(n,t);var e=Object(M.a)(n);function n(){return Object(_.a)(this,n),e.apply(this,arguments)}return Object(T.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(r.jsxs)("div",{className:"Wrapper",children:[Object(r.jsx)(Z,{}),Object(r.jsx)(R,{}),Object(r.jsxs)("div",{className:"Content",children:[Object(r.jsx)(W.b,{path:"/Main",render:function(){return Object(r.jsx)(U,{})}}),Object(r.jsx)(W.b,{path:"/Messages",render:$(nt)}),Object(r.jsx)(W.b,{path:"/News",render:function(){return Object(r.jsx)(D,{})}}),Object(r.jsx)(W.b,{path:"/Users",render:$(tt)}),Object(r.jsx)(W.b,{path:"/Settings",render:function(){return Object(r.jsx)(F,{})}}),Object(r.jsx)(W.b,{path:"/Login",render:function(){return Object(r.jsx)(X,{})}}),Object(r.jsx)(W.b,{path:"/Profile/:userId?",render:$(et)})]})]}):Object(r.jsx)(Q.a,{})}}]),n}(N.Component),ct=Object(G.b)((function(t){return{initialized:t.app.initialized}}),{initializeApp:function(){return function(t){var e=t(x());Promise.all([e]).then((function(){t({type:g})}))}}})(rt);L.a.render(Object(r.jsx)(C.a.StrictMode,{children:Object(r.jsx)(k.a,{children:Object(r.jsx)(G.a,{store:P,children:Object(r.jsx)(ct,{})})})}),document.getElementById("root"))},27:function(t,e,n){"use strict";n.d(e,"d",(function(){return a})),n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return u})),n.d(e,"e",(function(){return s})),n.d(e,"a",(function(){return o}));var r=n(4),c=n(1),a=(n(0),n(214),function(t){return t?void 0:"Required"}),i=function(t){return function(e){return e&&e.length>t?"Must be maximum ".concat(t," characters"):void 0}},u=function(t){return function(e){return e&&e.length<t?"Must me minimum ".concat(t," characters"):void 0}},s=function(t){var e=t.input,n=t.label,a=t.type,i=t.meta,u=i.touched,s=i.error,o=i.warning;return Object(c.jsxs)("div",{className:"TextArea",children:[Object(c.jsx)("textarea",Object(r.a)(Object(r.a)({},e),{},{placeholder:n,type:a})),u&&(s&&Object(c.jsx)("span",{children:s})||o&&Object(c.jsx)("span",{children:o}))]})},o=function(t){var e=t.input,n=t.label,a=t.type,i=t.meta,u=i.touched,s=i.error,o=i.warning;return Object(c.jsxs)("div",{className:"Input",children:[Object(c.jsx)("input",Object(r.a)(Object(r.a)({},e),{},{placeholder:n,type:a})),u&&(s&&Object(c.jsx)("span",{children:s})||o&&Object(c.jsx)("span",{children:o}))]})}},41:function(t,e,n){"use strict";var r=n(1);n(253);e.a=function(){return Object(r.jsxs)("div",{className:"lds-ellipsis",children:[Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{})]})}},81:function(t,e,n){"use strict";n.d(e,"a",(function(){return f})),n.d(e,"c",(function(){return p})),n.d(e,"d",(function(){return O})),n.d(e,"e",(function(){return h}));var r=n(10),c=n.n(r),a=n(17),i=n(56),u=n(4),s=n(18),o="ADD_POST",l="SET_USER_PROFILE",d="SET_USER_PROFILE_STATUS",j={postsData:[{id:1,text:"How're you?",likesCount:3},{id:2,text:"Let's do party tonight!",likesCount:1},{id:3,text:"*post*",likesCount:13},{id:4,text:"Hello sweety!",likesCount:6},{id:5,text:"*picture*",likesCount:22}],userProfile:null,userProfileStatus:""},f=function(t){return{type:o,newPostText:t}},b=function(t){return{type:d,status:t}},p=function(t){return function(){var e=Object(a.a)(c.a.mark((function e(n){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.b.getProfile(t);case 2:r=e.sent,n((c=r.data,{type:l,userProfile:c}));case 4:case"end":return e.stop()}var c}),e)})));return function(t){return e.apply(this,arguments)}}()},O=function(t){return function(){var e=Object(a.a)(c.a.mark((function e(n){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.b.getProfileStatus(t);case 2:r=e.sent,n(b(r.data));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},h=function(t){return function(){var e=Object(a.a)(c.a.mark((function e(n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.b.updateProfileStatus(t);case 2:0===e.sent.data.resultCode&&n(b(t));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};e.b=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case o:return Object(u.a)(Object(u.a)({},t),{},{postsData:[].concat(Object(i.a)(t.postsData),[{id:6,text:e.newPostText,likesCount:0}])});case l:return Object(u.a)(Object(u.a)({},t),{},{userProfile:e.userProfile});case d:return Object(u.a)(Object(u.a)({},t),{},{userProfileStatus:e.status});default:return t}}},91:function(t,e,n){"use strict";n.d(e,"b",(function(){return u}));var r=n(56),c=n(4),a="SEND_MESSAGE",i={usersData:[{id:1,name:"Kamilla"},{id:2,name:"Vildan"},{id:3,name:"Rustem"},{id:4,name:"Elvira"},{id:5,name:"Cafe"}],messagesData:[{id:1,text:"How're you"},{id:2,text:"Let's do party tonight!"},{id:3,text:"*post*"},{id:4,text:"Hello sweety!"},{id:5,text:"*picture*"}]},u=function(t){return{type:a,newMessageBody:t}};e.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case a:return Object(c.a)(Object(c.a)({},t),{},{messagesData:[].concat(Object(r.a)(t.messagesData),[{id:6,text:e.newMessageBody}])});default:return t}}},92:function(t,e,n){"use strict";n.d(e,"d",(function(){return h})),n.d(e,"c",(function(){return m})),n.d(e,"b",(function(){return v})),n.d(e,"e",(function(){return g}));var r=n(10),c=n.n(r),a=n(17),i=n(4),u=n(18),s="FOLLOW",o="UNFOLLOW",l="SET_USERS",d="SET_CURRENT_PAGE",j="SET_TOTAL_USERS_COUNT",f="TOGGLE_IS_FETCHING",b={users:[],usersCountPerPage:5,totalUsersCount:0,currentPage:1,isFetching:!1},p=function(t){return{type:s,userId:t}},O=function(t){return{type:o,userId:t}},h=function(t){return{type:d,currentPage:t}},x=function(t){return{type:f,isFetching:t}},m=function(t,e){return function(){var n=Object(a.a)(c.a.mark((function n(r){var a;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(x(!0)),n.next=3,u.c.getUsers(t,e);case 3:a=n.sent,r(x(!1)),r((i=a.data.items,{type:l,users:i})),r((c=a.data.totalCount,{type:j,totalUsers:c}));case 7:case"end":return n.stop()}var c,i}),n)})));return function(t){return n.apply(this,arguments)}}()},v=function(t){return function(){var e=Object(a.a)(c.a.mark((function e(n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.c.follow(t);case 2:0===e.sent.data.resultCode&&n(p(t));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},g=function(t){return function(){var e=Object(a.a)(c.a.mark((function e(n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.c.unfollow(t);case 2:0===e.sent.data.resultCode&&n(O(t));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};e.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case s:return Object(i.a)(Object(i.a)({},t),{},{users:t.users.map((function(t){return t.id===e.userId?Object(i.a)(Object(i.a)({},t),{},{followed:!0}):t}))});case o:return Object(i.a)(Object(i.a)({},t),{},{users:t.users.map((function(t){return t.id===e.userId?Object(i.a)(Object(i.a)({},t),{},{followed:!1}):t}))});case l:return Object(i.a)(Object(i.a)({},t),{},{users:e.users});case d:return Object(i.a)(Object(i.a)({},t),{},{currentPage:e.currentPage});case j:return Object(i.a)(Object(i.a)({},t),{},{totalUsersCount:e.totalUsers});case f:return Object(i.a)(Object(i.a)({},t),{},{isFetching:e.isFetching});default:return t}}}},[[254,1,2]]]);
//# sourceMappingURL=main.dc0b2484.chunk.js.map