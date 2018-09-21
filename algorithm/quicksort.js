qSort = function(arr) {
    var small = [],
        large = [],
        final = [];
    var pivot = arr[Math.floor(arr.length / 2)];
    //choose mid in arr to be pivot
    if (arr.length <= 1) {
        return arr;
    }
    for (var i = 0; i < arr.length; i++) {
        if (i == Math.floor(arr.length / 2)) {
            continue;
        } //pivot cannot be pushed in subArray..
        if (arr[i] <= pivot) {
            small.push(arr[i]);
        }

        if (arr[i] > pivot) {
            large.push(arr[i]);
        }
    }
    return final.concat(qSort(small), pivot, qSort(large));

};
