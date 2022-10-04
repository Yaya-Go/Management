import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AddModel, TYPES } from 'src/app/app-config.model';
import { addItem } from 'src/app/store/actions/add.action';
import { AppState } from 'src/app/store/app.state';
import { AddDialogComponent } from '../add-dialog/add-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { listItem } from 'src/app/store/actions/list.action';

@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.scss']
})
export class AddButtonComponent implements OnInit {

  @Input() type: string;
  @Input() name: string;
  @Input() isIcon: boolean;

  constructor(
    public dialog: MatDialog,
    private store: Store<AppState>
  ) { 
    
  }

  ngOnInit(): void {
    
  }

  add() {
    if (this.type === TYPES.T) {
      this.store.dispatch(listItem(TYPES.S));
    }
    const dialogRef = this.dialog.open(
      AddDialogComponent,
      {
        width: '400px',
        data: { type: this.type }
      }
    );

    dialogRef.afterClosed().subscribe(form => {
      if (form && form.value && form.valid) {
        this.store.dispatch(addItem({itemType: this.type, item: form.value as AddModel}));
      }
    });
  }

}
