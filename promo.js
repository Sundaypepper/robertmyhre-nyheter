/**
 * promo.js – Sentral logikk for promo-bannere (kurs + rådgivning).
 * Lenker til forumoa.no/kurs for alltid oppdatert kursinformasjon.
 * Ingen manuell oppdatering nødvendig.
 */

var PROMO = (function () {

  function kursPromoHtml(gridColumn) {
    var style = gridColumn ? ' style="grid-column:1/-1"' : '';
    return '<a href="https://forumoa.no/kurs" target="_blank" rel="noopener" class="promo-banner"' + style + '>'
      + '<div class="promo-content">'
      + '<p class="promo-label">Kurs</p>'
      + '<p class="promo-title">Se kommende kurs på forumoa.no</p>'
      + '<p class="promo-desc">Webinarer innen offentlige anskaffelser – evaluering, forhandlinger, rammeavtaler, miljøkrav og mer.</p>'
      + '</div>'
      + '<span class="promo-cta">Se kurs &rarr;</span></a>';
  }

  function raadgivningPromoHtml(gridColumn) {
    var style = gridColumn ? ' style="grid-column:1/-1"' : '';
    return '<a href="index.html#radgivning" class="promo-banner"' + style + '>'
      + '<div class="promo-content">'
      + '<p class="promo-label">Rådgivning</p>'
      + '<p class="promo-title">Trenger du bistand med en anskaffelse?</p>'
      + '<p class="promo-desc">Strategisk rådgivning for innkjøpere og leverandører – fra en kort vurdering til en grundig utredning.</p>'
      + '</div>'
      + '<span class="promo-cta">Kontakt meg &rarr;</span></a>';
  }

  // Returnerer HTML for en promo basert på index (veksler mellom kurs og rådgivning)
  function getPromoHtml(index) {
    if (index % 2 === 0) {
      return kursPromoHtml(true);
    } else {
      return raadgivningPromoHtml(true);
    }
  }

  // Bygger promo-grid med to bannere side om side (kurs + rådgivning)
  function byggPromoGrid() {
    return '<div class="promo-grid">'
      + kursPromoHtml(false)
      + raadgivningPromoHtml(false)
      + '</div>';
  }

  return {
    getPromoHtml: getPromoHtml,
    byggPromoGrid: byggPromoGrid
  };
})();
