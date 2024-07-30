const result = document.querySelector('.btnresult')
const valorTotal = document.querySelector('.valor')
const imc = document.querySelector('.imc')
function resulta(){
   const altura = document.querySelector('.altura').value
   const peso = document.querySelector('.peso').value

const convertedIMC = peso / (altura)*2

valorTotal.innerHTML = convertedIMC.toFixed(2)

   if(convertedIMC < 18.5){
  
   valorTotal.innerHTML = `<div class="barra"></div>
    Altura: ${altura}<br> Peso: ${peso}kG<br>
   <br><div class="barra"></div>
   Seu IMC foi de ${convertedIMC.toFixed(1)}.<br><div class="barra"></div>
    (Abaixo do peso): Pessoas com IMC nessa faixa podem estar abaixo do peso considerado saudável para sua altura.
   É importante monitorar a alimentação e buscar orientação médica para ganhar peso de forma saudável.<br>
   <div class="barra"></div>
   ` 
   }if(convertedIMC > 18.5 && 24.9){
      valorTotal.innerHTML = `<div class="barra"></div>
      Altura: ${altura}<br> Peso: ${peso}kG<br>
     <br><div class="barra"></div>
   Seu IMC foi de ${convertedIMC.toFixed(1)}.<br><div class="barra"></div>
   (Peso saudável): Pessoas com IMC nessa faixa geralmente estão dentro de um peso considerado saudável em relação à sua altura.
     Manter hábitos saudáveis é essencial para preservar essa condição.<br>
     <div class="barra"></div>
     ` 
   } if(convertedIMC > 25 && 29.9){
      valorTotal.innerHTML = `<div class="barra"></div>
      Altura: ${altura}<br> Peso: ${peso}kG<br>
     <br><div class="barra"></div>
     Seu IMC foi de ${convertedIMC.toFixed(1)}.<br><div class="barra"></div>
 (Sobrepeso): Pessoas com IMC nessa faixa estão acima do peso considerado saudável. 
 É importante adotar medidas como dieta equilibrada e atividade física para reduzir 
 o risco de problemas de saúde associados ao excesso de peso.<br>
     <div class="barra"></div>`
     
   } if(convertedIMC > 30 && 34.9){
      valorTotal.innerHTML = `<div class="barra"></div>
      Altura: ${altura}<br> Peso: ${peso}kG<br>
     <br><div class="barra"></div>
     Seu IMC foi de ${convertedIMC.toFixed(1)}.<br><div class="barra"></div>
(Obesidade grau I): Pessoas com IMC nessa faixa são classificadas como obesas grau I.
 É fundamental buscar orientação médica para desenvolver um plano de saúde 
 adequado que inclua mudanças no estilo de vida para reduzir o peso.<br>
     <div class="barra"></div>`

   } if(convertedIMC > 35 && 39.9){
      valorTotal.innerHTML = `<div class="barra"></div>
      Altura: ${altura}<br> Peso: ${peso}kG<br>
     <br><div class="barra"></div>
     Seu IMC foi de ${convertedIMC.toFixed(1)}.<br><div class="barra"></div>
 (Obesidade grau II): Pessoas com IMC nessa faixa são classificadas como obesas grau II.
  O acompanhamento médico é crucial para gerenciar o peso e evitar complicações de saúde associadas
   à obesidade.<br>
     <div class="barra"></div>`

   } if(convertedIMC > 40){
      valorTotal.innerHTML = `<div class="barra"></div>
      Altura: ${altura}<br> Peso: ${peso}kG<br>
     <br><div class="barra"></div>
     Seu IMC foi de ${convertedIMC.toFixed(1)}.<br><div class="barra"></div>
 (Obesidade grau III - mórbida): Pessoas com IMC nessa faixa são classificadas como obesas grau III ou mórbidas. É essencial buscar ajuda médica especializada para desenvolver um plano de tratamento abrangente que possa incluir intervenções médicas, nutricionais e psicológicas.<br>
     <div class="barra"></div>`
   }

  
result.addEventListener("click",resulta)
}

/*

1. IMC abaixo de 18,5 (Abaixo do peso): Pessoas com IMC nessa faixa podem estar abaixo do peso considerado saudável para sua altura. É importante monitorar a alimentação e buscar orientação médica para ganhar peso de forma saudável.

2. IMC entre 18,5 e 24,9 (Peso saudável): Pessoas com IMC nessa faixa geralmente estão dentro de um peso considerado saudável em relação à sua altura. Manter hábitos saudáveis é essencial para preservar essa condição.

3. IMC entre 25 e 29,9 (Sobrepeso): Pessoas com IMC nessa faixa estão acima do peso considerado saudável. É importante adotar medidas como dieta equilibrada e atividade física para reduzir o risco de problemas de saúde associados ao excesso de peso.

4. IMC entre 30 e 34,9 (Obesidade grau I): Pessoas com IMC nessa faixa são classificadas como obesas grau I. É fundamental buscar orientação médica para desenvolver um plano de saúde adequado que inclua mudanças no estilo de vida para reduzir o peso.

5. IMC entre 35 e 39,9 (Obesidade grau II): Pessoas com IMC nessa faixa são classificadas como obesas grau II. O acompanhamento médico é crucial para gerenciar o peso e evitar complicações de saúde associadas à obesidade.

6. IMC acima de 40 (Obesidade grau III - mórbida): Pessoas com IMC nessa faixa são classificadas como obesas grau III ou mórbidas. É essencial buscar ajuda médica especializada para desenvolver um plano de tratamento abrangente que possa incluir intervenções médicas, nutricionais e psicológicas.

Lembrando que o IMC é uma ferramenta inicial de avaliação e não deve ser usada isoladamente para determinar o estado de saúde de uma pessoa. Consulte sempre um profissional de saúde para uma avaliação individualizada e mais detalhada. */

