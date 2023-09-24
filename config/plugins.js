module.exports = ({ env }) => ({
    "vercel-deploy": {
      enabled: true,
      config: {
        deployHook:
          "https://api.vercel.com/v1/integrations/deploy/prj_LoJT1JrpSBxYA7Ppqsetz9IN4vnl/3yZNlZHTWJ",
        apiToken: "YJiQUwkO4drAN17L4xIZOd3e",
        appFilter: "tu-casa-api",
        teamFilter: "pablofuentessanz",
        roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
      },
    },
  });