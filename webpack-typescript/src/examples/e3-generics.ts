import { Categories } from './e2-interfaces-posts';

/**
 * Example 3
 * @see
 * Generics,
 * Interfaces
 */
interface DropdownFilter<T> {
    value: T,
    label: string,
}

const categoriesList: DropdownFilter<Categories>[] = [
  {
    value: Categories.COURSE,
    label: 'MA Course',
  },
  {
    value: Categories.CSS,
    label: 'MA CSS',
  },
];

function getLabel<T>(list: Array<DropdownFilter<T>>, value: T): string | null {
  const foundItem = list.find((item) => item.value === value);
  return foundItem ? foundItem.label : null;
}

const label = getLabel(categoriesList, Categories.COURSE);
console.log('example 3', label);
