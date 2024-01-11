# Water Jug Challenge

## Overview

Welcome to the Water Jug Challenge! In this task, you will develop an application to solve the classic Water Jug Riddle. The challenge involves using two jugs with different capacities (X gallons and Y gallons) to measure exactly Z gallons of water. Your application should have a user interface (UI) that displays the state changes of each jug (Empty, Full, or Partially Full) as it progresses towards the solution. **Backend candidates**: The UI is not necessary; create an API endpoint with a JSON response providing the solution.

## Goals

1. **Problem Solving**: Measure Z gallons of water using only the two jugs in the most efficient way possible.
2. **User Interface Development**: Create a UI where users can input any values for X, Y, and Z, and see the step-by-step solution. If a solution is not possible, the UI should display "No Solution".

## Limitations

- Allowed Actions: Fill, Empty, Transfer (between the two jugs only).
- X, Y, and Z are greater than 0.
- X, Y, and Z are integers (no decimals, fractions).

## Deliverables

Include a **README.MD** file at the root of the repository for documentation and explanations.

- The application's source code should be in a public Github repo with a provided link.
- **Algorithmic Approach**: Briefly explain the mathematical theory or algorithm used to find the solution.
- **Test Cases for Validation**: Provide several test cases with expected outcomes for solution validation.
- **Instructions**: How to run the program.
- The readme.md file will be used to measure your written communication skills and documentation, which are important for teamwork.

### Example:

**Bucket X**: 2
**Bucket Y**: 10
**Amount wanted Z**: 4

#### Best Solution:

| Bucket X | Bucket Y | Explanation                                    |
| -------- | -------- | ---------------------------------------------- |
| 2        | 0        | Fill bucket X                                  |
| 0        | 2        | Transfer from bucket X to bucket Y             |
| 2        | 2        | Fill bucket X                                  |
| 0        | 4        | Transfer from bucket X to bucket Y. **Solved** |

#### Worst Solution

| Bucket X | Bucket Y | Explanation                                    |
| -------- | -------- | ---------------------------------------------- |
| 0        | 10       | Fill bucket Y                                  |
| 2        | 8        | Transfer from bucket Y to bucket X             |
| 0        | 8        | Fill bucket X                                  |
| 2        | 6        | Transfer from bucket Y to bucket X             |
| 0        | 6        | Empty bucket X                                 |
| 2        | 4        | Transfer from bucket Y to bucket X. **Solved** |

### Example:

**Bucket X**: 2
**Bucket Y**: 100
**Amount wanted Z**: 96

#### Best Solution:

| Bucket X | Bucket Y | Explanation                                    |
| -------- | -------- | ---------------------------------------------- |
| 0        | 100      | Fill bucket Y                                  |
| 2        | 98       | Transfer from bucket Y to bucket X             |
| 0        | 98       | Empty bucket X                                 |
| 2        | 96       | Transfer from bucket Y to bucket X. **Solved** |

#### Worst Solution

| Bucket X | Bucket Y | Explanation                                    |
| -------- | -------- | ---------------------------------------------- |
| 2        | 0        | Fill bucket X                                  |
| 0        | 2        | Transfer from bucket X to bucket Y             |
| 2        | 2        | Fill bucket X                                  |
| 0        | 4        | Transfer from bucket X to bucket Y             |
| ...      | ...      | Repeat these steps a lot...                    |
| 0        | 96       | Transfer from bucket X to bucket Y. **Solved** |

### Example:

#### Edge Case (No Solution)

**Bucket X**: 2
**Bucket Y**: 6
**Amount wanted Z**: 5

**Solution**: No solution possible. Display “No Solution”.

### Evaluation Criteria

Your submission will be evaluated based on the following criteria:

- Adherence to the technical requirements.
- Quality of the code and its organization.
- Documentation and ease of understanding your code and setup.
