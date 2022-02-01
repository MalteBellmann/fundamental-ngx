import { TemplateRef } from '@angular/core';

import { ColumnAlign } from '../../enums/column-align.enum';
import { FilterableColumnDataType } from '../../enums/filter-type.enum';

export abstract class TableColumn {
    /** Column unique identifier. */
    abstract name: string;

    /** Column data accessor key. */
    abstract key: string;

    /** Column header label. */
    abstract label: string;

    /** Cell text alignment. */
    abstract align: ColumnAlign;

    /** Toggles sort feature in the column header. */
    abstract sortable: boolean;

    /** Toggles filter feature in the column header. */
    abstract filterable: boolean;

    /** Data type the column represents. */
    abstract dataType: FilterableColumnDataType;

    /** Width of the column cells. */
    abstract width: string;

    /** Toggles grouping feature in the column header. */
    abstract groupable: boolean;

    /** Toggles freeze/unfreeze feature in the column header. */
    abstract freezable: boolean;

    /** Column cell template for readonly mode. */
    abstract columnCellTemplate: TemplateRef<any>;

    /** Column cell template for editing mode. */
    abstract editableColumnCellTemplate: TemplateRef<any>;

    /** Column header template. */
    abstract headerCellTemplate: TemplateRef<any>;

    /** Column cell ARIA label */
    abstract cellAriaLabelKey: string;

    /** Whether cell inner is focusable, may be used only if the custom template defined, needed for the screen readers */
    abstract cellFocusable: boolean;
    /** Whether or not  the text should wrap, when text is too long for 1 line */
    /** Whether the text should wrap, when text is too long for 1 line. */
    abstract noWrap: boolean;
}
