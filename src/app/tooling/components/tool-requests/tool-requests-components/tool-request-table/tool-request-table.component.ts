import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { trigger, state, style } from '@angular/animations';
import { Observable } from 'rxjs';
import { NavController } from '@ionic/angular';
import { ToolRequest } from 'src/app/_interfaces/tooling/tool-request';
import { ToolRequestsService } from '../../tool-requests-data/tool-requests.service';
import { RoleGuard } from 'src/app/shared/services/users/role.guard';

@Component({
  selector: 'app-tool-request-table',
  templateUrl: './tool-request-table.component.html',
  styleUrls: ['./tool-request-table.component.scss'],
  animations: [
    trigger('openClose', [
      // animation triggers go here
      state('open', style({
        backgroundColor: 'DarkOrange',
        opacity: '0.7'
      })),
    ])
  ]
})
export class ToolRequestTableComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  public newToolRequestsList$: Observable<ToolRequest[]>;
  public displayedRequestColumns: string[] = ['statut', 'id', 'tool', 'createdAt', 'userCreat', 'needDate', 'buttons'];
  public isAdmin = false;

  constructor(
    private navCtrl: NavController,
    private authGuard: RoleGuard,
    private toolRequestsService: ToolRequestsService
  ) {
    this.newToolRequestsList$ = this.toolRequestsService.filtersList.asObservable();
  }

  nextClick() { this.toolRequestsService.getNextPage() }
  openRequestClick(requestToOpen: ToolRequest) {
    if (requestToOpen.controle) { this.navCtrl.navigateForward('tooling/3D-tool/' + requestToOpen.id); }
    if (requestToOpen.maintenance) { this.navCtrl.navigateForward('tooling/repair-tool/' + requestToOpen.id); }
  }

  ngOnInit() {
    this.isAdmin = this.authGuard.isRole(['ROLE_ADMIN']);
  }

  userClick() {
    // TODO fonction à implémenter
  }


  // TODO créer une directive plus propre plutot que ce code cela permettre d'enlever
  // les IF du template pour choisir entre maintenance et controle
  openControlClick(request: ToolRequest) {
    this.navCtrl.navigateForward('tooling/3D-tool/' + request.id);
  }

  openMaintenanceClick(request: ToolRequest) {
    this.navCtrl.navigateForward('tooling/repair-tool/' + request.id);
  }

  removeRequestClick(request: ToolRequest) {
    // this.toolRequestService.removeRequest(request)
    //   .then(() => {
    //     // this.updateRequestList();
    //   });
  }


  // TODO Créer une directive pour la bordure
  getBorder(request: ToolRequest | string): string {
    if (this.getType(request) === 'controle') {
      return '4px lawngreen solid';
    } else if (this.getType(request) === 'maintenance') {
      return '4px yellow solid';
    }
  }

  private getType(request: ToolRequest | string): string {
    if (typeof (request) === 'string') { return request; }
    if (request.controle) {
      return 'controle';
    } else if (request.maintenance) {
      return 'maintenance';
    }
  }
}