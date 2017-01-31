import { Component, Input, OnInit } from '@angular/core';
import { Comment } from 'models';
import { MessageParser } from 'services';

@Component({
  selector: 'comment',
  templateUrl: 'comment.html'
})
export class CommentComponent implements OnInit {
  @Input() comment: Comment;

  constructor(

    private parser: MessageParser
  ) {
  }

  ngOnInit() {
    this.comment.content = this.parser.parse(this.comment);
    console.log(this.comment.content);
    if (this.comment.content) {
      const regex = /(http[s]?:\/\/)(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gmi;
      const urlContent = regex.exec(this.comment.message);

      if (urlContent) {
        var messageReplaced = this.comment.message.replace(urlContent[0], "");
        this.comment.message = messageReplaced;
      }

    }
  }
}

