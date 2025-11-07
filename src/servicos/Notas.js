import {db} from "./SQLite";

export function criaTabela(){
    db.transaction((transaction)=> {
        transaction.executeSql("CREATE TABLE IF NOT EXISTS"+
            "Notas "+ "(id INTERGER PRIMARY KEY AUTOINCREMENT, titulo TEXT, categoria TEXT, texto TEXT);"
        )
    })
}

erport async function adicionaNota(nota) {
    return new Promise(()=>{
        db.transaction((transaction)=>{
            transaction.executeSql("INSERT INTO Notas(titulo,categoria,texto)"+
                "VALUES (?,?,?);", [nota.titulo, nota.categoria, nota.texto], ()=>{
                    resolve("Nota adicionada com sucesso!")
                }
            )
        })
    })
}

export async function buscaNotas(){
    return new Promise((resolve)=>{
        db.transaction((transaction)=> {
            transaction.executeSql("SELECT * FROM Notas;", [],(transaction, resultado)=>{
                resolve(resultado.rows._array)
            })
        })
    })
}