import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';
import { useCreateAccount } from '../hooks/useQueries';

interface GetStartedFormProps {
  onSuccess?: () => void;
}

export default function GetStartedForm({ onSuccess }: GetStartedFormProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const createAccountMutation = useCreateAccount();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.fullName || !formData.email || !formData.password) {
      toast.error('Please fill in all fields');
      return;
    }

    if (formData.password.length < 8) {
      toast.error('Password must be at least 8 characters');
      return;
    }

    setIsSubmitting(true);

    try {
      // Create account in backend
      await createAccountMutation.mutateAsync({
        name: formData.fullName,
        email: formData.email,
        password: formData.password,
        planId: null,
      });

      // Small delay to show the button spinner, then trigger navigation
      setTimeout(() => {
        if (onSuccess) {
          onSuccess();
        } else {
          toast.success('Account created successfully! Welcome to TelsFX.');
          setFormData({ fullName: '', email: '', password: '' });
          setIsSubmitting(false);
        }
      }, 300);
    } catch (error: any) {
      toast.error(error.message || 'Failed to create account. Please try again.');
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="fullName" className="text-base">Full Name</Label>
        <Input
          id="fullName"
          type="text"
          placeholder="Enter your full name"
          value={formData.fullName}
          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          className="h-12 text-base"
          disabled={isSubmitting}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-base">Email Address</Label>
        <Input
          id="email"
          type="email"
          placeholder="your.email@example.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="h-12 text-base"
          disabled={isSubmitting}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="password" className="text-base">Password</Label>
        <Input
          id="password"
          type="password"
          placeholder="Create a secure password (min. 8 characters)"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          className="h-12 text-base"
          disabled={isSubmitting}
        />
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full h-12 text-base bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Creating Account...
          </>
        ) : (
          'Create Account'
        )}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        By creating an account, you agree to our Terms & Conditions and Privacy Policy
      </p>
    </form>
  );
}
