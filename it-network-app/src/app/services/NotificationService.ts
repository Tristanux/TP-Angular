import { Injectable } from '@angular/core';
import { LoggedUser } from './User';
import { Channel, Post, Comment, Like } from 'models';

@Injectable()
export class NotificationService {
    
     constructor(
        private user: LoggedUser
    ) { }
    
}
