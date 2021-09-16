module.exports = {
  dryRun: false,
  username: 'ghe',
  onboarding: false,
  endpoint: 'https://github.ideintheclouds.com/api/v3/',
  platform: 'github',
  includeForks: true,
  repositories: [
    'ironclad/ironclad'
  ],
  packageRules: [
    {
      description: 'lockFileMaintenance',
      matchFiles: ['requirements.txt'],
      matchUpdateTypes: [
        'pin',
        'digest',
        'patch',
        'minor',
        'major',
        'lockFileMaintenance',
      ],
      dependencyDashboardApproval: false,
      stabilityDays: 0,
    },
  ],
};
