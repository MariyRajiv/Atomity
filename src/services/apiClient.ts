import { CloudMetric } from "../types/stats";

const BASE_URL = "https://dummyjson.com";

export const apiClient = {
  get: async <T>(path: string): Promise<T> => {
    const response = await fetch(`${BASE_URL}${path}`);
    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }
    return response.json();
  },
};

// Helper to map dummy data to our cloud metrics
export const mapToCloudMetrics = (items: any[], prefix: string): CloudMetric[] => {
  return items.map((item, index) => ({
    id: `${prefix}-${item.id || index}`,
    name: `${prefix} ${String.fromCharCode(65 + index)}`,
    cpu: Math.floor(Math.random() * 5000) + 500,
    ram: Math.floor(Math.random() * 3000) + 200,
    storage: Math.floor(Math.random() * 1000) + 50,
    network: Math.floor(Math.random() * 800) + 20,
    gpu: Math.random() > 0.7 ? Math.floor(Math.random() * 1000) : 0,
    efficiency: Math.floor(Math.random() * 40) + 60,
    total: 0, // Calculated below
  })).map(metric => ({
    ...metric,
    total: metric.cpu + metric.ram + metric.storage + metric.network + metric.gpu
  }));
};
