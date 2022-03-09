import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interface';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  url: string = './assets/heroes/'

  transform(heroe: Heroe, ...args: unknown[]): string {
   
    return `${this.url}/${heroe.id}.jpg`;
  }

}
