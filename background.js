chrome.runtime.onInstalled.addListener(() => {
    // Não é necessário armazenar o estado no chrome.storage.local
    console.log("Extensão instalada.");
  });
  