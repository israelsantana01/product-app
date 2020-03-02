import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { ExplorePage } from './explore.page';
import { SharedModule } from 'src/app/shared.module';

const routes: Routes = [
    {
        path: '',
        component: ExplorePage
    }
];

@NgModule({
    declarations: [
        ExplorePage
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule
    ],
    exports: [
        
    ]
})

export class ExplorePageModule { }