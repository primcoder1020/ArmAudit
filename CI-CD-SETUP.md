# ArmAudit CI/CD Pipeline Setup

This document provides a comprehensive guide for the CI/CD pipeline setup for the ArmAudit security dashboard application.

## 🚀 Overview

The CI/CD pipeline is built using GitHub Actions and includes:

- **Continuous Integration (CI)**: Automated testing, linting, and security scanning
- **Continuous Deployment (CD)**: Automated deployment to staging and production environments
- **Security Scanning**: Multi-layered security analysis including SAST, dependency scanning, and secret detection
- **Dependency Management**: Automated dependency updates via Dependabot

## 📁 Pipeline Structure

```
.github/
├── workflows/
│   ├── ci-cd.yml              # Main CI/CD pipeline
│   ├── security-scan.yml      # Dedicated security scanning
│   └── dependency-update.yml  # Dependency monitoring
├── dependabot.yml             # Dependabot configuration
└── CODEOWNERS                 # Code review assignments
```

## 🔧 Configuration Steps

### 1. Repository Secrets

Configure the following secrets in your GitHub repository (`Settings > Secrets and variables > Actions`):

#### Required Secrets:
```bash
SNYK_TOKEN                 # Snyk security scanning token
DOCKER_REGISTRY_TOKEN      # Container registry authentication
```

#### Optional Secrets (for external deployments):
```bash
AWS_ACCESS_KEY_ID         # AWS deployment credentials
AWS_SECRET_ACCESS_KEY     # AWS deployment credentials
AZURE_CREDENTIALS         # Azure deployment credentials
SLACK_WEBHOOK_URL         # Slack notifications
DISCORD_WEBHOOK_URL       # Discord notifications
```

### 2. Environment Variables

Create environment-specific variables in GitHub (`Settings > Environments`):

#### Staging Environment:
- `DEPLOY_URL`: https://armaudit-staging.example.com
- `DATABASE_URL`: staging database connection string
- `API_ENDPOINT`: staging API endpoint

#### Production Environment:
- `DEPLOY_URL`: https://armaudit.example.com
- `DATABASE_URL`: production database connection string
- `API_ENDPOINT`: production API endpoint

### 3. Branch Protection Rules

Configure branch protection for `main` and `develop` branches:

1. Go to `Settings > Branches`
2. Add rule for `main` branch:
   - ✅ Require status checks to pass before merging
   - ✅ Require branches to be up to date before merging
   - ✅ Required status checks:
     - `Lint and Code Quality`
     - `Build and Test`
     - `Security Scan`
   - ✅ Require pull request reviews before merging
   - ✅ Require review from code owners

## 🔄 Pipeline Workflows

### Main CI/CD Pipeline (`ci-cd.yml`)

**Triggers:**
- Push to `main` or `develop` branches
- Pull requests to `main` or `develop`
- Manual dispatch

**Jobs:**
1. **Lint and Code Quality**
   - ESLint checking
   - TypeScript type checking
   - Code formatting validation

2. **Security Scan**
   - npm audit for vulnerabilities
   - CodeQL static analysis
   - Snyk security scanning

3. **Build and Test**
   - Next.js application build
   - Artifact generation
   - Build size reporting

4. **Bundle Analysis** (PR only)
   - Bundle size analysis
   - Performance metrics

5. **Docker Build**
   - Multi-stage Docker image build
   - Push to GitHub Container Registry
   - Layer caching optimization

6. **Deploy to Staging** (`develop` branch)
   - Automated staging deployment
   - Environment health checks

7. **Deploy to Production** (`main` branch)
   - Production deployment
   - GitHub release creation
   - Rollback capabilities

### Security Scanning Pipeline (`security-scan.yml`)

**Triggers:**
- Push/PR to main branches
- Weekly scheduled scans (Sundays 2 AM UTC)
- Manual dispatch

**Security Checks:**
- **Secret Detection**: TruffleHog for exposed secrets
- **SAST**: CodeQL static application security testing
- **Dependency Scanning**: npm audit + Snyk vulnerability detection
- **License Compliance**: License checker for compliance
- **Container Security**: Trivy Docker image scanning

