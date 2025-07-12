# Sementes da Fé 🌟

## 📖 Descrição  
**Sementes da Fé** é um aplicativo católico interativo voltado para jovens que desejam conhecer e viver a fé de forma leve, acessível e profunda. Através de histórias bíblicas ilustradas, quizzes, práticas de oração como a Lectio Divina e desafios inspirados nos ensinamentos de Jesus, o app transforma o aprendizado espiritual em uma jornada lúdica e significativa. Ideal para uso pessoal, encontros de catequese, grupos de jovens e famílias, o aplicativo promove o crescimento na fé e o engajamento com a Palavra de Deus, tudo isso sem a necessidade de login obrigatório, respeitando o ritmo e a liberdade de cada usuário.

## 🎯 Objetivo  
Transformar o aprendizado bíblico em uma jornada lúdica, acessível e significativa para jovens de 12 a 18 anos, apoiando encontros de catequese, grupos de jovens e uso pessoal.

## ✨ Funcionalidades Principais  
- 📖 **Histórias Bíblicas Animadas**  
  Quadrinhos interativos com hotspots para contextualizar trechos bíblicos[^2].
- 👑 Galeria de Personagens
Coleção de cartinhas dos heróis bíblicos com biografias, atributos e curiosidades[^1].  
- ❓ **Quizzes e Reflexões**  
  Perguntas ao fim de cada episódio para reforçar a compreensão e registrar progresso[^3].  
- 🙏 **Lectio Divina Guiada**  
  Passo a passo interativo para leitura orante (lectio, meditatio, oratio, contemplatio)[^4].  
- 💬 **Comunidade Moderada**  
  Fóruns e grupos de discussão com mediação de catequistas (login opcional)[^5].  
- 🏆 **Gamificação**  
  Sistema de pontos, conquistas e recompensas visuais para motivar o engajamento contínuo[^6].

## 🧱 Tecnologias  

### Frontend  
- **React Native**: desenvolvimento nativo para Android e iOS com JavaScript/TypeScript[^7]  
- **React Native Web**: converte o mesmo código para PWA no navegador[^8]  
- **AsyncStorage**: armazenamento local persistente de progresso e configurações[^9]  

### Backend  
- **Node.js**: ambiente de execução JavaScript, leve e escalável[^10]  
- **Express.js**: framework minimalista para APIs RESTful[^11]  

### Banco de Dados  
- **PostgreSQL**: banco relacional avançado e open-source[^12]  
- **Prisma ORM**: mapeamento objeto-relacional com migrações automáticas e tipagem forte[^13]  
- **Supabase**: hospedagem gratuita de PostgreSQL com autenticação e storage[^14]  
- **Azure Database for PostgreSQL**: opção futura de serviço gerenciado na nuvem[^15]  

## 🏗️ Arquitetura & Padrões  
- **Guest-First / Progressive Engagement**: adia o login até a necessidade real para reduzir atrito[^16].  
- **Onboarding Suave**: telas explicativas com “Pular” e “Próximo”, minimizando fricção inicial[^17].  
- **Navegação Consistente**: barra fixa ou gestos, botões desabilitados quando inativos e feedback tátil/visual[^18].  

## 🖼️ Telas & Fluxo de Navegação  

1. **Splash / Welcome**  
   - Logo e botão “Começar”; identifica primeira vez para exibir onboarding[^19].  
2. **Onboarding (3 cartões)**  
   - Ilustração, texto e botões “Próximo” / “Pular” para introduzir recursos do app[^20].  
3. **Home**  
   - Cards de módulos: Histórias, Personagens, Ensinamentos, Lectio Divina, Comunidade.  
4. **Detalhe de Episódio**  
   - Quadrinhos interativos com hotspots e botões “Voltar” / “Próxima”.  
5. **Quiz**  
   - Perguntas de múltipla escolha, validação de resposta e feedback imediato[^21].
6. **Galeria de Personagens**
   - Grid de cartinhas colecionáveis com filtros por testamento e categoria[^22].
7. **Perfil do Personagem**
   - Biografia detalhada, versículos-chave, cronologia e easter eggs interativos[^23].
8. **Resultado**  
   - Placar, conquistas desbloqueadas e botão de compartilhamento nativo.  
9. **Configurações**  
   - Reset de progresso, criar conta para sincronização e ajustes de perfil.

