import React, { FC } from 'react'
import Router from './router'
import ErrorBoundary from '../components/hocs/error-boundary'
import { MediaStateProvider, NavStateProvider } from '@reapit/elements'
import { QueryClient, QueryClientProvider } from 'react-query'
import '@reapit/elements/dist/index.css'

const queryClient = new QueryClient()

const App: FC = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <NavStateProvider>
        <MediaStateProvider>
          <Router />
        </MediaStateProvider>
      </NavStateProvider>
    </QueryClientProvider>
  </ErrorBoundary>
)

export default App
