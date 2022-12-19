import { Component, Input } from "@angular/core";

export enum TodoStatusEnum {
    PLANNED,
    DOING,
    DONE
}

export interface TodoInterface {
    title: string;
    body: string;
    status: TodoStatusEnum;
}

@Component({
    selector: 'todo-item',
    templateUrl: 'todo.component.html',
    styleUrls: ['todo.component.scss']
})
export class TodoComponent {
    @Input() public todo!: TodoInterface;
}