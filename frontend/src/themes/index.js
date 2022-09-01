import colors from '@assets/scss/_themes-vars.module.scss';
import themePalette from './palette';

export const theme = () => {
    const color = colors;

    const themeOption = {
        navType: 'light',
        colors: color,
        heading: color.grey900,
        paper: color.paper,
        backgroundDefault: color.paper,
        background: color.primaryLight,
        darkTextPrimary: color.grey700,
        darkTextSecondary: color.grey500,
        textDark: color.grey900,
        menuSelected: color.secondaryDark,
        menuSelectedBack: color.secondaryLight,
        divider: color.grey200,
    };

    const theme = {
        direction: 'ltr',
        palette: themePalette(themeOption),
    };

    return theme;
};

export default theme();
