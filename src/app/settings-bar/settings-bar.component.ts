import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SettingsService } from '../settings-service/settings.service';


@Component({
  selector: 'settings-bar',
  templateUrl: './settings-bar.component.html',
  styleUrls: ['./settings-bar.component.css']
})
export class SettingsBarComponent implements OnInit {

  class="hidden";
  settingsService:SettingsService;
  constructor(settingsService:SettingsService, private route: ActivatedRoute)
  {
    this.settingsService = settingsService;
  }

  ngOnInit(): void
  {
    this.route.queryParams.forEach(p => {
      if (p.extrasettings === "true")
        this.class = "";
    });
  }

}
