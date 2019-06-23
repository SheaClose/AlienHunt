import playService from "../Components/play.js";
function homeCtrl($scope, playService) {
  $scope.play = user => {
    playService.play(user);
  };
}
export default ["$scope", "playService", homeCtrl];
