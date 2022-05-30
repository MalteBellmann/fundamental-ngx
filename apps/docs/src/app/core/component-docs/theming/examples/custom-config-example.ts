import { NgModule } from '@angular/core';
import { ThemingConfig, ThemingModule } from '@fundamental-ngx/core/theming';

const CUSTOM_THEMING_CONFIGURATION = new ThemingConfig();
// Removes built-in themes from the list of available themes.
CUSTOM_THEMING_CONFIGURATION.excludeDefaultThemes = false;
// Defines custom theme to be applied to the application.
CUSTOM_THEMING_CONFIGURATION.defaultTheme = 'sap_horizon';
// Disables runtime theme change based on URL query parameter.
CUSTOM_THEMING_CONFIGURATION.changeThemeOnQueryParamChange = false;
// Default theme fonts file.
CUSTOM_THEMING_CONFIGURATION.defaultFontFile = 'sap_horizon';
// Whether to exclude theming font file.
CUSTOM_THEMING_CONFIGURATION.excludeThemingFonts = false;

@NgModule({
    imports: [ThemingModule.withConfig(CUSTOM_THEMING_CONFIGURATION)]
})
export class ExampleAppModule {}
