import { Button } from '@/old_components/ui/button';
import { register } from '@/routes';
import { Link } from '@inertiajs/react';
import { ArrowRight } from 'lucide-react';

export function LandingCTA() {
    return (
        <section className="bg-muted/30 py-20 sm:py-32">
            <div
                data-aos="zoom-out"
                className="container mx-auto px-4 sm:px-6 lg:px-8"
            >
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="mb-6 font-serif text-4xl font-bold text-balance text-foreground sm:text-5xl">
                        Ready to Start Your Reading Journey?
                    </h2>
                    <p className="mx-auto mb-10 max-w-2xl text-lg text-pretty text-muted-foreground">
                        Join readers who are organizing their books and tracking
                        their progress with BookSafe. Completely free and
                        open-source.
                    </p>
                    <Link href={register()}>
                        <Button
                            size="lg"
                            className="cursor-pointer px-8 text-base"
                        >
                            Get Started for Free
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
