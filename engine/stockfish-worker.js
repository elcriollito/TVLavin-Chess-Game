// engine/stockfish-worker.js
// Este wrapper crea el worker apuntando al WASM correcto.
// Ojo: el stockfish.js lee self.location.hash para saber el nombre del .wasm

self.onmessage = (e) => {
  // reenviamos a la instancia real de Stockfish
  if (self._sf) self._sf.postMessage(e.data);
};

(function boot() {
  const wasmFile = "stockfish-17.1-lite-single-03e3232.wasm";
  const url = `stockfish-17.1-lite-single-03e3232.js#${encodeURIComponent(wasmFile)},worker`;

  // Creamos un worker interno cargando el engine real
  self._sf = new Worker(url);

  // Todo lo que diga Stockfish, lo pasamos al hilo principal
  self._sf.onmessage = (msg) => postMessage(msg.data);
})();
