const problems = {
    python: {
      twosum:{
      meta: {
        title: "Two Sum",
        difficulty: "Easy",
        category: "Arrays", // number 4
        tags: ["Array", "HashMap"],
         // image: "images/two_sum_diagram.png", EXAMPLE */ 
      },
      description: [
        "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
        "You may assume that each input would have exactly one solution, and you may not use the same element twice.",
        "You can return the answer in any order."
      ],
      example: [
        {
          input: "nums = [2,7,11,15], target = 9",
          output: "[0,1]",
          explanation: "Because nums[0] + nums[1] == 9, we return [0, 1]."
        },
        {
          input: "nums = [3,2,4], target = 6",
          output: "[1,2]",
          explanation: null
        },
        {
          input: "nums = [3,3], target = 6",
          output: "[0,1]",
          explanation: null
        }
      ],
      constraints: [
        "2 <= nums.length <= 10^4",
        "-10^9 <= nums[i] <= 10^9",
        "-10^9 <= target <= 10^9",
        "Only one valid answer exists."
      ],
      extra: [
        "Follow-up: Can you come up with an algorithm that is less than O(n^2) time complexity?"
      ],
      starterCode: `from typing import List
  
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
          
      `,
      testCases: [
        { input: [ [2, 7, 11, 15], 9 ], expected: [0, 1] },
        { input: [ [3, 2, 4], 6 ], expected: [1, 2] },
        { input: [ [3, 3], 6 ], expected: [0, 1] },
        { input: [ [0, 4, 3, 0], 0 ], expected: [0, 3] },
        { input: [ [-1, -2, -3, -4, -5], -8 ], expected: [2, 4] },
        { input: [ [-3, 4, 3, 90], 0], expected: [0, 2] },
        { input: [ [1, 2, 5, 10, 15], 20 ], expected: [2, 4] },
        { input: [ [100, 200, 300, 400, 500], 900 ], expected: [3, 4] },
        { input: [ [1, 3, 7, 9, 2], 11 ], expected: [3, 4] },
        { input: [ [2, 5, 5, 11], 10 ], expected: [1, 2] },
        { input: [ [10**9, 1, 2, 10**9 - 1], 10**9 ], expected: [1, 3] }
      ]
    },

    // Next problem here
    // rev_linkedlist:
    // meta: {
    // 



  }
};

export default problems;
  