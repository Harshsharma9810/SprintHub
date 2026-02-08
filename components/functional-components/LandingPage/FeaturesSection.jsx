import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { featuresData } from '../../../app/constants/LandingPageConstants/constants';

export default function FeaturesSection() {
  return (
    <section id="features" className="scroll-mt-24 bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="max-w-2xl">
          <h2 className="text-4xl font-bold text-gray-900">
            Everything you need to manage work better
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            SprintHub helps teams plan, track, and deliver work with clarity and
            confidence.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature) => {
            const Icon = feature.icon;

            return (
              <Card
                key={feature.id}
                className="group transition hover:shadow-md"
              >
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    <Icon size={26} />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
