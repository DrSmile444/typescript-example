/**
 * Example 4
 */
const categoriesList = [
    {
        value: 'Course',
        label: 'MA Course',
    },
    {
        value: 'CSS',
        label: 'MA CSS',
    },
];

/**
 * No types for the getLabel parameters and the returned value
 * @todo
 * Replace any type for:
 *  list
 *  value
 *  return
 * */
function getLabel(list, value) {
    const foundItem = list.find((item) => item.value === value);
    return foundItem ? foundItem.label : null;
}

/**
 * label is any, but expected to be string
 * */
const label = getLabel(categoriesList, 'Course');
console.log(label);
