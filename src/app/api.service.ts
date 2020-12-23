import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class ApiService {
  apiUrlDistricts: (location: any) => string;
  apiUrlDistrictsHistory: (districtId: any, prevDays: any) => string;

  constructor(private http: HttpClient) {
    this.apiUrlDistricts = ((location) => `https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/RKI_Landkreisdaten/FeatureServer/0/query?where=1%3D1&outFields=RS,GEN,cases7_bl_per_100k,cases7_per_100k,BL&geometry=${location.longitude.toFixed(3)}%2C${location.latitude.toFixed(3)}&geometryType=esriGeometryPoint&inSR=4326&spatialRel=esriSpatialRelWithin&returnGeometry=false&outSR=4326&f=json`);
    this.apiUrlDistrictsHistory = ((districtId, prevDays) => `https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/RKI_COVID19/FeatureServer/0/query?where=IdLandkreis%3D${districtId}%20AND%20Meldedatum%20%3E%3D%20TIMESTAMP%20%27${this.getDateString(-prevDays)}%2000%3A00%3A00%27%20AND%20Meldedatum%20%3C%3D%20TIMESTAMP%20%27${this.getDateString(1)}%2000%3A00%3A00%27&outFields=Landkreis,Meldedatum,AnzahlFall&outSR=4326&f=json`);
  }

  public get_districts(location) {
    return this.http.get(this.apiUrlDistricts(location));
  }

  public get_districts_history(districtId, prevDays) {
    return this.http.get(this.apiUrlDistrictsHistory(districtId, prevDays));
  }


  private getDateString(addDays: number) {
    addDays = addDays || 0;
    return new Date(Date.now() + addDays * 24 * 60 * 60 * 1000).toISOString().substring(0, 10);
  }
}
