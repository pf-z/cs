import{a as r}from"./crruqxqu.js";import{_ as x,J as k,f as _,o as A,K as $,P as z,t as c,v as u,x as s,y as h,L as a,M as g,N as T,B as Z}from"./CUjOUnHp.js";Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/});Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:Prism.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/});Prism.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}});Prism.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}});Prism.languages.markup&&(Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript"));Prism.languages.js=Prism.languages.javascript;Prism.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0},"string-interpolation":{pattern:/(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=\}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^[\t ]*)@\w+(?:\.\w+)*/m,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:False|None|True)\b/,number:/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,operator:/[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/};Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest=Prism.languages.python;Prism.languages.py=Prism.languages.python;(function(o){var d=/\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record(?!\s*[(){}[\]<>=%~.:,;?+\-*/&|^])|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/,n=/(?:[a-z]\w*\s*\.\s*)*(?:[A-Z]\w*\s*\.\s*)*/.source,i={pattern:RegExp(/(^|[^\w.])/.source+n+/[A-Z](?:[\d_A-Z]*[a-z]\w*)?\b/.source),lookbehind:!0,inside:{namespace:{pattern:/^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,inside:{punctuation:/\./}},punctuation:/\./}};o.languages.java=o.languages.extend("clike",{string:{pattern:/(^|[^\\])"(?:\\.|[^"\\\r\n])*"/,lookbehind:!0,greedy:!0},"class-name":[i,{pattern:RegExp(/(^|[^\w.])/.source+n+/[A-Z]\w*(?=\s+\w+\s*[;,=()]|\s*(?:\[[\s,]*\]\s*)?::\s*new\b)/.source),lookbehind:!0,inside:i.inside},{pattern:RegExp(/(\b(?:class|enum|extends|implements|instanceof|interface|new|record|throws)\s+)/.source+n+/[A-Z]\w*\b/.source),lookbehind:!0,inside:i.inside}],keyword:d,function:[o.languages.clike.function,{pattern:/(::\s*)[a-z_]\w*/,lookbehind:!0}],number:/\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,operator:{pattern:/(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,lookbehind:!0},constant:/\b[A-Z][A-Z_\d]+\b/}),o.languages.insertBefore("java","string",{"triple-quoted-string":{pattern:/"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,greedy:!0,alias:"string"},char:{pattern:/'(?:\\.|[^'\\\r\n]){1,6}'/,greedy:!0}}),o.languages.insertBefore("java","class-name",{annotation:{pattern:/(^|[^.])@\w+(?:\s*\.\s*\w+)*/,lookbehind:!0,alias:"punctuation"},generics:{pattern:/<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/,inside:{"class-name":i,keyword:d,punctuation:/[<>(),.:]/,operator:/[?&|]/}},import:[{pattern:RegExp(/(\bimport\s+)/.source+n+/(?:[A-Z]\w*|\*)(?=\s*;)/.source),lookbehind:!0,inside:{namespace:i.inside.namespace,punctuation:/\./,operator:/\*/,"class-name":/\w+/}},{pattern:RegExp(/(\bimport\s+static\s+)/.source+n+/(?:\w+|\*)(?=\s*;)/.source),lookbehind:!0,alias:"static",inside:{namespace:i.inside.namespace,static:/\b\w+$/,punctuation:/\./,operator:/\*/,"class-name":/\w+/}}],namespace:{pattern:RegExp(/(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)(?!<keyword>)[a-z]\w*(?:\.[a-z]\w*)*\.?/.source.replace(/<keyword>/g,function(){return d.source})),lookbehind:!0,inside:{punctuation:/\./}}})})(Prism);const S=[{title:"How to understand the geometric meaning of determinant",url:"/How-to-understand-the-geometric-meaning-of-determinant",date:"2020-08-21T04:42:05.000Z"},{title:"Dynamic programming algorithm",url:"/Dynamic-programming-algorithm",date:"2020-04-15T02:47:37.000Z"},{title:"Introduction to The Design and Analysis of Algorithms(2)",url:"/Introduction-to-The-Design-and-Analysis-of-Algorithms-(2)",date:"2020-04-09T13:22:21.000Z"},{title:"Introduction to The Design and Analysis of Algorithms(1)",url:"/Introduction-to-The-Design-and-Analysis-of-Algorithms-(1)",date:"2020-04-05T13:28:07.000Z"},{title:"The essence, structure and application of recursive algorithm",url:"/The-essence-structure-and-application-of-recursive-algorithm",date:"2020-02-04T02:28:14.000Z"},{title:"JVM method call",url:"/JVM-method-call",date:"2019-04-24T12:55:14.000Z"},{title:"Runtime stack frame structure",url:"/Runtime-stack-frame-structure",date:"2019-04-24T03:06:14.000Z"},{title:"JVM runtime data area",url:"/JVM-runtime-data-area",date:"2019-04-23T12:39:14.000Z"}],B={class:"container"},M={class:"header"},P={style:{"margin-left":"0.6rem","font-size":"2.15rem"}},j={class:"social-icons"},E=["href"],C=["href"],R=["href"],q=["href"],D=["href"],L={class:"pub-date"},N=["innerHTML"],V={__name:"[filename]",setup(o){const d=k(),{filename:n}=d.params,i=(l,t)=>{const p=l.find(m=>m.title===t);return p?p.date:null},f=n.replaceAll("-"," "),y=i(S,f),w=_("");A(async()=>{const l=await fetch(`/cs/articles/${n}.html`);w.value=await l.text(),await $(()=>{MathJax.typeset(),z.highlightAll(),document.querySelectorAll("mjx-math").forEach(e=>{e.style.fontSize="1.2rem"}),document.querySelectorAll("pre").forEach(e=>{e.style.borderRadius="0.25rem",e.style.fontSize="0.95rem"}),document.querySelectorAll("img").forEach(e=>{e.style.width="80%",e.style.display="block",e.style.margin="0 auto"}),document.querySelectorAll("code:not([class])").forEach(e=>{e.style.backgroundColor="#F5F5F6",e.style.color="#9654B5",e.style.fontWeight="bold",e.style.padding="1px 3px",e.style.margin="0 3px",e.style.fontSize="1rem",e.style.fontFamily="'Courier New', monospace",e.style.borderRadius="3px"}),document.querySelectorAll("ul").forEach(e=>{e.style.color="#565959",e.style.listStyle="square"}),document.querySelectorAll("blockquote").forEach(e=>{e.style.margin="1.25rem 0",e.style.padding="0.5rem 1rem",e.style.borderLeft="4px solid #ccc",e.style.color="#666",e.style.fontStyle="italic",e.style.backgroundColor="#f3f3f3"})})});function F(l){const t=new Date(l),p=t.getFullYear(),m=String(t.getMonth()+1).padStart(2,"0"),b=String(t.getDate()).padStart(2,"0");return`${p} 年 ${m} 月 ${b} 日`}function v(){window.open("https://pfzh.me/cs","_self")}return(l,t)=>(c(),u("div",B,[s("div",M,[s("div",{class:"header-left",onClick:v},[t[0]||(t[0]=s("svg",{class:"icon",viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg",width:"200",height:"200"},[s("path",{d:"M932.039565 483.875452 163.745365 483.875452l350.590843-311.627437c11.008728-9.784854 12.000312-26.6428 2.215458-37.651528-9.7869-11.005658-26.63973-11.999288-37.652552-2.214435L74.241888 492.064972c-5.693676 5.062296-8.950859 12.31549-8.950859 19.934005s3.257184 14.871709 8.950859 19.934005l404.65825 359.684966c5.080715 4.51585 11.405771 6.735401 17.708314 6.735401 7.352455 0 14.675234-3.022847 19.944238-8.950859 9.784854-11.008728 8.79327-27.865651-2.215458-37.652552L160.472831 537.214265l771.566734 0c14.729469 0 26.669406-11.94096 26.669406-26.669406C958.708971 495.815389 946.769035 483.875452 932.039565 483.875452z",fill:"#272636"})],-1)),s("h1",P,h(a(r).name),1)]),s("div",j,[a(r).social.orcid?(c(),u("a",{key:0,href:a(r).social.orcid.url,target:"_blank"},t[1]||(t[1]=[s("svg",{class:"icon",viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg",width:"200",height:"200"},[s("path",{d:"M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0zM314.4 186.784c22.4 0 40.416 18.4 40.416 40.416s-18.016 40.416-40.416 40.416a40.544 40.544 0 0 1-40.416-40.384c0-22.4 18.016-40.416 40.416-40.416z m-30.784 129.632h61.6v428.416H283.616z m151.968 0h166.4c158.368 0 228 113.184 228 214.4 0 109.984-86.016 214.4-227.2 214.4h-167.2z m61.6 55.584v317.6H595.2c139.616 0 171.616-105.984 171.616-158.816 0-86.016-54.784-158.816-174.816-158.816z",fill:"#A6CE39"})],-1)]),8,E)):g("",!0),a(r).social.wechat?(c(),u("a",{key:1,href:a(r).social.wechat.url,target:"_blank"},t[2]||(t[2]=[s("svg",{class:"icon",viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg",width:"200",height:"200"},[s("path",{d:"M118.438 395.821c2.369-6.149 33.678 183.946 178.428 278.972l-15.978 88.06c40.236 1.303 78.704-16.536 103.663-48.072l-0.086-0.086c84.842 23.606 196.817 17.2 343.246-47.298 0 0-43.24 143.184-125.283 194.781-152.07 95.37-391.61 50.738-483.258-107.495-26.056-44.976-68.305-170.702-0.732-358.862z m624.476-100.788c148.088 53.771 229.99 212.072 188.204 363.764-14.73 49.792-44.489 149.376-227.525 229.61-9.82 4.386 293.331-368.45-161.674-588.472a367.37 367.37 0 0 1 200.995-4.902z m49.484-62.69c6.89 8.34-416.676-105.991-518.918 322.485v-0.215l-0.1-0.113c-3.226-3.672-83.855-96.422-80.479-191.444C211.493 203.351 345.881 82.208 506.905 80c52.068 0 156.248 0 285.493 152.342z",fill:"#1FC372"})],-1)]),8,C)):g("",!0),a(r).social.github?(c(),u("a",{key:2,href:a(r).social.github.url,target:"_blank"},t[3]||(t[3]=[s("svg",{class:"icon",viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg",width:"200",height:"200"},[s("path",{d:"M682.215454 981.446137c-25.532318 0-42.553863-17.021545-42.553864-42.553864v-165.960067c4.255386-34.043091-8.510773-59.575409-29.787704-80.852341-12.766159-12.766159-17.021545-29.787704-8.510773-42.553864 4.255386-17.021545 21.276932-25.532318 34.043091-29.787704 123.406204-12.766159 238.301635-55.320023 238.301635-255.323181 0-46.80925-17.021545-93.6185-51.064636-131.916976-12.766159-12.766159-12.766159-29.787704-8.510772-42.553864 12.766159-34.043091 12.766159-68.086182 4.255386-102.129272-21.276932 4.255386-55.320023 17.021545-110.640045 55.320022-8.510773 8.510773-21.276932 8.510773-34.043091 4.255387-89.363113-25.532318-187.236999-25.532318-276.600112 0-12.766159 4.255386-25.532318 4.255386-38.298477-4.255387C307.741455 104.836549 269.442978 92.07039 248.166047 87.815004c-8.510773 34.043091-8.510773 68.086182 4.255386 102.129272 4.255386 17.021545 4.255386 34.043091-8.510773 42.553864-34.043091 38.298477-51.064636 85.107727-51.064636 131.916976 0 200.003158 114.895431 242.557022 238.301635 255.323181 17.021545 0 29.787704 12.766159 34.043091 29.787704 4.255386 17.021545 0 34.043091-8.510773 42.553864-21.276932 21.276932-29.787704 46.80925-29.787704 76.596954v165.960068c0 25.532318-17.021545 42.553863-42.553863 42.553863s-42.553863-17.021545-42.553864-42.553863v-72.341568c-127.66159 21.276932-182.981613-51.064636-221.28009-97.873886-17.021545-21.276932-29.787704-38.298477-46.80925-42.553864-21.276932-4.255386-38.298477-29.787704-29.787704-51.064636 4.255386-21.276932 29.787704-38.298477 51.064636-29.787704 42.553863 12.766159 68.086182 42.553863 93.6185 72.341568 34.043091 46.80925 63.830795 80.852341 153.193908 63.830795v-4.255386c0-25.532318 4.255386-55.320023 12.766159-76.596955-119.150818-25.532318-246.812408-102.129272-246.812408-327.664748 0-63.830795 21.276932-123.406204 59.575409-170.215454-17.021545-59.575409-12.766159-114.895431 12.766159-170.215454 4.255386-12.766159 12.766159-21.276932 25.532318-25.532318 17.021545-4.255386 72.341568-12.766159 187.236999 59.575409 93.6185-21.276932 191.492386-21.276932 280.855499 0 110.640045-72.341568 170.215454-63.830795 187.236999-59.575409 12.766159 4.255386 21.276932 12.766159 25.532319 25.532318 21.276932 55.320023 25.532318 110.640045 12.766159 165.960067 38.298477 46.80925 59.575409 106.384659 59.575408 170.215454 0 242.557022-144.683136 306.387817-246.812408 331.920135 8.510773 25.532318 12.766159 55.320023 12.766159 80.852341V938.892273c0 25.532318-17.021545 42.553863-42.553863 42.553864z",fill:"#2c2c2c"})],-1)]),8,R)):g("",!0),a(r).social.leetcode?(c(),u("a",{key:3,href:a(r).social.leetcode.url,target:"_blank"},t[4]||(t[4]=[T('<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="200" height="200" data-v-14a160a5><path d="M1023.522548 511.96634c0 163.697987 0 327.395973 0.477452 491.093959 0 17.051874-3.887827 20.939701-20.939701 20.871494q-491.09396-0.81849-982.187919 0c-17.051874 0-20.939701-3.81962-20.871493-20.871494q0.81849-491.09396 0-982.187919C-0.067321 3.820506 3.820506-0.067321 20.87238 0.000887q491.09396 0.81849 982.187919 0c17.051874 0 21.007908 3.81962 20.939701 20.871493-0.477452 163.697987-0.477452 327.395973-0.477452 491.09396z" fill="#FEFEFE" data-v-14a160a5></path><path d="M454.876667 321.735638c-61.386745 61.386745-124.819715 121.068303-184.774103 184.160235-44.403079 46.722134-40.924497 113.906516 5.593015 161.924591 55.179863 56.680428 111.996706 111.723876 168.063266 167.449399 21.212531 21.962813 20.939701 47.063171 5.388392 70.390134-14.391781 21.485361-35.058652 34.649407-63.091932 22.576681a132.663577 132.663577 0 0 1-35.67252-25.577811c-51.769488-52.315148-104.766711-103.470769-155.990539-156.399784-89.897478-92.8304-90.92059-232.451141-0.477453-324.667673C320.985355 291.72434 449.965727 163.903496 578.400439 35.536991c28.30611-28.30611 63.842215-30.147713 87.032763-6.002259s21.007908 55.657315-6.411504 84.509085q-43.175344 45.426191-86.691726 90.443138c-30.693372 47.608831-71.822492 84.645501-117.453305 117.248683z" fill="#070706" data-v-14a160a5></path><path d="M677.028476 641.014919H493.413901c-40.924497 0-70.185512-24.75932-69.503437-58.112785 0.613867-32.262145 27.965073-55.998353 68.207495-56.134768q187.02495-0.886697 374.049899 0c39.833177 0 62.34165 22.031021 62.682687 56.475805 0 35.740727-23.054133 57.294295-64.933534 57.70354-62.137027 0.54566-124.546885 0.068207-186.888535 0.068208z" fill="#B4B2B1" data-v-14a160a5></path><path d="M386.055305 928.100263c60.568255-7.366409 79.052486-37.241292 57.70354-92.966815 63.842215 33.48988 110.837178 26.055263 162.470252-25.57781 26.464508-26.464508 52.519771-53.338261 79.598146-79.188901s57.43071-26.464508 81.439748-2.7283 23.531586 54.565996-1.978017 81.439748c-34.103747 35.195067-67.457212 70.594757-103.470769 103.266147-76.938054 69.776267-199.916166 75.914941-275.7629 15.755931z" fill="#EAA240" data-v-14a160a5></path><path d="M454.876667 321.735638a1295.942393 1295.942393 0 0 1 117.453305-117.248683c89.692855 27.828658 142.349041 101.151714 202.371636 164.925721 19.575551 20.871493 11.663482 53.747506-10.776784 72.777397a53.338261 53.338261 0 0 1-73.868717-2.18264 821.627477 821.627477 0 0 1-74.414376-74.277961c-44.130249-52.315148-96.854642-66.502307-160.765064-43.993834z" fill="#EAA340" data-v-14a160a5></path></svg>',1)]),8,q)):g("",!0),a(r).social.twitter?(c(),u("a",{key:4,href:a(r).social.twitter.url,target:"_blank"},t[5]||(t[5]=[s("svg",{class:"icon",viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg",width:"200",height:"200"},[s("path",{d:"M918.784 901.568L609.536 450.752l0.512 0.384L888.96 128h-93.184L568.576 391.04 388.224 128H143.808l288.704 420.928L128 901.568h93.184l252.544-292.608 200.704 292.608h244.352zM351.36 198.4l433.92 632.96h-73.856L277.12 198.272h74.176z",fill:"#2c2c2c","fill-opacity":"1"})],-1)]),8,D)):g("",!0)])]),s("h1",null,[Z(h(a(f)),1),t[6]||(t[6]=s("span",{class:"origin"},"原创 / original",-1))]),s("p",L,"发表于 「"+h(F(a(y)))+"」",1),t[7]||(t[7]=s("div",{class:"dashed"},null,-1)),s("div",{innerHTML:a(w),class:"content"},null,8,N),t[8]||(t[8]=s("p",{style:{"text-align":"center",color:"#757575"}},"Copyright © 2024 pfzh. All Rights Reserved.",-1))]))}},K=x(V,[["__scopeId","data-v-14a160a5"]]);export{K as default};
