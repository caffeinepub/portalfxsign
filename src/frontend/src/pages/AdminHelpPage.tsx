import { ExternalLink, Shield, Key, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import GreenSectionCard from '@/components/GreenSectionCard';

export default function AdminHelpPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <GreenSectionCard className="mb-8">
        <div className="text-center space-y-4 py-8">
          <div className="w-20 h-20 mx-auto rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
            <Shield className="w-10 h-10 text-emerald-600 dark:text-emerald-400" />
          </div>
          <h1 className="text-4xl font-bold">Admin Access Help</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn how to access the admin-only user list using Internet Identity
          </p>
        </div>
      </GreenSectionCard>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Key className="w-5 h-5 text-emerald-600" />
              Step 1: Log In with Internet Identity
            </CardTitle>
            <CardDescription>
              Access the Internet Identity management page to view your Principal
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Your Internet Identity Principal is a unique identifier that proves your identity on the Internet Computer. 
              To access admin features, you need to configure this Principal in the application.
            </p>
            <Button
              asChild
              variant="outline"
              className="w-full sm:w-auto"
            >
              <a
                href="https://id.ai/manage"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Open Internet Identity Manager
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              Step 2: Find Your Principal
            </CardTitle>
            <CardDescription>
              Locate and copy your Principal ID from the Internet Identity page
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
              <li>After logging in to Internet Identity, you'll see your account details</li>
              <li>Look for your Principal ID (a long string of letters, numbers, and dashes)</li>
              <li>Copy this Principal ID - you'll need it for the next step</li>
            </ol>
            <Alert>
              <AlertDescription>
                Your Principal looks like: <code className="text-xs">w7x7r-cok77-xa...</code>
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-emerald-600" />
              Step 3: Configure Admin Access
            </CardTitle>
            <CardDescription>
              Set your Principal as the admin in the application configuration
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              The admin Principal is configured in the file:
            </p>
            <div className="bg-muted p-4 rounded-lg">
              <code className="text-sm font-mono">frontend/src/config/admin.ts</code>
            </div>
            <p className="text-sm text-muted-foreground">
              Replace the placeholder value with your Principal ID. After updating this file and redeploying, 
              you'll be able to access the admin user list at <code className="text-xs">/users</code>.
            </p>
            <Alert>
              <AlertDescription>
                <strong>Important:</strong> The Principal shown on the Access Denied screen must exactly match 
                the value configured in <code className="text-xs">admin.ts</code> for access to be granted.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        <Card className="border-emerald-200 dark:border-emerald-800">
          <CardHeader>
            <CardTitle className="text-emerald-600 dark:text-emerald-400">Need More Help?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              If you're still having trouble accessing the admin area:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
              <li>Make sure you're logged in with the correct Internet Identity</li>
              <li>Verify the Principal ID is copied exactly (no extra spaces)</li>
              <li>Check that the application has been redeployed after updating the config</li>
              <li>Try logging out and logging back in after configuration changes</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
