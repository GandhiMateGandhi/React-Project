(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{155:function(e,t,n){},19:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return u}));var r=n(125),c=r.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"70c3d7bd-2946-4984-86de-f95d71c9a231"}}),a={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return c.get("users?page=".concat(e,"&count=").concat(t))},follow:function(e){return c.post("follow/"+e)},unfollow:function(e){return c.delete("follow/"+e)}},i={getProfile:function(e){return c.get("profile/"+e)},getProfileStatus:function(e){return c.get("profile/status/"+e)},updateProfileStatus:function(e){return c.put("profile/status/",{status:e})}},u={me:function(){return c.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return c.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return c.delete("auth/login")}}},237:function(e,t,n){},238:function(e,t,n){},239:function(e,t,n){},240:function(e,t,n){},245:function(e,t,n){},246:function(e,t,n){},247:function(e,t,n){},248:function(e,t,n){},249:function(e,t,n){},287:function(e,t,n){},288:function(e,t,n){},289:function(e,t,n){"use strict";n.r(t);var r=n(1),c=(n(155),n(123)),a=n(124),i=n(10),u=n(88),s=n(98),o=n(99),l=n(11),d=n.n(l),j=n(18),f=n(5),b=n(19),p=n(48),O="SET_USER_DATA",h={email:null,id:null,login:null,isAuth:!1},x=function(e,t,n,r){return{type:O,payload:{id:e,email:t,login:n,isAuth:r}}},m=function(){return function(){var e=Object(j.a)(d.a.mark((function e(t){var n,r,c,a,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,c=r.id,a=r.login,i=r.email,t(x(c,i,a,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},g=function(){return function(){var e=Object(j.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.logout();case 2:0===e.sent.data.resultCode&&t(x(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(f.a)(Object(f.a)({},e),t.payload);default:return e}},w="INITIALIZED",y={initialized:!1},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(f.a)(Object(f.a)({},e),{},{initialized:!0});default:return e}},P=(0,n(10).createStore)(Object(i.combineReducers)({profilePage:u.b,messagesPage:s.a,usersPage:o.a,auth:v,app:S,form:c.a}),(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.compose)(Object(i.applyMiddleware)(a.a)));window.store=P;var E=P,L=n(61),N=n.n(L),C=n(0),_=n.n(C),k=n(26),T=n(49),A=n(50),M=n(52),U=n(51),I=(n(237),n(238),n(239),function(){return Object(r.jsx)("div",{className:"Main",children:Object(r.jsx)("h1",{children:"Main content"})})}),R=(n(240),function(e){var t=e.item;return Object(r.jsx)("div",{className:"SideItem",children:Object(r.jsx)(k.b,{to:t,children:t})})}),D=(n(245),function(){return Object(r.jsxs)("nav",{className:"Sidebar",children:[Object(r.jsx)(R,{item:"Profile"}),Object(r.jsx)(R,{item:"Messages"}),Object(r.jsx)(R,{item:"Main"}),Object(r.jsx)(R,{item:"Users"}),Object(r.jsx)(R,{item:"News"}),Object(r.jsx)(R,{item:"Settings"})]})}),F=(n(246),function(e){return Object(r.jsx)("div",{className:"News",children:Object(r.jsx)("h1",{children:"News content"})})}),z=(n(247),function(e){return Object(r.jsx)("div",{className:"Settings",children:Object(r.jsx)("h1",{children:"Settings content"})})}),H=(n(248),n(121)),G=n(122),B=n(17),W=n(29),J=n(9),K=Object(W.b)(25),V=Object(W.c)(2),X=Object(G.a)({form:"login"})((function(e){return Object(r.jsxs)("form",{className:"LoginForm",onSubmit:e.handleSubmit,children:[Object(r.jsx)("div",{children:Object(r.jsx)(H.a,{component:W.a,validate:[W.d,K,V],name:"email",label:"Email",type:"text"})}),Object(r.jsx)("div",{children:Object(r.jsx)(H.a,{component:W.a,validate:[W.d,K,V],name:"password",label:"Password",type:"password"})}),Object(r.jsxs)("div",{children:[Object(r.jsx)(H.a,{component:W.a,name:"rememberMe",label:"Remember me",type:"checkbox"}),Object(r.jsx)("label",{htmlFor:"rememberMe",children:"Remember me"})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("span",{children:e.error}),e.error&&Object(r.jsx)("span",{children:e.error}),Object(r.jsx)("button",{type:"submit",children:"Login"})]})]})})),q=Object(B.b)((function(e){return{isAuth:e.auth.isAuth}}),{authLogin:function(e,t,n){return function(){var r=Object(j.a)(d.a.mark((function r(c){var a,i;return d.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,b.a.login(e,t,n);case 2:0===(a=r.sent).data.resultCode?c(m()):(i=a.data.messages.length>0?a.data.messages[0]:"Login data is incorrect",c(Object(p.a)("login"),{_error:i}));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},authLogout:g})((function(e){return e.isAuth?Object(r.jsx)(J.a,{to:"/Profile"}):Object(r.jsxs)("div",{className:"Login",children:[Object(r.jsx)("h1",{children:"Login"}),Object(r.jsx)(X,{onSubmit:function(t){e.authLogin(t.email,t.password,t.rememberMe)}})]})})),Y=(n(287),function(e){return Object(r.jsxs)("header",{className:"Header",children:[Object(r.jsx)("img",{src:"https://i.pinimg.com/originals/a2/9a/b3/a29ab34a61c2f5504cad588f169cd4f3.png"}),Object(r.jsx)("div",{className:"HeaderLogin",children:e.isAuth?Object(r.jsxs)("div",{className:"HeaderLogout",children:[Object(r.jsx)(k.b,{to:"/Profile",children:e.login}),Object(r.jsx)("button",{onClick:e.authLogout,children:"Log out"})]}):Object(r.jsx)(k.b,{to:"/Login",children:"Login"})})]})}),Z=function(e){Object(M.a)(n,e);var t=Object(U.a)(n);function n(){return Object(T.a)(this,n),t.apply(this,arguments)}return Object(A.a)(n,[{key:"render",value:function(){return Object(r.jsx)(Y,Object(f.a)({},this.props))}}]),n}(C.Component),Q=Object(B.b)((function(e){return{login:e.auth.login,isAuth:e.auth.isAuth}}),{authLogout:g})(Z),$=n(47),ee=function(e){return function(t){return Object(r.jsx)(C.Suspense,{fallback:Object(r.jsx)($.a,{}),children:Object(r.jsx)(e,Object(f.a)({},t))})}},te=C.lazy((function(){return n.e(5).then(n.bind(null,302))})),ne=C.lazy((function(){return n.e(3).then(n.bind(null,301))})),re=C.lazy((function(){return n.e(4).then(n.bind(null,303))})),ce=function(e){Object(M.a)(n,e);var t=Object(U.a)(n);function n(){return Object(T.a)(this,n),t.apply(this,arguments)}return Object(A.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(r.jsxs)("div",{className:"Wrapper",children:[Object(r.jsx)(Q,{}),Object(r.jsx)(D,{}),Object(r.jsxs)("div",{className:"Content",children:[Object(r.jsx)(J.b,{path:"/Main",render:function(){return Object(r.jsx)(I,{})}}),Object(r.jsx)(J.b,{path:"/Messages",render:ee(re)}),Object(r.jsx)(J.b,{path:"/News",render:function(){return Object(r.jsx)(F,{})}}),Object(r.jsx)(J.b,{path:"/Users",render:ee(te)}),Object(r.jsx)(J.b,{path:"/Settings",render:function(){return Object(r.jsx)(z,{})}}),Object(r.jsx)(J.b,{path:"/Login",render:function(){return Object(r.jsx)(q,{})}}),Object(r.jsx)(J.b,{path:"/Profile/:userId?",render:ee(ne)})]})]}):Object(r.jsx)($.a,{})}}]),n}(C.Component),ae=Object(B.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(m());Promise.all([t]).then((function(){e({type:w})}))}}})(ce);N.a.render(Object(r.jsx)(_.a.StrictMode,{children:Object(r.jsx)(k.a,{children:Object(r.jsx)(B.a,{store:E,children:Object(r.jsx)(ae,{})})})}),document.getElementById("root"))},29:function(e,t,n){"use strict";n.d(t,"d",(function(){return a})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return u})),n.d(t,"e",(function(){return s})),n.d(t,"a",(function(){return o}));var r=n(5),c=n(1),a=(n(0),n(249),function(e){return e?void 0:"Required"}),i=function(e){return function(t){return t&&t.length>e?"Must be maximum ".concat(e," characters"):void 0}},u=function(e){return function(t){return t&&t.length<e?"Must me minimum ".concat(e," characters"):void 0}},s=function(e){var t=e.input,n=e.label,a=e.type,i=e.meta,u=i.touched,s=i.error,o=i.warning;return Object(c.jsxs)("div",{className:"TextArea",children:[Object(c.jsx)("textarea",Object(r.a)(Object(r.a)({},t),{},{placeholder:n,type:a})),u&&(s&&Object(c.jsx)("span",{children:s})||o&&Object(c.jsx)("span",{children:o}))]})},o=function(e){var t=e.input,n=e.label,a=e.type,i=e.meta,u=i.touched,s=i.error,o=i.warning;return Object(c.jsxs)("div",{className:"Input",children:[Object(c.jsx)("input",Object(r.a)(Object(r.a)({},t),{},{placeholder:n,type:a})),u&&(s&&Object(c.jsx)("span",{children:s})||o&&Object(c.jsx)("span",{children:o}))]})}},47:function(e,t,n){"use strict";var r=n(1);n(288);t.a=function(){return Object(r.jsxs)("div",{className:"lds-ellipsis",children:[Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{})]})}},88:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return p})),n.d(t,"d",(function(){return O})),n.d(t,"e",(function(){return h}));var r=n(11),c=n.n(r),a=n(18),i=n(64),u=n(5),s=n(19),o="ADD_POST",l="SET_USER_PROFILE",d="SET_USER_PROFILE_STATUS",j={postsData:[{id:1,text:"How're you?",likesCount:3},{id:2,text:"Let's do party tonight!",likesCount:1},{id:3,text:"*post*",likesCount:13},{id:4,text:"Hello sweety!",likesCount:6},{id:5,text:"*picture*",likesCount:22}],userProfile:null,userProfileStatus:""},f=function(e){return{type:o,newPostText:e}},b=function(e){return{type:d,status:e}},p=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.getProfile(e);case 2:r=t.sent,n((c=r.data,{type:l,userProfile:c}));case 4:case"end":return t.stop()}var c}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.getProfileStatus(e);case 2:r=t.sent,n(b(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.updateProfileStatus(e);case 2:0===t.sent.data.resultCode&&n(b(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:return Object(u.a)(Object(u.a)({},e),{},{postsData:[].concat(Object(i.a)(e.postsData),[{id:6,text:t.newPostText,likesCount:0}])});case l:return Object(u.a)(Object(u.a)({},e),{},{userProfile:t.userProfile});case d:return Object(u.a)(Object(u.a)({},e),{},{userProfileStatus:t.status});default:return e}}},98:function(e,t,n){"use strict";n.d(t,"b",(function(){return u}));var r=n(64),c=n(5),a="SEND_MESSAGE",i={usersData:[{id:1,name:"Kamilla"},{id:2,name:"Vildan"},{id:3,name:"Rustem"},{id:4,name:"Elvira"},{id:5,name:"Cafe"}],messagesData:[{id:1,text:"How're you"},{id:2,text:"Let's do party tonight!"},{id:3,text:"*post*"},{id:4,text:"Hello sweety!"},{id:5,text:"*picture*"}]},u=function(e){return{type:a,newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a:return Object(c.a)(Object(c.a)({},e),{},{messagesData:[].concat(Object(r.a)(e.messagesData),[{id:6,text:t.newMessageBody}])});default:return e}}},99:function(e,t,n){"use strict";n.d(t,"d",(function(){return h})),n.d(t,"c",(function(){return m})),n.d(t,"b",(function(){return g})),n.d(t,"e",(function(){return v}));var r=n(11),c=n.n(r),a=n(18),i=n(5),u=n(19),s="FOLLOW",o="UNFOLLOW",l="SET_USERS",d="SET_CURRENT_PAGE",j="SET_TOTAL_USERS_COUNT",f="TOGGLE_IS_FETCHING",b={users:[],usersCountPerPage:5,totalUsersCount:0,currentPage:1,isFetching:!1},p=function(e){return{type:s,userId:e}},O=function(e){return{type:o,userId:e}},h=function(e){return{type:d,currentPage:e}},x=function(e){return{type:f,isFetching:e}},m=function(e,t){return function(){var n=Object(a.a)(c.a.mark((function n(r){var a;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(x(!0)),n.next=3,u.c.getUsers(e,t);case 3:a=n.sent,r(x(!1)),r((i=a.data.items,{type:l,users:i})),r((c=a.data.totalCount,{type:j,totalUsers:c}));case 7:case"end":return n.stop()}var c,i}),n)})));return function(e){return n.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.c.follow(e);case 2:0===t.sent.data.resultCode&&n(p(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.c.unfollow(e);case 2:0===t.sent.data.resultCode&&n(O(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:return Object(i.a)(Object(i.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(i.a)(Object(i.a)({},e),{},{followed:!0}):e}))});case o:return Object(i.a)(Object(i.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(i.a)(Object(i.a)({},e),{},{followed:!1}):e}))});case l:return Object(i.a)(Object(i.a)({},e),{},{users:t.users});case d:return Object(i.a)(Object(i.a)({},e),{},{currentPage:t.currentPage});case j:return Object(i.a)(Object(i.a)({},e),{},{totalUsersCount:t.totalUsers});case f:return Object(i.a)(Object(i.a)({},e),{},{isFetching:t.isFetching});default:return e}}}},[[289,1,2]]]);
//# sourceMappingURL=main.ef6e29bf.chunk.js.map