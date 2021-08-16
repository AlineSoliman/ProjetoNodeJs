App em Node.Js criado para:
Criar/Atualizar usuário;
Selecionar usuário;
Remover usuário;

Os dados inseridos na Query String são armazenados na pasta Users com arquivos denominadosatravés da informação de ID. Cada usuária será salvo com sua informação de ID no arquivo .txt.

Eexmplos de comandos na url:
http://localhost:3000/criar-atualizar-usuario?nome=AlineSoliman&idade=80&id=1
http://localhost:3000/criar-atualizar-usuario?nome=AlineSoliman&idade=32&id=1
http://localhost:3000/selecionar-usuario?id=1
http://localhost:3000/remover-usuario?id=1
