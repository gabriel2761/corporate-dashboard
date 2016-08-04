'use strict';

/**
 * @ngdoc overview
 * @name corporateDashboardApp
 * @description
 * # corporateDashboardApp
 *
 * Main module of the application.
 */
var app = angular.module('corporateDashboardApp', []);

app.controller('NavbarController', function() {
    this.tab = 1;

    this.selectTab = function(tab) {
        this.tab = tab;
    };

    this.isSelected = function(tab) {
        return this.tab === tab;
    };
});
