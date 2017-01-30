import { Component, Input, Pipe } from '@angular/core';
import { PostContent, VideoPostContent } from 'models';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    templateUrl: 'video-post-content.html',
    selector: 'video-post-content'
})
export class VideoFeedContentComponent {
    @Input() postContent: VideoPostContent;
    constructor(
        // private sanitizer: DomSanitizer
    ){}

    // http://clips.vorwaerts-gmbh.de/VfE_html5.mp4

    // get url() {
    //     return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.postContent.value.videoId);
    // }
}