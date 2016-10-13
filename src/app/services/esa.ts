import { Injectable } from '@angular/core';
import { ApiService } from './api';
import 'rxjs/Rx';
import { StoreHelper } from './store-helper';

@Injectable()
export class EsaService {
  path: string = '/api/esas';
  constructor(
    private apiService: ApiService,
    private storeHelper: StoreHelper
  ) {}

  createEsa(esa) {
    return this.apiService.post(this.path, esa)
      .do(savedEsa => this.storeHelper.add('esas', savedEsa));
  }

  getEsas() {
    return this.apiService.get(this.path)
      .do(res => this.storeHelper.update('esas', res.data));
  }

  getUserEsas(userId) {
    return this.getEsas()
      .map(esas => esas.filter(d => d.author._id === userId));


  }

  getEsa(id) {
    return this.getEsas()
      .map(esas => esas.find(d => d._id === id));

  }

  completeEsa(esa) {
    return this.apiService.delete(`${this.path}/${esa.id}`)
      .do(res => this.storeHelper.findAndDelete('esas', res.id));

  }
}
