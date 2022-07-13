"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2293],{2293:(le,O,d)=>{d.d(O,{pp:()=>re,To:()=>de,ib:()=>R,u4:()=>ae,yz:()=>k,yK:()=>se});var t=d(5e3),f=d(3191),m=d(8929),b=d(2654),D=d(449);let F=0;const v=new t.OlP("CdkAccordion");let I=(()=>{class o{constructor(){this._stateChanges=new m.xQ,this._openCloseAllActions=new m.xQ,this.id="cdk-accordion-"+F++,this._multi=!1}get multi(){return this._multi}set multi(e){this._multi=(0,f.Ig)(e)}openAll(){this._multi&&this._openCloseAllActions.next(!0)}closeAll(){this._openCloseAllActions.next(!1)}ngOnChanges(e){this._stateChanges.next(e)}ngOnDestroy(){this._stateChanges.complete(),this._openCloseAllActions.complete()}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275dir=t.lG2({type:o,selectors:[["cdk-accordion"],["","cdkAccordion",""]],inputs:{multi:"multi"},exportAs:["cdkAccordion"],features:[t._Bn([{provide:v,useExisting:o}]),t.TTD]}),o})(),N=0,B=(()=>{class o{constructor(e,i,a){this.accordion=e,this._changeDetectorRef=i,this._expansionDispatcher=a,this._openCloseAllSubscription=b.w.EMPTY,this.closed=new t.vpe,this.opened=new t.vpe,this.destroyed=new t.vpe,this.expandedChange=new t.vpe,this.id="cdk-accordion-child-"+N++,this._expanded=!1,this._disabled=!1,this._removeUniqueSelectionListener=()=>{},this._removeUniqueSelectionListener=a.listen((s,r)=>{this.accordion&&!this.accordion.multi&&this.accordion.id===r&&this.id!==s&&(this.expanded=!1)}),this.accordion&&(this._openCloseAllSubscription=this._subscribeToOpenCloseAllActions())}get expanded(){return this._expanded}set expanded(e){e=(0,f.Ig)(e),this._expanded!==e&&(this._expanded=e,this.expandedChange.emit(e),e?(this.opened.emit(),this._expansionDispatcher.notify(this.id,this.accordion?this.accordion.id:this.id)):this.closed.emit(),this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled}set disabled(e){this._disabled=(0,f.Ig)(e)}ngOnDestroy(){this.opened.complete(),this.closed.complete(),this.destroyed.emit(),this.destroyed.complete(),this._removeUniqueSelectionListener(),this._openCloseAllSubscription.unsubscribe()}toggle(){this.disabled||(this.expanded=!this.expanded)}close(){this.disabled||(this.expanded=!1)}open(){this.disabled||(this.expanded=!0)}_subscribeToOpenCloseAllActions(){return this.accordion._openCloseAllActions.subscribe(e=>{this.disabled||(this.expanded=e)})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(v,12),t.Y36(t.sBO),t.Y36(D.A8))},o.\u0275dir=t.lG2({type:o,selectors:[["cdk-accordion-item"],["","cdkAccordionItem",""]],inputs:{expanded:"expanded",disabled:"disabled"},outputs:{closed:"closed",opened:"opened",destroyed:"destroyed",expandedChange:"expandedChange"},exportAs:["cdkAccordionItem"],features:[t._Bn([{provide:v,useValue:void 0}])]}),o})(),S=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({}),o})();var g=d(9808);class _{attach(n){return this._attachedHost=n,n.attach(this)}detach(){let n=this._attachedHost;null!=n&&(this._attachedHost=null,n.detach())}get isAttached(){return null!=this._attachedHost}setAttachedHost(n){this._attachedHost=n}}class j extends _{constructor(n,e,i,a){super(),this.component=n,this.viewContainerRef=e,this.injector=i,this.componentFactoryResolver=a}}class M extends _{constructor(n,e,i){super(),this.templateRef=n,this.viewContainerRef=e,this.context=i}get origin(){return this.templateRef.elementRef}attach(n,e=this.context){return this.context=e,super.attach(n)}detach(){return this.context=void 0,super.detach()}}class Y extends _{constructor(n){super(),this.element=n instanceof t.SBq?n.nativeElement:n}}let Q=(()=>{class o extends class V{constructor(){this._isDisposed=!1,this.attachDomPortal=null}hasAttached(){return!!this._attachedPortal}attach(n){return n instanceof j?(this._attachedPortal=n,this.attachComponentPortal(n)):n instanceof M?(this._attachedPortal=n,this.attachTemplatePortal(n)):this.attachDomPortal&&n instanceof Y?(this._attachedPortal=n,this.attachDomPortal(n)):void 0}detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(n){this._disposeFn=n}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}}{constructor(e,i,a){super(),this._componentFactoryResolver=e,this._viewContainerRef=i,this._isInitialized=!1,this.attached=new t.vpe,this.attachDomPortal=s=>{const r=s.element,c=this._document.createComment("dom-portal");s.setAttachedHost(this),r.parentNode.insertBefore(c,r),this._getRootNode().appendChild(r),this._attachedPortal=s,super.setDisposeFn(()=>{c.parentNode&&c.parentNode.replaceChild(r,c)})},this._document=a}get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedPortal=null,this._attachedRef=null}attachComponentPortal(e){e.setAttachedHost(this);const i=null!=e.viewContainerRef?e.viewContainerRef:this._viewContainerRef,s=(e.componentFactoryResolver||this._componentFactoryResolver).resolveComponentFactory(e.component),r=i.createComponent(s,i.length,e.injector||i.injector);return i!==this._viewContainerRef&&this._getRootNode().appendChild(r.hostView.rootNodes[0]),super.setDisposeFn(()=>r.destroy()),this._attachedPortal=e,this._attachedRef=r,this.attached.emit(r),r}attachTemplatePortal(e){e.setAttachedHost(this);const i=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context);return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=i,this.attached.emit(i),i}_getRootNode(){const e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(t._Vd),t.Y36(t.s_b),t.Y36(g.K0))},o.\u0275dir=t.lG2({type:o,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:["cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[t.qOj]}),o})(),z=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({}),o})();var C=d(508),w=d(8421),G=d(5778),E=d(1059),x=d(2198),L=d(2986),P=d(1159),U=d(8896),J=d(6787),l=d(1777);const $=["body"];function K(o,n){}const X=[[["mat-expansion-panel-header"]],"*",[["mat-action-row"]]],Z=["mat-expansion-panel-header","*","mat-action-row"];function W(o,n){if(1&o&&t._UZ(0,"span",2),2&o){const e=t.oxw();t.Q6J("@indicatorRotate",e._getExpandedState())}}const q=[[["mat-panel-title"]],[["mat-panel-description"]],"*"],ee=["mat-panel-title","mat-panel-description","*"],y=new t.OlP("MAT_ACCORDION"),A="225ms cubic-bezier(0.4,0.0,0.2,1)",T={indicatorRotate:(0,l.X$)("indicatorRotate",[(0,l.SB)("collapsed, void",(0,l.oB)({transform:"rotate(0deg)"})),(0,l.SB)("expanded",(0,l.oB)({transform:"rotate(180deg)"})),(0,l.eR)("expanded <=> collapsed, void => collapsed",(0,l.jt)(A))]),bodyExpansion:(0,l.X$)("bodyExpansion",[(0,l.SB)("collapsed, void",(0,l.oB)({height:"0px",visibility:"hidden"})),(0,l.SB)("expanded",(0,l.oB)({height:"*",visibility:"visible"})),(0,l.eR)("expanded <=> collapsed, void => collapsed",(0,l.jt)(A))])};let te=(()=>{class o{constructor(e){this._template=e}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(t.Rgc))},o.\u0275dir=t.lG2({type:o,selectors:[["ng-template","matExpansionPanelContent",""]]}),o})(),ne=0;const H=new t.OlP("MAT_EXPANSION_PANEL_DEFAULT_OPTIONS");let R=(()=>{class o extends B{constructor(e,i,a,s,r,c,p){super(e,i,a),this._viewContainerRef=s,this._animationMode=c,this._hideToggle=!1,this.afterExpand=new t.vpe,this.afterCollapse=new t.vpe,this._inputChanges=new m.xQ,this._headerId="mat-expansion-panel-header-"+ne++,this._bodyAnimationDone=new m.xQ,this.accordion=e,this._document=r,this._bodyAnimationDone.pipe((0,G.x)((u,h)=>u.fromState===h.fromState&&u.toState===h.toState)).subscribe(u=>{"void"!==u.fromState&&("expanded"===u.toState?this.afterExpand.emit():"collapsed"===u.toState&&this.afterCollapse.emit())}),p&&(this.hideToggle=p.hideToggle)}get hideToggle(){return this._hideToggle||this.accordion&&this.accordion.hideToggle}set hideToggle(e){this._hideToggle=(0,f.Ig)(e)}get togglePosition(){return this._togglePosition||this.accordion&&this.accordion.togglePosition}set togglePosition(e){this._togglePosition=e}_hasSpacing(){return!!this.accordion&&this.expanded&&"default"===this.accordion.displayMode}_getExpandedState(){return this.expanded?"expanded":"collapsed"}toggle(){this.expanded=!this.expanded}close(){this.expanded=!1}open(){this.expanded=!0}ngAfterContentInit(){this._lazyContent&&this.opened.pipe((0,E.O)(null),(0,x.h)(()=>this.expanded&&!this._portal),(0,L.q)(1)).subscribe(()=>{this._portal=new M(this._lazyContent._template,this._viewContainerRef)})}ngOnChanges(e){this._inputChanges.next(e)}ngOnDestroy(){super.ngOnDestroy(),this._bodyAnimationDone.complete(),this._inputChanges.complete()}_containsFocus(){if(this._body){const e=this._document.activeElement,i=this._body.nativeElement;return e===i||i.contains(e)}return!1}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(y,12),t.Y36(t.sBO),t.Y36(D.A8),t.Y36(t.s_b),t.Y36(g.K0),t.Y36(t.QbO,8),t.Y36(H,8))},o.\u0275cmp=t.Xpm({type:o,selectors:[["mat-expansion-panel"]],contentQueries:function(e,i,a){if(1&e&&t.Suo(a,te,5),2&e){let s;t.iGM(s=t.CRH())&&(i._lazyContent=s.first)}},viewQuery:function(e,i){if(1&e&&t.Gf($,5),2&e){let a;t.iGM(a=t.CRH())&&(i._body=a.first)}},hostAttrs:[1,"mat-expansion-panel"],hostVars:6,hostBindings:function(e,i){2&e&&t.ekj("mat-expanded",i.expanded)("_mat-animation-noopable","NoopAnimations"===i._animationMode)("mat-expansion-panel-spacing",i._hasSpacing())},inputs:{disabled:"disabled",expanded:"expanded",hideToggle:"hideToggle",togglePosition:"togglePosition"},outputs:{opened:"opened",closed:"closed",expandedChange:"expandedChange",afterExpand:"afterExpand",afterCollapse:"afterCollapse"},exportAs:["matExpansionPanel"],features:[t._Bn([{provide:y,useValue:void 0}]),t.qOj,t.TTD],ngContentSelectors:Z,decls:7,vars:4,consts:[["role","region",1,"mat-expansion-panel-content",3,"id"],["body",""],[1,"mat-expansion-panel-body"],[3,"cdkPortalOutlet"]],template:function(e,i){1&e&&(t.F$t(X),t.Hsn(0),t.TgZ(1,"div",0,1),t.NdJ("@bodyExpansion.done",function(s){return i._bodyAnimationDone.next(s)}),t.TgZ(3,"div",2),t.Hsn(4,1),t.YNc(5,K,0,0,"ng-template",3),t.qZA(),t.Hsn(6,2),t.qZA()),2&e&&(t.xp6(1),t.Q6J("@bodyExpansion",i._getExpandedState())("id",i.id),t.uIk("aria-labelledby",i._headerId),t.xp6(4),t.Q6J("cdkPortalOutlet",i._portal))},dependencies:[Q],styles:['.mat-expansion-panel{box-sizing:content-box;display:block;margin:0;border-radius:4px;overflow:hidden;transition:margin 225ms cubic-bezier(0.4, 0, 0.2, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);position:relative}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:4px;border-top-left-radius:4px}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.cdk-high-contrast-active .mat-expansion-panel{outline:solid 1px}.mat-expansion-panel.ng-animate-disabled,.ng-animate-disabled .mat-expansion-panel,.mat-expansion-panel._mat-animation-noopable{transition:none}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible}.mat-expansion-panel-content[style*="visibility: hidden"] *{visibility:hidden !important}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>*:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>*:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px}.mat-action-row .mat-button-base,.mat-action-row .mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-action-row .mat-button-base,[dir=rtl] .mat-action-row .mat-mdc-button-base{margin-left:0;margin-right:8px}\n'],encapsulation:2,data:{animation:[T.bodyExpansion]},changeDetection:0}),o})();class oe{}const ie=(0,C.sb)(oe);let k=(()=>{class o extends ie{constructor(e,i,a,s,r,c,p){super(),this.panel=e,this._element=i,this._focusMonitor=a,this._changeDetectorRef=s,this._animationMode=c,this._parentChangeSubscription=b.w.EMPTY;const u=e.accordion?e.accordion._stateChanges.pipe((0,x.h)(h=>!(!h.hideToggle&&!h.togglePosition))):U.E;this.tabIndex=parseInt(p||"")||0,this._parentChangeSubscription=(0,J.T)(e.opened,e.closed,u,e._inputChanges.pipe((0,x.h)(h=>!!(h.hideToggle||h.disabled||h.togglePosition)))).subscribe(()=>this._changeDetectorRef.markForCheck()),e.closed.pipe((0,x.h)(()=>e._containsFocus())).subscribe(()=>a.focusVia(i,"program")),r&&(this.expandedHeight=r.expandedHeight,this.collapsedHeight=r.collapsedHeight)}get disabled(){return this.panel.disabled}_toggle(){this.disabled||this.panel.toggle()}_isExpanded(){return this.panel.expanded}_getExpandedState(){return this.panel._getExpandedState()}_getPanelId(){return this.panel.id}_getTogglePosition(){return this.panel.togglePosition}_showToggle(){return!this.panel.hideToggle&&!this.panel.disabled}_getHeaderHeight(){const e=this._isExpanded();return e&&this.expandedHeight?this.expandedHeight:!e&&this.collapsedHeight?this.collapsedHeight:null}_keydown(e){switch(e.keyCode){case P.L_:case P.K5:(0,P.Vb)(e)||(e.preventDefault(),this._toggle());break;default:return void(this.panel.accordion&&this.panel.accordion._handleHeaderKeydown(e))}}focus(e,i){e?this._focusMonitor.focusVia(this._element,e,i):this._element.nativeElement.focus(i)}ngAfterViewInit(){this._focusMonitor.monitor(this._element).subscribe(e=>{e&&this.panel.accordion&&this.panel.accordion._handleHeaderFocus(this)})}ngOnDestroy(){this._parentChangeSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._element)}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(R,1),t.Y36(t.SBq),t.Y36(w.tE),t.Y36(t.sBO),t.Y36(H,8),t.Y36(t.QbO,8),t.$8M("tabindex"))},o.\u0275cmp=t.Xpm({type:o,selectors:[["mat-expansion-panel-header"]],hostAttrs:["role","button",1,"mat-expansion-panel-header","mat-focus-indicator"],hostVars:15,hostBindings:function(e,i){1&e&&t.NdJ("click",function(){return i._toggle()})("keydown",function(s){return i._keydown(s)}),2&e&&(t.uIk("id",i.panel._headerId)("tabindex",i.tabIndex)("aria-controls",i._getPanelId())("aria-expanded",i._isExpanded())("aria-disabled",i.panel.disabled),t.Udp("height",i._getHeaderHeight()),t.ekj("mat-expanded",i._isExpanded())("mat-expansion-toggle-indicator-after","after"===i._getTogglePosition())("mat-expansion-toggle-indicator-before","before"===i._getTogglePosition())("_mat-animation-noopable","NoopAnimations"===i._animationMode))},inputs:{tabIndex:"tabIndex",expandedHeight:"expandedHeight",collapsedHeight:"collapsedHeight"},features:[t.qOj],ngContentSelectors:ee,decls:5,vars:1,consts:[[1,"mat-content"],["class","mat-expansion-indicator",4,"ngIf"],[1,"mat-expansion-indicator"]],template:function(e,i){1&e&&(t.F$t(q),t.TgZ(0,"span",0),t.Hsn(1),t.Hsn(2,1),t.Hsn(3,2),t.qZA(),t.YNc(4,W,1,1,"span",1)),2&e&&(t.xp6(4),t.Q6J("ngIf",i._showToggle()))},dependencies:[g.O5],styles:['.mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit;transition:height 225ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel-header._mat-animation-noopable{transition:none}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:none}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before{flex-direction:row-reverse}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 16px 0 0}[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 0 0 16px}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-expansion-panel-header-title,.mat-expansion-panel-header-description{display:flex;flex-grow:1;margin-right:16px;align-items:center}[dir=rtl] .mat-expansion-panel-header-title,[dir=rtl] .mat-expansion-panel-header-description{margin-right:0;margin-left:16px}.mat-expansion-panel-header-description{flex-grow:2}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:"";display:inline-block;padding:3px;transform:rotate(45deg);vertical-align:middle}.cdk-high-contrast-active .mat-expansion-panel .mat-expansion-panel-header.cdk-keyboard-focused:not([aria-disabled=true])::before,.cdk-high-contrast-active .mat-expansion-panel .mat-expansion-panel-header.cdk-program-focused:not([aria-disabled=true])::before,.cdk-high-contrast-active .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:hover:not([aria-disabled=true])::before{top:0;left:0;right:0;bottom:0;position:absolute;box-sizing:border-box;pointer-events:none;border:3px solid;border-radius:4px;content:""}.cdk-high-contrast-active .mat-expansion-panel-content{border-top:1px solid;border-top-left-radius:0;border-top-right-radius:0}\n'],encapsulation:2,data:{animation:[T.indicatorRotate]},changeDetection:0}),o})(),ae=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275dir=t.lG2({type:o,selectors:[["mat-panel-description"]],hostAttrs:[1,"mat-expansion-panel-header-description"]}),o})(),se=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275dir=t.lG2({type:o,selectors:[["mat-panel-title"]],hostAttrs:[1,"mat-expansion-panel-header-title"]}),o})(),re=(()=>{class o extends I{constructor(){super(...arguments),this._ownHeaders=new t.n_E,this._hideToggle=!1,this.displayMode="default",this.togglePosition="after"}get hideToggle(){return this._hideToggle}set hideToggle(e){this._hideToggle=(0,f.Ig)(e)}ngAfterContentInit(){this._headers.changes.pipe((0,E.O)(this._headers)).subscribe(e=>{this._ownHeaders.reset(e.filter(i=>i.panel.accordion===this)),this._ownHeaders.notifyOnChanges()}),this._keyManager=new w.Em(this._ownHeaders).withWrap().withHomeAndEnd()}_handleHeaderKeydown(e){this._keyManager.onKeydown(e)}_handleHeaderFocus(e){this._keyManager.updateActiveItem(e)}ngOnDestroy(){super.ngOnDestroy(),this._ownHeaders.destroy()}}return o.\u0275fac=function(){let n;return function(i){return(n||(n=t.n5z(o)))(i||o)}}(),o.\u0275dir=t.lG2({type:o,selectors:[["mat-accordion"]],contentQueries:function(e,i,a){if(1&e&&t.Suo(a,k,5),2&e){let s;t.iGM(s=t.CRH())&&(i._headers=s)}},hostAttrs:[1,"mat-accordion"],hostVars:2,hostBindings:function(e,i){2&e&&t.ekj("mat-accordion-multi",i.multi)},inputs:{multi:"multi",hideToggle:"hideToggle",displayMode:"displayMode",togglePosition:"togglePosition"},exportAs:["matAccordion"],features:[t._Bn([{provide:y,useExisting:o}]),t.qOj]}),o})(),de=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[g.ez,C.BQ,S,z]]}),o})()}}]);