import Solver from "../src/SudokuSolver"

describe("Solver", () => {

    it("solves", () => {
        const solver = Solver()

        const boardArray = [
            1, null, 5, 3, 4, null, null, 9, 2,
            8, null, null, null, 1, null, null, null, null,
            null, null, null, 5, 7, null, 4, null, null,
            9, 6, null, 2, null, null, 8, 4, null,
            4, 2, null, null, null, null, null, 6, 5,
            null, 8, 1, null, null, 7, null, 2, 9,
            null, null, 9, null, 8, 3, null, null, null,
            null, null, null, null, 5, null, null, null, 6,
            7, 5, null, null, 2, 6, 9, null, 3,
        ]

        const solved = solver.Solve(boardArray)

        const expected = [
            1, 7, 5, 3, 4, 8, 6, 9, 2,
            8, 4, 2, 6, 1, 9, 5, 3, 7,
            3, 9, 6, 5, 7, 2, 4, 1, 8,
            9, 6, 7, 2, 3, 5, 8, 4, 1,
            4, 2, 3, 8, 9, 1, 7, 6, 5,
            5, 8, 1, 4, 6, 7, 3, 2, 9,
            6, 1, 9, 7, 8, 3, 2, 5, 4,
            2, 3, 8, 9, 5, 4, 1, 7, 6,
            7, 5, 4, 1, 2, 6, 9, 8, 3,
        ]

         expect(solved).toEqual(expected)
    })
})
