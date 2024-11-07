import { Routes } from '@angular/router';
import { LinogravureComponent } from './components/linogravure/linogravure.component';
import { CyanotypeComponent } from './components/cyanotype/cyanotype.component';
import { CeramiqueComponent } from './components/ceramique/ceramique.component';
import { EditionComponent } from './components/edition/edition.component';
import { HomeComponent } from './components/home/home.component';
import { BoutiqueComponent } from './components/boutique/boutique.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'linogravure',
        component: LinogravureComponent,
    },
    {
        path: 'cyanotype',
        component: CyanotypeComponent,
    },
    {
        path: 'ceramique',
        component: CeramiqueComponent,
    },
    {
        path: 'edition',
        component: EditionComponent,
    },
    {
        path: 'boutique',
        component: BoutiqueComponent,
    },
];