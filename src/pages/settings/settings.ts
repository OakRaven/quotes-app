import { Component } from '@angular/core';
import { Toggle } from 'ionic-angular';
import { SettingsService } from '../../services/settings';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  constructor(private settingsService: SettingsService) {

  }

  shouldShowAlternativeBackground(): boolean {
    return this.settingsService.shouldShowAlternativeBackground();
  }

  onToggle(toggle: Toggle): void {
    this.settingsService.setAlternativeBackgroundOption(toggle.checked);
  }
}
