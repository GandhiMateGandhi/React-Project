(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{290:function(t,e,r){"use strict";e.a=r.p+"static/media/UserPhoto.c5accf4f.jpg"},291:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var s=r(89);function n(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var r=[],s=!0,n=!1,a=void 0;try{for(var i,o=t[Symbol.iterator]();!(s=(i=o.next()).done)&&(r.push(i.value),!e||r.length!==e);s=!0);}catch(c){n=!0,a=c}finally{try{s||null==o.return||o.return()}finally{if(n)throw a}}return r}}(t,e)||Object(s.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},292:function(t,e,r){},293:function(t,e,r){},297:function(t,e,r){},298:function(t,e,r){},301:function(t,e,r){"use strict";r.r(e);var s=r(5),n=r(49),a=r(50),i=r(52),o=r(51),c=r(1),u=(r(292),r(0)),l=(r(293),r(47)),f=r(290),j=r(291),b=function(t){var e=Object(u.useState)(!1),r=Object(j.a)(e,2),s=r[0],n=r[1],a=Object(u.useState)(t.status),i=Object(j.a)(a,2),o=i[0],l=i[1];Object(u.useEffect)((function(){l(t.status)}),[t.status]);return Object(c.jsx)("div",{className:"ProfileStatus",children:s?Object(c.jsx)("div",{children:Object(c.jsx)("input",{onChange:function(t){l(t.currentTarget.value)},onBlur:function(){n(!1),t.updateStatus(o)},autoFocus:!0,value:o})}):Object(c.jsx)("div",{className:"ProfileStatus-Input",onClick:function(){n(!0)},children:Object(c.jsx)("p",{children:t.status||"Status is empty"})})})},d=function(t){return Object(c.jsxs)("div",{className:"ProfileInfo",children:[Object(c.jsx)("h2",{children:t.userProfile.fullName}),Object(c.jsx)("div",{className:"ProfileImage",children:Object(c.jsx)("img",{src:t.userProfile.photos.large||f.a,alt:"Profile"})}),Object(c.jsx)(b,{status:t.userProfileStatus,updateStatus:t.updateStatus})]})},p=r(88),O=(r(297),r(298),function(t){return Object(c.jsxs)("div",{className:"WallPost",children:[Object(c.jsx)("div",{className:"WallPost-Photo",children:Object(c.jsx)("img",{src:t.userProfile.photos.small||f.a,alt:"User Profile"})}),Object(c.jsx)("div",{children:t.text}),Object(c.jsxs)("div",{children:["Likes: ",t.likesCount]})]})}),P=r(121),h=r(122),m=r(29),x=Object(m.b)(150),v=Object(m.c)(2),S=Object(h.a)({form:"addPost"})((function(t){return Object(c.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(c.jsx)("div",{children:Object(c.jsx)(P.a,{component:m.e,validate:[m.d,x,v],name:"newPost",label:"New post",type:"text"})}),Object(c.jsx)("div",{children:Object(c.jsx)("button",{type:"submit",children:"Add Post"})})]})})),y=function(t){console.log("Render");var e=t.postsData.map((function(e){return Object(c.jsx)(O,{userProfile:t.userProfile,text:e.text,likesCount:e.likesCount},e.id)}));return Object(c.jsxs)("div",{className:"ProfileWall",children:[e,Object(c.jsx)(S,{onSubmit:function(e){t.addPost(e.newPost)}})]})},g=r(17),w=Object(g.b)((function(t){return{postsData:t.profilePage.postsData,newPostText:t.profilePage.newPostText,userProfile:t.profilePage.userProfile}}),(function(t){return{addPost:function(e){t(Object(p.a)(e))}}}))(y),N=function(t){return t.userProfile?Object(c.jsxs)("div",{className:"Profile",children:[Object(c.jsx)(d,Object(s.a)(Object(s.a)({},t),{},{updateStatus:t.updateStatus})),Object(c.jsx)(w,Object(s.a)({},t))]}):Object(c.jsx)(l.a,{})},k=r(9),U=r(10),C=function(t){Object(i.a)(r,t);var e=Object(o.a)(r);function r(){return Object(n.a)(this,r),e.apply(this,arguments)}return Object(a.a)(r,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userId;t||(t=13200),this.props.getUserProfile(t),this.props.getUserProfileStatus(t)}},{key:"render",value:function(){return Object(c.jsx)(N,Object(s.a)(Object(s.a)({},this.props),{},{updateStatus:this.props.updateUserProfileStatus}))}}]),r}(u.Component);e.default=Object(U.compose)(Object(g.b)((function(t){return{userProfile:t.profilePage.userProfile,userProfileStatus:t.profilePage.userProfileStatus}}),{getUserProfile:p.c,getUserProfileStatus:p.d,updateUserProfileStatus:p.e}),k.f)(C)}}]);
//# sourceMappingURL=3.78a21c75.chunk.js.map