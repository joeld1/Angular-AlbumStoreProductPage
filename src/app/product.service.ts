import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http'
import {map} from 'rxjs/operators';

@Injectable()
export class ProductService {
  _albumURL = '../assets/album.json'

  constructor(private _http: Http) {
  }

  getAlbum(id: number) {
    this._http.get(this._albumURL)
  }
}
