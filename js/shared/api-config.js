/* KAYA backend API (Node.js + MySQL, repository kaya-backend).
   When KAYA.apiUrl is set, accounts and all /api/v1 calls go to that server instead of
   Supabase or the browser-only demo. Load after contract.js and before supabase-config.js.

   - Served from localhost/127.0.0.1 (local development): the API on port 4000 is used.
   - Anywhere else: set API_URL to the deployed backend's https:// address to use it.
     While it is empty, the live site keeps using Supabase. */
(function () {
  "use strict";
  var KAYA = (window.KAYA = window.KAYA || {});
  var API_URL = "https://idol-consumer-modifications-fleet.trycloudflare.com";

  var host = window.location.hostname;
  var local = window.location.protocol === "http:" && (host === "localhost" || host === "127.0.0.1");
  KAYA.apiUrl = API_URL || (local ? "http://" + host + ":4000" : "");
})();
