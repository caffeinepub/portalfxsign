import { RouterProvider, createRouter, createRoute, createRootRoute, Outlet, useRouterState } from '@tanstack/react-router';
import LandingPage from './pages/LandingPage';
import AccessPlansPage from './pages/AccessPlansPage';
import ProductsPage from './pages/ProductsPage';
import PlanSignupPage from './pages/PlanSignupPage';
import PlanSuccessPage from './pages/PlanSuccessPage';
import PlanTelegramPage from './pages/PlanTelegramPage';
import TelegramPage from './pages/TelegramPage';
import AdminUsersPage from './pages/AdminUsersPage';
import AdminHelpPage from './pages/AdminHelpPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';
import RouteTransitionOverlay from './components/RouteTransitionOverlay';
import { RouteTransitionProvider } from './hooks/useRouteTransition';
import { Toaster } from '@/components/ui/sonner';

// Layout component that wraps all pages
function Layout() {
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  return (
    <RouteTransitionProvider>
      <div className="min-h-screen flex flex-col">
        <SiteHeader />
        <main className="flex-1">
          <div key={currentPath} className="animate-fade-in">
            <Outlet />
          </div>
        </main>
        <SiteFooter />
        <Toaster />
        <RouteTransitionOverlay />
      </div>
    </RouteTransitionProvider>
  );
}

// Define routes
const rootRoute = createRootRoute({
  component: Layout,
});

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

const productsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/products',
  component: ProductsPage,
});

const planSignupRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/plans/signup',
  component: PlanSignupPage,
});

const planSuccessRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/plans/success',
  component: PlanSuccessPage,
});

const planTelegramRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/plans/telegram',
  component: PlanTelegramPage,
});

const telegramRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/telegram',
  component: TelegramPage,
});

const usersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/users',
  component: AdminUsersPage,
});

const adminHelpRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/admin-help',
  component: AdminHelpPage,
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

// Create the route tree
const routeTree = rootRoute.addChildren([
  indexRoute,
  plansRoute,
  productsRoute,
  planSignupRoute,
  planSuccessRoute,
  planTelegramRoute,
  telegramRoute,
  usersRoute,
  adminHelpRoute,
  termsRoute,
  privacyRoute,
]);

// Create the router
const router = createRouter({ routeTree });

// Register router for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
