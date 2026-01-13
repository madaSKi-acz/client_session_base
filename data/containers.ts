import { ContainerOption } from "@/app/components/ui/Select/SelectTwo";

/**
 * SECTION: Container Data
 * This list can be easily updated or replaced with an API call later.
 */
export const CONTAINER_OPTIONS: ContainerOption[] = [
  { value: "web-srv-01", label: "Production: Web Server (Node.js)" },
  { value: "db-srv-01",  label: "Production: Database (PostgreSQL)" },
  { value: "cache-01",   label: "Staging: Redis Cache" },
  { value: "worker-01",  label: "Staging: Background Worker" },
  { value: "nginx-01",   label: "Edge: Nginx Load Balancer" },
];