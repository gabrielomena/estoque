# Backend - Projeto Estoque

Parte do backend do Projeto Estoque

## Instalação

Realize o git clone da branch main do [Projeto Estqoue](https://github.com/gabrielomena/estoque.git), depois realize os seguintes procedimentos:
```bash
cd estoque
```
```bash
cd backend
```
Logo após realize esse comando para instalar todas as dependencias necessárias para iniciar o serviço: 

```bash
npm install
```
Em seguida crie um arquivo na pasta raiz backend chamado 
```
.env
```
E insira as informações conforme o arquivo .env_example :
```
DB_USER = root
DB_PASSWORD = sua senha do mysql
DB_HOST = localhost
DB_NAME = estoque
DB_DIALECT = mysql
SECRET = ms6a1sd646g41s1h1hjdrkçdbugafvgha56a4d16adfa
```
Depois de inserir as informações de acordo com o seu banco de dados MYSQL, inicie o primeiro terminal na pasta backend e insira para iniciar o servidor:
```bash
npm run dev
```
Abra outro terminal e tambem na pasta backend insira esses comandos:
```bash
npx sequelize-cli db:create
```
Se o Banco de Dados for criado corretamente, insira esse comando:
```bash
npx sequelize-cli db:migrate
```
Se for criado corretamente, seu banco de dados foi criado com as tabelas criadas.

Com isso voce pode utilizar os endpoints para criacao de usuário e login:
```
# utilize o postman ou insomnia para testar os endpoints

# para listar todos os produtos:
http://localhost:3000/create

# para localizar apenas um produto:
http://localhost:3000/login



```

E também voce pode utilizar os endpoints para criacao de produtos:
```
# utilize o postman ou insomnia para testar os endpoints

# para listar todos os produtos:
http://localhost:3000/listar

# para localizar apenas um produto:
http://localhost:3000/localizar/id

# para cadastrar um produto:
http://localhost:3000/cadastrar

# para atualizar um produto:
http://localhost:3000/atualizar/id

# para deletar um produto:
http://localhost:3000/excluir/id

```



## License

[MIT](https://choosealicense.com/licenses/mit/)
