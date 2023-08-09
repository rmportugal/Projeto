# Projeto Backend & Frontend
Este é um projeto que combina o Backend desenvolvido em Spring Boot e o Frontend desenvolvido em React para oferecer um sistema completo com as funcionalidades descritas abaixo.

## ProjetoFront

Feito com a versão do node 18.17

## ProjetoBack

Feito com a versão do java 17

## Funcionalidades

Serviço de Login
Verifica as credenciais do usuário e fornece um token JWT para acesso.

Serviço de Cadastro
Cadastra um novo usuário com login e senha criptografada.

Serviço de Listagem de Skills
Retorna a lista de skills associadas a um usuário, incluindo seus níveis.

Serviço de Associar Skill
Associa uma nova skill ao usuário com um nível especificado.

Serviço de Atualizar Associação de Skill
Atualiza o nível de uma skill associada ao usuário.

Serviço de Excluir Associação de Skill
Remove a associação de uma skill para o usuário.

## Frontend (React)
Tela de Login

Campos para login e senha.
Opção para visualizar a senha.
Checkbox para lembrar do login.
Botões de Entrar e Cadastrar-se.
Tela de Cadastrar-se

Campos para login, senha e confirmação de senha.
Opção para visualizar as senhas digitadas.
Botão de Salvar para realizar o cadastro.
Tela Home

Exibe a lista de skills do usuário com opção para editar níveis e excluir.
Botão para adicionar nova Skill.
Botão de Logout para sair da aplicação.

## Autenticação e Documentação

A autenticação é feita por meio de tokens JWT.

A documentação dos serviços pode ser acessada pelo Swagger no Backend.


