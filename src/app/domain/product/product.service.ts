import {delay, Observable, of} from 'rxjs';
import {Injectable} from '@angular/core';
import {Product} from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getAllProducts(): Observable<Product[]> {
    return of([
      new Product(
        1,
        'Logitech G502 HERO Souris Gamer Filaire Haute Performance, Capteur Gaming HERO 25K, 25 600 PPP, RVB, Poids Ajustable, 11 Boutons Programmables, Mémoire Intégrée, PC/Mac - Noire',
        'https://m.media-amazon.com/images/I/61mpMH5TzkL._AC_UL320_.jpg',
        46.90
      ),
      new Product(
        2,
        'Razer DeathAdder Essential (2021) - Souris Gaming Filaire avec Capteur Optique de 6400 DPI (Design Ergonomique, 5 Boutons Programmables, Jusqu\'à 10M de Clics) Noir',
        'https://m.media-amazon.com/images/I/81LFjhG2I0L._AC_UL320_.jpg',
        25.21
      ),
      new Product(
        3,
        'Logitech G203 LIGHTSYNC USB Souris Gaming avec Éclairage RVB Personnalisable, 6 Boutons Programmables, Capteur Niveau Gaming, 8 000 PPP, Ultra-Léger - Noire',
        'https://m.media-amazon.com/images/I/61UxfXTUyvL._AC_UL320_.jpg',
        22.49
      ),
      new Product(
        4,
        'The G-Lab - Kult Helium Souris Gamer Filaire USB - Capteur Optique 800 à 6400 DPI, Rétroéclairage LED 7 Couleurs, 6 Boutons - Souris Gaming Confortable et Légère - Compatible PC PS4 Xbox One PS5',
        'https://m.media-amazon.com/images/I/61z-f-g2IZL._AC_UL320_.jpg',
        9.98
      ),
      new Product(
        5,
        'Razer Basilisk V3 - Souris Gaming Filaire (10+1 Boutons programmables, Molette HyperScroll Tilt, Interrupteur de Souris Optique, Capteur Optique Focus+ 26K DPI) Noir',
        'https://m.media-amazon.com/images/I/61WeAIZSmrL._AC_UL320_.jpg',
        54.65
      ),
      new Product(
        6,
        'Dierya × TMKB M1SE Souris Gamer pour PC, avec capteur Optique 12800 DPI Gaming Mouse, 6 Boutons programmables, RGB Personnalisable, Ergonomique Souris Filaire Ordinateur - Blanc',
        'https://m.media-amazon.com/images/I/71G4Y3TGQUL._AC_UL320_.jpg',
        19.99
      ),
      new Product(
        7,
        'USB Souris Gamer Filaire Haute Performance,Souris Gaming avec 7200 DPI Ajustable, RVB, 8 Boutons Programmables,Ergonomie,PC/Mac - Noire',
        'https://m.media-amazon.com/images/I/61fEpBysnmL._AC_UL320_.jpg',
        19.98
      ),
      new Product(
        8,
        'Logitech G502 LIGHTSPEED Souris sans Fil, Capteur Gaming HERO 25K, 25 600 PPP, RGB, Ultra-Léger, 11 Boutons Programmables, Batterie Longue Durée, POWERPLAY-compatible, PC, EU Packaging - Noire',
        'https://m.media-amazon.com/images/I/718b9wK3eaL._AC_UL320_.jpg',
        81.93
      ),
      new Product(
        9,
        'CORSAIR HARPOON PRO RGB Souris de Jeu FPS/MOBA Légère et Filaire - 12 000 DPI - 6 Boutons Programmables - Compatible iCUE - PC, Mac, PS5, PS4, Xbox - Noir',
        'https://m.media-amazon.com/images/I/51o7Hxq9MyL._AC_UL320_.jpg',
        26.99
      ),
      new Product(
        10,
        'Spirit Of Gamer | Souris Gamer Filaire pour PC 12800 DPI | Souris RGB avec 8 Boutons Programmables Dont 1 Rapid Fire | Rétroéclairage 13 Effets | Gaming Mouse Ergonomique',
        'https://m.media-amazon.com/images/I/61ALdl9N9KL._AC_UL320_.jpg',
        19.90
      )
    ]).pipe(
      delay(350)
    );
  }
}
