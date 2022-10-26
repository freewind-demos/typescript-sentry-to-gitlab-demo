import * as Sentry from '@sentry/node';

Sentry.init({
  // gitlab repo: https://gitlab.com/nowind_lee/test-githab-api
  dsn: 'https://glet_e7491e93f6cc54cbe66498baedce37f1@observe.gitlab.com:443/errortracking/api/v1/projects/40529983',
})

Sentry.captureException(new Error(`Hello on ${Date.now()}`));
