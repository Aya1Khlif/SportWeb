const HelpOptions = ({ actionProvider }) => {
    return (
      <div>
        <button onClick={actionProvider.handleFitnessBenefits}>
          {localStorage.getItem("language") === "ar" ? "فوائد اللياقة البدنية" : "Fitness Benefits"}
        </button>
        <button onClick={actionProvider.handleDietTips}>
          {localStorage.getItem("language") === "ar" ? "نصائح غذائية" : "Diet Tips"}
        </button>
        <button onClick={actionProvider.handleIdealBody}>
          {localStorage.getItem("language") === "ar" ? "الجسم المثالي" : "Ideal Body"}
        </button>
        <button onClick={actionProvider.handleSportsInfo}>
          {localStorage.getItem("language") === "ar" ? "معلومات رياضية" : "Sports Info"}
        </button>
      </div>
    );
  };
  