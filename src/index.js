export default ({ Plugin, types: t }) => {
  const returnsJSX = (node) => {
    if (t.isJSXElement(node.body)) {
      return true;
    }

    if (t.isBlockStatement(node.body)) {
      return hasJSXReturnStatement(node.body);
    }

    return false;
  };

  const hasJSXReturnStatement = (blockStatement) => {
    const [returnStatement] = blockStatement.body.filter(t.isReturnStatement);

    if (!returnStatement) {
      return;
    }

    return t.isJSXElement(returnStatement.argument);
  };

  return new Plugin('babel-plugin-functional-component-displayname', {
    visitor: {
      VariableDeclaration(node, parent, scope, file) {
        const arrowFunctions = node.declarations
          .filter(({ init }) => t.isArrowFunctionExpression(init));

        if (!arrowFunctions.length) {
          return;
        }

        const [returnsJSX] = arrowFunctions.filter(({ init }) => {
          if (t.isBlockStatement(init.body)) {
            return hasJSXReturnStatement(init.body);
          }

          return t.isJSXElement(init.body);
        });

        if (!returnsJSX) {
          return;
        }

        const name = returnsJSX.id.name.match(/temp/)
          ? file.opts.basename
          : returnsJSX.id.name;

        return [
          node,
          t.expressionStatement(
            t.assignmentExpression(
              '=',
              t.memberExpression(
                returnsJSX.id,
                t.identifier('displayName')
              ),
              t.literal(name)
            )
          )
        ];
      },

      ExportDefaultDeclaration(node, parent, scope, file) {
        if (!t.isArrowFunctionExpression(node.declaration)) {
          return;
        }

        if (!returnsJSX(node.declaration)) {
          return;
        }

        const name = scope.generateUidIdentifier('temp');

        // Pass off work to variableDeclaration with a unique identifier
        // so that visitor knows how to name things
        return [
          t.variableDeclaration(
            'const',
            [t.variableDeclarator(name, node.declaration)]
          ),
          t.exportDefaultDeclaration(name)
        ];
      }
    }
  });
}