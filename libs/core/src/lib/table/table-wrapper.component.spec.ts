import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TableWrapperComponent } from './table-wrapper.component';

describe('TableWrapperComponent', () => {
    let component: TableWrapperComponent;
    let fixture: ComponentFixture<TableWrapperComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [TableWrapperComponent]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(TableWrapperComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
