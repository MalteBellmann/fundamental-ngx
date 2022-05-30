import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemingConfig } from './config';
import { ThemingService } from './theming.service';
import { THEMING_CONFIG_TOKEN } from './tokens';

@NgModule({
    imports: [CommonModule],
    providers: [
        {
            provide: THEMING_CONFIG_TOKEN,
            useValue: new ThemingConfig()
        },
        ThemingService
    ]
})
export class ThemingModule {
    static withConfig(config: ThemingConfig): ModuleWithProviders<ThemingModule> {
        return {
            ngModule: ThemingModule,
            providers: [
                {
                    provide: THEMING_CONFIG_TOKEN,
                    useValue: config
                }
            ]
        };
    }
}
