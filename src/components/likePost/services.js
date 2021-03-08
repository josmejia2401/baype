import { fetchWithTimeout } from '../../utils/fetch';

export function doLike(username) {
    return new Promise(function(resolve, reject) {
        new Promise(r => setTimeout(r, 2000)).then(x => {
            const data = {
                isLiked: true,
                countLike: 1000
            };
            resolve(data);
        });
    });
}