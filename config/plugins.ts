import type { Core } from '@strapi/strapi';

const config = ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Plugin => ({});

module.exports = {
  documentation: {
    enabled: true,
  },
};

export default config;
