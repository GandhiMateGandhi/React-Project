(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{111:function(t,e,n){},15:function(t,e,n){"use strict";n.d(e,"d",(function(){return c})),n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return u})),n.d(e,"c",(function(){return s}));var r=n(126),a=r.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"22f29d98-87b4-4898-a75f-c433c157801d"}}),c={getUsers:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(t,"&count=").concat(e))},follow:function(t){return a.post("follow/"+t)},unfollow:function(t){return a.delete("follow/"+t)}},i={getProfile:function(t){return a.get("profile/"+t)},getProfileStatus:function(t){return a.get("profile/status/"+t)},updateProfileStatus:function(t){return a.put("profile/status/",{status:t})},saveProfilePhoto:function(t){var e=new FormData;return e.append("image",t),a.put("profile/photo",e)}},u={me:function(){return a.get("auth/me")},login:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3?arguments[3]:void 0;return a.post("auth/login",{email:t,password:e,rememberMe:n,captcha:r})},logout:function(){return a.delete("auth/login")}},s={getCaptchaUrl:function(){return a.get("security/get-captcha-url")}}},156:function(t,e,n){},238:function(t,e,n){},239:function(t,e,n){},24:function(t,e,n){"use strict";n.d(e,"d",(function(){return c})),n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return u})),n.d(e,"e",(function(){return s})),n.d(e,"a",(function(){return o}));var r=n(5),a=n(1),c=(n(0),n(111),function(t){return t?void 0:"Required"}),i=function(t){return function(e){return e&&e.length>t?"Must be maximum ".concat(t," characters"):void 0}},u=function(t){return function(e){return e&&e.length<t?"Must me minimum ".concat(t," characters"):void 0}},s=function(t){var e=t.input,n=t.label,c=t.type,i=t.meta,u=i.touched,s=i.error,o=i.warning;return Object(a.jsxs)("div",{className:"Error Error_textarea",children:[Object(a.jsx)("textarea",Object(r.a)(Object(r.a)({},e),{},{placeholder:n,type:c})),u&&(s&&Object(a.jsx)("span",{children:s})||o&&Object(a.jsx)("span",{children:o}))]})},o=function(t){var e=t.input,n=t.label,c=t.type,i=t.meta,u=i.touched,s=i.error,o=i.warning;return Object(a.jsxs)("div",{className:"Error Error_input",children:[Object(a.jsx)("input",Object(r.a)(Object(r.a)({},e),{},{placeholder:n,type:c})),u&&(s&&Object(a.jsx)("span",{children:s})||o&&Object(a.jsx)("span",{children:o}))]})}},240:function(t,e,n){},241:function(t,e,n){},246:function(t,e,n){},247:function(t,e,n){},248:function(t,e,n){},249:function(t,e,n){},287:function(t,e,n){},288:function(t,e,n){},289:function(t,e,n){"use strict";n.r(e);var r=n(1),a=(n(156),n(124)),c=n(125),i=n(11),u=n(88),s=n(98),o=n(99),l=n(9),d=n.n(l),j=n(14),f=n(5),b=n(15),p=n(47),h="SET_USER_DATA",O="SET_CAPTCHA_URL",m={email:null,id:null,login:null,isAuth:!1,captchaUrl:null},x=function(t,e,n,r){return{type:h,payload:{id:t,email:e,login:n,isAuth:r}}},v=function(t){return{type:O,payload:{captchaUrl:t}}},g=function(){return function(){var t=Object(j.a)(d.a.mark((function t(e){var n,r,a,c,i;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.me();case 2:0===(n=t.sent).data.resultCode&&(r=n.data.data,a=r.id,c=r.login,i=r.email,e(x(a,i,c,!0)));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},w=function(){return function(){var t=Object(j.a)(d.a.mark((function t(e){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.logout();case 2:0===t.sent.data.resultCode&&e(x(null,null,null,!1));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},y=function(){return function(){var t=Object(j.a)(d.a.mark((function t(e){var n,r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.c.getCaptchaUrl();case 2:n=t.sent,r=n.data.url,e(v(r));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},P=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case h:case O:return Object(f.a)(Object(f.a)({},t),e.payload);default:return t}},S="INITIALIZED",E={initialized:!1},C=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case S:return Object(f.a)(Object(f.a)({},t),{},{initialized:!0});default:return t}},_=(0,n(11).createStore)(Object(i.combineReducers)({profilePage:u.b,messagesPage:s.a,usersPage:o.a,auth:P,app:C,form:a.a}),(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.compose)(Object(i.applyMiddleware)(c.a)));window.store=_;var L=_,U=n(61),N=n.n(U),k=n(0),T=n.n(k),A=n(27),M=n(56),I=n(57),R=n(60),D=n(59),F=(n(238),n(239),n(240),function(){return Object(r.jsx)("div",{className:"Main",children:Object(r.jsx)("h1",{children:"Main content"})})}),z=(n(241),function(t){var e=t.item;return Object(r.jsx)("div",{className:"SideItem",children:Object(r.jsx)(A.b,{to:e,children:e})})}),H=(n(246),function(){return Object(r.jsxs)("nav",{className:"Sidebar",children:[Object(r.jsx)(z,{item:"Profile"}),Object(r.jsx)(z,{item:"Messages"}),Object(r.jsx)(z,{item:"Main"}),Object(r.jsx)(z,{item:"Users"}),Object(r.jsx)(z,{item:"News"}),Object(r.jsx)(z,{item:"Settings"})]})}),G=(n(247),function(t){return Object(r.jsx)("div",{className:"News",children:Object(r.jsx)("h1",{children:"News content"})})}),B=(n(248),function(t){return Object(r.jsx)("div",{className:"Settings",children:Object(r.jsx)("h1",{children:"Settings content"})})}),W=(n(249),n(111),n(122)),J=n(123),K=n(19),V=n(24),X=n(10),q=Object(V.b)(25),Y=Object(V.c)(2),Z=Object(J.a)({form:"login"})((function(t){var e=t.handleSubmit,n=t.pristine,a=t.submitting,c=t.captchaUrl;return Object(r.jsxs)("form",{className:"LoginForm",onSubmit:e,children:[Object(r.jsx)("div",{children:Object(r.jsx)(W.a,{component:V.a,validate:[V.d,q,Y],name:"email",label:"Email",type:"text"})}),Object(r.jsx)("div",{children:Object(r.jsx)(W.a,{component:V.a,validate:[V.d,q,Y],name:"password",label:"Password",type:"password"})}),Object(r.jsxs)("div",{className:"RememberMeForm",children:[Object(r.jsx)(W.a,{component:V.a,name:"rememberMe",label:"Remember me",type:"checkbox"}),Object(r.jsx)("label",{htmlFor:"rememberMe",children:"Remember me"})]}),c&&Object(r.jsx)("img",{src:c,alt:"Captcha"}),c&&Object(r.jsx)("div",{children:Object(r.jsx)(W.a,{component:V.a,validate:[V.d,q,Y],name:"captcha",label:"Captcha",type:"text"})}),Object(r.jsxs)("div",{className:"Error Error_input",children:[Object(r.jsx)("button",{type:"submit",disabled:n||a,children:"Login"}),t.error&&Object(r.jsx)("span",{children:t.error})]})]})})),Q=Object(K.b)((function(t){return{isAuth:t.auth.isAuth,captchaUrl:t.auth.captchaUrl}}),{authLogin:function(t,e,n,r){return function(){var a=Object(j.a)(d.a.mark((function a(c){var i,u;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,b.a.login(t,e,n,r);case 2:0===(i=a.sent).data.resultCode?c(g()):(10===i.data.resultCode&&c(y()),u=i.data.messages.length>0?i.data.messages[0]:"Incorrect login data",c(Object(p.a)("login",{_error:u})));case 4:case"end":return a.stop()}}),a)})));return function(t){return a.apply(this,arguments)}}()},authLogout:w,getCaptchaUrl:y})((function(t){return t.isAuth?Object(r.jsx)(X.a,{to:"/Profile"}):Object(r.jsxs)("div",{className:"Login",children:[Object(r.jsx)("h1",{children:"Login"}),Object(r.jsx)(Z,{captchaUrl:t.captchaUrl,onSubmit:function(e){t.authLogin(e.email,e.password,e.rememberMe,e.captcha)}})]})})),$=(n(287),function(t){return Object(r.jsx)("header",{className:"Header",children:Object(r.jsx)("div",{className:"HeaderLogin",children:t.isAuth?Object(r.jsxs)("div",{className:"HeaderLogout",children:[Object(r.jsx)(A.b,{to:"/Profile",children:t.login}),Object(r.jsx)("button",{onClick:t.authLogout,children:"Log out"})]}):Object(r.jsx)(A.b,{to:"/Login",children:"Login"})})})}),tt=function(t){Object(R.a)(n,t);var e=Object(D.a)(n);function n(){return Object(M.a)(this,n),e.apply(this,arguments)}return Object(I.a)(n,[{key:"render",value:function(){return Object(r.jsx)($,Object(f.a)({},this.props))}}]),n}(k.Component),et=Object(K.b)((function(t){return{login:t.auth.login,isAuth:t.auth.isAuth}}),{authLogout:w})(tt),nt=n(48),rt=function(t){return function(e){return Object(r.jsx)(k.Suspense,{fallback:Object(r.jsx)(nt.a,{}),children:Object(r.jsx)(t,Object(f.a)({},e))})}},at=k.lazy((function(){return n.e(5).then(n.bind(null,302))})),ct=k.lazy((function(){return n.e(3).then(n.bind(null,301))})),it=k.lazy((function(){return n.e(4).then(n.bind(null,303))})),ut=function(t){Object(R.a)(n,t);var e=Object(D.a)(n);function n(){return Object(M.a)(this,n),e.apply(this,arguments)}return Object(I.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(r.jsxs)("div",{className:"Wrapper",children:[Object(r.jsx)(et,{}),Object(r.jsx)(H,{}),Object(r.jsxs)("div",{className:"Content",children:[Object(r.jsx)(X.b,{path:"/Main",render:function(){return Object(r.jsx)(F,{})}}),Object(r.jsx)(X.b,{path:"/Messages",render:rt(it)}),Object(r.jsx)(X.b,{path:"/News",render:function(){return Object(r.jsx)(G,{})}}),Object(r.jsx)(X.b,{path:"/Users",render:rt(at)}),Object(r.jsx)(X.b,{path:"/Settings",render:function(){return Object(r.jsx)(B,{})}}),Object(r.jsx)(X.b,{path:"/Login",render:function(){return Object(r.jsx)(Q,{})}}),Object(r.jsx)(X.b,{path:"/Profile/:userId?",render:rt(ct)})]})]}):Object(r.jsx)(nt.a,{})}}]),n}(k.Component),st=Object(K.b)((function(t){return{initialized:t.app.initialized}}),{initializeApp:function(){return function(t){var e=t(g());Promise.all([e]).then((function(){t({type:S})}))}}})(ut);N.a.render(Object(r.jsx)(T.a.StrictMode,{children:Object(r.jsx)(A.a,{children:Object(r.jsx)(K.a,{store:L,children:Object(r.jsx)(st,{})})})}),document.getElementById("root"))},48:function(t,e,n){"use strict";var r=n(1);n(288);e.a=function(){return Object(r.jsxs)("div",{className:"lds-ellipsis",children:[Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{})]})}},88:function(t,e,n){"use strict";n.d(e,"a",(function(){return b})),n.d(e,"c",(function(){return O})),n.d(e,"d",(function(){return m})),n.d(e,"f",(function(){return x})),n.d(e,"e",(function(){return v}));var r=n(9),a=n.n(r),c=n(14),i=n(64),u=n(5),s=n(15),o="ADD_POST",l="SET_USER_PROFILE",d="SET_USER_PROFILE_STATUS",j="SET_PROFILE_PHOTO",f={postsData:[{id:1,text:"How're you?",likesCount:3},{id:2,text:"Let's do party tonight!",likesCount:1},{id:3,text:"*post*",likesCount:13},{id:4,text:"Hello sweety!",likesCount:6},{id:5,text:"*picture*",likesCount:22}],userProfile:null,userProfileStatus:""},b=function(t){return{type:o,newPostText:t}},p=function(t){return{type:d,status:t}},h=function(t){return{type:j,photos:t}},O=function(t){return function(){var e=Object(c.a)(a.a.mark((function e(n){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.b.getProfile(t);case 2:r=e.sent,n((a=r.data,{type:l,userProfile:a}));case 4:case"end":return e.stop()}var a}),e)})));return function(t){return e.apply(this,arguments)}}()},m=function(t){return function(){var e=Object(c.a)(a.a.mark((function e(n){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.b.getProfileStatus(t);case 2:r=e.sent,n(p(r.data));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},x=function(t){return function(){var e=Object(c.a)(a.a.mark((function e(n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.b.updateProfileStatus(t);case 2:0===e.sent.data.resultCode&&n(p(t));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},v=function(t){return function(){var e=Object(c.a)(a.a.mark((function e(n){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.b.saveProfilePhoto(t);case 2:0===(r=e.sent).data.resultCode&&n(h(r.data.data.photos));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};e.b=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case o:return Object(u.a)(Object(u.a)({},t),{},{postsData:[{id:null,text:e.newPostText,likesCount:0}].concat(Object(i.a)(t.postsData))});case l:return Object(u.a)(Object(u.a)({},t),{},{userProfile:e.userProfile});case d:return Object(u.a)(Object(u.a)({},t),{},{userProfileStatus:e.status});case j:return Object(u.a)(Object(u.a)({},t),{},{userProfile:Object(u.a)(Object(u.a)({},t.userProfile),{},{photos:e.photos})});default:return t}}},98:function(t,e,n){"use strict";n.d(e,"b",(function(){return u}));var r=n(64),a=n(5),c="SEND_MESSAGE",i={usersData:[{id:1,name:"Kamilla"},{id:2,name:"Vildan"},{id:3,name:"Rustem"},{id:4,name:"Elvira"},{id:5,name:"Cafe"}],messagesData:[{id:1,text:"How're you"},{id:2,text:"Let's do party tonight!"},{id:3,text:"*post*"},{id:4,text:"Hello sweety!"},{id:5,text:"*picture*"}]},u=function(t){return{type:c,newMessageBody:t}};e.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case c:return Object(a.a)(Object(a.a)({},t),{},{messagesData:[].concat(Object(r.a)(t.messagesData),[{id:6,text:e.newMessageBody}])});default:return t}}},99:function(t,e,n){"use strict";n.d(e,"d",(function(){return O})),n.d(e,"c",(function(){return x})),n.d(e,"b",(function(){return v})),n.d(e,"e",(function(){return g}));var r=n(9),a=n.n(r),c=n(14),i=n(5),u=n(15),s="FOLLOW",o="UNFOLLOW",l="SET_USERS",d="SET_CURRENT_PAGE",j="SET_TOTAL_USERS_COUNT",f="TOGGLE_IS_FETCHING",b={users:[],usersCountPerPage:5,totalUsersCount:0,currentPage:1,isFetching:!1},p=function(t){return{type:s,userId:t}},h=function(t){return{type:o,userId:t}},O=function(t){return{type:d,currentPage:t}},m=function(t){return{type:f,isFetching:t}},x=function(t,e){return function(){var n=Object(c.a)(a.a.mark((function n(r){var c;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(m(!0)),n.next=3,u.d.getUsers(t,e);case 3:c=n.sent,r(m(!1)),r((i=c.data.items,{type:l,users:i})),r((a=c.data.totalCount,{type:j,totalUsers:a}));case 7:case"end":return n.stop()}var a,i}),n)})));return function(t){return n.apply(this,arguments)}}()},v=function(t){return function(){var e=Object(c.a)(a.a.mark((function e(n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.d.follow(t);case 2:0===e.sent.data.resultCode&&n(p(t));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},g=function(t){return function(){var e=Object(c.a)(a.a.mark((function e(n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.d.unfollow(t);case 2:0===e.sent.data.resultCode&&n(h(t));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};e.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case s:return Object(i.a)(Object(i.a)({},t),{},{users:t.users.map((function(t){return t.id===e.userId?Object(i.a)(Object(i.a)({},t),{},{followed:!0}):t}))});case o:return Object(i.a)(Object(i.a)({},t),{},{users:t.users.map((function(t){return t.id===e.userId?Object(i.a)(Object(i.a)({},t),{},{followed:!1}):t}))});case l:return Object(i.a)(Object(i.a)({},t),{},{users:e.users});case d:return Object(i.a)(Object(i.a)({},t),{},{currentPage:e.currentPage});case j:return Object(i.a)(Object(i.a)({},t),{},{totalUsersCount:e.totalUsers});case f:return Object(i.a)(Object(i.a)({},t),{},{isFetching:e.isFetching});default:return t}}}},[[289,1,2]]]);
//# sourceMappingURL=main.ddeea29e.chunk.js.map