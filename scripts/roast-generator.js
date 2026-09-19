function roastGenerator() {
  const adjectives = [
    "stupid",
    "ugly",
    "stinky",
    "dumb",
    "poopy",
    "disgusting",
    "dispicable",
    "ai slop",
    "life is a mistake",
    "death luma",
    "built like king kong",
    "big eared elf",
    "teachers pet"
    ];
  let randomPosition = Math.floor(Math.random() * adjectives.length);
  let pickedAdjective = adjectives[randomPosition];
  const nouns = [
    "potato",
    "godzilla",
    "brat",
    "in-n-out worker"
    ]
  let randomPositionNoun = Math.floor(Math.random() * nouns.length);
  let pickedNoun = adjectives[randomPositionNoun];
  let combinedSentence = `You are a ${pickedAdjective} ${pickedNoun}`
  alert(`${combinedSentence}`);
}

