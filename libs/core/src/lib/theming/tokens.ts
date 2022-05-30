import { InjectionToken } from '@angular/core';
import { ThemingConfig } from './config';

export const THEMING_CONFIG_TOKEN = new InjectionToken<ThemingConfig>('FdThemingConfig');
