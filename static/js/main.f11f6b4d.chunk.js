(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{111:function(e,t,n){},156:function(e,t,n){},19:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return u}));var r=n(126),a=r.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"70c3d7bd-2946-4984-86de-f95d71c9a231"}}),c={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(e,"&count=").concat(t))},follow:function(e){return a.post("follow/"+e)},unfollow:function(e){return a.delete("follow/"+e)}},i={getProfile:function(e){return a.get("profile/"+e)},getProfileStatus:function(e){return a.get("profile/status/"+e)},updateProfileStatus:function(e){return a.put("profile/status/",{status:e})}},u={me:function(){return a.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return a.delete("auth/login")}}},238:function(e,t,n){},239:function(e,t,n){},240:function(e,t,n){},241:function(e,t,n){},246:function(e,t,n){},247:function(e,t,n){},248:function(e,t,n){},249:function(e,t,n){},287:function(e,t,n){},288:function(e,t,n){},289:function(e,t,n){"use strict";n.r(t);var r=n(1),a=(n(156),n(124)),c=n(125),i=n(10),u=n(88),s=n(98),o=n(99),l=n(11),d=n.n(l),j=n(18),f=n(5),b=n(19),p=n(48),O="SET_USER_DATA",h={email:null,id:null,login:null,isAuth:!1},m=function(e,t,n,r){return{type:O,payload:{id:e,email:t,login:n,isAuth:r}}},x=function(){return function(){var e=Object(j.a)(d.a.mark((function e(t){var n,r,a,c,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,c=r.login,i=r.email,t(m(a,i,c,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},v=function(){return function(){var e=Object(j.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.logout();case 2:0===e.sent.data.resultCode&&t(m(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(f.a)(Object(f.a)({},e),t.payload);default:return e}},w="INITIALIZED",y={initialized:!1},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(f.a)(Object(f.a)({},e),{},{initialized:!0});default:return e}},E=(0,n(10).createStore)(Object(i.combineReducers)({profilePage:u.b,messagesPage:s.a,usersPage:o.a,auth:g,app:S,form:a.a}),(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.compose)(Object(i.applyMiddleware)(c.a)));window.store=E;var P=E,N=n(61),L=n.n(N),_=n(0),C=n.n(_),k=n(26),T=n(49),M=n(50),A=n(52),U=n(51),I=(n(238),n(239),n(240),function(){return Object(r.jsx)("div",{className:"Main",children:Object(r.jsx)("h1",{children:"Main content"})})}),R=(n(241),function(e){var t=e.item;return Object(r.jsx)("div",{className:"SideItem",children:Object(r.jsx)(k.b,{to:t,children:t})})}),D=(n(246),function(){return Object(r.jsxs)("nav",{className:"Sidebar",children:[Object(r.jsx)(R,{item:"Profile"}),Object(r.jsx)(R,{item:"Messages"}),Object(r.jsx)(R,{item:"Main"}),Object(r.jsx)(R,{item:"Users"}),Object(r.jsx)(R,{item:"News"}),Object(r.jsx)(R,{item:"Settings"})]})}),F=(n(247),function(e){return Object(r.jsx)("div",{className:"News",children:Object(r.jsx)("h1",{children:"News content"})})}),z=(n(248),function(e){return Object(r.jsx)("div",{className:"Settings",children:Object(r.jsx)("h1",{children:"Settings content"})})}),H=(n(249),n(111),n(122)),G=n(123),B=n(17),W=n(29),J=n(9),K=Object(W.b)(25),V=Object(W.c)(2),X=Object(G.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.pristine,a=e.submitting;return Object(r.jsxs)("form",{className:"LoginForm",onSubmit:t,children:[Object(r.jsx)("div",{children:Object(r.jsx)(H.a,{component:W.a,validate:[W.d,K,V],name:"email",label:"Email",type:"text"})}),Object(r.jsx)("div",{children:Object(r.jsx)(H.a,{component:W.a,validate:[W.d,K,V],name:"password",label:"Password",type:"password"})}),Object(r.jsxs)("div",{className:"RememberMeForm",children:[Object(r.jsx)(H.a,{component:W.a,name:"rememberMe",label:"Remember me",type:"checkbox"}),Object(r.jsx)("label",{htmlFor:"rememberMe",children:"Remember me"})]}),Object(r.jsxs)("div",{className:"Error Error_input",children:[Object(r.jsx)("button",{type:"submit",disabled:n||a,children:"Login"}),e.error&&Object(r.jsx)("span",{children:e.error})]})]})})),q=Object(B.b)((function(e){return{isAuth:e.auth.isAuth}}),{authLogin:function(e,t,n){return function(){var r=Object(j.a)(d.a.mark((function r(a){var c,i;return d.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,b.a.login(e,t,n);case 2:0===(c=r.sent).data.resultCode?a(x()):(i=c.data.messages.length>0?c.data.messages[0]:"Incorrect login data",a(Object(p.a)("login",{_error:i})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},authLogout:v})((function(e){return e.isAuth?Object(r.jsx)(J.a,{to:"/Profile"}):Object(r.jsxs)("div",{className:"Login",children:[Object(r.jsx)("h1",{children:"Login"}),Object(r.jsx)(X,{onSubmit:function(t){e.authLogin(t.email,t.password,t.rememberMe)}})]})})),Y=(n(287),function(e){return Object(r.jsx)("header",{className:"Header",children:Object(r.jsx)("div",{className:"HeaderLogin",children:e.isAuth?Object(r.jsxs)("div",{className:"HeaderLogout",children:[Object(r.jsx)(k.b,{to:"/Profile",children:e.login}),Object(r.jsx)("button",{onClick:e.authLogout,children:"Log out"})]}):Object(r.jsx)(k.b,{to:"/Login",children:"Login"})})})}),Z=function(e){Object(A.a)(n,e);var t=Object(U.a)(n);function n(){return Object(T.a)(this,n),t.apply(this,arguments)}return Object(M.a)(n,[{key:"render",value:function(){return Object(r.jsx)(Y,Object(f.a)({},this.props))}}]),n}(_.Component),Q=Object(B.b)((function(e){return{login:e.auth.login,isAuth:e.auth.isAuth}}),{authLogout:v})(Z),$=n(47),ee=function(e){return function(t){return Object(r.jsx)(_.Suspense,{fallback:Object(r.jsx)($.a,{}),children:Object(r.jsx)(e,Object(f.a)({},t))})}},te=_.lazy((function(){return n.e(5).then(n.bind(null,302))})),ne=_.lazy((function(){return n.e(3).then(n.bind(null,301))})),re=_.lazy((function(){return n.e(4).then(n.bind(null,303))})),ae=function(e){Object(A.a)(n,e);var t=Object(U.a)(n);function n(){return Object(T.a)(this,n),t.apply(this,arguments)}return Object(M.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(r.jsxs)("div",{className:"Wrapper",children:[Object(r.jsx)(Q,{}),Object(r.jsx)(D,{}),Object(r.jsxs)("div",{className:"Content",children:[Object(r.jsx)(J.b,{path:"/Main",render:function(){return Object(r.jsx)(I,{})}}),Object(r.jsx)(J.b,{path:"/Messages",render:ee(re)}),Object(r.jsx)(J.b,{path:"/News",render:function(){return Object(r.jsx)(F,{})}}),Object(r.jsx)(J.b,{path:"/Users",render:ee(te)}),Object(r.jsx)(J.b,{path:"/Settings",render:function(){return Object(r.jsx)(z,{})}}),Object(r.jsx)(J.b,{path:"/Login",render:function(){return Object(r.jsx)(q,{})}}),Object(r.jsx)(J.b,{path:"/Profile/:userId?",render:ee(ne)})]})]}):Object(r.jsx)($.a,{})}}]),n}(_.Component),ce=Object(B.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(x());Promise.all([t]).then((function(){e({type:w})}))}}})(ae);L.a.render(Object(r.jsx)(C.a.StrictMode,{children:Object(r.jsx)(k.a,{children:Object(r.jsx)(B.a,{store:P,children:Object(r.jsx)(ce,{})})})}),document.getElementById("root"))},29:function(e,t,n){"use strict";n.d(t,"d",(function(){return c})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return u})),n.d(t,"e",(function(){return s})),n.d(t,"a",(function(){return o}));var r=n(5),a=n(1),c=(n(0),n(111),function(e){return e?void 0:"Required"}),i=function(e){return function(t){return t&&t.length>e?"Must be maximum ".concat(e," characters"):void 0}},u=function(e){return function(t){return t&&t.length<e?"Must me minimum ".concat(e," characters"):void 0}},s=function(e){var t=e.input,n=e.label,c=e.type,i=e.meta,u=i.touched,s=i.error,o=i.warning;return Object(a.jsxs)("div",{className:"Error Error_textarea",children:[Object(a.jsx)("textarea",Object(r.a)(Object(r.a)({},t),{},{placeholder:n,type:c})),u&&(s&&Object(a.jsx)("span",{children:s})||o&&Object(a.jsx)("span",{children:o}))]})},o=function(e){var t=e.input,n=e.label,c=e.type,i=e.meta,u=i.touched,s=i.error,o=i.warning;return Object(a.jsxs)("div",{className:"Error Error_input",children:[Object(a.jsx)("input",Object(r.a)(Object(r.a)({},t),{},{placeholder:n,type:c})),u&&(s&&Object(a.jsx)("span",{children:s})||o&&Object(a.jsx)("span",{children:o}))]})}},47:function(e,t,n){"use strict";var r=n(1);n(288);t.a=function(){return Object(r.jsxs)("div",{className:"lds-ellipsis",children:[Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{})]})}},88:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return p})),n.d(t,"d",(function(){return O})),n.d(t,"e",(function(){return h}));var r=n(11),a=n.n(r),c=n(18),i=n(64),u=n(5),s=n(19),o="ADD_POST",l="SET_USER_PROFILE",d="SET_USER_PROFILE_STATUS",j={postsData:[{id:1,text:"How're you?",likesCount:3},{id:2,text:"Let's do party tonight!",likesCount:1},{id:3,text:"*post*",likesCount:13},{id:4,text:"Hello sweety!",likesCount:6},{id:5,text:"*picture*",likesCount:22}],userProfile:null,userProfileStatus:""},f=function(e){return{type:o,newPostText:e}},b=function(e){return{type:d,status:e}},p=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.getProfile(e);case 2:r=t.sent,n((a=r.data,{type:l,userProfile:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.getProfileStatus(e);case 2:r=t.sent,n(b(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.updateProfileStatus(e);case 2:0===t.sent.data.resultCode&&n(b(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:return Object(u.a)(Object(u.a)({},e),{},{postsData:[].concat(Object(i.a)(e.postsData),[{id:6,text:t.newPostText,likesCount:0}])});case l:return Object(u.a)(Object(u.a)({},e),{},{userProfile:t.userProfile});case d:return Object(u.a)(Object(u.a)({},e),{},{userProfileStatus:t.status});default:return e}}},98:function(e,t,n){"use strict";n.d(t,"b",(function(){return u}));var r=n(64),a=n(5),c="SEND_MESSAGE",i={usersData:[{id:1,name:"Kamilla"},{id:2,name:"Vildan"},{id:3,name:"Rustem"},{id:4,name:"Elvira"},{id:5,name:"Cafe"}],messagesData:[{id:1,text:"How're you"},{id:2,text:"Let's do party tonight!"},{id:3,text:"*post*"},{id:4,text:"Hello sweety!"},{id:5,text:"*picture*"}]},u=function(e){return{type:c,newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c:return Object(a.a)(Object(a.a)({},e),{},{messagesData:[].concat(Object(r.a)(e.messagesData),[{id:6,text:t.newMessageBody}])});default:return e}}},99:function(e,t,n){"use strict";n.d(t,"d",(function(){return h})),n.d(t,"c",(function(){return x})),n.d(t,"b",(function(){return v})),n.d(t,"e",(function(){return g}));var r=n(11),a=n.n(r),c=n(18),i=n(5),u=n(19),s="FOLLOW",o="UNFOLLOW",l="SET_USERS",d="SET_CURRENT_PAGE",j="SET_TOTAL_USERS_COUNT",f="TOGGLE_IS_FETCHING",b={users:[],usersCountPerPage:5,totalUsersCount:0,currentPage:1,isFetching:!1},p=function(e){return{type:s,userId:e}},O=function(e){return{type:o,userId:e}},h=function(e){return{type:d,currentPage:e}},m=function(e){return{type:f,isFetching:e}},x=function(e,t){return function(){var n=Object(c.a)(a.a.mark((function n(r){var c;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(m(!0)),n.next=3,u.c.getUsers(e,t);case 3:c=n.sent,r(m(!1)),r((i=c.data.items,{type:l,users:i})),r((a=c.data.totalCount,{type:j,totalUsers:a}));case 7:case"end":return n.stop()}var a,i}),n)})));return function(e){return n.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.c.follow(e);case 2:0===t.sent.data.resultCode&&n(p(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.c.unfollow(e);case 2:0===t.sent.data.resultCode&&n(O(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:return Object(i.a)(Object(i.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(i.a)(Object(i.a)({},e),{},{followed:!0}):e}))});case o:return Object(i.a)(Object(i.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(i.a)(Object(i.a)({},e),{},{followed:!1}):e}))});case l:return Object(i.a)(Object(i.a)({},e),{},{users:t.users});case d:return Object(i.a)(Object(i.a)({},e),{},{currentPage:t.currentPage});case j:return Object(i.a)(Object(i.a)({},e),{},{totalUsersCount:t.totalUsers});case f:return Object(i.a)(Object(i.a)({},e),{},{isFetching:t.isFetching});default:return e}}}},[[289,1,2]]]);
//# sourceMappingURL=main.f11f6b4d.chunk.js.map