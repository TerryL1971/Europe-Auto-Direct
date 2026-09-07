// src/data/i18n.ts
//
// Translation dictionary for the EN / DE / FR toggle.
//
// Coverage is deliberate: the site chrome, section headings, calls to
// action and the price-transparency labels are fully translated because
// those carry the pitch. Per-vehicle marketing blurbs stay in English in
// this concept build (they would come from the real inventory feed later).
//
// Static markup opts in with `data-i18n="some.key"` (text content) or
// `data-i18n-placeholder="some.key"` (input placeholder). React islands
// read the same keys through the `t()` helper below.

export type Lang = 'en' | 'de' | 'fr';

export const LANGS: { code: Lang; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'de', label: 'DE' },
  { code: 'fr', label: 'FR' },
];

export const DEFAULT_LANG: Lang = 'en';

type Dict = Record<string, string>;

export const translations: Record<Lang, Dict> = {
  en: {
    'nav.inventory': 'Inventory',
    'nav.how': 'How it works',
    'nav.why': 'Why buy from us',
    'nav.locations': 'Locations',
    'nav.contact': 'Contact',

    'hero.eyebrow': 'Stuttgart region · Luxembourg',
    'hero.headline': 'Your car. Your country. No complications.',
    'hero.sub':
      'EU-spec vehicles at one honest, VAT-inclusive price. The number you see is the number you pay — itemised, in your language, with the paperwork handled.',
    'hero.cta': 'Browse inventory',
    'hero.cta2': 'See a price breakdown',
    'hero.badge1': 'Every price VAT-inclusive',
    'hero.badge2': 'EU-spec vehicles only',
    'hero.badge3': 'No surprise costs at signing',

    'how.title': 'Buying a car in a country you just moved to',
    'how.sub':
      'You have not done this here before. That is the normal case, not the exception — the process is built around it.',
    'how.step1.t': 'Browse',
    'how.step1.d':
      'Every listing shows the full price with VAT already in it, plus mileage, spec and where the car is.',
    'how.step2.t': 'Reserve or ask',
    'how.step2.d':
      'Hold a car with a refundable deposit, or send a question first. Replies come in English, German or French.',
    'how.step3.t': 'Paperwork support',
    'how.step3.d':
      'We walk you through registration (Zulassung), insurance and the TÜV situation — no German credit history required.',
    'how.step4.t': 'Drive away',
    'how.step4.d':
      'Collect in Stuttgart, or arrange delivery for Luxembourg. Plates and documents ready on the day.',

    'inv.title': 'Inventory preview',
    'inv.sub':
      'A sample of EU-spec stock. Every total below already includes German VAT at 19%, shown on its own line.',
    'inv.filterMake': 'Make',
    'inv.filterBody': 'Body type',
    'inv.all': 'All',
    'inv.showing': 'Showing',
    'inv.of': 'of',
    'inv.vehicles': 'vehicles',
    'inv.vatLine': 'VAT',
    'inv.net': 'Net price',
    'inv.total': 'Total price',
    'inv.cta': 'Enquire about this car',
    'inv.empty': 'No vehicles match those filters.',
    'inv.km': 'km',

    'why.title': 'Why buy from us instead of a private sale or a dealer',
    'why.sub':
      'The honest answer to the question every relocating buyer asks first.',
    'why.p1.t': 'No German credit history needed',
    'why.p1.d':
      'Buying and registering does not depend on a Schufa score. We guide you through the parts that usually trip up new arrivals.',
    'why.p2.t': 'EU-spec means simple registration',
    'why.p2.d':
      'No import inspection, no single-vehicle approval, no grey-market surprises. The car is already legal for the road here.',
    'why.p3.t': 'Transparent, itemised pricing',
    'why.p3.d':
      'Base price plus VAT equals the total — and that total is what you pay. No documentation fees or delivery add-ons at the desk.',
    'why.p4.t': 'Support in your language',
    'why.p4.d':
      'Every step is available in English, German or French, from the first question to the registration appointment.',

    'price.title': 'How the price is built',
    'price.sub':
      'German consumer law requires VAT to be shown. We put it front and centre — this is the whole idea.',
    'price.slider': 'Example vehicle total',
    'price.base': 'Base price (net)',
    'price.vat': 'VAT (19%)',
    'price.total': 'Total price you pay',
    'price.note':
      'Illustrative. Every listing on the site shows this same breakdown for its actual price.',

    'loc.title': 'Where we operate',
    'loc.stuttgart.t': 'Stuttgart',
    'loc.stuttgart.d':
      'Primary location. Viewings, collection and registration support in person across the wider region.',
    'loc.lux.t': 'Luxembourg',
    'loc.lux.d':
      'Served market. Remote purchase with delivery and documentation handled end to end — no physical branch required.',

    'contact.title': 'Ask a question',
    'contact.sub':
      'Tell us what you are looking for, or ask about a specific car. No obligation.',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.message': 'Message',
    'contact.messagePh': 'Which car, which city, and your rough timeline…',
    'contact.submit': 'Send enquiry',
    'contact.sending': 'Sending…',
    'contact.success': 'Thanks — this is a concept demo, so nothing was actually sent. In the real thing, we would reply within one business day.',

    'footer.tagline': 'Transparent, all-inclusive car buying for the international community in Germany and Luxembourg.',
    'footer.concept': 'A concept in development.',
    'footer.rights': 'All rights reserved.',
  },

  de: {
    'nav.inventory': 'Fahrzeuge',
    'nav.how': 'So funktioniert es',
    'nav.why': 'Warum bei uns kaufen',
    'nav.locations': 'Standorte',
    'nav.contact': 'Kontakt',

    'hero.eyebrow': 'Region Stuttgart · Luxemburg',
    'hero.headline': 'Ihr Auto. Ihr Land. Keine Komplikationen.',
    'hero.sub':
      'EU-Fahrzeuge zu einem ehrlichen Preis inklusive Mehrwertsteuer. Was Sie sehen, ist was Sie zahlen — aufgeschlüsselt, in Ihrer Sprache, mit erledigten Formalitäten.',
    'hero.cta': 'Fahrzeuge ansehen',
    'hero.cta2': 'Preisaufschlüsselung ansehen',
    'hero.badge1': 'Jeder Preis inkl. MwSt.',
    'hero.badge2': 'Nur EU-Fahrzeuge',
    'hero.badge3': 'Keine Überraschungen bei Vertragsabschluss',

    'how.title': 'Ein Auto kaufen in einem Land, in das Sie gerade gezogen sind',
    'how.sub':
      'Sie haben das hier noch nie gemacht. Das ist der Normalfall, nicht die Ausnahme — der Ablauf ist darauf ausgelegt.',
    'how.step1.t': 'Stöbern',
    'how.step1.d':
      'Jedes Inserat zeigt den Gesamtpreis inklusive MwSt., dazu Kilometerstand, Ausstattung und Standort.',
    'how.step2.t': 'Reservieren oder fragen',
    'how.step2.d':
      'Sichern Sie ein Auto mit einer erstattbaren Anzahlung, oder stellen Sie zuerst eine Frage. Antworten auf Englisch, Deutsch oder Französisch.',
    'how.step3.t': 'Unterstützung bei Formalitäten',
    'how.step3.d':
      'Wir begleiten Sie bei Zulassung, Versicherung und TÜV — ohne deutsche Bonitätshistorie.',
    'how.step4.t': 'Losfahren',
    'how.step4.d':
      'Abholung in Stuttgart oder Lieferung nach Luxemburg. Kennzeichen und Papiere am selben Tag bereit.',

    'inv.title': 'Fahrzeugvorschau',
    'inv.sub':
      'Ein Ausschnitt aus dem EU-Bestand. Jeder Gesamtpreis enthält bereits 19% deutsche MwSt., separat ausgewiesen.',
    'inv.filterMake': 'Marke',
    'inv.filterBody': 'Karosserie',
    'inv.all': 'Alle',
    'inv.showing': 'Angezeigt',
    'inv.of': 'von',
    'inv.vehicles': 'Fahrzeugen',
    'inv.vatLine': 'MwSt.',
    'inv.net': 'Nettopreis',
    'inv.total': 'Gesamtpreis',
    'inv.cta': 'Zu diesem Auto anfragen',
    'inv.empty': 'Keine Fahrzeuge passen zu diesen Filtern.',
    'inv.km': 'km',

    'why.title': 'Warum bei uns kaufen statt privat oder beim Händler',
    'why.sub':
      'Die ehrliche Antwort auf die Frage, die jeder umziehende Käufer zuerst stellt.',
    'why.p1.t': 'Keine deutsche Bonitätshistorie nötig',
    'why.p1.d':
      'Kauf und Zulassung hängen nicht von einem Schufa-Score ab. Wir begleiten Sie durch die Punkte, die Neuankömmlinge sonst stolpern lassen.',
    'why.p2.t': 'EU-Spezifikation bedeutet einfache Zulassung',
    'why.p2.d':
      'Keine Importprüfung, keine Einzelabnahme, keine Grauimport-Überraschungen. Das Auto ist hier bereits straßenzugelassen.',
    'why.p3.t': 'Transparente, aufgeschlüsselte Preise',
    'why.p3.d':
      'Grundpreis plus MwSt. ergibt den Gesamtpreis — und den zahlen Sie. Keine Bearbeitungsgebühren oder Überführungskosten am Schalter.',
    'why.p4.t': 'Unterstützung in Ihrer Sprache',
    'why.p4.d':
      'Jeder Schritt auf Englisch, Deutsch oder Französisch, von der ersten Frage bis zum Zulassungstermin.',

    'price.title': 'Wie sich der Preis zusammensetzt',
    'price.sub':
      'Das deutsche Verbraucherrecht schreibt die Angabe der MwSt. vor. Wir stellen sie in den Mittelpunkt — darum geht es.',
    'price.slider': 'Beispiel-Gesamtpreis',
    'price.base': 'Grundpreis (netto)',
    'price.vat': 'MwSt. (19%)',
    'price.total': 'Gesamtpreis, den Sie zahlen',
    'price.note':
      'Beispielhaft. Jedes Inserat auf der Seite zeigt dieselbe Aufschlüsselung für seinen tatsächlichen Preis.',

    'loc.title': 'Wo wir tätig sind',
    'loc.stuttgart.t': 'Stuttgart',
    'loc.stuttgart.d':
      'Hauptstandort. Besichtigung, Abholung und Zulassungsunterstützung persönlich in der gesamten Region.',
    'loc.lux.t': 'Luxemburg',
    'loc.lux.d':
      'Bedienter Markt. Fernkauf mit Lieferung und vollständiger Abwicklung der Unterlagen — keine Filiale nötig.',

    'contact.title': 'Stellen Sie eine Frage',
    'contact.sub':
      'Sagen Sie uns, wonach Sie suchen, oder fragen Sie zu einem bestimmten Auto. Unverbindlich.',
    'contact.name': 'Name',
    'contact.email': 'E-Mail',
    'contact.phone': 'Telefon',
    'contact.message': 'Nachricht',
    'contact.messagePh': 'Welches Auto, welche Stadt und Ihr ungefährer Zeitrahmen…',
    'contact.submit': 'Anfrage senden',
    'contact.sending': 'Wird gesendet…',
    'contact.success': 'Danke — dies ist eine Konzeptdemo, es wurde nichts gesendet. Im echten Betrieb würden wir innerhalb eines Werktags antworten.',

    'footer.tagline': 'Transparenter Autokauf mit Komplettpreis für die internationale Community in Deutschland und Luxemburg.',
    'footer.concept': 'Ein Konzept in Entwicklung.',
    'footer.rights': 'Alle Rechte vorbehalten.',
  },

  fr: {
    'nav.inventory': 'Véhicules',
    'nav.how': 'Comment ça marche',
    'nav.why': 'Pourquoi acheter chez nous',
    'nav.locations': 'Emplacements',
    'nav.contact': 'Contact',

    'hero.eyebrow': 'Région de Stuttgart · Luxembourg',
    'hero.headline': 'Votre voiture. Votre pays. Sans complications.',
    'hero.sub':
      'Des véhicules aux normes UE à un prix honnête, TVA comprise. Le montant affiché est celui que vous payez — détaillé, dans votre langue, avec les démarches prises en charge.',
    'hero.cta': 'Voir les véhicules',
    'hero.cta2': 'Voir le détail du prix',
    'hero.badge1': 'Chaque prix TVA comprise',
    'hero.badge2': 'Véhicules aux normes UE uniquement',
    'hero.badge3': 'Aucun frais surprise à la signature',

    'how.title': 'Acheter une voiture dans un pays où vous venez d’arriver',
    'how.sub':
      'Vous ne l’avez jamais fait ici. C’est le cas normal, pas l’exception — le parcours est conçu pour ça.',
    'how.step1.t': 'Parcourir',
    'how.step1.d':
      'Chaque annonce indique le prix total TVA comprise, plus le kilométrage, la finition et l’emplacement.',
    'how.step2.t': 'Réserver ou demander',
    'how.step2.d':
      'Réservez une voiture avec un acompte remboursable, ou posez d’abord une question. Réponses en anglais, allemand ou français.',
    'how.step3.t': 'Aide aux démarches',
    'how.step3.d':
      'Nous vous accompagnons pour l’immatriculation (Zulassung), l’assurance et le contrôle technique — sans historique de crédit allemand.',
    'how.step4.t': 'Prendre la route',
    'how.step4.d':
      'Retrait à Stuttgart, ou livraison organisée pour le Luxembourg. Plaques et documents prêts le jour même.',

    'inv.title': 'Aperçu du stock',
    'inv.sub':
      'Un échantillon du stock aux normes UE. Chaque total ci-dessous inclut déjà la TVA allemande de 19%, indiquée séparément.',
    'inv.filterMake': 'Marque',
    'inv.filterBody': 'Carrosserie',
    'inv.all': 'Toutes',
    'inv.showing': 'Affichage de',
    'inv.of': 'sur',
    'inv.vehicles': 'véhicules',
    'inv.vatLine': 'TVA',
    'inv.net': 'Prix hors taxes',
    'inv.total': 'Prix total',
    'inv.cta': 'Se renseigner sur cette voiture',
    'inv.empty': 'Aucun véhicule ne correspond à ces filtres.',
    'inv.km': 'km',

    'why.title': 'Pourquoi acheter chez nous plutôt qu’en vente privée ou chez un concessionnaire',
    'why.sub':
      'La réponse honnête à la question que pose d’abord chaque acheteur qui déménage.',
    'why.p1.t': 'Aucun historique de crédit allemand requis',
    'why.p1.d':
      'L’achat et l’immatriculation ne dépendent pas d’un score Schufa. Nous vous guidons sur les points qui bloquent souvent les nouveaux arrivants.',
    'why.p2.t': 'Les normes UE simplifient l’immatriculation',
    'why.p2.d':
      'Pas de contrôle d’importation, pas d’homologation individuelle, pas de mauvaise surprise de marché gris. La voiture est déjà homologuée ici.',
    'why.p3.t': 'Un prix transparent et détaillé',
    'why.p3.d':
      'Prix de base plus TVA égale le total — et ce total est ce que vous payez. Aucun frais de dossier ni supplément de livraison au comptoir.',
    'why.p4.t': 'Une assistance dans votre langue',
    'why.p4.d':
      'Chaque étape est disponible en anglais, allemand ou français, de la première question au rendez-vous d’immatriculation.',

    'price.title': 'Comment le prix est constitué',
    'price.sub':
      'Le droit allemand de la consommation impose d’afficher la TVA. Nous la mettons au premier plan — c’est toute l’idée.',
    'price.slider': 'Prix total du véhicule exemple',
    'price.base': 'Prix de base (hors taxes)',
    'price.vat': 'TVA (19%)',
    'price.total': 'Prix total que vous payez',
    'price.note':
      'À titre indicatif. Chaque annonce du site affiche ce même détail pour son prix réel.',

    'loc.title': 'Où nous opérons',
    'loc.stuttgart.t': 'Stuttgart',
    'loc.stuttgart.d':
      'Emplacement principal. Visites, retrait et aide à l’immatriculation en personne dans toute la région.',
    'loc.lux.t': 'Luxembourg',
    'loc.lux.d':
      'Marché desservi. Achat à distance avec livraison et gestion complète des documents — sans agence physique.',

    'contact.title': 'Poser une question',
    'contact.sub':
      'Dites-nous ce que vous cherchez, ou renseignez-vous sur une voiture précise. Sans engagement.',
    'contact.name': 'Nom',
    'contact.email': 'E-mail',
    'contact.phone': 'Téléphone',
    'contact.message': 'Message',
    'contact.messagePh': 'Quelle voiture, quelle ville, et votre échéance approximative…',
    'contact.submit': 'Envoyer la demande',
    'contact.sending': 'Envoi…',
    'contact.success': 'Merci — ceci est une démo de concept, rien n’a réellement été envoyé. En conditions réelles, nous répondrions sous un jour ouvré.',

    'footer.tagline': 'Achat automobile transparent et tout compris pour la communauté internationale en Allemagne et au Luxembourg.',
    'footer.concept': 'Un concept en développement.',
    'footer.rights': 'Tous droits réservés.',
  },
};

/** Look up a key for a language, falling back to English, then the key. */
export function t(lang: Lang, key: string): string {
  return translations[lang]?.[key] ?? translations.en[key] ?? key;
}
