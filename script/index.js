const messages = ['Hello', 'Oranges', 'Age'];


let longestMessage = '';
for (let i = 0; i < messages.length; i++) {
  if (messages[i].length > longestMessage.length) {
    longestMessage = messages[i];
  }
}


const longestMessageChars = longestMessage.split('');


console.log('Исходный массив:', messages);
console.log('Итоговый массив:', longestMessageChars);
