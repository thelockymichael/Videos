import axios from 'axios';

const KEY = 'AIzaSyB8EcdqVSfukzlvJ-YF-3XxJ7XlANuGQ3w';

export default axios.create(
    {
        baseURL: 'https://www.googleapis.com/youtube/v3',
        params: {
            part: 'snippet',
            maxResults: 5,
            key: KEY
        }
    }
);
