"use strict";
let filtro = document.getElementsByClassName("filtro");
let mat = [];// Arreglo que luego se hace una matriz para los puntos
let col = 100;//Numero de Columnas de la matriz (mat)
let fila = 100;//Numero de filas de la matriz (mat)
let arrC = []; // arrC arreglo que guarda promedios del punto C;
function cargarMat(mat) {
    for (let i = 0; i < fila; i++) {
        mat[i] = [];
        for (let j = 0; j < col; j++) {
            mat[i][j] = Math.floor(Math.random() * 100 + 1);

        }

    }
}
cargarMat(mat);

console.table(mat);

function valorMaxTotal(mat) {
    let aux = 0;
    for (let i = 0; i < fila; i++) {
        for (let j = 0; j < col; j++) {
            if (mat[i][j] > aux) {
                aux = mat[i][j];
            }
        }
    }
    console.log("El maximo de toda la matriz es:")
}//cierra funcion valorMaxTotal
valorMaxTotal(mat);

function valorFilas(mat) {
    let valorPar = 0;
    let valorImpar = mat[0][0];
    for (let i = 0; i < fila; i++) {
        for (let j = 0; j < col; j++) {
            if (i % 2 == 0) {
                if (mat[i][j] > valorPar) {
                    valorPar = mat[i][j];
                }

            }
            else {
                if (mat[i][j] < valorImpar) {
                    valorImpar = mat[i][j];
                }
            }
        }
        promedios(mat, arrC);
    }
    console.log("Su valor maximo en las filas pares:" + valorPar);
    console.log("Su valor minimo en las filas impares:" + valorImpar);
}// Cierra funcion valorFilas
valorFilas(mat);

function promedios(mat, arrC) {
    let aux = mat[0][0];
    for (let i = 0; i < fila; i++) {
        for (let j = 0; j < col; j++) {
            aux + mat[i][j];
            if (j % 9 == 0) {
                aux / 100;
                arrC[i] = aux;
            }
        }
    }
}
