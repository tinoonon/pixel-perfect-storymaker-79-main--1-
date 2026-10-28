# Digipragas Link Page - Versão Simplificada

## 📁 Arquivos Principais

- **index.html** - Página principal
- **style.css** - Estilos e animações
- **script.js** - Funcionalidades JavaScript

## 🚀 Como Usar

1. Abra o arquivo `index.html` diretamente no navegador
2. Não precisa de instalação ou build
3. Funciona offline

## ⚙️ Configuração

### Editar Informações de Contato

Abra o arquivo `script.js` e edite a seção CONFIG:

```javascript
const CONFIG = {
  whatsappNumber: '5511999999999', // Seu número no formato 55DDDNUMERO
  whatsappMessage: 'Olá! Quero um orçamento de dedetização',
  siteUrl: '#', // URL do seu site
  instagramUrl: '#' // URL do seu Instagram
};
```

### Editar Textos e Informações

Abra o `index.html` e edite:

- Nome da empresa (linha com `<h1>`)
- Textos do bio (linhas com `<span>`)
- Links dos botões (atributos `href`)

### Trocar a Imagem do Avatar

No `index.html`, procure pela tag `<img>` dentro de `.avatar` e substitua o `src`:

```html
<img src="sua-imagem.jpg" alt="Emblema Digipragas">
```

## 🎨 Personalização de Cores

Edite as variáveis CSS no início do arquivo `style.css`:

```css
:root {
  --lt-orange: #F97F32;
  --lt-orange-deep: #E85D04;
  --lt-red: #D62828;
  --lt-wa: #25D366;
}
```

## 📱 Recursos

- ✅ Responsivo (mobile e desktop)
- ✅ Animações suaves
- ✅ Botão de compartilhamento
- ✅ Link direto para WhatsApp
- ✅ Acessibilidade
- ✅ Performance otimizada

## 🌐 Publicação

Para colocar no ar:

1. **GitHub Pages**: Suba os 3 arquivos para um repositório GitHub e ative Pages
2. **Netlify/Vercel**: Faça drag & drop da pasta
3. **Servidor próprio**: Envie os arquivos via FTP

## 📝 Licença

Livre para uso comercial e pessoal.
