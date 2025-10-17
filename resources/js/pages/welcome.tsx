import { dashboard, login, register } from '@/routes';
import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { Header } from '../components/header';
import { Hero } from '../components/hero';
import { LandingCTA } from '../components/welcome/landing-cta';
import { LandingFeatures } from '../components/welcome/landing-features';
import { LandingHeader } from '../components/welcome/landing-header';
import { LandingHero } from '../components/welcome/landing-hero';
import { BookSearch } from '@/components/book-search';
import { BookShelves } from '@/components/book-shelves';

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
