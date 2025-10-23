import { Card } from '@/components/ui/card';
import { BookMarked, BookOpen, Library, TrendingUp } from 'lucide-react';

export function DashboardStats() {
    const stats = [
        {
            title: 'Currently Reading',
            value: '3',
            subtitle: 'books in progress',
            icon: BookOpen,
            trend: '+2 this month',
        },
        {
            title: 'Books Read',
            value: '24',
            subtitle: 'completed this year',
            icon: BookMarked,
            trend: '+5 this month',
        },
        {
            title: 'Want to Read',
            value: '47',
            subtitle: 'on your wishlist',
            icon: Library,
            trend: '+8 this month',
        },
    ];

    return (
        <div className="space-y-6">
            <div>
                <h1 className="heading-primary">Welcome</h1>
                <p className="text-muted-foreground">
                    Here's your reading overview
                </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {stats.map((stat) => {
                    const Icon = stat.icon;
                    return (
                        <Card
                            key={stat.title}
                            className="border-border bg-card p-6 transition-colors hover:bg-muted/50"
                        >
                            <div className="mb-4 flex items-start justify-between">
                                <div className="rounded-lg bg-muted p-3">
                                    <Icon className="h-5 w-5 text-accent" />
                                </div>
                                <div className="flex items-center gap-1 text-xs text-emerald-600">
                                    <TrendingUp className="h-3 w-3" />
                                    <span>{stat.trend}</span>
                                </div>
                            </div>
                            <div>
                                <p className="mb-1 text-sm text-muted-foreground">
                                    {stat.title}
                                </p>
                                <p className="mb-1 text-3xl font-bold text-foreground">
                                    {stat.value}
                                </p>
                                <p className="text-xs text-muted-foreground">
                                    {stat.subtitle}
                                </p>
                            </div>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
}
