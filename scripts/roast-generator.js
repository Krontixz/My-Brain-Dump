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
    "teachers pet",
    "bossy",
    "whiny",
    "clueless",
    "grumpy",
    "lazy",
    "greedy",
    "nosy",
    "clumsy",
    "spoiled",
    "bratty",
    "silly",
    "forgetful",
    "stubborn",
    "messy",
    "cranky",
    "sneaky",
    "rowdy",
    "show-offy"
    ];
  let randomPosition = Math.floor(Math.random() * adjectives.length);
  let pickedAdjective = adjectives[randomPosition];
  const nouns = [
    "potato",
    "godzilla",
    "brat",
    "in-n-out worker",
    "oxygen-thief",
    "instruction-manual-requirement",
    "walking-apology",
    "gene-pool-lifeguard",
    "human-cramp",
    "dropped-connection",
    "copycat",
    "crybaby",
    "scaredy-cat",
    "tattletale",
    "goofball",
    "slowpoke",
    "smarty-pants",
    "chatterbox",
    "couch-potato",
    "sore-loser",
    "space-cadet",
    "sherlock",
    "clown"
    ]
  let randomPositionNoun = Math.floor(Math.random() * nouns.length);
  let pickedNoun = nouns[randomPositionNoun];
  let combinedSentence = `You are a ${pickedAdjective} ${pickedNoun}`
  alert(`${combinedSentence}`);
}

