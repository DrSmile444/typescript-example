/**
 * Example 3
 * */
const serverPosts = require('./posts.json');

class HttpClient {
    /**
     * Simulate HTTP request
     * Returns unknown type
     * */
    getPosts() {
        return serverPosts;
    }
}

const httpClient = new HttpClient();

/**
 * We do not know the type of variable, so we can only guess what it is
 * */
const posts = httpClient.getPosts();
console.log(posts);
