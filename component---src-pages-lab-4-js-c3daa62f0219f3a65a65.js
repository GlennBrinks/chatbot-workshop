(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{142:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(145),r=a(152),i=a(151),s=a(181),c=a.n(s),u=a(182),h=a.n(u),d=a(183),m=a.n(d),p=a(184),f=a.n(p);t.default=function(){return o.a.createElement(i.a,null,o.a.createElement("h2",null,"Lab 4: Dialog Flow"),o.a.createElement("p",null,"With intents and entities under our belts, we can finally look at the third component: the dialog."),o.a.createElement("p",null,"In fact, at this point, our chatbot can understand some intents and detect a few specific pieces of information thanks to entities. What we are missing is using this information to formulate appropriate responses to the user. Will do so in this lab to create a simple, but useful chatbot."),o.a.createElement("h3",null,"What you will accomplish"),o.a.createElement("p",null,"In this lab you will:"),o.a.createElement("ol",null,o.a.createElement("li",null,"Create a useful chatbot that leverages the intents and entities we created so far;"),o.a.createElement("li",null,"Better understand how the dialog flow and responses work."),o.a.createElement("li",null,"Test our chatbot in the ",o.a.createElement("span",{className:"instruction"},"Try it out")," ","panel."),o.a.createElement("li",null,"Take your third graded quiz.")),o.a.createElement("h3",null,"Task 1: Create a Dialog and improve the prompt"),o.a.createElement("p",null,"Let's kick things off by creating a dialog and a good prompt for our chatbot."),o.a.createElement("ol",null,o.a.createElement("li",null,o.a.createElement("strong",null,"Click on the ",o.a.createElement("span",{className:"instruction"},"Dialog")," section")," ","of your workspace."),o.a.createElement("li",null,"It's empty at the moment. Go ahead and"," ",o.a.createElement("strong",null,"click the ",o.a.createElement("span",{className:"instruction"},"Create")," button"),"."),o.a.createElement("li",null,"Take a moment to"," ",o.a.createElement("strong",null,"investigate the default ",o.a.createElement("span",{className:"instruction"},"Welcome")," ","and ",o.a.createElement("span",{className:"instruction"},"Anything else")," nodes")," ","that were generated."),o.a.createElement("li",null,o.a.createElement("strong",null,"Open the ",o.a.createElement("span",{className:"instruction"},"Try it out")," ")," ","panel and click on the ",o.a.createElement("span",{className:"instruction"},"Clear")," link at the top to start testing the chatbot from scratch. Notice anything different this time around?"),o.a.createElement("li",null,"Yes, we have a prompt! Unfortunately, the default phrasing is not very user friendly. Let's change it. Select the"," ",o.a.createElement("span",{className:"instruction"},"Welcome")," node and edit the response to say"," ",o.a.createElement("code",null,"Hello. My name is Florence and I'm a chatbot. How can I help you? You can ask me about our store hours and locations.")," ","Change the name from Florence, to whatever flower-inspired name you prefer, to make it yours."),o.a.createElement("li",null,o.a.createElement("p",null,"Click the ",o.a.createElement("span",{className:"instruction"},"Clear")," link in the"," ",o.a.createElement("span",{className:"instruction"},"Try it out")," panel once again to see the change take effect."),o.a.createElement("p",null,"Great. We added a bit of antropomorphization, set the expectations right by coming clean about our robot nature, and offered some guidance to the user, in terms of the scope offered by our chatbot.")),o.a.createElement("li",null,"Now try replying ",o.a.createElement("code",null,"hello")," in the"," ",o.a.createElement("span",{className:"instruction"},"Try it out")," panel. What happens? Watson recognized the right intent but doesn't have a node to handle greetings, so the fallback node"," ",o.a.createElement("span",{className:"instruction"},"Anything else")," was executed. We'll remedy to this in the next task.")),o.a.createElement("h3",null,"Task 2: Add nodes for chitchat"),o.a.createElement("p",null,"We have three chitchat intents, ",o.a.createElement("code",null,"#greetings"),","," ",o.a.createElement("code",null,"#thank_you"),", and ",o.a.createElement("code",null,"#goodbyes"),". We now need to have nodes that specify what reponse we want to give the user, when such intents are detected."),o.a.createElement("p",null,"We have a couple of strategies possible here. We could create three nodes, one for each of these intents. This is the most common and simple approach. The other option would be to create a single node for chitchat that uses multiple responses (essentially, conditional responses), attaching a condition to each response."),o.a.createElement("p",null,"I would recommend that you stick to the traditional way as it's more flexible. It allows us to add more chitchat nodes down the line, as well as making the chitchat logic more complex if needed."),o.a.createElement("p",null,"We want to keep things organized, separating small talk from domain-specific nodes. So we'll create a folder for chitchat, and we'll create three nodes in it for now. The picture below shows the end result."),o.a.createElement("p",{style:{textAlign:"center"}},o.a.createElement("img",{src:c.a,alt:"Our chitchat nodes",title:"Our chitchat nodes",width:"900"})),o.a.createElement("p",null,"Follow these steps to add it to your chatbot:"),o.a.createElement("ol",null,o.a.createElement("li",null,"Select the ",o.a.createElement("span",{className:"instruction"},"Welcome")," node and then"," ",o.a.createElement("strong",null,"click the ",o.a.createElement("span",{className:"instruction"},"Add folder")," button"),". This will create a folder underneat the selected node (i.e.,"," ",o.a.createElement("span",{className:"instruction"},"Welcome"),")."),o.a.createElement("li",null,o.a.createElement("strong",null,"Name the folder ",o.a.createElement("code",null,"Chitchat")),". You don't need to specify a condition for the folder, as the conditions of the children nodes will suffice."),o.a.createElement("li",null,"With the ",o.a.createElement("span",{className:"instruction"},"Chitchat")," folder selected,"," ",o.a.createElement("strong",null,"click the ",o.a.createElement("span",{className:"instruction"},"Add child node")," button"),". This will create an empty child node within the folder."),o.a.createElement("li",null,o.a.createElement("strong",null,"Name this node ",o.a.createElement("code",null,"Greetings")),". We want it to be executed when the ",o.a.createElement("code",null,"#greetings")," intent is detected, so under"," ",o.a.createElement("span",{className:"instruction"},"If bot recognizes:")," ",o.a.createElement("strong",null,"enter the",o.a.createElement("code",null,"#greetings")," intent"),". Autocomplete will help you find the intent (not that useful here, but quite handy in complex chatbots with many intents.)"),o.a.createElement("li",null,o.a.createElement("p",null,o.a.createElement("strong",null,"Enter a few appropriate responses"),". The scenario we are handling here is one in which we already greeted the user with our prompt, and they replied with a greeting. So we should greet them back without repeating the prompt verbatim."),o.a.createElement("p",null,o.a.createElement("strong",null,"Enter a few responses to offer some variation")," if we get a greeting-happy user. Examples, could be"," ",o.a.createElement("code",null,"Hi there. How can I help you?"),","," ",o.a.createElement("code",null,"Hello. How may I assist you today?"),","," ",o.a.createElement("code",null,"Hi. What can I help you with?"),"."),o.a.createElement("p",null,"Normally, I would advise against open-ended questions such as how can I help you, but since we already qualified the scope of the chatbot in our prompt, we can get away with it here.")),o.a.createElement("li",null,"You can leave the response variations set to"," ",o.a.createElement("span",{className:"instruction"},"sequential")," or set them to"," ",o.a.createElement("span",{className:"instruction"},"random")," if you prefer. The third option, ",o.a.createElement("span",{className:"instruction"},"multiline")," is not applicable here, as it would provide a response over multiple lines using each response you wrote as its own line, de facto asking the user what is essentially, the same question three times at once. 😄"),o.a.createElement("li",null,"After this reponse to the user, we expect them to enter some more questions, so you can also"," ",o.a.createElement("strong",null,"leave ",o.a.createElement("span",{className:"instruction"},"Wait for user input"))," ","as the final action when executing this node, in the"," ",o.a.createElement("span",{className:"instruction"},"And finally")," section at the bottom of the node."),o.a.createElement("li",null,"Open the ",o.a.createElement("span",{className:"instruction"},"Try it out")," panel (if you closed it) and click the ",o.a.createElement("span",{className:"instruction"},"Clear")," link to start a new conversation."," ",o.a.createElement("strong",null,"Try to reply ",o.a.createElement("code",null,"hi")," to the chatbot prompt"),". Congratulations, you just had your first conversation with our chatbot. It's not a complex interaction, but it's a start."),o.a.createElement("li",null,"You can close the panel as well as the"," ",o.a.createElement("span",{className:"instruction"},"Greetings")," node (by pressing on the big X next to ",o.a.createElement("span",{className:"instruction"},"Customize")," link within the node)."),o.a.createElement("li",null,o.a.createElement("p",null,"With the ",o.a.createElement("span",{className:"instruction"},"Greetings")," node selected,"," ",o.a.createElement("strong",null,"click on the ",o.a.createElement("span",{className:"instruction"},"Add node")," button"),". This will create an empty peer node below"," ",o.a.createElement("span",{className:"instruction"},"Greetings"),"."),o.a.createElement("p",null,"The order of these chitchat nodes is not that important because they are all simple nodes with independent intents. However, order can matter in more complex scenarios (as we'll see in a moment) and it makes sense to place them in a logical manner that is roughly equivalent to how a conversation would go. Greetings first, thank yous in the middle, and goodbyes at the end."),o.a.createElement("p",null,"Go ahead and make this node"," ",o.a.createElement("strong",null,"handle the ",o.a.createElement("code",null,"#thank_you")," intent"),". For the responses, you'll likely want something like"," ",o.a.createElement("code",null,"You're welcome. Please let me know if you need anything else."),", ",o.a.createElement("code",null,"My pleasure."),","," ",o.a.createElement("code",null,"No problem. Let me know if there is anything else I can help with.")," ","You could get chicky, and say, ",o.a.createElement("code",null,"I aim to please. 😊")," ","depending on how much personality you'd like to inject in your chatbot. BTW, yes, emojis are supported.")),o.a.createElement("li",null,o.a.createElement("strong",null,"Repeat the process for the ",o.a.createElement("code",null,"Goodbyes")," node")," ","which will handle the ",o.a.createElement("code",null,"#goodbyes")," intent. You can use standard polite goodbye responses (like"," ",o.a.createElement("code",null,"Nice talking to you today."),",",o.a.createElement("code",null,"Have a nice day."),","," ",o.a.createElement("code",null,"Goodbye."),"etc.)"),o.a.createElement("li",null,"Start a new conversation in the"," ",o.a.createElement("span",{className:"instruction"},"Try it out")," panel and"," ",o.a.createElement("strong",null,"test all three intents")," to ensure you get an appropriate response in each case.")),o.a.createElement("h3",null,"Task 3: Respond to hours of operation"),o.a.createElement("p",null,"Chitchat interactions are necessary to make our chatbot more pleasant and human-like. However, what makes the chatbot actually useful is its ability to answer domain specific questions. That is, business related questions."),o.a.createElement("p",null,"We defined intents for people enquiring about hours of operation and addresses of our fictional florist chain, and even created an entity to be able to provide location-specific answers. However, much like the chitchat intents, intents alone don't offer responses to customers. We'll need to create nodes to handle these two business specific intents."),o.a.createElement("h4",null,"Create the parent node"),o.a.createElement("p",null,"We'll start by creating a node for hours of operation. Follow these steps:"),o.a.createElement("ol",null,o.a.createElement("li",null,o.a.createElement("strong",null,"Select the ",o.a.createElement("span",{className:"instruction"},"Welcome")," node")," ","and"," ",o.a.createElement("strong",null,"click on ",o.a.createElement("span",{className:"instruction"},"Add node")),". This will create an empty node just below the first node."),o.a.createElement("li",null,"Set the node name to ",o.a.createElement("code",null,"Hours of Operation")," and use"," ",o.a.createElement("code",null,"#hours_info")," for the condition of the node. This will ensure that the node will be executed when the user is enquiring about shop hours."),o.a.createElement("li",null,o.a.createElement("p",null,"In the response, enter"," ",o.a.createElement("code",null,'Our hours of operations are listed on <a href="https://example.org/hours/">this page</a>.'),"Next, head over to the ",o.a.createElement("span",{className:"instruction"},"Try it out")," ","panel and test that it works by asking"," ",o.a.createElement("code",null,"when is your Auckland store open?")," as shown in the picture below."),o.a.createElement("p",{style:{textAlign:"center"}},o.a.createElement("img",{src:h.a,alt:"Testing our Hours of Operation node",title:"Testing our Hours of Operation node",width:"900"})))),o.a.createElement("p",null,"This works and it provides a somewhat useful answer to the user (assuming we are pointing them to a page with the right information listed). However, it feels... not very smart."),o.a.createElement("p",null,"After all, the user asked us about a specific location. We even detected it with the ",o.a.createElement("code",null,"@location")," entity. And then proceeded to ignore it, opting instead for a generic answer. We can do better than that. Close the ",o.a.createElement("span",{className:"instruction"},"Try it out")," panel to gain some breathing room as we work on the dialog."),o.a.createElement("p",null,"In order to handle this case properly, we'll have to consider two possible scenarios. One in which a location is specified and one in which the user just asks about hours of operation in general without indicating a city (or at least a city in which we operate)."),o.a.createElement("p",null,"This is a classic use case for children nodes. We'll use our current node to capture the hours of operation request, and then jump to the children nodes to decide how to handle the request."),o.a.createElement("h4",null,"Create the Location Provided child node"),o.a.createElement("ol",null,o.a.createElement("li",null,"Delete the response from our"," ",o.a.createElement("span",{className:"instruction"},"Hours of Operation")," node by clicking on the bin icon in the response section in the"," ",o.a.createElement("span",{className:"instruction"},"Then respond with:")," section. We do that because we don't want this parent node to provide the answer. We'll let the children node decide what's the right response."),o.a.createElement("li",null,"With the ",o.a.createElement("span",{className:"instruction"},"Hours of Operation")," node selected, click on ",o.a.createElement("span",{className:"instruction"},"Add child node"),". This creates the first child node. We'll use it for the case of the user providing us a specific location. So go ahead and name it"," ",o.a.createElement("code",null,"Location Provided"),"."),o.a.createElement("li",null,"Set the condition to ",o.a.createElement("code",null,"@location"),", as we want to execute this node only if the user is enquiring about hours of operation and a specific location was given."),o.a.createElement("li",null,"We need a way to offer a different response for each city, so we need to enable ",o.a.createElement("span",{className:"instruction"},"Multiple responses"),". To do so, click on the ",o.a.createElement("span",{className:"instruction"},"Customize")," link within our child node. Switch on"," ",o.a.createElement("span",{className:"instruction"},"Multiple responses")," and click"," ",o.a.createElement("span",{className:"instruction"},"Apply"),". You'll notice that now we have the ability to set a condition before a response is issued."),o.a.createElement("li",null,o.a.createElement("p",null,"Go ahead and create a series of responses for each different city. In the ",o.a.createElement("span",{className:"instruction"},"If bot recognizes")," column you'll want to enter the specific city (e.g.,"," ",o.a.createElement("code",null,"@location:Auckland"),") and in the response the hours of our fictional flower shop location. (e.g.,"," ",o.a.createElement("code",null,"Our Auckland store is open Monday to Saturday from 9 am until 6 pm, except statutory holidays."),") Do the same for every other location we have (come up with fictional hours of operation, it is after all a fictional chain of shops). The end result is shown in the image below."),o.a.createElement("p",{style:{textAlign:"center"}},o.a.createElement("img",{src:m.a,alt:"Our child node to handle hours of operations specific to a location",title:"Our child node to handle hours of operations specific to a location",width:"900"})))),o.a.createElement("p",null,"It's worth noting that if the hours of operations where the same for all locations, we could have saved the trouble of switching to multiple responses and simply included ",o.a.createElement("code",null,"@location")," in our response. (e.g.,"," ",o.a.createElement("code",null,"Our @location store is open Monday to Saturday from 9 am until 6 pm, except statutory holidays."),") This would automatically output the detected entity value back to the user in the response. So when enquiring about Sydney, the user would receive the response"," ",o.a.createElement("code",null,"Our Sydney store is open Monday to Saturday from 9 am until 6 pm, except statutory holidays.")," ","Of course, if stores have different hours of operation, we have no choice but opt for the mulitple response approach like we did here."),o.a.createElement("h4",null,"Create the No Location child node"),o.a.createElement("p",null,"We now have have a child node to handle users asking about hours of operation for a specific location. However, we also need a child node to handle the case in which the user didn't specify a location."),o.a.createElement("ol",null,o.a.createElement("li",null,"With the ",o.a.createElement("span",{className:"instruction"},"Location Provided")," node selected, click the ",o.a.createElement("span",{className:"instruction"},"Add node")," button to add a sibiling node below it."),o.a.createElement("li",null,o.a.createElement("p",null,"Call this node ",o.a.createElement("code",null,"No Location"),". Set the condition to"," ",o.a.createElement("code",null,"true"),". Here is why. When the user asks"," ",o.a.createElement("em",null,"What are your hours of operation?")," the"," ",o.a.createElement("code",null,"#hours_info")," intent is detected, so we enter the parent node ",o.a.createElement("span",{className:"instruction"},"Hours of Operation"),". The"," ",o.a.createElement("span",{className:"instruction"},"Location Provided")," child node is then first evaluated. We fail its ",o.a.createElement("code",null,"@location")," condition, because the user didn't specify any location, so the next child node is considered for execution. Since the condition is set to"," ",o.a.createElement("code",null,"true")," it will always be executed. This is exactly what we want to happen since at this point we know the user wants to know the hours of operation but no location was provided. (If we left the condition empty, we'd get an error because no children node handled the user request.)"),o.a.createElement("p",null,"Note also that this is why the order of nodes can matter (it didn't for chitchat nodes, but it does here). If we revers the order and place the ",o.a.createElement("span",{className:"instruction"},"No Location")," node first, its ",o.a.createElement("code",null,"true")," condition is always satisfied and the"," ",o.a.createElement("span",{className:"instruction"},"Location Provided")," node will be overshadowed and never executed. We always want to place the most specific condition at the top, with the more generic condition nodes at the bottom as catch all.")),o.a.createElement("li",null,"We need a generic answer for when no location is specified, so go ahead and reuse the message we had originally."," ",o.a.createElement("code",null,'Our hours of operations are listed on <a href="https://example.org/hours/">this page</a>.')),o.a.createElement("li",null,"Before we can test it all out, we need to make sure that the parent node (i.e., ",o.a.createElement("span",{className:"instruction"},"Hours of Operation"),") hands off control to the children nodes. Select the parent node, and you'll notice that the ",o.a.createElement("span",{className:"instruction"},"And finally")," section is set to ",o.a.createElement("span",{className:"instruction"},"Wait for user input"),". This is not what we want. The user has already provided us with the question and we haven't responded yet. Change this section of"," ",o.a.createElement("span",{className:"instruction"},"Hours of Operation")," to"," ",o.a.createElement("span",{className:"instruction"},"Skip user input"),". This will hand off the excution to the two children nodes we just created."),o.a.createElement("li",null,"If you click on the ",o.a.createElement("span",{className:"instruction"},"Try it")," button and type, ",o.a.createElement("code",null,"What are your hours of operation for Melbourne?")," ","you should see a response specific to that city. If you try,",o.a.createElement("code",null,"What are your hours of operation?")," you'll should get our generic response with a link to the city hours, as shown in the image below.")),o.a.createElement("p",{style:{textAlign:"center"}},o.a.createElement("img",{src:f.a,alt:"Testing our children nodes for Hours of Operation",title:"Testing our children nodes for Hours of Operation",width:"900"})),o.a.createElement("h3",null,"Task 4: Respond to location information"),o.a.createElement("h3",null,"Task 5: Take the Module 3 Quiz"),o.a.createElement("p",null,"Head over to the"," ",o.a.createElement("a",{href:"https://courses.cognitiveclass.ai/courses/course-v1:CognitiveClass+CB0103EN+v1/courseware/",target:"_blank",rel:"noopener noreferrer"},"Build Your Own Chatbot")," ","course and"," ",o.a.createElement("strong",null,"find the ",o.a.createElement("span",{className:"instruction"},"Graded Review Questions")," ","inside Module 3.")),o.a.createElement("p",null,"Note, that the course builds a similar flower shop chatbot as well, but the course version is slightly different from the one we are developing in this workshop. In order for you to successfully pass the quiz, please take note of the following:"),o.a.createElement("ul",null,o.a.createElement("li",null,"That flower shop chatbot has chitchat intents (like ours) but also a"," ",o.a.createElement("code",null,"#flower_suggestions")," intent which is used to capture users who ask for flower recommendations. (e.g.,"," ",o.a.createElement("em",null,"I'd like to buy flowers"),","," ",o.a.createElement("em",null,"What flowers should I buy for my sister?"),")"),o.a.createElement("li",null,"The flower shop in the course has the same ",o.a.createElement("code",null,"@relationship")," ","entity like the one we imported in the previous lab. If you click on that entity in our chatbot, you'll notice that it includes entity values like ",o.a.createElement("code",null,"@relationship:husband"),", ",o.a.createElement("code",null,"@relationship:wife"),", etc. The course chatbot uses them to detect the relationship of the user with the flower receiver along with the intent for"," ",o.a.createElement("code",null,"#flower_suggestions"),"."),o.a.createElement("li",null,"You'll notice that some relationships have a syonym. For example,"," ",o.a.createElement("code",null,"mom")," is a synonym for the entity value"," ",o.a.createElement("code",null,"@relationship:mother")," and ",o.a.createElement("code",null,"dad")," is a synonym for"," ",o.a.createElement("code",null,"@relationship:father"),".")),o.a.createElement("p",null,o.a.createElement("strong",null,"Take the quiz"),", just like you did in the previous module. As a reminder, there are no trick questions, so go with the answer that appears to make most sense to you."),o.a.createElement(r.a,{color:"success"},"We have a small, useful chatbot (if a basic one). In the next lab, we'll deploy it to a WordPress site."),o.a.createElement("p",{style:{textAlign:"center",margin:"20px"}},o.a.createElement(l.Link,{className:"btn btn-secondary",to:"/lab-3"},"Back to Lab 3")," ",o.a.createElement(l.Link,{className:"btn btn-primary",to:"/lab-5"},"Proceed to Lab 5")))}},145:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return p}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return m});var n=a(0),o=a.n(n),l=a(4),r=a.n(l),i=a(144),s=a.n(i);a.d(t,"Link",function(){return s.a}),a.d(t,"withPrefix",function(){return i.withPrefix}),a.d(t,"navigate",function(){return i.navigate}),a.d(t,"push",function(){return i.push}),a.d(t,"replace",function(){return i.replace}),a.d(t,"navigateTo",function(){return i.navigateTo});var c=a(146),u=a.n(c);a.d(t,"PageRenderer",function(){return u.a});var h=a(34);a.d(t,"parsePath",function(){return h.a});var d=o.a.createContext({}),m=function(e){return o.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func}},146:function(e,t,a){var n;e.exports=(n=a(148))&&n.default||n},147:function(e){e.exports={data:{site:{siteMetadata:{title:"Chatbot Workshop Hands-On Labs"}}}}},148:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),o=a.n(n),l=a(4),r=a.n(l),i=a(48),s=a(2),c=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return o.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},t.default=c},149:function(e,t,a){},151:function(e,t,a){"use strict";var n=a(147),o=a(0),l=a.n(o),r=a(4),i=a.n(r),s=a(153),c=a.n(s),u=a(145),h=function(e){var t=e.siteTitle;return l.a.createElement("div",{style:{background:"rebeccapurple"}},l.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},l.a.createElement("h1",{style:{margin:0}},l.a.createElement(u.Link,{to:"/",style:{color:"white",textDecoration:"none"}},t))))},d=a(152);a(33),a(154);function m(e){var t=e.exact,a=e.className,n=e.activeClassName,o=e.children;return l.a.createElement(u.Link,Object.assign({},e,{getProps:function(e){var o=e.isCurrent,l=e.isPartiallyCurrent;return{className:["nav-link",a,t&&o?n:"",!t&&l?n:""].join(" ").trim()}}}),o)}m.propTypes={exact:i.a.bool,className:i.a.string,activeClassName:i.a.string,children:i.a.node.isRequired},m.defaultProps={exact:!1,activeClassName:"current",className:""};var p=function(){return l.a.createElement("div",{style:{background:"#E5CCFF",marginBottom:"1.45rem"}},l.a.createElement("div",{style:{margin:"0 auto",maxWidth:960}},l.a.createElement(d.b,{pills:!0},l.a.createElement(d.c,null,l.a.createElement(m,{to:"/",exact:!0},"Home")),l.a.createElement(d.c,null,l.a.createElement(m,{to:"/lab-1"},"Lab 1: Set Up")),l.a.createElement(d.c,null,l.a.createElement(m,{to:"/lab-2"},"Lab 2: Intents")),l.a.createElement(d.c,null,l.a.createElement(m,{to:"/lab-3"},"Lab 3: Entities")),l.a.createElement(d.c,null,l.a.createElement(m,{to:"/lab-4"},"Lab 4: Dialog")))))},f=(a(149),a(155),function(e){var t=e.children;return l.a.createElement(u.StaticQuery,{query:"755544856",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(c.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"A collection of hands-on labs to build chatbots with IBM Watson Assistant."},{name:"keywords",content:"chatbot, chatbots, watson, watson assistant, ibm, workshop, chatbot workshop"}]},l.a.createElement("html",{lang:"en"})),l.a.createElement(h,{siteTitle:e.site.siteMetadata.title}),l.a.createElement(p,null),l.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t))},data:n})});f.propTypes={children:i.a.node.isRequired};t.a=f},181:function(e,t,a){e.exports=a.p+"static/chitchat-nodes-423587877cf895b31b90558a85a14c0c.png"},182:function(e,t,a){e.exports=a.p+"static/simple-hours-ee7f59f29bcaf6bfce76e965f67e380c.png"},183:function(e,t,a){e.exports=a.p+"static/hours-location-provided-798a093dd2be94e97adcfb5097472dd8.png"},184:function(e,t,a){e.exports=a.p+"static/hours-of-operation-04db8041cefb0e8e6c92f43e775ce785.png"}}]);
//# sourceMappingURL=component---src-pages-lab-4-js-c3daa62f0219f3a65a65.js.map