[^1]: Trading Card Games Educational Research. Digital Collectibles in Learning. Disponível em <https://www.gamification.org/digital-trading-cards-education>; acesso em 19 abr. 2025.
[^2]: Bible App for Kids – Disponível em <https://www.bible.com/kids>; acesso em 19 abr. 2025.  
[^3]: Life.Church. *Bible App for Kids Curriculum*. Disponível em <https://open.life.church/preschool>; acesso em 19 abr. 2025.  
[^4]: Saint Mary's Press. *The Catholic Children's Bible App*. Disponível em <https://www.smp.org/TheCatholicChildren%27sBibleapp/>; acesso em 19 abr. 2025.  
[^5]: Remember Me. *Bible Memory App*. Disponível em <https://www.remem.me/>; acesso em 19 abr. 2025.  
[^6]: YOUCAT Foundation. *YOUCAT Daily*. Disponível em <https://youcat.org/daily/>; acesso em 19 abr. 2025.  
[^7]: Meta Platforms. *React Native*. Disponível em <https://reactnative.dev/>; acesso em 19 abr. 2025.  
[^8]: Nicolas Gallagher. *React Native Web*. Disponível em <https://necolas.github.io/react-native-web/>; acesso em 19 abr. 2025.  
[^9]: React Native Community. *AsyncStorage*. Disponível em <https://github.com/react-native-async-storage/async-storage>; acesso em 19 abr. 2025.  
[^10]: OpenJS Foundation. *Node.js*. Disponível em <https://nodejs.org/>; acesso em 19 abr. 2025.  
[^11]: Express.js. *Express*. Disponível em <https://expressjs.com/>; acesso em 19 abr. 2025.  
[^12]: The PostgreSQL Global Development Group. *PostgreSQL*. Disponível em <https://www.postgresql.org/>; acesso em 19 abr. 2025.  
[^13]: Prisma. *Prisma ORM*. Disponível em <https://www.prisma.io/>; acesso em 19 abr. 2025.  
[^14]: Supabase. *Supabase*. Disponível em <https://supabase.com/>; acesso em 19 abr. 2025.  
[^15]: Microsoft Azure. *Azure Database for PostgreSQL*. Disponível em <https://azure.microsoft.com/en-us/products/postgresql>; acesso em 19 abr. 2025.  
[^16]: Nielsen Norman Group. *Progressive Engagement*. Disponível em <https://www.nngroup.com/articles/progressive-engagement/>; acesso em 19 abr. 2025.  
[^17]: Nielsen Norman Group. *Mobile Onboarding patterns*. Disponível em <https://www.nngroup.com/articles/mobile-onboarding/>; acesso em 19 abr. 2025.  
[^18]: Nielsen Norman Group. *Mobile Navigation patterns*. Disponível em <https://www.nngroup.com/articles/mobile-navigation/>; acesso em 19 abr. 2025.  
[^19]: Material Design. *Splash Screen guidelines*. Disponível em <https://material.io/design/platform-guidance/android-splash-screen.html>; acesso em 19 abr. 2025.  
[^20]: Material Design. *Onboarding patterns*. Disponível em <https://material.io/design/communication/onboarding.html>; acesso em 19 abr. 2025.  
[^21]: UX Planet. *Quiz Feedback patterns*. Disponível em <https://uxplanet.org/designing-quiz-feedback-ux-7f4c19c8c1cf>; acesso em 19 abr. 2025.
[^22]: Pokémon Company. Pokédex Design Patterns. Disponível em <https://www.pokemon.com/us/pokedex/>; acesso em 19 abr. 2025.
[^23]: Marvel Entertainment. Marvel Character Database UX. Disponível em <https://www.marvel.com/characters>; acesso em 19 abr. 2025.

## 🚀 Instalação & Execução  
```bash
# Clone o repositório
git clone https://github.com/GabrieLima-dev/SementesDaFe.git
cd SementesDaFe

# Instala dependências (monorepo)
yarn install

# Configurar variáveis de ambiente
# - BACKEND_URL, DATABASE_URL, JWT_SECRET, SUPABASE_URL e SUPABASE_KEY

# Iniciar backend
cd backend
yarn dev

# Iniciar frontend (Expo)
cd ../
yarn start
```

## 🤝 Contribuição
- Fork deste repositório
- Crie uma branch para sua feature:
  git checkout -b feature/nova-funcionalidade
- Faça commit das mudanças:
git commit -m "Adiciona <descrição da feature>"
- Envie para seu fork e abra um Pull Request.

## 🛡️ Licença
Este projeto está licenciado sob a MIT License.

## 📝 Autores

| ![GL](https://images.weserv.nl/?url=github.com/GabrieLima-dev.png&h=100&w=100&fit=cover&mask=circle) | ![OU](https://images.weserv.nl/?url=github.com/OutroUsuario.png&h=100&w=100&fit=cover&mask=circle) |
| :---: | :---: |
| **Gabriel Lima**<br/>Idealizador e desenvolvedor principal | **Outro Membro**<br/>Designer |

