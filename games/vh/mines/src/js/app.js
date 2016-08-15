import React, { Component, PropTypes, createElement } from "react";
import ReactDOM from "react-dom";
import Immutable from "immutable";

let c = 0;

function suffle(array) {
    let temp, random;
    for (let i = array.length - 1; i > 0; i--) {
        random = Math.floor(Math.random() * (i + 1));
        temp = array[i];
        array[i] = array[random];
        array[random] = temp;
    }
}

class CellView extends Component {
    constructor(props) {
        super(props);
        this.displayName = "CellView";
    }
    shouldComponentUpdate(nextProps) {
        return this.props.open !== nextProps.open || this.props.mark !== nextProps.mark;
    }
    render() {
        const handleClick = this.props.handleClick,
            handleMark = this.props.handleMark,
            cssClass = this.props.open ? "open" : "close",
            body = this.props.open ?
                (this.props.bomb ? "💥" : (this.props.count || " ")) :
                (this.props.mark ? "💣" : " ");

        return (<td
            onClick={handleClick}
            onContextMenu={(e) => {e.preventDefault(); handleMark();}}
            className={cssClass}>{body}</td>
        );
    }
}

class BoardView extends Component {
    constructor(props) {
        super(props);
        this.displayName = "BoardView";
        const cells = [], cols = props.cols, rows = props.rows;

        for (let i = 0, l = rows * cols; i < l; i++) {
            cells.push({ bomb: i < props.bombs, open: false, count: 0, mark: false });
        }

        suffle(cells);

        for (let i = 0, l = cells.length; i < l; i++) {
            const cell = cells[i],
                col = i % cols,
                row = (i - col) / cols,
                top = row > 0,
                bottom = row < rows - 1,
                left = col > 0,
                right = col < cols - 1;

            if (top && left && cells[i - cols - 1].bomb) cell.count++;
            if (top && cells[i - cols].bomb) cell.count++;
            if (top && right && cells[i - cols + 1].bomb) cell.count++;
            if (left && cells[i - 1].bomb) cell.count++;
            if (right && cells[i + 1].bomb) cell.count++;
            if (bottom && left && cells[i + cols - 1].bomb) cell.count++;
            if (bottom && cells[i + cols].bomb) cell.count++;
            if (bottom && right && cells[i + cols + 1].bomb) cell.count++;
        }

        this.state = { cells: new Immutable.List(cells) };
    }
    circleUpdates(cells, i) {
        const cell = cells[i];
        if (cell.open) return;
        cells[i] = Object.assign({}, cell, { open: true });
        if (cell.count) return;
        const cols = this.props.cols,
            rows = this.props.rows,
            col = i % cols,
            row = (i - col) / cols,
            top = row > 0,
            bottom = row < rows - 1,
            left = col > 0,
            right = col < cols - 1;
        if (top && left) this.circleUpdates(cells, i - cols - 1);
        if (top) this.circleUpdates(cells, i - cols);
        if (top && right) this.circleUpdates(cells, i - cols + 1);
        if (left) this.circleUpdates(cells, i - 1);
        if (right) this.circleUpdates(cells, i + 1);
        if (bottom && left) this.circleUpdates(cells, i + cols - 1);
        if (bottom) this.circleUpdates(cells, i + cols);
        if (bottom && right) this.circleUpdates(cells, i + cols + 1);
    }

    handleCellClick(i) {
        const cells = this.state.cells,
            cell = cells.get(i);
        if (!cell.open) {
            if (cell.count || cell.bomb) {
                this.setState({ cells: cells.set(i, Object.assign({}, cell, { open: true }))});
            } else {
                const newCells = cells.toArray();
                this.circleUpdates(newCells, i);
                this.setState({ cells: new Immutable.List(newCells) });
            }
        }
    }
    handleCellMark(i) {
        const cells = this.state.cells, cell = cells.get(i);
        if (!cell.open) {
            this.setState({ cells: cells.set(i, Object.assign({}, cell, { mark: !cell.mark }))});
        }
    }
    render() {
        const vm = this,
            rowsView = [],
            rows = this.props.rows,
            cols = this.props.cols,
            cells = this.state.cells;
        for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
            const cellsView = [];
            for (let colIndex = 0; colIndex < cols; colIndex ++) {
                const index = cols * rowIndex + colIndex;
                cellsView.push(createElement(CellView, Object.assign(
                    { key: index, handleClick: () => vm.handleCellClick(index),
                    handleMark: () => vm.handleCellMark(index)},
                    cells.get(index)
                )));
            }
            rowsView.push(<tr key= {rowIndex}>{cellsView}</tr>);
        }
        return (<table><tbody>{rowsView}</tbody></table>);
    }
}

BoardView.propTypes = {
    rows: PropTypes.number.isRequired,
    cols: PropTypes.number.isRequired,
    bombs: PropTypes.number.isRequired
};

ReactDOM.render(<BoardView rows={16} cols={30} bombs={99} />,
    document.getElementById("game"));
