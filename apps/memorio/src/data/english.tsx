const levels: any = [
  {
    title: 'Числа от 0 до 9',
    task: [
      {id: 0, title: 'Hoль', answer: 'zero', audio: 'zero.mp3',test: ['zero', 'three', 'four', 'five']},
      {id: 1, title: 'Один', answer: 'one', audio: 'one.mp3',test: ['one', 'three', 'zero', 'five']},
      {id: 2, title: 'Два', answer: 'two', audio: 'two.mp3',test: ['one', 'three', 'two', 'seven']},
      {id: 3, title: 'Три', answer: 'three', audio: 'three.mp3',test: ['one', 'three', 'nine', 'zero']},
      {id: 4, title: 'Четыре', answer: 'four', audio: 'four.mp3',test: ['four', 'five', 'one', 'three']},
      {id: 5, title: 'Пять', answer: 'five', audio: 'five.mp3',test: ['one', 'three', 'five', 'six']},
      {id: 6, title: 'Шесть', answer: 'six', audio: 'six.mp3',test: ['one', 'three', 'six', 'eight']},
      {id: 7, title: 'Семь', answer: 'seven', audio: 'seven.mp3',test: ['one', 'three','two', 'seven']},
      {id: 8, title: 'Восемь', answer: 'eight', audio: 'eight.mp3',test: ['one', 'three','six', 'eight']},
      {id: 9, title: 'Девять', answer: 'nine', audio: 'nine.mp3',test: ['one', 'three', 'nine', 'six']}
    ]
  },
  {
    title: 'Еда',
    task: [
      {id: 0, answer: 'food', title: 'еда; пища', audio: 'food.mp3', test: ['four', 'food', 'good', 'fish']},
      {id: 1, answer: 'a meal', title: 'еда (один приём)', audio: 'meal.mp3', test: ['a menu', 'a meal', 'meat', 'to meet']},
      {id: 2, answer: 'bread', title: 'хлеб', audio: 'bread.mp3', test: ['bread', 'bad', 'three', 'beef']},
      {id: 3, answer: 'pasta', title: 'паста', audio: 'pasta.mp3', test: ['meat', 'pasta', 'what', 'happy']},
      {id: 4, answer: 'rice', title: 'рис', audio: 'rice.mp3', test: ['luck', 'nice', 'rice', 'here']},
      {id: 5, answer: 'a potato', title: 'картошка', audio: 'potato.mp3', test: ['a potato', 'pasta', 'what', 'happy']},
      {id: 6, answer: 'a vegetable', title: 'овощ', audio: 'vegetable.mp3', test: ['a potato', 'pasta', 'a vegetable', 'happy']},
      {id: 7, answer: 'fruit', title: 'фрукт', audio: 'fruit.mp3', test: ['a potato', 'pasta', 'fruit', 'happy']},
      {id: 8, answer: 'meat', title: 'мясо', audio: 'meat.mp3', test: ['a potato', 'pasta', 'what', 'happy']},
      {id: 9, answer: 'salad', title: 'салат', audio: 'salad.mp3', test: ['one', 'three', 'nine', 'meat']},
      {id: 10, answer: 'an apple', title: 'яблоко', audio: 'apple.mp3', test: ['an apple', 'three','a potato', 'pasta']},
      {id: 11, answer: 'a banana', title: 'банан', audio: 'banana.mp3', test: ['one', 'three', 'a banana', 'potato']},
      {id: 12, answer: 'an orange', title: 'апельсин', audio: 'orange.mp3', test: ['a potato', 'an orange', 'what', 'happy']},
      {id: 13, answer: 'a lemon', title: 'лимон', audio: 'lemon.mp3', test: ['chicken', 'pasta', 'a lemon', 'happy']},
      {id: 14, answer: 'a snack', title: 'перекус', audio: 'snack.mp3', test: ['a potato', 'pasta', 'what', 'a snack']},
      {id: 15, answer: 'soup', title: 'суп', audio: 'soup.mp3', test: ['one', 'three', 'five', 'soup']},
      {id: 16, answer: 'an egg', title: 'яйцо', audio: 'egg.mp3', test: ['a potato', 'pasta', 'what', 'an egg']},
      {id: 17, answer: 'cheese', title: 'сыр', audio: 'cheese.mp3', test: ['a potato', 'cheese', 'what', 'happy']},
      {id: 18, answer: 'chicken', title: 'курица', audio: 'chicken.mp3', test: ['chicken', 'pasta', 'what', 'happy']},
      {id: 19, answer: 'pork', title: 'свинина', audio: 'pork.mp3', test: ['one', 'pork', 'three', 'nine']},
      {id: 20, answer: 'beef', title: 'говядина', audio: 'beef.mp3', test: ['beef', 'pasta', 'what', 'happy']},
      {id: 21, answer: 'fish', title: 'рыба', audio: 'fish.mp3', test: ['one', 'three', 'nine', 'fish']}
    ]
  },
  {
    title: 'Что тебе нравится?',
    task: [
      {id: 0, answer: 'it', title: 'оно; он; она; это', audio: 'it.mp3', test: ['zero', 'three', 'it', 'to like']},
      {id: 1, answer: 'it is', title: 'оно (есть)', audio: 'is.mp3', test: ['to like', 'it', 'it is', 'is']},
      {id: 2, answer: 'to like', title: 'нравиться', audio: 'like.mp3', test: ['to like', 'it', 'it is', 'is']},
      {id: 3, answer: 'delicious', title: 'очень вкусный', audio: 'delicious.mp3', test: ['one', 'delicious', 'like', 'three']},
      {id: 4, answer: 'disgusting', title: 'отвратительный', audio: 'disgusting.mp3', test: ['disgusting', 'delicious', 'like', 'three']},
      {id: 5, answer: 'awesome', title: 'потрясающий', audio: 'awesome.mp3', test: ['awesome', 'one', 'three', 'five']},
      {id: 6, answer: 'to do', title: 'делать', audio: 'to-do.mp3', test: ['to like', 'to do', 'it is', 'is']},
      {id: 7, answer: `don't; doesn't`, title: 'не (делать)', audio: `dont-doesnt.mp3`, test: ['to like', 'to do', `don't; doesn't`, 'is']},
      {id: 8, answer: 'and', title: 'и', audio: 'and.mp3', test: ['disgusting', 'and', 'like', 'three']},
      {id: 9, answer: 'but', title: 'но', audio: 'but.mp3', test: ['one', 'three', 'but', 'nine']},
      {id: 10, answer: 'I like', title: 'мне нравится', audio: 'I-like.mp3', test: ['one', 'three', 'nine', 'I like']},
      {id: 11, answer: `it's delicious`, title: 'это очень вкусно', audio: `its-delicious.mp3`, test: ['one', `it's delicious`, 'three', 'nine']},
      {id: 12, answer: 'coffee is delicious', title: 'кофе - очень вкусный', audio: 'coffee-is-delicious.mp3', test: ['coffee is delicious', 'one', 'three', 'nine']},
      {id: 13, answer: 'I like tea and coffee', title: 'мне нравятся чай и кофе', audio: 'I-like-tea-and-coffee.mp3', test: ['one', 'I like tea and coffee', 'three', 'nine']}
    ]
  },
  {
    title: 'Я - человек',
    task: [
      {id: 0, answer: 'happy', title: 'счастливый', audio: 'happy.mp3', test: ['thirsty', 'happy', 'right', 'angry']},
      {id: 1, answer: 'sad', title: 'грустный', audio: 'sad.mp3', test: ['thirsty', 'right', 'angry', 'sad']},
      {id: 2, answer: 'angry', title: 'злой', audio: 'angry.mp3', test: ['angry', 'happy', 'tired', 'wrong']},
      {id: 3, answer: 'wrong', title: 'неправильный', audio: 'wrong.mp3', test: ['tired', 'thirsty', 'wrong', 'tired']},
      {id: 4, answer: 'right', title: 'правильный; правильно; направо', audio: 'right.mp3', test: ['tired', 'thirsty', 'wrong', 'right']},
      {id: 5, answer: 'tired', title: 'усталый', audio: 'tired.mp3', test: ['right', 'happy', 'wrong', 'tired']},
      {id: 6, answer: 'sick', title: 'больной', audio: 'sick.mp3', test: ['thirsty', 'sick', 'wrong', 'hungry']},
      {id: 7, answer: 'hungry', title: 'голодный', audio: 'hungry.mp3', test: ['sad', 'hungry', 'thirsty', 'happy']},
      {id: 8, answer: 'thirsty', title: 'испытывающий жажду', audio: 'thirsty.mp3', test: ['thirsty', 'tired', 'wrong', 'right']},
      {id: 9, answer: 'a little; a bit', title: 'немного; чуть-чуть', audio: 'a-little-a-bit.mp3', test: ['happy', 'a little; a bit', 'I like', 'wrong']},
      {id: 10, answer: 'I like', title: 'мне нравится', audio: 'I-like.mp3', test: ['I like', `you're sick`, 'a little; a bit', 'thirsty']},
      {id: 11, answer: `not`, title: 'не (используется с глаголами)', audio: 'not.mp3', test: ['hungry', 'not', 'angry', 'sad']},
      {id: 12, answer: `I'm tired`, title: 'я устал', audio: `Im-tired.mp3`, test: ['thirsty', `I'm tired`, 'hungry', `I'm not tired`]},
      {id: 13, answer: `I'm not tired`, title: 'я не устал', audio: `Im-not-tired.mp3`, test: [`I'm not tired`, `you're sick`, `you're right`, '']},
      {id: 14, answer: `you're sick`, title: 'ты болен', audio: `youre-sick.mp3`, test: ['thirsty', `you're sick`, 'happy', 'are you hungry?']},
      {id: 15, answer: 'are you hungry?', title: 'ты голоден?', audio: 'are-you-hungry.mp3', test: ['are you hungry?', `you're right`, 'tired', 'food']},
      {id: 16, answer: `I'm very thirsty`, title: 'я очень хочу пить', audio: `Im-very-thirsty.mp3`, test: [`you're sick`, `I'm very thirsty`, `I'm not very thirsty`, `I'm right`]},
      {id: 17, answer: `I'm a little thirsty`, title: 'я немного хочу пить', audio: `Im-a-little-thirsty.mp3`, test: [`I'm a little thirsty`, `I'm right`, `you're right`, 'thirsty']},
      {id: 18, answer: `you're right`, title: 'ты прав', audio: `youre-right.mp3`, test: ['happy', 'sad', `you're sick`, `you're right`]}
    ]
  },
  // {
  //   title: 'Нужные фразы',
  //   task: [
  //     {id: 0, answer: 'to need', title: 'zero', test: ['to need', 'happy', 'wrong', 'tired']},
  //     {id: 1, answer: 'help', title: 'one', test: ['right', 'happy', 'help', 'tired']},
  //     {id: 2, answer: 'I need help', title: 'two', test: ['I need help', 'happy', 'to say', 'tired']},
  //     {id: 3, answer: 'to say', title: 'three', test: ['right', 'to say', 'wrong', 'tired']},
  //     {id: 5, answer: 'to mean', title: 'five', test: ['right', 'happy', 'wrong', 'tired']},
  //     {id: 6, answer: 'what does ... mean?', title: 'six'},
  //     {id: 7, answer: 'this', title: 'это', test: ['right', 'happy', 'wrong', 'tired']},
  //     {id: 8, answer: 'that', title: 'тот', test: ['right', 'happy', 'wrong', 'tired']},
  //     {id: 9, answer: `what's that?`, title: 'nine', test: ['one', 'three', 'nine']},
  //     {id: 10, answer: 'to know', title: 'знать', test: ['right', 'happy', 'wrong', 'tired']},
  //     {id: 11, answer: `I don't know`, title: 'я не знаю', test: ['right', 'happy', 'wrong', 'tired']},
  //     {id: 12, answer: 'to understand', title: 'понимать', test: ['right', 'happy', 'wrong', 'tired']},
  //     {id: 13, answer: `I don't understand`, title: 'я не понимаю', test: ['right', 'happy', 'wrong', 'tired']},
  //     {id: 14, answer: 'do you understand?', title: 'ты понимаешь?', test: ['right', 'happy', 'wrong', 'tired']},
  //     {id: 15, answer: 'of course!', title: 'конечно!', test: ['right', 'happy', 'wrong', 'tired']},
  //     {id: 16, answer: 'me too', title: 'я тоже'},
  //     {id: 17, answer: 'me neither', title: 'я тоже нет'},
  //     {id: 18, answer: 'to meet', title: 'познакомиться'},
  //     {id: 19, answer: 'nice to meet you', title: 'приятно познакомиться', test: ['one', 'three', 'nine']},
  //     {id: 20, answer: 'great', title: 'отличный', test: ['right', 'happy', 'wrong', 'tired']},
  //     {id: 21, answer: `that's great!`, title: 'отлично!', test: ['right', 'happy', 'wrong', 'tired']},
  //     {id: 22, answer: 'happy to help', title: 'рад помочь'},
  //     {id: 23, answer: 'here', title: 'тут', test: ['right', 'happy', 'wrong', 'tired']},
  //     {id: 24, answer: 'here you go', title: 'тhere you go'},
  //     {id: 25, answer: 'welcome!', title: 'добро пожаловать!!', test: ['right', 'happy', 'wrong', 'tired']},
  //     {id: 26, answer: `you're welcome`, title: 'пожалуйста; на здоровье'},
  //     {id: 27, answer: 'luck', title: 'удача'},
  //     {id: 28, answer: 'good luck!', title: 'удачи!'}
  //   ]
  // }
]

export default levels