### Dependency Management (`dependency-update.yml`)

**Triggers:**
- Weekly scheduled (Mondays 9 AM UTC)
- Manual dispatch

**Features:**
- Security vulnerability detection
- Outdated package reporting
- Automated dependency updates via Dependabot

## 🔐 Security Features

### 1. Multi-layered Security Scanning
- **Static Analysis**: CodeQL for code quality and security issues
- **Dependency Scanning**: Regular vulnerability checks for npm packages
- **Secret Detection**: Prevents accidental exposure of API keys and tokens
- **Container Security**: Scans Docker images for vulnerabilities

### 2. Dependabot Configuration
- **Grouped Updates**: Related packages updated together
- **Security Priority**: Critical security updates prioritized
- **Version Constraints**: Major version updates controlled

### 3. License Compliance
- Automated license checking for all dependencies
- Compliance reporting and alerts

## 🚀 Deployment Strategy

### GitFlow Branching Model

```
main (production)     ──●──────●──────●──
                        │      │      │
develop (staging)   ────●──●───●──●───●──
                          │      │
feature branches    ──────●      ●──────
```

### Environment Progression

1. **Development**: Local development environment
2. **Staging**: `develop` branch → automatic deployment
3. **Production**: `main` branch → automatic deployment with approvals

### Rollback Strategy

- **Immediate**: Revert Git commit and redeploy
- **Docker**: Previous image tags available for quick rollback
- **Database**: Migration rollback procedures documented

## 📊 Monitoring and Notifications

### Health Checks
- Application health endpoint: `/api/health`
- Docker health checks configured
- Uptime monitoring integration ready

### Reporting
- Build status in GitHub Actions
- Security scan results in GitHub Security tab
- Deployment status in GitHub Environments

### Notifications (Optional Setup)
- Slack integration for deployment notifications
- Discord webhooks for team alerts
- Email notifications for security issues

## 🛠️ Local Development

### Prerequisites
```bash
# Install dependencies
npm install

# Environment setup
cp env.example .env.local
# Edit .env.local with your local configuration
```

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking
```

### Docker Development
```bash
# Build Docker image
docker build -t armaudit .

# Run container
docker run -p 3000:3000 armaudit

# Health check
curl http://localhost:3000/api/health
```

## 🔧 Customization

### Adding New Environments
1. Create environment in GitHub repository settings
2. Add environment-specific secrets and variables
3. Update workflow files with new environment conditions

### Custom Security Policies
- Modify `.github/workflows/security-scan.yml`
- Adjust security thresholds in workflow files
- Add custom security tools as needed

### Deployment Targets
- Update Docker registry in workflow
- Modify deployment steps for your infrastructure
- Configure cloud provider credentials

## 📋 Troubleshooting

### Common Issues

1. **Build Failures**
   - Check Node.js version compatibility
   - Verify all dependencies are correctly installed
   - Review build logs for specific errors

2. **Security Scan Failures**
   - Update vulnerable dependencies
   - Add exceptions for false positives
   - Review security policies

3. **Deployment Issues**
   - Verify environment variables
   - Check deployment credentials
   - Review infrastructure logs

### Getting Help

- Review GitHub Actions logs
- Check repository security alerts
- Consult the team documentation
- Contact DevOps team for infrastructure issues

## 📈 Best Practices

1. **Security First**: Never bypass security checks
2. **Review Code**: All changes require peer review
3. **Test Thoroughly**: Comprehensive testing before merging
4. **Monitor Continuously**: Regular monitoring of deployments
5. **Document Changes**: Update documentation with significant changes

## 🔄 Maintenance

### Regular Tasks
- Weekly review of security scan results
- Monthly dependency update review
- Quarterly pipeline optimization review
- Annual security policy review

### Updates
- Keep GitHub Actions up to date
- Update security scanning tools regularly
- Review and update environment configurations

---

## 📞 Support

For questions or issues with the CI/CD pipeline:

1. Check this documentation first
2. Review GitHub Actions logs
3. Create an issue in the repository
4. Contact the DevOps team

**Pipeline Version**: 1.0.0  
**Last Updated**: $(date)  
**Maintained by**: DevOps Team 