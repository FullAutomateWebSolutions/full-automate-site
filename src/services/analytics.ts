import ReactGA from "react-ga4";

export function initAnalytics() {
  ReactGA.initialize("G-XXXXXXXXXX");
}

export function pageView(path: string) {
  ReactGA.send({
    hitType: "pageview",
    page: path,
  });
}

export function eventTrack(
  action: string,
  category: string,
  label?: string
) {
  ReactGA.event({
    action,
    category,
    label,
  });
}