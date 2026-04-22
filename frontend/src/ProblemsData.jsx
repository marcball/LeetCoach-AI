const problems = {
    python: {
      twosum:{
      meta: {
        title: "Two Sum",
        method: "twoSum",
        difficulty: "Easy",
        category: "Arrays",
        tags: ["Array", "HashMap"],
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

    validpalindrome: {
      meta: {
        title: "Valid Palindrome",
        method: "isPalindrome",
        difficulty: "Easy",
        category: "Two Pointers",
        tags: ["String", "Two Pointers"],
      },
      description: [
        "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward.",
        "Given a string s, return true if it is a palindrome, or false otherwise."
      ],
      example: [
        {
          input: 's = "A man, a plan, a canal: Panama"',
          output: "true",
          explanation: '"amanaplanacanalpanama" is a palindrome.'
        },
        {
          input: 's = "race a car"',
          output: "false",
          explanation: '"raceacar" is not a palindrome.'
        },
        {
          input: 's = " "',
          output: "true",
          explanation: "s is an empty string after removing non-alphanumeric chars. An empty string reads the same forward and backward."
        }
      ],
      constraints: [
        "1 <= s.length <= 2 * 10^5",
        "s consists only of printable ASCII characters."
      ],
      extra: [],
      starterCode: `class Solution:
    def isPalindrome(self, s: str) -> bool:
        `,
      testCases: [
        { input: ["A man, a plan, a canal: Panama"], expected: true },
        { input: ["race a car"], expected: false },
        { input: [" "], expected: true },
        { input: ["Was it a car or a cat I saw?"], expected: true },
        { input: ["No lemon, no melon"], expected: true },
        { input: ["hello"], expected: false },
        { input: ["0P"], expected: false },
        { input: ["ab_a"], expected: true },
        { input: ["Madam, I'm Adam"], expected: true },
      ]
    },

    buysellstock: {
      meta: {
        title: "Best Time to Buy and Sell Stock",
        method: "maxProfit",
        difficulty: "Easy",
        category: "Sliding Window",
        tags: ["Array", "Greedy"],
      },
      description: [
        "You are given an array prices where prices[i] is the price of a given stock on the i-th day.",
        "You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.",
        "Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0."
      ],
      example: [
        {
          input: "prices = [7,1,5,3,6,4]",
          output: "5",
          explanation: "Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6 - 1 = 5."
        },
        {
          input: "prices = [7,6,4,3,1]",
          output: "0",
          explanation: "In this case, no transaction is done and the max profit = 0."
        }
      ],
      constraints: [
        "1 <= prices.length <= 10^5",
        "0 <= prices[i] <= 10^4"
      ],
      extra: [],
      starterCode: `from typing import List

class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        `,
      testCases: [
        { input: [[7, 1, 5, 3, 6, 4]], expected: 5 },
        { input: [[7, 6, 4, 3, 1]], expected: 0 },
        { input: [[1, 2]], expected: 1 },
        { input: [[2, 4, 1]], expected: 2 },
        { input: [[1, 2, 3, 4, 5]], expected: 4 },
        { input: [[3, 2, 6, 5, 0, 3]], expected: 4 },
        { input: [[1]], expected: 0 },
        { input: [[2, 1, 4]], expected: 3 },
      ]
    },

  }
};

export default problems;
  