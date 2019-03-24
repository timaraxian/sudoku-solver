export function NewBoard(boardArray) {
    if (typeof boardArray === 'undefined') {
        boardArray = new Array(81)
    }

    const boardProperties =  {
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

    boardArray.forEach((val, i) => {
        if (val === '') return
        const {sq, row, col} = CellProperties(i)
        boardProperties[sq][val] = true
        boardProperties[row][val] = true
        boardProperties[col][val] = true
    })

    return boardProperties
}

export function CellProperties(cell) {
    const row = Math.floor(cell / 9) + 1
    const col = cell % 9 + 1
    const sq = 3 * Math.floor((row - 1) / 3) + Math.floor((col - 1) / 3) + 1

    return { sq: 'sq' + sq, row: 'row' + row, col: 'col' + col, }
}
