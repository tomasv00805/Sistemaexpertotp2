const express = require('express');
const router = express.Router();
const InferenceEngine = require('../../inference_engine/engine');
const WorkingMemory = require('../../working_memory/memory');
const Explainer = require('../../explanation/explainer');

const engine = new InferenceEngine();
const memory = new WorkingMemory();
const explainer = new Explainer();

router.post('/', (req, res) => {
  const { question } = req.body;
  const result = engine.infer(question);
  const { names, response } = result;

  // Registrar en memoria de trabajo cada regla activada
  names.forEach(name => memory.record(question, name));

  // Explicación: si hay varias reglas usadas
  const explanation = names.length > 0
    ? `He utilizado las reglas: ${names.join(', ')}.`
    : '';

  res.json({ answer: response, explanation });
});

module.exports = router;