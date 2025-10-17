import { DashboardStats } from '@/components/dashboard/dashboard-stats';
import { RecentBooks } from '@/components/dashboard/recent-books';
import AppLayout from '@/layouts/app-layout';
import { PlaceholderPattern } from '@/old_components/ui/placeholder-pattern';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <main className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
                <DashboardStats />
                <RecentBooks />
            </main>
        </AppLayout>
    );
}
