'use strict';

// Register `gitIssueList` component, along with its associated controller and template
angular.
  module('gitIssueList').
  component('gitIssueList', {
    templateUrl: 'git-issue-list/git-issue-list.template.html',
    controller: function gitIssueListController($http) {
      var self = this;
      self.orderProp = 'age';
      var today = new Date();
      today.setDate(today.getDate() - 7);
      self.gmtDate = today;
       
      $http.get('https://api.github.com/repos/angular/angular/issues?since=' + today).then(function(response) {
        self.phones = response.data;
      });
    }
  });
