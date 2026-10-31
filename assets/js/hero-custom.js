/**
 * TrynixTech Hero Section Interactive Experience
 * Handles:
 * 1. 3D Perspective Mouse Parallax tilt and shift on hero background stage
 */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    // ------------------------------------------------------------------------
    // 1. 3D Interactive Mouse Parallax on Hero Visual Stage / Background
    // ------------------------------------------------------------------------
    var heroSection = document.querySelector('.trynix-custom-hero');
    var bgInteractive = document.getElementById('heroBgInteractive') || document.getElementById('hero3DStage');

    if (heroSection && bgInteractive) {
      var targetTranslateX = 0;
      var targetTranslateY = 0;
      var targetRotateX = 0;
      var targetRotateY = 0;
      var currentTranslateX = 0;
      var currentTranslateY = 0;
      var currentRotateX = 0;
      var currentRotateY = 0;

      heroSection.addEventListener('mousemove', function (e) {
        var rect = heroSection.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;

        var normX = (x - rect.width / 2) / (rect.width / 2);
        var normY = (y - rect.height / 2) / (rect.height / 2);

        // Enhanced 3D perspective movement (+/- 26px shift and +/- 3.5deg tilt)
        targetTranslateX = normX * 26;
        targetTranslateY = normY * 18;
        targetRotateY = normX * 3.6;
        targetRotateX = -normY * 3.0;
      });

      heroSection.addEventListener('mouseleave', function () {
        targetTranslateX = 0;
        targetTranslateY = 0;
        targetRotateX = 0;
        targetRotateY = 0;
      });

      function renderParallax() {
        var ease = 0.06;
        currentTranslateX += (targetTranslateX - currentTranslateX) * ease;
        currentTranslateY += (targetTranslateY - currentTranslateY) * ease;
        currentRotateX += (targetRotateX - currentRotateX) * ease;
        currentRotateY += (targetRotateY - currentRotateY) * ease;

        if (bgInteractive) {
          bgInteractive.style.transform =
            'perspective(1200px) translate3d(' +
            currentTranslateX.toFixed(2) +
            'px, ' +
            currentTranslateY.toFixed(2) +
            'px, 0) rotateX(' +
            currentRotateX.toFixed(2) +
            'deg) rotateY(' +
            currentRotateY.toFixed(2) +
            'deg)';
        }

        requestAnimationFrame(renderParallax);
      }

      renderParallax();
    }
  });
})();
