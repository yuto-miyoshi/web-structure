import { Component, OnInit } from "@angular/core";
import { ApiExecutor } from "../service/api-executor";

@Component({
    selector: 'frontend-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
    num = 0;

    constructor(private readonly apiExecutor: ApiExecutor) {}

    ngOnInit(): void {
        this.apiExecutor.execute(1000).subscribe((result) => {
            this.num = result.id;
        });
    }
}