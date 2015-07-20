'use strict';

angular.module('todoApp', [])
    .controller('todoController', function ($scope) {
        $scope.todos = ['Task 1', 'Task 2', 'Task 3'];
        $scope.addTodo = function () {
            $scope.todos.push($scope.todo);
            $scope.todo = '';
        };
        $scope.removeTodo = function (index) {
            $scope.todos.splice(index, 1);
        };
    });