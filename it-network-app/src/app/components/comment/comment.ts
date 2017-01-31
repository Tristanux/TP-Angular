import { Component, Input } from '@angular/core';
import { Comment } from 'models';

@Component({
  selector: 'comment',
  templateUrl: 'comment.html'
})
export class CommentComponent { 
    @Input() comment: Comment;
    
    constructor(
    ) {
      console.log(this.comment);
    }

}
