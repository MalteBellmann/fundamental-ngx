import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiComponent } from '../../../documentation/core-helpers/api/api.component';
import { SharedDocumentationPageModule } from '../../../documentation/shared-documentation-page.module';
import { API_FILES } from '../../api-files';
import { SelectHeaderComponent } from './select-header/select-header.component';
import { SelectDocsComponent } from './select-docs.component';
import { SelectFormsComponent } from './examples/select-forms/select-forms.component';
import { SelectNestedOptionsComponent } from './examples/select-nested-options/select-nested-options.component';
import { SelectAddingExampleComponent } from './examples/select-adding-example/select-adding-example.component';
import { SelectCustomTriggerComponent } from './examples/select-custom-trigger/select-custom-trigger.component';
import { SelectMaxHeightExampleComponent } from './examples/select-height/select-max-height-example.component';
import { SelectProgrammaticExampleComponent } from './examples/select-programmatic-example/select-programmatic-example.component';

import { SelectSemanticStateExampleComponent } from './examples/select-semantic-state-example/select-semantic-state-example.component';
import { SelectModeExampleComponent } from './examples/select-mode-example/select-mode-example.component';
import { SelectMobileExampleComponent } from './examples/select-mobile-example/select-mobile-example.component';
import { SelectModule } from '@fundamental-ngx/core/select';
import { DialogModule } from '@fundamental-ngx/core/dialog';
import { ListModule } from '@fundamental-ngx/core/list';
import { FormModule } from '@fundamental-ngx/core/form';

const routes: Routes = [
    {
        path: '',
        component: SelectHeaderComponent,
        children: [
            { path: '', component: SelectDocsComponent },
            { path: 'api', component: ApiComponent, data: { content: API_FILES.select } }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        SharedDocumentationPageModule,
        SelectModule,
        DialogModule,
        ListModule,
        FormModule
    ],
    exports: [RouterModule],
    declarations: [
        SelectDocsComponent,
        SelectFormsComponent,
        SelectHeaderComponent,
        SelectModeExampleComponent,
        SelectNestedOptionsComponent,
        SelectMobileExampleComponent,
        SelectAddingExampleComponent,
        SelectCustomTriggerComponent,
        SelectMaxHeightExampleComponent,
        SelectProgrammaticExampleComponent,
        SelectSemanticStateExampleComponent
    ]
})
export class SelectDocsModules {}
