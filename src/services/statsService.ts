import { apiClient, mapToCloudMetrics } from "./apiClient";
import { CloudMetric } from "../types/stats";

export const statsService = {
  getClusters: async (): Promise<CloudMetric[]> => {
    // Data from Image 2
    return [
      { id: 'cluster-a', name: 'Cluster A', cpu: 2463, ram: 1368, storage: 246, network: 307, gpu: 821, efficiency: 10, total: 6867 },
      { id: 'cluster-b', name: 'Cluster B', cpu: 2127, ram: 1181, storage: 212, network: 265, gpu: 0, efficiency: 28, total: 5574 },
      { id: 'cluster-c', name: 'Cluster C', cpu: 1733, ram: 962, storage: 173, network: 216, gpu: 577, efficiency: 15, total: 4664 },
      { id: 'cluster-d', name: 'Cluster D', cpu: 1171, ram: 651, storage: 116, network: 146, gpu: 0, efficiency: 48, total: 2447 },
    ];
  },
  
  getNamespaces: async (clusterId: string): Promise<CloudMetric[]> => {
    // Data from Image 3 (for Cluster A)
    if (clusterId === 'cluster-a') {
      return [
        { id: 'ns-a', name: 'Namespace A', cpu: 1231, ram: 684, storage: 123, network: 153, gpu: 410, efficiency: 5, total: 3433 },
        { id: 'ns-b', name: 'Namespace B', cpu: 739, ram: 410, storage: 73, network: 92, gpu: 246, efficiency: 20, total: 2060 },
        { id: 'ns-c', name: 'Namespace C', cpu: 369, ram: 205, storage: 36, network: 46, gpu: 123, efficiency: 50, total: 1030 },
        { id: 'ns-d', name: 'Namespace D', cpu: 123, ram: 68, storage: 12, network: 15, gpu: 41, efficiency: 40, total: 343 },
      ];
    }
    const data = await apiClient.get<{ products: any[] }>(`/products?limit=4&skip=10`);
    return mapToCloudMetrics(data.products, "Namespace");
  },

  getPods: async (namespaceId: string): Promise<CloudMetric[]> => {
    const data = await apiClient.get<{ products: any[] }>(`/products?limit=4&skip=20`);
    return mapToCloudMetrics(data.products, "Pod");
  }
};
