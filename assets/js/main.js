/* Zweifel AG Wil – kleine Hilfsfunktionen, kein Tracking, keine externen Dienste */
(function () {
  "use strict";

  /* Mobile Navigation */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("hauptnavigation");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  /* Bild-Platzhalter: fehlt eine Bilddatei, zeigt die Seite Dateiname und Grösse an */
  function mark(img) {
    var box = img.closest(".media");
    if (!box) return;
    if (img.complete && img.naturalWidth > 0) {
      box.classList.add("loaded");
      box.classList.remove("missing");
    } else if (img.complete) {
      box.classList.add("missing");
    }
  }
  document.querySelectorAll(".media img").forEach(function (img) {
    img.addEventListener("load", function () { mark(img); });
    img.addEventListener("error", function () {
      var box = img.closest(".media");
      if (box) box.classList.add("missing");
    });
    mark(img);
  });

  /* Kontaktformular
     Variante A: data-endpoint im <form> setzen (z. B. Formspree / Web3Forms) -> Versand im Hintergrund.
     Variante B: ohne Endpoint öffnet sich das E-Mail-Programm mit vorbereitetem Text. */
  var form = document.getElementById("kontaktformular");
  if (form) {
    var status = document.getElementById("form-status");
    var say = function (text, cls) { status.textContent = text; status.className = "form-status " + cls; };
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (form.website && form.website.value) return; /* Honeypot gegen Spam */
      if (!form.checkValidity()) { form.reportValidity(); return; }
      var data = new FormData(form);
      var endpoint = form.getAttribute("data-endpoint");
      if (endpoint) {
        say("Wird gesendet …", "");
        fetch(endpoint, { method: "POST", body: data, headers: { Accept: "application/json" } })
          .then(function (r) {
            if (!r.ok) throw new Error("http " + r.status);
            form.reset();
            say("Danke für Ihre Nachricht. Wir melden uns bei Ihnen.", "ok");
          })
          .catch(function () {
            say("Das Senden hat nicht geklappt. Bitte schreiben Sie uns direkt an info@zweifelwil.ch.", "err");
          });
      } else {
        var lines = [
          "Anrede: " + (data.get("anrede") || ""),
          "Name: " + data.get("name"),
          "Strasse: " + (data.get("strasse") || ""),
          "PLZ/Ort: " + (data.get("ort") || ""),
          "E-Mail: " + data.get("email"),
          "Telefon: " + (data.get("telefon") || ""),
          "",
          data.get("nachricht") || ""
        ];
        window.location.href = "mailto:info@zweifelwil.ch?subject=" +
          encodeURIComponent("Anfrage über die Website") + "&body=" + encodeURIComponent(lines.join("\n"));
        say("Ihr E-Mail-Programm wurde geöffnet. Bitte senden Sie die Nachricht dort ab.", "ok");
      }
    });
  }
})();
