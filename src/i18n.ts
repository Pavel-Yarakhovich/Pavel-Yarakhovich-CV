import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

let chosenLang = "en";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en: {
        translation: {
          about_me: "About me",
          my_toolkit: "My toolkit",
          me_developer: "Me as a developer",
          me_person: "Me as a person",
          contacts: "Contacts",
          check_my_stack: "Would you like to check if my stack suits your current needs?",
          select: "Select...",
          contact_me: "Feel free to contact me",
          write_me_a_message: "Should you have an interesting proposition to me or you would like to give me an advice feel free to send me a message which I'll respond for sure",
          enter_your_message: "Enter Your Message",
          disclaimer: "I only respond messages I've received. If you ever get a message from me which does not deal with yours previously sent one, please block me.",
          send: "Send",
          pavel: "Pavel",
          yarakhovich: "Yarakhovich",
          repositories: "Repositories",
        },
      },
      ru: {
        translation: {
          about_me: "Обо мне",
          my_toolkit: "Мой стэк",
          me_developer: "Я - разработчик",
          me_person: "Я - человек",
          contacts: "Контакты",
          check_my_stack: "Проверите, на сколько мой стэк сопоставим с вашими запросами?",
          select: "Выбирайте...",
          contact_me: "Мои контакты",
          write_me_a_message: "Если у вас есть интересное предложение или вы желаете поделиться советом, напишите мне - я с благодарностью отвечу",
          enter_your_message: "Введите Ваше Сообщение",
          disclaimer: "Я отвечаю только на полученные сообщения. Если вы получили письмо от меня, но ранее мне ничего не писали, ничего не отвечайте.",
          send: "Отправить",
          pavel: "Павел",
          yarakhovich: "Ярохович",
          repositories: "Репозитории",
        },
      },
    },
    lng: chosenLang,
    fallbackLng: "en",

    interpolation: {
      escapeValue: false,
    },
  });

i18n.on("languageChanged", function (lang) {
  chosenLang = lang;
});

export default i18n;
