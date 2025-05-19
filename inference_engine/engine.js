const fs = require('fs');
const path = require('path');

class InferenceEngine {
  constructor() {
    const data = fs.readFileSync(
      path.join(__dirname, '..', 'knowledge_base', 'rules.json'),
      'utf8'
    );
    this.rules = JSON.parse(data);
  }

  infer(text) {
    // 1. Normalizamos a minúsculas
    const input = text.toLowerCase();
    // 2. Buscamos todas las reglas que coincidan
    const matches = [];
    for (const rule of this.rules) {
      const keyword = (rule.keyword || rule.name).toLowerCase();
      if (input.includes(keyword)) {
        matches.push({ name: rule.name, response: rule.response });
      }
    }

    // 3. Si encontramos coincidencias, concatenamos respuestas
    if (matches.length > 0) {
      const combinedResponse = matches
        .map(m => m.response)
        .join('');
      const usedNames = matches.map(m => m.name);
      return { names: usedNames, response: combinedResponse };
    }

    // 4. Si no hay coincidencias, devolvemos menú
    const menu = 
`No he identificado tu intención. Puedes elegir uno de los siguientes temas:
- Tipos de modelos
- Simulación
- Bibliografía
- Cómo empezar a estudiar`;
    return { names: [], response: menu };
  }
}

module.exports = InferenceEngine;