export function NewBoard(boardArray) {
    if (typeof boardArray === 'undefined') {
        boardArray = new Array(81)
    }

    const boardProperties = {
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
    }

    let fixedCells = {}

    boardArray.forEach((val, i) => {
        if (val === '') return
        const { sq, row, col } = CellProperties(i)
        boardProperties[sq][val] = true
        boardProperties[row][val] = true
        boardProperties[col][val] = true
        fixedCells['cell' + i] = true
    })

    return { ...boardProperties, fixedCells: fixedCells }
}

export function CellProperties(cell) {
    const row = Math.floor(cell / 9) + 1
    const col = cell % 9 + 1
    const sq = 3 * Math.floor((row - 1) / 3) + Math.floor((col - 1) / 3) + 1

    return { sq: 'sq' + sq, row: 'row' + row, col: 'col' + col, }
}

export function Solve(boardArray, boardProperties) {
    let i = 0
    let backtracking = false

    while (i < 81) {
        if (boardProperties.fixedCells['cell' + i]) {
            backtracking ? i-- : i++
            continue
        }

        let j = boardArray[i] === '' ? 1 : boardArray[i]
        let set = false
        const { sq, row, col } = CellProperties(i)
        if (backtracking) {
            boardProperties[sq][j] = false
            boardProperties[row][j] = false
            boardProperties[col][j] = false
            j++
        }
        while (j <= 9) {
            if (!boardProperties[sq][j] &&
                !boardProperties[row][j] &&
                !boardProperties[col][j]
            ) {
                boardArray[i] = j
                boardProperties[sq][j] = true
                boardProperties[row][j] = true
                boardProperties[col][j] = true
                backtracking = false
                set = true
                break
            }
            j++
        }
        if (!set) {
            backtracking = true
            boardArray[i] = ''
            i--
            continue
        }
        i++
    }

    return boardArray
}
