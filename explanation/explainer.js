class Explainer {
    explain(ruleName) {
      return ruleName
        ? `He utilizado la regla '${ruleName}' para responder tu consulta.`
        : '';
    }
  }
  
  module.exports = Explainer;