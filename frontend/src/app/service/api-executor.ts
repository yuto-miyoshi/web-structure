import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

const url = 'http://localhost:8080/'

@Injectable()
export class ApiExecutor {
    constructor(private readonly http: HttpClient) {}

    execute(num: number): Observable<{id: number}> {
        return this.http.get<{id: number}>(`${url}sample/${num}`);
    }
}