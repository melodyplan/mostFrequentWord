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
**This is the end of the getTokens function**

Line 6 is creating a function called `mostFrequentWord` with a value named `text`.
Line 7 creates a variable called `words` that uses the getTokens function with the value
    `text` within the mostFrequentWord function. 
Line 8 creates a variable called `wordFrequencies` which equals curly brackets within the 
    mostFrequentWord function.
Line 9 creates a for loop that has three arguments: a setup, a comparison, and a change. 
    The first argument has the variable starting at index 0 (the setup), the second 
    argument compares the first argument to whether the length of the words is less than 
    or equal to i (the comparison), and the last argument says, if it is, the new 
    i = i + 1.
Line 10 introduces an if else  statement. It says if the words in [i] in wordFrequencies 
    execute what happens in line 11.
Line 11 will execute if line 10 is true. It will take words from wordFrequencies and 
    increment it. In this case, words[i] = words[i] + 1. 
Line 13 says if line 10 is NOT true, then it will execute line 14.
Line 14 says that the arrays of words[i] = 1.
**And that is the end of the mostFrequentWord function.**

Line 17 creates a variable called `currentMaxKey` which uses the Object.keys method to 
    iterate over wordFrequencies to get back the keys of the object wordFrequencies as an 
    array, starting from index 0. 
Line 18 creates a variable called `currentMaxCount` which assigns the function 
    wordFrequencies with the currentMaxKey in an array.

