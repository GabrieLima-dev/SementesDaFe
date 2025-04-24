# Sementes da Fé 🌟

## 📖 Descrição  
**Sementes da Fé** é um aplicativo católico interativo que ajuda jovens a conhecerem a Bíblia e os ensinamentos de Jesus por meio de histórias ilustradas, quizzes e práticas como a Lectio Divina, promovendo crescimento espiritual sem necessidade de login obrigatório :contentReference[oaicite:0]{index=0}.

## 🎯 Objetivo  
Transformar o aprendizado bíblico em uma jornada lúdica, acessível e significativa para jovens de 12 a 18 anos, apoiando encontros de catequese, grupos de jovens e uso pessoal :contentReference[oaicite:1]{index=1}.

## ✨ Funcionalidades Principais  
- 📖 **Histórias Bíblicas Animadas**  
  Quadrinhos interativos com hotspots para contextualizar trechos bíblicos :contentReference[oaicite:2]{index=2}.  
- ❓ **Quizzes e Reflexões**  
  Perguntas ao fim de cada episódio para reforçar a compreensão e registrar progresso :contentReference[oaicite:3]{index=3}.  
- 🙏 **Lectio Divina Guiada**  
  Passo a passo interativo para leitura orante (lectio, meditatio, oratio, contemplatio) :contentReference[oaicite:4]{index=4}.  
- 💬 **Comunidade Moderada**  
  Fóruns e grupos de discussão com mediação de catequistas (login opcional) :contentReference[oaicite:5]{index=5}.  
- 🏆 **Gamificação**  
  Sistema de pontos, conquistas e recompensas visuais para motivar o engajamento contínuo :contentReference[oaicite:6]{index=6}.

## 🧱 Tecnologias  

### Frontend  
- **React Native**: desenvolvimento nativo para Android e iOS com JavaScript/TypeScript :contentReference[oaicite:7]{index=7}  
- **React Native Web**: converte o mesmo código para PWA no navegador :contentReference[oaicite:8]{index=8}  
- **AsyncStorage**: armazenamento local persistente de progresso e configurações :contentReference[oaicite:9]{index=9}  

### Backend  
- **Node.js**: ambiente de execução JavaScript, leve e escalável :contentReference[oaicite:10]{index=10}  
- **Express.js**: framework minimalista para APIs RESTful :contentReference[oaicite:11]{index=11}  

### Banco de Dados  
- **PostgreSQL**: banco relacional avançado e open-source :contentReference[oaicite:12]{index=12}  
- **Prisma ORM**: mapeamento objeto-relacional com migrações automáticas e tipagem forte :contentReference[oaicite:13]{index=13}  
- **Supabase**: hospedagem gratuita de PostgreSQL com autenticação e storage :contentReference[oaicite:14]{index=14}  
- **Azure Database for PostgreSQL**: opção futura de serviço gerenciado na nuvem :contentReference[oaicite:15]{index=15}  

## 🏗️ Arquitetura & Padrões  
- **Guest-First / Progressive Engagement**: adia o login até a necessidade real para reduzir atrito :contentReference[oaicite:16]{index=16}.  
- **Onboarding Suave**: telas explicativas com “Pular” e “Próximo”, minimizando fricção inicial :contentReference[oaicite:17]{index=17}.  
- **Navegação Consistente**: barra fixa ou gestos, botões desabilitados quando inativos e feedback tátil/visual :contentReference[oaicite:18]{index=18}.  

## 🖼️ Telas & Fluxo de Navegação  

1. **Splash / Welcome**  
   - Logo e botão “Começar”; identifica primeira vez para exibir onboarding :contentReference[oaicite:19]{index=19}.  
2. **Onboarding (3 cartões)**  
   - Ilustração, texto e botões “Próximo” / “Pular” para introduzir recursos do app :contentReference[oaicite:20]{index=20}.  
3. **Home**  
   - Cards de módulos: Histórias, Ensinamentos, Lectio Divina, Comunidade.  
4. **Detalhe de Episódio**  
   - Quadrinhos interativos com hotspots e botões “Voltar” / “Próxima”.  
5. **Quiz**  
   - Perguntas de múltipla escolha, validação de resposta e feedback imediato :contentReference[oaicite:21]{index=21}.  
6. **Resultado**  
   - Placar, conquistas desbloqueadas e botão de compartilhamento nativo.  
7. **Configurações**  
   - Reset de progresso, criar conta para sincronização e ajustes de perfil.

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

##  📝 Autor
<img src="path/to/your-profile.jpg" alt="Foto do Autor" width="100" style="border-radius:50%;" /> **Seu Nome** – Idealizador e desenvolvedor principal :contentReference[oaicite:22]{index=22} ``` ::contentReference[oaicite:23]{index=23}
