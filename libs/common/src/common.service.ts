import { Injectable } from '@nestjs/common';

@Injectable()
export class CommonService {
    
    async getHashTags(inputText) {  
        var regex = /(?:^|\s)(?:#)([a-zA-Z\d]+)/gm;
        var matches = [];
        var match;
    
        while ((match = regex.exec(inputText))) {
            matches.push(match[1]);
        }
    
        return matches;
    }

    async getUsers(inputText) {  
        var regex = /(?:^|\s)(?:@)([a-zA-Z\d]+)/gm;
        var matches = [];
        var match;

        while ((match = regex.exec(inputText))) {
            matches.push(match[1]);
        }

        return matches;
    }

    async addOrAssociateHashtag(content) {
   
    }
}
