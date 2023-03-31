import * as React from 'react';
import type { FC } from 'react';
import DropDown, { VibeType } from '@/components/ui/DropDown';
import LoadingDots from '@/components/ui/LoadingDots';
import Image from 'next/image';

import { Toaster, toast } from 'react-hot-toast';

interface Props {
  bio: string;
  setBio: (bio: string) => void;
  vibe: VibeType;
  setVibe: (vibe: VibeType) => void;
  generatedBios: string;
  setGeneratedBios: (generatedBios: string) => void;
  prompt: string;
  generateBio: (e: any) => Promise<void>;
  loading: boolean;
}

export const GenerateBios: FC<React.PropsWithChildren<Props>> = (props) => {
  const {
    bio,
    setBio,
    vibe,
    setVibe,
    generatedBios,
    setGeneratedBios,
    prompt,
    generateBio,
    loading
  } = props;
  return (
    <>
      <div className="relative px-6 pt-24 pb-20 sm:pt-32 lg:static lg:py-48 lg:px-8">
        <div className="max-w-xl mx-auto lg:mx-0 lg:max-w-lg">
          <div className="absolute inset-y-0 left-0 w-full overflow-hidden -z-10 ring-1 ring-white/5 lg:w-1/2">
            <svg
              className="absolute inset-0 h-full w-full stroke-gray-700 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2"
                  width={200}
                  height={200}
                  x="100%"
                  y={-1}
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M130 200V.5M.5 .5H200" fill="none" />
                </pattern>
              </defs>
              <svg
                x="100%"
                y={-1}
                className="overflow-visible fill-gray-800/20"
              >
                <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
              </svg>
              <rect
                width="100%"
                height="100%"
                strokeWidth={0}
                fill="url(#54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2)"
              />
            </svg>
            <svg
              className="absolute top-[calc(100%-13rem)] -left-56 w-[72.1875rem] transform-gpu blur-3xl lg:top-[calc(50%-7rem)] lg:left-[max(-14rem,calc(100%-59rem))]"
              viewBox="0 0 1155 678"
              aria-hidden="true"
            >
              <path
                fill="url(#0a9a5302-e517-46c6-85f0-d826aa6a313e)"
                fillOpacity=".2"
                d="M317.219 159.025 203.852 0 0 239.659l317.219-80.634 204.172 286.402c1.307-132.337 45.083-346.658 209.733-145.248C936.936 551.942 882.053 772.234 1031.02 636.67c119.18-108.452 130.68-295.338 121.53-375.224L855 379l21.173-362.054-558.954 142.079Z"
              />
              <defs>
                <linearGradient
                  id="0a9a5302-e517-46c6-85f0-d826aa6a313e"
                  x1="1155.49"
                  x2="-78.208"
                  y1="677.823"
                  y2="203.355"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#4F46E5" />
                  <stop offset={1} stopColor="#80CAFF" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Twitter Bio Generator
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-400">
            Generate your next Twitter bio using chatGPT
          </p>
          <dl className="mt-10 space-y-4 text-base leading-7 text-gray-400">
            <div className="w-full max-w-xl">
              <div className="flex items-center mt-10 space-x-3">
              <div
          className="bg-white -mr-2 p-2 flex w-6 h-6 items-center justify-center font-bold rounded-full text-black"
        >
          1
        </div>
                <p className="pl-2 font-medium text-left">
                Write a few sentences about yourself.
                </p>
              </div>
              <textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                rows={4}
                className="w-full my-5 rounded-md shadow-sm border-slate-500/30 bg-zinc-900/70 text-slate-50 focus:border-black focus:ring-black"
                placeholder={
                  'e.g. Senior Developer Advocate @vercel. Tweeting about web development, AI, and React / Next.js. Writing nutlope.substack.com.'
                }
              />
              <div className="flex items-center mb-5 space-x-3">
              <div
          className="bg-white -mr-2 p-2 flex w-6 h-6 items-center justify-center font-bold rounded-full text-black"
        >
          2
        </div>
        <p className="pl-2 font-medium text-left">Select your vibe.</p>
              </div>
              <div className="block">
                <DropDown vibe={vibe} setVibe={(newVibe) => setVibe(newVibe)} />
              </div>

              {!loading && (
                <button
                  className="w-full px-4 py-2 mt-8 font-medium text-white bg-zinc-900 rounded-xl sm:mt-10 hover:bg-zinc-900/80"
                  onClick={(e) => generateBio(e)}
                >
                  Generate your bio &rarr;
                </button>
              )}
              {loading && (
                <button
                  className="w-full px-4 py-2 mt-8 font-medium text-white bg-zinc-900 rounded-xl sm:mt-10 hover:bg-zinc-900/80"
                  disabled
                >
                  <LoadingDots color="white" style="large" />
                </button>
              )}
            </div>
          </dl>
        </div>
      </div>
    </>
  );
};
