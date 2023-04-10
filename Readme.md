 yarn typeorm migration:run
❯ yarn typeorm migration:create -n CreateCars 

1. Testes unitarios
- pedacos de codigo 

2. Testes de Integracao
- testar a aplicacao inteira
-> routes -> controllers > useCases > repository <
usecase  < useCases  < controllers < routes


TDD - Test Driven Development

yarn jest --init

old configs package.json

    // "dev": "ts-node-dev --inspect --transpile-only --ignore-watch node_modules --respawn src/server.ts",
    // "typeorm": "ts-node-dev ./node_modules/typeorm/cli",

Requisitos ====


============
## Cadastro de Carro 

**RF** = Requisitos funcionais
- Deve ser possivel cadastrar um novo carro
- Deve ser possivel listar todas as categorias

**RNF** = Requisitos nao funcionais

**RN** = Regras de negocio
- Nao deve ser possivel cadastrar um carro com uma placa existente
- nao deve ser possivel alterar a placa de um carro 
- O carro deve ser cadastrado como disponibilidade por padrao
- Apenas adiministrador pode cadastrar carros
- O carro deve ter uma categoria



============
## Listar Carros

**RF** = Requisitos funcionais
- Deve ser possivel listar carros disponiveis
- deve ser possivel listar todos os carros disponiveis pelo nome da categoria
- deve ser possivel listar todos os carros disponiveis pelo nome da marca
- deve ser possivel listar todos os carros disponiveis pelo nome da carro

**RNF** = Requisitos nao funcionais

**RN** = Regras de negocio
- Usuario nao precisa esta logado para listar carros disponiveis


============
## Cadastro de espeficicacao no carro

**RF** = Requisitos funcionais
- Deve ser possivel cadastrar uma especificacao para um carro
- deve ser possivel listar todas as especificacoes
- deve ser possivel listar todas as carros


**RN** = Regras de negocio
- Nao deve ser possivel cadastrar uma especificacao para um carro nao cadastrado 
- nao deve ser possivel cadastrar uma especificacao ja existente para o mesmo carro
- O usuario responsavel pelo cadastro deve ser administrador



============
## Cadastro da imam dos carros

**RF**
- Deve ser possivel cadastrar imagens para o carro

**RNF**
- utilizar o multer para upload de arquivos

**RN**
- o usuario pode casatrar mais de uma imagem para o mesmo carro
- apenas administrador pode carregar imagens



============
## Aluguel 

**RF**
- Deve ser possivel cadastrar um aluguel


**RN**
- O aluguel deve ter duracao minima de 24 horas
- Nao deve ser possivel cadastrar um novo aluguel caso ja exista um aberto para o mesmo usuario
- Nao deve ser possivel cadastrar um novo aluguel caso ja exista um aberto para o mesmo carro