# API_Kira_WPP

Solução apresentada no Hack das Minas, pelo grupo Bonde das Kiras.

É uma API de Integração entre a Plataforma Kira e a API oficial do Whatsapp.

## Rodando o projeto
Para rodar o projeto é necessário ter um token de acesso do gerado pela empresa Meta, pois ele é uma chave autorizadora para a integração da API do WPP.
Esse token é utilizado nos parametros de heards que irá na requisição realizada através do axios.

Para facilitar, realizamos o deploy da API de integração na Heroku.
https://api-kira-wpp.herokuapp.com/

### A chamada é POST para os seguintes endpoints: 
Cadastro, não é necessário ter um parametro de calendar_fertility
https://api-kira-wpp.herokuapp.com/register_calendar

Fases do ciclo
https://api-kira-wpp.herokuapp.com/calendar_fertility

Para testar é necessário simular um client(pode utilizar postman, insomnia, ou o simulador de sua preferência) encaminhando o seguinte modelo de JSON na request:

```
{
    name: "",
    phone: 5511999320279,
    calendar_fertility: ""
} 
```

O parâmetro phone pode ser alterado pelo telefone de sua preferência, mas deve seguir o padrao [codigo do país][codigo de área][numero telefone], como ainda não temos o tratamento deste telefone, pedimos para testar atento a isso.

O parâmetro calendar_fertility é a fase que a usuária estará, e que determinará qual template de mensagem será enviado para ela(deixamos os seguintes templates prontos: "menstruation", "pre_menstruation" e "ovulation".


### Planos de melhorias do código:
Validação dos atributos que vem na request.

Refatoração em Typescript para melhorar a escalabilidade.

## O que a solução faz?

Na API oficial do whatsapp existem templates de mensagens, que devem ser elaboradas pela equipe de comunicação, e sabendo quais são os templates existentes, a API de Integração Kira com o WPP irá direcionar qual template de mensagem deverá ser entregue e para qual numero de telephone deverá ser enviado, de acordo com os dados os dados que virão do banco de dados de usuárias da Kira.

No momento que a pessoa se cadastra na Plataforma já receberá uma mensagem para a usuária preencher o calendário menstrual.

Com o calendário preenchido, a cada nova fase do ciclo menstrual, a usuária recebe uma mensagem com dicas de alimentação, exercícios físicos e mentais, conteúdos estes que ja existem na Plataforma, e um call to action para preencher como se sente hoje. 

As mensagens no WPP visam lembrar a usuária da importância de se olhar, perceber seus sintomas
Dessa forma, terá seus dados de ciclo sempre atualizados e conseguirá utilizar o relatório que já existe na Plataforma de forma mais eficiente.

