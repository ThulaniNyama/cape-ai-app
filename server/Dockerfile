# FROM php:5.6-apache
# RUN docker-php-ext-install pdo pdo_mysql
# COPY . /var/www/html
# RUN chown -R www-data:www-data /var/www
# WORKDIR /var/www/html
# COPY start-apache /usr/local/bin
# RUN a2enmod rewrite
# RUN chmod 777 /usr/local/bin/start-apache
# RUN docker-php-ext-install mysqli && docker-php-ext-enable mysqli \
#     && a2enmod headers \
#     && sed -ri -e 's/^([ \t]*)(<\/VirtualHost>)/\1\tHeader set Access-Control-Allow-Origin "*"\n\1\2/g' /etc/apache2/sites-available/*.conf
# EXPOSE 8080
# CMD ["start-apache"]
# CMD [ "php","-S", "0.0.0.0:8080" ]
FROM node
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . . 
EXPOSE 3000
CMD ["npm","start"]