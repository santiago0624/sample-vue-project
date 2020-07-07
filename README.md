# Boilerplate project for RunBuggy front-end applications

## Deployment
Make sure you modify the deployment scripts (primarily helm and Jenkins configuration) to match your project's values.
The deployment values given in this project (runbuggy-vue-boilerplate) are valid and will

## Directories

### Application
Contains application source code

See application/README.md for more details on build processes and guidelines

### Resources
Contains other files (.psd's, .mwb's, documents)

### Helm
Contains HELM configuration template. Be sure to modify templates for new projects

### Jenkins
Contains Jenkins configuration template. Be sure to modify templates for new projects

## Docker
docker-compose.yml uses production Dockerfile.
It requires the distribution build to be available under ./application/dist (see application/README.md on how to build)
