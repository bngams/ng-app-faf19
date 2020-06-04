import { NgModule } from '@angular/core';

// old syntax index.ts
import {
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatBadgeModule
} from '@angular/material';

const MATERIAL_MODULES = [
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatBadgeModule
];

@NgModule({
  exports: [
    ...MATERIAL_MODULES
  ]
})
export class MaterialModule { }
