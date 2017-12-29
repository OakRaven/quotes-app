export class SettingsService {
    private showAlternativeBackground: boolean = false;

    setAlternativeBackgroundOption(value: boolean): void {
        this.showAlternativeBackground = value;
    }

    shouldShowAlternativeBackground(): boolean {
        return this.showAlternativeBackground === true;
    }
}