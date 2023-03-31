import { VibeType } from '@/components/ui/DropDown';
import { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { GenerateBios } from './generate-bios';
import { GeneratedBios } from './generated-bios';

export default function TwitterBio() {
  const [loading, setLoading] = useState(false);
  const [bio, setBio] = useState('');
  const [vibe, setVibe] = useState<VibeType>('Professional');
  const [generatedBios, setGeneratedBios] = useState<string>('');

  const prompt = `Generate 2 ${vibe} twitter biographies with no hashtags and clearly labeled "1." and "2.". ${
    vibe === 'Funny'
      ? "Make sure there is a joke in there and it's a little ridiculous."
      : null
  }
      Make sure each generated biography is less than 160 characters, has short sentences that are found in Twitter bios, and base them on this context: ${bio}${
    bio.slice(-1) === '.' ? '' : '.'
  }`;

  const generateBio = async (e: any) => {
    e.preventDefault();
    setGeneratedBios('');
    setLoading(true);
    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        prompt
      })
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const data = response.body;
    if (!data) {
      return;
    }

    const reader = data.getReader();
    const decoder = new TextDecoder();
    let done = false;

    while (!done) {
      const { value, done: doneReading } = await reader.read();
      done = doneReading;
      const chunkValue = decoder.decode(value);
      setGeneratedBios((prev) => prev + chunkValue);
    }

    setLoading(false);
  };

  return (
    <>
      <hr className="h-px bg-gray-700 border-1 dark:bg-gray-700" />

      <section className="relative bg-zinc-900 isolate">
        <div className="grid grid-cols-1 mx-auto max-w-7xl lg:grid-cols-2">
          <GenerateBios
            bio={bio}
            setBio={setBio}
            vibe={vibe}
            setVibe={setVibe}
            generatedBios={generatedBios}
            setGeneratedBios={setGeneratedBios}
            prompt={prompt}
            generateBio={generateBio}
            loading={loading}
          />
          <Toaster
            position="top-center"
            reverseOrder={false}
            toastOptions={{ duration: 2000 }}
          />
          <GeneratedBios generatedBios={generatedBios} toast={toast} />
        </div>
      </section>
    </>
  );
}
