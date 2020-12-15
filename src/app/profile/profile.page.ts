import { Component, OnInit } from '@angular/core';
import { SegmentChangeEventDetail } from '@ionic/core';
import { profilemodel } from '../shared/Models/profile.model';
import { ProfileService } from '../shared/Services/profile.service';
import * as $ from 'jquery';
import { LoaderService } from '../shared/Services/loader.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  profilelist: profilemodel[];
  errorMessage: string;
  showstockerprofile = true;
  public show: boolean = false;
  constructor(
    private profileservice: ProfileService,
    private Loader: LoaderService
  ) {}

  ngOnInit() {
    this.profileservice.getprofile().subscribe(
      (data: profilemodel[]) => {
        this.Loader.loadingPresent('بارگذاری اطلاعات ... ');
        this.profilelist = data;
        this.Loader.loadingDismiss();
      },
      (error) => {
        this.errorMessage = error.message;
      },
      () => {}
    );
  }
  changestockerprofile(event: CustomEvent<SegmentChangeEventDetail>) {
    if (event.detail.value === 'stockerprofile') {
      this.showstockerprofile = true;
    } else {
      this.showstockerprofile = false;
    }
  }
  toggle() {
    this.show = !this.show;
  }
}
