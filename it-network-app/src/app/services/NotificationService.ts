import { Injectable } from '@angular/core';
import { PostSocketService } from 'services';

@Injectable()
export class NotificationService {
    notifications: string[] = [];

    constructor(
        private postSocketService: PostSocketService
    ) {
        // Add new notification on new post
        postSocketService.onPost((post) => {
            this.notifications.push("Nouveau post de " + post.user.username + " sur le channel " + post.channel.name + " !");
        });

        // Add new notification on new like
        postSocketService.onLike((like) => {
            console.log('onLike Notification');
            this.notifications.push(like.user.username + " a kiffé le post de " + like.post.user.username + " !");
        });

        // Add new notification on new channel
        postSocketService.onNewChannel((channel) => {
            this.notifications.push("Un nouveau channel nommé " + channel.name + " est apparu !");
        });

        // Add new notification on new comment
        postSocketService.onComment((comment) => {
            this.notifications.push("Un nouveau commentaire a été posté par " + comment.user.username + " sur le post de " + comment.post.user.username);
        });

        // Add new notification on user connection
        postSocketService.onUserConnect((user) => {
            console.log('onUserConnect Notification');
            this.notifications.push(user.username + " s'est connecté !");
        });
    }

}
