# Ponto de Vendas - Desafio Final Cubos Academy

## Introdução
### Sobre o projeto
- Este projeto foi desenvolvido durante o curso de desenvolvimento de Software com foco em Back-end na Cubos Academy. O objetivo do projeto, é simular o back-end de um software que pode ser utilizado por uma loja de vendas.

- Foi um projeto desenvolvido em grupo de 3 integrantes, estudantes da Cubos Academy. 

## Rodar o projeto

### Rodar remotamente

1) Para rodar o projeto remotamente, só é necessário utilizar o link do deploy: https://jamjascript-pdv-cubos-academy.onrender.com

2) Utilize uma ferramenta para testar a aplicação, como por exemplo, Insomnia, Postman, Mocha...

### Rodar localmente

A fim de garantir a segurança da aplicação, os dados do arquivo .env, não são disponibilizados para permitir o funcionamento correto da API. 

Portanto, alguns endpoints, não irão funcionar. No entanto, pode-se configurar suas próprias variáveis para teste local. Siga as orientações da instalação do projeto.

### Tecnologias necessárias

- VS Code
- Git/ Bash
- Ferramenta de teste. Ex.: Insomnia

### Instalação
1) Faça um fork deste repositório.

2) Copie a url do projeto clicando em code --> escolha a melhor opção para você.

3) Selecione uma pasta do seu computador e abra o VS Code.

4) Clone o projeto para sua pasta. No terminal (Ctrl + j), digite: `git clone <url do projeto>`

5) No terminal, inicialize o git com o comando: `git init`, caso queira fazer alterações no projeto e usando o Git.

6) Em seguida, instale todos os pacotes necessários para rodar a aplicação digitando o comando: `npm install`

7) Renomeie o arquivo chamado ".envExemplo" para ".env".

8) Dentro deste arquivo, defina suas variáveis de ambiente.

9) Rode o projeto por meio do comando: `npm run dev`

## Estrutura

## Endpoints

### Usuário
#### Cadastrar usuário - `POST` `/usuario`
Exemplo de Requisição Body - JSON:
```
	{
        "nome": "João",
        "email": "joao@gmail.com",
        "senha": "12345678"
	}
```

Exemplo de Resposta:

*Status Code: 201*
```
	{
		"id": 1,
		"nome": "João",
		"email": "joao@gmail.com"
	}
```

#### Logar usuário - `POST` `/login`
Exemplo de Requisição Body - JSON:
```
{
	"email": "joao@gmail.com",
	"senha": "12345678"
}
```

Exemplo de Resposta:

*Status Code: 200*
```
{
	"usuario": {
		"id": 1,
		"nome": "João",
		"email": "joao@gmail.com"
	},
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiaWF0IjoxNzAzMDc5NTA5LCJleHAiOjE3MDMxMDgzMDl9.nsrUhEFYEJp5MnxGda54HZsmNSjtTRw9lp8W1eZkdFI"
}
```
#### Detalhar usuário - `GET` `/usuario`
Exemplo de Requisição - No Body:
```
// sem conteúdo
```

Exemplo de Resposta:

*Status Code: 200*
```
{
	"id": 1,
	"nome": "João",
	"email": "joao@gmail.com"
}
```
#### Atualizar usuário - `PUT` `/usuario/:id`
Exemplo de Requisição Body - JSON:
```
{
	"nome": "João Campos",
	"email": "joaocampos@gmail.com",
	"senha": "87654321"
}
```

Exemplo de Resposta:

*Status Code: 201*
```
{
	"id": 1,
	"nome": "João Campos",
	"email": "joaocampos@gmail.com"
}
```

### Categoria
#### Listar Categoria - `GET` `/categoria`
Exemplo de Requisição - No Body:
```
// sem conteúdo
```

Exemplo de Resposta:

*Status Code: 200*
```
[
	{
		"id": 1,
		"descricao": "Informática"
	},
	{
		"id": 2,
		"descricao": "Celulares"
	},
	{
		"id": 3,
		"descricao": "Beleza e Perfumaria"
	},
	{
		"id": 4,
		"descricao": "Mercado"
	},
	{
		"id": 5,
		"descricao": "Livros e Papelaria"
	},
	{
		"id": 6,
		"descricao": "Brinquedos"
	},
	{
		"id": 7,
		"descricao": "Moda"
	},
	{
		"id": 8,
		"descricao": "Bebê"
	},
	{
		"id": 9,
		"descricao": "Games"
	}
]
```

