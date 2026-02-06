import { StrictMode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider, createRouter, createRoute, createRootRoute, Outlet } from '@tanstack/react-router';
import { RouteTransitionProvider } from './hooks/useRouteTransition';
import RouteTransitionOverlay from './components/RouteTransitionOverlay';
import { Toaster } from '@/components/ui/sonner';
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';
import LandingPage from './pages/LandingPage';
import AccessPlansPage from './pages/AccessPlansPage';
import PlanSignupPage from './pages/PlanSignupPage';
import PlanLoginPage from './pages/PlanLoginPage';
import PlanPostSignupPage from './pages/PlanPostSignupPage';
import PlanProfitPage from './pages/PlanProfitPage';
import ProductsPage from './pages/ProductsPage';
import TelegramPage from './pages/TelegramPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import AdminUsersPage from './pages/AdminUsersPage';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
    },
  },
});

// Layout component with route transition support and global vector background
function RootLayout() {
  return (
    <RouteTransitionProvider>
      <div className="min-h-screen flex flex-col overflow-x-hidden app-vector-bg">
        <div className="relative z-10 min-h-screen flex flex-col">
          <SiteHeader />
          <main className="flex-1">
            <Outlet />
          </main>
          <SiteFooter />
        </div>
      </div>
      <RouteTransitionOverlay />
    </RouteTransitionProvider>
  );
}

// Root route with layout
const rootRoute = createRootRoute({
  component: RootLayout,
});

// Define routes
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: LandingPage,
});

const plansRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/plans',
  component: AccessPlansPage,
});

const planSignupRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/plans/signup',
  component: PlanSignupPage,
});

const planLoginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/plans/login',
  component: PlanLoginPage,
});

const planPostSignupRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/plans/post-signup',
  component: PlanPostSignupPage,
});

const planProfitRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/plans/profit',
  component: PlanProfitPage,
});

const productsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/products',
  component: ProductsPage,
});

const telegramRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/telegram',
  component: TelegramPage,
});

const termsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/terms',
  component: TermsPage,
});

const privacyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/privacy',
  component: PrivacyPage,
});

const usersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/users',
  component: AdminUsersPage,
});

// Create route tree
const routeTree = rootRoute.addChildren([
  indexRoute,
  plansRoute,
  planSignupRoute,
  planLoginRoute,
  planPostSignupRoute,
  planProfitRoute,
  productsRoute,
  telegramRoute,
  termsRoute,
  privacyRoute,
  usersRoute,
]);

// Create router
const router = createRouter({ routeTree });

// Register router type
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <Toaster />
      </QueryClientProvider>
    </StrictMode>
  );
}
