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

var StatelessComponentProps = function StatelessComponentProps(props) {
  return React.createElement("div", props);
};

StatelessComponentProps.displayName = "StatelessComponentProps";
var StatelessComponentDestrucProps = function StatelessComponentDestrucProps(_ref) {
  var foo = _ref.foo;
  return React.createElement("div", { foo: foo });
};

StatelessComponentDestrucProps.displayName = "StatelessComponentDestrucProps";
var StatelessWithContext = function StatelessWithContext() {
  return React.createElement("div", null);
};

StatelessWithContext.displayName = "StatelessWithContext";
Stateless.contextTypes = {
  foo: PropTypes.string
};