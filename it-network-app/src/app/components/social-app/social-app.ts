import { Component, OnInit, EventEmitter } from '@angular/core';
import { Channel } from 'models';
import {PostSocketService, ChannelService } from 'services';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'social-app',
    templateUrl: 'social-app.html'
})
export class SocialAppComponent implements OnInit {
    channels: Channel[] = [];
    
    constructor(
        private channelService: ChannelService,
        private postSocket: PostSocketService,
        private route: ActivatedRoute,
        private router: Router
    ) {
        this.postSocket.onNewChannel((channel:Channel) => this.channels.push(channel));
    }
    

    async ngOnInit() { 
        this.channels = await this.channelService.getAll();
        
        this.router.navigate(["/","channel",this.channels[0].id]);
    }
}
