import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'services'
@Component({
    selector: 'user-list',
    templateUrl: 'user-list.html'
})
export class UserListComponent implements OnInit {
    notifications: string[] = [];

    constructor(
        private notificationService: NotificationService
    ) {
    }

    ngOnInit() { 
        this.notifications = this.notificationService.notifications;
    }
}
