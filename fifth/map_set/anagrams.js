function aclean(arr) {
    let map = new Map();

    for (let word of arr) {
        let sortedArr = word.toLowerCase().split("").sort().join("");
        map.set(sortedArr, word);
    }

    return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

