import { ImgModalComponent } from '../../components/img-modal/img-modal.component';
import { DialogService } from 'ng2-bootstrap-modal';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-to-approve-detail',
  templateUrl: './project-to-approve-detail.component.html',
  styleUrls: ['./project-to-approve-detail.component.scss']
})
export class ProjectToApproveDetailComponent implements OnInit {

  constructor(private dialogService: DialogService) { }

  openModalPicture(photoUrl: string) {
    console.log('called');
    this.dialogService.addDialog(ImgModalComponent, {photoUrl});
  }

  ngOnInit() {
  }

}
