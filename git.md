# Git

## Utilização do Git

O Git é utilizado para:
- Controlar o versionamento do código (isto é, poder alterar a versão que será utilizada na produção);
- Permitir o desenvolvimento simultâneo de várias partes do código por diferentes desenvolvedores;
- Gerenciamento de ramificações, possiblitando a correção de bugs sem afetar a linha principal de desenvolvimento;
- Fusão e rebase, sendo isso a combinação de duas branches e transferir as alterações para outra branch, respectivamente;
- Gestão de conflitos, que ocorre quando dois pedaços de código se encontram na mesmo lugar em duas branches que serão fundidas;

O Git, ou semelhantes, são utilizados por diversas empresas que produzem códigos, pois assim posuem uma grande facilidade em manter o código limpo, eficiente e seguro.

## Melhores práticas

Entre as melhores práticas entre os desenvolvedores pode-se citar:

- Dar commits com comentários significativos, auxiliando no entendimento do código;
- Cada commit deve conter apenas uma modificação, seja adição/alteração/remoção de uma funcionalidade
- Nome de ramificações com nomes significativos
- Realizar a revisão do código antes de realizar um commit
- Usar o gitignore para evitar o envioo de código necessário, como pacotes de dados (como o node js)