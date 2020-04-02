
export const algorithmsCollection = {
	name: "Algorithms & Data structures",
	areas: [
		{
			name: "Data structures",
			skills: [
				{
					name: "Arrays",
					description: {
						text: "Learn how and when arrays should be used.",
						links: [
							["javascript.info - Arrays", "https://javascript.info/array"],
							["Freecodecamp - Arrays, A Visual Introduction for Beginners", "https://www.freecodecamp.org/news/data-structures-101-arrays-a-visual-introduction-for-beginners-7f013bcc355a/"],
							["Wikipedia - Array data structure", "https://en.wikipedia.org/wiki/Array_data_structure"],
							["MDN - Array", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array"],
						]
					},
				},
				{
					name: "Queues & Stacks",
					description: {
						text: "Learn how and when queues and stacks should be used.",
						links: [
							["Stacks and Queues", "https://www.cs.cmu.edu/~adamchik/15-121/lectures/Stacks%20and%20Queues/Stacks%20and%20Queues.html"],
							["Difference between Stack and Queue Data Structures", "https://www.geeksforgeeks.org/difference-between-stack-and-queue-data-structures/"],
							["Data Structures: Stacks & Queues", "https://medium.com/@hitherejoe/data-structures-stacks-queues-a3b3591c8cb0"],
							["Stacks vs. Queues In JavaScript", "https://dev.to/emmawedekind/stacks-vs-queues-in-javascript-4d1o"],
						]
					},
				},
				{
					name: "Trees",
					description: {
						text: "Learn how and when trees should be used.",
						links: [
							["Wikipedia - Tree (data structure)", "https://en.wikipedia.org/wiki/Tree_(data_structure)"],
							["Freecodecamp - Everything you need to know about tree data structure", "https://www.freecodecamp.org/news/all-you-need-to-know-about-tree-data-structures-bceacb85490c/"],
							["Data Structure and Algorithms - Tree", "https://www.tutorialspoint.com/data_structures_algorithms/tree_data_structure.htm"],
						]
					},
					skills: [
						{
							name: "Binary Indexed Tree",
							description: {
								text: "Learn how and when binary indexed trees should be used.",
								links: [
									["Wikipedia - Fenwick tree", "https://en.wikipedia.org/wiki/Fenwick_tree"],
									["What is the intuition behind a binary indexed tree?", "https://cs.stackexchange.com/questions/10538/bit-what-is-the-intuition-behind-a-binary-indexed-tree-and-how-was-it-thought-a"],
									["Binary Indexed Tree or Fenwick Tree", "https://www.geeksforgeeks.org/binary-indexed-tree-or-fenwick-tree-2/"],
									["Fenwick Tree / Binary Indexed Tree", "https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/tree/fenwick-tree"],
									["Youtube - Binary Indexed Tree", "https://www.youtube.com/watch?v=CWDQJGaN1gY&index=18&t=0s&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8"],
									["Github - fast-binary-indexed-tree-js", "https://github.com/microsoft/fast-binary-indexed-tree-js"],
								]
							},
						},
						{
							name: "Heap",
							description: {
								text: "Learn how and when heaps should be used.",
								links: [
									["Wikipedia - Heap (data structure)", "https://en.wikipedia.org/wiki/Heap_(data_structure)"],
									["Tutorialspoint - Heap Data Structure", "https://www.tutorialspoint.com/data_structures_algorithms/heap_data_structure.htm"],
									["Learning to Love Heaps", "https://medium.com/basecs/learning-to-love-heaps-cef2b273a238"],
									["How to implement Heap Data structure in JavaScript", "https://reactgo.com/javascript-heap-datastructure/"],
									["Youtube - Data Structures: Heaps", "https://www.youtube.com/watch?v=t0Cq6tVNRBA&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8&index=5"],
								]
							},
						},
						{
							name: "Red-black Tree",
							description: {
								text: "Learn how and when red-black trees should be used.",
								links: [
									["Wikipedia - Red–black tree", "https://en.wikipedia.org/wiki/Red%E2%80%93black_tree"],
									["Painting Nodes Black With Red-Black Trees", "https://dev.to/vaidehijoshi/painting-nodes-black-with-red-black-trees"],
									["Red-Black Tree", "https://www.geeksforgeeks.org/red-black-tree-set-1-introduction-2/"],
									["Red Black Trees in JavaScript", "https://medium.com/@julianknodt/red-black-trees-in-javascript-c20eec1d5d1c"],
									["Github - Red–Black Tree", "https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/tree/red-black-tree"],
								]
							},
						},
						{
							name: "Trie",
							description: {
								text: "Learn how and when tries should be used.",
								links: [
									["Wikipedia - Trie", "https://en.wikipedia.org/wiki/Trie"],
									["Trie (Insert and Search)", "https://www.geeksforgeeks.org/trie-insert-and-search/"],
									["Trying to Understand Tries", "https://medium.com/basecs/trying-to-understand-tries-3ec6bede0014"],
									["Trie, Datastructure", "https://www.interviewcake.com/concept/java/trie"],
									["Youtube - Data Structures: Tries", "https://www.youtube.com/watch?v=zIjfhVPRZCg&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8&index=7"],
									["Practical Data Structures: Tries", "https://hackernoon.com/practical-data-structures-for-frontend-applications-when-to-use-tries-5428a565eba4"],
									["Trie, visualization", "https://www.cs.usfca.edu/~galles/visualization/Trie.html"],
								]
							},
						},
						{
							name: "K-D Tree",
							description: {
								text: "Learn how and when K-D trees should be used.",
								links: [
									["Wikipedia - k-d tree", "https://en.wikipedia.org/wiki/K-d_tree"],
									["Github - k-d Tree JavaScript Library", "https://github.com/ubilabs/kd-tree-javascript"],
									["kd-Trees", "https://www.cs.cmu.edu/~ckingsf/bioinfo-lectures/kdtrees.pdf"],
									["Youtube - KD Tree Algorithm", "https://www.youtube.com/watch?v=TLxWtXEbtFE"],
								]
							},
						}
					]
				},
				{
					name: "Hash Tables",
					description: {
						text: "Learn how and when hash tables should be used.",
						links: [
							["Wikipedia - Hash table", "https://en.wikipedia.org/wiki/Hash_table"],
							["Hash tables explained", "https://yourbasic.org/algorithms/hash-tables-explained/"],
							["Basics of Hash Tables", "https://www.hackerearth.com/practice/data-structures/hash-tables/basics-of-hash-tables/tutorial/"],
							["Javascript Hash Table", "https://medium.com/@yanganif/javascript-hash-table-8878afceecbc"],
							["Objects and Hash Tables in Javascript", "https://codeburst.io/objects-and-hash-tables-in-javascript-a472ad1940d9"],
						]
					},
				},
				{
					name: "Linked Lists",
					description: {
						text: "Learn how and when linked lists should be used.",
						links: [
							["Wikipedia - Linked list", "https://en.wikipedia.org/wiki/Linked_list"],
							["Introduction to Linked Lists", "https://www.studytonight.com/data-structures/introduction-to-linked-list"],
							["Linked Lists in JavaScript", "https://codeburst.io/linked-lists-in-javascript-es6-code-part-1-6dd349c3dcc3"],
							["The Little Guide of Linked List in JavaScript", "https://hackernoon.com/the-little-guide-of-linked-list-in-javascript-9daf89b63b54"],
						]
					},
				},
				{
					name: "Graphs",
					description: {
						text: "Learn how and when graphs should be used.",
						links: [
							["Wikipedia - Graph theory", "https://en.wikipedia.org/wiki/Graph_theory"],
							["Implementation of Graph in JavaScript", "https://www.geeksforgeeks.org/implementation-graph-javascript/"],
							["Graphs and Graph Algorithms", "https://runestone.academy/runestone/books/published/pythonds/Graphs/Objectives.html"],
							["The Javascript Developer’s Guide to Graphs", "https://hackernoon.com/the-javascript-developers-guide-to-graphs-and-detecting-cycles-in-them-96f4f619d563"],
						]
					},
				}
			]
		},
		{
			name: "Analysis",
			skills: [
				{
					name: "Time complexity",
					description: {
						text: "Learn about time complexity and how it can be used to analyze an algorithm.",
						links: [
							["Wikipedia - Time complexity", "https://en.wikipedia.org/wiki/Time_complexity"],
							["Time Complexity of Algorithms", "https://www.studytonight.com/data-structures/time-complexity-of-algorithms"],
							["Freecodecamp - An Introduction to Time Complexity", "https://www.freecodecamp.org/news/time-complexity-of-algorithms/"],
							["8 time complexities that every programmer should know", "https://adrianmejia.com/most-popular-algorithms-time-complexity-every-programmer-should-know-free-online-tutorial-course/"],
							["Time Complexity Analysis in JavaScript", "https://www.jenniferbland.com/time-complexity-analysis-in-javascript/"],
							["An intro to Algorithms", "https://codeburst.io/algorithms-i-searching-and-sorting-algorithms-56497dbaef20"]
						]
					},
					skills: [
						{
							name: "Cost model",
							description: {
								text: "Learn how to setup a cost model for an algorithm.",
								links: [
									["Wikipedia - Analysis of algorithms", "https://en.wikipedia.org/wiki/Analysis_of_algorithms"],
									["Analysis of Algorithms", "https://aofa.cs.princeton.edu/10analysis/"],
									["The cost of JavaScript in 2019", "https://v8.dev/blog/cost-of-javascript-2019"],
								]
							},
						},
						{
							name: "Order of Growth",
							description: {
								text: "Learn how to make an order-of-growth classification to classify the cost model.",
								links: [
									["Quora - What is the meaning of 'order of growth'", "https://www.quora.com/What-is-the-meaning-of-order-of-growth-in-algorithm-analysis-and-how-can-we-find-the-order-of-growth-of-given-algorithm"],
									["Orders of Growth", "http://www.ccs.neu.edu/home/jaa/CS7800.12F/Information/Handouts/order.html"],
									["Coursera - Order-of-Growth Classifications", "https://www.coursera.org/lecture/algorithms-part1/order-of-growth-classifications-Xk03a"],
								]
							},
						},
						{
							name: "Big O notation",
							description: {
								text: "Learn how to use Big O notation to classify the time complexity of an algorithm.",
								links: [
									["Wikipedia - Big O notation", "https://en.wikipedia.org/wiki/Big_O_notation"],
									["Time Complexity/Big O Notation", "https://medium.com/javascript-scene/time-complexity-big-o-notation-1a4310c3ee4b"],
									["Big O Notation in JavaScript", "https://medium.com/cesars-tech-insights/big-o-notation-javascript-25c79f50b19b"],
									["Big O in JS: The basic that you need to know", "https://medium.com/front-end-weekly/big-o-in-js-the-basic-that-you-need-to-know-a5abb45570fa"],
									["Big O in JavaScript", "https://medium.com/@gmedina229/big-o-in-javascript-36ff67766051"],
									["dev.to - What is Big O Notation, and Why is it Useful?", "https://dev.to/mattdmccarley/what-is-big-o-notation-and-why-is-it-useful-2b7l"],
									["dev.to - Big-O Notation Useful guide", "https://dev.to/yashwanthambati/big-o-notation-complete-guide-226h"],
								]
							},
						},
					]
				},
				{
					name: "Space Complexity",
					description: {
						text: "Learn about space complexity and how it can be used to analyze an algorithm.",
						links: [
							["Space Complexity of Algorithms", "https://www.studytonight.com/data-structures/space-complexity-of-algorithms"],
							["Google Devs - Fix Memory Problems", "https://developers.google.com/web/tools/chrome-devtools/memory-problems"],
							["Google Devs - Memory Terminology", "https://developers.google.com/web/tools/chrome-devtools/memory-problems/memory-101"],
							["Google Devs - How to Record Heap Snapshots", "https://developers.google.com/web/tools/chrome-devtools/memory-problems/heap-snapshots"],
							["Debugging Memory Leaks in JavaScript", "https://medium.com/@sarahelson81/debugging-memory-leaks-in-javascript-ed6d0fa84b40"],
							["Wikipedia - Space complexity", "https://en.wikipedia.org/wiki/Space_complexity"],
							["Space Complexity", "http://exploreshaifali.github.io/2014/02/13/Space-Complexity/"],
						]
					},
				},
			]
		},
		{
			name: "Algorithms",
			skills: [
				{
					name: "Sorting",
					description: {
						text: "Learn about the most important sorting algorithms and figure out what challenges there are involved with implementing one.",
						links: [
							["A Guide To Sorting Algorithms in JavaScript", "https://blog.bitsrc.io/a-guide-to-sorting-algorithms-in-javascript-5b32da4eae1e"],
							["dev.to - Sorting Algorithms with Javascript", "https://dev.to/wangonya/sorting-algorithms-with-javascript-part-1-4aca"],
							["Introduction to Sorting", "https://www.studytonight.com/data-structures/introduction-to-sorting"],
							["Implementing Sorting Algorithms in JavaScript", "https://medium.com/@rwillt/implementing-sorting-algorithms-in-javascript-b08504cdf4a9"],
							["Algorithms – Sorting Algorithms in JavaScript", "https://notlaura.com/day-6-algorithms-sorting-algorithms-in-javascript/"],
						]
					},
					skills: [
						{
							name: "Insertion Sort",
							description: {
								text: "Learn about the insertion sort algorithm.",
								links: [
									["Wikipedia - Insertion sort", "https://en.wikipedia.org/wiki/Insertion_sort"],
									["Insertion Sort", "https://www.geeksforgeeks.org/insertion-sort/"],
									["Insertion Sort Algorithm", "https://www.interviewbit.com/tutorial/insertion-sort-algorithm/"],
									["Insertion Sorting for Beginners in JS", "https://dev.to/ryan_dunton/insertion-sorting-for-beginners-in-js------fkg"],
									["Algorithms: Insertion Sort in JavaScript", "https://medium.com/dailyjs/insertion-sort-in-javascript-9c077844717a"],
								]
							},
						},
						{
							name: "Quicksort",
							description: {
								text: "Learn about the quicksort algorithm.",
								links: [
									["Wikipedia - Quicksort", "https://en.wikipedia.org/wiki/Quicksort"],
									["A Quick Explanation of Quick Sort", "https://medium.com/karuna-sehgal/a-quick-explanation-of-quick-sort-7d8e2563629b"],
									["QuickSort", "https://www.geeksforgeeks.org/quick-sort/"],
									["Implementing Quicksort in JavaScript", "https://medium.com/@Charles_Stover/implementing-quicksort-in-javascript-8044a8e2bf39"],
									["Computer science in JavaScript: Quicksort", "https://humanwhocodes.com/blog/2012/11/27/computer-science-in-javascript-quicksort/"],
								]
							},
						},
						{
							name: "Mergesort",
							description: {
								text: "Learn about the mergesort algorithm.",
								links: [
									["Wikipedia - Merge sort", "https://en.wikipedia.org/wiki/Merge_sort"],
									["Merge Sort Algorithm in JavaScript", "https://medium.com/javascript-in-plain-english/javascript-merge-sort-3205891ac060"],
									["A Simplified Explanation of Merge Sort", "https://medium.com/karuna-sehgal/a-simplified-explanation-of-merge-sort-77089fe03bb2"],
									["Overview of merge sort", "https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/overview-of-merge-sort"],
									["Freecodecamp - The Merge Sort Algorithm Explained", "https://www.freecodecamp.org/forum/t/the-merge-sort-algorithm-explained/16104"],
								]
							},
						},
						{
							name: "Heapsort",
							description: {
								text: "Learn about the heapsort algorithm.",
								links: [
									["Wikipedia - Heapsort", "https://en.wikipedia.org/wiki/Heapsort"],
									["Heapify All The Things With Heap Sort", "https://medium.com/basecs/heapify-all-the-things-with-heap-sort-55ee1c93af82"],
									["Heap Sort Algorithm", "https://www.studytonight.com/data-structures/heap-sort"],
									["Heapsort Algorithm", "https://www.interviewcake.com/concept/java/heapsort"],
									["Heap Sort", "https://brilliant.org/wiki/heap-sort/"],
								]
							},
						}
					]
				},
				{
					name: "Searching",
					description: {
						text: "Learn about the most important searching algorithms and figure out what challenges there are involved with implementing one.",
						links: [
							["Wikipedia - Search algorithm", "https://en.wikipedia.org/wiki/Search_algorithm"],
							["Search Algorithms with ES6", "https://github.com/Crizstian/data-structure-and-algorithms-with-ES6/tree/master/13-chapter-Searching-Algorithms"],
							["Introduction to Searching Algorithms", "https://www.studytonight.com/data-structures/search-algorithms"],
							["Implement linear and binary search algorithms with Javascript", "https://medium.com/employbl/implement-linear-and-binary-search-algorithms-with-javascript-2149997588f0"],
							["Searching Algorithms In Javascript", "https://www.scriptonitejs.com/javascript-searching-algorithms/"],
						]
					},
					skills: [
						{
							name: "Binary Search",
							description: {
								text: "Learn about the binary search algorithm.",
								links: [
									["Wikipedia - Binary search algorithm", "https://en.wikipedia.org/wiki/Binary_search_algorithm"],
									["How to implement a Binary search algorithm", "https://reactgo.com/binary-search-algorithm-javascript/"],
									["Binary Search", "https://www.interviewbit.com/courses/programming/topics/binary-search/"],
									["What Is Binary Search, A Detailed Step-By-Step", "https://medium.com/@jeffrey.allen.lewis/javascript-algorithms-explained-binary-search-25064b896470"],
									["Programming with JS: Binary Search", "https://hackernoon.com/programming-with-js-binary-search-aaf86cef9cb3"],
									["Binary Search In JavaScript", "https://www.geeksforgeeks.org/binary-search-in-javascript/"],
								]
							},
						},
						{
							name: "Breadth First Search",
							description: {
								text: "Learn about the breadth first search algorithm.",
								links: [
									["Wikipedia - Breadth-first search", "https://en.wikipedia.org/wiki/Breadth-first_search"],
									["Breaking Down Breadth-First Search", "https://medium.com/basecs/breaking-down-breadth-first-search-cebe696709d9"],
									["Breadth First Search in JavaScript", "https://medium.com/dailyjs/breadth-first-search-in-javascript-e655cd824fa4"],
									["Github - Breadth-First Search (BFS)", "https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/graph/breadth-first-search"],
									["The Magician’s Guide to Algorithms", "https://levelup.gitconnected.com/the-magicians-guide-to-algorithms-part-4-the-breadth-first-search-b800aec8ccf8"],
								]
							},
						},
						{
							name: "Depth First Search",
							description: {
								text: "Learn about the depth first search algorithm.",
								links: [
									["Wikipedia - Depth-first search", "https://en.wikipedia.org/wiki/Depth-first_search"],
									["Depth First Search Algorithm", "https://edgy.app/depth-first-search-algorithm-what-it-is-and-how-it-works"],
									["Depth first and breadth first search on trees", "https://medium.com/employbl/depth-first-and-breadth-first-search-on-trees-in-javascript-58dcd6ff8de1"],
									["Breadth-first vs Depth-first Tree Traversal", "https://medium.com/@kenny.hom27/breadth-first-vs-depth-first-tree-traversal-in-javascript-48df2ebfc6d1"],
									["Github - Depth-First Search (DFS)", "https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/graph/depth-first-search"],
								]
							},
						},
						{
							name: "Dijkstra's Algorithm",
							description: {
								text: "Learn about dijkstra's algorithm.",
								links: [
									["Wikipedia - Dijkstra's algorithm", "https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm"],
									["Dijkstra’s algorithm", "https://courses.cs.washington.edu/courses/cse373/16su/lectures/lecture15.pdf"],
									["How to implement Dijkstra’s Algorithm", "https://hackernoon.com/how-to-implement-dijkstras-algorithm-in-javascript-abdfd1702d04"],
									["A Walkthrough of Dijkstra’s Algorithm", "https://medium.com/@adriennetjohnson/a-walkthrough-of-dijkstras-algorithm-in-javascript-e94b74192026"],
								]
							},
						},
						{
							name: "String Search",
							description: {
								text: "Learn about various algorithms for searching in strings.",
								links: [
									["Wikipedia - String-searching algorithm", "https://en.wikipedia.org/wiki/String-searching_algorithm"],
									["Boyer Moore String Search", "https://ongspxm.github.io/blog/2017/05/boyer-moore-search/"],
									["Boyer–Moore string-search algorithm", "https://en.wikipedia.org/wiki/Boyer%E2%80%93Moore_string-search_algorithm"],
								]
							},
						}
					]
				},
				{
					name: "Hashing",
					description: {
						text: "Learn about hashing algorithms.",
						links: [
							["Wikipedia - Hash function", "https://en.wikipedia.org/wiki/Hash_function"],
							["How Encryption Works", "https://computer.howstuffworks.com/encryption5.htm"],
							["Cryptography for JavaScript: Hash Function", "https://medium.com/@promentol/cryptography-for-javascript-node-js-developers-part-1-hash-function-86d119c7304"],
							["Github - hash.js", "https://gist.github.com/iperelivskiy/4110988"],
						]
					},
				}
			]
		}
	]
}