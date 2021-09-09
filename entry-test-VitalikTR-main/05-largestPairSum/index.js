/**
 * largestPairSum - Returns sum of highest and lowest values in array:
 * @param {array} numbers - the array of numbers
 * @returns {number} - returns the new number
 */
export const largestPairSum = (numbers) => {
    let numb = numbers.sort((a,b) => b-a);
        return numb[0] + numb[1]
}
