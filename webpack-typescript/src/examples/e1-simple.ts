/**
 * Example 1
 * @see
 * Variable Declaration
 */
function makeUri(...chunks: string[]): string {
  return chunks.join('/');
}

const uri = makeUri('localhost:3000', 'v3', 'posts');
console.log('example 1', uri);
