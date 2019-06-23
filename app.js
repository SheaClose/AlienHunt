import angular from "angular";
import uiRouter from "angular-ui-router";
import homeCtrl from "./src/controllers/homeCtrl.js";
import playService from "./src/Components/play.js";
import splashPageDirective from "./public/directives/splashPageDirective.js";
angular
  .module("app", [uiRouter])
  .service("playService", playService)
  .directive("splashPage", splashPageDirective)
  .config([
    "$stateProvider",
    "$urlRouterProvider",
    "$compileProvider",
    function($stateProvider, $urlRouterProvider, $compileProvider) {
      $compileProvider.debugInfoEnabled(true);
      $urlRouterProvider.otherwise("/");
      $stateProvider.state("splashPage", {
        url: "/",
        template: "<splash-page></splash-page>",
        controller: homeCtrl
      });
    }
  ]);
