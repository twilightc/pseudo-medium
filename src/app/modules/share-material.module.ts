import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';

@NgModule({
  imports: [BrowserModule, MatButtonModule, MatFormFieldModule, MatInputModule],
  exports: [MatButtonModule, MatFormFieldModule, MatInputModule]
})
export class ShareMaterialModule {}
