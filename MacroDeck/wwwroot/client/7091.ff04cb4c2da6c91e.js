"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7091],{7091:(W,_,a)=>{a.r(_),a.d(_,{HomePageModule:()=>z});var u=a(6814),m=a(95),s=a(1929),g=a(5877),d=a(5861),h=a(553),f=a(2726),v=a(4373),n=a(9468),C=a(3660);const Z=(0,f.fo)("App",{web:()=>a.e(2912).then(a.bind(a,2912)).then(o=>new o.AppWeb)});let T=(()=>{var o;class c{constructor(){}getVersion(){return(0,d.Z)(function*(){return yield Z.getInfo().then(e=>e.version)})()}}return(o=c).\u0275fac=function(e){return new(e||o)},o.\u0275prov=n.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),c})(),y=(()=>{var o;class c{constructor(e,t){this.modalController=e,this.alertController=t,this.id="",this.host="",this.port=8191,this.useSsl=!1}cancel(){var e=this;return(0,d.Z)(function*(){yield e.modalController.dismiss(null,"cancel")})()}confirm(){var e=this;return(0,d.Z)(function*(){if(!(yield e.validate()))return;let t={host:e.host,id:e.id,name:void 0===e.name||0===e.name.length?e.host:e.name,port:e.port,ssl:e.useSsl};console.log(t),yield e.modalController.dismiss(t,"confirm")})()}validate(){var e=this;return(0,d.Z)(function*(){return void 0===e.host||0===e.host.length?(yield e.showErrorAlert("The IP Address / Hostname is required."),!1):null!=e.port||(yield e.showErrorAlert("The port is required."),!1)})()}showErrorAlert(e){var t=this;return(0,d.Z)(function*(){yield(yield t.alertController.create({subHeader:e,buttons:[{text:"Ok"}]})).present()})()}}return(o=c).\u0275fac=function(e){return new(e||o)(n.Y36(s.IN),n.Y36(s.Br))},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-add-connection-modal"]],decls:26,vars:6,consts:[["slot","start"],[3,"click"],["slot","end"],[3,"strong","click"],[1,"ion-padding"],["labelPlacement","floating","type","text",3,"placeholder","ngModel","ngModelChange"],["slot","label"],[1,"mt-2"],["labelPlacement","floating","type","text",3,"ngModel","ngModelChange"],["min","1","labelPlacement","floating","type","number",3,"ngModel","ngModelChange"],[3,"ngModel","ngModelChange"]],template:function(e,t){1&e&&(n.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0)(3,"ion-button",1),n.NdJ("click",function(){return t.cancel()}),n._uU(4,"Cancel"),n.qZA()(),n.TgZ(5,"ion-title"),n._uU(6,"Add connection"),n.qZA(),n.TgZ(7,"ion-buttons",2)(8,"ion-button",3),n.NdJ("click",function(){return t.confirm()}),n._uU(9,"Confirm"),n.qZA()()()(),n.TgZ(10,"ion-content",4)(11,"ion-item")(12,"ion-input",5),n.NdJ("ngModelChange",function(r){return t.name=r}),n.TgZ(13,"div",6),n._uU(14,"Name"),n.qZA()()(),n.TgZ(15,"ion-item",7)(16,"ion-input",8),n.NdJ("ngModelChange",function(r){return t.host=r}),n.TgZ(17,"div",6),n._uU(18,"IP Address / Hostname"),n.qZA()()(),n.TgZ(19,"ion-item",7)(20,"ion-input",9),n.NdJ("ngModelChange",function(r){return t.port=r}),n.TgZ(21,"div",6),n._uU(22,"Port"),n.qZA()()(),n.TgZ(23,"ion-item",7)(24,"ion-toggle",10),n.NdJ("ngModelChange",function(r){return t.useSsl=r}),n._uU(25,"Use SSL"),n.qZA()()()),2&e&&(n.xp6(8),n.Q6J("strong",!0),n.xp6(4),n.Q6J("placeholder",t.host)("ngModel",t.name),n.xp6(4),n.Q6J("ngModel",t.host),n.xp6(4),n.Q6J("ngModel",t.port),n.xp6(4),n.Q6J("ngModel",t.useSsl))},dependencies:[m.JJ,m.On,s.YG,s.Sm,s.W2,s.Gu,s.pK,s.Ie,s.wd,s.ho,s.sr,s.w,s.as,s.j9,s.yf]}),c})();var A=a(3593),b=a(5015),P=a(1414);function M(o,c){if(1&o){const i=n.EpF();n.TgZ(0,"ion-list",4)(1,"ion-item",5),n.NdJ("click",function(){const l=n.CHM(i).$implicit,r=n.oxw(2);return n.KtG(r.connect(l))}),n._UZ(2,"ion-icon",6),n.TgZ(3,"ion-label")(4,"h3"),n._uU(5),n.qZA(),n.TgZ(6,"span"),n._uU(7),n.qZA()()()()}if(2&o){const i=c.$implicit;n.xp6(5),n.Oqu(i.name),n.xp6(2),n.AsE("",i.host,":",i.port,"")}}function S(o,c){if(1&o&&(n.TgZ(0,"ion-item-group")(1,"ion-item-divider")(2,"ion-label"),n._uU(3,"Discovered"),n.qZA()(),n.YNc(4,M,8,3,"ion-list",3),n.qZA()),2&o){const i=n.oxw();n.xp6(4),n.Q6J("ngForOf",i.savedConnections)}}function x(o,c){1&o&&n._UZ(0,"ion-icon",17)}function k(o,c){if(1&o){const i=n.EpF();n.TgZ(0,"ion-item-sliding")(1,"ion-item",9),n.NdJ("click",function(){const l=n.CHM(i).$implicit,r=n.oxw(3);return n.KtG(r.connect(l))}),n._UZ(2,"ion-icon",10),n.TgZ(3,"ion-label")(4,"h3"),n._uU(5),n.qZA(),n.TgZ(6,"span"),n.YNc(7,x,1,0,"ion-icon",11),n._uU(8),n.qZA()()(),n.TgZ(9,"ion-item-options",12)(10,"ion-item-option",13),n.NdJ("click",function(){const l=n.CHM(i).$implicit,r=n.oxw(3);return n.KtG(r.editConnection(l))}),n._UZ(11,"ion-icon",14),n.qZA(),n.TgZ(12,"ion-item-option",15),n.NdJ("click",function(){const l=n.CHM(i).$implicit,r=n.oxw(3);return n.KtG(r.deleteConnection(l))}),n._UZ(13,"ion-icon",16),n.qZA()()()}if(2&o){const i=c.$implicit;n.xp6(5),n.Oqu(i.name),n.xp6(2),n.Q6J("ngIf",i.ssl),n.xp6(1),n.AsE(" ",i.host,":",i.port," ")}}function I(o,c){if(1&o&&(n.TgZ(0,"ion-list",4),n.YNc(1,k,14,4,"ion-item-sliding",8),n.qZA()),2&o){const i=n.oxw(2);n.xp6(1),n.Q6J("ngForOf",i.savedConnections)}}function J(o,c){if(1&o&&(n.TgZ(0,"ion-item-group")(1,"ion-item-divider")(2,"ion-label"),n._uU(3,"Saved connections"),n.qZA()(),n.YNc(4,I,2,1,"ion-list",7),n.qZA()),2&o){const i=n.oxw(),e=n.MAs(5);n.xp6(4),n.Q6J("ngIf",i.savedConnections.length>0)("ngIfElse",e)}}function U(o,c){if(1&o){const i=n.EpF();n.TgZ(0,"ion-fab",18)(1,"ion-fab-button",19),n.NdJ("click",function(){n.CHM(i);const t=n.oxw();return n.KtG(t.openAddConnectionModal())}),n._UZ(2,"ion-icon",20),n.qZA()()}}function N(o,c){if(1&o){const i=n.EpF();n.TgZ(0,"div",21)(1,"span",22),n._uU(2,"You have set up no saved connections"),n.qZA(),n.TgZ(3,"div",23)(4,"ion-button",24),n.NdJ("click",function(){n.CHM(i);const t=n.oxw();return n.KtG(t.openAddConnectionModal())}),n._UZ(5,"ion-icon",20),n.TgZ(6,"ion-label"),n._uU(7,"Add connection"),n.qZA()()()()}}let H=(()=>{var o;class c{constructor(e,t,l,r,p){this.connectionService=e,this.modalController=t,this.alertController=l,this.websocketService=r,this.wakeLockService=p,this.discoveredConnections=[],this.savedConnections=[],this.savedConnectionsInitialized=!1}ngOnInit(){var e=this;return(0,d.Z)(function*(){yield e.loadConnections(),e.savedConnectionsInitialized=!0})()}loadConnections(){var e=this;return(0,d.Z)(function*(){var t;e.savedConnections=null!==(t=yield e.connectionService.getConnections())&&void 0!==t?t:[]})()}openAddConnectionModal(e){var t=this;return(0,d.Z)(function*(){var l,r;const p=yield t.modalController.create({component:y,componentProps:{id:null==e?void 0:e.id,name:null==e?void 0:e.name,host:null==e?void 0:e.host,port:null!==(l=null==e?void 0:e.port)&&void 0!==l?l:8191,useSsl:null!==(r=null==e?void 0:e.ssl)&&void 0!==r&&r}});yield p.present();const{data:E,role:G}=yield p.onWillDismiss();"confirm"===G&&(yield t.connectionService.addUpdateConnection(E),yield t.loadConnections())})()}deleteConnection(e){var t=this;return(0,d.Z)(function*(){var r;yield(yield t.alertController.create({subHeader:"Delete the connection ".concat(e.name,"?"),buttons:[{text:"No",role:"cancel"},{text:"Yes",role:"confirm",handler:(r=(0,d.Z)(function*(){yield t.connectionService.deleteConnection(e.id),yield t.loadConnections()}),function(){return r.apply(this,arguments)})}]})).present()})()}editConnection(e){var t=this;return(0,d.Z)(function*(){yield t.openAddConnectionModal(e)})()}connect(e){var t=this;return(0,d.Z)(function*(){yield t.wakeLockService.updateWakeLock(),yield t.websocketService.connect(e.host,e.port,e.ssl)})()}}return(o=c).\u0275fac=function(e){return new(e||o)(n.Y36(A.M),n.Y36(s.IN),n.Y36(s.Br),n.Y36(b.i),n.Y36(P.$))},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-connections"]],decls:6,vars:3,consts:[[4,"ngIf"],["slot","fixed","vertical","bottom","horizontal","end",4,"ngIf"],["noConnections",""],["lines","full",4,"ngFor","ngForOf"],["lines","full"],["color","success","button","true",3,"click"],["name","flash","slot","start"],["lines","full",4,"ngIf","ngIfElse"],[4,"ngFor","ngForOf"],["button","true",3,"click"],["name","star","slot","start"],["aria-hidden","true","title","Secure connection","class","text-success","name","lock-closed-outline",4,"ngIf"],["side","end"],["color","warning",3,"click"],["slot","icon-only","name","ellipsis-horizontal"],["color","danger",3,"click"],["slot","icon-only","name","trash"],["aria-hidden","true","title","Secure connection","name","lock-closed-outline",1,"text-success"],["slot","fixed","vertical","bottom","horizontal","end"],["color","success",3,"click"],["name","add"],[1,"ion-padding","d-flex","flex-column"],[1,"d-block","text-center"],[1,"justify-content-center","d-flex","mt-3"],["id","add-connection-button",3,"click"]],template:function(e,t){1&e&&(n.TgZ(0,"ion-content"),n.YNc(1,S,5,1,"ion-item-group",0),n.YNc(2,J,5,2,"ion-item-group",0),n.YNc(3,U,3,0,"ion-fab",1),n.qZA(),n.YNc(4,N,8,0,"ng-template",null,2,n.W1O)),2&e&&(n.xp6(1),n.Q6J("ngIf",t.discoveredConnections.length>0),n.xp6(1),n.Q6J("ngIf",t.savedConnectionsInitialized),n.xp6(1),n.Q6J("ngIf",t.savedConnections.length>0))},dependencies:[u.sg,u.O5,s.YG,s.W2,s.IJ,s.W4,s.gu,s.Ie,s.rH,s.Ub,s.u8,s.IK,s.td,s.Q$,s.q_]}),c})(),Y=(()=>{var o;class c{constructor(){}ngOnInit(){}}return(o=c).\u0275fac=function(e){return new(e||o)},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-splashscreen"]],decls:2,vars:0,consts:[[1,"d-flex","w-100","h-100","justify-content-center","align-items-center","p-5"],[1,"icon"]],template:function(e,t){1&e&&(n.TgZ(0,"div",0),n._UZ(1,"div",1),n.qZA())},styles:[".icon[_ngcontent-%COMP%]{background-image:url(/assets/icon.png);width:100%;height:100%;background-size:contain;background-repeat:no-repeat;background-position:center;transform:scale(.5);animation:_ngcontent-%COMP%_splashAnimation .8s ease .3s 1 normal forwards}@keyframes _ngcontent-%COMP%_splashAnimation{10%{transform:scale(.5)}30%{transform:scale(.4)}60%{opacity:100}to{transform:scale(1);opacity:0}}"]}),c})();const w=function(o){return{"opacity-0":o}};function O(o,c){if(1&o&&n._UZ(0,"app-splashscreen",4),2&o){const i=n.oxw();n.Q6J("ngClass",n.VKq(1,w,!i.splashScreenVisible))}}const F=[{path:"",component:(()=>{var o;class c{constructor(e,t,l){this.settingsService=e,this.diagnosticService=t,this.modalController=l,this.splashScreen=!0,this.splashScreenVisible=!0,this.environment=h.N}ngOnInit(){var e=this;return(0,d.Z)(function*(){e.clientId=yield e.settingsService.getClientId(),setTimeout(()=>{e.splashScreenVisible=!1,setTimeout(()=>{e.splashScreen=!1},300)},1e3),f.dV.isNativePlatform()?e.diagnosticService.getVersion().then(t=>{e.version="v".concat(t)}):e.version="Web Version"})()}openSettings(){var e=this;return(0,d.Z)(function*(){yield(yield e.modalController.create({component:v.g})).present()})()}}return(o=c).\u0275fac=function(e){return new(e||o)(n.Y36(C.g),n.Y36(T),n.Y36(s.IN))},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-home"]],decls:14,vars:3,consts:[["class","splashscreen",3,"ngClass",4,"ngIf"],["slot","primary"],[3,"click"],[1,"ms-3"],[1,"splashscreen",3,"ngClass"]],template:function(e,t){1&e&&(n.YNc(0,O,1,3,"app-splashscreen",0),n.TgZ(1,"ion-header")(2,"ion-toolbar")(3,"ion-title"),n._uU(4,"Macro Deck"),n.qZA(),n.TgZ(5,"ion-buttons",1)(6,"ion-button",2),n.NdJ("click",function(){return t.openSettings()}),n._uU(7,"Settings"),n.qZA()()()(),n.TgZ(8,"ion-content"),n._UZ(9,"app-connections"),n.qZA(),n.TgZ(10,"ion-footer")(11,"ion-toolbar")(12,"ion-text",3),n._uU(13),n.qZA()()()),2&e&&(n.Q6J("ngIf",t.splashScreen),n.xp6(13),n.AsE("",t.version," | Client Id: ",t.clientId,""))},dependencies:[u.mk,u.O5,s.YG,s.Sm,s.W2,s.fr,s.Gu,s.yW,s.wd,s.sr,H,Y],styles:[".splashscreen[_ngcontent-%COMP%]{position:absolute;top:0;right:0;bottom:0;left:0;background-color:var(--macro-deck-bg);z-index:100;opacity:100%;transition:opacity .3s ease-out}"]}),c})()}];let Q=(()=>{var o;class c{}return(o=c).\u0275fac=function(e){return new(e||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[g.Bz.forChild(F),g.Bz]}),c})();var q=a(7937),$=a(7911);let z=(()=>{var o;class c{}return(o=c).\u0275fac=function(e){return new(e||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[u.ez,m.u5,s.Pc,Q,q.a,$.WebHomePageModule]}),c})()}}]);