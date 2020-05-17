/* eslint-env browser */

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker
      .register('fifteenfifty.github.io/PoELevellingCompanion/expo-service-worker.js', { scope: 'fifteenfifty.github.io/PoELevellingCompanion/' })
      .then(function(info) {
        // console.info('Registered service-worker', info);
      })
      .catch(function(error) {
        console.info('Failed to register service-worker', error);
      });
  });
}
