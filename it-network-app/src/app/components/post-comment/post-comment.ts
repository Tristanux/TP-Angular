import { Component, Input } from '@angular/core';
import { Comment, Post } from 'models';
import { PostService } from 'services';

@Component({
    templateUrl: 'post-comment.html',
    selector: 'post-comment'
})

export class PostCommentComponent {
    comment: string;
    error: string;
    @Input() post: Post;

    constructor(
        private postService: PostService
    ) { }

    commentPost() {
        this.postService.comment(this.post, this.comment)
            .then((result) => {
                this.comment = "";
            })
            .catch((error) => {
                this.error = "Le commentaire n'a pas fonctionné";
            })
    }
}