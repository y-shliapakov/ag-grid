import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SelectionService } from '../../../_system/_services/selection/selection.service';


@Component({
  selector: 'app-row-checkbox',
  templateUrl: './row-checkbox.component.html',
  styleUrls: ['./row-checkbox.component.scss']
})
export class RowCheckboxComponent implements OnInit, OnDestroy {

  public isSelectedRow = false;

  private params;
  private selectedRecordsSubscription: Subscription;

  constructor(
    private selectionService: SelectionService
  ) { }

  ngOnInit(): void {
    this.initSelectAll();
  }

  ngOnDestroy(): void {
    this.selectedRecordsSubscription.unsubscribe();
  }

  agInit(params: any): void {
    this.params = params;
    this.isSelectedRow = this.params.node.isSelected();
  }

  initSelectAll(): void {
    this.selectedRecordsSubscription = this.selectionService.selectedRecords$.subscribe( () => {
      this.params
        ? this.isSelectedRow = this.params.node.isSelected()
        : this.isSelectedRow = false;
    });
  }

  selectRow(isSelected: boolean): void {
    this.params.node.selectThisNode(isSelected);
    this.selectionService.selectedRecords$.next(`row selected ${isSelected}`);
  }

}
