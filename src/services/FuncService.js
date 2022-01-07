const db = require('../db')

module.exports = {

    buscarTodos: ()=>{
        return new Promise((aceito,rejeitado)=>{

            db.query('SELECT * FROM funcionarios', (error, results)=>{
                if(error) { rejeitado(error); return}
                aceito(results)
            })
        })
    },

    buscarUm: (codigo)=>{
        return new Promise((aceito,rejeitado)=>{

            db.query('SELECT * FROM funcionarios WHERE codigo = ?', [codigo], (error, results)=>{
                if(error) { rejeitado(error); return}
                if(results.length > 0){
                    aceito(results[0])
                }else{
                    aceito(false)
                }
            })
        })
    },

    inserir: (nome,cpf,email,telefone,dataNasc,salario)=>{
        return new Promise((aceito,rejeitado)=>{

            db.query('INSERT INTO funcionarios (nome,cpf,email,telefone,dataNasc,salario) VALUES (?,?,?,?,?,?) ', [nome,cpf,email,telefone,dataNasc,salario], (error, results)=>{
                if(error) { rejeitado(error); return}
                aceito(results.insertCodigo)
                
            })
        })
    },

    alterar: (codigo,nome,cpf,email,telefone,dataNasc,salario)=>{
        return new Promise((aceito,rejeitado)=>{

            db.query('UPDATE funcionarios SET nome = ?,cpf = ?, email = ?, telefone = ?, dataNasc = ?, salario = ? WHERE codigo = ?', [nome,cpf,email,telefone,dataNasc,salario,codigo], (error, results)=>{
                if(error) { rejeitado(error); return}
                aceito(results)
                
            })
        })
    },

    excluir: (codigo)=>{
        return new Promise((aceito,rejeitado)=>{

            db.query('DELETE FROM funcionarios WHERE codigo = ?',[codigo], (error, results)=>{
                if(error) { rejeitado(error); return}
                aceito(results)
            })
        })
    }

}