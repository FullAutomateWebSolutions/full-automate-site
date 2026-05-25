let loaded = false;

export function loadGA() {
  if (loaded) return;

  const script = document.createElement("script");
  script.src = "https://www.googletagmanager.com/gtag/js?id=G-LWNZXCEW7N";
  script.async = true;

  // document.head.appendChild(script);

  // window.dataLayer = window.dataLayer || [];
  // function gtag(...args: any[]) {
  //   window.dataLayer.push(args);
  // }

  // (window as any).gtag = gtag;

  // gtag("js", new Date());
  // gtag("config", "G-LWNZXCEW7N");

  loaded = true;
}