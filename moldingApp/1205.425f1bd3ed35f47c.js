"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1205],{1205:(O,d,s)=>{s.r(d),s.d(d,{LoginPageModule:()=>Z});var f=s(6019),a=s(9133),r=s(1704),c=s(4382),m=s(4762),p=s(8260),e=s(3668),h=s(6607),v=s(5243);let L=(()=>{class o{constructor(t,n){this.authService=t,this.alertService=n,this.tableUpdates=[{id:1,dateUpdate:new Date(2022,3,20),description:"Pour associer un outillage \xe0 un moulage il suffit de scanner le num\xe9ro d'OT dans l'OF.Vous devez le scanner comme un kit",title:"Module Moulage"},{id:2,dateUpdate:new Date(2022,3,20),description:"Le module outillage est ouvert pour test",title:"Module Outillage"}]}showUpdates(){return new Promise((t,n)=>{this.getUpdatesToShow().then(i=>{i&&i.forEach(l=>{this.alertService.simpleAlert("Info sur la mise \xe0 jours",l.title,l.description)})})})}getUpdates(t){return new Promise((n,i)=>{const l=this.tableUpdates.filter(g=>g.dateUpdate>new Date(t));n(l.length>0?l:null)})}getUpdatesToShow(){return this.getUpdates(this.authService.authUser.lastCon)}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(h.e),e.LFG(v.c))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();const U=["userName"],y=["password"],S=function(){return["/register"]},E=[{path:"",component:(()=>{class o{constructor(t,n,i,l,g,A,C){this.authService=t,this.formBuilder=n,this.router=i,this.alertController=l,this.loadingController=g,this.updateService=A,this.navControler=C,this.reRouteOpts=[{roles:["ROLE_MOULEUR","\tROLE_RESP_MOULAGE","ROLE_CE_MOULAGE"],route:"molding"},{roles:["ROLE_RESP_OUTIL","ROLE_CE_OUTIL","ROLE_OUTILLEUR"],route:"tooling"},{roles:["ROLE_ADMIN","ROLE_USER","ROLE_METHODE"],route:"tooling/manage-tool-team"}],this.loginForm=this.formBuilder.group({userName:["",a.kI.required],password:[""]})}ngAfterViewInit(){(0,e.X6Q)()&&(this.loginForm.setValue({userName:p.N.username,password:p.N.password}),this.onSubmit())}ngOnInit(){Notification.requestPermission().then(t=>{console.log(t),new Notification("Liste de trucs \xe0 faire",{body:'Coucou ! Votre t\xe2che "" arrive maintenant \xe0 \xe9ch\xe9ance.',icon:"assets/images/logoDaher.png"})})}onSubmit(){return(0,m.mG)(this,void 0,void 0,function*(){const t=yield this.loadingController.create({cssClass:"my-custom-class",message:"Patienter pendant la connexion",spinner:"lines-sharp"});yield t.present(),this.authService.authenticate(this.loginForm.get("userName").value,this.loginForm.get("password").value||this.loginForm.get("userName").value).then(()=>{this.updateService.showUpdates(),this.reRouteOpts.forEach(n=>{this.authService.authUser.roles.find(i=>n.roles.find(l=>l===i))?this.navControler.navigateForward(n.route):this.navControler.navigateForward("home")}),this.loginForm.reset()},()=>{this.presentAlertLoginError()}).finally(()=>{t.dismiss()})})}presentAlertLoginError(){return(0,m.mG)(this,void 0,void 0,function*(){yield(yield this.alertController.create({cssClass:"my-custom-class",header:"Erreur d'authentification",message:"Le nom d'utilisateur ou votre mot de passe n'est pas correct",buttons:[{text:"Fermer",role:"cancel",id:"cancel-button"}]})).present()})}getSpecialRole(t){return t[0]}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(h.e),e.Y36(a.qu),e.Y36(c.F0),e.Y36(r.Br),e.Y36(r.HT),e.Y36(L),e.Y36(r.SH))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-login"]],viewQuery:function(t,n){if(1&t&&(e.Gf(U,5),e.Gf(y,5)),2&t){let i;e.iGM(i=e.CRH())&&(n.userName=i.first),e.iGM(i=e.CRH())&&(n.password=i.first)}},decls:22,vars:5,consts:[[3,"fullscreen"],["fixed","",1,"full-height","ion-align-items-center","ion-justify-content-center"],[1,"ion-align-items-center"],[3,"formGroup","ngSubmit","keyup.enter"],["position","floating"],["color","danger"],["autocapitalize","on","required","","formControlName","userName","type","text","autocomplete","off","autofocus","true","inputmode","numeric","value","204292"],["userName",""],["formControlName","password","type","password","value",""],["password",""],["block","","color","primary","type","submit",3,"disabled"],["fill","clear",3,"routerLink"]],template:function(t,n){1&t&&(e.TgZ(0,"ion-content",0),e.TgZ(1,"ion-grid",1),e.TgZ(2,"ion-row",2),e.TgZ(3,"form",3),e.NdJ("ngSubmit",function(){return n.onSubmit()})("keyup.enter",function(){return n.onSubmit()}),e.TgZ(4,"ion-item"),e.TgZ(5,"ion-label",4),e._uU(6,"Nom d'utilisateur "),e.TgZ(7,"ion-text",5),e._uU(8,"*"),e.qZA(),e.qZA(),e._UZ(9,"ion-input",6,7),e.TgZ(11,"ion-note"),e._uU(12," Le nom d'utilisateur est le num\xe9ro de matricule pr\xe9sent sur le badge "),e.qZA(),e.qZA(),e.TgZ(13,"ion-item"),e.TgZ(14,"ion-label",4),e._uU(15,"Password "),e.qZA(),e._UZ(16,"ion-input",8,9),e.qZA(),e.TgZ(18,"ion-button",10),e._uU(19," Se connecter "),e.qZA(),e.TgZ(20,"ion-button",11),e._uU(21," Cr\xe9er un compte "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.Q6J("fullscreen",!0),e.xp6(3),e.Q6J("formGroup",n.loginForm),e.xp6(15),e.Q6J("disabled",n.loginForm.invalid),e.xp6(2),e.Q6J("routerLink",e.DdM(4,S)))},directives:[r.W2,r.jY,r.Nd,a._Y,a.JL,a.sg,r.Ie,r.Q$,r.yW,r.pK,r.j9,a.Q7,a.JJ,a.u,r.uN,r.YG,r.YI,c.rH],styles:[".full-height[_ngcontent-%COMP%]{height:100%;display:flex!important;flex-direction:column}ion-title[_ngcontent-%COMP%]{font-size:60px!important;text-transform:uppercase}"]}),o})()}];let P=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[c.Bz.forChild(E)],c.Bz]}),o})(),Z=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[f.ez,a.u5,r.Pc,P,a.UX]]}),o})()}}]);