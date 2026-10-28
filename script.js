// Configuração
const CONFIG = {
  whatsappNumber: '5531973081799', // Formato: 55DDDNUMERO
  whatsappMessage: 'Olá! Quero um orçamento de dedetização',
  siteUrl: '#',
  instagramUrl: 'https://www.instagram.com/digipragas.oficial'
};

// Função para compartilhar
function shareLink() {
  const shareData = {
    title: 'Digipragas Dedetizadora',
    text: 'Seu espaço livre de pragas, de verdade! Controle integrado de pragas.',
    url: window.location.href
  };

  // Verifica se a API de compartilhamento está disponível
  if (navigator.share) {
    navigator.share(shareData)
      .then(() => {
        console.log('Compartilhado com sucesso');
      })
      .catch((err) => {
        if (err.name !== 'AbortError') {
          console.error('Erro ao compartilhar:', err);
          copyToClipboard();
        }
      });
  } else {
    // Fallback: copiar para área de transferência
    copyToClipboard();
  }
}

// Função para copiar link
function copyToClipboard() {
  const url = window.location.href;
  
  // Tenta usar a API moderna de clipboard
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(url)
      .then(() => {
        showNotification('✓ Link copiado para área de transferência!');
      })
      .catch((err) => {
        console.error('Erro ao copiar:', err);
        fallbackCopy(url);
      });
  } else {
    // Fallback para navegadores antigos
    fallbackCopy(url);
  }
}

// Fallback para copiar em navegadores antigos
function fallbackCopy(text) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  textArea.style.left = '-999999px';
  textArea.style.top = '-999999px';
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  
  try {
    const successful = document.execCommand('copy');
    if (successful) {
      showNotification('✓ Link copiado!');
    } else {
      showNotification('⚠ Não foi possível copiar o link');
    }
  } catch (err) {
    console.error('Erro ao copiar:', err);
    showNotification('⚠ Erro ao copiar o link');
  }
  
  document.body.removeChild(textArea);
}

// Função para mostrar notificação
function showNotification(message) {
  // Remove notificação existente se houver
  const existingNotification = document.querySelector('.custom-notification');
  if (existingNotification) {
    existingNotification.remove();
  }

  const notification = document.createElement('div');
  notification.className = 'custom-notification';
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 80px;
    left: 50%;
    transform: translateX(-50%) translateY(-20px);
    background-color: rgba(20, 20, 20, 0.95);
    color: white;
    padding: 14px 24px;
    border-radius: 12px;
    font-size: 14px;
    font-weight: 500;
    z-index: 10000;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
    opacity: 0;
    transition: all 0.3s ease;
    max-width: 90%;
    text-align: center;
  `;
  
  document.body.appendChild(notification);
  
  // Animar entrada
  setTimeout(() => {
    notification.style.opacity = '1';
    notification.style.transform = 'translateX(-50%) translateY(0)';
  }, 10);
  
  // Remover após 2.5 segundos
  setTimeout(() => {
    notification.style.opacity = '0';
    notification.style.transform = 'translateX(-50%) translateY(-20px)';
    setTimeout(() => notification.remove(), 300);
  }, 2500);
}

// Adicionar feedback visual ao botão de compartilhar
document.addEventListener('DOMContentLoaded', () => {
  const svg = document.querySelector('.backdrop-pattern');
  
  const marks = [
    { kind: 'ant', x: 22, y: 66, s: 78, r: -22 },
    { kind: 'target', x: 300, y: 38, s: 62, r: 0 },
    { kind: 'ant', x: 322, y: 208, s: 54, r: 38 },
    { kind: 'target', x: 38, y: 300, s: 90, r: 0 },
    { kind: 'ant', x: 152, y: 418, s: 44, r: -8 },
    { kind: 'target', x: 300, y: 468, s: 40, r: 0 },
    { kind: 'ant', x: 58, y: 560, s: 66, r: 14 },
    { kind: 'target', x: 188, y: 660, s: 78, r: 0 },
    { kind: 'ant', x: 312, y: 758, s: 60, r: -30 },
    { kind: 'target', x: 38, y: 818, s: 52, r: 0 },
    { kind: 'ant', x: 208, y: 148, s: 34, r: 60 },
    { kind: 'target', x: 118, y: 898, s: 66, r: 0 }
  ];
  
  marks.forEach(mark => {
    const use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
    use.setAttribute('href', `#lt-${mark.kind}`);
    use.setAttribute('x', mark.x);
    use.setAttribute('y', mark.y);
    use.setAttribute('width', mark.s);
    use.setAttribute('height', mark.s);
    use.setAttribute('transform', `rotate(${mark.r} ${mark.x + mark.s / 2} ${mark.y + mark.s / 2})`);
    svg.appendChild(use);
  });
});

// Rastreamento de cliques (opcional)
document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', (e) => {
    const linkText = e.currentTarget.querySelector('.link-text, .main-link-text')?.textContent;
    console.log('Link clicado:', linkText || e.currentTarget.href);
  });
});

// Prevenção de arraste de imagens
document.querySelectorAll('img').forEach(img => {
  img.addEventListener('dragstart', (e) => e.preventDefault());
});

// Log de inicialização
console.log('Digipragas Link Page carregada ✓');
console.log('Configuração:', CONFIG);
