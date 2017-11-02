import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";

export interface ImgModal {
  photoUrl: string;
}

@Component({
  selector: 'app-img-modal',
  templateUrl: './img-modal.component.html',
  styleUrls: ['./img-modal.component.scss']
})
export class ImgModalComponent extends DialogComponent<ImgModal, boolean> implements ImgModal {
  photoUrl: string;
  constructor(dialogService: DialogService) {
    super(dialogService);
  }

}
