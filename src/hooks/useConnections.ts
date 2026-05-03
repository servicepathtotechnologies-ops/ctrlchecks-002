import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  listConnections,
  createConnection,
  updateConnection,
  deleteConnection,
  testConnection,
  type ConnectionRecord,
} from '@/lib/api/connections';

const KEY = ['connections'] as const;

export function useConnections() {
  return useQuery({ queryKey: KEY, queryFn: listConnections });
}

export function useCreateConnection() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: createConnection,
    onSuccess: () => qc.invalidateQueries({ queryKey: KEY }),
  });
}

export function useUpdateConnection() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ id, patch }: { id: string; patch: Parameters<typeof updateConnection>[1] }) =>
      updateConnection(id, patch),
    onSuccess: () => qc.invalidateQueries({ queryKey: KEY }),
  });
}

export function useDeleteConnection() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => deleteConnection(id),
    onSuccess: () => qc.invalidateQueries({ queryKey: KEY }),
  });
}

export function useTestConnection() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => testConnection(id),
    onSuccess: () => qc.invalidateQueries({ queryKey: KEY }),
  });
}

export function useConnectionsByProvider(provider: string): ConnectionRecord[] {
  const { data = [] } = useConnections();
  return data.filter((c) => c.provider === provider);
}

export function useConnectionsByCredentialType(credentialTypeId: string): ConnectionRecord[] {
  const { data = [] } = useConnections();
  return data.filter((c) => c.credentialTypeId === credentialTypeId);
}
