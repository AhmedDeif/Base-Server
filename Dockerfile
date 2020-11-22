## THIS IMAGE IS FOLLOWING: https://github.com/nodejs/docker-node/blob/master/README.md#best-practices

################################################################################
### Base Image - only dependencies                                           ###
################################################################################

FROM node:carbon as base-image

# LABEL   application_name="App-Name"
ENV     APP_PORT 8080
ENV     NODE_ENV production
ENV     NODE_APP_DIR /home/node/app

RUN     mkdir -p $NODE_APP_DIR

WORKDIR ${NODE_APP_DIR}

COPY    --chown=node:node ./package*.json $NODE_APP_DIR/
COPY    --chown=node:node ./entrypoint.sh $NODE_APP_DIR/
COPY    --chown=node:node ./.babelrc $NODE_APP_DIR/
# COPY    --chown=ndoe:node ./.npmrc ${NODE_APP_DIR}/
# COPY    --chown=node:node ./eslintrc.js ${NODE_APP_DIR}/
# COPY    --chown=node:node ./jest.config.js ${NODE_APP_DIR}/
# COPY    --chown=node:node ./jest.setup.js $NODE_APP_DIR/

RUN     npm config set depth 0 \
        && npm ci --only=production


RUN     chown -R node:node $NODE_APP_DIR

USER    node
EXPOSE  ${APP_PORT}


################################################################################
### Dependencies Image                                                       ###
################################################################################
FROM base-image as dependencies

# COPY    --chown=node:node src/ $NODE_APP_DIR/src


################################################################################
### DEV Image                                                       ###
################################################################################
FROM dependencies as developer

# LABEL   application_name="App-Name"
ENV     NODE_ENV development

# COPY    --chown=node:node .env $NODE_APP_DIR/

# Run code style check
RUN     npm install
# RUN     npm run-script pre-test
# RUN     npm test


################################################################################
### Prod Image                                                       ###
################################################################################
FROM dependencies as production

# LABEL   application_name="App-Name"

# ENV     NODE_ENV production

CMD     ["npm","start"]
