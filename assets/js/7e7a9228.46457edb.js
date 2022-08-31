"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[279],{2868:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>f,contentTitle:()=>w,default:()=>T,frontMatter:()=>h,metadata:()=>y,toc:()=>b});var n=a(3117),o=a(7294),l=a(3905),r=a(4334),i=a(5730),s=a(636),p=a(6602),u=a(3735);const d="tabList__CuJ",m="tabItem_LNqP";function c(e){var t,a;const{lazy:l,block:i,defaultValue:c,values:k,groupId:g,className:h}=e,w=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=k?k:w.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),f=(0,s.l)(y,((e,t)=>e.value===t.value));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const b=null===c?c:null!=(t=null!=c?c:null==(a=w.find((e=>e.props.default)))?void 0:a.props.value)?t:w[0].props.value;if(null!==b&&!y.some((e=>e.value===b)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+y.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:N,setTabGroupChoices:v}=(0,p.U)(),[M,T]=(0,o.useState)(b),P=[],{blockElementScrollPositionUntilNextRender:C}=(0,u.o5)();if(null!=g){const e=N[g];null!=e&&e!==M&&y.some((t=>t.value===e))&&T(e)}const x=e=>{const t=e.currentTarget,a=P.indexOf(t),n=y[a].value;n!==M&&(C(t),T(n),null!=g&&v(g,String(n)))},O=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var n;const t=P.indexOf(e.currentTarget)+1;a=null!=(n=P[t])?n:P[0];break}case"ArrowLeft":{var o;const t=P.indexOf(e.currentTarget)-1;a=null!=(o=P[t])?o:P[P.length-1];break}}null==(t=a)||t.focus()};return o.createElement("div",{className:(0,r.Z)("tabs-container",d)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":i},h)},y.map((e=>{let{value:t,label:a,attributes:l}=e;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:M===t?0:-1,"aria-selected":M===t,key:t,ref:e=>P.push(e),onKeyDown:O,onFocus:x,onClick:x},l,{className:(0,r.Z)("tabs__item",m,null==l?void 0:l.className,{"tabs__item--active":M===t})}),null!=a?a:t)}))),l?(0,o.cloneElement)(w.filter((e=>e.props.value===M))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},w.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==M})))))}function k(e){const t=(0,i.Z)();return o.createElement(c,(0,n.Z)({key:String(t)},e))}var g=a(1402);const h={id:"suggested-wallets",title:"Suggested Wallets",sidebar_label:"Suggested Wallets",slug:"/suggested-wallet"},w=void 0,y={unversionedId:"project/suggested-wallets",id:"project/suggested-wallets",title:"Suggested Wallets",description:"While we are on the testnet, we suggest you use a MetaMask wallet with WeatherXM. By following our guide, it's",source:"@site/docs/project/suggested-wallets.mdx",sourceDirName:"project",slug:"/suggested-wallet",permalink:"/suggested-wallet",draft:!1,editUrl:"https://github.com/WeatherXM/docs/blob/main/docs/project/suggested-wallets.mdx",tags:[],version:"current",frontMatter:{id:"suggested-wallets",title:"Suggested Wallets",sidebar_label:"Suggested Wallets",slug:"/suggested-wallet"},sidebar:"docs",previous:{title:"Reward Algorithm",permalink:"/reward-algorithm"},next:{title:"Introduction",permalink:"/wxm-devices"}},f={},b=[{value:"MetaMask",id:"metamask",level:2},{value:"Installing and setting up MetaMask",id:"installing-and-setting-up-metamask",level:3},{value:"Add Polygon Network",id:"add-polygon-network",level:2},{value:"Using Polygonscan",id:"using-polygonscan",level:3},{value:"Add the Polygon network manually",id:"add-the-polygon-network-manually",level:3},{value:"Add WXM in MetaMask",id:"add-wxm-in-metamask",level:2}],N=(v="TabItem",function(e){return console.warn("Component "+v+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)});var v;const M={toc:b};function T(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},M,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"While we are on the testnet, we suggest you use a ",(0,l.kt)("strong",{parentName:"p"},"MetaMask")," wallet with WeatherXM. By following our guide, it's\nfairly simple to set up a MetaMask wallet and add a custom token (in our case, the WXM token) on Polygon Testnet."),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"The following guide has been written with the ",(0,l.kt)("strong",{parentName:"p"},"MetaMask browser extention")," in mind.\nThe steps may vary on other platforms.")),(0,l.kt)("h2",{id:"metamask"},"MetaMask"),(0,l.kt)("p",null,"MetaMask is a crypto wallet app and browser extension."),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"Only install this wallet from the ",(0,l.kt)("a",{parentName:"p",href:"https://metamask.io/download/"},"official MetaMask website"),"!")),(0,l.kt)("h3",{id:"installing-and-setting-up-metamask"},"Installing and setting up MetaMask"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"MetaMask is available to download and install on Chrome, iOS, and Android through the ",(0,l.kt)("a",{parentName:"li",href:"https://metamask.io/download/"},"MetaMask website"),".\nAlways check if you are using the official website to make sure you\u2019re installing the real MetaMask extension."),(0,l.kt)("li",{parentName:"ol"},"After installing the extension, you\u2019ll be greeted with the MetaMask welcome page. Click ","[Get Started]"," to begin."),(0,l.kt)("li",{parentName:"ol"},"If you\u2019re creating a new wallet, click the ","[Create a Wallet]"," button. You can also import an existing wallet using its seed phrase with the ","[Import wallet]"," option."),(0,l.kt)("li",{parentName:"ol"},"MetaMask will ask you if you\u2019d like to share anonymous usage data with them to help improve the extension. Accepting or refusing this will not affect your MetaMask usage."),(0,l.kt)("li",{parentName:"ol"},"Choose a secure password to log in to your wallet from your browser. Note that this is not your seed phrase. The password is a security measure to prevent anyone using your device from accessing your wallet.\nIf you forget your password, you can always access your crypto with your seed phrase."),(0,l.kt)("li",{parentName:"ol"},"After choosing your password, MetaMask will present you with information regarding your wallet\u2019s seed phrase. Make sure to read through it if you aren\u2019t familiar with how a crypto wallet works."),(0,l.kt)("li",{parentName:"ol"},"You\u2019ll now be presented with your seed phrase. Click the lock to view the words and take note of them in the correct order. Keep the phrase in a secure place (preferably offline) and never share it with anyone.\nThis string of words is the final backup of your wallet and its contents. Click ","[Next]"," to continue."),(0,l.kt)("li",{parentName:"ol"},"You\u2019ll now have to repeat your seed phrase by selecting the words at the bottom of the screen in the right order. Click ","[Confirm]"," once this is complete."),(0,l.kt)("li",{parentName:"ol"},"Your MetaMask wallet will now be set up and ready to use. Click ","[All Done]"," to view your wallet.")),(0,l.kt)("h2",{id:"add-polygon-network"},"Add Polygon Network"),(0,l.kt)("p",null,"Adding Polygon Network support to MetaMask is a mandatory step in order to add the WXM token, view activity, and make transactions.\nMake sure you follow our step-by-step guide below for adding the Polygon Network to MetaMask."),(0,l.kt)("p",null,"We will provide guidance for both Polygon Mainnet and Testnet (also called Mumbai Testnet) but\nas we are currently in testnet, ",(0,l.kt)("strong",{parentName:"p"},"you need to add the Testnet network.")),(0,l.kt)("p",null,"There are two ways to do it:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"/suggested-wallet#using-polygonscan"},"Using Polygonscan")," ",(0,l.kt)("strong",{parentName:"li"},"(Only for Desktop with MetaMask browser extension already installed)")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"/suggested-wallet#add-the-polygon-network-manually"},"Add the Polygon network manually"))),(0,l.kt)("h3",{id:"using-polygonscan"},"Using Polygonscan"),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"Please make sure you have already installed ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"https://metamask.io/"},"MetaMask")),"!"),(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("strong",{parentName:"p"},"This solution works only on desktop with the MetaMask browser extension already installed."))),(0,l.kt)(k,{defaultValue:"mumbai",values:[{label:"Polygon Mainnet",value:"mainnet"},{label:"Polygon Testnet (Mumbai)",value:"mumbai"}],mdxType:"Tabs"},(0,l.kt)(N,{value:"mainnet",mdxType:"TabItem"},(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"This is just for informational purposes. At this stage we are currently in testnet so ",(0,l.kt)("strong",{parentName:"p"},"you will need to add the Testnet network."))),(0,l.kt)("p",null,"Please follow the steps to add Polygon\u2019s Mainnet:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Navigate to ",(0,l.kt)("a",{parentName:"li",href:"https://polygonscan.com/"},"polygonscan.com")),(0,l.kt)("li",{parentName:"ul"},"Scroll down to the bottom of the page and click on the button ",(0,l.kt)("inlineCode",{parentName:"li"},"Add Polygon Network"))),(0,l.kt)("img",{class:"marginTopBottomNormal",src:(0,g.Z)("img/project/suggested-wallets/polygonscan-mainnet.png")}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Once you click the button you will see a MetaMask notification, now click on ",(0,l.kt)("strong",{parentName:"li"},"Approve"),".\nYou will be directed to Polygon\u2019s Mainnet in the network dropdown list. You can now close the dialog.")),(0,l.kt)("img",{class:"marginTopBottomNormal",src:(0,g.Z)("img/project/suggested-wallets/mainnet-addnetwork.png")})),(0,l.kt)(N,{value:"mumbai",mdxType:"TabItem"},(0,l.kt)("p",null,"Please follow the steps to add Polygon Testnet (also known as Mumbai Testnet):"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Navigate to ",(0,l.kt)("a",{parentName:"li",href:"https://mumbai.polygonscan.com/"},"mumbai.polygonscan.com")),(0,l.kt)("li",{parentName:"ul"},"Scroll down to the bottom of the page and click on the button ",(0,l.kt)("inlineCode",{parentName:"li"},"Add Mumbai Network"))),(0,l.kt)("img",{class:"marginTopBottomNormal",src:(0,g.Z)("img/project/suggested-wallets/polygonscan-mumbai.png")}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Once you click the button you will see a MetaMask notification, now click on ",(0,l.kt)("strong",{parentName:"li"},"Approve"),".\nNext, click ",(0,l.kt)("strong",{parentName:"li"},"Switch Network"),".\nYou will be switched to Polygon Testnet in the network dropdown list. You can now close the dialog.")),(0,l.kt)("img",{class:"marginTopBottomNormal",src:(0,g.Z)("img/project/suggested-wallets/mumbai-addnetwork.png")}))),(0,l.kt)("p",null,"If you face any issues, ",(0,l.kt)("strong",{parentName:"p"},"Add the Network Manually (steps given below)")),(0,l.kt)("h3",{id:"add-the-polygon-network-manually"},"Add the Polygon network manually"),(0,l.kt)(k,{defaultValue:"mumbai",values:[{label:"Polygon Mainnet",value:"mainnet"},{label:"Polygon Testnet (Mumbai)",value:"mumbai"}],mdxType:"Tabs"},(0,l.kt)(N,{value:"mainnet",mdxType:"TabItem"},(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"This is just for informational purposes. At this stage we are currently in testnet so ",(0,l.kt)("strong",{parentName:"p"},"you need to add the Polygon Testnet network."))),(0,l.kt)("p",null,"To add Polygon\u2019s Mainnet, click on the Network selection dropdown and then click on Add Network."),(0,l.kt)("img",{class:"marginTopBottomNormal",src:(0,g.Z)("img/project/suggested-wallets/select-network.png")}),(0,l.kt)("p",null,"It will open up a new Settings page which contains a form. You can add ",(0,l.kt)("inlineCode",{parentName:"p"},"Polygon Mainnet")," in the ",(0,l.kt)("strong",{parentName:"p"},"Network Name")," field, ",(0,l.kt)("inlineCode",{parentName:"p"},"https://polygon-rpc.com/")," in the ",(0,l.kt)("strong",{parentName:"p"},"New RPC URL")," field, ",(0,l.kt)("inlineCode",{parentName:"p"},"137")," in the ",(0,l.kt)("strong",{parentName:"p"},"Chain ID")," field, ",(0,l.kt)("inlineCode",{parentName:"p"},"MATIC")," in the ",(0,l.kt)("strong",{parentName:"p"},"Currency Symbol")," field and ",(0,l.kt)("inlineCode",{parentName:"p"},"https://polygonscan.com/")," in the ",(0,l.kt)("strong",{parentName:"p"},"Block Explorer URL")," field."),(0,l.kt)("img",{class:"marginTopBottomNormal",src:(0,g.Z)("img/project/suggested-wallets/metamask-settings-mainnet.png")}),(0,l.kt)("p",null,"Once you\u2019ve added the information, click on Save. You will be directly switched to Polygon Mainnet now in the network dropdown list. You can now close the dialog.")),(0,l.kt)(N,{value:"mumbai",mdxType:"TabItem"},(0,l.kt)("p",null,"To add Polygon Testnet (Mumbai), click on the Network selection dropdown and then click on Add Network."),(0,l.kt)("img",{class:"marginTopBottomNormal",src:(0,g.Z)("img/project/suggested-wallets/select-network.png")}),(0,l.kt)("p",null,"It will open up a new Settings page which contains a form. You can add ",(0,l.kt)("inlineCode",{parentName:"p"},"Polygon Testnet")," in the ",(0,l.kt)("strong",{parentName:"p"},"Network Name")," field, ",(0,l.kt)("inlineCode",{parentName:"p"},"https://matic-mumbai.chainstacklabs.com/")," in the ",(0,l.kt)("strong",{parentName:"p"},"New RPC URL")," field, ",(0,l.kt)("inlineCode",{parentName:"p"},"80001")," in the ",(0,l.kt)("strong",{parentName:"p"},"Chain ID")," field, ",(0,l.kt)("inlineCode",{parentName:"p"},"MATIC")," in the ",(0,l.kt)("strong",{parentName:"p"},"Currency Symbol")," field and ",(0,l.kt)("inlineCode",{parentName:"p"},"https://mumbai.polygonscan.com/")," in the ",(0,l.kt)("strong",{parentName:"p"},"Block Explorer URL")," field."),(0,l.kt)("img",{class:"marginTopBottomNormal",src:(0,g.Z)("img/project/suggested-wallets/metamask-settings-mumbai.png")}),(0,l.kt)("p",null,"Once you\u2019ve added the URL in the New Network field, click on Save. You will be directly switched to Polygon Testnet now in the network dropdown list. You can now close the dialog."))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"You have successfully added the Polygon Network to your MetaMask!")),(0,l.kt)("h2",{id:"add-wxm-in-metamask"},"Add WXM in MetaMask"),(0,l.kt)("p",null,"For the WXM token to appear in the wallet UI, you will need to add it manually.\nNote that your wallet can still receive tokens that haven\u2019t been imported."),(0,l.kt)("admonition",{title:"IMPORTANT NOTE",type:"note"},(0,l.kt)("p",{parentName:"admonition"},"Please make sure you have already added the ",(0,l.kt)("strong",{parentName:"p"},"Mumbai-Testnet")," and have connected to it by following the guide above!")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"First, you will need the following details of the WXM token in order to add it:",(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Token Contract Address:")," ",(0,l.kt)("inlineCode",{parentName:"li"},"0xeCbbbF304fdf91cdDDA6C6643ED1300A552b691A")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Token Symbol:")," ",(0,l.kt)("inlineCode",{parentName:"li"},"WXM")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Token Decimal:")," ",(0,l.kt)("inlineCode",{parentName:"li"},"18"))))),(0,l.kt)("p",null,"You can verify those details on ",(0,l.kt)("a",{parentName:"p",href:"https://mumbai.polygonscan.com/token/0xecbbbf304fdf91cddda6c6643ed1300a552b691a"},"PolygonScan"),"."),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"On MetaMask and click ",(0,l.kt)("strong",{parentName:"li"},"[Import tokens]"),".")),(0,l.kt)("img",{src:(0,g.Z)("img/project/suggested-wallets/metamask-import-tokens.png")}),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Paste in the WXM\u2019s contract address and MetaMask should automatically fill in the rest of the details. If not, add them manually. To finish, click ",(0,l.kt)("strong",{parentName:"p"},"[Add Custom Token]"),".")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Click ",(0,l.kt)("strong",{parentName:"p"},"[Import Tokens]"),"."))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"You have now successfully added the WXM token to your MetaMask wallet!")))}T.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(a),c=o,k=m["".concat(s,".").concat(c)]||m[c]||d[c]||l;return a?n.createElement(k,r(r({ref:t},u),{},{components:a})):n.createElement(k,r({ref:t},u))}));function c(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=a.length,r=new Array(l);r[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var p=2;p<l;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);