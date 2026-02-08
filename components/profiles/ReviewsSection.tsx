import { ReviewCard } from "./ReviewCard";

const reviewText = `Fue nuestra primera vez comprando y vendiendo a la vez, e hizo todo lo posible para que todo fuera lo más sencillo posible. 
Nos llevó a ver casas cuando nos convenía, responde los mensajes rápidamente y siempre sabe qué hacer para sortear cualquier obstáculo. 
Nos dio muchos consejos durante todo el proceso y mantuvo una comunicación fluida en todo momento. 
¡No puedo decir suficientes cosas buenas! ¡Estás en excelentes manos con Carlos!`;

export const AgentReviewsSection = () => {
  return (
    <section className="space-y-6">
      <h2 className="text-xl font-semibold">Reviews (3)</h2>
      <ReviewCard
        title="Excelente Servicio"
        content={reviewText}
        author="Lisa María Hernández"
        date="20 junio 2025"
      />
      <ReviewCard
        title="Agente Conocedor"
        content={reviewText}
        author="Lisa María Hernández"
        date="20 junio 2025"
      />
      <ReviewCard
        title="Ampliamente Recomendable"
        content={reviewText}
        author="Lisa María Hernández"
        date="20 junio 2025"
      />
    </section>
  );
};
