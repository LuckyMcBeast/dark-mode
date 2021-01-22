import useLocalStorage from './useLocalStorage';

const useDarkMode = () => {
    const [darkKey, setDarkKey] = useLocalStorage('dark', false);
    return [darkKey, setDarkKey];
}

export default useDarkMode;