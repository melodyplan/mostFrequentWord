function getTokens(rawString) {
  // NB: `.filter(Boolean)` removes any falsy items from an array
  return rawString.toLowerCase().split(/[ ,!.";:-]+/).filter(Boolean).sort();
}
  
function mostFrequentWord(text) {
  var words = getTokens(text);
  var wordFrequencies = {};
  for (var i = 0; i <= words.length; i++) {
    if (words[i] in wordFrequencies) {
      wordFrequencies[words[i]]++;
    }
    else {
      wordFrequencies[words[i]]=1;
    }
  }
  var currentMaxKey = Object.keys(wordFrequencies)[0];
  var currentMaxCount = wordFrequencies[currentMaxKey];
  
  for (var word in wordFrequencies) {
    if (wordFrequencies[word] > currentMaxCount) {
      currentMaxKey = word;
      currentMaxCount = wordFrequencies[word];
    }
  }
  return currentMaxKey;
}

/*

Line 1 is creating a function called `getTokens` with a value named `rawString`.
Line 2 is a comment the original programmer left for people trying to read their code. 
    For this one the OP wrote that `.filter(Boolean)` removes any false (or non-true) 
    item from an array.
Line 3 returns the value to a lower case format and splits what was input according to 
    certain special characters, in this case it is specifying the characters forward 
    slash and the open bracket (plus a space)`/[ ` is what will be used for the 
    separating string. The second parameter is the limit, which specifies the number of 
    splits, until the number of split items match the limit or until the string falls 
    short of the separator. In this case, every time `!.”;:-]` + `/` (actually I wasn't
    sure if it was `!.";:-]+/` or `!.";:-] + `/``) comes up, there will be a split.
    Then it removes the falsy items from the array and sorts it. Since there was no sort 
    comparison given, the array is sorted according to unicode code point value.
