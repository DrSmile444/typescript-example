/**
 * Example 2
 * We know returns type but it not clear
 * */
function getPostSummary(post) {
    return {
        id: post.id,
        name: post.name,
        categories: `${post.categories.join(', ')}`,
    };
}

const post = {
    id: 7,
    name: 'MA Typescript',
    categories: ['Course', 'Frontend', 'JS'],
};

const postSummary = getPostSummary(post);
console.log(postSummary);
