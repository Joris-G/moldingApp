"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8184],{5681:(D,E,r)=>{r.d(E,{Q:()=>T});var t=r(4147),P=r(2340),i=r(5e3),b=r(7704),p=r(9928),A=r(2361);const C=["menu"];function w(f,y){if(1&f){const d=i.EpF();i.TgZ(0,"ion-content")(1,"ion-list")(2,"ion-item",15),i.NdJ("click",function(){i.CHM(d);const g=i.oxw();return i.KtG(g.isUserOpen=!0)}),i.TgZ(3,"ion-label"),i._uU(4,"Profil"),i.qZA()(),i.TgZ(5,"ion-item")(6,"ion-label"),i._uU(7,"Pr\xe9f\xe9rences"),i.qZA(),i._UZ(8,"ion-icon",16),i.qZA(),i.TgZ(9,"ion-item",17),i.NdJ("click",function(){i.CHM(d);const g=i.oxw();return i.KtG(g.navigate("admin"))}),i.TgZ(10,"ion-label"),i._uU(11,"Administration"),i.qZA(),i._UZ(12,"ion-icon",18),i.qZA(),i.TgZ(13,"ion-item",19),i.NdJ("click",function(){i.CHM(d);const g=i.oxw();return i.KtG(g.logoutClick())}),i._UZ(14,"ion-icon",20),i.TgZ(15,"ion-label"),i._uU(16,"D\xe9connexion"),i.qZA()(),i.TgZ(17,"ion-item")(18,"ion-label"),i._uU(19),i.qZA()()()()}if(2&f){const d=i.oxw();i.xp6(19),i.hij(" Version : ",d.version," ")}}let T=(()=>{class f{constructor(d,h){this.authService=d,this.navCtrl=h,this.isUserOpen=!1,this.version=t.i8}ngOnChanges(d){this.user=this.authService.authUser}ngOnInit(){this.envMode=P.N.name}logoutClick(){this.authService.logout().subscribe(()=>{this.navCtrl.navigateBack("/login")})}navigate(d){this.navCtrl.navigateRoot(d)}}return f.\u0275fac=function(d){return new(d||f)(i.Y36(b.e),i.Y36(p.SH))},f.\u0275cmp=i.Xpm({type:f,selectors:[["app-shared-user-header"]],viewQuery:function(d,h){if(1&d&&i.Gf(C,5),2&d){let g;i.iGM(g=i.CRH())&&(h.menu=g.first)}},inputs:{pageTitle:"pageTitle"},features:[i.TTD],decls:21,vars:6,consts:[[3,"translucent"],["color","primary"],["slot","start"],["autoHide","false","color","light"],["src","assets/images/logoDaherFondBleu.png",1,"ion-hide-sm-down","logo",3,"click"],[1,"ion-text-uppercase","ion-text-center"],["slot","end",1,"dev"],["id","button-profil","color","light","slot","end","outline","",1,"ion-margin-end"],["name","person-circle-outline"],["color","light"],["slot","end","trigger","button-profil","alignment","end","side","bottom","dismissOnSelect","true"],["slot","end","color","danger",1,"ion-hide-sm-down","margin",3,"click"],["slot","end","name","log-out-outline"],[1,"ion-hide-md-down"],[3,"user","userState","stateChangeEv"],["button","","id","trigger-button",3,"click"],["name","settings-outline","slot","start"],["button","",3,"click"],["name","construct-outline","slot","start"],["color","danger",1,"ion-hide-sm-up",3,"click"],["slot","start","name","log-out-outline"]],template:function(d,h){1&d&&(i.TgZ(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-buttons",2),i._UZ(3,"ion-menu-button",3),i.TgZ(4,"ion-img",4),i.NdJ("click",function(){return h.navigate("home")}),i.qZA()(),i.TgZ(5,"ion-title",5),i._uU(6),i.qZA(),i.TgZ(7,"ion-label",6),i._uU(8),i.qZA(),i.TgZ(9,"ion-chip",7),i._UZ(10,"ion-icon",8),i.TgZ(11,"ion-label",9),i._uU(12),i.qZA()(),i.TgZ(13,"ion-popover",10),i.YNc(14,w,20,1,"ng-template"),i.qZA(),i.TgZ(15,"ion-button",11),i.NdJ("click",function(){return h.logoutClick()}),i._UZ(16,"ion-icon",12),i.TgZ(17,"ion-label",13),i._uU(18,"D\xe9connexion"),i.qZA()()()(),i.TgZ(19,"ion-content")(20,"app-user-sheet",14),i.NdJ("stateChangeEv",function(R){return h.isUserOpen=R}),i.qZA()()),2&d&&(i.Q6J("translucent",!0),i.xp6(6),i.Oqu(h.pageTitle),i.xp6(2),i.Oqu(h.envMode),i.xp6(4),i.Oqu(null==h.user?null:h.user.username),i.xp6(8),i.Q6J("user",h.user)("userState",h.isUserOpen))},dependencies:[p.YG,p.Sm,p.hM,p.W2,p.Gu,p.gu,p.Xz,p.Ie,p.Q$,p.q_,p.fG,p.d8,p.sr,p.wd,A.A],styles:[".margin[_ngcontent-%COMP%]{margin-right:10px}.logo[_ngcontent-%COMP%]{width:100px}@media print{[_nghost-%COMP%]{display:none}}.dev[_ngcontent-%COMP%]{color:red;text-transform:uppercase;font-size:large;font-weight:700;padding-right:100px}"]}),f})()},2293:(D,E,r)=>{r.d(E,{pp:()=>pe,To:()=>he,ib:()=>j,u4:()=>le,yz:()=>Y,yK:()=>ce});var t=r(5e3),P=r(3191),i=r(8929),b=r(2654),p=r(449);let A=0;const C=new t.OlP("CdkAccordion");let w=(()=>{class o{constructor(){this._stateChanges=new i.xQ,this._openCloseAllActions=new i.xQ,this.id="cdk-accordion-"+A++,this._multi=!1}get multi(){return this._multi}set multi(e){this._multi=(0,P.Ig)(e)}openAll(){this._multi&&this._openCloseAllActions.next(!0)}closeAll(){this._openCloseAllActions.next(!1)}ngOnChanges(e){this._stateChanges.next(e)}ngOnDestroy(){this._stateChanges.complete(),this._openCloseAllActions.complete()}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275dir=t.lG2({type:o,selectors:[["cdk-accordion"],["","cdkAccordion",""]],inputs:{multi:"multi"},exportAs:["cdkAccordion"],features:[t._Bn([{provide:C,useExisting:o}]),t.TTD]}),o})(),T=0,f=(()=>{class o{constructor(e,a,s){this.accordion=e,this._changeDetectorRef=a,this._expansionDispatcher=s,this._openCloseAllSubscription=b.w.EMPTY,this.closed=new t.vpe,this.opened=new t.vpe,this.destroyed=new t.vpe,this.expandedChange=new t.vpe,this.id="cdk-accordion-child-"+T++,this._expanded=!1,this._disabled=!1,this._removeUniqueSelectionListener=()=>{},this._removeUniqueSelectionListener=s.listen((l,c)=>{this.accordion&&!this.accordion.multi&&this.accordion.id===c&&this.id!==l&&(this.expanded=!1)}),this.accordion&&(this._openCloseAllSubscription=this._subscribeToOpenCloseAllActions())}get expanded(){return this._expanded}set expanded(e){e=(0,P.Ig)(e),this._expanded!==e&&(this._expanded=e,this.expandedChange.emit(e),e?(this.opened.emit(),this._expansionDispatcher.notify(this.id,this.accordion?this.accordion.id:this.id)):this.closed.emit(),this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled}set disabled(e){this._disabled=(0,P.Ig)(e)}ngOnDestroy(){this.opened.complete(),this.closed.complete(),this.destroyed.emit(),this.destroyed.complete(),this._removeUniqueSelectionListener(),this._openCloseAllSubscription.unsubscribe()}toggle(){this.disabled||(this.expanded=!this.expanded)}close(){this.disabled||(this.expanded=!1)}open(){this.disabled||(this.expanded=!0)}_subscribeToOpenCloseAllActions(){return this.accordion._openCloseAllActions.subscribe(e=>{this.disabled||(this.expanded=e)})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(C,12),t.Y36(t.sBO),t.Y36(p.A8))},o.\u0275dir=t.lG2({type:o,selectors:[["cdk-accordion-item"],["","cdkAccordionItem",""]],inputs:{expanded:"expanded",disabled:"disabled"},outputs:{closed:"closed",opened:"opened",destroyed:"destroyed",expandedChange:"expandedChange"},exportAs:["cdkAccordionItem"],features:[t._Bn([{provide:C,useValue:void 0}])]}),o})(),y=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({}),o})();var d=r(9808);class H{attach(n){return this._attachedHost=n,n.attach(this)}detach(){let n=this._attachedHost;null!=n&&(this._attachedHost=null,n.detach())}get isAttached(){return null!=this._attachedHost}setAttachedHost(n){this._attachedHost=n}}class Q extends H{constructor(n,e,a,s){super(),this.component=n,this.viewContainerRef=e,this.injector=a,this.componentFactoryResolver=s}}class F extends H{constructor(n,e,a){super(),this.templateRef=n,this.viewContainerRef=e,this.context=a}get origin(){return this.templateRef.elementRef}attach(n,e=this.context){return this.context=e,super.attach(n)}detach(){return this.context=void 0,super.detach()}}class G extends H{constructor(n){super(),this.element=n instanceof t.SBq?n.nativeElement:n}}let L=(()=>{class o extends class V{constructor(){this._isDisposed=!1,this.attachDomPortal=null}hasAttached(){return!!this._attachedPortal}attach(n){return n instanceof Q?(this._attachedPortal=n,this.attachComponentPortal(n)):n instanceof F?(this._attachedPortal=n,this.attachTemplatePortal(n)):this.attachDomPortal&&n instanceof G?(this._attachedPortal=n,this.attachDomPortal(n)):void 0}detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(n){this._disposeFn=n}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}}{constructor(e,a,s){super(),this._componentFactoryResolver=e,this._viewContainerRef=a,this._isInitialized=!1,this.attached=new t.vpe,this.attachDomPortal=l=>{const c=l.element,m=this._document.createComment("dom-portal");l.setAttachedHost(this),c.parentNode.insertBefore(m,c),this._getRootNode().appendChild(c),this._attachedPortal=l,super.setDisposeFn(()=>{m.parentNode&&m.parentNode.replaceChild(c,m)})},this._document=s}get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedPortal=null,this._attachedRef=null}attachComponentPortal(e){e.setAttachedHost(this);const a=null!=e.viewContainerRef?e.viewContainerRef:this._viewContainerRef,l=(e.componentFactoryResolver||this._componentFactoryResolver).resolveComponentFactory(e.component),c=a.createComponent(l,a.length,e.injector||a.injector);return a!==this._viewContainerRef&&this._getRootNode().appendChild(c.hostView.rootNodes[0]),super.setDisposeFn(()=>c.destroy()),this._attachedPortal=e,this._attachedRef=c,this.attached.emit(c),c}attachTemplatePortal(e){e.setAttachedHost(this);const a=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context);return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=a,this.attached.emit(a),a}_getRootNode(){const e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(t._Vd),t.Y36(t.s_b),t.Y36(d.K0))},o.\u0275dir=t.lG2({type:o,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:["cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[t.qOj]}),o})(),z=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({}),o})();var I=r(508),S=r(8421),J=r(5778),N=r(1059),M=r(2198),K=r(2986),O=r(1159),q=r(8896),$=r(6787),u=r(1777);const W=["body"];function X(o,n){}const ee=[[["mat-expansion-panel-header"]],"*",[["mat-action-row"]]],te=["mat-expansion-panel-header","*","mat-action-row"];function ne(o,n){if(1&o&&t._UZ(0,"span",2),2&o){const e=t.oxw();t.Q6J("@indicatorRotate",e._getExpandedState())}}const oe=[[["mat-panel-title"]],[["mat-panel-description"]],"*"],ie=["mat-panel-title","mat-panel-description","*"],k=new t.OlP("MAT_ACCORDION"),B="225ms cubic-bezier(0.4,0.0,0.2,1)",U={indicatorRotate:(0,u.X$)("indicatorRotate",[(0,u.SB)("collapsed, void",(0,u.oB)({transform:"rotate(0deg)"})),(0,u.SB)("expanded",(0,u.oB)({transform:"rotate(180deg)"})),(0,u.eR)("expanded <=> collapsed, void => collapsed",(0,u.jt)(B))]),bodyExpansion:(0,u.X$)("bodyExpansion",[(0,u.SB)("collapsed, void",(0,u.oB)({height:"0px",visibility:"hidden"})),(0,u.SB)("expanded",(0,u.oB)({height:"*",visibility:"visible"})),(0,u.eR)("expanded <=> collapsed, void => collapsed",(0,u.jt)(B))])};let ae=(()=>{class o{constructor(e){this._template=e}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(t.Rgc))},o.\u0275dir=t.lG2({type:o,selectors:[["ng-template","matExpansionPanelContent",""]]}),o})(),se=0;const Z=new t.OlP("MAT_EXPANSION_PANEL_DEFAULT_OPTIONS");let j=(()=>{class o extends f{constructor(e,a,s,l,c,m,_){super(e,a,s),this._viewContainerRef=l,this._animationMode=m,this._hideToggle=!1,this.afterExpand=new t.vpe,this.afterCollapse=new t.vpe,this._inputChanges=new i.xQ,this._headerId="mat-expansion-panel-header-"+se++,this._bodyAnimationDone=new i.xQ,this.accordion=e,this._document=c,this._bodyAnimationDone.pipe((0,J.x)((v,x)=>v.fromState===x.fromState&&v.toState===x.toState)).subscribe(v=>{"void"!==v.fromState&&("expanded"===v.toState?this.afterExpand.emit():"collapsed"===v.toState&&this.afterCollapse.emit())}),_&&(this.hideToggle=_.hideToggle)}get hideToggle(){return this._hideToggle||this.accordion&&this.accordion.hideToggle}set hideToggle(e){this._hideToggle=(0,P.Ig)(e)}get togglePosition(){return this._togglePosition||this.accordion&&this.accordion.togglePosition}set togglePosition(e){this._togglePosition=e}_hasSpacing(){return!!this.accordion&&this.expanded&&"default"===this.accordion.displayMode}_getExpandedState(){return this.expanded?"expanded":"collapsed"}toggle(){this.expanded=!this.expanded}close(){this.expanded=!1}open(){this.expanded=!0}ngAfterContentInit(){this._lazyContent&&this.opened.pipe((0,N.O)(null),(0,M.h)(()=>this.expanded&&!this._portal),(0,K.q)(1)).subscribe(()=>{this._portal=new F(this._lazyContent._template,this._viewContainerRef)})}ngOnChanges(e){this._inputChanges.next(e)}ngOnDestroy(){super.ngOnDestroy(),this._bodyAnimationDone.complete(),this._inputChanges.complete()}_containsFocus(){if(this._body){const e=this._document.activeElement,a=this._body.nativeElement;return e===a||a.contains(e)}return!1}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(k,12),t.Y36(t.sBO),t.Y36(p.A8),t.Y36(t.s_b),t.Y36(d.K0),t.Y36(t.QbO,8),t.Y36(Z,8))},o.\u0275cmp=t.Xpm({type:o,selectors:[["mat-expansion-panel"]],contentQueries:function(e,a,s){if(1&e&&t.Suo(s,ae,5),2&e){let l;t.iGM(l=t.CRH())&&(a._lazyContent=l.first)}},viewQuery:function(e,a){if(1&e&&t.Gf(W,5),2&e){let s;t.iGM(s=t.CRH())&&(a._body=s.first)}},hostAttrs:[1,"mat-expansion-panel"],hostVars:6,hostBindings:function(e,a){2&e&&t.ekj("mat-expanded",a.expanded)("_mat-animation-noopable","NoopAnimations"===a._animationMode)("mat-expansion-panel-spacing",a._hasSpacing())},inputs:{disabled:"disabled",expanded:"expanded",hideToggle:"hideToggle",togglePosition:"togglePosition"},outputs:{opened:"opened",closed:"closed",expandedChange:"expandedChange",afterExpand:"afterExpand",afterCollapse:"afterCollapse"},exportAs:["matExpansionPanel"],features:[t._Bn([{provide:k,useValue:void 0}]),t.qOj,t.TTD],ngContentSelectors:te,decls:7,vars:4,consts:[["role","region",1,"mat-expansion-panel-content",3,"id"],["body",""],[1,"mat-expansion-panel-body"],[3,"cdkPortalOutlet"]],template:function(e,a){1&e&&(t.F$t(ee),t.Hsn(0),t.TgZ(1,"div",0,1),t.NdJ("@bodyExpansion.done",function(l){return a._bodyAnimationDone.next(l)}),t.TgZ(3,"div",2),t.Hsn(4,1),t.YNc(5,X,0,0,"ng-template",3),t.qZA(),t.Hsn(6,2),t.qZA()),2&e&&(t.xp6(1),t.Q6J("@bodyExpansion",a._getExpandedState())("id",a.id),t.uIk("aria-labelledby",a._headerId),t.xp6(4),t.Q6J("cdkPortalOutlet",a._portal))},dependencies:[L],styles:['.mat-expansion-panel{box-sizing:content-box;display:block;margin:0;border-radius:4px;overflow:hidden;transition:margin 225ms cubic-bezier(0.4, 0, 0.2, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);position:relative}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:4px;border-top-left-radius:4px}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.cdk-high-contrast-active .mat-expansion-panel{outline:solid 1px}.mat-expansion-panel.ng-animate-disabled,.ng-animate-disabled .mat-expansion-panel,.mat-expansion-panel._mat-animation-noopable{transition:none}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible}.mat-expansion-panel-content[style*="visibility: hidden"] *{visibility:hidden !important}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>*:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>*:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px}.mat-action-row .mat-button-base,.mat-action-row .mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-action-row .mat-button-base,[dir=rtl] .mat-action-row .mat-mdc-button-base{margin-left:0;margin-right:8px}\n'],encapsulation:2,data:{animation:[U.bodyExpansion]},changeDetection:0}),o})();class re{}const de=(0,I.sb)(re);let Y=(()=>{class o extends de{constructor(e,a,s,l,c,m,_){super(),this.panel=e,this._element=a,this._focusMonitor=s,this._changeDetectorRef=l,this._animationMode=m,this._parentChangeSubscription=b.w.EMPTY;const v=e.accordion?e.accordion._stateChanges.pipe((0,M.h)(x=>!(!x.hideToggle&&!x.togglePosition))):q.E;this.tabIndex=parseInt(_||"")||0,this._parentChangeSubscription=(0,$.T)(e.opened,e.closed,v,e._inputChanges.pipe((0,M.h)(x=>!!(x.hideToggle||x.disabled||x.togglePosition)))).subscribe(()=>this._changeDetectorRef.markForCheck()),e.closed.pipe((0,M.h)(()=>e._containsFocus())).subscribe(()=>s.focusVia(a,"program")),c&&(this.expandedHeight=c.expandedHeight,this.collapsedHeight=c.collapsedHeight)}get disabled(){return this.panel.disabled}_toggle(){this.disabled||this.panel.toggle()}_isExpanded(){return this.panel.expanded}_getExpandedState(){return this.panel._getExpandedState()}_getPanelId(){return this.panel.id}_getTogglePosition(){return this.panel.togglePosition}_showToggle(){return!this.panel.hideToggle&&!this.panel.disabled}_getHeaderHeight(){const e=this._isExpanded();return e&&this.expandedHeight?this.expandedHeight:!e&&this.collapsedHeight?this.collapsedHeight:null}_keydown(e){switch(e.keyCode){case O.L_:case O.K5:(0,O.Vb)(e)||(e.preventDefault(),this._toggle());break;default:return void(this.panel.accordion&&this.panel.accordion._handleHeaderKeydown(e))}}focus(e,a){e?this._focusMonitor.focusVia(this._element,e,a):this._element.nativeElement.focus(a)}ngAfterViewInit(){this._focusMonitor.monitor(this._element).subscribe(e=>{e&&this.panel.accordion&&this.panel.accordion._handleHeaderFocus(this)})}ngOnDestroy(){this._parentChangeSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._element)}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(j,1),t.Y36(t.SBq),t.Y36(S.tE),t.Y36(t.sBO),t.Y36(Z,8),t.Y36(t.QbO,8),t.$8M("tabindex"))},o.\u0275cmp=t.Xpm({type:o,selectors:[["mat-expansion-panel-header"]],hostAttrs:["role","button",1,"mat-expansion-panel-header","mat-focus-indicator"],hostVars:15,hostBindings:function(e,a){1&e&&t.NdJ("click",function(){return a._toggle()})("keydown",function(l){return a._keydown(l)}),2&e&&(t.uIk("id",a.panel._headerId)("tabindex",a.tabIndex)("aria-controls",a._getPanelId())("aria-expanded",a._isExpanded())("aria-disabled",a.panel.disabled),t.Udp("height",a._getHeaderHeight()),t.ekj("mat-expanded",a._isExpanded())("mat-expansion-toggle-indicator-after","after"===a._getTogglePosition())("mat-expansion-toggle-indicator-before","before"===a._getTogglePosition())("_mat-animation-noopable","NoopAnimations"===a._animationMode))},inputs:{tabIndex:"tabIndex",expandedHeight:"expandedHeight",collapsedHeight:"collapsedHeight"},features:[t.qOj],ngContentSelectors:ie,decls:5,vars:1,consts:[[1,"mat-content"],["class","mat-expansion-indicator",4,"ngIf"],[1,"mat-expansion-indicator"]],template:function(e,a){1&e&&(t.F$t(oe),t.TgZ(0,"span",0),t.Hsn(1),t.Hsn(2,1),t.Hsn(3,2),t.qZA(),t.YNc(4,ne,1,1,"span",1)),2&e&&(t.xp6(4),t.Q6J("ngIf",a._showToggle()))},dependencies:[d.O5],styles:['.mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit;transition:height 225ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel-header._mat-animation-noopable{transition:none}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:none}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before{flex-direction:row-reverse}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 16px 0 0}[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 0 0 16px}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-expansion-panel-header-title,.mat-expansion-panel-header-description{display:flex;flex-grow:1;margin-right:16px;align-items:center}[dir=rtl] .mat-expansion-panel-header-title,[dir=rtl] .mat-expansion-panel-header-description{margin-right:0;margin-left:16px}.mat-expansion-panel-header-description{flex-grow:2}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:"";display:inline-block;padding:3px;transform:rotate(45deg);vertical-align:middle}.cdk-high-contrast-active .mat-expansion-panel .mat-expansion-panel-header.cdk-keyboard-focused:not([aria-disabled=true])::before,.cdk-high-contrast-active .mat-expansion-panel .mat-expansion-panel-header.cdk-program-focused:not([aria-disabled=true])::before,.cdk-high-contrast-active .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:hover:not([aria-disabled=true])::before{top:0;left:0;right:0;bottom:0;position:absolute;box-sizing:border-box;pointer-events:none;border:3px solid;border-radius:4px;content:""}.cdk-high-contrast-active .mat-expansion-panel-content{border-top:1px solid;border-top-left-radius:0;border-top-right-radius:0}\n'],encapsulation:2,data:{animation:[U.indicatorRotate]},changeDetection:0}),o})(),le=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275dir=t.lG2({type:o,selectors:[["mat-panel-description"]],hostAttrs:[1,"mat-expansion-panel-header-description"]}),o})(),ce=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275dir=t.lG2({type:o,selectors:[["mat-panel-title"]],hostAttrs:[1,"mat-expansion-panel-header-title"]}),o})(),pe=(()=>{class o extends w{constructor(){super(...arguments),this._ownHeaders=new t.n_E,this._hideToggle=!1,this.displayMode="default",this.togglePosition="after"}get hideToggle(){return this._hideToggle}set hideToggle(e){this._hideToggle=(0,P.Ig)(e)}ngAfterContentInit(){this._headers.changes.pipe((0,N.O)(this._headers)).subscribe(e=>{this._ownHeaders.reset(e.filter(a=>a.panel.accordion===this)),this._ownHeaders.notifyOnChanges()}),this._keyManager=new S.Em(this._ownHeaders).withWrap().withHomeAndEnd()}_handleHeaderKeydown(e){this._keyManager.onKeydown(e)}_handleHeaderFocus(e){this._keyManager.updateActiveItem(e)}ngOnDestroy(){super.ngOnDestroy(),this._ownHeaders.destroy()}}return o.\u0275fac=function(){let n;return function(a){return(n||(n=t.n5z(o)))(a||o)}}(),o.\u0275dir=t.lG2({type:o,selectors:[["mat-accordion"]],contentQueries:function(e,a,s){if(1&e&&t.Suo(s,Y,5),2&e){let l;t.iGM(l=t.CRH())&&(a._headers=l)}},hostAttrs:[1,"mat-accordion"],hostVars:2,hostBindings:function(e,a){2&e&&t.ekj("mat-accordion-multi",a.multi)},inputs:{multi:"multi",hideToggle:"hideToggle",displayMode:"displayMode",togglePosition:"togglePosition"},exportAs:["matAccordion"],features:[t._Bn([{provide:k,useExisting:o}]),t.qOj]}),o})(),he=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[d.ez,I.BQ,y,z]]}),o})()},4147:D=>{D.exports={i8:"1.5.4"}}}]);