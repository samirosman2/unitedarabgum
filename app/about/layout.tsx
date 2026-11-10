import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'عن الصمغ العربي المتحدة | About Us',
  description:
    'الصمغ العربي المتحدة (United Arab Gum LLC) شركة عُمانية تعمل في معالجة وتوريد الصمغ العربي الممتاز للأسواق العالمية.',
  openGraph: {
    title: 'عن الصمغ العربي المتحدة | About Us',
    description: 'تعرف على الصمغ العربي المتحدة ورؤيتنا في معالجة وتوريد الصمغ العربي من عُمان إلى العالم.',
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
