"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1491],{9172:(v,d,i)=>{i.d(d,{b:()=>g});var m=i(655),s=i(6435),r=i(3349);let g=(()=>{class u{constructor(c){this.loadingController=c}startLoading(c="Chargement ..."){this.loadingController.create({spinner:"lines",cssClass:"my-custom-class",message:c}).then(p=>{p.present()})}stopLoading(){return(0,m.mG)(this,void 0,void 0,function*(){setTimeout(()=>{this.loadingController.dismiss()},100)})}}return u.\u0275fac=function(c){return new(c||u)(s.LFG(r.HT))},u.\u0275prov=s.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})()},1491:(v,d,i)=>{i.r(d),i.d(d,{LoginPageModule:()=>R});var m=i(9808),s=i(4182),r=i(3349),g=i(4406),u=i(2340),e=i(6435),c=i(7704),p=i(9172),L=i(1086),h=i(2853);let U=(()=>{class o{constructor(t,n){this.authService=t,this.alertService=n,this.tableUpdates=[{id:1,dateUpdate:new Date(2022,4,9),description:"Pour associer un outillage \xe0 un moulage il suffit de scanner le num\xe9ro d'OT dans l'OF.Vous devez le scanner comme un kit",title:"Module Moulage"},{id:2,dateUpdate:new Date(2022,4,9),description:"Le module outillage est ouvert pour test",title:"Module Outillage"}]}showUpdates(){this.getUpdatesToShow().subscribe(t=>{t&&t.forEach(n=>{this.alertService.simpleAlert("Info sur la mise \xe0 jours",n.title,n.description)})})}getUpdates(t){const n=this.tableUpdates.filter(a=>a.dateUpdate>=new Date(t));return n.length>0?n:null}getUpdatesToShow(){return(0,L.of)(this.getUpdates(this.authService.authUser.lastCon))}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(c.e),e.LFG(h.c))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();const E=["userName"],S=["password"],O=function(){return["/register"]},P=[{path:"",component:(()=>{class o{constructor(t,n,a,f,T,M){this.authService=t,this.formBuilder=n,this.loadingService=a,this.updateService=f,this.navControler=T,this.alertService=M,this.reRouteOpts=[{roles:["ROLE_MOULEUR","\tROLE_RESP_MOULAGE","ROLE_CE_MOULAGE"],route:"molding"},{roles:["ROLE_RESP_OUTIL","ROLE_CE_OUTIL","ROLE_OUTILLEUR"],route:"tooling"},{roles:["ROLE_ADMIN","ROLE_USER","ROLE_METHODES"],route:"molding/create-molding"}]}ionViewWillEnter(){(0,e.X6Q)()&&this.loginForm.setValue({userName:u.N.username,password:u.N.password})}ngOnInit(){this.loginForm=this.formBuilder.group({userName:["",s.kI.required],password:[""]})}onSubmit(){this.loadingService.startLoading("Patienter pendant la connexion"),this.authService.authenticate(this.loginForm.get("userName").value,this.loginForm.get("password").value||this.loginForm.get("userName").value).subscribe(()=>{this.afterLoginActions()},t=>{this.logginError(t)})}afterLoginActions(){this.loadingService.stopLoading().then(()=>{this.loginForm.reset(),this.reRouteUser(),this.updateService.showUpdates()})}reRouteUser(){const t=this.reRouteOpts.find(n=>this.authService.authUser.roles.some(a=>n.roles.find(f=>f===a)));this.navControler.navigateForward(void 0===t?"home":t.route)}logginError(t){console.error(t),this.alertService.simpleAlert("Erreur d'authentification","","Le nom d'utilisateur ou votre mot de passe n'est pas correct"),this.loadingService.stopLoading()}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(c.e),e.Y36(s.qu),e.Y36(p.b),e.Y36(U),e.Y36(r.SH),e.Y36(h.c))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-login"]],viewQuery:function(t,n){if(1&t&&(e.Gf(E,5),e.Gf(S,5)),2&t){let a;e.iGM(a=e.CRH())&&(n.userName=a.first),e.iGM(a=e.CRH())&&(n.password=a.first)}},decls:22,vars:5,consts:[[3,"fullscreen"],["fixed","",1,"full-height","ion-align-items-center","ion-justify-content-center"],[1,"ion-align-items-center"],[3,"formGroup","ngSubmit","keyup.enter"],["position","floating"],["color","danger"],["autocapitalize","on","required","","formControlName","userName","type","text","autocomplete","off","autofocus","true","inputmode","numeric","value","204292"],["userName",""],["formControlName","password","type","password","value",""],["password",""],["block","","color","primary","type","submit",3,"disabled"],["fill","clear",3,"routerLink"]],template:function(t,n){1&t&&(e.TgZ(0,"ion-content",0),e.TgZ(1,"ion-grid",1),e.TgZ(2,"ion-row",2),e.TgZ(3,"form",3),e.NdJ("ngSubmit",function(){return n.onSubmit()})("keyup.enter",function(){return n.onSubmit()}),e.TgZ(4,"ion-item"),e.TgZ(5,"ion-label",4),e._uU(6,"Nom d'utilisateur "),e.TgZ(7,"ion-text",5),e._uU(8,"*"),e.qZA(),e.qZA(),e._UZ(9,"ion-input",6,7),e.TgZ(11,"ion-note"),e._uU(12," Le nom d'utilisateur est le num\xe9ro de matricule pr\xe9sent sur le badge "),e.qZA(),e.qZA(),e.TgZ(13,"ion-item"),e.TgZ(14,"ion-label",4),e._uU(15,"Password "),e.qZA(),e._UZ(16,"ion-input",8,9),e.qZA(),e.TgZ(18,"ion-button",10),e._uU(19," Se connecter "),e.qZA(),e.TgZ(20,"ion-button",11),e._uU(21," Cr\xe9er un compte "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.Q6J("fullscreen",!0),e.xp6(3),e.Q6J("formGroup",n.loginForm),e.xp6(15),e.Q6J("disabled",n.loginForm.invalid),e.xp6(2),e.Q6J("routerLink",e.DdM(4,O)))},directives:[r.W2,r.jY,r.Nd,s._Y,s.JL,s.sg,r.Ie,r.Q$,r.yW,r.pK,r.j9,s.Q7,s.JJ,s.u,r.uN,r.YG,r.YI,g.rH],styles:[".full-height[_ngcontent-%COMP%]{height:100%;display:flex!important;flex-direction:column}ion-title[_ngcontent-%COMP%]{font-size:60px!important;text-transform:uppercase}"]}),o})()}];let A=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[g.Bz.forChild(P)],g.Bz]}),o})(),R=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[m.ez,s.u5,r.Pc,A,s.UX]]}),o})()}}]);