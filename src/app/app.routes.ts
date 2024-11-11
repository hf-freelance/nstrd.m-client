import { Routes } from '@angular/router';
import { EditionComponent } from './components/edition/edition.component';
import { HomeComponent } from './components/home/home.component';
import { BoutiqueComponent } from './components/boutique/boutique.component';
import { ArtisanatComponent } from './components/artisanat/artisanat.component';
import { ImpressionsComponent } from './components/impressions/impressions.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'impressions',
        component: ImpressionsComponent,
    },
    {
        path: 'edition',
        component: EditionComponent,
    },
    {
        path: 'artisanat',
        component: ArtisanatComponent,
    },   
    {
        path: 'boutique',
        component: BoutiqueComponent,
    },
    {
        path: 'contact',
        component: ContactComponent,
    },
];