import { Component, Input, OnInit } from '@angular/core';
import { Post, Comment } from 'models';
import { PostService, PostSocketService } from 'services';

@Component({
  selector: 'comment-feed',
  templateUrl: 'comment-feed.html'
})
export class CommentFeedComponent implements OnInit { 
    @Input() post: Post;
    comments: Comment[] = [];

    constructor(
        private postService: PostService,
        private postSocketService: PostSocketService
    ) {
        this.postSocketService.onComment((comment) => this.comments.push(comment));
    }

    ngOnInit(){
        this.comments = this.post.comments;
    }
}
