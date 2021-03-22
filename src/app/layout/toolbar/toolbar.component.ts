import { Component, OnDestroy, OnInit } from '@angular/core';
import { AgGridService } from '../../_system/_services/ag-grid/ag-grid.service';
import { SelectionService } from '../../_system/_services/selection/selection.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit, OnDestroy {

  public totalRecords = 0;
  public totalSelectedRecords = 0;

  private totalRecordsSubscription: Subscription;
  private selectedRecordsSubscription: Subscription;
  private isSelectionMode = false;

  constructor(
    private agGridService: AgGridService,
    private selectionService: SelectionService,
  ) { }

  ngOnInit(): void {
    this.loadAllRecordsCount();
    this.loadSelectedRecordsCount();
  }

  ngOnDestroy(): void {
    this.totalRecordsSubscription.unsubscribe();
    this.selectedRecordsSubscription.unsubscribe();
  }

  agInit(params: any): void { }

  toggleSelectionMode(): void{
    this.isSelectionMode = !this.isSelectionMode;
    this.selectionService.selectionMode$.next(this.isSelectionMode);
    if (!this.isSelectionMode) {
      this.agGridService.options.api.deselectAll();
      this.selectionService.selectedRecords$.next('off selection mode');
    }
  }

  loadAllRecordsCount(): void {
    this.totalRecordsSubscription = this.selectionService.totalRecords$.subscribe(count => {
      this.totalRecords = count;
    });
  }

  loadSelectedRecordsCount(): void {
    this.selectedRecordsSubscription = this.selectionService.selectedRecords$.subscribe( () => {
      this.agGridService.options.api
        ? this.totalSelectedRecords = this.agGridService.options.api.getSelectedRows().length
        : this.totalSelectedRecords = 0;
    });
  }

}

