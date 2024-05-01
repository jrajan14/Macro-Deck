"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2448],{2448:(q,b,a)=>{a.r(b),a.d(b,{DeckPageModule:()=>L});var u=a(177),P=a(4341),l=a(8974),f=a(8160),p=a(467),_=a(6123),W=a(5312),e=a(4438),D=a(1969),C=a(7709),M=a(6824),y=a(8359),v=a(5928),S=a(1083);const T=["widgetsWrapper"],G=()=>[];function I(i,o){if(1&i&&(e.j41(0,"div",3),e.nrm(1,"app-widget-content",4),e.k0s()),2&i){const s=o.index,t=e.XpG();e.Y8G("ngStyle",t.getWidgetStyle(s)),e.R7$(),e.Y8G("ngStyle",t.getWidgetContentStyle())("data",t.getWidgetFromIndex(s))}}let m=(()=>{var i;class o{constructor(t,n){this.macroDeckService=t,this.applicationRef=n,this.subscription=new y.yU,this.buttonSize=0,this.widgetSpacingPoints=0,this.wrapperWidth=0,this.wrapperHeight=0,this.wrapperPaddingX=0,this.wrapperPaddingY=0}ngOnDestroy(){this.subscription.unsubscribe()}ngAfterContentInit(){this.subscription.add(this.macroDeckService.configUpdate.subscribe(()=>{this.calculateWidgetSize(),this.applicationRef.tick()})),window.addEventListener("resize",()=>{setTimeout(()=>{this.calculateWidgetSize(),this.applicationRef.tick()},100)},!1),setTimeout(()=>{this.calculateWidgetSize()},1e3)}calculateWidgetSize(){var t,n,r,c;if(null==this.wrapperElement)return;const d=window.getComputedStyle(this.wrapperElement.nativeElement,null);this.wrapperPaddingX=parseInt(d.getPropertyValue("padding-left"))+parseInt(d.getPropertyValue("padding-right")),this.wrapperPaddingY=parseInt(d.getPropertyValue("padding-top"))+parseInt(d.getPropertyValue("padding-bottom")),this.wrapperWidth=(null!==(t=null===(n=this.wrapperElement)||void 0===n?void 0:n.nativeElement.offsetWidth)&&void 0!==t?t:0)-this.wrapperPaddingX,this.wrapperHeight=(null!==(r=null===(c=this.wrapperElement)||void 0===c?void 0:c.nativeElement.offsetHeight)&&void 0!==r?r:0)-this.wrapperPaddingY,this.buttonSize=Math.min(this.wrapperWidth/this.macroDeckService.columns,this.wrapperHeight/this.macroDeckService.rows),this.widgetSpacingPoints=this.macroDeckService.buttonSpacing/100*this.buttonSize*72/96/2,o.borderRadiusPoints=this.macroDeckService.buttonRadius/100*this.buttonSize*72/96/2}countTotalWidgets(){return this.macroDeckService.rows*this.macroDeckService.columns}getWidgetStyle(t){var n,r;const c=Math.trunc(t/this.macroDeckService.columns),d=Math.trunc(t%this.macroDeckService.columns),g=this.macroDeckService.widgets.find(k=>k.row==c&&k.column==d);return{width:this.buttonSize*(null!==(n=null==g?void 0:g.colSpan)&&void 0!==n?n:1)+"px",height:this.buttonSize*(null!==(r=null==g?void 0:g.rowSpan)&&void 0!==r?r:1)+"px",position:"absolute",top:this.wrapperHeight/2-this.macroDeckService.rows*this.buttonSize/2+c*this.buttonSize+"px",left:this.wrapperWidth/2-this.macroDeckService.columns*this.buttonSize/2+d*this.buttonSize+"px"}}getWidgetContentStyle(){return{margin:this.widgetSpacingPoints+"pt"}}getWidgetFromIndex(t){const n=Math.trunc(t/this.macroDeckService.columns),r=Math.trunc(t%this.macroDeckService.columns);let c=this.macroDeckService.widgets.find(d=>d.row==n&&d.column==r);return c||(c={backgroundColorHex:"#232323",colSpan:1,column:r,row:n,rowSpan:1,widgetContent:void 0,widgetContentType:v.G.empty}),c}}return(i=o).borderRadiusPoints=0,i.\u0275fac=function(t){return new(t||i)(e.rXU(S.j),e.rXU(e.o8S))},i.\u0275cmp=e.VBU({type:i,selectors:[["app-widget-grid"]],viewQuery:function(t,n){if(1&t&&e.GBs(T,5),2&t){let r;e.mGM(r=e.lsd())&&(n.wrapperElement=r.first)}},hostBindings:function(t,n){1&t&&e.bIt("resize",function(c){return n.calculateWidgetSize(c)},!1,e.tSv)},decls:3,vars:2,consts:[["widgetsWrapper",""],[1,"widgets-wrapper","ion-color-light"],["class","widget",3,"ngStyle",4,"ngFor","ngForOf"],[1,"widget",3,"ngStyle"],[1,"widget-content-wrapper",3,"ngStyle","data"]],template:function(t,n){1&t&&(e.j41(0,"div",1,0),e.DNE(2,I,2,3,"div",2),e.k0s()),2&t&&(e.R7$(2),e.Y8G("ngForOf",e.lJ4(1,G).constructor(n.countTotalWidgets())))},styles:[".widgets-wrapper[_ngcontent-%COMP%]{width:inherit;height:inherit;margin:0;padding:0;position:relative;z-index:0;border-radius:inherit}.widget[_ngcontent-%COMP%]{display:flex;overflow:visible;touch-action:none}.widget-content-wrapper[_ngcontent-%COMP%]{display:flex;position:absolute;align-items:stretch;top:0;bottom:0;left:0;right:0;overflow:hidden;transition:all .2s ease-out;cursor:pointer;border-radius:inherit}.widget-content-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:1}"]}),o})();function B(i,o){if(1&i){const s=e.RV6();e.j41(0,"ion-item",2),e.bIt("click",function(){e.eBV(s);const n=e.XpG();return e.Njj(n.openFullscreen())}),e.nrm(1,"ion-icon",9),e.j41(2,"ion-label"),e.EFF(3,"Open full screen"),e.k0s()()}2&i&&e.Y8G("button",!0)}function z(i,o){if(1&i){const s=e.RV6();e.j41(0,"ion-item",2),e.bIt("click",function(){e.eBV(s);const n=e.XpG();return e.Njj(n.close())}),e.nrm(1,"ion-icon",10),e.j41(2,"ion-label"),e.EFF(3,"Close connection"),e.k0s()()}2&i&&e.Y8G("button",!0)}function R(i,o){1&i&&(e.j41(0,"ion-fab",11)(1,"ion-menu-toggle")(2,"ion-fab-button",12),e.nrm(3,"ion-icon",13),e.k0s()()())}const E=[{path:"",component:(()=>{var i;class o{constructor(t,n,r,c,d){this.websocketService=t,this.router=n,this.modalController=r,this.settingsService=c,this.diagnosticsService=d,this.showMenuButton=!0,this.clientId="",this.version="",this.environment=W.c}ngAfterViewInit(){var t=this;return(0,p.A)(function*(){t.websocketService.isConnected||(yield t.router.navigate([""],{replaceUrl:!0})),t.clientId=yield t.settingsService.getClientId(),t.version=yield t.diagnosticsService.getVersion(),yield t.loadSettings()})()}close(){var t=this;return(0,p.A)(function*(){t.websocketService.close()})()}openSettings(){var t=this;return(0,p.A)(function*(){const n=yield t.modalController.create({component:_.M});yield n.present(),yield n.onWillDismiss(),yield t.loadSettings()})()}openFullscreen(){const t=document.documentElement;t.requestFullscreen&&t.requestFullscreen().then()}loadSettings(){var t=this;return(0,p.A)(function*(){t.showMenuButton=yield t.settingsService.getShowMenuButton()})()}}return(i=o).\u0275fac=function(t){return new(t||i)(e.rXU(D.H),e.rXU(f.Ix),e.rXU(l.W3),e.rXU(C.h),e.rXU(M.T))},i.\u0275cmp=e.VBU({type:i,selectors:[["app-deck"]],decls:21,vars:9,consts:[["type","reveal","content-id","main-content"],[3,"button","click",4,"ngIf"],[3,"click","button"],["slot","start","name","settings","size","large"],[1,"ms-3"],["id","main-content",1,"ion-page"],[3,"scrollY","scrollX","fullscreen"],[1,"widgets-grid-container"],["class","fab-menu","slot","fixed","vertical","top","horizontal","start",4,"ngIf"],["slot","start","name","expand","size","large"],["color","danger","slot","start","name","close","size","large"],["slot","fixed","vertical","top","horizontal","start",1,"fab-menu"],["size","small"],["name","menu-outline"]],template:function(t,n){1&t&&(e.j41(0,"ion-menu",0)(1,"ion-header")(2,"ion-toolbar")(3,"ion-title"),e.EFF(4,"Macro Deck"),e.k0s()()(),e.j41(5,"ion-content")(6,"ion-list")(7,"ion-menu-toggle"),e.DNE(8,B,4,1,"ion-item",1),e.j41(9,"ion-item",2),e.bIt("click",function(){return n.openSettings()}),e.nrm(10,"ion-icon",3),e.j41(11,"ion-label"),e.EFF(12,"Settings"),e.k0s()(),e.DNE(13,z,4,1,"ion-item",1),e.k0s()()(),e.j41(14,"ion-toolbar")(15,"ion-text",4),e.EFF(16),e.k0s()()(),e.j41(17,"div",5)(18,"ion-content",6),e.nrm(19,"app-widget-grid",7),e.DNE(20,R,4,0,"ion-fab",8),e.k0s()()),2&t&&(e.R7$(8),e.Y8G("ngIf",n.environment.webVersion),e.R7$(),e.Y8G("button",!0),e.R7$(4),e.Y8G("ngIf",!n.environment.webVersion),e.R7$(3),e.Lme("",n.version," | Client Id: ",n.clientId,""),e.R7$(2),e.Y8G("scrollY",!1)("scrollX",!1)("fullscreen",!0),e.R7$(2),e.Y8G("ngIf",n.showMenuButton))},dependencies:[u.bT,l.W9,l.Q8,l.YW,l.eU,l.iq,l.uz,l.he,l.nf,l.oS,l.cA,l.IO,l.BC,l.ai,m],styles:[".widgets-grid-container[_ngcontent-%COMP%]{width:100%;height:100%}.fab-menu[_ngcontent-%COMP%]{opacity:.9}"]}),o})()}];let j=(()=>{var i;class o{}return(i=o).\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.$C({type:i}),i.\u0275inj=e.G2t({imports:[f.iI.forChild(E),f.iI]}),o})();var h=a(3031),F=a(345);const O=(i,o)=>({"border-radius":i,border:o,padding:"2pt"});function x(i,o){if(1&i&&e.nrm(0,"img",4),2&i){const s=e.XpG();e.Y8G("src",s.foregroundImage,e.B4B)}}function U(i,o){if(1&i&&e.nrm(0,"img",5),2&i){const s=e.XpG();e.Y8G("src",s.iconImage,e.B4B)}}let Y=(()=>{var i;class o{constructor(t,n,r,c){this.renderer=t,this.macroDeckService=n,this.sanitizer=r,this.settingsService=c,this.widgetGridComponent=m,this.longPressTrigger=!1,this.pressed=!1}updateWidget(t){this.widget=t;const n=t.widgetContent;this.foregroundImage=null!=n&&n.labelBase64?this.sanitizer.bypassSecurityTrustResourceUrl("data:image/jpg;base64,"+(null==n?void 0:n.labelBase64)):void 0,this.iconImage=null!=n&&n.iconBase64?this.sanitizer.bypassSecurityTrustResourceUrl("data:image/jpg;base64,"+(null==n?void 0:n.iconBase64)):void 0,this.backgroundStyle={"background-color":t.backgroundColorHex},this.borderColor=t.backgroundColorHex?this.adjustColor(t.backgroundColorHex,-40):void 0}onMouseUp(t){if(this.pressed){if(this.pressed=!1,this.setClass(t.currentTarget,"pressed",!1),this.setClass(t.currentTarget,"release-transition",!0),this.longPressTrigger){if(void 0===this.widget)return;this.emitInteraction(h.Z.ButtonLongPressRelease)}else this.emitInteraction(h.Z.ButtonShortPressRelease);this.longPressTrigger=!1,clearTimeout(this.longPressTimeout)}}onMouseLeave(t){var n=this;return(0,p.A)(function*(){n.onMouseUp(t)})()}onMouseDown(t){var n=this;return(0,p.A)(function*(){n.setClass(t.currentTarget,"pressed",!0),n.setClass(t.currentTarget,"release-transition",!1),n.emitInteraction(h.Z.ButtonPress),n.pressed=!0;let r=yield n.settingsService.getButtonLongPressDelay();setTimeout(()=>{}),n.longPressTimeout=setTimeout(()=>{n.longPressTrigger=!0,n.emitInteraction(h.Z.ButtonLongPress)},r)})()}setClass(t,n,r){const c=t.classList.contains(n);r&&!c?this.renderer.addClass(t,n):!r&&c&&this.renderer.removeClass(t,n)}adjustColor(t,n){return"#"+t.replace(/^#/,"").replace(/../g,r=>("0"+Math.min(255,Math.max(0,parseInt(r,16)+n)).toString(16)).substr(-2))}emitInteraction(t){void 0!==this.widget&&this.macroDeckService.interaction.emit({widget:this.widget,widgetInteractionType:t})}}return(i=o).\u0275fac=function(t){return new(t||i)(e.rXU(e.sFG),e.rXU(S.j),e.rXU(F.up),e.rXU(C.h))},i.\u0275cmp=e.VBU({type:i,selectors:[["app-button-widget"]],decls:4,vars:7,consts:[[1,"button-widget-wrapper",3,"down","up","mouseleave","ngStyle"],["class","foreground",3,"src",4,"ngIf"],["class","icon",3,"src",4,"ngIf"],[1,"background",3,"ngStyle"],[1,"foreground",3,"src"],[1,"icon",3,"src"]],template:function(t,n){1&t&&(e.j41(0,"div",0),e.bIt("down",function(c){return n.onMouseDown(c)})("up",function(c){return n.onMouseUp(c)})("mouseleave",function(c){return n.onMouseLeave(c)}),e.DNE(1,x,1,1,"img",1)(2,U,1,1,"img",2),e.nrm(3,"div",3),e.k0s()),2&t&&(e.Y8G("ngStyle",e.l_i(4,O,n.widgetGridComponent.borderRadiusPoints+"pt","2pt solid "+n.borderColor)),e.R7$(),e.Y8G("ngIf",n.foregroundImage),e.R7$(),e.Y8G("ngIf",n.iconImage),e.R7$(),e.Y8G("ngStyle",n.backgroundStyle))},dependencies:[u.B3,u.bT],styles:[".button-widget-wrapper[_ngcontent-%COMP%]{width:100%;height:100%;position:relative;overflow:hidden;border-radius:inherit;transition:all .01s linear;box-sizing:border-box;transform:translateZ(0)}.foreground[_ngcontent-%COMP%], .icon[_ngcontent-%COMP%], .background[_ngcontent-%COMP%]{background-size:cover;background-repeat:no-repeat;background-position:center;position:absolute;height:100%;width:100%;object-fit:fill;top:0;right:0;bottom:0;left:0;transition:background-color .3s ease-out;transform:translateZ(0);-webkit-backface-visibility:hidden;-moz-backface-visibility:hidden;-ms-backface-visibility:hidden}.background[_ngcontent-%COMP%]{z-index:1}.icon[_ngcontent-%COMP%]{z-index:2}.foreground[_ngcontent-%COMP%]{z-index:3}.pressed[_ngcontent-%COMP%]{transform:scale(.9)}.release-transition[_ngcontent-%COMP%]{transition:transform .4s linear}"]}),o})();const X=i=>({"border-radius":i});let $=(()=>{var i;class o{constructor(){this.WidgetGridComponent=m}updateWidget(t){this.backgroundStyle={"background-color":t.backgroundColorHex}}}return(i=o).\u0275fac=function(t){return new(t||i)},i.\u0275cmp=e.VBU({type:i,selectors:[["app-empty-widget"]],decls:2,vars:4,consts:[[1,"empty-widget-wrapper",3,"ngStyle"],[1,"background",3,"ngStyle"]],template:function(t,n){1&t&&(e.j41(0,"div",0),e.nrm(1,"div",1),e.k0s()),2&t&&(e.Y8G("ngStyle",e.eq3(2,X,n.WidgetGridComponent.borderRadiusPoints+"pt")),e.R7$(),e.Y8G("ngStyle",n.backgroundStyle))},dependencies:[u.B3],styles:[".empty-widget-wrapper[_ngcontent-%COMP%]{width:100%;height:100%;position:relative;overflow:hidden;border-radius:inherit;transition:all .1s ease-out}.background[_ngcontent-%COMP%]{background-size:cover;background-repeat:no-repeat;background-position:center;position:absolute;top:0;right:0;bottom:0;left:0}.background[_ngcontent-%COMP%]{z-index:1}"]}),o})();const V=["contentRef"];function H(i,o){}let A=(()=>{var i;class o{set data(t){this.updateContent(t)}constructor(){this.subscription=new y.yU,this.componentCreated=!1}updateContent(t){var n;if((null==t?void 0:t.widgetContentType)!==this.currentContentType&&(null===(n=this.vcr)||void 0===n||n.clear(),this.componentCreated=!1),void 0!==this.vcr&&void 0!==t){switch(this.currentContentType=t.widgetContentType,t.widgetContentType){case v.G.empty:this.componentCreated||(this.ref=this.vcr.createComponent($)),this.ref.instance.updateWidget(t);break;case v.G.button:this.componentCreated||(this.ref=this.vcr.createComponent(Y)),this.ref.instance.updateWidget(t)}this.componentCreated=!0,this.ref.location.nativeElement.setAttribute("class","flex-grow-1")}}ngOnDestroy(){this.subscription.unsubscribe()}}return(i=o).\u0275fac=function(t){return new(t||i)},i.\u0275cmp=e.VBU({type:i,selectors:[["app-widget-content"]],viewQuery:function(t,n){if(1&t&&e.GBs(V,5,e.c1b),2&t){let r;e.mGM(r=e.lsd())&&(n.vcr=r.first)}},inputs:{data:"data"},decls:2,vars:0,consts:[["contentRef",""]],template:function(t,n){1&t&&e.DNE(0,H,0,0,"ng-template",null,0,e.C5r)}}),o})(),L=(()=>{var i;class o{}return(i=o).\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.$C({type:i}),i.\u0275inj=e.G2t({imports:[u.MD,P.YN,l.bv,j]}),o})();e.wjB(m,[u.Sq,u.B3,A],[])}}]);