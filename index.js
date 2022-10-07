window.onload = (event) => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    console.log(params)

    let redirectUrl = params.base_url
    if ("android_url" in params) {
        console.log("android_url Found")
        if (/Android/i.test(navigator.userAgent)) {
            console.log("Detected Android: ", navigator.userAgent)
            redirectUrl = params.android_url
        }
    }
    if ("ios_url" in params) {
        console.log("ios_url Found")
        if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
            console.log("Detected iOS: ", navigator.userAgent)
            redirectUrl = params.ios_url
        }
    }
    if ("mobile_other_url" in params) {
        console.log("mobile_other_url Found")
        if (/webOS|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
            console.log("Detected Mobile Other: ", navigator.userAgent)
            redirectUrl = params.mobile_other_url
        }
    }
    if ("mobile_url" in params) {
        console.log("mobile_url Found")
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
            console.log("Detected Generic Mobile: ", navigator.userAgent)
            redirectUrl = params.mobile_url
        }
    }
    console.log("Redirecting to: ", redirectUrl)
    window.location.replace(redirectUrl)
}