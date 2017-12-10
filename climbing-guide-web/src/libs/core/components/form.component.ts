import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

export abstract class FormComponent<SubmitReturnType> {

    form: FormGroup;

    constructor(protected fb: FormBuilder) { this.initForm(); }

    private initForm(): void {
        this.form = this.createForm();
        this.addPropertyChangeListeners();
    }

    protected abstract createForm(): FormGroup;

    protected addPropertyChangeListeners(): void { }
    cancel(): void {
        this.form.reset();
    }

    submit(): Observable<SubmitReturnType> {
        if (this.form.valid) {
            return this.submitValid();
        }
    }

    protected abstract submitValid(): Observable<SubmitReturnType>;
}
