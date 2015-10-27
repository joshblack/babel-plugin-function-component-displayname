"use strict";

var StatelessComponentNoBlock = function StatelessComponentNoBlock() {
  return React.createElement("div", null);
};
StatelessComponentNoBlock.displayName = "StatelessComponentNoBlock";
var StatelessComponentBlock = function StatelessComponentBlock() {
  return React.createElement("div", null);
};
StatelessComponentBlock.displayName = "StatelessComponentBlock";
var StatelessComponentBlockNoReturn = function StatelessComponentBlockNoReturn() {
  React.createElement("div", null);
};