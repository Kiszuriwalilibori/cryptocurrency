export default function breakWhenInternetExplorer(): void {
    var ua = window.navigator.userAgent;
    var isIE = /MSIE|Trident/.test(ua);

    if (isIE) {
        window.location.href = 'https://kiszuriwalilibori.github.io/IE/';
    }
}
