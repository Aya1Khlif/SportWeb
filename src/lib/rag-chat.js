import { RAGChat } from "@upstash/rag-chat";

export const ragChat = new RAGChat({
  model: "meta-llama/Meta-Llama-3-8B-Instruct", // اختر النموذج المناسب
});
