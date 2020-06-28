# Teste frontend sankhya

Ao abrir o arquivo index.html no navegador podemos ver que existe um timer que mostra a data e hora atual, inclusive segundos.
Nessa mesma tela o usuário pode efetuar o cálculo de Fibonacci do número 42, porém, ao clicar no botão Calcular Fibonacci podemos perceber que o timer fica travado até que o cálculo seja finalizado, ao finalizar o timer volta ser executado normalmente.

- O objetivo desse teste é fazer com que o timer não fique travado até que o cálculo de fibonacci seja finalizado, você deve:
  - Apresentar uma explicação do porque esse problema ocorre.
  - Apresentar uma ou mais possíveis soluções para o problema.
  - Implementar uma das soluções propostas.

Para realizar o teste, faça um fork do projeto, descreva o motivo do problema e as soluções propostas neste arquivo logo abaixo :arrow_down:

# Causa do problema:

Ao analisar aonde acontecia o gargalo na aplicação verifiquei que o clicar no botão de calcular o fibonacci de 42 o método de cálculo
levava alguns segundos para retornar o resultado e liberar a execução novamente a função do setTimeout que faz a parte da função de timer.

# Soluções:

Descreva aqui as soluções do problema, destaque a que você escolheu para ser implementada.

Uma técnica de otimização de execução de funções é a chamada
Memoization(Memoisation) que armazena os resultados previamente calculados ou de cada chamada da função afim de otimizar a execução.

Para solução do problema escolhi essa técnica, pois a mesma diminue a complexidade da função a um nível linear ou constante. Utilizei um tipo Object para armazenar os valores já calculados previamente. O tempo de execução passa de segundos para milissegundos conforme pode ser visto na execução da aplicação.

Ao iniciar o teste, envie um e-mail para seu entrevistador informando o prazo de conclusão do teste.
Ao finalizar o teste encaminhe o link do fork com a implementação para o email do seu entrevistador.
