# Using the php 7.4 fpm base image
FROM php:7.4-fpm

# Update the apt-get
RUN apt-get update && apt-get install -y \
    # Node and NPM
    nodejs \
    npm \
    # Needed for php intl extension
    zlib1g-dev \
    libicu-dev \
    g++

# install php extensions
RUN docker-php-ext-install pdo pdo_mysql pcntl intl zip

# Install composer
RUN curl -s https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Copy the source code
COPY ./backend /var/www/app/

# Default working directory
WORKDIR /var/www/app/

# Copy dependencies for npm and install
COPY ./backend/package.json /var/www
RUN npm install --production

# Copy the dependancies for composer and install
COPY ./backend/composer.json /var/www
RUN composer install --no-dev

# Default command when server starts
CMD ["php-fpm"]
