import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routes } from './main-routes';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main.component';

@NgModule({
    declarations: [
        MainComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ]
})
export class MainModule { }