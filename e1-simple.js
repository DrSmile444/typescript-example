/**
 * Example 1
 * Clear and simple, we know the returning type
 * But chunks variable has any[] type
 */
function makeUri(...chunks) {
    return chunks.join('/');
}

const uri = makeUri('localhost:3000', 'v3', 'posts');
console.log(uri);

