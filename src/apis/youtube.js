import axios from 'axios'

const KEY = 'AIzaSyCnhgp6qJ8uwhUkdzMO9OcAoRpjuCXroig';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  }
});
