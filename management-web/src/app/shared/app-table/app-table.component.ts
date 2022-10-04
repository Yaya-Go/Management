import { Component, Input, OnInit } from '@angular/core';
import { TYPES } from 'src/app/app-config.model';
import { AppState } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';
import { deleteAccount, deleteCategory } from 'src/app/store/app.action';
import { deleteItem } from 'src/app/store/actions/delete.action';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmComponent } from '../confirm/confirm.component';

@Component({
  selector: 'app-table',
  templateUrl: './app-table.component.html',
  styleUrls: ['./app-table.component.scss']
})
export class AppTableComponent implements OnInit {

  @Input() fields: any;
  @Input() list: any;
  @Input() showIndex = true;
  @Input() type: string;

  constructor(
    private store: Store<AppState>,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  delete(item: any) {
    const dialogRef = this.dialog.open(
      ConfirmComponent,
      {
        width: '400px',
        data: { type: this.type, name: item.name }
      }
    );
    dialogRef.afterClosed().subscribe(confirm => {
      if (confirm) {
        switch (this.type) {
          case TYPES.A:
            this.store.dispatch(deleteAccount(item.id));
            break;
          case TYPES.C:
            this.store.dispatch(deleteCategory(item.id));
            break;
          default:
            if (item) {
              this.store.dispatch(deleteItem({itemType: this.type, id: item.id}));
            }
            break;
        }
      }
    });
  }

}
