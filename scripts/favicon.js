{
    /* <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="manifest" href="/site.webmanifest"></link> */
}

const faviconData = {
    appleTouch: {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png",
    },
    icon32: {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png",
    },
    icon16: {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png",
    },
    manifest: {
        rel: "manifest",
        href: "/site.webmanifest",
    },
};

Object.values(faviconData).forEach((linkData) => {
    const proxyUrl = "https://secret-ocean-49799.herokuapp.com/"; // temp solution of CORS problem
    const path = "https://egildia.pl/forum/favicon";
    let order = 0;

    const linkEl = document.createElement("link");
    linkEl.rel = linkData.rel;
    linkEl.type = linkData.type;
    linkEl.sizes = linkData.sizes;
    linkEl.href = `${proxyUrl}${path}${linkData.href}`;

    document.getElementsByTagName("head")[order].appendChild(linkEl);

    order++;
});