### Produto
- **Obs.: Todos os valores deverão ser informados em centavos.**
#### Cadastrar produto - `POST` `/produto`
Exemplo de Requisição Body - MULTIPART FORM:
```
{
	"descricao": "bola",
	"valor": 15000,
	"quantidade_estoque": 100,
	"categoria_id": 6,
	"produto_imagem": "bicicleta.jpeg"
}
```

Exemplo de Resposta:

*Status Code: 201*
```
{
	"id": 3,
	"descricao": "bola",
	"valor": 15000,
	"quantidade_estoque": 100,
	"categoria_id": 6,
	"categoria_descricao": "Brinquedos",
	"produto_imagem": "bola.jpeg"
}
```
#### Detalhar produto - `GET` `/produto/:id`
Exemplo de Requisição - No Body:
```
// sem conteúdo
```

Exemplo de Resposta:

*Status Code: 200*
```
{
	"id": 2,
	"descricao": "relógio",
	"valor": 30000,
	"quantidade_estoque": 56,
	"categoria_id": 3,
	"categoria_descricao": "Beleza e Perfumaria"
    "produto_imagem": null
}
```
#### Listar produto - `GET` `/produto`
Exemplo de Requisição - No Body:
```
// sem conteúdo
```

Exemplo de Resposta:

*Status Code: 200*
```
[
	{
		"id": 1,
		"descricao": "notebook",
		"valor": 250000,
		"quantidade_estoque": 120,
		"categoria_id": 1,
		"categoria_descricao": "Informática"
        "produto_imagem": "notebook.jpeg"
	},
    {
        "id": 2,
        "descricao": "relógio",
        "valor": 30000,
        "quantidade_estoque": 56,
        "categoria_id": 3,
        "categoria_descricao": "Beleza e Perfumaria"
        "produto_imagem": null
    },
    {
        "id": 3,
        "descricao": "bola",
        "valor": 15000,
        "quantidade_estoque": 100,
        "categoria_id": 6,
        "categoria_descricao": "Brinquedos",
        "produto_imagem": "bola.jpeg"
    }
]
```
#### Atualizar produto - `PUT` `/produto/:id`
Exemplo de Requisição Body - MULTIPART FORM:
```
    {
        "descricao": "X Box",
        "valor": 360000,
        "quantidade_estoque": 100,
        "categoria_id": 9,
        "produto_imagem": "xbox.jpeg"
    }
```

Exemplo de Resposta:

*Status Code: 201*
```
    {
        "id": 3,
        "descricao": "X Box",
        "valor": 360000,
        "quantidade_estoque": 100,
        "categoria_id": 9,
        "categoria_descricao": "Games",
        "produto_imagem": "xbox.jpeg"
    }
```
#### Excluir produto - `DELETE` `/produto/:id`
Exemplo de Requisição - No Body:
```
// sem conteúdo
```

Exemplo de Resposta:

*Status Code: 204*
```
// sem conteúdo
```

### Cliente
#### Cadastrar cliente - `POST` `/cliente`
Exemplo de Requisição Body - JSON:
```
{
	"nome": "Maria",
	"email": "maria@gmail.com",
	"cpf": "00000000000",
	"numero": "123"
}
```

Exemplo de Resposta:

*Status Code: 201*
```
{
	"id": 1,
	"nome": "maria",
	"email": "maria@gmail.com",
	"cpf": "00000000000",
	"cep": null,
	"rua": null,
	"numero": "123",
	"bairro": null,
	"cidade": null,
	"estado": null
}
```
#### Detalhar cliente - `POST` `/cliente/:id`
Exemplo de Requisição - No Body:
```
// sem conteúdo
```

Exemplo de Resposta:

*Status Code: 201*
```
{
	"id": 1,
	"nome": "maria",
	"email": "maria@gmail.com",
	"cpf": "00000000000",
	"cep": null,
	"rua": null,
	"numero": "123",
	"bairro": null,
	"cidade": null,
	"estado": null
}
```
#### Listar cliente - `GET` `/cliente`
Exemplo de Requisição - No Body:
```
// sem conteúdo
```

Exemplo de Resposta:

