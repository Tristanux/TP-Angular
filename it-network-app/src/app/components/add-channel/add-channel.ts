import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ModalDirective } from 'ng2-bootstrap';
import { ChannelService } from 'services';

@Component({
    selector: 'add-channel',
    templateUrl: 'add-channel.html'
})
export class AddChannelComponent {
    @ViewChild(ModalDirective) 
    modal:ModalDirective;
    @ViewChild(NgForm) 
    ngForm:NgForm;

    model =  {name: ''};
    
    constructor(
           private channelService: ChannelService
    ) {
    }

    save() {
        if (this.ngForm.valid) {
           this.channelService.add(this.model.name)
           .then((result) => {
               this.modal.hide();
           })
        }
        return;
    }
}