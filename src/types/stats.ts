export interface CloudMetric {
  id: string;
  name: string;
  cpu: number;
  ram: number;
  storage: number;
  network: number;
  gpu: number;
  pv?: number;
  efficiency: number;
  total: number;
}

export type DrillDownLevel = 'cluster' | 'namespace' | 'pod';

export interface DrillDownState {
  level: DrillDownLevel;
  clusterId?: string;
  namespaceId?: string;
}
