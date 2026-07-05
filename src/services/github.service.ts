import { githubApi } from '@/services/api';
import type { GithubProfile, GithubRepo } from '@/types/github.types';

export async function fetchGithubProfile(username: string): Promise<GithubProfile> {
  const { data } = await githubApi.get<GithubProfile>(`/users/${username}`);
  return data;
}

export async function fetchGithubRepos(username: string): Promise<GithubRepo[]> {
  const { data } = await githubApi.get<GithubRepo[]>(`/users/${username}/repos`, {
    params: { sort: 'updated', per_page: 6 },
  });
  return data.filter((repo) => !repo.fork);
}
