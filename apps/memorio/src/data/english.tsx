const levels: any = [
  {
    title: 'Числа от 0 до 9',
    task: [
      {id: 0, title: 'Hoль', answer: 'zero', test: ['zero', 'three']},
      {id: 1, title: 'Один', answer: 'one', test: ['one', 'three']},
      {id: 2, title: 'Два', answer: 'two'},
      {id: 3, title: 'Три', answer: 'three', test: ['one', 'three']},
      {id: 4, title: 'Четыре', answer: 'four'},
      {id: 5, title: 'Пять', answer: 'five', test: ['one', 'three', 'five']},
      {id: 6, title: 'Шесть', answer: 'six'},
      {id: 7, title: 'Семь', answer: 'seven'},
      {id: 8, title: 'Восемь', answer: 'eight'},
      {id: 9, title: 'Девять', answer: 'nine', test: ['one', 'three', 'nine']}
    ]
  },
  {
    title: 'Еда',
    task: [
      {id: 0, title: 'food', answer: 'еда; пища', test: ['zero', 'three']},
      {id: 1, title: 'a meal', answer: 'еда (один приём)', test: ['one', 'three']},
      {id: 2, title: 'bread', answer: 'хлеб'},
      {id: 3, title: 'pasta', answer: 'паста', test: ['one', 'three']},
      {id: 4, title: 'rice', answer: 'рис'},
      {id: 5, title: 'a potato', answer: 'картошка', test: ['one', 'three', 'five']},
      {id: 6, title: 'a vegetable', answer: 'овощ'},
      {id: 7, title: 'fruit', answer: 'фрукт'},
      {id: 8, title: 'meat', answer: 'мясо'},
      {id: 9, title: 'salad', answer: 'салат', test: ['one', 'three', 'nine']},
      {id: 10, title: 'an apple', answer: 'яблоко', test: ['zero', 'three']},
      {id: 10, title: 'a banana', answer: 'банан', test: ['one', 'three']},
      {id: 12, title: 'an orange', answer: 'апельсин'},
      {id: 13, title: 'a lemon', answer: 'лимон', test: ['one', 'three']},
      {id: 14, title: 'a snack', answer: 'перекус'},
      {id: 15, title: 'soup', answer: 'суп', test: ['one', 'three', 'five']},
      {id: 16, title: 'an egg', answer: 'яйцо'},
      {id: 17, title: 'cheese', answer: 'сыр'},
      {id: 18, title: 'chicken', answer: 'курица'},
      {id: 19, title: 'pork', answer: 'свинина', test: ['one', 'three', 'nine']},
      {id: 20, title: 'beef', answer: 'говядина'},
      {id: 21, title: 'fish', answer: 'рыба', test: ['one', 'three', 'nine']}
    ]
  },
  {
    title: 'Что тебе нравится?',
    task: [
      {id: 0, title: 'it', answer: 'оно; он; она; это', test: ['zero', 'three']},
      {id: 1, title: 'it is', answer: 'оно (есть)', test: ['one', 'three']},
      {id: 2, title: 'to like', answer: 'нравиться'},
      {id: 3, title: 'delicious', answer: 'очень вкусный', test: ['one', 'three']},
      {id: 4, title: 'disgusting', answer: 'отвратительный'},
      {id: 5, title: 'awesome', answer: 'потрясающий', test: ['one', 'three', 'five']},
      {id: 6, title: 'to do', answer: 'делать'},
      {id: 7, title: `don't; doesn't`, answer: 'не (делать)'},
      {id: 8, title: 'and', answer: 'и'},
      {id: 9, title: 'but', answer: 'но', test: ['one', 'three', 'nine']},
      {id: 10, title: 'I like', answer: 'мне нравится', test: ['one', 'three', 'nine']},
      {id: 11, title: `it's delicious`, answer: 'это очень вкусно', test: ['one', 'three', 'nine']},
      {id: 12, title: 'coffee is delicious', answer: 'кофе - очень вкусный', test: ['one', 'three', 'nine']},
      {id: 13, title: 'I like tea and coffee', answer: 'мне нравятся чай и кофе', test: ['one', 'three', 'nine']}
    ]
  },
  {
    title: 'Я - человек',
    task: [
      {id: 0, title: 'happy', answer: 'счастливый', test: ['zero', 'three']},
      {id: 1, title: 'sad', answer: 'грустный', test: ['one', 'three']},
      {id: 2, title: 'angry', answer: 'злой'},
      {id: 3, title: 'wrong', answer: 'неправильный', test: ['one', 'three']},
      {id: 4, title: 'right', answer: 'правильный; правильно; направо'},
      {id: 5, title: 'tired', answer: 'усталый', test: ['one', 'three', 'five']},
      {id: 6, title: 'sick', answer: 'больной'},
      {id: 7, title: 'hungry', answer: 'голодный'},
      {id: 8, title: 'thirsty', answer: 'испытывающий жажду'},
      {id: 9, title: 'a little; a bit', answer: 'немного; чуть-чуть', test: ['one', 'three', 'nine']},
      {id: 10, title: 'I like', answer: 'мне нравится', test: ['one', 'three', 'nine']},
      {id: 11, title: `not`, answer: 'не (используется с глаголами)', test: ['one', 'three', 'nine']},
      {id: 12, title: `I'm tired`, answer: 'я устал', test: ['one', 'three', 'nine']},
      {id: 13, title: `I'm not tired`, answer: 'я не устал', test: ['one', 'three', 'nine']},
      {id: 14, title: `you're sick`, answer: 'ты болен', test: ['one', 'three', 'nine']},
      {id: 15, title: 'are you hungry?', answer: 'ты голоден?', test: ['one', 'three', 'nine']},
      {id: 16, title: `I'm very thirsty`, answer: 'я очень хочу пить', test: ['one', 'three', 'nine']},
      {id: 17, title: `I'm a little thirsty`, answer: 'я немного хочу пить', test: ['one', 'three', 'nine']},
      {id: 18, title: `you're right`, answer: 'ты прав', test: ['one', 'three', 'nine']}
    ]
  },
  {
    title: 'Нужные фразы',
    task: [
      {id: 0, title: 'to need', answer: 'zero', test: ['zero', 'three']},
      {id: 1, title: 'help', answer: 'one', test: ['one', 'three']},
      {id: 2, title: 'I need help', answer: 'two'},
      {id: 3, title: 'to say', answer: 'three', test: ['one', 'three']},
      {id: 4, title: 'how do you say ... in English?', answer: 'four'},
      {id: 5, title: 'to mean', answer: 'five', test: ['one', 'three', 'five']},
      {id: 6, title: 'what does ... mean?', answer: 'six'},
      {id: 7, title: 'this', answer: 'seven'},
      {id: 8, title: 'that', answer: 'eight'},
      {id: 9, title: `what's that?`, answer: 'nine', test: ['one', 'three', 'nine']},
      {id: 10, title: 'to know', answer: 'знать', test: ['zero', 'three']},
      {id: 11, title: `I don't know`, answer: 'я не знаю', test: ['one', 'three']},
      {id: 12, title: 'to understand', answer: 'понимать'},
      {id: 13, title: `I don't understand`, answer: 'я не понимаю', test: ['one', 'three']},
      {id: 14, title: 'do you understand?', answer: 'ты понимаешь?'},
      {id: 15, title: 'of course!', answer: 'конечно!', test: ['one', 'three', 'five']},
      {id: 16, title: 'me too', answer: 'я тоже'},
      {id: 17, title: 'me neither', answer: 'я тоже нет'},
      {id: 18, title: 'to meet', answer: 'познакомиться'},
      {id: 19, title: 'nice to meet you', answer: 'приятно познакомиться', test: ['one', 'three', 'nine']},
      {id: 20, title: 'great', answer: 'отличный', test: ['zero', 'three']},
      {id: 21, title: `that's great!`, answer: 'отлично!', test: ['one', 'three']},
      {id: 22, title: 'happy to help', answer: 'рад помочь'},
      {id: 23, title: 'here', answer: 'тут', test: ['one', 'three']},
      {id: 24, title: 'here you go', answer: 'тhere you go'},
      {id: 25, title: 'welcome!', answer: 'добро пожаловать!!', test: ['one', 'three', 'five']},
      {id: 26, title: `you're welcome`, answer: 'пожалуйста; на здоровье'},
      {id: 27, title: 'luck', answer: 'удача'},
      {id: 28, title: 'good luck!', answer: 'удачи!'}
    ]
  }
]

export default levels
