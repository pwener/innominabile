(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{143:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return p});n(32);var a=n(7),r=n.n(a),i=n(0),A=n.n(i),o=n(148),c=n(155),s=n(152),l=n(153),u=n(149),d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t=this.props.data.site.siteMetadata.title,n=this.props.pageContext;n.previous,n.next;return A.a.createElement(s.a,{location:this.props.location,title:t},A.a.createElement(l.a,{title:e.frontmatter.title,description:e.excerpt}),A.a.createElement("h1",null,e.frontmatter.title),A.a.createElement("p",{style:Object.assign({},Object(u.b)(-.2),{display:"block",marginBottom:Object(u.a)(1),marginTop:Object(u.a)(-1)})},e.frontmatter.date),A.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}}),A.a.createElement("hr",{style:{marginBottom:Object(u.a)(1)}}),A.a.createElement(c.a,null),A.a.createElement(o.Link,{to:"/",rel:"prev"},"← Voltar"))},t}(A.a.Component);t.default=d;var p="2761936148"},148:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return m}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),i=n(4),A=n.n(i),o=n(147),c=n.n(o);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return o.withPrefix}),n.d(t,"navigate",function(){return o.navigate}),n.d(t,"push",function(){return o.push}),n.d(t,"replace",function(){return o.replace}),n.d(t,"navigateTo",function(){return o.navigateTo});var s=n(150),l=n.n(s);n.d(t,"PageRenderer",function(){return l.a});var u=n(33);n.d(t,"parsePath",function(){return u.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:A.a.object,query:A.a.string.isRequired,render:A.a.func,children:A.a.func}},149:function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"b",function(){return A});var a=n(157),r=new(n.n(a).a)({baseFontSize:"20px",baseLineHeight:2,headerFontFamily:["Bad Script","cursive"],bodyFontFamily:["Bad Script","cursive"],googleFonts:[{name:"Bad Script",styles:["300","400","500","600","700"]}]}),i=r.rhythm,A=r.scale},150:function(e,t,n){var a;e.exports=(a=n(151))&&a.default||a},151:function(e,t,n){"use strict";n.r(t);n(32);var a=n(0),r=n.n(a),i=n(4),A=n.n(i),o=n(52),c=n(2),s=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:A.a.shape({pathname:A.a.string.isRequired}).isRequired},t.default=s},152:function(e,t,n){"use strict";var a=n(7),r=n.n(a),i=n(51),A=n.n(i),o=n(0),c=n.n(o),s=n(148),l=n(149),u=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={frame:1,opacity:1,counter:0},n.changeBackground=n.changeBackground.bind(A()(A()(n))),n}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){this.timeEvt=setInterval(this.changeBackground,500)},n.componentWillUnmount=function(){clearInterval(this.timeEvt)},n.changeBackground=function(){this.setState(function(e){return{counter:e.counter+1,opacity:(Math.sin(e.counter)+3)/6,frame:e.opacity<=.35?(e.frame+1)%3:e.frame}})},n.render=function(){var e=this.props,t=e.location,n=e.title,a=e.children,r=this.state,i=r.frame,A=r.opacity;console.info(A);var o=c.a.createElement("h3",{style:{fontFamily:"Bad Script",marginTop:0}},c.a.createElement(s.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},n)),u=c.a.createElement("footer",null,"Porque algumas coisas não são nomeáveis... Se quer expressáveis, então desculpa.");return c.a.createElement("div",null,c.a.createElement("div",{style:{backgroundImage:"url(../static/images/quadro"+i+".png)",opacity:A,position:"fixed",height:"100vh",width:"100%",zIndex:-1}}),c.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(l.a)(24),padding:Object(l.a)(1.5)+" "+Object(l.a)(.75)}},"/innominabile/"!==t.pathname?o:null,a,"/innominabile/"===t.pathname?u:null))},t}(c.a.Component);t.a=u},153:function(e,t,n){"use strict";var a=n(154),r=n(0),i=n.n(r),A=n(4),o=n.n(A),c=n(158),s=n.n(c),l=n(148);function u(e){var t=e.description,n=e.lang,r=e.meta,A=e.keywords,o=e.title;return i.a.createElement(l.StaticQuery,{query:d,render:function(e){var a=t||e.site.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:n},title:o,titleTemplate:"%s",meta:[{name:"description",content:a},{property:"og:title",content:o},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:a}].concat(A.length>0?{name:"keywords",content:A.join(", ")}:[]).concat(r)})},data:a})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=u;var d="1025518380"},154:function(e){e.exports={data:{site:{siteMetadata:{title:"",description:"A starter blog demonstrating what Gatsby can do.",author:"Kyle Mathews"}}}}},155:function(e,t,n){"use strict";var a=n(156),r=n(0),i=n.n(r),A=n(148),o=(n(149),[i.a.createElement("p",null,"Escrito por ",i.a.createElement("strong",null,"alguém")," que não se leva a sério."),i.a.createElement("p",null,"Escrito por ",i.a.createElement("strong",null,"Mr. Nobody"),"."),i.a.createElement("p",null,"Escrito por... Ah ",i.a.createElement("strong",null,"tanto faz...")),i.a.createElement("p",null,"Escrito por um heterônimo sem nome..."),i.a.createElement("p",null,"Escrito por ",i.a.createElement("strong",null,"alguém")," que com certeza tem dificuldades em se definir.")]);var c="4007731267";t.a=function(){return i.a.createElement(A.StaticQuery,{query:c,render:function(e){return i.a.createElement("div",{style:{display:"flex"}},o[Date.now()%o.length])},data:a})}},156:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAQADAQAAAAAAAAAAAAAAAAUBAgME/8QAFwEBAAMAAAAAAAAAAAAAAAAAAgABA//aAAwDAQACEAMQAAABtTuWpVlGVPBk0HAFf//EABsQAAICAwEAAAAAAAAAAAAAAAECAxMAESMk/9oACAEBAAEFAnOlgZ7cvIZnEYuxj6ZjxjOh/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAEQEiH/2gAIAQMBAT8BwqOP/8QAGREAAQUAAAAAAAAAAAAAAAAAAAEQEiEx/9oACAECAQE/AbJCY3//xAAgEAABAgUFAAAAAAAAAAAAAAABABECAxASITFBYYGR/9oACAEBAAY/Ai2qYx3A0tPifYlsLBBT8qX3T//EABoQAQADAQEBAAAAAAAAAAAAAAEAESExQVH/2gAIAQEAAT8hRVcZF9KXnJkRaRWsbCd3oQNMD6x1eoRshVw76T//2gAMAwEAAgADAAAAENvoAP/EABkRAAIDAQAAAAAAAAAAAAAAAAABESExUf/aAAgBAwEBPxCEpsj00xYf/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAEQESExUf/aAAgBAgEBPxBNs0X5A9n/xAAeEAEBAQACAQUAAAAAAAAAAAABEQAhMUFRYXGBkf/aAAgBAQABPxClwdnV0whQo4lO/wAzyyrjkGw+cZbkILxecbfXBH7zSeBntAmta2n5uEBbXZ4N/9k=",width:50,height:50,src:"/innominabile/static/4f27694bd7811d13157e5e488ad64f43/d2d31/profile-pic.jpg",srcSet:"/innominabile/static/4f27694bd7811d13157e5e488ad64f43/d2d31/profile-pic.jpg 1x,\n/innominabile/static/4f27694bd7811d13157e5e488ad64f43/0b804/profile-pic.jpg 1.5x,\n/innominabile/static/4f27694bd7811d13157e5e488ad64f43/753c3/profile-pic.jpg 2x,\n/innominabile/static/4f27694bd7811d13157e5e488ad64f43/31ca8/profile-pic.jpg 3x"}}},site:{siteMetadata:{author:"Kyle Mathews",social:{twitter:"kylemathews"}}}}}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-80a494654da317d8aa67.js.map