export const stylingSnippets = () => {
  const nodes = document.getElementsByClassName('codeSnippet');
  if (nodes.length === 0) return;

  const themeMode = localStorage.getItem('LibCompareTheme');

  switch (themeMode || 'light') {
    case 'light':
      for (let i = 0; i < nodes.length; i += 1) {
        nodes[i].style.backgroundColor = 'rgba(9, 32, 56, 0.2)';
        nodes[i].style.color = 'rgb(32, 38, 45)';
      }
      break;
    default: {
      for (let i = 0; i < nodes.length; i += 1) {
        nodes[i].style.backgroundColor = 'rgb(191 198 205 / 20%)';
        nodes[i].style.color = 'yellow';
      }
    }
  }
};
