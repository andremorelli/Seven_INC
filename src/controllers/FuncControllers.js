const FuncService = require('../services/FuncService')

module.exports = {
    buscarTodos: async (req,res)=>{
        let json = {error: '', result:[]}
        let funcionarios = await FuncService.buscarTodos()

        for(let i in funcionarios){
            json.result.push({
                codigo: funcionarios[i].codigo,
                nome: funcionarios[i].nome,
                cpf: funcionarios[i].cpf,
                email: funcionarios[i].email,
                telefone: funcionarios[i].telefone,
                dataNasc: funcionarios[i].dataNasc,
                salario: funcionarios[i].salario
            })
        }
        res.json(json)
    },

    buscarUm: async(req,res)=>{
        let json = {error:'', result:{}}

        let codigo = req.params.codigo
        let funcionario = await FuncService.buscarUm(codigo)

        if(funcionario){
            json.result = funcionario            
        }
        res.json(json)
    },

    inserir: async(req,res)=>{
        let json = {error:'', result:{}}

        let nome = req.body.nome
        let cpf = req.body.cpf
        let email = req.body.email
        let telefone = req.body.telefone
        let dataNasc = req.body.dataNasc
        let salario = req.body.salario
        

        if(nome && cpf && email && telefone && dataNasc && salario){
            let FuncCodigo = await FuncService.inserir(nome,cpf,email,telefone,dataNasc,salario)
            json.result = {
                codigo: FuncCodigo,
                nome,
                cpf,
                email,
                telefone,
                dataNasc,
                salario
            };            
        }else{
            json.error = 'Campos não enviados'

            res.json(json)
        }       
    },

    alterar: async(req,res)=>{
        let json = {error:'', result:{}}

        let codigo = req.params.codigo
        let nome = req.body.nome
        let cpf = req.body.cpf 
        let email = req.body.email
        let telefone = req.body.telefone
        let dataNasc = req.body.dataNasc  
        let salario = req.body.salario

        if(codigo && nome && cpf && email && telefone && dataNasc && salario){

            await FuncService.alterar(codigo,nome,cpf,email,telefone,dataNasc,salario)
            json.result = {
                codigo,
                nome,
                cpf,
                email,
                telefone,
                dataNasc,
                salario
            }
        }else{
            json.error = 'Campos não enviados'
        }

        res.json(json)
    },

    excluir: async(req,res)=>{
        let json = {error:'', result:{}}

        await FuncService.excluir(req.params.codigo)
        res.json(json)
    }


}