"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7833],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var l=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=l.createContext({}),p=function(e){var t=l.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return l.createElement(u.Provider,{value:t},e.children)},k="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),k=p(n),m=r,d=k["".concat(u,".").concat(m)]||k[m]||s[m]||o;return n?l.createElement(d,i(i({ref:t},c),{},{components:n})):l.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[k]="string"==typeof e?e:r,i[1]=a;for(var p=2;p<o;p++)i[p]=n[p];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1950:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>a,toc:()=>p});var l=n(7462),r=(n(7294),n(3905));const o={sidebar_position:1},i="Git, Version Control",a={unversionedId:"GIT/overview",id:"GIT/overview",title:"Git, Version Control",description:"\ubc84\uc804 \uad00\ub9ac \uc2dc\uc2a4\ud15c(Version Control System:VCS)",source:"@site/docs-computer/GIT/overview.md",sourceDirName:"GIT",slug:"/GIT/overview",permalink:"/docu_blog/docs-computer/GIT/overview",draft:!1,editUrl:"https://github.com/ashjean7805/docu_blog/tree/main/docs-computer/GIT/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Git Study",permalink:"/docu_blog/docs-computer/category/git-study"},next:{title:"Dictionary",permalink:"/docu_blog/docs-computer/category/dictionary"}},u={},p=[{value:"1. \uc800\uc7a5\uc18c(Repository)",id:"1-\uc800\uc7a5\uc18crepository",level:2},{value:"2. \uc800\uc7a5 \ud56d\ubaa9",id:"2-\uc800\uc7a5-\ud56d\ubaa9",level:2},{value:"3. \uc791\uc5c5 \ud2b8\ub9ac",id:"3-\uc791\uc5c5-\ud2b8\ub9ac",level:2},{value:"4. \ud30c\uc77c \ub3d9\uae30\ud654",id:"4-\ud30c\uc77c-\ub3d9\uae30\ud654",level:2},{value:"5. \ud504\ub85c\uc81d\ud2b8, \ub514\ub809\ud1a0\ub9ac, \ud30c\uc77c \ucd94\uc801\ud558\uae30",id:"5-\ud504\ub85c\uc81d\ud2b8-\ub514\ub809\ud1a0\ub9ac-\ud30c\uc77c-\ucd94\uc801\ud558\uae30",level:2},{value:"6. Tag -&gt; Milestone \ucd94\uc801",id:"6-tag---milestone-\ucd94\uc801",level:2},{value:"7. Branch \uc774\ub825 \uad00\ub9ac",id:"7-branch-\uc774\ub825-\uad00\ub9ac",level:2},{value:"8. \ud569\uce58\uae30(Merge)",id:"8-\ud569\uce58\uae30merge",level:2},{value:"9. \uc7a0\uae08\uc635\uc158",id:"9-\uc7a0\uae08\uc635\uc158",level:2}],c={toc:p},k="wrapper";function s(e){let{components:t,...n}=e;return(0,r.kt)(k,(0,l.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"git-version-control"},"Git, Version Control"),(0,r.kt)("p",null,"\ubc84\uc804 \uad00\ub9ac \uc2dc\uc2a4\ud15c(Version Control System:VCS)\n\uc0ac\uc6a9\uc790 \ud504\ub85c\uc81d\ud2b8\uc5d0 \ud3ec\ud568\ub41c \ud30c\uc77c\uc758 \ubcc0\uacbd \uc0ac\ud56d\uc744 \ucd94\uc801\ud560 \uc218 \uc788\ub3c4\ub85d \ub3d5\ub294 \ubc29\ubc95\ub860(Methodology)\uc774\ub098 \ub3c4\uad6c"),(0,r.kt)("p",null,"\ud30c\uc77c \ubcf5\uc0ac\ubcf8_\ub0a0\uc9dc, \uc2dc\uac04 \ud615\ud0dc\uc758 \uad00\ub9ac\ub294 \ubc88\uac70\ub85c\uc6cc \uc790\ub3d9\ud654\ub97c \uc2dc\ub3c4"),(0,r.kt)("p",null,"VCS : \ud504\ub85c\uc81d\ud2b8\uc5d0 \ud3ec\ud568\ub41c \ubaa8\ub4e0 \ubcc0\uacbd\uc0ac\ud56d\uc744 \ubcf5\uc0ac\ud558\uc5ec \uad00\ub9ac\ud568\uc73c\ub85c\uc11c \ubcc0\uacbd \uc0ac\ud56d \ucd94\uc801"),(0,r.kt)("p",null,"\ubd84\uc0b0\ubc84\uc804\uad00\ub9ac\uc2dc\uc2a4\ud15c(Distributed Version Contryl System : DVCS)\n\ubcf8\uc9c8\uc740 \uac19\uc73c\ub098 \uac1c\ubc1c\uc790\ub4e4 \uac04 \ubcc0\uacbd \uc0ac\ud56d \ubc18\uc601 \ubc0f \uacf5\uc720"),(0,r.kt)("h2",{id:"1-\uc800\uc7a5\uc18crepository"},"1. \uc800\uc7a5\uc18c(Repository)"),(0,r.kt)("p",null,"\uc0ac\uc6a9\uc790\uac00 \ubcc0\uacbd\ud55c \ubaa8\ub4e0 \ub0b4\uc6a9\uc744 \ucd94\uc801\ud558\ub294 \uacf5\uac04\n-> \ucf54\ub4dc\uc758 \ud604\uc7ac \uc0c1\ud0dc, \ubcc0\uacbd \uc2dc\uac01, author, \ubcc0\uacbd \uc0ac\ud56d \uc124\uba85 \ubc0f \ud14d\uc2a4\ud2b8 \ub85c\uadf8"),(0,r.kt)("p",null,"\ucd08\uae30 : \ubcc0\uacbd \ub0b4\uc5ed \uc800\uc7a5 \ucef4\ud4e8\ud130\uc5d0 \uc9c1\uc811 \uc811\uadfc\nCVS, Subversion : \uc911\uc559\uc9d1\uc911\uc2dd \uc800\uc7a5\uc18c \ubaa8\ub378\n\uc0ac\uc6a9\uc790\ub294 \ucd5c\uc2e0 \ubc84\uc804 \ucf54\ub4dc \ubcf4\uc720, \ubcc0\uacbd \uc774\ub825 \uc800\uc7a5\uc18c \uc870\ud68c \ud544\uc694\n",(0,r.kt)("inlineCode",{parentName:"p"},"\uc815\ubcf4 \uc694\uccad")," -> ",(0,r.kt)("inlineCode",{parentName:"p"},"\ub124\ud2b8\uc6cc\ud06c \uc5f0\uacb0")," <- ",(0,r.kt)("inlineCode",{parentName:"p"},"\ubb38\uc81c \uc0c1\ud669!")),(0,r.kt)("p",null,"Git : \uac01\uc790\uac00 \ud504\ub85c\uc81d\ud2b8 \uc804\uccb4 \uc774\ub825\uc774 \uc788\ub294 \uc790\uc2e0\ub9cc\uc758 \uc800\uc7a5\uc18c\n\ucee4\ubc0b(Commit) \uc2dc \uc6d0\uaca9 \uc800\uc7a5\uc18c \uc5f0\uacb0 X, \ubcc0\uacbd\uc0ac\ud56d \uc9c0\uc5ed \uc800\uc7a5\uc18c \uc800\uc7a5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"commit")," : \ub0b4\uc5ed \uae30\ub85d, \ubcc0\uacbd\uc0ac\ud56d")),(0,r.kt)("p",null,"Push : Still \uc911\uc559 \ud504\ub85c\uc81d\ud2b8 \uc800\uc7a5\uc18c <- \ubcc0\uacbd\uc0ac\ud56d \uc804\uc1a1\nor \ubcc0\uacbd\uc0ac\ud56d \ubaa8\uc544\ub454 \ud328\uce58 \ub9cc\ub4e4\uc5b4 \ud504\ub85c\uc81d\ud2b8 \uad00\ub9ac\uc790 \uc81c\ucd9c \ubc0f \ubc18\uc601(Pull Request)"),(0,r.kt)("h2",{id:"2-\uc800\uc7a5-\ud56d\ubaa9"},"2. \uc800\uc7a5 \ud56d\ubaa9"),(0,r.kt)("p",null,"EVERYTHING = everything needed for project."),(0,r.kt)("p",null,"\uc800\uc7a5\uc18c : \uc218\uc815\ud558\uac70\uc0ac \uac1c\uc120\ud558\uace0 \uc0c8\ub85c\uc6b4 \ubc84\uc804\uc744 \ube4c\ub4dc\ud558\ub294\ub370 \ud544\uc694\ud55c \ubcf5\uc0ac\ubcf8 \ud544\uc694"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud504\ub85c\uc81d\ud2b8 \uc18c\uc2a4\ucf54\ub4dc"),(0,r.kt)("li",{parentName:"ul"},"\ube4c\ub4dc \ud30c\uc77c")),(0,r.kt)("h2",{id:"3-\uc791\uc5c5-\ud2b8\ub9ac"},"3. \uc791\uc5c5 \ud2b8\ub9ac"),(0,r.kt)("p",null,"\ubaa8\ub4e0 \ubcc0\uacbd\uc740 \uc791\uc5c5 \ud2b8\ub9ac\uc5d0\uc11c \uc774\ub8e8\uc5b4\uc9d0"),(0,r.kt)("p",null,"\uc791\uc5c5\ud2b8\ub9ac : \uc800\uc7a5\uc18c\ub97c \ubc14\ub77c\ubcf4\ub294 \uc790\uc2e0\uc758 \ud604\uc7ac \uc2dc\uc810."),(0,r.kt)("p",null,"\ud2b8\ub9ac \uc2dc\uc791\ud788\uae30"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ubcf5\uc81c(clone) : \uc9c0\uc5ed \uc800\uc7a5\uc18c \ub9cc\ub4e4\uae30 -> \uba54\uc778 \ube0c\ub79c\uce58 \ubcf5\uc0ac\ubcf8 \uccb4\ud06c\uc544\uc6c3(check out)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"check out")," : Git\uc774 \uc0ac\uc6a9\uc790\uc758 \uc791\uc5c5 \ud2b8\ub9ac\ub97c \uc800\uc7a5\uc18c \ud2b9\uc815 \uc2dc\uc810\uacfc \uc77c\uce58\ud558\ub3c4\ub85d \ubcc0\uacbd \uc791\uc5c5"))),(0,r.kt)("li",{parentName:"ul"},"Git \uc790\uc2e0 \ud504\ub85c\uc81d\ud2b8 \uc800\uc7a5\uc18c \ucd08\uae30\ud654 \uc694\uccad")),(0,r.kt)("p",null,"VCS\uc758 \ud575\uc2ec\uc740 \ubcc0\uacbd\uc0ac\ud56d\uc744 \ucd94\uc801\ud558\ub294 \uac83."),(0,r.kt)("h2",{id:"4-\ud30c\uc77c-\ub3d9\uae30\ud654"},"4. \ud30c\uc77c \ub3d9\uae30\ud654"),(0,r.kt)("p",null,"\uac1c\ubc1c\uc790 : \uc18c\uc2a4 \ucf54\ub4dc \ubcc0\uacbd -> \ub2e8\uc704 \ud14c\uc2a4\ud2b8(Side Effect \uccb4\ud06c) -> Commit\n\ucee4\ubc0b \uc2dc\uc810"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc800\uc7a5\uc18c \uc0c8 \ub9ac\ube44\uc804"),(0,r.kt)("li",{parentName:"ul"},"\ub85c\uadf8 \uba54\uc2dc\uc9c0 \uc800\uc7a5")),(0,r.kt)("p",null,"-> \ub2e4\ub978 \uac1c\ubc1c\uc790\uc640 \ubcc0\uacbd \uc0ac\ud56d \uacf5\uc720\n\uc0c1\uc704\uc800\uc7a5\uc18c(Upstream Repository) : \uacf5\uc6a9\uc800\uc7a5\uc18c\ub77c\uace0\ub3c4 \ud558\uba70 \ubcc0\uacbd\uc0ac\ud56d \ud478\uc2dc"),(0,r.kt)("p",null,"\ub3d9\uae30\ud654"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"PUSH : \ub098\uc758 \ubcc0\uacbd\uc0ac\ud56d \uacf5\uc720"),(0,r.kt)("li",{parentName:"ul"},"PULL : \uc0c1\ub300\ubc29\uc774 \ubcc0\uacbd\uc0ac\ud56d \uacf5\uc720 -> \ubcc0\uacbd\uc0ac\ud56d \uac00\uc838\uc624\uae30(\uc6d0\uaca9 \uc800\uc7a5\uc18c \ubcf5\uc0ac\ubcf8 \uc0dd\uc131) / \ubcc0\uacbd\uc0ac\ud56d \ud569\uce58\uae30(Update)")),(0,r.kt)("h2",{id:"5-\ud504\ub85c\uc81d\ud2b8-\ub514\ub809\ud1a0\ub9ac-\ud30c\uc77c-\ucd94\uc801\ud558\uae30"},"5. \ud504\ub85c\uc81d\ud2b8, \ub514\ub809\ud1a0\ub9ac, \ud30c\uc77c \ucd94\uc801\ud558\uae30"),(0,r.kt)("p",null,"\uc800\uc7a5 \ub300\uc0c1 \uad6c\uc870\ud654\ud558\uae30"),(0,r.kt)("p",null,"\ud504\ub85c\uc81d\ud2b8 = \uc800\uc7a5\uc18c:\ub514\ub809\ud1a0\ub9ac\uc640 \ud30c\uc77c\ub4e4\n\ubaa8\ub4c8\ud654 \ub4f1\ub4f1 \ub2e4\uc591\ud55c \ucf00\uc774\uc2a4\uac00 \ub9ce\uc74c\nDepends on the Project"),(0,r.kt)("p",null,"Git : \ucd5c\ud558\uc704 \uacc4\uce35, \uc800\uc7a5\uc18c \uc800\uc7a5\ud55c \ud30c\uc77c\uc744 \ub0b4\uc6a9 \ub2e8\uc704\ub85c \ucd94\uc801\nmodel.py <- \ubb38\uc790\uc640 \uc904 \ucd94\uc801 : \uc774\ub984, \ud30c\uc77c \ubaa8\ub4dc, \uc2ec\ubcfc\ub9ad \ud30c\uc77c \uc5ec\ubd80 \ub4f1 \uba54\ud0c0 \ub370\uc774\ud130 \ucd94\uac00"),(0,r.kt)("p",null,"-> \uae30\uc220\uc801 \uc774\uc810"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc800\uc7a5\uc18c \uc804\uccb4\uc774\ub825 \uc800\uc7a5\uc6a9\ub7c9 \uc904\uc5b4\ub4ec"),(0,r.kt)("li",{parentName:"ul"},"\ub450 \ud30c\uc77c \uc0ac\uc774 \ud568\uc218\ub098 \ud074\ub798\uc2a4 \uc774\ub3d9 \ucd94\uc801 \uac00\ub2a5\ud574\uc9d0")),(0,r.kt)("h2",{id:"6-tag---milestone-\ucd94\uc801"},"6. Tag -> Milestone \ucd94\uc801"),(0,r.kt)("p",null,"\ud504\ub85c\uc81d\ud2b8 \uc9c4\ud589 -> \ub9c8\uc77c\uc2a4\ud1a4 \ub3c4\ub2ec\n\uc560\uc790\uc77c \ubc29\ubc95\ub860 -> \uc2a4\ud504\ub9b0\ud2b8 = \uc8fc\uac04\uac1c\ubc1c\uc8fc\uae30 (\ub9e4\uc8fc \uc0c8\ub85c\uc6b4 \uae30\ub2a5 \ucd94\uac00)\n\uc6cc\ud130\ud3f4 \ubc29\ubc95\ub860 -> \uc218\uac1c\uc6d4\uc5d0 \ud55c \ubc88\uc529 \uc5c5\ub370\uc774\ud2b8 \ub9b4\ub9ac\uc2a4"),(0,r.kt)("p",null,"\ub458 \uc911 \uc5b4\ub290 \uacbd\uc6b0\ub77c\ub3c4 \ud2b9\uc815 \ub9c8\uc77c\uc2a4\ud1a4 \ub2ec\uc131 \uc2dc \uc800\uc7a5\uc18c \uc0c1\ud0dc \ucd94\uc801\nusing tag(\ud0dc\uadf8)\n-> \uc800\uc7a5\uc18c \uc774\ub825\uc758 \ud2b9\uc815 \uc704\uce58 \uae30\ub85d - \uacf5\uac1c \ub9b4\ub9ac\uc2a4 / \uc8fc\uc694 \ub9c8\uc77c\uc2a4\ud1a4 / \ubc84\uadf8 \uc218\uc815 \ub4f1\n\ud2b9\uc815 \ub9ac\ube44\uc804\uc5d0 \ud0dc\uadf8\ub97c \ubd80\uc5ec\ud558\uc5ec \uad00\ub9ac"),(0,r.kt)("h2",{id:"7-branch-\uc774\ub825-\uad00\ub9ac"},"7. Branch \uc774\ub825 \uad00\ub9ac"),(0,r.kt)("p",null,"\ub9b4\ub9ac\uc2a4 \ube0c\ub79c\uce58"),(0,r.kt)("p",null,"\uba54\uc778 \ube0c\ub79c\uce58(main branch) --\x3e track"),(0,r.kt)("p",null,"\uc9c0\uc5ed \ube0c\ub79c\uce58(local branch)"),(0,r.kt)("h2",{id:"8-\ud569\uce58\uae30merge"},"8. \ud569\uce58\uae30(Merge)"),(0,r.kt)("p",null,"\ube0c\ub79c\uce58 \uc774\ub825 \ud558\ub098\ub85c \ud569\uce58\ub294 \uac83"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ucda9\ub3cc \ubc1c\uc0dd \uac00\ub2a5",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ub2e4\ub978 \ubd80\ubd84 \uc218\uc815 : Merge"),(0,r.kt)("li",{parentName:"ul"},"\uac19\uc740 \ubd80\ubd84 \uc218\uc815 : Conflict -> \ucda9\ub3cc \ucc98\ub9ac \ubc29\uc2dd \uc219\uc9c0 \ud544\uc694")))),(0,r.kt)("h2",{id:"9-\uc7a0\uae08\uc635\uc158"},"9. \uc7a0\uae08\uc635\uc158"),(0,r.kt)("p",null,"check out : \ub300\uc5ec\ncheck in : \ubc18\ub0a9"),(0,r.kt)("p",null,"\ub3c4\uc11c\uad00\uc5d0\uc11c \ucc45 \ube4c\ub9ac\uc9c0 \uc54a\uc73c\uba74 \ub2e4\ub978 \uc0ac\ub78c\uc774 \ubabb \ubd04\n=> \ud55c\ubc88\uc5d0 \ud55c \uc0ac\ub78c\ub9cc \uc218\uc815 \uac00\ub2a5"),(0,r.kt)("p",null," \uc774\ub97c \ubcf4\uc644\ud558\ub294 \uac1c\ub150\n",(0,r.kt)("inlineCode",{parentName:"p"},"Optimistic Locking (\ub099\uad00\uc801 \uc7a0\uae08)"),"\n\ubcc0\uacbd \uc601\uc601 \ucda9\ub3cc \uc5c6\uc73c\ub9ac\ub77c \uac00\uc815 -> \uac19\uc740 \ud30c\uc77c \uccb4\ud06c\uc544\uc6c3 \ud5c8\uc6a9\nconflict(\ucda9\ub3cc) \uac1c\ub150\uc744 \ub3c4\uc785\ud558\uc5ec \ud574\uacb0"),(0,r.kt)("p",null," \ud615\uc0c1\uad00\ub9ac(Configuration Management, CM)\n\ud615\uc0c1\uad00\ub9ac\ub3c4\uad6c : \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \uc5ec\ub7ec \ubc84\uc804\uc5d0\uc11c \uc11c\ub85c \ub2e4\ub978 \uad6c\uc131(configuration)\uc744 \ub2e4\ub8e8\uae30 \uc704\ud574 \uc124\uacc4\ub41c \ub3c4\uad6c"),(0,r.kt)("p",null," Based on VCS, but no VCS"))}s.isMDXComponent=!0}}]);