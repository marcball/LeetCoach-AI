const problems = {
  python: {

    // ── Arrays & Hashing ──────────────────────────────────────────────────────

    twosum: {
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
        "You can return the answer in any order.",
      ],
      example: [
        { input: "nums = [2,7,11,15], target = 9", output: "[0,1]", explanation: "Because nums[0] + nums[1] == 9, we return [0, 1]." },
        { input: "nums = [3,2,4], target = 6", output: "[1,2]", explanation: null },
        { input: "nums = [3,3], target = 6", output: "[0,1]", explanation: null },
      ],
      constraints: [
        "2 <= nums.length <= 10^4",
        "-10^9 <= nums[i] <= 10^9",
        "-10^9 <= target <= 10^9",
        "Only one valid answer exists.",
      ],
      extra: ["Follow-up: Can you come up with an algorithm that is less than O(n^2) time complexity?"],
      starterCode: `from typing import List

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        `,
      testCases: [
        { input: [[2, 7, 11, 15], 9], expected: [0, 1] },
        { input: [[3, 2, 4], 6], expected: [1, 2] },
        { input: [[3, 3], 6], expected: [0, 1] },
        { input: [[0, 4, 3, 0], 0], expected: [0, 3] },
        { input: [[-1, -2, -3, -4, -5], -8], expected: [2, 4] },
        { input: [[-3, 4, 3, 90], 0], expected: [0, 2] },
        { input: [[1, 2, 5, 10, 15], 20], expected: [2, 4] },
        { input: [[100, 200, 300, 400, 500], 900], expected: [3, 4] },
        { input: [[1, 3, 7, 9, 2], 11], expected: [3, 4] },
        { input: [[2, 5, 5, 11], 10], expected: [1, 2] },
      ],
    },

    containsduplicate: {
      meta: {
        title: "Contains Duplicate",
        method: "hasDuplicate",
        difficulty: "Easy",
        category: "Arrays",
        tags: ["Array", "HashSet"],
      },
      description: [
        "Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.",
      ],
      example: [
        { input: "nums = [1,2,3,1]", output: "true", explanation: "1 appears at index 0 and 3." },
        { input: "nums = [1,2,3,4]", output: "false", explanation: "All elements are distinct." },
        { input: "nums = [1,1,1,3,3,4,3,2,4,2]", output: "true", explanation: null },
      ],
      constraints: [
        "1 <= nums.length <= 10^5",
        "-10^9 <= nums[i] <= 10^9",
      ],
      extra: [],
      starterCode: `from typing import List

class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        `,
      testCases: [
        { input: [[1, 2, 3, 1]], expected: true },
        { input: [[1, 2, 3, 4]], expected: false },
        { input: [[1, 1, 1, 3, 3, 4, 3, 2, 4, 2]], expected: true },
        { input: [[1]], expected: false },
        { input: [[1, 1]], expected: true },
        { input: [[7, 8, 9, 10, 11]], expected: false },
        { input: [[0, 0]], expected: true },
      ],
    },

    validanagram: {
      meta: {
        title: "Valid Anagram",
        method: "isAnagram",
        difficulty: "Easy",
        category: "Arrays",
        tags: ["String", "HashMap"],
      },
      description: [
        "Given two strings s and t, return true if t is an anagram of s, and false otherwise.",
        "An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, using all the original letters exactly once.",
      ],
      example: [
        { input: 's = "anagram", t = "nagaram"', output: "true", explanation: null },
        { input: 's = "rat", t = "car"', output: "false", explanation: null },
      ],
      constraints: [
        "1 <= s.length, t.length <= 5 * 10^4",
        "s and t consist of lowercase English letters.",
      ],
      extra: ["Follow-up: What if the inputs contain Unicode characters? How would you adapt your solution?"],
      starterCode: `class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        `,
      testCases: [
        { input: ["anagram", "nagaram"], expected: true },
        { input: ["rat", "car"], expected: false },
        { input: ["a", "a"], expected: true },
        { input: ["ab", "ba"], expected: true },
        { input: ["ab", "a"], expected: false },
        { input: ["aacc", "ccac"], expected: false },
        { input: ["listen", "silent"], expected: true },
      ],
    },

    groupanagrams: {
      meta: {
        title: "Group Anagrams",
        method: "groupAnagrams",
        difficulty: "Medium",
        category: "Arrays",
        tags: ["Array", "HashMap", "String", "Sorting"],
      },
      description: [
        "Given an array of strings strs, group the anagrams together. You can return the answer in any order.",
        "An anagram is a word formed by rearranging the letters of another, using all original letters exactly once.",
        "Note: For our testing, sort each group alphabetically and sort the outer list by the first element of each group.",
      ],
      example: [
        { input: 'strs = ["eat","tea","tan","ate","nat","bat"]', output: '[["ate","eat","tea"],["bat"],["nat","tan"]]', explanation: null },
        { input: 'strs = [""]', output: '[[""]]', explanation: null },
        { input: 'strs = ["a"]', output: '[["a"]]', explanation: null },
      ],
      constraints: [
        "1 <= strs.length <= 10^4",
        "0 <= strs[i].length <= 100",
        "strs[i] consists of lowercase English letters.",
      ],
      extra: [],
      starterCode: `from typing import List

class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        `,
      testCases: [
        { input: [["eat", "tea", "tan", "ate", "nat", "bat"]], expected: [["ate", "eat", "tea"], ["bat"], ["nat", "tan"]] },
        { input: [[""]], expected: [[""]] },
        { input: [["a"]], expected: [["a"]] },
        { input: [["abc", "bca", "cab", "xyz", "zyx"]], expected: [["abc", "bca", "cab"], ["xyz", "zyx"]] },
      ],
    },

    topkfrequent: {
      meta: {
        title: "Top K Frequent Elements",
        method: "topKFrequent",
        difficulty: "Medium",
        category: "Arrays",
        tags: ["Array", "HashMap", "Heap", "Bucket Sort"],
      },
      description: [
        "Given an integer array nums and an integer k, return the k most frequent elements.",
        "You may return the answer in any order.",
        "Note: For our testing, return the elements in sorted ascending order.",
      ],
      example: [
        { input: "nums = [1,1,1,2,2,3], k = 2", output: "[1,2]", explanation: "1 appears 3 times, 2 appears 2 times." },
        { input: "nums = [1], k = 1", output: "[1]", explanation: null },
      ],
      constraints: [
        "1 <= nums.length <= 10^5",
        "-10^4 <= nums[i] <= 10^4",
        "k is in the range [1, number of unique elements].",
        "It is guaranteed that the answer is unique.",
      ],
      extra: ["Follow-up: Your algorithm's time complexity must be better than O(n log n)."],
      starterCode: `from typing import List

class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        `,
      testCases: [
        { input: [[1, 1, 1, 2, 2, 3], 2], expected: [1, 2] },
        { input: [[1], 1], expected: [1] },
        { input: [[1, 2, 2, 3, 3, 3], 2], expected: [2, 3] },
        { input: [[5, 3, 1, 1, 1, 3, 73, 1], 2], expected: [1, 3] },
        { input: [[-1, -1], 1], expected: [-1] },
      ],
    },

    productexceptself: {
      meta: {
        title: "Product of Array Except Self",
        method: "productExceptSelf",
        difficulty: "Medium",
        category: "Arrays",
        tags: ["Array", "Prefix Sum"],
      },
      description: [
        "Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].",
        "The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.",
        "You must write an algorithm that runs in O(n) time and without using the division operation.",
      ],
      example: [
        { input: "nums = [1,2,3,4]", output: "[24,12,8,6]", explanation: null },
        { input: "nums = [-1,1,0,-3,3]", output: "[0,0,9,0,0]", explanation: null },
      ],
      constraints: [
        "2 <= nums.length <= 10^5",
        "-30 <= nums[i] <= 30",
        "The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.",
      ],
      extra: ["Follow-up: Can you solve it with O(1) extra space complexity (the output array does not count)?"],
      starterCode: `from typing import List

class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        `,
      testCases: [
        { input: [[1, 2, 3, 4]], expected: [24, 12, 8, 6] },
        { input: [[-1, 1, 0, -3, 3]], expected: [0, 0, 9, 0, 0] },
        { input: [[2, 3]], expected: [3, 2] },
        { input: [[1, 1, 1, 1]], expected: [1, 1, 1, 1] },
        { input: [[-1, -2, -3, -4]], expected: [-24, -12, -8, -6] },
        { input: [[1, 0]], expected: [0, 1] },
      ],
    },

    validsudoku: {
      meta: {
        title: "Valid Sudoku",
        method: "isValidSudoku",
        difficulty: "Medium",
        category: "Arrays",
        tags: ["Array", "HashMap", "Matrix"],
      },
      description: [
        "Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:",
        "1. Each row must contain the digits 1-9 without repetition.",
        "2. Each column must contain the digits 1-9 without repetition.",
        "3. Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.",
        "Note: A Sudoku board (partially filled) could be valid but is not necessarily solvable. Empty cells are filled with '.'.",
      ],
      example: [
        {
          input: 'board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],...]',
          output: "true",
          explanation: "The board is valid.",
        },
        {
          input: 'board = [["8","3",".",".","7",".",".",".","."],...]',
          output: "false",
          explanation: "8 appears twice in column 0 and in the top-left 3x3 box.",
        },
      ],
      constraints: [
        "board.length == 9",
        "board[i].length == 9",
        "board[i][j] is a digit 1-9 or '.'.",
      ],
      extra: [],
      starterCode: `from typing import List

class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        `,
      testCases: [
        {
          input: [[
            ["5","3",".",".","7",".",".",".","."],
            ["6",".",".","1","9","5",".",".","."],
            [".","9","8",".",".",".",".","6","."],
            ["8",".",".",".","6",".",".",".","3"],
            ["4",".",".","8",".","3",".",".","1"],
            ["7",".",".",".","2",".",".",".","6"],
            [".","6",".",".",".",".","2","8","."],
            [".",".",".","4","1","9",".",".","5"],
            [".",".",".",".","8",".",".","7","9"],
          ]],
          expected: true,
        },
        {
          input: [[
            ["8","3",".",".","7",".",".",".","."],
            ["6",".",".","1","9","5",".",".","."],
            [".","9","8",".",".",".",".","6","."],
            ["8",".",".",".","6",".",".",".","3"],
            ["4",".",".","8",".","3",".",".","1"],
            ["7",".",".",".","2",".",".",".","6"],
            [".","6",".",".",".",".","2","8","."],
            [".",".",".","4","1","9",".",".","5"],
            [".",".",".",".","8",".",".","7","9"],
          ]],
          expected: false,
        },
      ],
    },

    encodedecode: {
      meta: {
        title: "Encode and Decode Strings",
        method: "encodeAndDecode",
        difficulty: "Medium",
        category: "Arrays",
        tags: ["Array", "String", "Design"],
      },
      description: [
        "Design an algorithm to encode a list of strings to a single string. The encoded string is then sent over the network and is decoded back to the original list of strings.",
        "Implement encode(strs) which encodes a list of strings to a single string, and decode(s) which decodes a single string to the original list of strings.",
        "The encoded string should be decodable even when strings contain any character, including special characters.",
        "For testing, implement encodeAndDecode(strs) that calls encode then decode and returns the result.",
      ],
      example: [
        { input: 'strs = ["lint","code","love","you"]', output: '["lint","code","love","you"]', explanation: "Encodes then decodes back to original." },
        { input: 'strs = ["we","say",":","yes"]', output: '["we","say",":","yes"]', explanation: null },
      ],
      constraints: [
        "0 <= strs.length <= 200",
        "0 <= strs[i].length <= 200",
        "strs[i] contains any possible characters out of 256 valid ASCII characters.",
      ],
      extra: [],
      starterCode: `from typing import List

class Solution:
    def encode(self, strs: List[str]) -> str:
        # Encode using length-prefix: "4#lint4#code"
        pass

    def decode(self, s: str) -> List[str]:
        pass

    def encodeAndDecode(self, strs: List[str]) -> List[str]:
        return self.decode(self.encode(strs))
        `,
      testCases: [
        { input: [["lint", "code", "love", "you"]], expected: ["lint", "code", "love", "you"] },
        { input: [["we", "say", ":", "yes"]], expected: ["we", "say", ":", "yes"] },
        { input: [[""]], expected: [""] },
        { input: [["a"]], expected: ["a"] },
        { input: [["hello world", "foo#bar", "baz"]], expected: ["hello world", "foo#bar", "baz"] },
      ],
    },

    longestconsecutive: {
      meta: {
        title: "Longest Consecutive Sequence",
        method: "longestConsecutive",
        difficulty: "Medium",
        category: "Arrays",
        tags: ["Array", "HashSet"],
      },
      description: [
        "Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.",
        "You must write an algorithm that runs in O(n) time.",
      ],
      example: [
        { input: "nums = [100,4,200,1,3,2]", output: "4", explanation: "The longest consecutive sequence is [1, 2, 3, 4]." },
        { input: "nums = [0,3,7,2,5,8,4,6,0,1]", output: "9", explanation: "The sequence 0-8 has length 9." },
      ],
      constraints: [
        "0 <= nums.length <= 10^5",
        "-10^9 <= nums[i] <= 10^9",
      ],
      extra: [],
      starterCode: `from typing import List

class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        `,
      testCases: [
        { input: [[100, 4, 200, 1, 3, 2]], expected: 4 },
        { input: [[0, 3, 7, 2, 5, 8, 4, 6, 0, 1]], expected: 9 },
        { input: [[]], expected: 0 },
        { input: [[1, 2, 0, 1]], expected: 3 },
        { input: [[9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6]], expected: 7 },
      ],
    },

    // ── Two Pointers ─────────────────────────────────────────────────────────

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
        "Given a string s, return true if it is a palindrome, or false otherwise.",
      ],
      example: [
        { input: 's = "A man, a plan, a canal: Panama"', output: "true", explanation: '"amanaplanacanalpanama" is a palindrome.' },
        { input: 's = "race a car"', output: "false", explanation: '"raceacar" is not a palindrome.' },
        { input: 's = " "', output: "true", explanation: "After removing non-alphanumeric chars, it is empty — which is a palindrome." },
      ],
      constraints: [
        "1 <= s.length <= 2 * 10^5",
        "s consists only of printable ASCII characters.",
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
        { input: ["Madam, I'm Adam"], expected: true },
      ],
    },

    threesum: {
      meta: {
        title: "3Sum",
        method: "threeSum",
        difficulty: "Medium",
        category: "Two Pointers",
        tags: ["Array", "Two Pointers", "Sorting"],
      },
      description: [
        "Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, j != k, and nums[i] + nums[j] + nums[k] == 0.",
        "The solution set must not contain duplicate triplets.",
        "Note: For testing, each triplet must be sorted ascending and the outer list must be sorted.",
      ],
      example: [
        { input: "nums = [-1,0,1,2,-1,-4]", output: "[[-1,-1,2],[-1,0,1]]", explanation: null },
        { input: "nums = [0,1,1]", output: "[]", explanation: "The only possible triplet does not sum to 0." },
        { input: "nums = [0,0,0]", output: "[[0,0,0]]", explanation: null },
      ],
      constraints: [
        "3 <= nums.length <= 3000",
        "-10^5 <= nums[i] <= 10^5",
      ],
      extra: [],
      starterCode: `from typing import List

class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        `,
      testCases: [
        { input: [[-1, 0, 1, 2, -1, -4]], expected: [[-1, -1, 2], [-1, 0, 1]] },
        { input: [[0, 1, 1]], expected: [] },
        { input: [[0, 0, 0]], expected: [[0, 0, 0]] },
        { input: [[-2, 0, 1, 1, 2]], expected: [[-2, 0, 2], [-2, 1, 1]] },
        { input: [[-4, -1, -1, 0, 1, 2]], expected: [[-1, -1, 2], [-1, 0, 1]] },
      ],
    },

    containerwithwater: {
      meta: {
        title: "Container With Most Water",
        method: "maxArea",
        difficulty: "Medium",
        category: "Two Pointers",
        tags: ["Array", "Two Pointers", "Greedy"],
      },
      description: [
        "You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the i-th line are (i, 0) and (i, height[i]).",
        "Find two lines that together with the x-axis form a container, such that the container contains the most water.",
        "Return the maximum amount of water a container can store. You may not slant the container.",
      ],
      example: [
        { input: "height = [1,8,6,2,5,4,8,3,7]", output: "49", explanation: "Lines at index 1 and 8 (heights 8 and 7): min(8,7) * (8-1) = 49." },
        { input: "height = [1,1]", output: "1", explanation: null },
      ],
      constraints: [
        "n == height.length",
        "2 <= n <= 10^5",
        "0 <= height[i] <= 10^4",
      ],
      extra: [],
      starterCode: `from typing import List

class Solution:
    def maxArea(self, height: List[int]) -> int:
        `,
      testCases: [
        { input: [[1, 8, 6, 2, 5, 4, 8, 3, 7]], expected: 49 },
        { input: [[1, 1]], expected: 1 },
        { input: [[4, 3, 2, 1, 4]], expected: 16 },
        { input: [[1, 2, 1]], expected: 2 },
        { input: [[2, 3, 4, 5, 18, 17, 6]], expected: 17 },
      ],
    },

    // ── Sliding Window ────────────────────────────────────────────────────────

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
        "Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.",
      ],
      example: [
        { input: "prices = [7,1,5,3,6,4]", output: "5", explanation: "Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6 - 1 = 5." },
        { input: "prices = [7,6,4,3,1]", output: "0", explanation: "No transaction is done and the max profit = 0." },
      ],
      constraints: [
        "1 <= prices.length <= 10^5",
        "0 <= prices[i] <= 10^4",
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
      ],
    },

    longestsubstring: {
      meta: {
        title: "Longest Substring Without Repeating Characters",
        method: "lengthOfLongestSubstring",
        difficulty: "Medium",
        category: "Sliding Window",
        tags: ["String", "Sliding Window", "HashMap"],
      },
      description: [
        "Given a string s, find the length of the longest substring without repeating characters.",
      ],
      example: [
        { input: 's = "abcabcbb"', output: "3", explanation: 'The answer is "abc", with the length of 3.' },
        { input: 's = "bbbbb"', output: "1", explanation: 'The answer is "b", with the length of 1.' },
        { input: 's = "pwwkew"', output: "3", explanation: 'The answer is "wke", with the length of 3.' },
      ],
      constraints: [
        "0 <= s.length <= 5 * 10^4",
        "s consists of English letters, digits, symbols, and spaces.",
      ],
      extra: [],
      starterCode: `class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        `,
      testCases: [
        { input: ["abcabcbb"], expected: 3 },
        { input: ["bbbbb"], expected: 1 },
        { input: ["pwwkew"], expected: 3 },
        { input: [""], expected: 0 },
        { input: [" "], expected: 1 },
        { input: ["dvdf"], expected: 3 },
        { input: ["au"], expected: 2 },
      ],
    },

    characterreplacement: {
      meta: {
        title: "Longest Repeating Character Replacement",
        method: "characterReplacement",
        difficulty: "Medium",
        category: "Sliding Window",
        tags: ["String", "Sliding Window"],
      },
      description: [
        "You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.",
        "Return the length of the longest substring containing the same letter you can get after performing the above operations.",
      ],
      example: [
        { input: 's = "ABAB", k = 2', output: "4", explanation: "Replace the two 'A's with 'B's or vice versa." },
        { input: 's = "AABABBA", k = 1', output: "4", explanation: 'Replace the one "A" in the middle to get "AABBBBA" — answer is 4.' },
      ],
      constraints: [
        "1 <= s.length <= 10^5",
        "s consists of only uppercase English letters.",
        "0 <= k <= s.length",
      ],
      extra: [],
      starterCode: `class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        `,
      testCases: [
        { input: ["ABAB", 2], expected: 4 },
        { input: ["AABABBA", 1], expected: 4 },
        { input: ["AAAA", 2], expected: 4 },
        { input: ["A", 0], expected: 1 },
        { input: ["ABCDE", 1], expected: 2 },
        { input: ["AAABBC", 2], expected: 5 },
      ],
    },

    minimumwindow: {
      meta: {
        title: "Minimum Window Substring",
        method: "minWindow",
        difficulty: "Hard",
        category: "Sliding Window",
        tags: ["String", "Sliding Window", "HashMap"],
      },
      description: [
        "Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window.",
        "If there is no such substring, return the empty string \"\".",
        "The testcases will be generated such that the answer is unique.",
      ],
      example: [
        { input: 's = "ADOBECODEBANC", t = "ABC"', output: '"BANC"', explanation: "The minimum window substring is BANC." },
        { input: 's = "a", t = "a"', output: '"a"', explanation: null },
        { input: 's = "a", t = "aa"', output: '""', explanation: "t requires two 'a's but s only has one." },
      ],
      constraints: [
        "m == s.length",
        "n == t.length",
        "1 <= m, n <= 10^5",
        "s and t consist of uppercase and lowercase English letters.",
      ],
      extra: ["Follow-up: Could you find an algorithm that runs in O(m + n) time?"],
      starterCode: `class Solution:
    def minWindow(self, s: str, t: str) -> str:
        `,
      testCases: [
        { input: ["ADOBECODEBANC", "ABC"], expected: "BANC" },
        { input: ["a", "a"], expected: "a" },
        { input: ["a", "aa"], expected: "" },
        { input: ["AA", "AA"], expected: "AA" },
        { input: ["bdab", "ab"], expected: "ab" },
      ],
    },

    // ── Stack ─────────────────────────────────────────────────────────────────

    validparentheses: {
      meta: {
        title: "Valid Parentheses",
        method: "isValid",
        difficulty: "Easy",
        category: "Stack",
        tags: ["String", "Stack"],
      },
      description: [
        "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
        "An input string is valid if: open brackets must be closed by the same type of brackets, and open brackets must be closed in the correct order.",
        "Every close bracket has a corresponding open bracket of the same type.",
      ],
      example: [
        { input: 's = "()"', output: "true", explanation: null },
        { input: 's = "()[]{}"', output: "true", explanation: null },
        { input: 's = "(]"', output: "false", explanation: null },
      ],
      constraints: [
        "1 <= s.length <= 10^4",
        "s consists of parentheses only '()[]{}'.",
      ],
      extra: [],
      starterCode: `class Solution:
    def isValid(self, s: str) -> bool:
        `,
      testCases: [
        { input: ["()"], expected: true },
        { input: ["()[]{}"], expected: true },
        { input: ["(]"], expected: false },
        { input: ["([)]"], expected: false },
        { input: ["{[]}"], expected: true },
        { input: ["("], expected: false },
        { input: ["}"], expected: false },
        { input: ["((()))"], expected: true },
      ],
    },

    minstack: {
      meta: {
        title: "Min Stack",
        method: "simulate",
        difficulty: "Medium",
        category: "Stack",
        tags: ["Stack", "Design"],
      },
      description: [
        "Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.",
        "Implement the MinStack class with push(val), pop(), top(), and getMin() methods.",
        "You may assume that pop, top and getMin operations will always be called on non-empty stacks.",
      ],
      example: [
        { input: 'ops=["push","push","push","getMin","pop","top","getMin"], args=[[-2],[0],[-3],[],[],[],[]]', output: "[null,null,null,-3,null,0,-2]", explanation: null },
      ],
      constraints: [
        "-2^31 <= val <= 2^31 - 1",
        "At most 3 * 10^4 calls will be made to push, pop, top, and getMin.",
      ],
      extra: ["Each function must run in O(1) time."],
      helperCode: ``,
      starterCode: `class MinStack:
    def __init__(self):
        pass

    def push(self, val: int) -> None:
        pass

    def pop(self) -> None:
        pass

    def top(self) -> int:
        pass

    def getMin(self) -> int:
        pass
`,
      wrapCode: `class Solution:
    def simulate(self, ops, args):
        obj = MinStack()
        out = []
        for op, a in zip(ops, args):
            res = getattr(obj, op)(*a)
            out.append(res)
        return out
`,
      testCases: [
        { input: [["push","push","push","getMin","pop","top","getMin"], [[-2],[0],[-3],[],[],[],[]]], expected: [null,null,null,-3,null,0,-2] },
        { input: [["push","push","getMin","pop","getMin"], [[-2],[-3],[],[],[]]], expected: [null,null,-3,null,-2] },
        { input: [["push","push","push","top","pop","getMin"], [[5],[1],[3],[],[],[]]], expected: [null,null,null,3,null,1] },
      ],
    },

    evalrpn: {
      meta: {
        title: "Evaluate Reverse Polish Notation",
        method: "evalRPN",
        difficulty: "Medium",
        category: "Stack",
        tags: ["Array", "Math", "Stack"],
      },
      description: [
        "You are given an array of strings tokens that represents an arithmetic expression in Reverse Polish Notation.",
        "Evaluate the expression and return an integer that represents the value of the expression.",
        "Note: Division between two integers truncates toward zero. There will be no division by zero. The answer and all intermediate calculations can be represented in a 32-bit integer.",
        "Valid operators are '+', '-', '*', and '/'.",
      ],
      example: [
        { input: 'tokens = ["2","1","+","3","*"]', output: "9", explanation: "((2 + 1) * 3) = 9" },
        { input: 'tokens = ["4","13","5","/","+"]', output: "6", explanation: "(4 + (13 / 5)) = 6" },
        { input: 'tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]', output: "22", explanation: null },
      ],
      constraints: [
        "1 <= tokens.length <= 10^4",
        "tokens[i] is either an operator '+', '-', '*', '/' or an integer in the range [-200, 200].",
      ],
      extra: [],
      starterCode: `from typing import List

class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        `,
      testCases: [
        { input: [["2", "1", "+", "3", "*"]], expected: 9 },
        { input: [["4", "13", "5", "/", "+"]], expected: 6 },
        { input: [["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]], expected: 22 },
        { input: [["2", "3", "*"]], expected: 6 },
        { input: [["3", "11", "-"]], expected: -8 },
        { input: [["5", "1", "2", "+", "4", "*", "+", "3", "-"]], expected: 14 },
      ],
    },

    generateparentheses: {
      meta: {
        title: "Generate Parentheses",
        method: "generateParenthesis",
        difficulty: "Medium",
        category: "Stack",
        tags: ["String", "Backtracking", "Stack"],
      },
      description: [
        "Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.",
        "Note: For testing, return the combinations in sorted alphabetical order.",
      ],
      example: [
        { input: "n = 3", output: '["((()))","(()())","(())()","()(())","()()()"]', explanation: null },
        { input: "n = 1", output: '["()"]', explanation: null },
      ],
      constraints: ["1 <= n <= 8"],
      extra: [],
      starterCode: `from typing import List

class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        `,
      testCases: [
        { input: [1], expected: ["()"] },
        { input: [2], expected: ["(())", "()()"] },
        { input: [3], expected: ["((()))", "(()())", "(())()", "()(())", "()()()"] },
      ],
    },

    dailytemperatures: {
      meta: {
        title: "Daily Temperatures",
        method: "dailyTemperatures",
        difficulty: "Medium",
        category: "Stack",
        tags: ["Array", "Stack", "Monotonic Stack"],
      },
      description: [
        "Given an array of integers temperatures representing the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the i-th day to get a warmer temperature.",
        "If there is no future day for which this is possible, keep answer[i] == 0 instead.",
      ],
      example: [
        { input: "temperatures = [73,74,75,71,69,72,76,73]", output: "[1,1,4,2,1,1,0,0]", explanation: null },
        { input: "temperatures = [30,40,50,60]", output: "[1,1,1,0]", explanation: null },
        { input: "temperatures = [30,60,90]", output: "[1,1,0]", explanation: null },
      ],
      constraints: [
        "1 <= temperatures.length <= 10^5",
        "30 <= temperatures[i] <= 100",
      ],
      extra: [],
      starterCode: `from typing import List

class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        `,
      testCases: [
        { input: [[73, 74, 75, 71, 69, 72, 76, 73]], expected: [1, 1, 4, 2, 1, 1, 0, 0] },
        { input: [[30, 40, 50, 60]], expected: [1, 1, 1, 0] },
        { input: [[30, 60, 90]], expected: [1, 1, 0] },
        { input: [[89, 62, 70, 58, 47, 47, 46, 76, 100, 70]], expected: [8, 1, 5, 4, 3, 2, 1, 1, 0, 0] },
        { input: [[100]], expected: [0] },
      ],
    },

    carfleet: {
      meta: {
        title: "Car Fleet",
        method: "carFleet",
        difficulty: "Medium",
        category: "Stack",
        tags: ["Array", "Stack", "Sorting", "Monotonic Stack"],
      },
      description: [
        "There are n cars going to the same destination along a one-lane road. The destination is target miles away.",
        "You are given two integer arrays position and speed, both of length n, where position[i] is the position of the i-th car and speed[i] is the speed of the i-th car (in miles per hour).",
        "A car can never pass another car ahead of it, but it can catch up to it and drive bumper-to-bumper at the slower car's speed.",
        "A car fleet is some non-empty set of cars driving at the same position and same speed. A single car is also a fleet. Return the number of car fleets that will arrive at the destination.",
      ],
      example: [
        { input: "target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3]", output: "3", explanation: null },
        { input: "target = 10, position = [3], speed = [3]", output: "1", explanation: null },
        { input: "target = 100, position = [0,2,4], speed = [4,2,1]", output: "1", explanation: "All cars catch up to the slowest car." },
      ],
      constraints: [
        "n == position.length == speed.length",
        "1 <= n <= 10^5",
        "0 < target <= 10^6",
        "0 <= position[i] < target",
        "All positions are unique.",
        "0 < speed[i] <= 10^6",
      ],
      extra: [],
      starterCode: `from typing import List

class Solution:
    def carFleet(self, target: int, position: List[int], speed: List[int]) -> int:
        `,
      testCases: [
        { input: [12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3]], expected: 3 },
        { input: [10, [3], [3]], expected: 1 },
        { input: [100, [0, 2, 4], [4, 2, 1]], expected: 1 },
        { input: [10, [6, 8], [3, 2]], expected: 2 },
        { input: [10, [0, 4, 2], [2, 1, 3]], expected: 1 },
      ],
    },

    largestrectangle: {
      meta: {
        title: "Largest Rectangle in Histogram",
        method: "largestRectangleArea",
        difficulty: "Hard",
        category: "Stack",
        tags: ["Array", "Stack", "Monotonic Stack"],
      },
      description: [
        "Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.",
      ],
      example: [
        { input: "heights = [2,1,5,6,2,3]", output: "10", explanation: "The largest rectangle has an area = 10 units." },
        { input: "heights = [2,4]", output: "4", explanation: null },
      ],
      constraints: [
        "1 <= heights.length <= 10^5",
        "0 <= heights[i] <= 10^4",
      ],
      extra: [],
      starterCode: `from typing import List

class Solution:
    def largestRectangleArea(self, heights: List[int]) -> int:
        `,
      testCases: [
        { input: [[2,1,5,6,2,3]], expected: 10 },
        { input: [[2,4]], expected: 4 },
        { input: [[1]], expected: 1 },
        { input: [[1,1]], expected: 2 },
        { input: [[6,7,5,2,4,5,9,3]], expected: 16 },
      ],
    },

    // ── Binary Search ─────────────────────────────────────────────────────────

    binarysearch: {
      meta: {
        title: "Binary Search",
        method: "search",
        difficulty: "Easy",
        category: "Binary Search",
        tags: ["Array", "Binary Search"],
      },
      description: [
        "Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums.",
        "If target exists, then return its index. Otherwise, return -1.",
        "You must write an algorithm with O(log n) runtime complexity.",
      ],
      example: [
        { input: "nums = [-1,0,3,5,9,12], target = 9", output: "4", explanation: "9 exists in nums and its index is 4." },
        { input: "nums = [-1,0,3,5,9,12], target = 2", output: "-1", explanation: "2 does not exist in nums so return -1." },
      ],
      constraints: [
        "1 <= nums.length <= 10^4",
        "-10^4 < nums[i], target < 10^4",
        "All the integers in nums are unique.",
        "nums is sorted in ascending order.",
      ],
      extra: [],
      starterCode: `from typing import List

class Solution:
    def search(self, nums: List[int], target: int) -> int:
        `,
      testCases: [
        { input: [[-1, 0, 3, 5, 9, 12], 9], expected: 4 },
        { input: [[-1, 0, 3, 5, 9, 12], 2], expected: -1 },
        { input: [[5], 5], expected: 0 },
        { input: [[5], -5], expected: -1 },
        { input: [[1, 3, 5, 7, 9, 11, 13, 15], 13], expected: 6 },
        { input: [[-10, -5, 0, 3, 7], -5], expected: 1 },
      ],
    },

    search2dmatrix: {
      meta: {
        title: "Search a 2D Matrix",
        method: "searchMatrix",
        difficulty: "Medium",
        category: "Binary Search",
        tags: ["Array", "Binary Search", "Matrix"],
      },
      description: [
        "You are given an m x n integer matrix matrix with the following two properties:",
        "Each row is sorted in non-decreasing order.",
        "The first integer of each row is greater than the last integer of the previous row.",
        "Given an integer target, return true if target is in matrix or false otherwise.",
        "You must write a solution in O(log(m * n)) time complexity.",
      ],
      example: [
        { input: "matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3", output: "true", explanation: null },
        { input: "matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13", output: "false", explanation: null },
      ],
      constraints: [
        "m == matrix.length",
        "n == matrix[i].length",
        "1 <= m, n <= 100",
        "-10^4 <= matrix[i][j], target <= 10^4",
      ],
      extra: [],
      starterCode: `from typing import List

class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        `,
      testCases: [
        { input: [[[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 3], expected: true },
        { input: [[[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 13], expected: false },
        { input: [[[1]], 0], expected: false },
        { input: [[[1]], 1], expected: true },
        { input: [[[1, 1]], 2], expected: false },
      ],
    },

    findminrotated: {
      meta: {
        title: "Find Minimum in Rotated Sorted Array",
        method: "findMin",
        difficulty: "Medium",
        category: "Binary Search",
        tags: ["Array", "Binary Search"],
      },
      description: [
        "Suppose an array of length n sorted in ascending order is rotated between 1 and n times.",
        "Given the sorted rotated array nums of unique elements, return the minimum element of this array.",
        "You must write an algorithm that runs in O(log n) time.",
      ],
      example: [
        { input: "nums = [3,4,5,1,2]", output: "1", explanation: "The original array was [1,2,3,4,5] rotated 3 times." },
        { input: "nums = [4,5,6,7,0,1,2]", output: "0", explanation: "The original array was [0,1,2,4,5,6,7] rotated 4 times." },
        { input: "nums = [11,13,15,17]", output: "11", explanation: "The original array was [11,13,15,17] rotated 4 times (no rotation)." },
      ],
      constraints: [
        "n == nums.length",
        "1 <= n <= 5000",
        "-5000 <= nums[i] <= 5000",
        "All the integers of nums are unique.",
        "nums is sorted and rotated between 1 and n times.",
      ],
      extra: [],
      starterCode: `from typing import List

class Solution:
    def findMin(self, nums: List[int]) -> int:
        `,
      testCases: [
        { input: [[3, 4, 5, 1, 2]], expected: 1 },
        { input: [[4, 5, 6, 7, 0, 1, 2]], expected: 0 },
        { input: [[11, 13, 15, 17]], expected: 11 },
        { input: [[1]], expected: 1 },
        { input: [[2, 1]], expected: 1 },
        { input: [[5, 1, 2, 3, 4]], expected: 1 },
      ],
    },

    searchrotated: {
      meta: {
        title: "Search in Rotated Sorted Array",
        method: "searchRotated",
        difficulty: "Medium",
        category: "Binary Search",
        tags: ["Array", "Binary Search"],
      },
      description: [
        "There is an integer array nums sorted in ascending order (with distinct values). Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k.",
        "Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.",
        "You must write an algorithm with O(log n) runtime complexity.",
      ],
      example: [
        { input: "nums = [4,5,6,7,0,1,2], target = 0", output: "4", explanation: null },
        { input: "nums = [4,5,6,7,0,1,2], target = 3", output: "-1", explanation: null },
        { input: "nums = [1], target = 0", output: "-1", explanation: null },
      ],
      constraints: [
        "1 <= nums.length <= 5000",
        "-10^4 <= nums[i] <= 10^4",
        "All values of nums are unique.",
        "nums is an ascending array that is possibly rotated.",
        "-10^4 <= target <= 10^4",
      ],
      extra: [],
      starterCode: `from typing import List

class Solution:
    def searchRotated(self, nums: List[int], target: int) -> int:
        `,
      testCases: [
        { input: [[4, 5, 6, 7, 0, 1, 2], 0], expected: 4 },
        { input: [[4, 5, 6, 7, 0, 1, 2], 3], expected: -1 },
        { input: [[1], 0], expected: -1 },
        { input: [[1, 3], 3], expected: 1 },
        { input: [[3, 5, 1], 1], expected: 2 },
        { input: [[5, 1, 3], 3], expected: 2 },
      ],
    },

    // ── Binary Search (remaining) ─────────────────────────────────────────────

    kokoeatingbananas: {
      meta: {
        title: "Koko Eating Bananas",
        method: "minEatingSpeed",
        difficulty: "Medium",
        category: "Binary Search",
        tags: ["Array", "Binary Search"],
      },
      description: [
        "Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.",
        "Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them and will not eat any more bananas during this hour.",
        "Return the minimum integer k such that she can eat all the bananas within h hours.",
      ],
      example: [
        { input: "piles = [3,6,7,11], h = 8", output: "4", explanation: null },
        { input: "piles = [30,11,23,4,20], h = 5", output: "30", explanation: null },
        { input: "piles = [30,11,23,4,20], h = 6", output: "23", explanation: null },
      ],
      constraints: [
        "1 <= piles.length <= 10^4",
        "piles.length <= h <= 10^9",
        "1 <= piles[i] <= 10^9",
      ],
      extra: [],
      starterCode: `from typing import List
import math

class Solution:
    def minEatingSpeed(self, piles: List[int], h: int) -> int:
        `,
      testCases: [
        { input: [[3,6,7,11], 8], expected: 4 },
        { input: [[30,11,23,4,20], 5], expected: 30 },
        { input: [[30,11,23,4,20], 6], expected: 23 },
        { input: [[1,1,1,1], 4], expected: 1 },
        { input: [[312884470], 312884469], expected: 2 },
      ],
    },

    timebasedkv: {
      meta: {
        title: "Time Based Key-Value Store",
        method: "simulate",
        difficulty: "Medium",
        category: "Binary Search",
        tags: ["Hash Table", "String", "Binary Search", "Design"],
      },
      description: [
        "Design a time-based key-value data structure that can store multiple values for the same key at different time stamps and retrieve the key's value at a certain timestamp.",
        "Implement TimeMap with set(key, value, timestamp) and get(key, timestamp) methods.",
        "get returns the value with the largest timestamp <= the given timestamp, or empty string if no such value exists.",
      ],
      example: [
        { input: 'ops=["set","set","get","get"], args=[["foo","bar",1],["foo","bar2",4],["foo",4],["foo",5]]', output: '["","bar2","bar2"]', explanation: null },
      ],
      constraints: [
        "1 <= key.length, value.length <= 100",
        "1 <= timestamp <= 10^7",
        "All timestamps in set are strictly increasing.",
        "At most 2 * 10^5 calls to set and get.",
      ],
      extra: [],
      helperCode: ``,
      starterCode: `class TimeMap:
    def __init__(self):
        pass

    def set(self, key: str, value: str, timestamp: int) -> None:
        pass

    def get(self, key: str, timestamp: int) -> str:
        pass
`,
      wrapCode: `class Solution:
    def simulate(self, ops, args):
        obj = TimeMap()
        out = []
        for op, a in zip(ops, args):
            res = getattr(obj, op)(*a)
            if op != "set":
                out.append(res)
        return out
`,
      testCases: [
        { input: [["set","set","get","get","get"], [["foo","bar",1],["foo","bar2",4],["foo",4],["foo",5],["foo",3]]], expected: ["bar2","bar2","bar"] },
        { input: [["set","get","get"], [["love","high",10],["love",5],["love",10]]], expected: ["","high"] },
      ],
    },

    medianoftwosortedarrays: {
      meta: {
        title: "Median of Two Sorted Arrays",
        method: "findMedianSortedArrays",
        difficulty: "Hard",
        category: "Binary Search",
        tags: ["Array", "Binary Search", "Divide and Conquer"],
      },
      description: [
        "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.",
        "The overall run time complexity should be O(log (m+n)).",
      ],
      example: [
        { input: "nums1 = [1,3], nums2 = [2]", output: "2.0", explanation: "Merged array = [1,2,3], median is 2." },
        { input: "nums1 = [1,2], nums2 = [3,4]", output: "2.5", explanation: "Merged array = [1,2,3,4], median is (2+3)/2 = 2.5." },
      ],
      constraints: [
        "nums1.length == m",
        "nums2.length == n",
        "0 <= m <= 1000",
        "0 <= n <= 1000",
        "1 <= m + n <= 2000",
        "-10^6 <= nums1[i], nums2[i] <= 10^6",
      ],
      extra: [],
      starterCode: `from typing import List

class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        `,
      testCases: [
        { input: [[1,3], [2]], expected: 2.0 },
        { input: [[1,2], [3,4]], expected: 2.5 },
        { input: [[0,0], [0,0]], expected: 0.0 },
        { input: [[], [1]], expected: 1.0 },
        { input: [[2], []], expected: 2.0 },
      ],
    },

    // ── Linked List ───────────────────────────────────────────────────────────

    reverselinkedlist: {
      meta: {
        title: "Reverse Linked List",
        method: "reverseListSolve",
        difficulty: "Easy",
        category: "Linked List",
        tags: ["Linked List", "Recursion"],
      },
      description: [
        "Given the head of a singly linked list, reverse the list, and return the reversed list.",
      ],
      example: [
        { input: "head = [1,2,3,4,5]", output: "[5,4,3,2,1]", explanation: null },
        { input: "head = [1,2]", output: "[2,1]", explanation: null },
        { input: "head = []", output: "[]", explanation: null },
      ],
      constraints: [
        "The number of nodes in the list is the range [0, 5000].",
        "-5000 <= Node.val <= 5000",
      ],
      extra: ["Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?"],
      helperCode: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def _to_ll(arr):
    if not arr: return None
    head = ListNode(arr[0]); cur = head
    for v in arr[1:]: cur.next = ListNode(v); cur = cur.next
    return head

def _to_arr(node):
    res = []
    while node: res.append(node.val); node = node.next
    return res
`,
      starterCode: `from typing import Optional

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        pass
`,
      wrapCode: `Solution.reverseListSolve = lambda self, arr: _to_arr(self.reverseList(_to_ll(arr)))
`,
      testCases: [
        { input: [[1,2,3,4,5]], expected: [5,4,3,2,1] },
        { input: [[1,2]], expected: [2,1] },
        { input: [[]], expected: [] },
        { input: [[1]], expected: [1] },
      ],
    },

    mergetwosortedlists: {
      meta: {
        title: "Merge Two Sorted Lists",
        method: "mergeTwoListsSolve",
        difficulty: "Easy",
        category: "Linked List",
        tags: ["Linked List", "Recursion"],
      },
      description: [
        "You are given the heads of two sorted linked lists list1 and list2.",
        "Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.",
        "Return the head of the merged linked list.",
      ],
      example: [
        { input: "list1 = [1,2,4], list2 = [1,3,4]", output: "[1,1,2,3,4,4]", explanation: null },
        { input: "list1 = [], list2 = []", output: "[]", explanation: null },
        { input: "list1 = [], list2 = [0]", output: "[0]", explanation: null },
      ],
      constraints: [
        "The number of nodes in both lists is in the range [0, 50].",
        "-100 <= Node.val <= 100",
        "Both list1 and list2 are sorted in non-decreasing order.",
      ],
      extra: [],
      helperCode: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def _to_ll(arr):
    if not arr: return None
    head = ListNode(arr[0]); cur = head
    for v in arr[1:]: cur.next = ListNode(v); cur = cur.next
    return head

def _to_arr(node):
    res = []
    while node: res.append(node.val); node = node.next
    return res
`,
      starterCode: `from typing import Optional

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        pass
`,
      wrapCode: `Solution.mergeTwoListsSolve = lambda self, arr1, arr2: _to_arr(self.mergeTwoLists(_to_ll(arr1), _to_ll(arr2)))
`,
      testCases: [
        { input: [[1,2,4], [1,3,4]], expected: [1,1,2,3,4,4] },
        { input: [[], []], expected: [] },
        { input: [[], [0]], expected: [0] },
        { input: [[1,3,5], [2,4,6]], expected: [1,2,3,4,5,6] },
      ],
    },

    linkedlistcycle: {
      meta: {
        title: "Linked List Cycle",
        method: "hasCycleSolve",
        difficulty: "Easy",
        category: "Linked List",
        tags: ["Hash Table", "Linked List", "Two Pointers"],
      },
      description: [
        "Given head, the head of a linked list, determine if the linked list has a cycle in it.",
        "There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer.",
        "Return true if there is a cycle in the linked list, otherwise return false.",
      ],
      example: [
        { input: "head = [3,2,0,-4], pos = 1", output: "True", explanation: "There is a cycle, tail connects to index 1." },
        { input: "head = [1,2], pos = 0", output: "True", explanation: "Tail connects to index 0." },
        { input: "head = [1], pos = -1", output: "False", explanation: "No cycle." },
      ],
      constraints: [
        "The number of the nodes in the list is in the range [0, 10^4].",
        "-10^5 <= Node.val <= 10^5",
        "pos is -1 or a valid index in the linked-list.",
      ],
      extra: ["Follow up: Can you solve it using O(1) (constant) memory?"],
      helperCode: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def _build_cycle(arr, pos):
    if not arr: return None
    nodes = [ListNode(v) for v in arr]
    for i in range(len(nodes)-1): nodes[i].next = nodes[i+1]
    if pos >= 0: nodes[-1].next = nodes[pos]
    return nodes[0]
`,
      starterCode: `from typing import Optional

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        pass
`,
      wrapCode: `Solution.hasCycleSolve = lambda self, arr, pos: self.hasCycle(_build_cycle(arr, pos))
`,
      testCases: [
        { input: [[3,2,0,-4], 1], expected: true },
        { input: [[1,2], 0], expected: true },
        { input: [[1], -1], expected: false },
        { input: [[], -1], expected: false },
        { input: [[1,2,3,4,5], -1], expected: false },
      ],
    },

    reorderlist: {
      meta: {
        title: "Reorder List",
        method: "reorderListSolve",
        difficulty: "Medium",
        category: "Linked List",
        tags: ["Linked List", "Two Pointers", "Stack", "Recursion"],
      },
      description: [
        "You are given the head of a singly linked-list: L0 → L1 → … → Ln-1 → Ln.",
        "Reorder it to: L0 → Ln → L1 → Ln-1 → L2 → Ln-2 → …",
        "You may not modify the values in the list's nodes. Only nodes themselves may be changed.",
      ],
      example: [
        { input: "head = [1,2,3,4]", output: "[1,4,2,3]", explanation: null },
        { input: "head = [1,2,3,4,5]", output: "[1,5,2,4,3]", explanation: null },
      ],
      constraints: [
        "The number of nodes in the list is in the range [1, 5 * 10^4].",
        "1 <= Node.val <= 1000",
      ],
      extra: [],
      helperCode: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def _to_ll(arr):
    if not arr: return None
    head = ListNode(arr[0]); cur = head
    for v in arr[1:]: cur.next = ListNode(v); cur = cur.next
    return head

def _to_arr(node):
    res = []
    while node: res.append(node.val); node = node.next
    return res
`,
      starterCode: `from typing import Optional

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def reorderList(self, head: Optional[ListNode]) -> None:
        pass
`,
      wrapCode: `def _reorderSolve(self, arr):
    head = _to_ll(arr)
    self.reorderList(head)
    return _to_arr(head)
Solution.reorderListSolve = _reorderSolve
`,
      testCases: [
        { input: [[1,2,3,4]], expected: [1,4,2,3] },
        { input: [[1,2,3,4,5]], expected: [1,5,2,4,3] },
        { input: [[1]], expected: [1] },
        { input: [[1,2]], expected: [1,2] },
      ],
    },

    removenthnode: {
      meta: {
        title: "Remove Nth Node From End of List",
        method: "removeNthFromEndSolve",
        difficulty: "Medium",
        category: "Linked List",
        tags: ["Linked List", "Two Pointers"],
      },
      description: [
        "Given the head of a linked list, remove the nth node from the end of the list and return its head.",
      ],
      example: [
        { input: "head = [1,2,3,4,5], n = 2", output: "[1,2,3,5]", explanation: null },
        { input: "head = [1], n = 1", output: "[]", explanation: null },
        { input: "head = [1,2], n = 1", output: "[1]", explanation: null },
      ],
      constraints: [
        "The number of nodes in the list is sz.",
        "1 <= sz <= 30",
        "0 <= Node.val <= 100",
        "1 <= n <= sz",
      ],
      extra: ["Follow up: Could you do this in one pass?"],
      helperCode: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def _to_ll(arr):
    if not arr: return None
    head = ListNode(arr[0]); cur = head
    for v in arr[1:]: cur.next = ListNode(v); cur = cur.next
    return head

def _to_arr(node):
    res = []
    while node: res.append(node.val); node = node.next
    return res
`,
      starterCode: `from typing import Optional

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        pass
`,
      wrapCode: `Solution.removeNthFromEndSolve = lambda self, arr, n: _to_arr(self.removeNthFromEnd(_to_ll(arr), n))
`,
      testCases: [
        { input: [[1,2,3,4,5], 2], expected: [1,2,3,5] },
        { input: [[1], 1], expected: [] },
        { input: [[1,2], 1], expected: [1] },
        { input: [[1,2,3], 3], expected: [2,3] },
      ],
    },

    copylistwithrandompointer: {
      meta: {
        title: "Copy List With Random Pointer",
        method: "copyRandomListSolve",
        difficulty: "Medium",
        category: "Linked List",
        tags: ["Hash Table", "Linked List"],
      },
      description: [
        "A linked list of length n is given such that each node contains an additional random pointer, which could point to any node in the list, or null.",
        "Construct a deep copy of the list. The deep copy should consist of exactly n brand new nodes, where each new node has its value set to the value of its corresponding original node.",
        "Return the head of the copied linked list. The linked list is represented as a list of [val, random_index] pairs.",
      ],
      example: [
        { input: "head = [[7,null],[13,0],[11,4],[10,2],[1,0]]", output: "[[7,null],[13,0],[11,4],[10,2],[1,0]]", explanation: null },
        { input: "head = [[1,1],[2,1]]", output: "[[1,1],[2,1]]", explanation: null },
      ],
      constraints: [
        "0 <= n <= 1000",
        "-10^4 <= Node.val <= 10^4",
        "Node.random is null or pointing to some node in the linked list.",
      ],
      extra: [],
      helperCode: `class Node:
    def __init__(self, x: int, next=None, random=None):
        self.val = int(x); self.next = next; self.random = random

def _build(pairs):
    if not pairs: return None
    nodes = [Node(p[0]) for p in pairs]
    for i in range(len(nodes)-1): nodes[i].next = nodes[i+1]
    for i, p in enumerate(pairs):
        if p[1] is not None: nodes[i].random = nodes[p[1]]
    return nodes[0]

def _serialize(head):
    nodes = []; cur = head
    while cur: nodes.append(cur); cur = cur.next
    idx = {id(n): i for i, n in enumerate(nodes)}
    return [[n.val, idx[id(n.random)] if n.random else None] for n in nodes]
`,
      starterCode: `from typing import Optional

class Node:
    def __init__(self, x: int, next: "Node" = None, random: "Node" = None):
        self.val = int(x)
        self.next = next
        self.random = random

class Solution:
    def copyRandomList(self, head: Optional[Node]) -> Optional[Node]:
        pass
`,
      wrapCode: `Solution.copyRandomListSolve = lambda self, pairs: _serialize(self.copyRandomList(_build(pairs)))
`,
      testCases: [
        { input: [[[7,null],[13,0],[11,4],[10,2],[1,0]]], expected: [[7,null],[13,0],[11,4],[10,2],[1,0]] },
        { input: [[[1,1],[2,1]]], expected: [[1,1],[2,1]] },
        { input: [[[3,null],[3,0],[3,null]]], expected: [[3,null],[3,0],[3,null]] },
        { input: [[]], expected: [] },
      ],
    },

    addtwonumbers: {
      meta: {
        title: "Add Two Numbers",
        method: "addTwoNumbersSolve",
        difficulty: "Medium",
        category: "Linked List",
        tags: ["Linked List", "Math", "Recursion"],
      },
      description: [
        "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each node contains a single digit.",
        "Add the two numbers and return the sum as a linked list.",
        "The two numbers do not contain any leading zero, except the number 0 itself.",
      ],
      example: [
        { input: "l1 = [2,4,3], l2 = [5,6,4]", output: "[7,0,8]", explanation: "342 + 465 = 807." },
        { input: "l1 = [0], l2 = [0]", output: "[0]", explanation: null },
        { input: "l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]", output: "[8,9,9,9,0,0,0,1]", explanation: null },
      ],
      constraints: [
        "The number of nodes in each linked list is in the range [1, 100].",
        "0 <= Node.val <= 9",
        "It is guaranteed that the list represents a number that does not have leading zeros.",
      ],
      extra: [],
      helperCode: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def _to_ll(arr):
    if not arr: return None
    head = ListNode(arr[0]); cur = head
    for v in arr[1:]: cur.next = ListNode(v); cur = cur.next
    return head

def _to_arr(node):
    res = []
    while node: res.append(node.val); node = node.next
    return res
`,
      starterCode: `from typing import Optional

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        pass
`,
      wrapCode: `Solution.addTwoNumbersSolve = lambda self, arr1, arr2: _to_arr(self.addTwoNumbers(_to_ll(arr1), _to_ll(arr2)))
`,
      testCases: [
        { input: [[2,4,3], [5,6,4]], expected: [7,0,8] },
        { input: [[0], [0]], expected: [0] },
        { input: [[9,9,9,9,9,9,9], [9,9,9,9]], expected: [8,9,9,9,0,0,0,1] },
        { input: [[1,8], [0]], expected: [1,8] },
      ],
    },

    findduplicatenumber: {
      meta: {
        title: "Find the Duplicate Number",
        method: "findDuplicate",
        difficulty: "Medium",
        category: "Linked List",
        tags: ["Array", "Two Pointers", "Binary Search", "Bit Manipulation"],
      },
      description: [
        "Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.",
        "There is only one repeated number in nums, return this repeated number.",
        "You must solve the problem without modifying the array nums and uses only constant extra space.",
      ],
      example: [
        { input: "nums = [1,3,4,2,2]", output: "2", explanation: null },
        { input: "nums = [3,1,3,4,2]", output: "3", explanation: null },
        { input: "nums = [3,3,3,3,3]", output: "3", explanation: null },
      ],
      constraints: [
        "1 <= n <= 10^5",
        "nums.length == n + 1",
        "1 <= nums[i] <= n",
        "All the integers in nums appear only once except for precisely one integer which appears two or more times.",
      ],
      extra: ["Can you solve the problem in linear runtime complexity?"],
      starterCode: `from typing import List

class Solution:
    def findDuplicate(self, nums: List[int]) -> int:
        `,
      testCases: [
        { input: [[1,3,4,2,2]], expected: 2 },
        { input: [[3,1,3,4,2]], expected: 3 },
        { input: [[3,3,3,3,3]], expected: 3 },
        { input: [[1,1]], expected: 1 },
        { input: [[2,5,9,6,9,3,8,9,7,1]], expected: 9 },
      ],
    },

    lrucache: {
      meta: {
        title: "LRU Cache",
        method: "simulate",
        difficulty: "Medium",
        category: "Linked List",
        tags: ["Hash Table", "Linked List", "Design", "Doubly-Linked List"],
      },
      description: [
        "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.",
        "Implement the LRUCache class with get(key) and put(key, value) methods.",
        "get returns the value of the key if it exists, otherwise returns -1.",
        "put inserts or updates the key-value pair. If the cache reaches capacity, evict the least recently used key before inserting.",
        "Both operations must run in O(1) average time complexity.",
      ],
      example: [
        { input: 'capacity=2, ops=["put","put","get","put","get","put","get","get","get"], args=[[1,1],[2,2],[1],[3,3],[2],[4,4],[1],[3],[4]]', output: "[-1,1,-1,3,4]", explanation: null },
      ],
      constraints: [
        "1 <= capacity <= 3000",
        "0 <= key <= 10^4",
        "0 <= value <= 10^5",
        "At most 2 * 10^5 calls will be made to get and put.",
      ],
      extra: [],
      helperCode: ``,
      starterCode: `class LRUCache:
    def __init__(self, capacity: int):
        pass

    def get(self, key: int) -> int:
        pass

    def put(self, key: int, value: int) -> None:
        pass
`,
      wrapCode: `class Solution:
    def simulate(self, capacity, ops, args):
        obj = LRUCache(capacity)
        out = []
        for op, a in zip(ops, args):
            res = getattr(obj, op)(*a)
            if op == "get":
                out.append(res)
        return out
`,
      testCases: [
        { input: [2, ["put","put","get","put","get","put","get","get","get"], [[1,1],[2,2],[1],[3,3],[2],[4,4],[1],[3],[4]]], expected: [1,-1,-1,3,4] },
        { input: [1, ["put","put","get"], [[1,1],[2,2],[1]]], expected: [-1] },
      ],
    },

    mergeksortedlists: {
      meta: {
        title: "Merge K Sorted Lists",
        method: "mergeKListsSolve",
        difficulty: "Hard",
        category: "Linked List",
        tags: ["Linked List", "Divide and Conquer", "Heap (Priority Queue)", "Merge Sort"],
      },
      description: [
        "You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.",
        "Merge all the linked-lists into one sorted linked-list and return it.",
      ],
      example: [
        { input: "lists = [[1,4,5],[1,3,4],[2,6]]", output: "[1,1,2,3,4,4,5,6]", explanation: null },
        { input: "lists = []", output: "[]", explanation: null },
        { input: "lists = [[]]", output: "[]", explanation: null },
      ],
      constraints: [
        "k == lists.length",
        "0 <= k <= 10^4",
        "0 <= lists[i].length <= 500",
        "-10^4 <= lists[i][j] <= 10^4",
        "lists[i] is sorted in ascending order.",
        "The sum of lists[i].length will not exceed 10^4.",
      ],
      extra: [],
      helperCode: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def _to_ll(arr):
    if not arr: return None
    head = ListNode(arr[0]); cur = head
    for v in arr[1:]: cur.next = ListNode(v); cur = cur.next
    return head

def _to_arr(node):
    res = []
    while node: res.append(node.val); node = node.next
    return res
`,
      starterCode: `from typing import Optional, List

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:
        pass
`,
      wrapCode: `Solution.mergeKListsSolve = lambda self, arrays: _to_arr(self.mergeKLists([_to_ll(a) for a in arrays]))
`,
      testCases: [
        { input: [[[1,4,5],[1,3,4],[2,6]]], expected: [1,1,2,3,4,4,5,6] },
        { input: [[]], expected: [] },
        { input: [[[], []]], expected: [] },
        { input: [[[1],[0]]], expected: [0,1] },
      ],
    },

    reversenodesingroup: {
      meta: {
        title: "Reverse Nodes in K-Group",
        method: "reverseKGroupSolve",
        difficulty: "Hard",
        category: "Linked List",
        tags: ["Linked List", "Recursion"],
      },
      description: [
        "Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.",
        "k is a positive integer and is less than or equal to the length of the linked list.",
        "If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as is.",
        "You may not alter the values in the list's nodes, only nodes themselves may be changed.",
      ],
      example: [
        { input: "head = [1,2,3,4,5], k = 2", output: "[2,1,4,3,5]", explanation: null },
        { input: "head = [1,2,3,4,5], k = 3", output: "[3,2,1,4,5]", explanation: null },
      ],
      constraints: [
        "The number of nodes in the list is n.",
        "1 <= k <= n <= 5000",
        "0 <= Node.val <= 1000",
      ],
      extra: ["Follow-up: Can you solve the problem in O(1) extra memory space?"],
      helperCode: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def _to_ll(arr):
    if not arr: return None
    head = ListNode(arr[0]); cur = head
    for v in arr[1:]: cur.next = ListNode(v); cur = cur.next
    return head

def _to_arr(node):
    res = []
    while node: res.append(node.val); node = node.next
    return res
`,
      starterCode: `from typing import Optional

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def reverseKGroup(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
        pass
`,
      wrapCode: `Solution.reverseKGroupSolve = lambda self, arr, k: _to_arr(self.reverseKGroup(_to_ll(arr), k))
`,
      testCases: [
        { input: [[1,2,3,4,5], 2], expected: [2,1,4,3,5] },
        { input: [[1,2,3,4,5], 3], expected: [3,2,1,4,5] },
        { input: [[1,2,3,4,5], 1], expected: [1,2,3,4,5] },
        { input: [[1], 1], expected: [1] },
      ],
    },

    // ── Trees ─────────────────────────────────────────────────────────────────

    invertbinarytree: {
      meta: {
        title: "Invert Binary Tree",
        method: "invertTreeSolve",
        difficulty: "Easy",
        category: "Trees",
        tags: ["Tree", "DFS", "BFS", "Binary Tree"],
      },
      description: [
        "Given the root of a binary tree, invert the tree, and return its root.",
      ],
      example: [
        { input: "root = [4,2,7,1,3,6,9]", output: "[4,7,2,9,6,3,1]", explanation: null },
        { input: "root = [2,1,3]", output: "[2,3,1]", explanation: null },
        { input: "root = []", output: "[]", explanation: null },
      ],
      constraints: [
        "The number of nodes in the tree is in the range [0, 100].",
        "-100 <= Node.val <= 100",
      ],
      extra: [],
      helperCode: `from collections import deque

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val; self.left = left; self.right = right

def _build(vals):
    if not vals: return None
    root = TreeNode(vals[0]); q = deque([root]); i = 1
    while q and i < len(vals):
        node = q.popleft()
        if i < len(vals) and vals[i] is not None:
            node.left = TreeNode(vals[i]); q.append(node.left)
        i += 1
        if i < len(vals) and vals[i] is not None:
            node.right = TreeNode(vals[i]); q.append(node.right)
        i += 1
    return root

def _serialize(root):
    if not root: return []
    res = []; q = deque([root])
    while q:
        node = q.popleft()
        if node: res.append(node.val); q.append(node.left); q.append(node.right)
        else: res.append(None)
    while res and res[-1] is None: res.pop()
    return res
`,
      starterCode: `from typing import Optional

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        pass
`,
      wrapCode: `Solution.invertTreeSolve = lambda self, vals: _serialize(self.invertTree(_build(vals)))
`,
      testCases: [
        { input: [[4,2,7,1,3,6,9]], expected: [4,7,2,9,6,3,1] },
        { input: [[2,1,3]], expected: [2,3,1] },
        { input: [[]], expected: [] },
      ],
    },

    maxdepthbinarytree: {
      meta: {
        title: "Maximum Depth of Binary Tree",
        method: "maxDepthSolve",
        difficulty: "Easy",
        category: "Trees",
        tags: ["Tree", "DFS", "BFS", "Binary Tree"],
      },
      description: [
        "Given the root of a binary tree, return its maximum depth.",
        "A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.",
      ],
      example: [
        { input: "root = [3,9,20,null,null,15,7]", output: "3", explanation: null },
        { input: "root = [1,null,2]", output: "2", explanation: null },
      ],
      constraints: [
        "The number of nodes in the tree is in the range [0, 10^4].",
        "-100 <= Node.val <= 100",
      ],
      extra: [],
      helperCode: `from collections import deque

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val; self.left = left; self.right = right

def _build(vals):
    if not vals: return None
    root = TreeNode(vals[0]); q = deque([root]); i = 1
    while q and i < len(vals):
        node = q.popleft()
        if i < len(vals) and vals[i] is not None:
            node.left = TreeNode(vals[i]); q.append(node.left)
        i += 1
        if i < len(vals) and vals[i] is not None:
            node.right = TreeNode(vals[i]); q.append(node.right)
        i += 1
    return root
`,
      starterCode: `from typing import Optional

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        pass
`,
      wrapCode: `Solution.maxDepthSolve = lambda self, vals: self.maxDepth(_build(vals))
`,
      testCases: [
        { input: [[3,9,20,null,null,15,7]], expected: 3 },
        { input: [[1,null,2]], expected: 2 },
        { input: [[]], expected: 0 },
        { input: [[1]], expected: 1 },
        { input: [[1,2,3,4,5]], expected: 3 },
      ],
    },

    diameterbinarytree: {
      meta: {
        title: "Diameter of Binary Tree",
        method: "diameterOfBinaryTreeSolve",
        difficulty: "Easy",
        category: "Trees",
        tags: ["Tree", "DFS", "Binary Tree"],
      },
      description: [
        "Given the root of a binary tree, return the length of the diameter of the tree.",
        "The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.",
        "The length of a path between two nodes is represented by the number of edges between them.",
      ],
      example: [
        { input: "root = [1,2,3,4,5]", output: "3", explanation: "The path is [4,2,1,3] or [5,2,1,3]." },
        { input: "root = [1,2]", output: "1", explanation: null },
      ],
      constraints: [
        "The number of nodes in the tree is in the range [1, 10^4].",
        "-100 <= Node.val <= 100",
      ],
      extra: [],
      helperCode: `from collections import deque

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val; self.left = left; self.right = right

def _build(vals):
    if not vals: return None
    root = TreeNode(vals[0]); q = deque([root]); i = 1
    while q and i < len(vals):
        node = q.popleft()
        if i < len(vals) and vals[i] is not None:
            node.left = TreeNode(vals[i]); q.append(node.left)
        i += 1
        if i < len(vals) and vals[i] is not None:
            node.right = TreeNode(vals[i]); q.append(node.right)
        i += 1
    return root
`,
      starterCode: `from typing import Optional

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        pass
`,
      wrapCode: `Solution.diameterOfBinaryTreeSolve = lambda self, vals: self.diameterOfBinaryTree(_build(vals))
`,
      testCases: [
        { input: [[1,2,3,4,5]], expected: 3 },
        { input: [[1,2]], expected: 1 },
        { input: [[1]], expected: 0 },
        { input: [[1,2,null,3,null,4,null,5]], expected: 4 },
      ],
    },

    balancedbinarytree: {
      meta: {
        title: "Balanced Binary Tree",
        method: "isBalancedSolve",
        difficulty: "Easy",
        category: "Trees",
        tags: ["Tree", "DFS", "Binary Tree"],
      },
      description: [
        "Given a binary tree, determine if it is height-balanced.",
        "A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.",
      ],
      example: [
        { input: "root = [3,9,20,null,null,15,7]", output: "True", explanation: null },
        { input: "root = [1,2,2,3,3,null,null,4,4]", output: "False", explanation: null },
        { input: "root = []", output: "True", explanation: null },
      ],
      constraints: [
        "The number of nodes in the tree is in the range [0, 5000].",
        "-10^4 <= Node.val <= 10^4",
      ],
      extra: [],
      helperCode: `from collections import deque

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val; self.left = left; self.right = right

def _build(vals):
    if not vals: return None
    root = TreeNode(vals[0]); q = deque([root]); i = 1
    while q and i < len(vals):
        node = q.popleft()
        if i < len(vals) and vals[i] is not None:
            node.left = TreeNode(vals[i]); q.append(node.left)
        i += 1
        if i < len(vals) and vals[i] is not None:
            node.right = TreeNode(vals[i]); q.append(node.right)
        i += 1
    return root
`,
      starterCode: `from typing import Optional

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def isBalanced(self, root: Optional[TreeNode]) -> bool:
        pass
`,
      wrapCode: `Solution.isBalancedSolve = lambda self, vals: self.isBalanced(_build(vals))
`,
      testCases: [
        { input: [[3,9,20,null,null,15,7]], expected: true },
        { input: [[1,2,2,3,3,null,null,4,4]], expected: false },
        { input: [[]], expected: true },
        { input: [[1,2,null,3]], expected: false },
      ],
    },

    sametree: {
      meta: {
        title: "Same Tree",
        method: "isSameTreeSolve",
        difficulty: "Easy",
        category: "Trees",
        tags: ["Tree", "DFS", "BFS", "Binary Tree"],
      },
      description: [
        "Given the roots of two binary trees p and q, write a function to check if they are the same or not.",
        "Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.",
      ],
      example: [
        { input: "p = [1,2,3], q = [1,2,3]", output: "True", explanation: null },
        { input: "p = [1,2], q = [1,null,2]", output: "False", explanation: null },
        { input: "p = [1,2,1], q = [1,1,2]", output: "False", explanation: null },
      ],
      constraints: [
        "The number of nodes in both trees is in the range [0, 100].",
        "-10^4 <= Node.val <= 10^4",
      ],
      extra: [],
      helperCode: `from collections import deque

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val; self.left = left; self.right = right

def _build(vals):
    if not vals: return None
    root = TreeNode(vals[0]); q = deque([root]); i = 1
    while q and i < len(vals):
        node = q.popleft()
        if i < len(vals) and vals[i] is not None:
            node.left = TreeNode(vals[i]); q.append(node.left)
        i += 1
        if i < len(vals) and vals[i] is not None:
            node.right = TreeNode(vals[i]); q.append(node.right)
        i += 1
    return root
`,
      starterCode: `from typing import Optional

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:
        pass
`,
      wrapCode: `Solution.isSameTreeSolve = lambda self, v1, v2: self.isSameTree(_build(v1), _build(v2))
`,
      testCases: [
        { input: [[1,2,3], [1,2,3]], expected: true },
        { input: [[1,2], [1,null,2]], expected: false },
        { input: [[1,2,1], [1,1,2]], expected: false },
        { input: [[], []], expected: true },
      ],
    },

    subtreeanothertree: {
      meta: {
        title: "Subtree of Another Tree",
        method: "isSubtreeSolve",
        difficulty: "Easy",
        category: "Trees",
        tags: ["Tree", "DFS", "String Matching", "Binary Tree", "Hash Function"],
      },
      description: [
        "Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values as subRoot and false otherwise.",
        "A subtree of a binary tree is a tree that consists of a node in the tree and all of this node's descendants.",
      ],
      example: [
        { input: "root = [3,4,5,1,2], subRoot = [4,1,2]", output: "True", explanation: null },
        { input: "root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]", output: "False", explanation: null },
      ],
      constraints: [
        "The number of nodes in the root tree is in the range [1, 2000].",
        "The number of nodes in the subRoot tree is in the range [1, 1000].",
        "-10^4 <= root.val <= 10^4",
        "-10^4 <= subRoot.val <= 10^4",
      ],
      extra: [],
      helperCode: `from collections import deque

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val; self.left = left; self.right = right

def _build(vals):
    if not vals: return None
    root = TreeNode(vals[0]); q = deque([root]); i = 1
    while q and i < len(vals):
        node = q.popleft()
        if i < len(vals) and vals[i] is not None:
            node.left = TreeNode(vals[i]); q.append(node.left)
        i += 1
        if i < len(vals) and vals[i] is not None:
            node.right = TreeNode(vals[i]); q.append(node.right)
        i += 1
    return root
`,
      starterCode: `from typing import Optional

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def isSubtree(self, root: Optional[TreeNode], subRoot: Optional[TreeNode]) -> bool:
        pass
`,
      wrapCode: `Solution.isSubtreeSolve = lambda self, v1, v2: self.isSubtree(_build(v1), _build(v2))
`,
      testCases: [
        { input: [[3,4,5,1,2], [4,1,2]], expected: true },
        { input: [[3,4,5,1,2,null,null,null,null,0], [4,1,2]], expected: false },
        { input: [[1,1], [1]], expected: true },
      ],
    },

    lowestcommonancestor: {
      meta: {
        title: "Lowest Common Ancestor of a BST",
        method: "lcaSolve",
        difficulty: "Medium",
        category: "Trees",
        tags: ["Tree", "DFS", "Binary Search Tree", "Binary Tree"],
      },
      description: [
        "Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.",
        "The LCA is defined as the lowest node in the tree that has both p and q as descendants (a node can be a descendant of itself).",
      ],
      example: [
        { input: "root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8", output: "6", explanation: "LCA of 2 and 8 is 6." },
        { input: "root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4", output: "2", explanation: "LCA of 2 and 4 is 2." },
      ],
      constraints: [
        "The number of nodes in the tree is in the range [2, 10^5].",
        "-10^9 <= Node.val <= 10^9",
        "All Node.val are unique.",
        "p != q",
        "p and q will exist in the BST.",
      ],
      extra: [],
      helperCode: `from collections import deque

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val; self.left = left; self.right = right

def _build(vals):
    if not vals: return None
    root = TreeNode(vals[0]); q = deque([root]); i = 1
    while q and i < len(vals):
        node = q.popleft()
        if i < len(vals) and vals[i] is not None:
            node.left = TreeNode(vals[i]); q.append(node.left)
        i += 1
        if i < len(vals) and vals[i] is not None:
            node.right = TreeNode(vals[i]); q.append(node.right)
        i += 1
    return root

def _find(root, val):
    if not root: return None
    if root.val == val: return root
    return _find(root.left, val) or _find(root.right, val)
`,
      starterCode: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def lowestCommonAncestor(self, root: TreeNode, p: TreeNode, q: TreeNode) -> TreeNode:
        pass
`,
      wrapCode: `def _lcaSolve(self, vals, p_val, q_val):
    root = _build(vals)
    return self.lowestCommonAncestor(root, _find(root, p_val), _find(root, q_val)).val
Solution.lcaSolve = _lcaSolve
`,
      testCases: [
        { input: [[6,2,8,0,4,7,9,null,null,3,5], 2, 8], expected: 6 },
        { input: [[6,2,8,0,4,7,9,null,null,3,5], 2, 4], expected: 2 },
        { input: [[2,1], 2, 1], expected: 2 },
      ],
    },

    levelordertree: {
      meta: {
        title: "Binary Tree Level Order Traversal",
        method: "levelOrderSolve",
        difficulty: "Medium",
        category: "Trees",
        tags: ["Tree", "BFS", "Binary Tree"],
      },
      description: [
        "Given the root of a binary tree, return the level order traversal of its nodes' values (i.e., from left to right, level by level).",
      ],
      example: [
        { input: "root = [3,9,20,null,null,15,7]", output: "[[3],[9,20],[15,7]]", explanation: null },
        { input: "root = [1]", output: "[[1]]", explanation: null },
        { input: "root = []", output: "[]", explanation: null },
      ],
      constraints: [
        "The number of nodes in the tree is in the range [0, 2000].",
        "-1000 <= Node.val <= 1000",
      ],
      extra: [],
      helperCode: `from collections import deque

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val; self.left = left; self.right = right

def _build(vals):
    if not vals: return None
    root = TreeNode(vals[0]); q = deque([root]); i = 1
    while q and i < len(vals):
        node = q.popleft()
        if i < len(vals) and vals[i] is not None:
            node.left = TreeNode(vals[i]); q.append(node.left)
        i += 1
        if i < len(vals) and vals[i] is not None:
            node.right = TreeNode(vals[i]); q.append(node.right)
        i += 1
    return root
`,
      starterCode: `from typing import Optional, List

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        pass
`,
      wrapCode: `Solution.levelOrderSolve = lambda self, vals: self.levelOrder(_build(vals))
`,
      testCases: [
        { input: [[3,9,20,null,null,15,7]], expected: [[3],[9,20],[15,7]] },
        { input: [[1]], expected: [[1]] },
        { input: [[]], expected: [] },
        { input: [[1,2,3,4,5]], expected: [[1],[2,3],[4,5]] },
      ],
    },

    rightsidetree: {
      meta: {
        title: "Binary Tree Right Side View",
        method: "rightSideViewSolve",
        difficulty: "Medium",
        category: "Trees",
        tags: ["Tree", "DFS", "BFS", "Binary Tree"],
      },
      description: [
        "Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.",
      ],
      example: [
        { input: "root = [1,2,3,null,5,null,4]", output: "[1,3,4]", explanation: null },
        { input: "root = [1,null,3]", output: "[1,3]", explanation: null },
        { input: "root = []", output: "[]", explanation: null },
      ],
      constraints: [
        "The number of nodes in the tree is in the range [0, 100].",
        "-100 <= Node.val <= 100",
      ],
      extra: [],
      helperCode: `from collections import deque

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val; self.left = left; self.right = right

def _build(vals):
    if not vals: return None
    root = TreeNode(vals[0]); q = deque([root]); i = 1
    while q and i < len(vals):
        node = q.popleft()
        if i < len(vals) and vals[i] is not None:
            node.left = TreeNode(vals[i]); q.append(node.left)
        i += 1
        if i < len(vals) and vals[i] is not None:
            node.right = TreeNode(vals[i]); q.append(node.right)
        i += 1
    return root
`,
      starterCode: `from typing import Optional, List

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def rightSideView(self, root: Optional[TreeNode]) -> List[int]:
        pass
`,
      wrapCode: `Solution.rightSideViewSolve = lambda self, vals: self.rightSideView(_build(vals))
`,
      testCases: [
        { input: [[1,2,3,null,5,null,4]], expected: [1,3,4] },
        { input: [[1,null,3]], expected: [1,3] },
        { input: [[]], expected: [] },
        { input: [[1,2,3,4]], expected: [1,3,4] },
      ],
    },

  },
};

export default problems;
