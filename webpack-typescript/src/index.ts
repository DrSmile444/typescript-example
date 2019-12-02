import { PostsResponse, Post, Categories } from './examples/e2-interfaces-posts';
import serverPosts from '../../posts.json';

import './examples/e1-simple';
import './examples/e3-generics';

class HttpClient {
  getPosts(): PostsResponse {
    return serverPosts as PostsResponse;
  }
}

const httpClient = new HttpClient();

const posts = httpClient.getPosts();
console.log(posts.posts[0]);

const newPost: Post = {
  categories: [Categories.COURSE],
  id: 1,
  lector: 'Dima',
  name: 'Typescript',
};
