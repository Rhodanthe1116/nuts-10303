(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{118:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(17),i=t(125),s=t(131),m=t(124),c=t(123);var o=function(e){const{metadata:a}=e,{previousPage:t,nextPage:l}=a;return n.a.createElement("nav",{className:"pagination-nav","aria-label":Object(c.b)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},n.a.createElement("div",{className:"pagination-nav__item"},t&&n.a.createElement(m.a,{className:"pagination-nav__link",to:t},n.a.createElement("div",{className:"pagination-nav__label"},"\xab"," ",n.a.createElement(c.a,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")))),n.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},l&&n.a.createElement(m.a,{className:"pagination-nav__link",to:l},n.a.createElement("div",{className:"pagination-nav__label"},n.a.createElement(c.a,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")," ","\xbb"))))},d=t(128);a.default=function(e){const{metadata:a,items:t,sidebar:l}=e,{siteConfig:{title:m}}=Object(r.default)(),{blogDescription:c,blogTitle:g,permalink:u}=a,p="/"===u?m:g;return n.a.createElement(i.a,{title:p,description:c,wrapperClassName:"blog-wrapper",searchMetadatas:{tag:"blog_posts_list"}},n.a.createElement("div",{className:"container margin-vert--lg"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col col--3"},n.a.createElement(d.a,{sidebar:l})),n.a.createElement("main",{className:"col col--7"},t.map((({content:e})=>n.a.createElement(s.a,{key:e.metadata.permalink,frontMatter:e.frontMatter,metadata:e.metadata,truncated:e.metadata.truncated},n.a.createElement(e,null)))),n.a.createElement(o,{metadata:a})))))}},128:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var l=t(0),n=t.n(l),r=t(121),i=t(124),s=t(56),m=t.n(s);function c({sidebar:e}){return 0===e.items.length?null:n.a.createElement("div",{className:Object(r.a)(m.a.sidebar,"thin-scrollbar")},n.a.createElement("h3",{className:m.a.sidebarItemTitle},e.title),n.a.createElement("ul",{className:m.a.sidebarItemList},e.items.map((e=>n.a.createElement("li",{key:e.permalink,className:m.a.sidebarItem},n.a.createElement(i.a,{isNavLink:!0,to:e.permalink,className:m.a.sidebarItemLink,activeClassName:m.a.sidebarItemLinkActive},e.title))))))}},131:function(e,a,t){"use strict";var l=t(0),n=t.n(l),r=t(121),i=t(120),s=t(123),m=t(124),c=t(132),o=t(130),d=t(58),g=t.n(d),u=t(122);a.a=function(e){const a=function(){const{selectMessage:e}=Object(u.usePluralForm)();return a=>{const t=Math.ceil(a);return e(t,Object(s.b)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}}(),{children:t,frontMatter:l,metadata:d,truncated:p,isBlogPostPage:E=!1}=e,{date:b,formattedDate:v,permalink:h,tags:N,readingTime:_}=d,{author:f,title:k,image:w,keywords:T}=l,L=l.author_url||l.authorURL,M=l.author_title||l.authorTitle,O=l.author_image_url||l.authorImageURL;return n.a.createElement(n.a.Fragment,null,n.a.createElement(o.a,{keywords:T,image:w}),n.a.createElement("article",{className:E?void 0:"margin-bottom--xl"},(()=>{const e=E?"h1":"h2";return n.a.createElement("header",null,n.a.createElement(e,{className:Object(r.a)("margin-bottom--sm",g.a.blogPostTitle)},E?k:n.a.createElement(m.a,{to:h},k)),n.a.createElement("div",{className:"margin-vert--md"},n.a.createElement("time",{dateTime:b,className:g.a.blogPostDate},v,_&&n.a.createElement(n.a.Fragment,null," \xb7 ",a(_)))),n.a.createElement("div",{className:"avatar margin-vert--md"},O&&n.a.createElement(m.a,{className:"avatar__photo-link avatar__photo",href:L},n.a.createElement("img",{src:O,alt:f})),n.a.createElement("div",{className:"avatar__intro"},f&&n.a.createElement(n.a.Fragment,null,n.a.createElement("h4",{className:"avatar__name"},n.a.createElement(m.a,{href:L},f)),n.a.createElement("small",{className:"avatar__subtitle"},M)))))})(),n.a.createElement("div",{className:"markdown"},n.a.createElement(i.a,{components:c.a},t)),(N.length>0||p)&&n.a.createElement("footer",{className:"row margin-vert--lg"},N.length>0&&n.a.createElement("div",{className:"col"},n.a.createElement("strong",null,n.a.createElement(s.a,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),N.map((({label:e,permalink:a})=>n.a.createElement(m.a,{key:a,className:"margin-horiz--sm",to:a},e)))),p&&n.a.createElement("div",{className:"col text--right"},n.a.createElement(m.a,{to:d.permalink,"aria-label":`Read more about ${k}`},n.a.createElement("strong",null,n.a.createElement(s.a,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}}}]);