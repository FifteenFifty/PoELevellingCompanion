(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{227:function(e,t,r){"use strict";r.d(t,"a",(function(){return V}));var i=r(13),a=r.n(i),n=r(0),o=r.n(n),s=Object(n.createContext)({}),l=r(6),u=l.a.create({container:{padding:20,flex:1,backgroundColor:"#fff",alignItems:"center",justifyContent:"center"},header:{width:"100%",height:"100%",flexDirection:"row",alignItems:"center",justifyContent:"center"},headerText:{fontSize:18,color:"#333",fontWeight:"bold"},section:{padding:10,width:"100%",height:"100%",flexDirection:"row",alignItems:"center",justifyContent:"center"},sectionText:{fontSize:18,color:"#333",fontWeight:"bold"},headerMenuIcon:{fontSize:28,color:"#333",position:"absolute",left:0},item:{padding:10,marginTop:10,borderColor:"#bbb",borderWidth:1,borderStyle:"dashed",borderRadius:10},objective:{flexDirection:"row"},info:{flexDirection:"row"},infoItem:{padding:5},complete:{textDecorationLine:"line-through",opacity:.25},required:{fontWeight:"bold"},boss:{color:"red"},area:{color:"blue"},quest:{color:"green"},waypoint:{color:"lightblue"},trial:{color:"teal"}}),d=r(383),c=r(201),m=r(384),_=r(15),h=r(4),p=r(73),v=r(43),T=r(5),x=r.n(T),f=r(7),E=r.n(f),w=r(8),g=r.n(w),k=r(9),L=r.n(k),y=r(3),P=r.n(y);function C(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,i=P()(e);if(t){var a=P()(this).constructor;r=Reflect.construct(i,arguments,a)}else r=i.apply(this,arguments);return L()(this,r)}}var S=function(e){g()(r,e);var t=C(r);function r(e){return x()(this,r),t.call(this,e)}return E()(r,[{key:"render",value:function(){var e="";return e=Array.isArray(this.props.children)?this.props.children.join(""):this.props.children,o.a.createElement(_.a,{key:this.props.taskId},function e(t,r,i,a){var n=[],s=[],l="";(r+="").includes("*")?(s=r.split("*"),l="boss"):r.includes("_")?(s=r.split("_"),l="area"):r.includes("#")?(s=r.split("#"),l="quest"):r.includes("=")?(s=r.split("="),l="trial"):r.includes("/")&&(s=r.split("/"),l="waypoint"),"undefined"===typeof a&&(a=0);var d=t+"Text"+a.toString();return a++,""!==l?s.forEach((function(r,s){if(s%2==0)n=n.concat(e(t,r,i,++a));else{var c=i.concat([u[l]]);d+=s.toString(),n.push(o.a.createElement(_.a,{key:d,style:c},r))}})):n.push(o.a.createElement(_.a,{key:d,style:i},r)),n}(this.props.taskId,e,this.props.style))}}]),r}(o.a.Component);function D(e){var t=e.item,r=(e.complete,e.pressHandler),i=Object(n.useContext)(s),l=a()(i,2),u=l[0];l[1];console.log("Rendering: "+t.id);var d=[],c=[G.infoItem];t.id in u&&(d.push(G.complete),c.push(G.complete)),t.optional||d.push(G.required);var m=[],p=t.id;if(Array.isArray(t.text))t.text.forEach((function(e,r){p+=r.toString();var i=o.a.createElement(S,{taskId:t.id,style:d},e);m.push(i)}));else{var T="";t.hasWp&&(T=" /[WP]/");var x=o.a.createElement(S,{taskId:t.id,style:d},t.text+T);m.push(o.a.createElement(h.a,{key:p,style:G.objective},x))}var f=[];if(t.minLvl&&f.push(o.a.createElement(_.a,{key:"{key}MinLvl",style:c},"Min lvl: ",t.minLvl)),t.direction){var E="?";switch(t.direction){case"N":E="\u2191";break;case"NE":E="\u2197";break;case"E":E="\u2192";break;case"SE":E="\u2198";break;case"S":E="\u2193";break;case"SW":E="\u2199";break;case"W":E="\u2190";break;case"NW":E="\u2196"}f.push(o.a.createElement(_.a,{key:"{item.id}Direction",style:c},"Go ",E))}if(t.rewards){var w=[];t.rewards.passive&&w.push(o.a.createElement(_.a,{style:c,key:"{item.id}Passive"},"+",t.rewards.passive.num)),t.rewards.item&&w.push(o.a.createElement(_.a,{style:c,key:"{item.id}Item"},t.rewards.item)),f.push(o.a.createElement(_.a,{key:"{item.id}Reward",style:c},"Reward: ",w))}return o.a.createElement(v.a,{onPress:function(){return r(t.id)}},o.a.createElement(h.a,{style:G.item},o.a.createElement(h.a,null,m),o.a.createElement(h.a,{style:G.info},f)))}var G=l.a.create({item:{padding:10,marginTop:10,borderColor:"#bbb",borderWidth:1,borderStyle:"dashed",borderRadius:10},objective:{flexDirection:"row"},info:{flexDirection:"row"},infoItem:{padding:5},complete:{textDecorationLine:"line-through",opacity:.25},required:{fontWeight:"bold"},boss:{color:"red"},area:{color:"blue"},quest:{color:"green"},waypoint:{color:"lightblue"},trial:{color:"teal"}}),b=r(46);function W(){for(var e=Object(n.useContext)(s),t=a()(e,2),r=(t[0],t[1]),i=function(e){r((function(t){return t[e]=!0,JSON.parse(JSON.stringify(t))}))},l=[],d=1;d<11;d++)l.push(o.a.createElement(h.a,{style:u.section},o.a.createElement(_.a,{style:u.sectionText},b.acts[d].title))),l.push(o.a.createElement(p.a,{data:b.acts[d].tasks,renderItem:function(e){var t=e.item;return o.a.createElement(D,{item:t,pressHandler:i})}}));return o.a.createElement(h.a,{style:u.header},o.a.createElement(h.a,null,l))}function A(e){var t=e.item,r=e.progress,i=e.pressHandler,a=t.rewards.passive;console.log("I am: "+t.id),console.log("Progress is: "),console.log(r);var n=[u.required];t.id in r&&(console.log("IM DONE"),n.push(u.complete));var s=[o.a.createElement(S,{style:n,taskId:t.id},"Quest: ",a.quest),o.a.createElement(S,{style:n,taskId:t.id},"WP: ",a.wp)];a.text&&(Array.isArray(a.text)?a.text.forEach((function(e,t){t.toString();var r=o.a.createElement(S,{taskId:a.id,style:n},e);s.push(r)})):s.push(o.a.createElement(S,{style:n,taskId:t.id},a.text)));t.id;return o.a.createElement(v.a,{onPress:function(){return i(t.id)}},o.a.createElement(h.a,{style:u.item},o.a.createElement(h.a,null,s)))}function B(){for(var e=Object(n.useContext)(s),t=a()(e,2),r=t[0],i=t[1],l=function(e){i((function(t){return t[e]=!0,JSON.parse(JSON.stringify(t))}))},d=[],c=1;c<11;c++)d.push(o.a.createElement(h.a,{style:u.section},o.a.createElement(_.a,{style:u.sectionText},b.acts[c].title))),d.push(o.a.createElement(p.a,{data:b.acts[c].tasks.filter((function(e){return"rewards"in e&&"passive"in e.rewards})),renderItem:function(e){var t=e.item;e.index;return o.a.createElement(A,{item:t,progress:r,pressHandler:l})}}));return o.a.createElement(h.a,{style:u.header},o.a.createElement(h.a,null,d))}function R(e){var t=e.item,r=e.progress,i=e.pressHandler,a=t.rewards.trial,n=[u.required];t.id in r&&n.push(u.complete);var s=[o.a.createElement(S,{style:n,taskId:t.id},"Trial: ",a.name)];return a.wp&&s.push(o.a.createElement(S,{style:n,taskId:t.id},"WP: ",a.wp)),a.text&&(Array.isArray(a.text)?a.text.forEach((function(e,t){var r=o.a.createElement(S,{taskId:a.id,style:n},e);s.push(r)})):s.push(o.a.createElement(S,{style:n,taskId:t.id},a.text))),o.a.createElement(v.a,{onPress:function(){return i(t.id)}},o.a.createElement(h.a,{style:u.item},o.a.createElement(h.a,null,s)))}function F(){for(var e=Object(n.useContext)(s),t=a()(e,2),r=t[0],i=t[1],l=function(e){i((function(t){return t[e]=!0,JSON.parse(JSON.stringify(t))}))},d=[],c=1;c<11;c++)d.push(o.a.createElement(h.a,{style:u.section},o.a.createElement(_.a,{style:u.sectionText},b.acts[c].title))),d.push(o.a.createElement(p.a,{data:b.acts[c].tasks.filter((function(e){return"rewards"in e&&"trial"in e.rewards})),renderItem:function(e){var t=e.item;e.index;return o.a.createElement(R,{item:t,progress:r,pressHandler:l})}}));return d.push(o.a.createElement(h.a,{style:u.section},o.a.createElement(_.a,{style:u.sectionText},b.acts.maps.title))),d.push(o.a.createElement(p.a,{data:b.acts.maps.tasks.filter((function(e){return"rewards"in e&&"trial"in e.rewards})),renderItem:function(e){var t=e.item;e.index;return o.a.createElement(R,{item:t,progress:r,pressHandler:l})}})),o.a.createElement(h.a,{style:u.header},o.a.createElement(h.a,null,d))}function K(){return o.a.createElement(h.a,{style:u.header},o.a.createElement(h.a,null,o.a.createElement(_.a,{style:u.headerText},"This is the about page"),o.a.createElement(_.a,{style:u.headerText},"How lovely")))}var q=r(385);function M(e){var t=e.navigation,r=e.title;return o.a.createElement(h.a,{style:u.header},o.a.createElement(q.a,{style:u.headerMenuIcon,onPress:function(){t.openDrawer()},name:"menu"}),o.a.createElement(_.a,{style:u.headerText},r))}var O=Object(m.a)();function I(e){var t=e.navigation,r=e.route,i=null;switch(r.name){case"Levelling":i=W;break;case"Passives":i=B;break;case"Trials":i=F;break;case"About":i=K}return o.a.createElement(O.Navigator,{initialRouteName:r.name,screenOptions:{headerStyle:{backgroundColor:"#999"},headerTintColor:"#fff",headerTitleStyle:{fontWeight:"bold"}}},o.a.createElement(O.Screen,{name:r.name,component:i,options:{headerTitle:function(){return o.a.createElement(M,{navigation:t,title:r.name})}}}))}var N=Object(d.a)();function H(){return o.a.createElement(c.a,null,o.a.createElement(N.Navigator,{initialRouteName:"Levelling"},o.a.createElement(N.Screen,{name:"Levelling",component:I}),o.a.createElement(N.Screen,{name:"Passives",component:I}),o.a.createElement(N.Screen,{name:"Trials",component:I}),o.a.createElement(N.Screen,{name:"About",component:I})))}function V(){var e=Object(n.useState)({currentAct:1}),t=a()(e,2),r=t[0],i=t[1];return o.a.createElement(s.Provider,{value:[r,i]},o.a.createElement(H,null))}},231:function(e,t,r){r(232),e.exports=r(371)},232:function(e,t){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/PoELevellingCompanion/expo-service-worker.js",{scope:"/PoELevellingCompanion/"}).then((function(e){})).catch((function(e){console.info("Failed to register service-worker",e)}))}))},46:function(e){e.exports=JSON.parse('{"currentAct":1,"acts":{"1":{"title":"Act 1","tasks":[{"id":"EnemyAtTheGate","text":"Defeat *Hillock*","minLvl":1,"direction":"NE"},{"id":"Coast","text":"Go to _The Coast_","minLvl":1,"direction":"NE","hasWp":true},{"id":"TidalIsland","optional":true,"text":["- Go to the _Tidal Island_","- Kill *Hailrake*. Pick up =Medicine Chest=","- Go to Town. Turn In Quest. WP to _The Coast_"],"minLvl":1,"direction":"S","rewards":{"item":"Quicksilver"}},{"id":"MudFlats","text":"Go to _Mud Flats_","minLvl":1},{"id":"CollectGlyphs","text":"Collect 3 =Rhoa Glyphs=. Place them in the wall"},{"id":"SubmergedPassage","text":"Enter _Submerged Passage_","minLvl":2,"hasWp":true},{"id":"Ledge","text":"Go to _The Ledge_ until WP","minLvl":3,"hasWp":true},{"id":"Dweller","optional":true,"minLvl":3,"text":["- WP back to _Submerged Passage_","- Enter _Flooded Depths_","- Kill the *Dweller of the Deep*"],"rewards":{"passive":{"num":1,"quest":"#The Dweller of the Deep#","wp":"/Submerged Passage/","text":"Enter _Flooded Depths_. Kill *Dweller of the Deep*"}}},{"id":"Climb","minLvl":4,"text":"Go to _The Climb_"},{"id":"LowerPrison","minLvl":5,"text":"Go to the _Lower Prison_"},{"id":"LowerPrisonTrial","text":"Complete the #Trial# in the _Lower Prison_","optional":true,"rewards":{"trial":{"name":"=Trial of Piercing Truth=","wp":"/The Prison/","text":"Trial is in _The Lower Prison_"}}},{"id":"Prison","minLvl":6,"text":"Progress through the prison"},{"id":"Brutus","text":"Defeat *Brutus*"},{"id":"PrisonersGate","text":"Go to _Prisoner\'s Gate_","minLvl":7,"hasWp":true},{"id":"MovSkill","text":"Go to town, hand in quests, WP back","optional":true,"rewards":{"item":"Movement skill"}},{"id":"ShipGraveyars","text":"Go to _Ship Graveyard_","minLvl":8,"hasWp":true},{"id":"GyCave","minLvl":9,"text":"Go to _Ship Graveyard Cave_"},{"id":"Allflame","text":"Find Slave Girl. Pick up =Allflame="},{"id":"BackToGraveyard","text":"Go to town. WP back to _Ship Graveyard_"},{"id":"Fairgraves","text":"Kill *Fairgraves*","rewards":{"passive":{"num":1,"quest":"#The Marooned Mariner#","wp":"/Ship Graveyard/","text":"Kill *Fairgraves*"}}},{"id":"CavernOfWrath","text":"Enter _Cavern of Wrath_","minLvl":9,"hasWp":true},{"id":"Merveil","minLvl":10,"text":"Kill *Merveil*"}]},"2":{"title":"Act 2","tasks":[{"id":"OldFields","minLvl":11,"text":"Go to _Old Fields_","direction":"E"},{"id":"Crossroads","minLvl":12,"text":"Go to _The Crossroads_","hasWp":true,"direction":"NE"},{"id":"CryptTrial1","optional":true,"minLvl":14,"text":["Go to _The Fellshrine Ruins_","Go to _The Crypt_","Complete the =Trial= in _The Crypt_"],"direction":"SE","rewards":{"trial":{"name":"=Trial of Swirling Fear=","wp":"/The Crypt/","text":"Trial is in _The Crypt Level 1_"}}},{"id":"ChamberOfSins","text":"Go to _The Chamber of Sins_","minLvl":13,"hasWp":true,"direction":"NW"},{"id":"ChamberOfSins2Trial","text":"Complete the #Trial# in the _Chamber of Sins Level 2_","optional":true,"rewards":{"trial":{"name":"=Trial of Crippling Grief=","wp":"/The Chamber of Sins Level 1/","text":"Trial is in _The Chamber of Sins Level 2_"}}},{"id":"Fidelitas","minLvl":13,"text":"Defeat *Fidelitas*. Pick up #Baleful Gem#. Go to _Town_"},{"id":"BrokenBridge","text":"WP to /The Crossroads/. Go to _Broken Bridge_","minLvl":13,"direction":"SE"},{"id":"Kraityn","text":"Defeat *Kraityn*. Pick up #Kraityn\'s Amulet#. Go to _Town_"},{"id":"Riverways","text":"Go to _The Riverways","minLvl":12,"direction":"W","hasWp":true},{"id":"WesternForest","text":"Go to _Western Forest_","minLvl":14,"hasWp":true},{"id":"Alira","text":"Defeat *Alira*. Pick up #Alira\'s Amulet#"},{"id":"Blackguards","text":["Defeat *Blackguard Captain*","Pick up #Thaumetic Emblem#","Place #Thaumetic Emblem# in wall"],"direction":"SW","rewards":{"passive":{"num":1,"quest":"#The Way Forward#","wp":"/Western Forest/","text":["Defeat *Blackguard Captain*","Pick up #Thaumetic Emblem#","Place #Thaumetic Emblem# in wall","Collect reward from Bestel in _Act 1_"]}}},{"id":"WeaversChambers","minLvl":15,"text":"Enter _Weaver\'s Chambers_. Enter _Weaver\'s Nest_"},{"id":"Weaver","text":"Defeat *The Weaver*. Pick up #Maligaro\'s Spike#. Go to _Town_","reward":{"item":"TODO"}},{"id":"Wetlands","text":"WP to /Riverways/. Go to _The Wetlands_","minLvl":16,"hasWp":true,"direction":"NW"},{"id":"Oak","text":"Kill *Oak*. Pick up #Oak\'s Amulet#","rewards":{"passive":{"num":2,"quest":"#Deal with the Bandits#","wp":"None","text":"Reward from killing all of the bandits"}}},{"id":"PickUpPassives","optional":true,"text":["Pick up Passives:","WP to _Town_","Talk to Eramir","WP to _Act 1 Town_","Talk to Bestel","WP back to The Wetlands"]},{"id":"VaalRuins","minLvl":16,"text":"Enter _Vaal Ruins_. Break Ancient Seal"},{"id":"NorthernForest","minLvl":17,"text":"Go to _Northern Forest_. Enter _The Caverns_","direction":"N"},{"id":"AncientPyramid","minLvl":19,"text":"Ascent _Ancient Pyramid_. Enter _Pyramid Apex_"},{"id":"Trolololo","optional":true,"text":"Make a cup of tea while the boss spawns"},{"id":"VaalOversoul","text":"Defeat *Vaal Oversoul*"}]},"3":{"title":"Act 3","tasks":[{"id":"Clarissa","minLvl":19,"text":"Save Clarissa. Talk to Clarissa. Go to town"},{"id":"Crematorium","minLvl":21,"text":["Go to _The Slums_ (don\'t walk all the way to town center)","Enter _The Crematorium_"],"hasWp":true},{"id":"CrematoriumTrial","optional":true,"text":"Complete the =Trial= in _The Crematorium_","rewards":{"trial":{"name":"=Trial of Burning Rage=","wp":"/The Crematorium/","text":"Trial is in _The Crematorium_"}}},{"id":"PietyCrematorium","text":"Defeat *Piety*. Pick up #Tolman\'s Bracelet#. Go to _Town_"},{"id":"SewerKeys","text":"Talk to Clarissa. Get #Sewer Keys#. Go to _The Slums_"},{"id":"Sewers","minLvl":22,"text":"Enter _The Sewers_","hasWp":true},{"id":"SewerBusts","text":"Pick up 3 #Busts#","rewards":{"passive":{"num":1,"quest":"#Victario\'s Secrets#","wp":"/The Sewers/","text":"Pick up 3 #Busts#"}}},{"id":"Marketplace","minLvl":22,"text":"Go to _The Marketplace_","hasWp":true},{"id":"CatacombsTrial","optional":true,"minLvl":23,"text":["Enter _The Catacombs_","Complete the =Trial= in _The Catacombs_"],"rewards":{"trial":{"name":"=Trial of Lingering Pain=","wp":"/The Marketplace/","text":"Trial is in_The Catacombs_"}}},{"id":"Battlefront","text":"Go to _The Battlefront_","minLvl":23,"hasWp":true},{"id":"DontPickUpDecanterSpiritus","optional":true,"text":"Don\'t pick up the Decanter Spiritus"},{"id":"RibbonSpool","text":"Do pick up #Ribbon Spool#","direction":"W"},{"id":"Docks","minLvl":25,"text":"Enter _The Docks_. Pick up #Thaumatic Sulphite#. Go to _Town_","direction":"NW"},{"id":"A3DeliverQuests","optional":true,"text":"Deliver quests (+1 passive)"},{"id":"SolarisTemple","text":"WP to /The Battlefront/. Enter _Solaris Temple_. Enter _Level 2_","minLvl":23,"hasWp":true},{"id":"InfernalTalc","text":"Talk to Dialla. Pick up #Infernal Talc#"},{"id":"UnblockSewers","text":"WP to /The Sewers/. Use #Infernal Talc# on blockage","direction":"W"},{"id":"EbonyBarracks","text":"Enter _Ebony Barracks_","minLvl":25,"hasWp":true},{"id":"Gravicius","text":"Defeat *General Gravicius*"},{"id":"LunarisTemple","minLvl":26,"text":"Enter _Lunaris Temple_. Enter _Level 2_"},{"id":"PietyLunaris","text":"Defeat *Piety*. Pick up #Tower Key#. Go to _Town_","rewards":{"passive":{"num":1,"quest":"#Piety\'s Pets#","wp":"/Lunaris Temple/","text":"Reward from killing *Piety* in _Lunaris Temple Level 2_"}}},{"id":"A3DeliverQuests2","text":"Deliver Quests (+1 passive)","optional":true},{"id":"Gardens","text":"WP to /Ebony Barracks/. Go to _Imperial Gardens_","minLvl":26,"hasWp":"true"},{"id":"GardensTrial","optional":true,"text":"Complete the =Trial= in the gardens","rewards":{"trial":{"name":"=Trial of Stinging Doubt=","wp":"/The Imperial Gardens/","text":"Trial is in _The Imperial Gardens_"}}},{"id":"DontPickUpPlum","optional":true,"text":"Don\'t pick up the plum"},{"id":"Scepter","minLvl":28,"text":"Enter _Sceptre of God_. Ascend to the top"},{"id":"Dominus","minLvl":29,"text":"Defeat *Dominus*"}]},"4":{"title":"Act 4","tasks":[{"id":"Voll","minLvl":30,"text":"Go to _Dried Lake_. Defeat *Voll*. Pick up #Deshret\'s Banner#. Go to _Town","direction":"W"},{"id":"EnterMines","minLvl":30,"text":"Break seal. Enter _The Mines_. Enter _Level 2_"},{"id":"DeshretSpirit","text":"Touch Deshret\'s Spirit","optional":true,"rewards":{"passive":{"num":1,"quest":"#An Indomitable Spirit#","wp":"None (accessible from town)","text":"Touch Deshret\'s Spirit in _The Mines Level 2_"}}},{"id":"CrystalVeins","text":"Enter _Crystal Veins_","minLvl":32,"hasWp":true},{"id":"DeliverQsA4","optional":true,"text":"WP to _Town_. Deliver quests. WP back to /Crystal Veins/"},{"id":"DaressoDream","minLvl":32,"text":"Enter _Daresso\'s Dream_. Progress through"},{"id":"Daresso","minLvl":33,"text":"Defeat *Daresso*. Pick up #Eye of Desire#. Go to _Town_. WP to /Crystal Veins/"},{"id":"KaomDream","minLvl":32,"text":"Enter _Kaom\'s Dream_. Progress through"},{"id":"Kaom","minLvl":33,"text":"Defeat *Kaom*. Pick up #Eye of Fury#. Go to _Town_. WP to /Crystal Veins/"},{"id":"Belly","minLvl":34,"text":"Talk to Dialla. Enter _Belly of the Beast_. Enter _Level 2_"},{"id":"Piety3","minLvl":35,"text":"Defeat *Piety*. Enter _The Harvest_"},{"id":"HarvestMaligaro","minLvl":35,"text":"Defeat *Maligaro*. Pick up #Malachai\'s Heart#"},{"id":"HarvestDoedre","minLvl":35,"text":"Defeat *Doedre*. Pick up #Malachai\'s Lungs#"},{"id":"HarvestShavronne","minLvl":35,"text":"Defeat *Shavronne*. Pick up #Malachai\'s Entrails#"},{"id":"BlackCore","minLvl":35,"text":"Enter _Black Core_. Defeat *Malachai*"},{"id":"DeliverQsA4","text":"Go to _Town. Deliver quests. Go to _The Ascent_"},{"id":"Ascent","minLvl":35,"text":"Climb _The Ascent_. Activate the resonator. Enter the portal"}]},"5":{"title":"Act 5","tasks":[{"id":"OverseerKrow","minLvl":36,"text":"Progress through _The Slave Pens_. Defeat *Overseer Krow_*. Enter _Town_"},{"id":"Miasmeter","optional":true,"text":"Enter _Control Blocks_. Pick up #Miasmeter#. Go to _Town_","minLvl":36,"rewards":{"passive":{"num":1,"quest":"#In Service to Science#","wp":"None (accessible from town)","text":"Enter _Control Blocks_. Pick up #Miasmeter#. Go to _Town_"}}},{"id":"Causticus","minLvl":36,"text":"Enter _Control Blocks_. Defeat *Justicar Causticus*. Pick up #Eye of Zeal#"},{"id":"OriathSquare","minLvl":37,"text":"Go to _Oriath Square_","hasWp":true},{"id":"TemplarCourts","minLvl":37,"text":"Go to _Templar Courts_","direction":"NE"},{"id":"ChamberOfInnocence","minLvl":38,"text":"Go to _Chamber of Innocence_","hasWp":true},{"id":"Innocence","text":"Defeat *High Templar Avarius*. Defeat *Innocence*"},{"id":"ChamberOfInnocence2","text":"Go to _Chamber of Innocence_"},{"id":"TorchedCourts","minLvl":39,"text":"Go to _Torched Courts_. Go to _Ruined Square_","hasWp":true},{"id":"Ossuary","minLvl":39,"text":"Go to _The Ossuary_ (next to /WP/). Pick up #Sign of Purity#. Go to _Town_"},{"id":"DeliverQsA5","text":"Deliver quests. WP back to /Ruined Square/"},{"id":"Reliquary","optional":true,"text":"Go to _The Reliquary_. Pick up 3 #Relics#. Go to _Town_","direction":"E","rewards":{"passive":{"num":1,"quest":"#Kitava\'s Torments#","wp":"/Ruined Square/","text":"Go to _The Reliquary_. Pick up 3 #Relics#"}}},{"id":"Rooftop","minLvl":40,"text":"WP to /Ruined Square/. Go to _Cathedral Rooftop_","direction":"SW"},{"id":"Kitava1","minLvl":40,"text":"Enter Cathedral Apex. Defeat *Kitava*"}]},"6":{"title":"Act 6","tasks":[{"id":"TrigletStrand","minLvl":40,"optional":true,"text":"Clear the _Twilight Strand_","rewards":{"item":"Lilly sells all skill gems"}},{"id":"Coast2","minLvl":40,"text":"Enter _The Coast_","hasWp":true},{"id":"Mudflats","minLvl":41,"text":"Enter _The Mud Flats_"},{"id":"DishonouredQueen","text":"Defeat *The Dishonoured Queen*. Pick up #Eye of Conquest#"},{"id":"Tukohama","text":"Enter Karui Fortress. Kill *Tukohama*","minLvl":41,"rewards":{"passive":{"num":1,"quest":"#The Father of War#","wp":"/The Coast/","text":["Enter _The Mud Flats_","Enter _Karui Fortress_","Kill *Tukohama"]}}},{"id":"Ridge","minLvl":41,"text":"Enter _The Ridge_. Enter _Lower Prison_"},{"id":"LowerPrisonTrial","optional":true,"text":"Complete #Trial#","rewards":{"trial":{"name":"=Trial of Piercing Truth=","wp":"/The Prison/","text":"Trial is in _The Lower Prison_"}}},{"id":"Tower","minLvl":42,"text":"Enter _Shavronne\'s Tower_. Ascend the tower"},{"id":"Shavronne2","text":"Defeat *Shavronne*"},{"id":"PrisonersGate","minLvl":42,"text":"Enter _Warden\'s Chambers_. Enter _Prisoner\'s Gate_","hasWp":true},{"id":"ClovenOne","optional":true,"text":["Enter _The Valley of the Fire Drinker_","Kill *Abberath*"],"rewards":{"passive":{"num":1,"quest":"#The Cloven One#","wp":"/Prisoners Gate/","text":["Enter _The Valley of the Fire Drinker_","Kill *Abberath*"]}}},{"id":"Riverways2","minLvl":43,"text":"Go to _Western Forest_. Go to _The Riverways_","hasWp":true},{"id":"PuppetMistress","optional":true,"minLvl":43,"text":["Enter _The Wetlands_","Enter _The Spawning Grounds_","Kill *The Puppet Mistress*"],"rewards":{"passive":{"num":1,"quest":"#The Puppet Mistress#","wp":"/The Riverways/","text":["Enter _The Wetlands_","Enter _The Spawning Grounds_","Kill *The Puppet Mistress*"]}}},{"id":"SouthernForest","minLvl":44,"text":"Go to _Southern Forest_"},{"id":"CavernOfAnger","minLvl":44,"text":"Enter _Cavern of Anger_. Pick up #Black Flag#. Enter _The Beacon_"},{"id":"BurnFlag","minLvl":44,"text":"Progress through _The Beacon_. Burn Black Flag"},{"id":"BrineKingReef","minLvl":45,"text":"Sail to _Brine King\'s Reef_. Enter _Arena_"},{"id":"BrineKing","minLvl":45,"text":"Kill *Tsoagoth, The Brine King*"}]},"7":{"title":"Act 7","tasks":[{"id":"Crossroads2","text":"Enter _Broken Bridge_. Enter _The Crossroads_","minLvl":45,"hasWp":true},{"id":"Crypt2","minLvl":46,"text":"Enter _Fellshrine Ruins_. Enter _The Crypt_","direction":"SE"},{"id":"Crypt2Trial","optional":true,"text":"Complete the /Trial/","rewards":{"trial":{"name":"=Trial of Swirling Fear=","wp":"/The Crypt/","text":"Trial is in _The Crypt_"}}},{"id":"MaligaroMap","minLvl":46,"text":"Enter _Level 2_. Pick up #Maligaro\'s Map#. Go to _Town_"},{"id":"Crossroads3","minLvl":47,"text":"WP to /The Crossroads/. Enter _Chamber of Sins_","direction":"NW"},{"id":"SinsMap","minLvl":47,"text":"Find Map Device. Enter _Maligaro\'s Map_"},{"id":"Maligaro","minLvl":47,"text":"Defeat Maligaro. Pick up #Black Venom#"},{"id":"BackToChamber","minLvl":47,"text":"Portal back to _Chamber of Sins_. Enter _Level 2_"},{"id":"Sins2Trial","optional":true,"text":"Complete the /Trial/","rewards":{"trial":{"name":"=Trial of Crippling Grief,=","wp":"/The Chamber of Sins Level 2/","text":"Trial is in /The Chamber of Sins Level 2/"}}},{"id":"Den","minLvl":48,"text":"Enter _The Den_. Enter _Ashen Fields_"},{"id":"FortressEncampment","text":"Enter _Fortress Encampment_. Defeat *Greust*","direction":"W","rewards":{"passives":{"num":1,"quest":"#The Master of a Million Faces#","wp":"Ashen Fields","text":"Enter _Fortress Encampment_. Defeat *Greust*"}}},{"id":"NorthernForest2","minLvl":48,"text":"Enter _Northern Forest_. Enter _Dread Thicket_"},{"id":"QueenOfDespair","optional":"true","text":"Enter _Den of Despair_. Kill *Gruthkul*","rewards":{"passive":{"num":1,"quest":"#Queen of Despair#","wp":"/Northern Forest/","text":["Enter _Dread Thicket_","Enter _Den of Despair_","Kill *Gruthkul*"]}}},{"id":"Fireflies","minLvl":48,"text":"Pick up #7 Fireflies#. Go to _Town_. Deliver quests"},{"id":"Causeway","minLvl":48,"text":"WP to /Northern Forest/. Enter _The Causeway_","hasWp":true},{"id":"KisharasStar","optional":true,"text":"Pick up #Kishara\'s Star#","rewards":{"passive":{"num":1,"quest":"#Kishara\'s Star#","wp":"/The Causeway/","text":"Pick up #Kishara\'s Star#"}}},{"id":"VaalCity","minLvl":48,"text":"Enter _Vaal City_. Enter _Temple of Decay_ (center)"},{"id":"Arakaali","minLvl":49,"text":"Defeat *Arakaali*"}]},"8":{"title":"Act 8","tasks":[{"id":"ToxicConduits","minLvl":50,"text":"Enter _Toxic Conduits_. Enter _Doedre\'s Cesspool_. Enter _The Cauldron_","direction":"SW"},{"id":"Doedre2","minLvl":50,"text":"Defeat *Doedre*"},{"id":"GrandPromenade","minLvl":50,"text":"Go to _Grand Promenade_. Go to _Bath House_"},{"id":"BathHouseTrial","minLvl":51,"text":"Complete the =Trial= in the _Bath House_","optional":true,"rewards":{"trial":{"name":"=Trial of Burning Rage=","wp":"/The Bath House/","text":"Trial is in _The Bath House_"}}},{"id":"Yugul","optional":true,"minLvl":52,"text":["Enter _The High Gardens_","Enter _Arena_","Kill *Yugul*"],"rewards":{"passive":{"num":1,"quest":"#Reflection of Terror#","wp":"/The Bath House/","text":["Enter _The High Gardens_","Enter _Arena_","Kill *Yugul*"]}}},{"id":"HectorTitucius","minLvl":51,"text":"Defeat *Hector Titucius*. Pick up #Wings of Vastiri#"},{"id":"LunarisConcourse","minLvl":52,"text":"Go to the _Lunaris Concourse_","hasWp":true},{"id":"LunarisLevel2","minLvl":53,"text":"Enter _Lunaris Temple_. Enter _Level 2_"},{"id":"Dusk","text":"Enter _Portal_. Defeat *Dusk*. Pick up #Moon Orb#. Go to _Town_"},{"id":"Quay","minLvl":51,"text":"WP to /Toxic Conduits/. Go to _The Quay_","direction":"NE"},{"id":"Tolman2","optional":true,"text":["Pick up #Ankh of Eternity#","Enter _Resurrection Site_","Kill *Tolman*"],"rewards":{"passive":{"num":1,"quest":"#Love is Dead#","wp":"/Toxic Conduits/","text":["Go to _The Quay_","Pick up #Ankh of Eternity#","Enter _Resurrection Site_","Kill *Tolman*"]}}},{"id":"GrainGate","minLvl":51,"text":"Go to _Grain Gate_","hasWp":true},{"id":"GemlingLegionnaires","optional":true,"text":"Kill the *Gemling Legionnaires*","rewards":{"passive":{"num":1,"quest":"#The Gemling Legion#","wp":"/The Grain Gate/","text":"Kill the *Gemling Legionnaires*"}}},{"id":"Fields","minLvl":52,"text":"Go to _Imperial Fields_","hasWp":true},{"id":"SolarisTemple2","minLvl":53,"text":"Go to _Solaris Temple_. Go to _Level 2_","direction":"NE"},{"id":"Dawn","text":"Enter _Portal_. Defeat *Dawn*. Pick up #Sun Orb#. Go to _Town_"},{"id":"DeliverQsA8","minLvl":54,"text":"Deliver quests. WP to /Lunaris Concourse/"},{"id":"HarbourBridge","minLvl":54,"text":"Enter _Harbour Bridge_","direction":"SE"},{"id":"SolarisLunaris","minLvl":54,"text":"Enter _Sky Shrine_. Defeat *Solaris* and *Lunaris*"}]},"9":{"title":"Act 9","tasks":[{"id":"VastiriDesert","minLvl":55,"text":"Enter _The Descent_. Enter _Vastiri Desert_","hasWp":true},{"id":"QueenOfTheSands","optional":true,"text":["Enter _The Oasis","Enter _The Sand Pit","Kill *Shakari*"],"rewards":{"passive":{"num":1,"quest":"#Queen of the Sands#","wp":"/The Vastiri Desert/","text":["Enter _The Oasis","Enter _The Sand Pit","Kill *Shakari*"]}}},{"id":"Foothills","minLvl":56,"text":"Enter _The Foothills_","direction":"N"},{"id":"Basilisk","minLvl":56,"text":"Enter _Boiling Lake_. Defeat *Basilisk*. Pick up #Basilisk Acid#. Go to _Town_"},{"id":"Tunnel","minLvl":56,"text":"WP to /The Foothills/. Enter _The Tunnel_"},{"id":"TunnelTrial","text":"Complete the =Trial= in _The Tunnel_","rewards":{"trial":{"name":"=Trial of Lingering Pain=","wp":"/The Tunnel/","text":"Trial is in _The Tunnel"}}},{"id":"Quarry","minLvl":57,"text":"Enter _The Quarry_","hasWp":true},{"id":"RulerOfHighgate","optional":true,"minLvl":57,"text":["Enter _Shrine of the Winds_","Defeat *Garukhan*"],"direction":"W","rewards":{"passive":{"num":1,"quest":"#The Ruler of Highgate#","wp":"/The Quarry/","text":["Enter _Shrine of the Winds_","Defeat *Garukhan*"]}}},{"id":"Refinery","minLvl":57,"text":"Enter _The Refinery_. Defeat *General Adus*. Pick up #Thartan Powder#. Go to _Town_","direction":"E"},{"id":"Quarry2","text":"WP to /The Quarry/. Speak to Sin"},{"id":"Belly2","minLvl":57,"text":"Enter _Belly of the Beast_. Enter _Rotting Core_. Enter _Black Heart_"},{"id":"TrinityBits","minLvl":58,"text":"Defeat *Maligaro*. Defeat *Doedre*. Defeat *Shavronne*"},{"id":"Trinity","minLvl":58,"text":"Defeat *The Depraved Trinity*"}]},"10":{"title":"Act 10","tasks":[{"id":"Bannon","minLvl":58,"text":"Enter _Cathedral Rooftop_. Enter _Cathedral Apex_. Save Bannon","direction":"NW"},{"id":"RavagedSquare","minLvl":58,"text":"Go to _Cathedral Rooftop_. Go to _Ravaged Square_. Pick up /WP/","hasWp":true,"direction":"SE"},{"id":"OssuaryTrial","minLvl":61,"optional":true,"text":"Go to _The Ossuary_ (next to /WP/). Complete the =Trial=","rewards":{"trial":{"name":"=Trial of Stinging Doubt=","wp":"/The Ravaged Square/","text":"Trial is in _The Ossuary_ (next to /WP/)"}}},{"id":"TorchedCourts","minLvl":59,"text":"Go to _Torched Courts_. Go to _Desecrated Chambers_","hasWp":true},{"id":"Avarius","minLvl":59,"text":"Enter _Sanctum of Innocence_. Defeat *High Templar Avarius*. Go to _Town_"},{"id":"Vilenta","minLvl":60,"optional":true,"text":["WP to /Ravaged Square_","Go to _Control Blocks_","Enter _Arena_","Kill *Vilenta*","Go to _Town"],"rewards":{"passive":{"num":1,"quest":"#Vilenta\'s Vengeance#","wp":"/Ravaged Square/","text":["Go to _Control Blocks_","Enter _Arena_","Kill *Vilenta*"]}}},{"id":"LabReminder","optional":true,"text":"Complete labyrinths before resistance penalty"},{"id":"OpenCanals","text":"WP to /Ravaged Square/. Talk to Innocence to open _Canals_","direction":"N"},{"id":"Canals","minLvl":60,"text":"Enter _Canals_. Enter _The Feeding Trough_"},{"id":"Kitava2","minLvl":61,"text":"Enter _Altar of Hunger_. Kill *Kitava*","rewards":{"passive":{"num":2,"quest":"#An End to Hunger#","wp":"/The Ravaged Square/","text":["Enter _Canals_","Enter _The Feeding Trough_","Enter _Altar of Hunger_","Kill *Kitava*"]}}}]},"maps":{"title":"Maps","tasks":[{"id":"PiercingTruth","rewards":{"trial":{"name":"=Trial of Piercing Truth="}}},{"id":"BurningRage","rewards":{"trial":{"name":"=Trial of Burning Rage="}}},{"id":"SwirlingFear","rewards":{"trial":{"name":"=Trial of Swirling Fear="}}},{"id":"LingerIngPain","rewards":{"trial":{"name":"=Trial of Lingering Pain="}}},{"id":"CripplingGrief","rewards":{"trial":{"name":"=Trial of Crippling Grief="}}},{"id":"StingingDoubt","rewards":{"trial":{"name":"=Trial of Stinging Doubt="}}}]}}}')}},[[231,1,2]]]);
//# sourceMappingURL=app.abf2c717.chunk.js.map