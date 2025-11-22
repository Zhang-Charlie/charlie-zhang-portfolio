import { Project } from "@/types"
import {
  hexOustHighlights,
  javaDataStructuresHighlights,
  javaSortingBenchmarkHighlights,
  pathPilotHighlights,
  usedCarPriceAnalysisHighlights,
} from "./highlights"

export const projects: Project[] = [
  {
    title: "PathPilot",
    description:
      "Placed 3rd overall at the Google AI Student Hackathon with PathPilot, an AI-powered student career guidance app built by a team of five. It generates personalised university and career paths using LLM reasoning, weighted scoring, and a multi-step questionnaire.",
    imageSrc: "/projects/pathpilot_end.jpg",
    videoSrc: "/projects/pathpilot_video.mp4",
    highlights: pathPilotHighlights,
  },
  {
    title: "HexOust",
    description:
      "HexOust is a turn-based hex-grid strategy game built in Java with a team of three. We implemented a custom hex coordinate system, movement and attack logic, and rendering from scratch, using clean OOP design and Git collaboration throughout the project.",
    imageSrc: "/projects/hexoust_pic.png",
    githubUrl: "https://github.com/Zhang-Charlie/Hexoust",
    videoSrc: "/projects/hexoust_rec.mp4",
    highlights: hexOustHighlights,
  },
  {
    title: "Java Sorting Algorithms Benchmark",
    description:
      "A Java benchmarking suite that compares the performance of Bubble Sort, Merge Sort, Quick Sort, and Counting Sort across different input sizes and input orderings. Runs timed experiments, exports CSV data, and generates visual graphs so you can see how real-world performance lines up with Big-O time complexity.",
    imageSrc: "/projects/java-sorting-benchmark.png",
    githubUrl: "https://github.com/Zhang-Charlie/Java-Sorting-Algorithms-Benchmark",
    highlights: javaSortingBenchmarkHighlights,
  },
  {
    title: "Java Data Structures Library",
    description:
      "A from-scratch Java data structures library implementing core structures like dynamic arrays, linked lists, stacks, queues, trees, heaps, and hash maps. Focuses on clean OOP design, generics, and readable APIs, with a benchmarking driver to compare custom implementations against Java's built-in collections.",
    imageSrc: "/projects/java-data-structures.png",
    githubUrl: "https://github.com/Zhang-Charlie/Java-Data-Structures-Library",
    highlights: javaDataStructuresHighlights,
  },
  {
    title: "Used Car Price Analysis & Prediction",
    description:
      "A full data science project analysing and predicting used car prices using real-market data. Includes data scraping, cleaning, feature engineering, exploratory visualisations, and regression models to understand how mileage, age, fuel type, and body style affect price.",
    imageSrc: "/projects/price_vs_mileage.png",
    githubUrl: "https://github.com/Zhang-Charlie/used-car-price-analysis",
    highlights: usedCarPriceAnalysisHighlights,
  },
]
