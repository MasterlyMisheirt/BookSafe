import { dashboard, login, register } from '@/routes';
import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { LandingCTA } from '../components/landing-cta';
import { LandingFeatures } from '../components/landing-features';
import { LandingHeader } from '../components/landing-header';
import { LandingHero } from '../components/landing-hero';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Welcome" />
            <div className="min-h-screen">
                <LandingHeader />
                <main>
                    <LandingHero />
                    <LandingFeatures />
                    <LandingCTA />
                </main>
            </div>
        </>
    );
}
