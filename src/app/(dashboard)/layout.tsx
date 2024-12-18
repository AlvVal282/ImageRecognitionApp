// PROJECT IMPORTS
import DashboardLayout from 'layout/DashboardLayout';
import GuestGuard from 'utils/route-guard/GuestGuard';

// ==============================|| DASHBOARD LAYOUT ||============================== //

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <GuestGuard>
      <DashboardLayout>{children}</DashboardLayout>
    </GuestGuard>
  );
}
