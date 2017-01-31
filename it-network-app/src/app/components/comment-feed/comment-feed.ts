import { Component, Input, OnInit } from '@angular/core';
import { Post, Comment } from 'models';
import { PostService } from 'services';

@Component({
  selector: 'comment-feed',
  templateUrl: 'comment-feed.html'
})
export class CommentFeedComponent { 
    @Input() post: Post;
    comments: Comment[] = [];

    constructor(
        private postService: PostService
    ) {}

    ngOnInit(){
        // this.postService.getAllCommentsFromPost(this.post)
        // .then((result) => {
        //     console.log("SUCCESS GETTING COMMENTS");
        //     console.log(result);
        //     this.comments = result;
        // })
        // .catch((error) => {
        //     console.error(error);
        // })
        this.comments = this.post.comments;
    }
}
