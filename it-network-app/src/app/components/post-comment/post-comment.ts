import { Component, Input } from '@angular/core';
import { Comment, Post } from 'models';
import { PostService, MessageParser } from 'services';

@Component({
    templateUrl: 'post-comment.html',
    selector: 'post-comment'
})

export class PostCommentComponent {
    comment: string;
    error: string;
    @Input() post: Post;

    constructor(
        private postService: PostService,
        private parser: MessageParser
    ) { }

    commentPost() {
        this.post.content = this.parser.parse(this.post);
        if (this.post.content) {
            const regex = /(http[s]?:\/\/)(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gmi;
            const urlContent = regex.exec(this.post.message);

            if (urlContent) {
                var messageReplaced = this.post.message.replace(urlContent[0], "");
                this.post.message = messageReplaced;
            }
        }
        this.postService.comment(this.post, this.comment)
            .then((result) => {
                this.comment = "";
            })
            .catch((error) => {
                this.error = "Le commentaire n'a pas fonctionné";
            })
    }
}