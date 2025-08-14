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
    <div className="flex items-center justify-between p-4 border rounded-lg shadow-sm hover:shadow-md transition bg-sidebar-accent border-sidebar-border">
      {/* Info izquierda */}
      <div className="flex items-center gap-3">
        <img
          src={agent.image}
          alt={agent.name}
          className="w-12 h-12 rounded-full object-cover border border-sidebar-border"
        />
        <div>
          <h3 className="font-semibold text-sidebar-primary">{agent.name}</h3>
          <p className="text-sm text-sidebar-foreground">{agent.experience}</p>
          <p className="text-sm text-sidebar-foreground">{agent.recentSales}</p>
        </div>
      </div>

      {/* Info derecha */}
      <div className="flex items-center gap-1">
        <span className="text-sm font-medium text-sidebar-primary">
          {agent.rating.toFixed(1)}
        </span>
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
      <h2 className="text-base font-semibold text-foreground pb-4">
        Conoce a Nuestro Equipo
      </h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {agents.map((agent) => (
          <AgentCard key={agent.id} agent={agent} />
        ))}
      </div>
    </section>
  );
};
