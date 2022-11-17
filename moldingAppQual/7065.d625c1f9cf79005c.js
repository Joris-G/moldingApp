"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7065],{7065:(le,A,a)=>{a.r(A),a.d(A,{AdminModule:()=>se});var m=a(8576),p=a(714),h=a(8),u=a(1661),Z=a(5786),e=a(5e3),o=a(9928),y=a(3919),C=a(520),_=a(8393);let M=(()=>{class n{constructor(t,i){this.socket=t,this.http=i,this.httpHeaders=(new C.WM).append("Access-Control-Allow-Origin","*"),Notification.requestPermission().then(r=>{console.log(r),"granted"===r&&(this.socket.on("connect_failed",()=>{}),this.socket.on("notification",l=>{new Notification("Notification depuis le serveur",{body:l.message,icon:"assets/icons/icon-72x72.png"})}))})}newNotif(){this.http.post("http://localhost:3000/send-notification",{message:"testmessage"},{headers:this.httpHeaders}).subscribe(t=>{})}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(_.sk),e.LFG(C.eN))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),w=(()=>{class n{constructor(t,i,r,l){this.authService=t,this.router=i,this.notificationsService=r,this.socket=l}ngOnDestroy(){this.socket.disconnect()}ionViewDidLeave(){console.log("view did leave"),this.socket.disconnect()}ngOnInit(){this.user=this.authService.authUser}logoutClick(){this.authService.logout().subscribe(()=>{this.router.navigate(["/login"])})}navigateHome(){this.router.navigate(["/home"])}notifyClick(){console.log("notify click"),this.notificationsService.newNotif()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(y.e),e.Y36(u.F0),e.Y36(M),e.Y36(_.sk))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-shared-admin-header"]],decls:17,vars:2,consts:[[3,"translucent"],["color","primary"],["slot","start"],["color","light","menu","admin-menu","autoHide","false"],["src","assets/images/logoDaherFondBleu.png",1,"ion-hide-sm-down","logo",3,"click"],[1,"ion-text-uppercase","ion-text-center"],["id","button-profil","color","light","slot","end","outline","",1,"ion-margin-end"],["name","person-circle-outline"],["color","light"],["slot","end","color","danger",1,"ion-hide-sm-down",3,"click"],["slot","end","name","log-out-outline"],[1,"ion-hide-md-down"],["slot","end",3,"click"]],template:function(t,i){1&t&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-buttons",2),e._UZ(3,"ion-menu-button",3),e.TgZ(4,"ion-img",4),e.NdJ("click",function(){return i.navigateHome()}),e.qZA()(),e.TgZ(5,"ion-title",5),e._uU(6,"Administration"),e.qZA(),e.TgZ(7,"ion-chip",6),e._UZ(8,"ion-icon",7),e.TgZ(9,"ion-label",8),e._uU(10),e.qZA()(),e.TgZ(11,"ion-button",9),e.NdJ("click",function(){return i.logoutClick()}),e._UZ(12,"ion-icon",10),e.TgZ(13,"ion-label",11),e._uU(14,"D\xe9connexion"),e.qZA()(),e.TgZ(15,"ion-button",12),e.NdJ("click",function(){return i.notifyClick()}),e._uU(16," Notify "),e.qZA()()()),2&t&&(e.Q6J("translucent",!1),e.xp6(10),e.Oqu(null==i.user?null:i.user.username))},dependencies:[o.YG,o.Sm,o.hM,o.Gu,o.gu,o.Xz,o.Q$,o.fG,o.sr,o.wd],styles:[".logo[_ngcontent-%COMP%]{width:100px}"]}),n})();const S=["menuAdmin"];let O=(()=>{class n{constructor(t){this.navCtrl=t}ionViewWillEnter(){this.menuAdmin.open()}navigate(t){this.navCtrl.navigateForward(t)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(o.SH))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-admin"]],viewQuery:function(t,i){if(1&t&&e.Gf(S,5),2&t){let r;e.iGM(r=e.CRH())&&(i.menuAdmin=r.first)}},decls:24,vars:1,consts:[["color","medium",3,"fullscreen"],["menuId","admin-menu","side","start","type","push","contentId","admin-content","open","true"],["menuAdmin",""],["color","danger"],["auto-hide","true"],["button","",3,"click"],["slot","end"],["button",""],["id","admin-content"]],template:function(t,i){1&t&&(e._UZ(0,"app-shared-admin-header"),e.TgZ(1,"ion-content",0)(2,"ion-menu",1,2)(4,"ion-header")(5,"ion-toolbar",3)(6,"ion-title"),e._uU(7,"Menu de l'admnistration"),e.qZA()()(),e.TgZ(8,"ion-content")(9,"ion-list")(10,"ion-menu-toggle",4)(11,"ion-item",5),e.NdJ("click",function(){return i.navigate("admin/admin-user")}),e.TgZ(12,"ion-label"),e._uU(13,"Utilisateurs"),e.qZA(),e.TgZ(14,"ion-badge",6),e._uU(15,"11"),e.qZA()()(),e.TgZ(16,"ion-item",7),e._uU(17,"Outillages"),e.qZA(),e.TgZ(18,"ion-menu-toggle",4)(19,"ion-item",5),e.NdJ("click",function(){return i.navigate("admin/admin-molding")}),e._uU(20,"Moulages"),e.qZA()(),e.TgZ(21,"ion-item",7),e._uU(22,"Kits"),e.qZA()()()(),e._UZ(23,"ion-router-outlet",8),e.qZA()),2&t&&(e.xp6(1),e.Q6J("fullscreen",!1))},dependencies:[o.yp,o.W2,o.Gu,o.Ie,o.Q$,o.q_,o.z0,o.zc,o.sr,o.wd,o.jP,w]}),n})();var T=a(388),f=a(591),F=a(8117),D=a(2340),L=a(6322);let v=(()=>{class n{constructor(t){this.requestService=t,this.filteredMoldings$=new f.X([]),this.page=new f.X(1),this.uniqueTools$=new f.X([]),this.moldings=[],this.moldingsFilters={tools:[],username:[]},this.page.asObservable().subscribe(i=>{this.getMoldings(i).subscribe(r=>{this.moldings.push(...r),this.filteredMoldings=this.moldings,this.filteredMoldings$.next(this.filteredMoldings),this.uniqueTools$.next(this.moldings.filter((l,c)=>this.filteredMoldings.find(g=>g.outillage===l.outillage).id===l.id).map(l=>l.OT))})})}getMoldings(t=1,i=5){return this.requestService.createGetRequest(`${D.N.moldingApi}moldings?page=${t}&itemsPerPage=${i}`).pipe((0,F.B)())}getNextPage(){}resetFilters(){this.moldingsFilters={tools:[],username:[]},this.filteredMoldings$.next(this.moldings)}applyUserFilter(t){this.moldingsFilters.username.push(t),this.applyFilters()}applyToolFilter(t){this.moldingsFilters.tools=Array.from(t),this.applyFilters()}applyFilters(){const t=this.filteredMoldings.filter((i,r)=>{const l=this.isToolFilter(i),c=this.isUserFilter(i);return l&&c});this.filteredMoldings$.next(t)}isToolFilter(t){return this.moldingsFilters.tools.length<=0||this.moldingsFilters.tools.some(i=>t.OT.sapToolNumber.toString().includes(i))}isUserFilter(t){return this.moldingsFilters.username.length<=0||this.moldingsFilters.username.some(i=>t.userCreat.username.includes(i))}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(L.s))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var d=a(9808);function x(n,s){if(1&n&&(e.TgZ(0,"ion-select-option",9),e._uU(1),e.qZA()),2&n){const t=s.$implicit;e.Q6J("value",t),e.xp6(1),e.hij(" ",t.designation," ")}}let k=(()=>{class n{constructor(t){this.moldingListService=t,this.uniqueTools=this.moldingListService.uniqueTools$.asObservable()}ngOnInit(){}filterToolNameChange(t){console.log(t.value),this.moldingListService.applyToolFilter(t.value)}filterToolChange(t){const r=t.detail.value.map(l=>l.sapToolNumber.toString());this.moldingListService.applyToolFilter(r)}filterCreateByChange(t){const i=t.toString();console.log(i),this.moldingListService.applyUserFilter(i)}resetFiltersClick(){this.moldingListService.resetFilters()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(v))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-moldings-filters"]],decls:29,vars:4,consts:[[1,"filters-container"],["type","text","placeholder","Nom d'utilisateur",3,"ionInput"],["inputUsername",""],["color","dark","display-format","DD.MM.YYYY","presentation","date","preferWheel","false",3,"firstDayOfWeek"],["type","text","placeholder","Num\xe9ro d'OT",3,"ionInput"],["inputTool",""],["multiple","true","placeholder","Selectionner outillage",3,"ionChange"],[3,"value",4,"ngFor","ngForOf"],["expand","block","fill","outline","shape","round",3,"click"],[3,"value"]],template:function(t,i){if(1&t){const r=e.EpF();e.TgZ(0,"div",0)(1,"ion-item")(2,"ion-label"),e._uU(3,"Cr\xe9\xe9e par"),e.qZA(),e.TgZ(4,"ion-input",1,2),e.NdJ("ionInput",function(){e.CHM(r);const c=e.MAs(5);return e.KtG(i.filterCreateByChange(c.value))}),e.qZA()(),e.TgZ(6,"ion-item")(7,"ion-label"),e._uU(8,"Date de cr\xe9ation"),e.qZA(),e._UZ(9,"ion-datetime",3),e.qZA(),e.TgZ(10,"ion-item")(11,"ion-label"),e._uU(12,"Salle de moulage"),e.qZA()(),e.TgZ(13,"ion-item")(14,"ion-label"),e._uU(15,"Programme avion"),e.qZA()(),e.TgZ(16,"ion-item")(17,"ion-label"),e._uU(18,"N\xb0OT"),e.qZA(),e.TgZ(19,"ion-input",4,5),e.NdJ("ionInput",function(){e.CHM(r);const c=e.MAs(20);return e.KtG(i.filterToolNameChange(c.value))}),e.qZA()(),e.TgZ(21,"ion-item")(22,"ion-label"),e._uU(23,"Outillage"),e.qZA(),e.TgZ(24,"ion-select",6),e.NdJ("ionChange",function(c){return i.filterToolChange(c)}),e.YNc(25,x,2,2,"ion-select-option",7),e.ALo(26,"async"),e.qZA()(),e.TgZ(27,"ion-button",8),e.NdJ("click",function(){return i.resetFiltersClick()}),e._uU(28," Restaurer "),e.qZA()()}2&t&&(e.xp6(9),e.Q6J("firstDayOfWeek",1),e.xp6(16),e.Q6J("ngForOf",e.lcZ(26,2,i.uniqueTools)))},dependencies:[d.sg,o.YG,o.x4,o.pK,o.Ie,o.Q$,o.t9,o.n0,o.QI,o.j9,d.Ov],styles:[".filters-container[_ngcontent-%COMP%]{padding:.5rem;background-color:var(--ion-color-light)}"]}),n})();var R=a(5625);function q(n,s){1&n&&e._UZ(0,"ion-spinner",13)}function N(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"ion-row",14),e.NdJ("click",function(){e.CHM(t);const r=e.MAs(2),l=e.oxw();return e.KtG(l.toggleOptions(r))}),e.TgZ(1,"ion-item-sliding",15,16)(3,"ion-item",17)(4,"ion-col",8)(5,"ion-chip",18)(6,"ion-label"),e._uU(7),e.qZA()()(),e.TgZ(8,"ion-col")(9,"ion-text"),e._uU(10),e.ALo(11,"DateHeure"),e.qZA()(),e.TgZ(12,"ion-col")(13,"ion-text"),e._uU(14),e.qZA()(),e.TgZ(15,"ion-col")(16,"ion-text"),e._uU(17),e.qZA()()(),e.TgZ(18,"ion-item-options")(19,"ion-item-option",19),e._uU(20,"OUVRIR"),e.qZA()()()()}if(2&n){const t=s.$implicit;e.xp6(1),e.Q6J("disabled",!0),e.xp6(4),e.Q6J("color",t.isActive?"success":"danger"),e.xp6(2),e.Oqu(t.id),e.xp6(3),e.hij(" ",e.lcZ(11,8,t.moldingDay)," "),e.xp6(4),e.hij(" ",t.userCreat.username," "),e.xp6(3),e.AsE(" ",t.OT.sapToolNumber," - ",t.OT.designation,""),e.xp6(2),e.Q6J("routerLink","/molding/create-molding/"+t.id)}}let I=(()=>{class n{constructor(t){this.moldingListService=t,this.filteredMoldings=[],this.moldingListLoading=!1}nextPage(){this.moldingListService.page.next(this.moldingListService.page.value+1)}ngOnInit(){this.moldingListLoading=!0,this.filteredMoldings$=this.moldingListService.filteredMoldings$.asObservable(),this.filteredMoldings$.subscribe(t=>{this.moldingListLoading=!1,this.filteredMoldings=t})}ngOnChanges(t){}openMoldingClick(t){}toggleOptions(t){t.open("end"),setTimeout(()=>{t.close()},3e3)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(v))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-admin-molding-list"]],features:[e.TTD],decls:30,vars:4,consts:[[1,"molding-list-content",3,"fullscreen"],["slot","end","name","circles",4,"ngIf"],["contentId","filters-content","menuId","filters-menu"],["color","light"],[1,"ion-padding"],["id","filters-content",3,"fullscreen"],[2,"width","100%"],["color","medium",1,"ion-padding"],["size","1"],["menu","filters-menu","autoHide","false"],["name","filter-outline"],[3,"click",4,"ngFor","ngForOf"],["expand","block","fill","clear","shape","round",3,"click"],["slot","end","name","circles"],[3,"click"],[3,"disabled"],["slidingItem",""],["button","","lines","full",1,"ion-text-left"],["mode","ios","outline","true",3,"color"],[3,"routerLink"]],template:function(t,i){1&t&&(e.TgZ(0,"ion-content",0)(1,"ion-header")(2,"ion-toolbar")(3,"ion-title"),e._uU(4,"Liste des moulages"),e.qZA(),e.YNc(5,q,1,0,"ion-spinner",1),e.qZA()(),e.TgZ(6,"ion-menu",2)(7,"ion-header")(8,"ion-toolbar",3)(9,"ion-title"),e._uU(10,"Recherche avanc\xe9e"),e.qZA()()(),e.TgZ(11,"ion-content",4),e._UZ(12,"app-moldings-filters"),e.qZA()(),e.TgZ(13,"ion-content",5)(14,"ion-grid",6)(15,"ion-row",7)(16,"ion-col",8)(17,"ion-menu-button",9),e._UZ(18,"ion-icon",10),e.qZA()(),e.TgZ(19,"ion-col"),e._uU(20,"Date de cr\xe9ation"),e.qZA(),e.TgZ(21,"ion-col"),e._uU(22,"Cr\xe9\xe9 par"),e.qZA(),e.TgZ(23,"ion-col"),e._uU(24,"Outillage de moulage"),e.qZA()(),e.YNc(25,N,21,10,"ion-row",11),e.qZA()(),e.TgZ(26,"ion-footer")(27,"ion-toolbar")(28,"ion-button",12),e.NdJ("click",function(){return i.nextPage()}),e._uU(29," Charger plus "),e.qZA()()()()),2&t&&(e.Q6J("fullscreen",!0),e.xp6(5),e.Q6J("ngIf",i.moldingListLoading),e.xp6(8),e.Q6J("fullscreen",!0),e.xp6(12),e.Q6J("ngForOf",i.filteredMoldings))},dependencies:[d.sg,d.O5,o.YG,o.hM,o.wI,o.W2,o.fr,o.jY,o.Gu,o.gu,o.Ie,o.u8,o.IK,o.td,o.Q$,o.z0,o.fG,o.Nd,o.PQ,o.yW,o.sr,o.wd,o.YI,u.rH,k,R.B],styles:["ion-grid[_ngcontent-%COMP%]{height:100%;overflow:hidden;overflow-y:scroll}.molding-list-content[_ngcontent-%COMP%]{height:100%}"]}),n})(),E=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-admin-molding-dashboard"]],decls:17,vars:0,template:function(t,i){1&t&&(e.TgZ(0,"ion-card")(1,"ion-card-header")(2,"ion-card-title"),e._uU(3,"Tableau de bord"),e.qZA()(),e.TgZ(4,"ion-card-content")(5,"ion-card")(6,"ion-card-header")(7,"ion-card-subtitle"),e._uU(8,"Nouveaux moulages"),e.qZA()(),e.TgZ(9,"ion-card-content"),e._uU(10," GRAPHIQUE ICI "),e.qZA()(),e.TgZ(11,"ion-card")(12,"ion-card-header")(13,"ion-card-subtitle"),e._uU(14,"Nombre de connexions par jour"),e.qZA()(),e.TgZ(15,"ion-card-content"),e._uU(16," GRAPHIQUE ICI "),e.qZA()()()())},dependencies:[o.PM,o.FN,o.Zi,o.tO,o.Dq]}),n})(),P=(()=>{class n{constructor(t,i){this.moldingService=t,this.moldingListService=i,this.moldingsError=!1}ngOnInit(){this.moldings$=this.moldingListService.getMoldings()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(T.s),e.Y36(v))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-admin-molding"]],features:[e._Bn([T.s])],decls:11,vars:1,consts:[["color","dark"],["color","light",3,"fullscreen"],["fixed","",1,"grid-content"],["size","9",1,"ion-no-padding"],["size","3"]],template:function(t,i){1&t&&(e.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-title"),e._uU(3,"Administration des moulages"),e.qZA()()(),e.TgZ(4,"ion-content",1)(5,"ion-grid",2)(6,"ion-row")(7,"ion-col",3),e._UZ(8,"app-admin-molding-list"),e.qZA(),e.TgZ(9,"ion-col",4),e._UZ(10,"app-admin-molding-dashboard"),e.qZA()()()()),2&t&&(e.xp6(4),e.Q6J("fullscreen",!1))},dependencies:[o.wI,o.W2,o.jY,o.Gu,o.Nd,o.sr,o.wd,I,E],styles:[".grid-content[_ngcontent-%COMP%]{width:100%;height:100%;overflow:hidden}.grid-content[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]{height:100%}"]}),n})();var H=a(9356),U=a(4501),Y=a(655),B=a(4850),J=a(6862),Q=a(512);let G=(()=>{class n{constructor(t){this.elemRef=t}ngOnInit(){this.setBorder(),this.setColor()}setColor(){let t;switch(this.poste){case"Operateur":t="primary";break;case"Maitrise":t="secondary"}this.elemRef.nativeElement.style.color=`var(--ion-color-${t})`}setBorder(){let r;r="string"==typeof this.borderColor?this.borderColor:this.borderColor?"success":"danger";const l=`2px solid var(--ion-color-${r})`;console.log(l,this.borderColor),this.elemRef.nativeElement.style.border=l,this.elemRef.nativeElement.style.boxShadow=`0 0 5px var(--ion-color-${r})`}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(e.SBq))},n.\u0275dir=e.lG2({type:n,selectors:[["","appBorderColor",""]],inputs:{borderColor:"borderColor",poste:"poste"}}),n})(),$=(()=>{class n{constructor(t,i){this.elemRef=t,this.renderer=i}ngOnInit(){this.renderer.setStyle(this.elemRef.nativeElement,"background","var(--ion-color-light)"),this.renderer.addClass(this.elemRef.nativeElement,"ion-padding")}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(e.SBq),e.Y36(e.Qsj))},n.\u0275dir=e.lG2({type:n,selectors:[["ion-row","appHeaderRow",""]]}),n})(),j=(()=>{class n{constructor(t,i){this.elemRef=t,this.renderer=i}onMouseEnter(){this.highlight(!0)}onMouseLeave(){this.highlight(!1)}ngOnInit(){this.renderer.setStyle(this.elemRef.nativeElement,"cursor","pointer"),this.renderer.setStyle(this.elemRef.nativeElement,"border","1px solid var(--ion-color-light)");for(let t=0;t<this.elemRef.nativeElement.children.length;t++){const i=this.elemRef.nativeElement.children[t];this.renderer.setStyle(i,"display","flex"),this.renderer.setStyle(i,"justify-content","left"),this.renderer.setStyle(i,"align-items","center")}}highlight(t){t?(this.elemRef.nativeElement.style.backgroundColor="var(--ion-color-secondary)",this.elemRef.nativeElement.style.color="white"):(this.elemRef.nativeElement.style.backgroundColor="",this.elemRef.nativeElement.style.color="")}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(e.SBq),e.Y36(e.Qsj))},n.\u0275dir=e.lG2({type:n,selectors:[["ion-row","appDataRow",""]],hostBindings:function(t,i){1&t&&e.NdJ("mouseenter",function(){return i.onMouseEnter()})("mouseleave",function(){return i.onMouseLeave()})}}),n})();function z(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"ion-row",6),e.NdJ("click",function(){const l=e.CHM(t).$implicit,c=e.oxw(2);return e.KtG(c.onSelectUser(l))}),e.TgZ(1,"ion-col",3),e._UZ(2,"ion-icon",7),e.qZA(),e.TgZ(3,"ion-col",4),e._uU(4),e.qZA(),e.TgZ(5,"ion-col",4),e._uU(6),e.qZA(),e.TgZ(7,"ion-col",4),e._uU(8),e.qZA(),e.TgZ(9,"ion-col",4),e._uU(10),e.qZA()()}if(2&n){const t=s.$implicit;e.xp6(2),e.Q6J("borderColor",t.isActive)("poste",t.poste.libelle),e.xp6(2),e.hij(" ",t.username," "),e.xp6(2),e.hij(" ",t.nom.toUpperCase()," "),e.xp6(2),e.hij(" ",t.prenom.charAt(0).toUpperCase()+t.prenom.slice(1).toLowerCase()," "),e.xp6(2),e.hij(" ",t.matricule," ")}}function W(n,s){if(1&n&&(e.ynx(0),e.TgZ(1,"ion-grid",1)(2,"ion-row",2),e._UZ(3,"ion-col",3),e.TgZ(4,"ion-col",4),e._uU(5,"Nom d'utilisateur"),e.qZA(),e.TgZ(6,"ion-col",4),e._uU(7,"Nom"),e.qZA(),e.TgZ(8,"ion-col",4),e._uU(9,"Pr\xe9nom"),e.qZA(),e.TgZ(10,"ion-col",4),e._uU(11,"Matricule"),e.qZA()(),e.YNc(12,z,11,6,"ion-row",5),e.qZA(),e.BQk()),2&n){const t=s.ngIf;e.xp6(12),e.Q6J("ngForOf",t)}}const X={ROLE_USER:"Utilisateur",ROLE_METHODES:"Pr\xe9parateur",ROLE_CE_OUTIL:"Chef d'\xe9quipe outillage",ROLE_MOULEUR:"Mouleur",ROLE_ADMIN:"Administrateur"};let V=(()=>{class n{constructor(t,i,r,l){this.userService=t,this.loadingService=i,this.alertService=r,this.modalCtrl=l}ngOnInit(){this.users$=this.userService.getUsers().pipe((0,B.U)(t=>t.map(i=>(i.roles=i.roles.map(r=>{const l=(n=>X[n])(r);return l||r}),i))))}onSelectUser(t){return(0,Y.mG)(this,void 0,void 0,function*(){(yield this.modalCtrl.create({component:J.A,componentProps:{user:t}})).present()})}statusChanged(t,i){this.confirmUser(i,t.detail.value)}confirmUser(t,i){this.loadingService.startLoading("Mise \xe0 jour de l'utilisateur"),this.userService.confirmUser(t.id,i).subscribe(r=>{this.loadingService.stopLoading()},r=>{this.loadingService.stopLoading(),this.alertService.simpleAlert("Erreur","Le serveur \xe0 renvoy\xe9 une erreur",`${r}`)})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(h.f),e.Y36(U.b),e.Y36(Q.c),e.Y36(o.IN))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-admin-user-table"]],decls:2,vars:3,consts:[[4,"ngIf"],["fixed",""],["appHeaderRow",""],["size","1"],["size","2"],["appDataRow","",3,"click",4,"ngFor","ngForOf"],["appDataRow","",3,"click"],["name","person-circle","appBorderColor","","size","large",3,"borderColor","poste"]],template:function(t,i){1&t&&(e.YNc(0,W,13,1,"ng-container",0),e.ALo(1,"async")),2&t&&e.Q6J("ngIf",e.lcZ(1,1,i.users$))},dependencies:[d.sg,d.O5,o.wI,o.jY,o.gu,o.Nd,G,$,j,d.Ov],styles:["ion-icon[_ngcontent-%COMP%]{border-radius:50%}"]}),n})();const ee=["newUsers"],te=[{path:"",component:O,children:[{path:"admin-user",component:(()=>{class n{constructor(t,i,r){this.datePipe=t,this.loadingService=i,this.serviceService=r,this.weeklyLabels=[],this.weeklyUsers=[]}ngOnInit(){this.users=[],this.loadingService.startLoading(),this.serviceService.getServices().subscribe(t=>{t.forEach(i=>{i.users.forEach(r=>this.users.push(r))}),this.weeklyLabels=this.createWeeklyLabel(),this.weeklyUsers=this.createWeeklyUserData(),this.lineChart=new H.Z(this.newUsersCanvas.nativeElement,{type:"line",data:{labels:this.weeklyLabels,datasets:[{label:"Evolution du nombre d'inscription",fill:!1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(75,192,192,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:this.weeklyUsers,spanGaps:!1}]}}),this.lineChart.update(),this.loadingService.stopLoading()})}createWeeklyLabel(){const t=new Date,i=new Date(2022,0,1),r=[];for(;i<t;)r.push(this.datePipe.transform(i,"dd/MM")),i.setDate(i.getDate()+7);return r}createWeeklyUserData(){const t=new Date;let i=new Date(2022,0,1);const r=[];for(;i<t;){const l=new Date(i);l.setDate(l.getDate()+7);const b=this.users.filter(g=>new Date(g.createdAt)>i&&new Date(g.createdAt)<=l).length;r.push(b),i=l}return r}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(d.uU),e.Y36(U.b),e.Y36(p.z))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-admin-user"]],viewQuery:function(t,i){if(1&t&&e.Gf(ee,5),2&t){let r;e.iGM(r=e.CRH())&&(i.newUsersCanvas=r.first)}},features:[e._Bn([h.f,p.z])],decls:30,vars:0,consts:[["color","light"],["false",""],["size","8"],[1,"table-card-content"],["size","4"],["newUsers",""]],template:function(t,i){1&t&&(e.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),e._uU(3,"Administration des utilisateurs"),e.qZA()()(),e.TgZ(4,"ion-content",0)(5,"ion-grid",1)(6,"ion-row")(7,"ion-col",2)(8,"ion-card")(9,"ion-card-content",3),e._UZ(10,"app-admin-user-table"),e.qZA()()(),e.TgZ(11,"ion-col",4)(12,"ion-card")(13,"ion-card-header")(14,"ion-card-title"),e._uU(15,"Tableau de bord"),e.qZA()(),e.TgZ(16,"ion-card-content")(17,"ion-card")(18,"ion-card-header")(19,"ion-card-subtitle"),e._uU(20,"Nouveaux inscrits"),e.qZA()(),e.TgZ(21,"ion-card-content"),e._UZ(22,"canvas",null,5),e.qZA()(),e.TgZ(24,"ion-card")(25,"ion-card-header")(26,"ion-card-subtitle"),e._uU(27,"Nombre de connexions par jour"),e.qZA()(),e.TgZ(28,"ion-card-content"),e._uU(29," GRAPHIQUE ICI "),e.qZA()()()()()()()())},dependencies:[o.PM,o.FN,o.Zi,o.tO,o.Dq,o.wI,o.W2,o.jY,o.Gu,o.Nd,o.sr,o.wd,V],styles:["mat-cell[_ngcontent-%COMP%]{padding:100px!important}table[_ngcontent-%COMP%]{width:100%}.commands[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-around}ion-card[_ngcontent-%COMP%]{max-height:100%;flex-grow:1}.table-card-content[_ngcontent-%COMP%]{width:100%;height:100%;overflow:auto}.table-card-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%}"]}),n})(),canActivate:[Z.p],data:{expectedRole:["ROLE_ADMIN"]}},{path:"admin-molding",canActivate:[Z.p],data:{expectedRole:["ROLE_ADMIN"]},component:P}]}];let ne=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[u.Bz.forChild(te),u.Bz]}),n})();var ie=a(6015),oe=a(4446);let re=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({providers:[ie.e],imports:[m.o,oe.d]}),n})(),se=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({providers:[h.f,p.z],imports:[re,ne,m.o,m.o]}),n})()}}]);