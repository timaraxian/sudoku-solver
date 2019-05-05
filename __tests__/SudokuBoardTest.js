import Board from "../src/SudokuBoard"

describe("Board", () => {

    it("can add a value to the correct position", () => {
        // Given a sudoku board
        const board = Board()

        // When I set a cell's value
        board.Set(3, 4, 5)

        // Then it sets correctly
        const expectedCell = 5
        expect(board.Get(3, 4)).toEqual(expectedCell)

        const expectedArray = new Array(81).fill(null)
        expectedArray[31] = 5
        expect(board.AsArray()).toEqual(expectedArray)
    })

    it("can add multiple values correctly", () => {
        // Given a sudoku board
        const board = Board()

        // When I add multiple values
        board.Set(3, 4, 5)
        board.Set(1, 1, 7)
        board.Set(2, 8, 1)

        // Then they are set correctly
        const expectedArray = new Array(81).fill(null)
        expectedArray[31] = 5
        expectedArray[10] = 7
        expectedArray[26] = 1
        expect(board.AsArray()).toEqual(expectedArray)
    })

    it("validates", () => {
        // Given a Sudoku board with values entered already
        const board = Board()

        board.Set(3, 4, 5)
        board.Set(1, 1, 7)
        board.Set(2, 8, 1)

        // When I check an invalid values
        const invalid_1 = board.CanSet(3, 7, 5)
        const invalid_2 = board.CanSet(0, 4, 5)
        const invalid_3 = board.CanSet(0, 0, 7)
        const invalid_4 = board.CanSet(8, 8, 1)

        // Then it should return false
        expect(invalid_1).toEqual(false)
        expect(invalid_2).toEqual(false)
        expect(invalid_3).toEqual(false)
        expect(invalid_4).toEqual(false)

        // and When I check a valid values
        const valid_1 = board.CanSet(3, 7, 4)
        const valid_2 = board.CanSet(0, 4, 4)
        const valid_3 = board.CanSet(0, 0, 2)

        // Then it should return true
        expect(valid_1).toEqual(true)
        expect(valid_2).toEqual(true)
        expect(valid_3).toEqual(true)
    })

    // https://www.websudoku.com/?level=1&set_id=3744594375
    it("initialises a specified sudoku board", () => {
        const board = Board()

        //row0
        board.Set(0, 0, 1)
        board.Set(0, 2, 5)
        board.Set(0, 3, 3)
        board.Set(0, 4, 4)
        board.Set(0, 7, 9)
        board.Set(0, 8, 2)
        //row1
        board.Set(1, 0, 8)
        board.Set(1, 4, 1)
        //row2
        board.Set(2, 3, 5)
        board.Set(2, 4, 7)
        board.Set(2, 6, 4)
        //row3
        board.Set(3, 0, 9)
        board.Set(3, 1, 6)
        board.Set(3, 3, 2)
        board.Set(3, 6, 8)
        board.Set(3, 7, 4)
        //row4
        board.Set(4, 0, 4)
        board.Set(4, 1, 2)
        board.Set(4, 7, 6)
        board.Set(4, 8, 5)
        //row5
        board.Set(5, 1, 8)
        board.Set(5, 2, 1)
        board.Set(5, 5, 7)
        board.Set(5, 7, 2)
        board.Set(5, 8, 9)
        //row6
        board.Set(6, 2, 9)
        board.Set(6, 4, 8)
        board.Set(6, 5, 3)
        //row7
        board.Set(7, 4, 5)
        board.Set(7, 8, 6)
        //row8
        board.Set(8, 0, 7)
        board.Set(8, 1, 5)
        board.Set(8, 4, 2)
        board.Set(8, 5, 6)
        board.Set(8, 6, 9)
        board.Set(8, 8, 3)

        const expectedArray = [
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

        expect(board.AsArray()).toEqual(expectedArray)
    })

    it("doesn't allow an invalid board to be initialised", () => {
        const board = Board()

        //row0
        board.Set(0, 0, 1)
        expect(() => {board.Set(0, 2, 1)}).toThrowError("InvalidValue")
    })

})
