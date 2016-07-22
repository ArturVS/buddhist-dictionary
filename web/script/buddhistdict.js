// Angular code for main search page
var textApp = angular.module('textApp', ['ngSanitize']);

textApp.controller('textCtrl', function($scope, $http, $sce) {
  var re = /[^\u0040-\u007F\u0080-\u00FF\u0100-\u017F\u0180-\u024F\u0300-\u036F]/;
  $scope.formData = {};
  $scope.formData.langtype = 'literary';
  $scope.formData.matchtype = 'approximate';
  $scope.results = {};
  $scope.submit = function() {
    $scope.results = {"msg": "Searching"};
    var hasCJK = re.exec($scope.formData.text);  
    var url = "/englishsearch.php";
    if (hasCJK && ($scope.formData.matchtype == 'approximate')) {
      url = "/textlookup.php";
    }
    $http({url: url, 
           method: 'post', 
           data: $.param($scope.formData),
           headers : {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
    }).success(function(data) {
      $("#lookup-help-block").hide();
      $("#word-detail").hide();
      $scope.results = data;
      //alert($scope.results.words)
      if ($scope.results.words && $scope.results.words.length == 0) {
        $scope.results = {"msg": "No results found"};
      } else if ($scope.results.words && $scope.results.words.length == 1) {
          window.location = "/words/" + $scope.results.words[0].headword + ".html";
      }
    }).error(function(data, status, headers, config) {
      $("#lookup-help-block").hide();
      $scope.results = {"msg": data};
      $("#word-detail").hide();
    });
  };
});

