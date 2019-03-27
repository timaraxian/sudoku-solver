import * as Sudoku from "../src/Sudoku.js"

describe("main.js", () => {

    it("initialises a blank sudoku board", () => {
        const board = Sudoku.NewBoard()

        const expectedBoard = {
            sq1: {
                1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false,
            },
            sq2: {
                1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false,
            },
            sq3: {
                1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false,
            },
            sq4: {
                1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false,
            },
            sq5: {
                1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false,
            },
            sq6: {
                1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false,
            },
            sq7: {
                1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false,
            },
            sq8: {
                1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false,
            },
            sq9: {
                1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false,
            },
            row1: {
                1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false,
            },
            row2: {
                1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false,
            },
            row3: {
                1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false,
            },
            row4: {
                1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false,
            },
            row5: {
                1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false,
            },
            row6: {
                1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false,
            },
            row7: {
                1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false,
            },
            row8: {
                1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false,
            },
            row9: {
                1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false,
            },
            col1: {
                1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false,
            },
            col2: {
                1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false,
            },
            col3: {
                1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false,
            },
            col4: {
                1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false,
            },
            col5: {
                1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false,
            },
            col6: {
                1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false,
            },
            col7: {
                1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false,
            },
            col8: {
                1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false,
            },
            col9: {
                1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false,
            },
            fixedCells: {},
        }

        expect(board).toEqual(expectedBoard)
    })

    it("correctly returns the sq, row, col a cell belongs to", () => {
        expect(Sudoku.CellProperties(0)).toEqual({ sq: 'sq1', row: 'row1', col: 'col1' })
        expect(Sudoku.CellProperties(7)).toEqual({ sq: 'sq3', row: 'row1', col: 'col8' })
        expect(Sudoku.CellProperties(37)).toEqual({ sq: 'sq4', row: 'row5', col: 'col2' })
        expect(Sudoku.CellProperties(13)).toEqual({ sq: 'sq2', row: 'row2', col: 'col5' })
        expect(Sudoku.CellProperties(51)).toEqual({ sq: 'sq6', row: 'row6', col: 'col7' })
        expect(Sudoku.CellProperties(23)).toEqual({ sq: 'sq2', row: 'row3', col: 'col6' })
        expect(Sudoku.CellProperties(54)).toEqual({ sq: 'sq7', row: 'row7', col: 'col1' })
        expect(Sudoku.CellProperties(80)).toEqual({ sq: 'sq9', row: 'row9', col: 'col9' })
    })

    // https://www.websudoku.com/?level=1&set_id=3744594375
    it("initialises a specified sudoku board", () => {
        const boardArray = [
            1, '', 5, 3, 4, '', '', 9, 2,
            8, '', '', '', 1, '', '', '', '',
            '', '', '', 5, 7, '', 4, '', '',
            9, 6, '', 2, '', '', 8, 4, '',
            4, 2, '', '', '', '', '', 6, 5,
            '', 8, 1, '', '', 7, '', 2, 9,
            '', '', 9, '', 8, 3, '', '', '',
            '', '', '', '', 5, '', '', '', 6,
            7, 5, '', '', 2, 6, 9, '', 3,
        ]
        const board = Sudoku.NewBoard(boardArray)

        const expectedBoard = {
            sq1: {
                1: true, 2: false, 3: false, 4: false, 5: true, 6: false, 7: false, 8: true, 9: false,
            },
            sq2: {
                1: true, 2: false, 3: true, 4: true, 5: true, 6: false, 7: true, 8: false, 9: false,
            },
            sq3: {
                1: false, 2: true, 3: false, 4: true, 5: false, 6: false, 7: false, 8: false, 9: true,
            },
            sq4: {
                1: true, 2: true, 3: false, 4: true, 5: false, 6: true, 7: false, 8: true, 9: true,
            },
            sq5: {
                1: false, 2: true, 3: false, 4: false, 5: false, 6: false, 7: true, 8: false, 9: false,
            },
            sq6: {
                1: false, 2: true, 3: false, 4: true, 5: true, 6: true, 7: false, 8: true, 9: true,
            },
            sq7: {
                1: false, 2: false, 3: false, 4: false, 5: true, 6: false, 7: true, 8: false, 9: true,
            },
            sq8: {
                1: false, 2: true, 3: true, 4: false, 5: true, 6: true, 7: false, 8: true, 9: false,
            },
            sq9: {
                1: false, 2: false, 3: true, 4: false, 5: false, 6: true, 7: false, 8: false, 9: true,
            },
            row1: {
                1: true, 2: true, 3: true, 4: true, 5: true, 6: false, 7: false, 8: false, 9: true,
            },
            row2: {
                1: true, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: true, 9: false,
            },
            row3: {
                1: false, 2: false, 3: false, 4: true, 5: true, 6: false, 7: true, 8: false, 9: false,
            },
            row4: {
                1: false, 2: true, 3: false, 4: true, 5: false, 6: true, 7: false, 8: true, 9: true,
            },
            row5: {
                1: false, 2: true, 3: false, 4: true, 5: true, 6: true, 7: false, 8: false, 9: false,
            },
            row6: {
                1: true, 2: true, 3: false, 4: false, 5: false, 6: false, 7: true, 8: true, 9: true,
            },
            row7: {
                1: false, 2: false, 3: true, 4: false, 5: false, 6: false, 7: false, 8: true, 9: true,
            },
            row8: {
                1: false, 2: false, 3: false, 4: false, 5: true, 6: true, 7: false, 8: false, 9: false,
            },
            row9: {
                1: false, 2: true, 3: true, 4: false, 5: true, 6: true, 7: true, 8: false, 9: true,
            },
            col1: {
                1: true, 2: false, 3: false, 4: true, 5: false, 6: false, 7: true, 8: true, 9: true,
            },
            col2: {
                1: false, 2: true, 3: false, 4: false, 5: true, 6: true, 7: false, 8: true, 9: false,
            },
            col3: {
                1: true, 2: false, 3: false, 4: false, 5: true, 6: false, 7: false, 8: false, 9: true,
            },
            col4: {
                1: false, 2: true, 3: true, 4: false, 5: true, 6: false, 7: false, 8: false, 9: false,
            },
            col5: {
                1: true, 2: true, 3: false, 4: true, 5: true, 6: false, 7: true, 8: true, 9: false,
            },
            col6: {
                1: false, 2: false, 3: true, 4: false, 5: false, 6: true, 7: true, 8: false, 9: false,
            },
            col7: {
                1: false, 2: false, 3: false, 4: true, 5: false, 6: false, 7: false, 8: true, 9: true,
            },
            col8: {
                1: false, 2: true, 3: false, 4: true, 5: false, 6: true, 7: false, 8: false, 9: true,
            },
            col9: {
                1: false, 2: true, 3: true, 4: false, 5: true, 6: true, 7: false, 8: false, 9: true,
            },
            fixedCells: {
                cell0: true, cell2: true, cell3: true, cell4: true, cell7: true, cell8: true, cell9: true, cell13: true, cell21: true,
                cell22: true, cell24: true, cell27: true, cell28: true, cell30: true, cell33: true, cell34: true, cell36: true,
                cell37: true, cell43: true, cell44: true, cell46: true, cell47: true, cell50: true, cell52: true, cell53: true,
                cell56: true, cell58: true, cell59: true, cell67: true, cell71: true, cell72: true, cell73: true, cell76: true,
                cell77: true, cell78: true, cell80: true,
            },
        }

        expect(board).toEqual(expectedBoard)
    })

    it("solves", () => {
        const boardArray = [
            1, '', 5, 3, 4, '', '', 9, 2,
            8, '', '', '', 1, '', '', '', '',
            '', '', '', 5, 7, '', 4, '', '',
            9, 6, '', 2, '', '', 8, 4, '',
            4, 2, '', '', '', '', '', 6, 5,
            '', 8, 1, '', '', 7, '', 2, 9,
            '', '', 9, '', 8, 3, '', '', '',
            '', '', '', '', 5, '', '', '', 6,
            7, 5, '', '', 2, 6, 9, '', 3,
        ]
        const board = Sudoku.NewBoard(boardArray)

        const solved = Sudoku.Solve(boardArray, board)

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
