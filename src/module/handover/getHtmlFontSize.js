/**
 * Created by wujincun on 17/6/21.
 */
/*计算html的font-size*/
;(function getHtmlFontSize(){
  let dpr = window.devicePixelRatio, doc = window.document, docEl = doc.documentElement;
  let width = docEl.getBoundingClientRect().width;
  if (width / dpr > 540) {
    width = 540 * dpr;
  }
  let rem = width / 10;
  docEl.style.fontSize = rem + 'px';
})();

