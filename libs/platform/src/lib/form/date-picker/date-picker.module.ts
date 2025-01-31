import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DatePickerModule } from '@fundamental-ngx/core/date-picker';
import { PipeModule } from '@fundamental-ngx/core/utils';
import { PlatformDatePickerComponent } from './date-picker.component';

@NgModule({
    declarations: [PlatformDatePickerComponent],
    imports: [CommonModule, DatePickerModule, FormsModule, ReactiveFormsModule, PipeModule],
    exports: [PlatformDatePickerComponent]
})
export class PlatformDatePickerModule {}
