# Website Zweifel AG Wil

Statische Website (nur HTML, CSS, etwas JavaScript). Kein Baukasten, keine Datenbank, keine Cookies, keine externen Schriften oder Dienste. Läuft auf GitHub Pages.

## 1. Auf GitHub veröffentlichen (Testadresse)

1. Auf github.com ein Konto der Firma anlegen und ein neues Repository erstellen, z. B. `zweifelwil-website`.
2. Den **Inhalt** dieses Ordners hochladen (Schaltfläche «Add file → Upload files», alle Dateien und Ordner hineinziehen, `Commit changes`). Der Ordner `assets` und die `.html`-Dateien müssen direkt im Hauptverzeichnis des Repositorys liegen.
3. Im Repository: **Settings → Pages → Build and deployment → Source: «Deploy from a branch»**, Branch `main`, Ordner `/ (root)`, speichern.
4. Nach etwa einer Minute ist die Seite unter `https://<benutzername>.github.io/zweifelwil-website/` erreichbar. So lässt sie sich intern prüfen.

Hinweis: Auf der Testadresse mit Unterordner (`/zweifelwil-website/`) funktionieren alle Links, weil sie relativ sind. Nur die Seite `404.html` ist erst auf der eigenen Domain vollständig gestaltet.

## 2. Fotos und Dateien ergänzen

Siehe **BILDLISTE.md**: Dateiname, Ordner und Pixelgrösse jedes Bildes. Dateien mit genau diesem Namen in `assets/img/` (Referenzlisten als PDF in `assets/pdf/`) hochladen. Solange eine Datei fehlt, zeigt die Seite einen grauen Platzhalter mit Namen und Grösse.

## 3. Auf die offizielle Adresse umstellen (www.zweifelwil.ch)

Erst machen, wenn die Seite fertig geprüft ist.

1. Im Repository eine Datei `CNAME` anlegen, Inhalt eine Zeile: `www.zweifelwil.ch`
2. Beim Domain-Anbieter (dort, wo `zweifelwil.ch` verwaltet wird) im DNS einen **CNAME-Eintrag** setzen: Name `www`, Ziel `<benutzername>.github.io`. Für die Adresse ohne `www` die vier A-Einträge von GitHub eintragen (aktuelle Werte stehen in der GitHub-Dokumentation «Managing a custom domain for your GitHub Pages site»).
3. In **Settings → Pages** die Domain eintragen und «Enforce HTTPS» aktivieren, sobald GitHub das Zertifikat bereitstellt.
4. Den alten Webspace/Baukasten erst abschalten, wenn die neue Seite unter der Domain läuft.

Die Dateien `Dienstleistungen.htm`, `Unternehmen.htm`, `News.htm`, `Karriere.htm`, `Referenzen.htm` und `Kontakt.htm` leiten alte Adressen auf die neuen Seiten um, damit Google-Treffer und Lesezeichen weiter funktionieren. Die alte Startseite war bereits `/`, sie bleibt gleich.

## 4. Kontaktformular

GitHub Pages kann selbst keine E-Mails versenden. Zwei Möglichkeiten:

- **Ohne Einrichtung (jetzt aktiv):** Beim Absenden öffnet sich das E-Mail-Programm des Besuchers mit vorbereitetem Text an info@zweifelwil.ch.
- **Mit Formular-Dienst (empfohlen):** Bei einem Dienst wie Formspree oder Web3Forms ein Formular für info@zweifelwil.ch anlegen und die erhaltene Adresse in `kontakt.html` bei `data-endpoint=""` eintragen. Danach wird direkt im Hintergrund gesendet. Den Dienst in der Datenschutzerklärung nennen.

## 5. Vor dem Livegang prüfen

- `impressum.html` und `datenschutz.html` sind Entwürfe mit Platzhaltern in eckigen Klammern. Ergänzen und rechtlich prüfen lassen, dann den gestrichelten Hinweis löschen.
- `karriere.html`: Der Text nennt noch «Lehrbeginn Sommer 2026». Aktualisieren.
- `news.html`: Die Beiträge haben nur Titel. Texte und Fotos aus dem alten Auftritt ergänzen.
- `unternehmen.html`: Vornamen bei J. Schlegel und M. Mgborukwe ergänzen (im Screenshot nicht lesbar). Links zu den Verbänden prüfen (SES, swissgee und weitere).
- Texte auf der Startseite (zweiter Absatz) stammen aus einem angeschnittenen Screenshot. Bitte prüfen.

## Aufbau

```
index.html, dienstleistungen.html, unternehmen.html, news.html,
karriere.html, referenzen.html, kontakt.html, impressum.html, datenschutz.html
assets/css/style.css      Gestaltung (Farben oben in :root)
assets/js/main.js         Menü, Bild-Platzhalter, Formular
assets/fonts/             Schriften Outfit und Source Sans 3 (lokal, kein Google)
assets/img/, assets/pdf/  Ihre Bilder und Referenzlisten
```

Änderungen an Texten: Datei im GitHub-Editor öffnen (Stift-Symbol), Text ändern, «Commit changes». Die Seite aktualisiert sich nach etwa einer Minute.
