import { useQuery } from "@tanstack/react-query";
import { statsService } from "../services/statsService";
import { DrillDownLevel } from "../types/stats";

export function useStats(level: DrillDownLevel, id?: string) {
  return useQuery({
    queryKey: ['stats', level, id],
    queryFn: () => {
      if (level === 'cluster') return statsService.getClusters();
      if (level === 'namespace' && id) return statsService.getNamespaces(id);
      if (level === 'pod' && id) return statsService.getPods(id);
      return Promise.resolve([]);
    },
    enabled: level === 'cluster' || !!id,
  });
}
