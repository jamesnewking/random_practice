##Your task is to implement a findMatches function that takes a query value and a pre-sorted array of integers that may contain duplicates. It should find and return
###The index of the first instance of the query value in the array, or -1 if the query value does not exist in the array.
###The number of times the query value appears in the array (0 if the query value does not exist in the array).
`
As an example, if findMatches is called, and
 query = 8
values = { 0, 1, 2, 3, 4, 4, 5, 6, 7, 8, 8, 8, 9 }
then it should return,
firstMatchIndex = 9, because values[9] is the first occurrence of 8
numberOfMatches = 3, because there are three occurrences of 8

Things to keep in mind:
1. Assume that a junior programmer is going to read your code. You should include comments and any other aides that you use to communicate your code to other developers.
2. The code should compile and work.
3. Your solution should scale well with large arrays.