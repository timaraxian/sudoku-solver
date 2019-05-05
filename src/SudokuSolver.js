import Board from "./SudokuBoard"

export default function Solver() {
    function Solve(boardArray) {
        const board = Board()

        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                if (boardArray[row * 9 + col]) {
                    try {
                        board.Set(row, col, boardArray[row * 9 + col], true)
                    }
                    catch(err) {
                        return err
                    }
                }
            }
        }

        let i = 0
        let backtracking = false

        while (i < 81) {
            const row = Math.floor(i / 9)
            const col = i % 9

            if (board.GetFixed(row, col)) {
                backtracking ? i-- : i++
                continue
            }

            let j = board.Get(row, col) === null ? 1 : board.Get(row, col)
            let set = false
            if (backtracking) {
                board.UnSet(row, col, j)
                j++
            }
            while (j <= 9) {
                if (board.CanSet(row, col, j)) {
                    board.Set(row, col, j)
                    backtracking = false
                    set = true
                    break
                }
                j++
            }
            if (!set) {
                backtracking = true
                board.Set(row, col, null)
                i--
                continue
            }
            i++
        }

        return board.AsArray()
    }

    return { Solve }
}
