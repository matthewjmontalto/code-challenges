// You are given an unordered array consisting of consecutive integers  [1, 2, 3, ..., n] without any duplicates. You are allowed to swap any two elements. You need to find the minimum number of swaps required to sort the array in ascending order.
//
// For example, given the array  we perform the following steps:
//
// Complete the function minimumSwaps in the editor below. It must return an integer representing the minimum number of swaps to sort the array.
//
// minimumSwaps has the following parameter(s):
//
// arr: an unordered array of integers


function minimumSwaps(arr) {
    let counter = 0
    let minVal = Math.min(...arr)
    let finalPosition = 0
    let temp = 0
    let i = 0;

    while (i < arr.length) {


        finalPosition = arr[i] - minVal;

        if (finalPosition != i) {
            temp = arr[i];
            arr[i] = arr[finalPosition];
            arr[finalPosition] = temp;
            counter++;
        } else {
            // If the value is already in its final position, go to the next value.

            i++;
        }

    }

    return counter
}
