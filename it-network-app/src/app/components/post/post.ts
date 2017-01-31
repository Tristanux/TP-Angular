import { Component, Input } from '@angular/core';
import { Post } from 'models';
import { PostService, PostSocketService, LoggedUser, MessageParser } from 'services';

@Component({
    selector: 'post',
    templateUrl: 'post.html'
})

export class PostComponent {
    @Input() post: Post;
    // urlContent: string;
    constructor(
        private postSocket: PostSocketService,
        private user: LoggedUser,
        private postService: PostService,
        private parser: MessageParser
    ) { }

    ngOnInit() {
        this.post.content = this.parser.parse(this.post);
        if (this.post.content) {
            const regex = /(http[s]?:\/\/)(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gmi;
            const urlContent = regex.exec(this.post.message);

            if (urlContent) {
                var messageReplaced = this.post.message.replace(urlContent[0], "");
                this.post.message = messageReplaced;
            }
        }
    }

    like() {
        if (!this.post.liked) {
            this.postService.like(this.post)
                .then(() => this.post.liked = true)
                .catch((error) => console.error(error));
        }
    }

}
