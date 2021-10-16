import type { Application } from 'express';

export default async ({
  expressApp: app,
  loaders
}: {
  expressApp: Application;
  loaders: Promise<void>;
}) => {
  await loaders;

  return app;
};
