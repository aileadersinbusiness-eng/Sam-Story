'use client';
import dynamic from 'next/dynamic';
import Navigation from '@/components/layout/Navigation';
import ScrollProgress from '@/components/ui/ScrollProgress';
import Scene1Hero from '@/components/scenes/Scene1Hero';
import Scene2HowToUse from '@/components/scenes/Scene2HowToUse';
import Scene3WhatIs from '@/components/scenes/Scene3WhatIs';
import Scene4Pricing from '@/components/scenes/Scene4Pricing';
import Scene5Surfaces from '@/components/scenes/Scene5Surfaces';
import Scene6Enterprise from '@/components/scenes/Scene6Enterprise';
import Scene7CometComputer from '@/components/scenes/Scene7CometComputer';
import Scene9Governance from '@/components/scenes/Scene9Governance';
import Scene10Workflows from '@/components/scenes/Scene10Workflows';
import Scene11WhatNext from '@/components/scenes/Scene11WhatNext';

const Scene8SonarAPI = dynamic(() => import('@/components/scenes/Scene8SonarAPI'), { ssr: false });

export default function Home() {
  return (
    <main>
      <Navigation />
      <ScrollProgress />
      <Scene1Hero />
      <Scene2HowToUse />
      <Scene3WhatIs />
      <Scene4Pricing />
      <Scene5Surfaces />
      <Scene6Enterprise />
      <Scene7CometComputer />
      <Scene8SonarAPI />
      <Scene9Governance />
      <Scene10Workflows />
      <Scene11WhatNext />
    </main>
  );
}
