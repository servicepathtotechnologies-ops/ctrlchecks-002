import { AppBrand } from '@/components/brand/AppBrand';
import { NavLink } from '@/components/NavLink';
import ConnectionsPanel from '@/components/ConnectionsPanel';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/lib/auth';
import { useRole } from '@/hooks/useRole';
import { useTheme } from '@/hooks/useTheme';
import { cn } from '@/lib/utils';
import { Moon, Sun, Shield } from 'lucide-react';
import { USER_PRIMARY_NAV } from './nav-config';

export interface AppChromeHeaderProps {
  className?: string;
  /** Extra content on the right, before theme / user actions */
  endSlot?: React.ReactNode;
  /** When false, hides ConnectionsPanel (rare) */
  showConnections?: boolean;
  showThemeToggle?: boolean;
}

export function AppChromeHeader({
  className,
  endSlot,
  showConnections = true,
  showThemeToggle = true,
}: AppChromeHeaderProps) {
  const { user } = useAuth();
  const { canAccessAdmin } = useRole();
  const { theme, toggleTheme } = useTheme();
  return (
    <header
      className={cn(
        'border-b border-border bg-card',
        className
      )}
    >
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-3 px-4 py-3">
        <AppBrand context="app" />

        <nav
          className="order-3 flex w-full flex-wrap items-center justify-center gap-1 sm:order-none sm:flex-1 sm:justify-center lg:w-auto"
          aria-label="Main"
        >
          {USER_PRIMARY_NAV.map(({ title, path, icon: Icon }) => (
            <NavLink
              key={path}
              to={path}
              className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted/50 hover:text-foreground"
              activeClassName="bg-muted text-primary"
            >
              <Icon className="h-4 w-4 shrink-0" />
              <span className="hidden sm:inline">{title}</span>
            </NavLink>
          ))}
          {canAccessAdmin && (
            <NavLink
              to="/admin/dashboard"
              className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted/50 hover:text-foreground"
              activeClassName="bg-muted text-primary"
            >
              <Shield className="h-4 w-4 shrink-0" />
              <span className="hidden sm:inline">Admin</span>
            </NavLink>
          )}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          {endSlot}
          {showConnections && <ConnectionsPanel />}
          {showThemeToggle && (
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
              title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            >
              {theme === 'light' ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </Button>
          )}
          {user?.email && (
            <span className="hidden max-w-[160px] truncate text-xs text-muted-foreground xl:inline">
              {user.email}
            </span>
          )}
        </div>
      </div>
    </header>
  );
}
