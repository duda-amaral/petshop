# 🐶 Sistema para encontrar o melhor Pet Shop
  
Senhor Eduardo é proprietário de um canil em Belo Horizonte, ele trabalha com 
diversas raças, pequenas e grandes. Eduardo gosta que seus cães estejam sempre 
arrumados, felizes e cheirosos. 
No bairro do canil, para realizar o banho nos animais, existem três petshops: Meu 
Canino Feliz, Vai Rex, e ChowChawgas. Cada um deles cobra preços diferentes para 
banho em cães pequenos e grandes e o preço pode variar de acordo com o dia da 
semana.
* Meu Canino Feliz: Está distante 2km do canil. Em dias de semana o banho para 
cães pequenos custa R$20,00 e o banho em cães grandes custa R$40,00. 
Durante os finais de semana o preço dos banhos é aumentado em 20%.
* Vai Rex: Está localizado na mesma avenida do canil, a 1,7km. O preço do banho 
para dias úteis em cães pequenos é R$15,00 e em cães grandes é R$50,00. 
Durante os finais de semana o preço para cães pequenos é R$ 20,00 e para os 
grandes é R$ 55,00.
* ChowChawgas: Fica a 800m do canil. O preço do banho é o mesmo em todos os 
dias da semana. Para cães pequenos custa R$30 e para cães grandes R$45,00.

Apesar de se importar muito com seus cãezinhos, Eduardo quer gastar o mínimo 
possível. Desenvolva uma solução para encontrar o melhor petshop para levar os cães. 
O melhor petshop será o que oferecer menores preços, em caso de empate o melhor é 
o mais próximo do canil.

## 🚀 Tecnologias

- Frontend:

    - [React](https://react.dev/)
    - [shadcn/ui](https://ui.shadcn.com/)
    - [Tailwind CSS](https://tailwindcss.com/)
    - [JavaScript](https://www.javascript.com/)
    - [Typescript](https://www.typescriptlang.org/)

- Backend

    - [Java](https://www.java.com/pt-BR/)
    - [Lombok](https://projectlombok.org/)
    - [Spring Boot](https://spring.io/projects/spring-boot)

- Database:

    - [PostgreSQL](https://www.postgresql.org/)
    - [PgAdmin](https://www.pgadmin.org/)
 
- Hospedagem:
   - [Render](https://render.com/)

## 🧐 Decisões de projeto

### 1. Backend (Java Spring Boot)

- **Estrutura da Aplicação**:
  - **Controller**: Manipula requisições HTTP e retorna respostas.
  - **Service**: Contém a lógica de negócio, como cálculos de preços e escolha do melhor petshop.
  - **Repository**: Interage com o banco de dados para operações CRUD.
- **Lógica de Cálculo**: Mantida na camada de serviço (PetShopService) para separar a lógica de negócios da apresentação e persistência.

### 2. Banco de Dados (PostgreSQL)

- **Estrutura do Banco de Dados**: Tabela PetShop com informações sobre nome, distância e preços para diferentes tipos de cães e dias da semana.

### 3. Frontend (React com TypeScript)
- **Formulário de Entrada**: Captura data e quantidades de cães pequenos e grandes, usando componentes reutilizáveis (Input, Button, Label).
- **Integração com o Backend**: Comunicação com backend via axios, enviando requisição GET e processando a resposta para exibir o melhor petshop e o preço total.
- **Tratamento de Erros**: Mensagens de erro exibidas para informar problemas na comunicação com o backend.

### 4. Docker e Implantação
- **Uso de Docker**: Empacotamento da aplicação backend para facilitar a implantação e garantir um ambiente de execução consistente. Dockerfile configurado para construir a aplicação e preparar a imagem para deployment.


## 📝 Lista de premissas assumidas

### Dados de Entrada:
- **Formato da Data**: A data fornecida pelo usuário está no formato dd/MM/yyyy. Qualquer desvio desse formato pode resultar em erros de processamento.
- **Valores Numéricos**: As quantidades de cães pequenos e grandes são fornecidas como números inteiros positivos. Valores negativos ou não numéricos podem causar erros.

### Funcionamento do Backend:
- **Formato da Resposta**: O backend responderá com um formato de JSON consistente, onde o nome do petshop e o preço total são retornados conforme especificado.
- **Conectividade**: A aplicação frontend conseguirá se conectar ao backend sem problemas de rede ou de configuração.

### Banco de Dados:
- **Modelo de Dados**: A tabela PetShop no banco de dados PostgreSQL está corretamente configurada com os campos necessários (nome, distância, e preços).

### Tecnologias e Ferramentas:
- **Consistência de Versões**: As versões das bibliotecas e frameworks utilizadas são compatíveis e não introduzirão problemas de incompatibilidade.
- **Docker**: O ambiente Docker está configurado corretamente e a aplicação pode ser construída e executada sem problemas.

### Interface do Usuário:
- **Comportamento do Formulário**: Os componentes do formulário (input, botão, etc.) funcionarão conforme o esperado.

## 💻 Instruções de utilização

**Passo 01: Acessar o link da página**

<https://melhor-petshop-front.onrender.com/>

OBS: A página pode demorar um pouco para ser carregada, assim como o formulário pode demorar para ser enviado devido ao uso de uma hospesdagem gratuita.

**Uso do sistema**

No final da página há um formulário que precisa ser preenchido com a data que o usuário deseja marcar o banho, a quantidade de cães pequenos e grandes que serão levados ao Pet Shop para o banho. Ao clicar em enviar, o sistema fornecerá a opção mais barata de Pet Shop.

