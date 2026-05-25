import ReactGA from "react-ga4";

export function initAnalytics() {
  ReactGA.initialize("G-LWNZXCEW7N");
}

export function pageView(path: string) {
  ReactGA.send({ hitType: "pageview", page: path });
}

export function eventTrack( action: string, category: string,label?: string) {
  ReactGA.event({action,category,label });
}

let loaded = false;
export function loadGA() {
  if (loaded) return;
  const script = document.createElement("script");
  script.src = "https://www.googletagmanager.com/gtag/js?id=";
  script.async = true;

  document.head.appendChild(script);

  // window.dataLayer = window.dataLayer || [];
  // function gtag(...args: any[]) {
  //   window.dataLayer.push(args);
  // }

  // (window as any).gtag = gtag;

  // gtag("js", new Date());
  // gtag("config", "G-LWNZXCEW7N");

  loaded = true;
}

export function trackEvent(event: string) {
  // if ((window as any).fbq) {
  //   (window as any).fbq("track", event);
  // }
}


