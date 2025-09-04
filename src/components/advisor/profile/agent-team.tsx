import { Star } from "lucide-react";

interface Agent {
  id: number;
  name: string;
  experience: string;
  recentSales: string;
  rating: number;
  image: string;
}

interface AgentCardProps {
  agent: Agent;
}

const AgentCard: React.FC<AgentCardProps> = ({ agent }) => {
  return (
    <div className="bg-sidebar-accent border-sidebar-border flex items-center justify-between rounded-lg border p-4 shadow-sm transition hover:shadow-md">
      {/* Info izquierda */}
      <div className="flex items-center gap-3">
        <img
          src={agent.image}
          alt={agent.name}
          className="border-sidebar-border size-12 rounded-full border object-cover"
        />
        <div>
          <h3 className="text-sidebar-primary font-semibold">{agent.name}</h3>
          <p className="text-sidebar-foreground text-sm">{agent.experience}</p>
          <p className="text-sidebar-foreground text-sm">{agent.recentSales}</p>
        </div>
      </div>

      {/* Info derecha */}
      <div className="flex items-center gap-1">
        <span className="text-sidebar-primary text-sm font-medium">{agent.rating.toFixed(1)}</span>
        <Star size={16} className="text-ring fill-ring" />
      </div>
    </div>
  );
};

interface AgentTeamProps {
  agents: Agent[];
}

export const AgentTeam: React.FC<AgentTeamProps> = ({ agents }) => {
  return (
    <section className="my-8">
      <h2 className="text-foreground pb-4 text-base font-semibold">Conoce a Nuestro Equipo</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {agents.map((agent) => (
          <AgentCard key={agent.id} agent={agent} />
        ))}
      </div>
    </section>
  );
};
