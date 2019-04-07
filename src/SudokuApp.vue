<script>
    import Board from './SudokuBoard'
    import Solver from './SudokuSolver'

    export default {

        data() {
            return {
                board: Board(),
                solver: Solver(),
                solved: [],
            }
        },

        computed: {
            boardArray() {

                const boardArray = []
                for (let j = 0; j < 9; j++) {
                    boardArray[j] = this.board.AsArray().slice(j * 9, j * 9 + 9)
                }
                return boardArray
            },
            solvedArray() {
                const solvedArray = []
                for (let j = 0; j < 9; j++) {
                    solvedArray[j] = this.solved.slice(j * 9, j * 9 + 9)
                }
                return solvedArray
            }
        },

        methods: {
            doSolve() {
                this.solved = this.solver.Solve(this.board.AsArray())
            },
            getClass(row, col) {
                let c = "cell"

                if ([0, 3, 6].includes(row)) {
                    c += " top"
                }

                if ([0, 3, 6].includes(col)) {
                    c += " left"
                }

                if ([2, 5, 8].includes(row)) {
                    c += " bottom"
                }

                if ([2, 5, 8].includes(col)) {
                    c += " right"
                }

                if (this.board.GetFixed(row, col)) {
                    c += " fixed"
                }

                return c
            },
            fixed(row, col) { return this.board.GetFixed(row, col) },
            setCell(row, col, val) {
                this.board.Set(row, col, val)
            },
        },
    }
</script>

<template>
  <div>
    <div v-if="solved.length === 0" class="board">
      <div class="row" v-for="row,x in boardArray">
        <div class="col" v-for="val,y in row">
          <div :class="getClass(x, y)">
            <input size="1" autocomplete="off" maxlength="1"
                   :value="val" :disabled="fixed(x,y)"
                   @input="evt => setCell(x, y, evt.target.value)"
            >
          </div>
        </div>
      </div>
    </div>

    <div v-if="solved" class="board">
      <div class="row" v-for="row,x in solvedArray">
        <div class="col" v-for="val,y in row">
          <div :class="getClass(x, y)">
            <input size="1" autocomplete="off" maxlength="1"
                   :value="val" :disabled="fixed(x,y)"
                   @input="evt => setCell(x, y, evt.target.value)"
            >
          </div>
        </div>
      </div>
    </div>

    <button @click.prevent="doSolve()">Solve</button>

  </div>
</template>

<style lang="scss">
  .board {
    border: #666699 solid 2px;
    display: inline-block;
  }

  .row {
    display: flex;
  }

  .col {
    flex-shrink: 1;
  }

  .cell {
  }

  .top {
    border-top: #666699 solid 2px;
  }

  .left {
    border-left: #666699 solid 2px;
  }

  .right {
    border-right: #666699 solid 2px;
  }

  .bottom {
    border-bottom: #666699 solid 2px;
  }
</style>
