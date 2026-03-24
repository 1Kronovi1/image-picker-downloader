📌 Sobre o projeto

O Image Picker & Downloader nasceu de uma vontade simples: entender na prática como APIs funcionam de verdade.
A ideia foi consumir a API gratuita do Pexels — um dos maiores bancos de imagens do mundo — e construir uma interface onde fosse possível navegar por imagens, passar para a próxima, voltar para a anterior e baixar a que estiver na tela. Sem cadastro, sem complicação, direto ao ponto.
O projeto foi feito para treinar o consumo de APIs RESTful e entender melhor como lidar com requisições HTTP, autenticação por chave de API, tratamento de respostas em JSON e integração com funcionalidades do navegador, como o download nativo de arquivos.

✨ Funcionalidades

🔍 Busca de imagens via API do Pexels</br>
▶️ Navegar para frente e para trás entre as imagens retornadas
⬇️ Download da imagem atual diretamente pelo navegador
🌐 Interface leve e acessível, feita com HTML, CSS e JavaScript puro


🛠️ Tecnologias utilizadas
TecnologiaFunçãoHTML5Estrutura da aplicaçãoCSS3Estilização e layoutJavaScript (Vanilla)Lógica, requisições e interaçõesPexels APIFonte das imagens

🚀 Como rodar o projeto
Pré-requisitos

Um navegador moderno (Chrome, Firefox, Edge...)
Uma chave de API gratuita do Pexels — clique aqui para criar a sua

Passo a passo
bash# Clone o repositório
git clone https://github.com/1Kronovi1/image-picker-downloader.git

# Acesse a pasta do projeto
cd image-picker-downloader
Depois, abra o arquivo index.html no seu navegador — ou use uma extensão como o Live Server no VS Code para uma experiência melhor.

⚠️ Importante: Você precisará inserir sua chave de API do Pexels no projeto. Procure no código pelo campo de configuração da API key e substitua pelo seu token.


🔑 Configurando a API Key

Acesse pexels.com/api e crie uma conta gratuita
Copie sua chave de API gerada no painel
No projeto, localize o arquivo JavaScript principal e substitua o valor da variável da API key pela sua chave

jsconst API_KEY = "sua_chave_aqui";

📚 O que eu aprendi com esse projeto
Esse projeto foi um exercício focado em consolidar conceitos que são essenciais pra qualquer dev que queira trabalhar com aplicações modernas:

Como autenticar requisições usando headers HTTP
Como trabalhar com respostas em JSON e extrair os dados que interessam
Como lidar com paginação de resultados em APIs RESTful
Como acionar o download de arquivos via JavaScript sem backend
A importância de ler a documentação oficial de uma API


🔗 Links

🐙 Repositório: github.com/1Kronovi1/image-picker-downloader
📷 Pexels API Docs: pexels.com/api/documentation


📄 Licença
Este projeto está sob a licença MIT. Fique à vontade para usar, modificar e se inspirar. 🙂

<p align="center">Feito com curiosidade e vontade de aprender 🚀</p>
