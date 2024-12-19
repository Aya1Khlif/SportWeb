class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
  
    handleWorkoutPlans = () => {
      const message = this.createChatBotMessage(
        "إليك خطط رياضية مقترحة: 🏋️‍♀️\n" +
        "- خطة المبتدئين: تمارين خفيفة لمدة 20 دقيقة.\n" +
        "- خطة متوسطة: تمارين قوة وتمدد لمدة 40 دقيقة.\n" +
        "- خطة متقدمة: تمارين مكثفة لمدة ساعة كاملة.\n" +
        "- تمارين HIIT: لتحسين اللياقة في وقت قصير."
      );
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    };
  
    handleProteinBenefits = () => {
      const message = this.createChatBotMessage(
        "فوائد البروتين: 💪\n" +
        "- يساعد في بناء العضلات.\n" +
        "- يسرع عملية الاستشفاء بعد التمارين.\n" +
        "- يحافظ على صحة الأنسجة.\n" +
        "- يقلل من الشهية.\n" +
        "- يوفر طاقة مستدامة للجسم."
      );
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    };
  
    handleHealthTips = () => {
      const message = this.createChatBotMessage(
        "نصائح صحية: 🍎\n" +
        "- اشرب كمية كافية من الماء يوميًا.\n" +
        "- تناول وجبات متوازنة تحتوي على الخضروات والبروتين.\n" +
        "- مارس الرياضة بانتظام.\n" +
        "- خذ قسطًا كافيًا من النوم يوميًا.\n" +
        "- تجنب التوتر واحرص على الاسترخاء."
      );
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    };
  
    handleDietTips = () => {
      const message = this.createChatBotMessage(
        "نصائح غذائية: 🥗\n" +
        "- تناول الفواكه والخضروات يوميًا.\n" +
        "- قلل من تناول السكريات والدهون المشبعة.\n" +
        "- تناول وجبات صغيرة ومتكررة.\n" +
        "- احرص على تناول الكربوهيدرات المعقدة."
      );
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    };
  
    handleIdealBody = () => {
      const message = this.createChatBotMessage(
        "خطوات تحقيق الجسم المثالي: 🏆\n" +
        "- ممارسة الرياضة بشكل منتظم.\n" +
        "- تناول نظام غذائي صحي ومتوازن.\n" +
        "- الحفاظ على الترطيب وشرب الماء.\n" +
        "- الاستمرار والصبر لتحقيق النتائج."
      );
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    };
  
    handleUnknown = () => {
      const message = this.createChatBotMessage(
        "عذرًا، لم أفهم سؤالك. جرب كتابة أحد الخيارات التالية: 'خطط'، 'بروتين'، 'نصائح'، 'غذاء'، أو 'الجسم المثالي'."
      );
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    };
  }
  
  export default ActionProvider;
  