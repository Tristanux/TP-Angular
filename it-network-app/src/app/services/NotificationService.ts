import { Injectable } from '@angular/core';
import { LoggedUser } from './User';
import { Channel, Post, Comment, Like } from 'models';
import { PostSocketService } from 'services';

@Injectable()
export class NotificationService {
    notifications: string[] = [];

     constructor(
        private user: LoggedUser,
        private postSocketService: PostSocketService
    ) {
        postSocketService.onPost((post) => {
            this.notifications.push("Nouveau post de " + post.user.username + " !");
        });
        postSocketService.onLike((like) => {
            this.notifications.push( like.user.username + " a kiffé le post de " + like.post.user.username + " !");
        });
        postSocketService.onNewChannel((channel) => {
            this.notifications.push("Un nouveau channel nommé " + channel.name + " est apparu !");
        });
        postSocketService.onUserConnect((user) => {
            this.notifications.push(user.username + " s'est connecté !");
        });
    }

}
