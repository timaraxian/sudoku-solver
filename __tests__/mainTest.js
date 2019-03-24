import * as Sudoku from "../Sudoku.js"

describe("main.js", () => {

    it("initialises a blank sudoku board", () => {
        const board = Sudoku.NewBoard()

        const expectedBoard = {
            s1: {
                1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false,
            },
            s2: {
                1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false,
            },
            s3: {
                1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false,
            },
            s4: {
                1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false,
            },
            s5: {
                1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false,
            },
            s6: {
                1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false,
            },
            s7: {
                1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false,
            },
            s8: {
                1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false,
            },
            s9: {
                1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false,
            },
            r1: {
                1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false,
            },
            r2: {
                1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false,
            },
            r3: {
                1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false,
            },
            r4: {
                1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false,
            },
            r5: {
                1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false,
            },
            r6: {
                1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false,
            },
            r7: {
                1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false,
            },
            r8: {
                1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false,
            },
            r9: {
                1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false,
            },
            c1: {
                1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false,
            },
            c2: {
                1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false,
            },
            c3: {
                1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false,
            },
            c4: {
                1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false,
            },
            c5: {
                1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false,
            },
            c6: {
                1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false,
            },
            c7: {
                1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false,
            },
            c8: {
                1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false,
            },
            c9: {
                1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false,
            },
        }

        expect(board).toEqual(expectedBoard)
    })

    it("correctly returns the sq, row, col a cell belongs to", () => {
        expect(Sudoku.CellProperties(0)).toEqual({ sq: 'sq1', row: 'row1', col: 'col1'})
        expect(Sudoku.CellProperties(7)).toEqual({ sq: 'sq3', row: 'row1', col: 'col8'})
        expect(Sudoku.CellProperties(37)).toEqual({ sq: 'sq4', row: 'row5', col: 'col2'})
        expect(Sudoku.CellProperties(13)).toEqual({ sq: 'sq2', row: 'row2', col: 'col5'})
        expect(Sudoku.CellProperties(51)).toEqual({ sq: 'sq6', row: 'row6', col: 'col7'})
        expect(Sudoku.CellProperties(23)).toEqual({ sq: 'sq2', row: 'row3', col: 'col6'})
        expect(Sudoku.CellProperties(54)).toEqual({ sq: 'sq7', row: 'row7', col: 'col1'})
        expect(Sudoku.CellProperties(80)).toEqual({ sq: 'sq9', row: 'row9', col: 'col9'})
    })
})
