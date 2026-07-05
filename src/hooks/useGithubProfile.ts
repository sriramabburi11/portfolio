import { useEffect, useState } from 'react';
import { fetchGithubProfile, fetchGithubRepos } from '@/services/github.service';
import type { GithubProfile, GithubRepo } from '@/types/github.types';

interface GithubData {
  profile: GithubProfile | null;
  repos: GithubRepo[];
  isLoading: boolean;
  error: string | null;
}

export function useGithubProfile(username: string): GithubData {
  const [profile, setProfile] = useState<GithubProfile | null>(null);
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function load() {
      setIsLoading(true);
      setError(null);
      try {
        const [profileData, repoData] = await Promise.all([
          fetchGithubProfile(username),
          fetchGithubRepos(username),
        ]);
        if (!isMounted) return;
        setProfile(profileData);
        setRepos(repoData);
      } catch {
        if (!isMounted) return;
        setError('Unable to load GitHub data right now.');
      } finally {
        if (isMounted) setIsLoading(false);
      }
    }

    load();
    return () => {
      isMounted = false;
    };
  }, [username]);

  return { profile, repos, isLoading, error };
}
