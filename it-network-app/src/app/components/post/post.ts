import { Component, Input } from '@angular/core';
import { Post } from 'models';
import { PostService, PostSocketService, LoggedUser, MessageParser } from 'services';

@Component({
    selector: 'post',
    templateUrl: 'post.html'
})
export class PostComponent {
    @Input() post: Post;
    urlContent: string;
    constructor(
        private postSocket: PostSocketService,
        private user: LoggedUser,
        private postService: PostService,
        private parser: MessageParser
    ) { }

    ngOnInit() {
        this.post.content = this.parser.parse(this.post);
        if (this.post.content) {
            console.log("il est passé par ici");
            if (this.post.content.type == "youtube") {
                console.log("vidéo youtube");

                this.urlContent = this.post.content.value.videoId;
            } else {
                console.log("vidéo normale ou image");

                this.urlContent = this.post.content.value.mediaUrl;
            }
            console.log("url content :");
            console.log(this.urlContent);

            var tmp = this.post.message.replace(this.urlContent, "");
            this.post.message = tmp;
            console.log(tmp);
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
