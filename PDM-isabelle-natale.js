//criando um objeto
let aluno1 = {
    nome: "Isabelle Natale", 
    idade: 16,
    cursando: ["TIA", "PDM", "POO", "BD2", "AOS"],
    presença: ["2024-01-01", "2024-02-22", "2022-02-24"],
    ra: "22346783"
}

//é uma funçao,ela ira validar o cadastro.
function validarCadastro() {

    //se caso o nome do aulo tiver menos de 10 caracteres mostara uma mensagem que o nome esta invalido.
    if(aluno1.nome.length < 10){
      console.log("Erro: Nome do aluno deve ter no mínimo 10 caracteres")
      return
   }

    //se caso a idade for menor que 14 anos,mostara uma mensagem, falando que a idade esta invalida.
    if(aluno1.idade < 14){
        console.log("Erro: Idade invalida")
        return
       }

    //se caso o aluno estiver cursando menos q tres cursos,mostara uma mensagem, falando que falta materia.
   if(aluno1.cursando.length < 3){
    console.log("Erro detectado: Falta de Materia")
    return
  }

     //se o aluno nao tiver pelo menos 2 dias de presença,ira aparecer uma mensagem dizendo que ha falta de presença.
   if(aluno1.presença.length < 2){
    console.log("Erro: Falta de Presença") 
    return
  }

   //Se por acaso o RA do aluno nao tiver 7 caracteres(o minimo),ira aparecer uma mensagem alertando que esta invalido.
  if(aluno1.ra.length < 7){
     console.log("Erro: RA invalido")
     return
}
    //ira retornar no aluno.
    return[
        console.log(aluno1)
       ]
}
//é chamada para iniciar o processo de validação do cadastro do aluno aluno1.
validarCadastro()

//Comentarios a parte: "Função validarCadastro()" Esta função é responsável por validar o cadastro do aluno com base em certos critérios que foram pedidos
//validação do Nome e dos demais: se o nome do aluno (aluno1.nome) tem menos de 10 caracteres,Se for o caso,
//a função exibe "Nome inválido" no console e retorna, encerrando a execução da função, e entre ambas ate chegar no RA do aluno, no entanto se todas as verificações forem bem-sucedidas,
//ou seja, se o aluno atender a todos os critérios de validação,os detalhes do aluno são implementados(colocados) no console usando console.log(aluno1).
