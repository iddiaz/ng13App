import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interface';

@Pipe({
  name: 'imagen',
  // pure: false => se procesa el pipe en cada cambio del ciclo de angular
})
export class ImagenPipe implements PipeTransform {

  url: string = 'assets/heroes'

  transform( heroe: Heroe ): string {

    console.log('heorepipe', heroe)


    if( !heroe.id && !heroe.alt_img ) {     

      return 'assets/no-image.png';

    } else if( heroe.alt_img ){

      return heroe.alt_img;

    } else {
      return `${this.url}/${heroe.id}.jpg`;

    }
    
  }

}
