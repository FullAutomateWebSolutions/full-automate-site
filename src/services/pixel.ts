let pixelLoaded = false;

export function loadPixel() {
  if (pixelLoaded) return;

  // cria script do Meta Pixel
  // !(function (f: any, b, e, v, n?, t?, s?) {
  //   if (f.fbq) return;

  //   n = f.fbq = function () {
  //     n.callMethod
  //       ? n.callMethod.apply(n, arguments)
  //       : n.queue.push(arguments);
  //   };

  //   if (!f._fbq) f._fbq = n;

  //   n.push = n;
  //   n.loaded = true;
  //   n.version = "2.0";
  //   n.queue = [];

  //   t = b.createElement(e);
  //   t.async = true;
  //   t.src = v;

  //   s = b.getElementsByTagName(e)[0];
  //   s.parentNode.insertBefore(t, s);
  // })(
  //   window,
  //   document,
  //   "script",
  //   "https://connect.facebook.net/en_US/fbevents.js"
  // );


  // const PIXEL_ID = "SEU_PIXEL_ID";

  // (window as any).fbq("init", PIXEL_ID);
  // (window as any).fbq("track", "PageView");

  pixelLoaded = true;
}