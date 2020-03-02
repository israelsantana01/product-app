import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { ExplorePage } from './explore.page';

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
        RouterModule.forChild(routes)
    ],
    exports: [
        
    ]
})

export class ExplorePageModule { }