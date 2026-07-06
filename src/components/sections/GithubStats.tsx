import { motion } from 'framer-motion';
import { ExternalLink, Star, GitFork, BookMarked } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Spinner } from '@/components/ui/Spinner';
import { useGithubProfile } from '@/hooks/useGithubProfile';
import { GITHUB_USERNAME } from '@/constants/site';

export function GithubStats() {
  const { profile, repos, isLoading, error } = useGithubProfile(GITHUB_USERNAME);

  return (
    <section id="github" className="scroll-mt-24 py-24">
      <Container>
        <SectionHeading
          index="06 github"
          title="GitHub Activity"
          description="Live data pulled from the GitHub public API."
        />

        <div className="mt-10">
          {isLoading && (
            <Card className="flex items-center gap-3 text-sm text-ink-400">
              <Spinner /> Loading GitHub data…
            </Card>
          )}

          {!isLoading && error && (
            <Card className="text-sm text-ink-400">
              {error} You can still view the profile directly on{' '}
              <a
                href={`https://github.com/${GITHUB_USERNAME}`}
                target="_blank"
                rel="noreferrer"
                className="text-accent-400 hover:underline"
              >
                GitHub
              </a>
              .
            </Card>
          )}

          {!isLoading && !error && profile && (
            <div className="grid gap-6 lg:grid-cols-3">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45 }}
                className="lg:col-span-1"
              >
                <Card className="flex h-full flex-col items-center text-center">
                  <img
                    src={profile.avatar_url}
                    alt={`${profile.login} avatar`}
                    className="h-20 w-20 rounded-full border border-navy-600/70"
                    loading="lazy"
                  />
                  <h3 className="mt-4 text-base font-semibold text-ink-50">
                    {profile.name ?? profile.login}
                  </h3>
                  <p className="font-mono text-xs text-ink-500">@{profile.login}</p>

                  <div className="mt-5 grid w-full grid-cols-3 gap-2 border-t border-navy-700/70 pt-5 text-center">
                    <div>
                      <p className="text-sm font-semibold text-ink-100">
                        {profile.public_repos}
                      </p>
                      <p className="text-[11px] text-ink-500">Repos</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-ink-100">
                        {profile.followers}
                      </p>
                      <p className="text-[11px] text-ink-500">Followers</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-ink-100">
                        {profile.following}
                      </p>
                      <p className="text-[11px] text-ink-500">Following</p>
                    </div>
                  </div>

                  <a
                    href={profile.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 font-mono text-xs text-accent-400 hover:underline"
                  >
                    View profile <ExternalLink size={12} />
                  </a>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: 0.1 }}
                className="lg:col-span-2"
              >
                <Card className="h-full">
                  <p className="eyebrow flex items-center gap-2">
                    <BookMarked size={12} /> recently updated repositories
                  </p>
                  {repos.length === 0 ? (
                    <p className="mt-4 text-sm text-ink-400">
                      No public repositories to show yet.
                    </p>
                  ) : (
                    <ul className="mt-4 divide-y divide-navy-700/60">
                      {repos.slice(0, 6).map((repo) => (
                        <li key={repo.id} className="flex items-center justify-between py-3">
                          <div className="min-w-0">
                            <a
                              href={repo.html_url}
                              target="_blank"
                              rel="noreferrer"
                              className="truncate text-sm font-medium text-ink-100 hover:text-accent-400"
                            >
                              {repo.name}
                            </a>
                            {repo.description && (
                              <p className="mt-0.5 truncate text-xs text-ink-500">
                                {repo.description}
                              </p>
                            )}
                          </div>
                          <div className="ml-4 flex flex-shrink-0 items-center gap-3 text-xs text-ink-500">
                            {repo.language && <span>{repo.language}</span>}
                            <span className="flex items-center gap-1">
                              <Star size={12} /> {repo.stargazers_count}
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </Card>
              </motion.div>
            </div>
          )}

          <Card className="mt-6 flex items-center gap-3 text-xs text-ink-500">
            <GitFork size={14} className="flex-shrink-0" />
            Contribution graph placeholder — swap in a calendar heatmap once a
            GitHub token-backed endpoint is available.
          </Card>
        </div>
      </Container>
    </section>
  );
}
