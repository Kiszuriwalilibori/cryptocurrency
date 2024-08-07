/**
 * Detects IE and forwards to fallback page
 */

export default function breakWhenInternetExplorer(): void {
    const ua = window.navigator.userAgent;
    const isIE = /MSIE|Trident/.test(ua);

    if (isIE) {
        window.location.href = "https://kiszuriwalilibori.github.io/IE/";
    }
}
