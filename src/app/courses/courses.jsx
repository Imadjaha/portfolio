// data.js
const courses = [
  {
    id: 1,
    title: "Introduction to Computer Science and Programming",
    semester: "WS22",
    description:
      "Overview of Computer Science: Key areas, information representation and processing, computer architecture, algorithms, programming languages, formal languages, finite automata, computability limits, logical and functional programming.\n\n Programming in C: Basic language elements, control structures, data types, functions, recursion, problem-specific data types (arrays, structures), dynamic data structures, and program management.",
  },
  {
    id: 2,
    title: "Basics of Technical Computer Science",
    semester: "WS22",
    description:
      "Qualifications: Mastery of fundamental concepts in technical computer science, understanding the construction and operation of simple logic gates to complete computers, and the principles of low-level programming. Ability to mathematically model information technology contexts. Topics Covered: Information Representation and Coding, Logic Algebra (Binary Boolean Algebra), Logic Circuits and Sequential Circuits, Computer Architecture, Microprocessors, Assembly Programming Techniques, Operating Systems.",
  },
  {
    id: 3,
    title: "Electrical Fundamentals of Computer Science",
    semester: "WS22",
    description:
      "Qualifications: Understanding of passive components and their behavior in DC and AC circuits. Ability to calculate the behavior of passive networks in both time and frequency domains. Mastery of basic concepts in electrical and magnetic fields.Topics Covered: Basic Electrical Engineering Concepts, Signal Description Fundamentals, Calculation in Linear Electrical Networks, Networks with Variable Frequency, Semiconductor Devices and Circuits, Electromagnetic Fields.",
  },
  {
    id: 4,
    title: "Mathematics A",
    semester: "WS22",
    description:
      "Qualifications: Proficiency in formal mathematical rules and various approaches to solving problems. Ability to assess linearity and multiple linearity. Understanding and application of mathematical descriptions (text and symbolism) within the appropriate conceptual framework. Familiarity with general mathematical facts and relationships to simplify or avoid calculations. Integration of geometry and algebra to accurately verify mathematical concepts using suitable calculations and insights. Knowledge of vector space theory, its applications, and related techniques, with the ability to apply methods to practical tasks Topics Covered: General Fundamentals, Elementary Functions, Complex Numbers, Linear Systems of Equations, Gaussian Method, Geometric Vectors, Matrix Calculations, Determinants, Basics of Differential and Integral Calculus in One Variable, General Vector Spaces, Basis, Dimension, Orthogonality.",
  },
  {
    id: 5,
    title: "Mathematics B",
    semester: "SS23",
    description:
      "Qualifications: Familiarity with differential and integral calculus for functions of multiple variables and their applications. Understanding the extension from one-dimensional to multidimensional calculus and the enhanced mathematical description it offers. Ability to apply these methods to practical, application-oriented problems.Topics Covered: Sequences, Series, Limits, Taylor and Power Series, Elementary Differential Equations, Eigenvalues and Eigenvectors, Symmetric Matrices, Definiteness, Linear Mappings, Basis Representations, Multivariable Calculus (partial and total differentiation, chain rule, higher-order derivatives, Taylor expansion), Multivariable Integration (Fubini’s Theorem, Transformation Theorem, Integration over Normal Regions).",
  },
  {
    id: 6,
    title: "Algorithms and Data Structures",
    semester: "SS23",
    description:
      "Tools: Fundamental Algorithms, Basics of Graph Theory, Problem Specification: Exhaustive Search, Backtracking, Greedy Algorithms, Dynamic Programming, Divide and Conquer, Complexity and Correctness: Time and Space Complexity, Correctness Proofs, Search Methods: Efficient Searching Techniques, Sorting: Sorting Algorithms, Graph Algorithms: Graph Traversal, Shortest Paths, Topological Sorting, Flow Problems, Data Structures: Lists, Binary Trees (including Balanced Trees), Heaps, Hashing, NP-Completeness, Reductions.",
  },

  {
    id: 7,
    title: "Fundamentals of Computer Architecture",
    semester: "SS23",
    description:
      "Qualifications: Deep understanding of modern computer systems and the operation of their components. Ability to follow and evaluate recent developments in the field. Skills to analyze complex systems effectively.Topics Covered: Historical development of computer systems, structure, organization, and function of computer architectures, classification of computer systems (CISC/RISC/IA64/...), performance evaluation methods for computer architectures, methods for enhancing computer architecture performance, parallel computing architectures, computer peripherals, and networked computing systems.",
  },
  {
    id: 8,
    title: "Mathematics for Computer Science I",
    semester: "SS23",
    description:
      "Qualifications: Mastery of mathematical foundations for discrete structures crucial in computer science. Understanding the relevance of underlying mathematical theories for practical applications in computer science and ability to transfer these concepts to other computing problems.Topics Covered: Relations and Graphs: Basics, operations on relations, representations (matrices/graphs), order and equivalence relations, closures, graph theory. Algebraic Structures: Groups, rings, homomorphisms, elementary number theory (modular arithmetic). Applications: Use of these mathematical structures in computer science, including databases, networks, codes, and cryptography.",
  },
  {
    id: 9,
    title: "Mathematics for Computer Science II",
    semester: "WS23",
    description:
      "Qualifications: Knowledge of fundamental concepts in combinatorics and statistics. Ability to model simple discrete relationships using stochastic methods.Topics Covered: Combinatorics: Draws from urn models, binomial coefficients; Boolean Algebras: Basics, measures on Boolean algebras; Probability: Basic probability, conditional probability, Bayes' theorem, independence; Discrete Random Variables: Expectation, variance, covariance, correlation, entropy; Probability Distributions: Density functions, Law of Large Numbers, normal distribution; Random Vectors: Analysis of random vectors; Hypothesis Testing: Hypotheses and test theory; Regression: Linear, logistic, and nearest neighbor regression; Stochastic Processes: Markov chains and other stochastic processes.",
  },
  {
    id: 10,
    title: "Operating Systems",
    semester: "WS23",
    description:
      "Qualifications: Understanding of operating system tasks (particularly Unix, Linux, Windows), associated problems, and fundamental concepts for addressing them. Insight into programming with threads and synchronization mechanisms.Topics Covered: Operating System Architectures and Modes, Interrupts (asynchronous events) and System Calls, Processes and Threads, CPU Scheduling, Interprocess Communication and Synchronization Mechanisms, Main Memory Management, Device and File Management, Linux User Interface.",
  },
  {
    id: 11,
    title: "Object-Oriented Programming",
    semester: "WS23",
    description:
      "Qualifications: Understanding of key concepts in object-oriented and generic programming. Proficiency in C++ as a representative language, capable of independently developing and implementing solutions for complex problems using existing class libraries and packages. Ability to develop graphical user interfaces with Qt while considering ergonomic aspects.Topics Covered: Transition from C to C++: Object concepts and abstract data types, inheritance, and polymorphism; Generic Programming: Use of templates; Exception Handling: Managing errors and exceptions; Standard Template Library (STL): Utilizing standard libraries; Qt: C++ class library for graphical user interface programming; C-XSC: C++ class library for scientific computing; Threads: Concurrency and multithreading.",
  },
  {
    id: 12,
    title: "Database Systems",
    semester: "WS23",
    description:
      "Qualifications: Familiarity with database systems, particularly relational database systems and relational algebra. Ability to apply associated algorithms for database design.Topics Covered: Data Abstraction and Data Independence, Data Models, Database Design, Relational Database Model, Relational Algebra, Relational Calculus, Relational Query Languages, Relational Design Theory, Data Integrity, Physical Data Organization, Query Processing, Transaction Management, Error Handling, Multi-User Synchronization, Non-Relational Database Systems.",
  },
  {
    id: 13,
    title: "Internet Technologies",
    semester: "WS23",
    description:
      "Qualifications: Understanding of the underlying technologies of the Internet. Ability to evaluate various Internet technologies and Internet-based architectures, considering security and availability aspects.Topics Covered: Fundamental Internet Technologies: Networks, Internet Reference Model, IP Addressing, Routing, Packet Formats, Internet Services, and Internet-Based Architectures. Basic IT Security Concepts: Authenticity, Integrity, Confidentiality. Measures and Technologies for Security: Encryption, Signatures, Hash Codes, IPSec, SSL, S/MIME, etc. Privacy and Copyright Issues: Internet-related privacy and copyright considerations.",
  },
  {
    id: 14,
    title: "Automata, Languages, and Computability",
    semester: "SS24",
    description:
      "Qualifications: Familiarity with theoretical computer science concepts. Ability to work with formal languages, use grammars, and various automata models. Capability to formally prove the computability of algorithms and properties in the field of computability.Topics Covered: Formal Languages, Chomsky Hierarchy, Finite Automata, Non-determinism, Pushdown Automata, Turing Machines, Linear Bounded Automata, Inclusion and Closure Properties, Computability and Halting Problem, Universal Turing Machines, Gödelization, Gödel's Incompleteness Theorems, Complexity Theory, Complexity Classes, NP-Completeness.",
  },

  {
    id: 15,
    title: "Computer Networks",
    semester: "SS24",
    description:
      "Qualifications: Understanding of computer networks, including topologies, layer models, programming models, and examples like TCP/IP. Topics Covered: Introduction to Computer Networks, Application Layer / Higher Layers, Transport Layer, Network Layer, Data Link Layer, Physical Layer, Network Architectures for Multiprocessor Systems, Real-Time Transmission.",
  },
  {
    id: 16,
    title: "Applied Machine Learning",
    semester: "SS24",
    description:
      "Qualifications: Understanding various data-driven methods in machine learning and their applications across different IT fields. Proficient in data preparation and analysis. Knowledgeable in Supervised Learning, Unsupervised Learning, and Reinforcement Learning, including techniques such as Support Vector Machines (SVM), K-Means Clustering, Random Forest, Hierarchical Clustering, K-Nearest Neighbors (KNN), DBSCAN, Decision Trees, Multi-Layer Perceptron (MLP), and Q-Learning. Capable of implementing these methods and developing machine learning applications using Python libraries and tools such as Seaborn, Pandas, NumPy, Scikit-Learn. Topics Covered: Machine Learning Methods: Supervised Learning, Unsupervised Learning, Reinforcement Learning, Algorithms: SVM, K-Means Clustering, Random Forest, Hierarchical Clustering, KNN, DBSCAN, Decision Trees, MLP, Q-Learning, Regression: Linear and Logistic Regression, Python Libraries and Tools: Seaborn, Pandas, NumPy, Scikit-Learn, TensorFlow, Keras, Hands-On Practice: Practical exercises based on lecture content.",
  },
  {
    id: 17,
    title: "Software Technology",
    semester: "SS24",
    description:
      "Qualifications: Mastery of fundamental approaches to professional software development using various methodologies and graphical notations such as UML, ERM, and SA/SD. Proficiency in reading Java code and translating it into UML diagrams. Experience with JUnit5 for unit testing and the ability to assess the applicability of CASE tools based on practical experience. Topics Covered: Introduction to Software Technology: Overview of object-oriented software development; detailed object-oriented analysis using UML, including Class Diagrams, Sequence Diagrams, Use Case Diagrams, and State Machine Diagrams; object-oriented design (OO-Design); data-oriented modeling methods including ERM; structured analysis (SA/SD); development methodologies; quality assurance (QA) with JUnit5 for unit testing; CASE tools/UML tools; version management systems. Practical Application: Hands-on exercises with real-world examples, including translating Java code to UML diagrams, implementing unit tests with JUnit5, and practical use of development tools and methodologies.",
  },

];

export default courses;
