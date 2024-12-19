import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  botName: "مساعد الرياضة",
  initialMessages: [
    createChatBotMessage(
      "مرحبًا! 👋 كيف يمكنني مساعدتك اليوم؟ يمكنك كتابة: 'خطط'، 'بروتين'، 'نصائح'، 'غذاء'، أو 'الجسم المثالي'."
    ),
  ],
};

export default config;
