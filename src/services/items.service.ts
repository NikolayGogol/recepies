import {Injectable} from '@angular/core';
import {element} from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  public items = [
    {
      id: 1,
      title: 'dasdaaa 1',
      description: 'dasdasdas 2 wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww',
      img: '../../assets/images/download.jpeg'
    },
    {
      id: 2,
      title: 'wwwwwwwwww 2',
      description: 'dasdasdas dasd 222222222222 asd asd asd asdasd',
      img: '../../assets/images/chicken-fricassee-horizontal-1536771733.png'
    },
    {
      id: 3,
      title: 'wwwwwwwwww  3',
      description: 'dasdasdas dasd 222222222222 asd asd asd asdasd',
      img: ''
    },
    {
      id: 4,
      title: 'wwwwwwwwww 4',
      description: 'dasdasdas dasd 222222222222 asd asd asd asdasd',
      img: ''
    },
    {
      id: 5,
      title: 'wwwwwwwwww 5',
      description: 'dasdasdas dasd 222222222222 asd asd asd asdasd',
      img: ''
    },
    {
      id: 6,
      title: 'wwwwwwwwww 6',
      description: 'dasdasdas dasd 222222222222 asd asd asd asdasd',
      img: '../../assets/images/chicken-fricassee-horizontal-1536771733.png'
    },
    {
      id: 7,
      title: 'wwwwwwwwww 7',
      description: 'dasdasdas dasd 222222222222 asd asd asd asdasd',
      img: ''
    },
    {
      id: 8,
      title: 'wwwwwwwwww 8',
      description: 'dasdasdas dasd 222222222222 asd asd asd asdasd',
      img: ''
    },
    {
      id: 9,
      title: 'wwwwwwwwww 9',
      description: 'dasdasdas dasd 222222222222 asd asd asd asdasd',
      img: ''
    },
    {
      id: 10,
      title: 'wwwwwwwwww 10',
      description: 'dasdasdas dasd 222222222222 asd asd asd asdasd',
      img: ''
    },
    {
      id: 11,
      title: 'wwwwwwwwww 11',
      description: 'dasdasdas dasd 222222222222 asd asd asd asdasd',
      img: ''
    },
    {
      id: 12,
      title: 'wwwwwwwwww 12',
      description: 'dasdasdas dasd 222222222222 asd asd asd asdasd',
      img: ''
    },
    {
      id: 13,
      title: 'wwwwwwwwww 13',
      description: '',
      img: '../../assets/images/download.jpeg'
    },
  ];

  constructor() {
  }

  getAllData() {
    return this.items;
  }

  getCurrentItems(id: number): {} {
    return this.items.find(element => element.id === id);
  }

  pagination(pageEvent) {
    const page = ((pageEvent.pageIndex + 1) - 1) * pageEvent.pageSize;
    return this.items.slice(page).slice(0, pageEvent.pageSize);
  }
}
