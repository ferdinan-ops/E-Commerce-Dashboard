import * as React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

export default function QueryProvider({ children }: { children: React.ReactNode }) {
  const [queryClient] = React.useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
        retry: 1,
        staleTime: 5 * 60 * 1000
      }
    }
  }))

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
