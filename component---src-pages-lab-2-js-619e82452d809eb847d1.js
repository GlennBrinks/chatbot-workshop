(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{143:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(147),r=a(154),i=a(153),s=a(179),c=a.n(s);t.default=function(){return o.a.createElement(i.a,null,o.a.createElement("h2",null,"Lab 2: Working with Intents"),o.a.createElement("p",null,"Great job on completing the first lab. We're now ready to tackle the first and most important component of a chatbot, Intents."),o.a.createElement("h3",null,"What you will accomplish"),o.a.createElement("p",null,"In this lab you will:"),o.a.createElement("ol",null,o.a.createElement("li",null,"Create a workspace for your chatbot;"),o.a.createElement("li",null,"Create, modify, and delete intents;"),o.a.createElement("li",null,"Add intents from the"," ",o.a.createElement("span",{className:"instruction"},"Content Catalog"),";"),o.a.createElement("li",null,"Test intents in the ",o.a.createElement("span",{className:"instruction"},"Try it")," panel."),o.a.createElement("li",null,"Import and export intents via CSV files;")),o.a.createElement("h3",null,"Task 1: Create a workspace for your chatbot"),o.a.createElement("p",null,"This lab is all about intents, but in order to work with them, we'll need to create a workspace which will contain said intents (along with entities and the dialog)."),o.a.createElement("p",null,"Although it's possible to create elaborate chatbots that use multiple workspaces, it is common to have just one workspace per chatbot. In other words, for now you can simply"," ",o.a.createElement("strong",null,"think of your workspace as your chatbot"),"."),o.a.createElement("ol",null,o.a.createElement("li",null,"From the ",o.a.createElement("span",{className:"instruction"},"Workspaces")," page of your Watson Assistant instance [",o.a.createElement("span",{style:{color:"blue",fontWeight:"bold"},href:"#",id:"no-bookmark"},"Tip"),"]",o.a.createElement(r.c,{placement:"top",target:"no-bookmark"},"If you didn't bookmark your"," ",o.a.createElement("span",{className:"instruction"},"Workspaces")," page in the previous lab, you can find your way back by visiting your dashboard and clicking on the Watson Assistant service you created."),","," ",o.a.createElement("strong",null,"click on the ",o.a.createElement("span",{className:"instruction"},"Create")," button")," ","within the ",o.a.createElement("span",{className:"instruction"},"Create a new workspace")," ","tile. [",o.a.createElement("span",{style:{color:"blue",fontWeight:"bold"},href:"#",id:"ignore-customer-service"},"Note"),"]",o.a.createElement(r.c,{placement:"top",target:"ignore-customer-service"},"You'll also see a Customer Service sample that you can create by clicking ",o.a.createElement("span",{className:"instruction"},"Edit sample"),". Ignore it for now, as we'll take a look at it later in the labs.")),o.a.createElement("li",null,"You'll be offered to enter a ",o.a.createElement("span",{className:"instruction"},"Name")," ","and an optional ",o.a.createElement("span",{className:"instruction"},"Description"),". Enter"," ",o.a.createElement("code",null,"Flower Shop Chatbot")," or whatever you prefer for the name. For the description, feel free to add"," ",o.a.createElement("code",null,"A chatbot for a flower shop chain.")," or something similar."),o.a.createElement("li",null,"We'll create the chatbot in English, but"," ",o.a.createElement("strong",null,"which other languages are also supported?")," Find out from this window."),o.a.createElement("li",null,"Ensuring ",o.a.createElement("span",{className:"instruction"},"English (U.S.)")," is selected,"," ",o.a.createElement("strong",null,"click on the ",o.a.createElement("span",{className:"instruction"},"Create")," button")," ","to generate the empty workspace for your chatbot."),o.a.createElement("li",null,"Practice going back and forth between"," ",o.a.createElement("span",{className:"instruction"},"Workspaces")," and the workspace you just created (e.g., ",o.a.createElement("code",null,"Flower Shop Chatbot"),").")),o.a.createElement("h3",null,"Task 2: Create, train, and test intents"),o.a.createElement("p",null,"Upon creation of the workspace, you'll find yourself on the"," ",o.a.createElement("span",{className:"instruction"},"Intents")," section of your workspace. Here you can add intents in several ways. In this task, we'll focus on the most common way. That is, manually adding intents."),o.a.createElement("ol",null,o.a.createElement("li",null,o.a.createElement("strong",null,"Click on the ",o.a.createElement("span",{className:"instruction"},"Add intent")," button.")),o.a.createElement("li",null,"What happens if you try to call the intent ",o.a.createElement("code",null,"#greeting us")," ","with a space in the name?"),o.a.createElement("li",null,o.a.createElement("strong",null,"Define a ",o.a.createElement("code",null,"#greetings")," intent"),". Optionally add an appropriate description as well, and then"," ",o.a.createElement("strong",null,"click ",o.a.createElement("span",{className:"instruction"},"Create intent")),"."),o.a.createElement("li",null,"You'll be prompted to create some examples to train Watson on the concept of greetings. Try examples such as ",o.a.createElement("code",null,"hello"),",",o.a.createElement("code",null,"hi"),", ",o.a.createElement("code",null,"hey"),", ",o.a.createElement("code",null,"good morning"),",",o.a.createElement("code",null,"good afternoon"),", and so on. You don't need to go crazy, especially on such a simple intent, but you should always"," ",o.a.createElement("strong",null,"include at least 5 examples"),". Ideally, more. If you make a typo in one or two of your examples, don't worry. Keep the typos, as your users are likely to do the same mistakes, so this ends up training Watson on a more realistic input set. When you are done, you can click the back arrow icon at the top to go back to your list of intents."),o.a.createElement("li",null,"Repeat the process to"," ",o.a.createElement("strong",null,"add ",o.a.createElement("code",null,"#thank_you")," and ",o.a.createElement("code",null,"#goodbyes")," intents")," ","with at least 5 appropriate examples each.")),o.a.createElement("p",null,"At this point, you'll have the most basic chitchat intents a chatbot needs to have. The more the merrier, of course, but this will do for now."),o.a.createElement("p",null,"To test our intents, click on the Try it button in the top right. A chat panel will appear where you can try user input and see how Watson analyses to the input and responds. We haven't provided responses yet (we'll do so in the Dialog lab) but we can still use it to test our intents. If you see a Watson is training message, please wait for Watson to finish training on your intent examples."),o.a.createElement("p",null,"Go ahead and try some greetings, thank you, and goodbye messages. Feel free to try both examples you provided and phrases that you haven't provided in example."),o.a.createElement("p",null,"If Watson miscategorized one example, feel free to click on the arrow (V) next to the detected intent to assign a different intent. This will add the example automatically for you, further training Watson. You'll see a message indicating that the intent correction was submitted and that Watson will use it to further training its machine learning model, as shown in the figure below."),o.a.createElement("p",{style:{textAlign:"center"}},o.a.createElement("img",{src:c.a,alt:"Manually assigning an intent to a test input"})),o.a.createElement("p",null,"If you do end up correcting some intents, you can click on that intent name in the Intents section to verify that the example was indeed added automatically for you. If you test the same utterance again, Watson will correctly recognize the right intent this time."),o.a.createElement("p",null,"In the Try it panel, what happens if you try a nonsensical input? (Randomly smash on the keyboard if you have to. Personally, I produced the beautiful, cat-walking-on-the-keyboard string dljkasdlsa dasldj alskdkas ld.)"),o.a.createElement("p",null,"Watson will always try its hardest to match the input to an existing intent, but if its confidence level in the best matching intent is very low (below 20%), it will treat the input as Irrelevant to our set of intents. In the dialog lab we'll find out how to handle when the use enter a question that is irrelevant or outside the scope of our chatbot."),o.a.createElement("p",null,"To conclude this task, click on an existing intent of your choice in Intents, and add one more example to it. Then, select the checkmark next to it, and you'll be given the option to delete it or even move it to a different intent. In the future, for more complex intents, you'll be able to add more examples that originate from your real customers' conversations to better train Watson on your business domain intents."),o.a.createElement("h3",null,"Task 4: Add intents from the Content Catalog"),o.a.createElement("p",null,"IBM provides you with some ready-made intents that might be relevant to the scope of your Chatbot. To see what's available, click on Content Catalog within your workspace."),o.a.createElement("p",null,"Select one category of your choice (e.g., Banking) and then click the Add to workspace intent next to it. Switch back to the Intents section and you should see a series of new intents relevant to common queries customers may have for the category of your choice. This isn't quite a pre-made chatbot but it's a nice starting point, that you can edit and adapt as needed."),o.a.createElement("p",null,"We are not going to use them for our Flower Shop Chatbot so click the checkmarks next to them and press the Delete button to remove them. (Make sure you keep the chitchat intents we created.) You'll notice how you were also given the option to export them to a CSV file, which is quite useful when reusing intents across different chatbots."),o.a.createElement("p",null,"As you can see, it's very easy to create, modify, and delete intents, whether they were manually created or imported from the Content Catalog."),o.a.createElement("h3",null,"Task 5: Import intents from a CSV file"),o.a.createElement("p",null,"There is another way to import intents, and that is from comma separated files (i.e., CSV files). This format is particularly handy because it allows you to easily export intent examples you might have in a spreadsheet. Let's see how it works in practice."),o.a.createElement("ol",null,o.a.createElement("li",null,"Download"," ",o.a.createElement("a",{href:"../csv/hours-and-locations-info.csv"},"this CSV file")," I prepared which includes intents for #hours_info and #location_info."),o.a.createElement("li",null,"b"),o.a.createElement("li",null,"c"),o.a.createElement("li",null,"d"),o.a.createElement("li",null,"e"),o.a.createElement("li",null,"f")),o.a.createElement("blockquote",null,"Having completed this lab, you're well on your way to becoming a buddying chatbot builder. Intents really are the most fundamental part of a chatbot. If you add the right intents to your chatbot, everything else will just fall into place easily."),o.a.createElement("p",{style:{textAlign:"center",margin:"20px"}},o.a.createElement(l.Link,{className:"btn btn-secondary",to:"/lab-1"},"Back to Lab 1")," ",o.a.createElement(l.Link,{className:"btn btn-primary",to:"/lab-3"},"Proceed to Lab 3")))}},147:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return y}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return p});var n=a(0),o=a.n(n),l=a(4),r=a.n(l),i=a(146),s=a.n(i);a.d(t,"Link",function(){return s.a}),a.d(t,"withPrefix",function(){return i.withPrefix}),a.d(t,"navigate",function(){return i.navigate}),a.d(t,"push",function(){return i.push}),a.d(t,"replace",function(){return i.replace}),a.d(t,"navigateTo",function(){return i.navigateTo});var c=a(27);a.d(t,"waitForRouteChange",function(){return c.c});var u=a(148),m=a.n(u);a.d(t,"PageRenderer",function(){return m.a});var h=a(39);a.d(t,"parsePath",function(){return h.a});var d=o.a.createContext({}),p=function(e){return o.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};function y(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func}},148:function(e,t,a){var n;e.exports=(n=a(150))&&n.default||n},149:function(e){e.exports={data:{site:{siteMetadata:{title:"Chatbot Workshop Hands-On Labs"}}}}},150:function(e,t,a){"use strict";a.r(t);a(38);var n=a(0),o=a.n(n),l=a(4),r=a.n(l),i=a(52),s=a(1),c=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return o.a.createElement(i.a,Object.assign({key:t.pathname,location:t,pageResources:a},a.json))};c.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},t.default=c},151:function(e,t,a){},153:function(e,t,a){"use strict";var n=a(149),o=a(0),l=a.n(o),r=a(4),i=a.n(r),s=a(155),c=a.n(s),u=a(147),m=function(e){var t=e.siteTitle;return l.a.createElement("div",{style:{background:"rebeccapurple"}},l.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},l.a.createElement("h1",{style:{margin:0}},l.a.createElement(u.Link,{to:"/",style:{color:"white",textDecoration:"none"}},t))))},h=a(154);a(38),a(156);function d(e){var t=e.exact,a=e.className,n=e.activeClassName,o=e.children;return l.a.createElement(u.Link,Object.assign({},e,{getProps:function(e){var o=e.isCurrent,l=e.isPartiallyCurrent;return{className:["nav-link",a,t&&o?n:"",!t&&l?n:""].join(" ").trim()}}}),o)}d.propTypes={exact:i.a.bool,className:i.a.string,activeClassName:i.a.string,children:i.a.node.isRequired},d.defaultProps={exact:!1,activeClassName:"current",className:""};var p=function(){return l.a.createElement("div",{style:{background:"#E5CCFF",marginBottom:"1.45rem"}},l.a.createElement("div",{style:{margin:"0 auto",maxWidth:960}},l.a.createElement(h.a,{pills:!0},l.a.createElement(h.b,null,l.a.createElement(d,{to:"/",exact:!0},"Home")),l.a.createElement(h.b,null,l.a.createElement(d,{to:"/lab-1"},"Lab 1")),l.a.createElement(h.b,null,l.a.createElement(d,{to:"/lab-2"},"Lab 2")),l.a.createElement(h.b,null,l.a.createElement(d,{to:"/lab-3"},"Lab 3")))))},y=(a(151),a(157),function(e){var t=e.children;return l.a.createElement(u.StaticQuery,{query:"755544856",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(c.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"A collection of hands-on labs to build chatbots with IBM Watson Assistant."},{name:"keywords",content:"chatbot, chatbots, watson, watson assistant, ibm, workshop, chatbot workshop"}]},l.a.createElement("html",{lang:"en"})),l.a.createElement(m,{siteTitle:e.site.siteMetadata.title}),l.a.createElement(p,null),l.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t))},data:n})});y.propTypes={children:i.a.node.isRequired};t.a=y},179:function(e,t,a){e.exports=a.p+"static/try-it-out-panel-51b4736e01a040f7063c34e695af2626.png"}}]);
//# sourceMappingURL=component---src-pages-lab-2-js-619e82452d809eb847d1.js.map