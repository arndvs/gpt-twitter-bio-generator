import * as React from 'react';
import type { FC } from 'react';

interface Props {
  generatedBios: string;
  toast: (message: string, options: { icon: string }) => void;
}

export const GeneratedBios: FC<React.PropsWithChildren<Props>> = (props) => {
  const { generatedBios, toast } = props;
  return (
    <>
      <div className="px-6 pt-20 pb-24 sm:pb-32 lg:py-48 lg:px-8">
        <div className="max-w-xl mx-auto lg:mr-0 lg:max-w-lg">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Your generated bios
          </h2>
          <div className="my-10 space-y-10">
            {generatedBios && (
              <>
                <div className="flex flex-col items-center justify-left max-w-xl mx-auto space-y-8">
                  {generatedBios
                    .substring(generatedBios.indexOf('1') + 3)
                    .split('2.')
                    .map((generatedBio) => {
                      return (
                        <div
                          className="p-4 transition bg-zinc-800/70 border shadow-md  rounded-xl hover:bg-zinc-800/20 cursor-copy"
                          onClick={() => {
                            navigator.clipboard.writeText(generatedBio);
                            toast('Bio copied to clipboard', {
                              icon: '✂️'
                            });
                          }}
                          key={generatedBio}
                        >
                          <p>{generatedBio}</p>
                        </div>
                      );
                    })}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
