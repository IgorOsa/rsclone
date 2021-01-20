import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "Courses": "Courses",
          "Login": "Login",
          "Sign up": "Sign up",
          "Select Language": "Select Language",
          "introTitle": "The fastest way to learn a language",
          "introDescription": "The key? A natural approach to learning real-life language. Jump in and give it a go!",
          "introLink": "Get Started",
          "studentsTitle": "Done by:",
          "coursesIntroTitle": "Learn up to 22 languages online with Memorio",
          "coursesIntroDescription": "Preparing for a trip, moving to a new country or ooking to advance your career? Whatever your next adventure is, one of our courses will teach you all the real-life language you need to get out there and meet the world.",
          "coursesIntroLink": "Start Learning",
          "loginFormLogin": "Login",
          "loginFormLoginPs": "Enter login",
          "loginFormPassword": "Password",
          "loginFormPasswordPs": "Password",
          "loginSubmit": "Submit",
          "My lang is": "My lang is",
          "Russian": "Russian",
          "English": "English",
          "I want to learn": "I want to learn",
          "Spanish": "Spanish",
          "iconLang": "assets/united-kingdom-icon.svg",
<<<<<<< HEAD
          "registrationFormName": "Your Name",
          "registrationFormLogin": "Create a login...",
          "registrationFormPassword": "Create a password...",
          "Name": "Name",
          "Password": "Password",
          "Register": "Register",
          "Cant be empty": "Cant be empty",
          "TooShort": "At least 4 characters"
=======
          "Dashboard": "Dashboard",
          "Logout": "Logout",
          "Repeat": "Repeat",
>>>>>>> 937e8dd795ffcd9126bc188ad3393deae470f643
        }
      },
      ru: {
        translation: {
          "Courses": "Курсы",
          "Login": "Логин",
          "Sign up": "Регистрация",
          "Select Language": "Выбрать язык",
          "introTitle": "Самый быстрый способ выучить язык",
          "introDescription": "В чем секрет? Естественный подход к изучению современного языка. Присоединяйся!",
          "introLink": "Начать!",
          "studentsTitle": "Подготовили:",
          "coursesIntroTitle": "Учи языки онлайн вместе с Memorio",
          "coursesIntroDescription": "Готовишься к путешествию, переезжаешь в новую страну или хочешь продвинуться по карьерной лестнице? Какой бы ни была твоя мотивация, с одним из наших курсов ты выучишь настоящий живой язык, на котором говорят в выбранной тобой стране.",
          "coursesIntroLink": "Начинай учиться",
          "loginFormLogin": "Логин",
          "loginFormLoginPs": "Ваш логин",
          "loginFormPassword": "Пароль",
          "loginFormPasswordPs": "Пароль",
          "loginSubmit": "Вход",
          "My lang is": "Мой язык",
          "Russian": "Русский",
          "English": "Английский",
          "I want to learn": "Я хочу выучить",
          "Spanish": "Испанский",
          "iconLang": "assets/russia-icon.svg",
<<<<<<< HEAD
          "registrationFormName": "Ваше имя",
          "registrationFormLogin": "Придумайте логин...",
          "registrationFormPassword": "Придумайте пароль...",
          "Name": "Имя",
          "Password": "Пароль",
          "Register": "Зарегистрироваться",
          "Cant be empty": "Это поле обязательное",
          "TooShort": "Минимум 4 символа латиницей"
=======
          "Dashboard": "Главная",
          "Logout": "Выход",
          "Repeat": "Повторение",
>>>>>>> 937e8dd795ffcd9126bc188ad3393deae470f643
        }
      },
    },
    // lng: "en",
    // fallbackLng: "en",

    interpolation: {
      escapeValue: false
    }
  });
