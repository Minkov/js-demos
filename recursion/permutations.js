const getPermutations = (arr) => {
    const generatePermutations = (index, perm, visited, values, all) => {
        if (index === values.length) {
            all.push([...perm]);
            return;
        }

        for (const value of values) {
            // check for visited and continue
            if (visited[value]) {
                continue;
            }

            perm[index] = value;
            // mark value as visited
            visited[value] = true;
            generatePermutations(index + 1, perm, visited, values, all);
            // unmark value as visited
            visited[value] = false;
        }
    };

    const permurations = [];

    generatePermutations(0, [], {}, arr, permurations);

    return permurations;
};

const perms = getPermutations([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(perms.length);
perms
    .forEach((permutation) => console.log(permutation));

// next_permutation