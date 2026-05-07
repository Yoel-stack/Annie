import { Quicksand, Nunito } from "next/font/google";

export const quickFont = Quicksand({
    variable: "--font-quicksand",
    subsets: ["latin"],
    weight: ['500'],
    preload: false
});

export const quickFontTitle = Quicksand({
    variable: "--fontTitle-quicksand",
    subsets: ["latin"],
    weight: ['700'],
    preload: false
});

export const nunitoFont = Nunito({
    variable: "--font-nunito",
    subsets: ["latin"],
    weight: ['400'],
    preload: false
});