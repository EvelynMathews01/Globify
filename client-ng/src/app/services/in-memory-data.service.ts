import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const tracks = [
      {
        id: 4,
        name: 'holisss',
        trackNumber: 1,
        duration: 23405,
      },
      {
        id: 3,
        name: 'holisss3',
        trackNumber: 3,
        duration: 23403,
      },
      {
        id: 2,
        name: 'holisss2',
        trackNumber: 2,
        duration: 23402,
      }];

    const albums = [
      {
        id: 3,
        name: 'album3',
        image: 'https://c-sf.smule.com/sf/s80/arr/7e/1c/a2129eca-2f4e-42d4-8ada-ef1cbd32d0d0_256.jpg',
      },
      {
        id: 2,
        name: 'album2',
        image: 'https://c-sf.smule.com/sf/s80/arr/7e/1c/a2129eca-2f4e-42d4-8ada-ef1cbd32d0d0_256.jpg',
      },
      {
        id: 1,
        name: 'album1',
        image: 'https://c-sf.smule.com/sf/s80/arr/7e/1c/a2129eca-2f4e-42d4-8ada-ef1cbd32d0d0_256.jpg',
      }];

    const artist = [{
      id: 1,
      name: 'string',
      image: 'https://i.scdn.co/image/76e50c6493a4173e5294374ae88be0ce42ed091e',
    },
    {
      id: 2,
      name: 'string2',
      image: 'https://i.scdn.co/image/76e50c6493a4173e5294374ae88be0ce42ed091e',
    },
    {
      id: 3,
      name: 'string3',
      image: 'https://i.scdn.co/image/76e50c6493a4173e5294374ae88be0ce42ed091e',
    }];

    const user = {
      id: 2,
      name: 'denise neustadt',
      image: 'https://scontent-eze1-1.xx.fbcdn.net/v/t1.0-9/49759067_2078239365589632_1425158985916350464_n.jpg?_nc_cat=108&_nc_ht=scontent-eze1-1.xx&oh=5ee61da16f771bf377fcbdd6f6629e79&oe=5D2400CA'
    };
    return { tracks, albums, artist, user};
  }
}
