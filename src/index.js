module.exports = function solveSudoku(matrix) {
    // task with a bug
    var matxpro = matrix;

    function passes(matrix) {
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] == 0) {
                    matrix[i][j] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
                }
            }
        }
        return matrix;
    }


    function forLine(matx) {
        var arrPos = [];
        for (let i = 0; i < matx.length; i++) {
            for (let j = 0; j < matx[i].length; j++) {
                if (typeof matx[i][j] == 'object') {
                    arrPos.push(j);
                }
            }
            for (let j = 0; j < arrPos.length; j++) {
                for (let l = 0; l < matx[i][arrPos[j]].length; l++) {
                    for (let k = 0; k < matx[i].length; k++) {
                        if (matx[i][arrPos[j]][l] == matx[i][k]) {
                            matx[i][arrPos[j]].splice(l, 1);
                            if (matx[i][arrPos[j]].length == 1) {
                                matx[i][arrPos[j]] = matx[i][arrPos[j]][0];
                            }
                        }
                    }
                }
            }
        }
        return matx;
    }

    function forColumn(matx) {
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (typeof matx[i][j] == "object") {
                    for (let g = 0; g < 9; g++) {
                        for (let k = 0; k < matx[i][j].length; k++) {
                            if (matx[i][j][k] == matx[g][j] && typeof matx[g][j] != "object") {
                                matx[i][j].splice(k, 1);
                                if (matx[i][j].length == 1) {
                                    matx[i][j] = matx[i][j][0];
                                }
                            }
                        }
                    }
                }
            }
        }
        return matx;
    }

    return forColumn(forLine(passes(matxpro)));
}
