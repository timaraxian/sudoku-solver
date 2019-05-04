export default function Board() {
    const state = {
        grid: new Array(81).fill(null),
        props: {},
    }

    function CanSet(row, col, val) {
        const sq = cellLocation(row, col)

        return (
            !(!!state.props['sq' + sq] && !!state.props['sq' + sq][val]) &&
            !(!!state.props['row' + row] && !!state.props['row' + row][val]) &&
            !(!!state.props['col' + col] && !!state.props['col' + col][val])
        )
    }

    function Set(row, col, val, fixed = false) {
        state.grid[row * 9 + col] = val

        if (val === null) return

        const sq = cellLocation(row, col)
        if (!state.props['sq' + sq]) state.props['sq' + sq] = {}
        state.props['sq' + sq][val] = true

        if (!state.props['row' + row]) state.props['row' + row] = {}
        state.props['row' + row][val] = true

        if (!state.props['col' + col]) state.props['col' + col] = {}
        state.props['col' + col][val] = true

        if (fixed) {
            if (!state.props['fixed']) state.props['fixed'] = {}
            state.props['fixed'][row * 9 + col] = true
        }
    }

    function UnSet(row, col, val) {
        state.grid[row * 9 + col] = null

        const sq = cellLocation(row, col)
        delete state.props['sq' + sq][val]
        delete state.props['row' + row][val]
        delete state.props['col' + col][val]
    }

    function Get(row, col) {
        return state.grid[row * 9 + col]
    }

    function GetFixed(row, col) {
        if (!state.props['fixed']) state.props['fixed'] = {}
        return state.props['fixed'][row * 9 + col]
    }

    function AsArray() {
        return state.grid.slice()
    }

    function cellLocation(row, col) {
        return 3 * Math.floor((row) / 3) + Math.floor((col) / 3)
    }

    function Fresh() {
        state.grid = new Array(81).fill(null),
        state.props = {}
    }

    return { Set, Get, AsArray, CanSet, UnSet, GetFixed, Fresh }
}
