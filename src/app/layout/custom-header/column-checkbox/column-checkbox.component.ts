import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SelectionService } from '../../../_system/_services/selection/selection.service';
import { AgGridService } from '../../../_system/_services/ag-grid/ag-grid.service';

@Component({
  selector: 'app-column-checkbox',
  templateUrl: './column-checkbox.component.html',
  styleUrls: ['./column-checkbox.component.scss']
})
export class ColumnCheckboxComponent implements OnInit, OnDestroy {

  public isChecked = false;

  private selectedRecordsSubscription: Subscription;

  constructor(
    private agGridService: AgGridService,
    private selectionService: SelectionService
  ) { }

  ngOnInit(): void {
    this.isSelectedAll();
  }

  ngOnDestroy(): void {
    this.selectedRecordsSubscription.unsubscribe();
  }

  agInit(params: any): void { }

  onSelect(isSelected: boolean): void {
    const selected = isSelected
    ? 'select'
    : 'deselect';
    this.agGridService.options.api[`${selected}All`]();
    this.selectionService.selectedRecords$.next(selected);
  }

  isSelectedAll(): void {
    this.selectedRecordsSubscription = this.selectionService.selectedRecords$.subscribe( (status) => {
      if (status !== 'default') {
        this.isChecked = this.agGridService.options.api.getDisplayedRowCount() === this.agGridService.options.api.getSelectedRows().length;
      }
    });
  }

}
