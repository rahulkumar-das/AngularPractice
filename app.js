var app = angular.module('myApp', []);

app.controller('myController', ['$scope',function($scope) {
    $scope.form ={};

    $scope.addReview = function(){
        $scope.reviews.push($scope.form)
        $scope.form={};
    }
 
    $scope.reviews=[
      {
          comment:"Can you be more awesome?",
          by:"chandler@email.com"
      },
      {
        comment:"Can you be more noce?",
        by:"bing@email.com"
    }
  ];
}]);

app.directive('userinformation', function(){
    return{

        restrict: 'E',
        templateUrl: 'userinfo.html'

    };
});

