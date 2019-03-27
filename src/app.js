import * as Sudoku from './Sudoku'

var app = new Vue({
    el: '#app',

    data: {
        boardArray: [],
        boardProps: {},
    },

    methods: {
        initBoard: () => Sudoku.NewBoard(this.boardArray),
        doSolve: () => Sudoku.Solve(this.boardArray, this.boardProps),
    },

    mounted() {
        const board = [
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
        this.boardArray = []
        for (let j = 0; j < 9; j++) {
            this.boardArray[j] = board.slice(j * 9, j * 9 + 9)
        }
    },

    template: `<div>
  <table class="table">
    <tr v-for="row in boardArray">
      <td v-for="i in row">
        <input class="cell" size="2" autocomplete="off" maxlength="1" :value="i">
      </td>
    </tr>
  </table>
</div>
    `,
})
