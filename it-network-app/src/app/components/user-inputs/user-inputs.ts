import { Component, Input, EventEmitter, Output } from '@angular/core';
import { PostService, MessageParser } from '../../services/index';
import { Post } from '../../models';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'user-inputs',
    templateUrl: 'user-inputs.html'
})
export class UserInputsComponent {

    @Input() channelId: string;
    message:string;

    constructor(
        private postService: PostService
    ) {
    }

    send() {
        
       this.postService.post(this.channelId, this.message)
       .then((result) => this.message = "")
    }
}
