import { Validator, ValidationErrors, AbstractControl } from '@angular/forms';
import { Injectable } from '@angular/core';

export class CustomValidator implements Validator {
    validate(control: AbstractControl): ValidationErrors {
        console.log('in validate');
        return null;
    }
    registerOnValidatorChange?(fn: () => void): void {
        console.log('validator change');
        return null;
    }
}
