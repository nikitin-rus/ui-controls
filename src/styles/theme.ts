export interface ITheme {
    '--bg-white': string;
    '--bg-black': string;
    '--bg-blue': string;
    '--bg-hover-gray': string;
    '--bg-hover-blue': string;
    '--stroke-white': string;
    '--stroke-black': string;
    '--stroke-red': string;
    '--stroke-light-green': string;
    '--font-black': string;
    '--font-red': string;
    '--font-white': string;
    '--font-placeholder-gray': string;
    '--shadow': string;
}

export const Theme: ITheme = {
    '--bg-white': '#FFFFFF',
    '--bg-black': '#282828',
    '--bg-blue': '#30349B',
    '--bg-hover-gray': '#EBEBEB',
    '--bg-hover-blue': '#262A86',
    '--stroke-white': '#FFFFFF',
    '--stroke-black': '#282828',
    '--stroke-red': '#E22A2A',
    '--stroke-light-green': '#2AE24C',
    '--font-black': '#282828',
    '--font-red': '#E22A2A',
    '--font-white': '#FFFFFF',
    '--font-placeholder-gray': '#646464',
    '--shadow': '0px 0px 25px 0px rgba(0, 0, 0, 0.10)',
};