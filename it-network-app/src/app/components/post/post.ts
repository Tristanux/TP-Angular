import { Component, Input } from '@angular/core';
import { Post } from 'models';
import { PostService, PostSocketService, LoggedUser, MessageParser } from 'services';

@Component({
    selector: 'post',
    templateUrl: 'post.html'
})
export class PostComponent {
    @Input() post: Post;

    constructor(
        private postSocket: PostSocketService,
        private user: LoggedUser,
        private postService: PostService,
        private parser: MessageParser
    ) { }

    ngOnInit() {
        this.post.content = this.parser.parse(this.post);
    }

    like() {
        if (!this.post.liked) {
            this.postService.like(this.post)
                .then(() => this.post.liked = true)
                .catch((error) => console.error(error));
        }
    }

}
