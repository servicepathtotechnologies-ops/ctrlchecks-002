import { useQuery } from '@tanstack/react-query';
import { listCredentialTypes, type CredentialTypeDefinition } from '@/lib/api/connections';

const KEY = ['credential-types'] as const;

export function useCredentialTypes() {
  return useQuery({ queryKey: KEY, queryFn: listCredentialTypes, staleTime: 5 * 60_000 });
}

export function useCredentialType(id: string): CredentialTypeDefinition | undefined {
  const { data = [] } = useCredentialTypes();
  return data.find((t) => t.id === id);
}
