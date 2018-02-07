import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs/Observable';
import {AppConfig} from '../../config/app.config';

@Injectable()
export class ImageService {
    private headers: HttpHeaders;
    private url: string;
    private updateImageUrl: string;

    constructor(private http: HttpClient) {
        this.url = environment.url;
        this.updateImageUrl = AppConfig.endpoints.updateImage;
        this.headers = new HttpHeaders({'Content-Type': 'application/json'});
    }

    updateImage(updateUrl: string, id: number, filename: string, filetype: string, value: string): Observable<any> {
        console.log(id);
        console.log(filetype);
        console.log(filename);
        console.log(value);
        console.log(this.url + updateUrl + this.updateImageUrl);
        return this.http
            .post(this.url + updateUrl + this.updateImageUrl, JSON.stringify({
                id: id
            }), {headers: this.headers})
            .map(response => {
                return response;
            })
            .catch(error => this.handleError(error));
    }

    private handleError(error: any) {
        if (error instanceof Response) {
            return Observable.throw(error.json()['error'] || 'backend server error');
        }
        return Observable.throw(error || 'backend server error');
    }
}
