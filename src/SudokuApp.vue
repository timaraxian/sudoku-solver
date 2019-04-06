<script>
    import * as Sudoku from './Sudoku'

    export default {

        data() {
            return {
                boardArray: [],
                boardProps: {},
            }
        },

        methods: {
            initBoard: () => Sudoku.NewBoard(this.boardArray),
            doSolve: () => Sudoku.Solve(this.boardArray, this.boardProps),
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

                if (this.boardProps.fixedCells['cell' + (row * 9 + col)]) {
                    c += " fixed"
                }

                return c
            },
            fixed(row, col) { return this.boardProps.fixedCells['cell' + (row * 9 + col)] },
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
            this.boardProps = Sudoku.NewBoard(board)
            for (let j = 0; j < 9; j++) {
                this.boardArray[j] = board.slice(j * 9, j * 9 + 9)
            }
        }
        ,
    }
</script>

<template>
  <div>
    <div class="board">
      <div class="row" v-for="row,x in boardArray">
        <div class="col" v-for="val,y in row">
          <div :class="getClass(x, y)">
            <input v-if="fixed(x, y)" size="1" autocomplete="off" maxlength="1" :value="val" disabled>
            <input v-if="!fixed(x, y)" size="1" autocomplete="off" maxlength="1" :value="val">
          </div>
        </div>
      </div>
    </div>
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
