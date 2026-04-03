import type { LucideIcon } from 'lucide-react';
import {
  LayoutDashboard,
  LayoutTemplate,
  GitBranch,
  Play,
  User,
  Shield,
  Users,
  ArrowLeft,
} from 'lucide-react';

export interface UserNavItem {
  title: string;
  path: string;
  icon: LucideIcon;
}

export const USER_PRIMARY_NAV: UserNavItem[] = [
  { title: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
  { title: 'Templates', path: '/templates', icon: LayoutTemplate },
  { title: 'Workflows', path: '/workflows', icon: GitBranch },
  { title: 'Executions', path: '/executions', icon: Play },
  { title: 'Profile', path: '/profile', icon: User },
];

export interface AdminNavItem {
  title: string;
  path: string;
  icon: LucideIcon;
}

export const ADMIN_SECTION_NAV: AdminNavItem[] = [
  { title: 'Admin home', path: '/admin/dashboard', icon: Shield },
  { title: 'Templates', path: '/admin/templates', icon: LayoutTemplate },
  { title: 'Users', path: '/admin/users', icon: Users },
];

export const ADMIN_BACK_TO_APP = {
  title: 'Back to app',
  path: '/dashboard',
  icon: ArrowLeft,
} as const;