*Status Code: 200*
```
[
    {
        "id": 1,
        "nome": "maria",
        "email": "maria@gmail.com",
        "cpf": "00000000000",
        "cep": null,
        "rua": null,
        "numero": "123",
        "bairro": null,
        "cidade": null,
        "estado": null
    },
	{
		"id": 2,
		"nome": "julio",
		"email": "julio@gmail.com",
		"cpf": "10000000000",
		"cep": null,
		"rua": "Avenida Mar Rosa",
		"numero": "35",
		"bairro": null,
		"cidade": null,
		"estado": null
	},
	{
		"id": 3,
		"nome": "madalena",
		"email": "madalena@gmail.com",
		"cpf": "20000000000",
		"cep": "12312300",
		"rua": "18",
		"numero": "108",
		"bairro": null,
		"cidade": "Salvador",
		"estado": "BA"
	}
]
```
#### Atualizar cliente - `PUT` `/cliente/:id`
Exemplo de Requisição Body - JSON:
```
	{
		"nome": "janilson",
		"email": "janilson@gmail.com",
		"cpf": "30000000000",
		"cep": "12312399",
		"rua": "17",
		"numero": "107",
		"cidade": "São Paulo",
		"estado": "SP"
	}
```

Exemplo de Resposta:

*Status Code: 201*
```
	{
        "id": 3,
		"nome": "janilson",
		"email": "janilson@gmail.com",
		"cpf": "30000000000",
		"cep": "12312399",
		"rua": "17",
		"numero": "107",
		"bairro": null,
		"cidade": "São Paulo",
		"estado": "SP"
	}
```

### Pedido
#### Cadastrar pedido - `POST` `/pedido`
Exemplo de Requisição Body - JSON:
```
{
    "cliente_id": 3,
    "observacao": "Entregar para o porteiro.",
    "pedido_produtos": [ 
			{ 
				"produto_id": 1,
				"quantidade_produto": 1
			},
			{
				"produto_id": 2,
				"quantidade_produto": 4
			},
			{ 
				"produto_id": 3,
				"quantidade_produto": 2
			}
		]
}
```

Exemplo de Resposta:

*Status Code: 201*
```
{
	"pedido": {
		"id": 2,
		"cliente_id": 3,
		"observacao": "Entregar para o porteiro.",
		"valor_total": 217000
	},
	"pedido_produtos": [
		{
			"id": 3,
			"pedido_id": 2,
			"produto_id": 1,
			"quantidade_produto": 1,
			"valor_produto": 25000
		},
		{
			"id": 4,
			"pedido_id": 2,
			"produto_id": 2,
			"quantidade_produto": 4,
			"valor_produto": 30000
		},
		{
			"id": 5,
			"pedido_id": 2,
			"produto_id": 3,
			"quantidade_produto": 2,
			"valor_produto": 360000
		}
	]
}
```
#### Listar produto - `GET` `/pedido`
Exemplo de Requisição - No Body:
```
// sem conteúdo
```

Exemplo de Resposta:

*Status Code: 200*
```
[
	{
		"pedido": {
			"id": 1,
			"cliente_id": 1,
			"observacao": null,
			"valor_total": 250000
		},
		"pedido_produto": [
			{
				"id": 1,
				"pedido_id": 1,
				"produto_id": 1,
				"quantidade_produto": 1,
				"valor_produto": 250000
			}
		]
	},
    {
        "pedido": {
            "id": 2,
            "cliente_id": 3,
            "observacao": "Entregar para o porteiro.",
            "valor_total": 217000
        },
        "pedido_produtos": [
            {
                "id": 2,
                "pedido_id": 2,
                "produto_id": 1,
                "quantidade_produto": 1,
                "valor_produto": 25000
            },
            {
                "id": 3,
                "pedido_id": 2,
                "produto_id": 2,
                "quantidade_produto": 4,
                "valor_produto": 30000
            },
            {
                "id": 4,
                "pedido_id": 2,
                "produto_id": 3,
                "quantidade_produto": 2,
                "valor_produto": 360000
            }
        ]
    }
]
```
## Tecnologias
- Node JS
- PostgreSQL
- Express

## Autores
- João Victor Neves Campos de Jesus, 
- Jonas da Silva Pouzo, 
- Maísa Carla dos Santos Costa

Organização: Cubos Academy

## Licença

- MIT