function checkForSpam(message) {
  const separators = [',', '?', '!', ';', ':', '.', '[', ']'];
  const regex = new RegExp(`[${separators.map(escapeRegExp).join('')}]`, 'g');
  const cleanedText = message.replace(regex, '');
  const messageArray = cleanedText.toLowerCase().split(' ');
  let result = false;

  for (let i = 0; i < messageArray.length; i++) {
    if (messageArray[i] === 'spam' || messageArray[i] === 'sale') {
      result = true;
      break;
    }
  }

  return result;
}

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& означає всі знайдені співпадіння
}

console.log(checkForSpam('Latest technology news')); // false
console.log(checkForSpam('JavaScript weekly newsletter')); // false
console.log(checkForSpam('Get best sale offers now!')); // true
console.log(checkForSpam('Amazing SalE, only tonight!')); // true
console.log(checkForSpam('Trust me, this is not a spam message')); // true
console.log(checkForSpam('Get rid of sPaM emails. Our book in on sale!')); // true
console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
