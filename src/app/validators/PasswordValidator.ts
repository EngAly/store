import { AbstractControl, Validators, FormControl } from '@angular/forms';

export class PasswordValidator {

    // public static strong(control: FormControl) {
    //     let hasNumber = /\d/.test(control.value);
    //     let hasUpper = /[A-Z]/.test(control.value);
    //     let hasLower = /[a-z]/.test(control.value);
    //     // console.log('Num, Upp, Low', hasNumber, hasUpper, hasLower);
    //     const valid = hasNumber && hasUpper && hasLower;
    //     if (!valid) {
    //         // return what´s not valid
    //         return { strong: true };
    //     }
    //     return null;
    // }

    public static strong(control: AbstractControl) {
        alert()
        const validator= Validators.pattern("(?=\\D*\\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}")
        alert(validator(control))
        return validator(control);

        // const valid = control.value.pattern("(?=\\D*\\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}");
        // if (!valid) {
        //     // return what´s not valid
        //     return { strong: true };
        // }
        // return null;

        
    }
}