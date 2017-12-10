import { FormComponent } from './form.component';
import { ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MaterialAlertComponent } from '../../material-alert/material-alert.component';

export abstract  class FormDialogComponent<
    FormDialogComponentType,
    ChildCompeontType extends FormComponent<FormComponentSubmitResultType>,
    FormComponentSubmitResultType> {

    @ViewChild('childComponent')
    public childComponent: ChildCompeontType;
    public submitLabel: string = 'Save';
    public cancelLabel: string = 'Cancel';

    constructor(protected dialogRef: MatDialogRef<FormDialogComponentType>,
            public dialog: MatDialog ) { }

    close(result: boolean) {
        this.dialogRef.close( result );
    }

    cancel(): void {
        this.close( false );
    }

    submit(): void {
        this.close( true );
        this.childComponent.submit()
        .subscribe(
            result => this.handleSubmitResult(result),
            error => this.handleSubmitError(error)
        );
    }

    protected abstract handleSubmitResult(result: FormComponentSubmitResultType);
    protected handleSubmitError(error: any) {
        const dialogRef = this.dialog.open(MaterialAlertComponent, {
            data: {
                message: error,
                actions: [
                    { text: 'OK', result: true }
                ]
            }
        });
    }
}
