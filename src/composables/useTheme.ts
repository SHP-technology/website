import { ref, onMounted } from 'vue';

export type Theme = 'light' | 'dark';

const theme = ref<Theme>('dark');

export function useTheme() {
  const initTheme = () => {
    const savedTheme = localStorage.getItem('shp-theme') as Theme | null;
    if (savedTheme) {
      theme.value = savedTheme;
    } else if (document.documentElement.classList.contains('dark')) {
      theme.value = 'dark';
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      theme.value = 'dark';
    } else {
      theme.value = 'light';
    }
    applyTheme(theme.value);
  };

  const applyTheme = (newTheme: Theme) => {
    const root = document.documentElement;
    if (newTheme === 'dark') {
      root.classList.add('dark');
      root.style.colorScheme = 'dark';
    } else {
      root.classList.remove('dark');
      root.style.colorScheme = 'light';
    }
    localStorage.setItem('shp-theme', newTheme);
  };

  const toggleTheme = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light';
    applyTheme(theme.value);
  };

  onMounted(() => {
    initTheme();
  });

  return {
    theme,
    toggleTheme,
    initTheme
  };
}
